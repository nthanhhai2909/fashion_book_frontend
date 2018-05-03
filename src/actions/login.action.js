import { loginTypes } from '../constants/action.types'
import storeConfig from '../config/storage.config'
import axios from 'axios'
export const loginSuccess = (email, token) => (dispatch, getState) => {
    storeConfig.setToken(token)
    storeConfig.setEmail(email)
    dispatch(setEmail(email))
}

export const auth = () => async (dispatch, getState)  => {
    
    let email = storeConfig.getEmail()
    let token = storeConfig.getToken()
    let res
    try {
        res = await axios.post('http://localhost:8080/auth', {
            email: email,
            token: token,
        })
    }
    catch (err) {
        dispatch(setLoginFail())
        return
    }
    dispatch(setLoginSuccess())
}

export const logout = () => (dispatch, getState) => {
    storeConfig.removeEmail()
    storeConfig.removeToken()
    dispatch(setLoginFail())
}
export const setEmail = (email) => ({
    type: loginTypes.SET_EMAIL_LOGIN,
    email,
})

export const setLoginSuccess = () => ({
    type: loginTypes.LOGIN_SUCCESS
})
export const setLoginFail = () => ({
    type: loginTypes.LOGIN_FAIL
})

