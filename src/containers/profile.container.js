import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Profile from '../components/profile/profile'
import * as userActions from '../actions/user.action'
class ProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Profile
                    islogin={this.props.islogin}
                    logout={() => this.props.actions.logout()}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    islogin: state.userReducers.login.islogin,
})

const mapDispatchToProps = dispatch => {
    return ({
        actions: bindActionCreators(userActions, dispatch),
    })
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer)