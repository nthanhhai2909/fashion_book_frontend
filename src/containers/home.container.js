import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Home from '../components/home/home'
import storeConfig from '../config/storage.config'
import * as LoginActions from '../actions/login.action'
class HomeContainer extends React.Component {
    componentWillMount() {
        this.props.actions.auth()
    }
    render() {
        return (
            <div>
                <Home
                    islogin={this.props.islogin}
                    logout={() => this.props.actions.logout()}
                />
            </div>
        )

    }
}
const mapStateToProps = state => ({
    islogin: state.loginReducers.login.islogin
})

const mapDispatchToProps = dispatch =>{
    return ({
        actions: bindActionCreators(LoginActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)