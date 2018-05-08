import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Profile from '../components/profile/profile'
import * as userActions from '../actions/user.action'
import * as profileActions from '../actions/profile.action'
import Notfound from '../components/404/404'
class ProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount() {
        this.props.actions.auth()
    }

    render() {
        if(this.props.islogin) {
            return (
                <div>
                    <Profile
                        islogin={this.props.islogin}
                        logout={() => this.props.actions.logout()}
                    />
                </div>
            )
        } else {
            return (
                <Notfound/>
            )
        }
    }
}
const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
        profileActions: bindActionCreators(profileActions, dispatch)
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer)