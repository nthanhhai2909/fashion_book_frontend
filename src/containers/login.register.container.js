import React, { Component} from 'react'
import axios from 'axios'
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
            confirm: '',
            notificationRegister: '',
            notificationLogin: ''
        }
    }
    isvalidPassword = (password) => {
        if(password.length < 6)
            return false
        return true
    }
    isvalidConfirm = (password, confirm) => {
        if(confirm != password)
            return false
        return true
    }
    isvalidEmail = (email) => {
        if(email === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1)
            return false
        return true
    }
    registerSubmit = async () => {
        if(!this.isvalidEmail(this.state.email)) {
            this.setState({notificationRegister: "Email invalid"})
            return
        } else {
            this.setState({notificationRegister: ''})
        }
        if(!this.isvalidPassword(this.state.password)) {
            this.setState({notificationRegister: 'Password invalid'})
            return
        } else {
            this.setState({notificationRegister: ''})
        }
        if(!this.isvalidConfirm(this.state.password, this.state.confirm)) {
            this.setState({notificationRegister: 'Confirm invalid'})
            return
        } else {
            this.setState({notificationRegister: ''})
        }
        let res = null
        try {
            res = await axios.post('http://localhost:8080/user/register',{
                email: this.state.email, 
                password: this.state.password,
                firstName: this.state.firstname,
                lastName: this.state.lastname, 
                address: this.state.address,
                phone_number: this.state.phone
            })
        }
        catch(err) {
            console.log(err.response)
            if(err.response.data.msg === "Email already exist")
                 this.setState({notificationRegister: 'Email already exist'})
            else
                this.setState({notificationRegister: 'Register unsuccessful'})
            return
        }
        this.setState({notificationRegister: 'Register success'})
    }

    loginSubmit = async () => {
        if(!this.isvalidEmail(this.state.emailLogin)) {
            this.setState({notificationLogin: "Email invalid"})
            return
        } else {
            this.setState({notificationLogin: ''})
        }

        let res = null
        try {
            res = await axios.post('http://localhost:8080/user/login',{
                email: this.state.emailLogin, 
                password: this.state.passwordLogin,
            })
        }
        catch(err) {
            if(err.response.data.msg === "no_registration_confirmation")
                 this.setState({notificationLogin: 'The account has not been activated'})
            else {
                this.setState({notificationLogin: 'Email or password invalid'})
                
            }
            return
        }
        this.props.history.push('/')

    }
    render(){
        return(
            <div>
                <LoginRegister
                setEmailogin={(value) => this.setState({emailLogin: value})}
                setPasswordlogin={(value) => this.setState({passwordLogin: value})}
                setEmail={(value) => this.setState({email: value})}
                setFirstname={(value) => this.setState({firstname: value})}
                setLastname={(value) => this.setState({lastname: value})}
                setAddress={(value) => this.setState({address: value})}
                setPhone={(value) => this.setState({phone: value})}
                notificationRegister={this.state.notificationRegister}
                notificationLogin={this.state.notificationLogin}
                setPassword={(value) => this.setState({password: value})} 
                setConfirm={(value) => this.setState({confirm: value})}
                registerSubmit={() => this.registerSubmit()}
                loginSubmit={() => this.loginSubmit()}
                />
            </div>
        )
        
    }
}
export default LoginRegisterContainer