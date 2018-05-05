import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Home from '../components/home/home'
import * as userActions from '../actions/user.action'
import * as homeActions from '../actions/home.action'
class HomeContainer extends React.Component {
    componentWillMount() {
        this.props.actions.auth()
        this.props.homeActions.getCategory()
        this.props.homeActions.getPublisher()
    }
    render() {
        return (
            <div>
                <Home
                    islogin={this.props.islogin}
                    logout={() => this.props.actions.logout()}
                    category={this.props.category}
                    publisher={this.props.publisher}
                />
            </div>
        )

    }
}
const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
    category: state.homeReducers.category.data,
    publisher: state.homeReducers.publisher.data
})

const mapDispatchToProps = dispatch =>{
    return ({
        actions: bindActionCreators(userActions, dispatch),
        homeActions: bindActionCreators(homeActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer)