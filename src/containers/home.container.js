import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Home from '../components/home/home'
import * as userActions from '../actions/user.action'
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
    islogin: state.userReducers.login.islogin
})

const mapDispatchToProps = dispatch =>{
    return ({
        actions: bindActionCreators(userActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)