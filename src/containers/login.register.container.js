import React, { Component} from 'react'
import LoginRegister from '../components/login.register/login.register'
class LoginRegisterContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            emailLogin: '',
            passwordLogin: '',
            email: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            password: '',
            confirm: ''
        }
    }
    render(){
        return(
            <div>
                <LoginRegister
                />
            </div>
        )
        
    }
}
export default LoginRegisterContainer