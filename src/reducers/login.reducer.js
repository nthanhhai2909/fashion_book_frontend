import { loginTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
const initial = {
    email: null,
    islogin: false
}

const login = (state = initial, action) => {
    switch(action.type) {
        case loginTypes.SET_EMAIL_LOGIN: {
            return {
                ...state,
                email: action.email,
            }
        }
        case loginTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                islogin: true
            }
        }
        case loginTypes.LOGIN_FAIL: {
            return {
                ...state,
                islogin: false
            }
        }
        default: {
            return state
        }
    }
}
export default combineReducers({
    login
})