import { combineReducers } from 'redux'
import userReducers from './user.reducer'
import homeReducers from './home.reducer'
export default combineReducers({
    userReducers,
    homeReducers
})