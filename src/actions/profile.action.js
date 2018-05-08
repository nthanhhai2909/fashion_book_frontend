import axios from 'axios'
import storeConfig from '../config/storage.config'
import { profileTypes } from '../constants/action.types'
export const auth = () => async (dispatch, getState) => {
    if(storeConfig.getUser() === null){
        dispatch(setAuthFail())
        return
    }
    const user = storeConfig.getUser()
    try {
        await axios.post('http://localhost:8080/auth', {
            email: user.email,
            token: storeConfig.getToken(),
        })
    }
    catch (err) {
        dispatch(setAuthFail())
        return
    }
    dispatch(setAuthSuccess())
}
export const setAuthSuccess = () => ({
    type: profileTypes.SET_AUTH_LOGIN_SUCCESS
})
export const setAuthFail = () => ({
    type: profileTypes.SET_AUTH_LOGIN_FAIL
})