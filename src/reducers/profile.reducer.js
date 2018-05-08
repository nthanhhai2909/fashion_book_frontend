
import { combineReducers } from 'redux'
import { profileTypes } from '../constants/action.types'
const profile = (state = {}, action) => {
    switch(action.type) {
        case profileTypes.SET_AUTH_LOGIN_SUCCESS: {
            return {
                ...state,
                isauth: true
            }
        }
        case profileTypes.SET_AUTH_LOGIN_FAIL: {
            return {
                ...state,
                isauth: false
            }
        }
        default: return state
    }
}
export default combineReducers({
    profile,
})