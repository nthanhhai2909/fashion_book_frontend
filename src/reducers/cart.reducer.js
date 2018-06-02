import { cartTypes} from '../constants/action.types'
import { combineReducers } from 'redux'
const cart = (state = { data: [], city: [], district: [], ward: []}, action) => {
    switch(action.type) {
        case cartTypes.SET_CART: {
            return {
                ...state,
                data: action.data
            }
        }
        case cartTypes.SET_CITY: {
            return {
                ...state,
                city: action.data
            }
        }
        case cartTypes.SET_DICTRICT: {
            return {
                ...state,
                district: action.data
            }
        }
        case cartTypes.SET_WARD: {
            return {
                ...state,
                ward: action.data
            }
        }
        default: return state
    }
}
export default combineReducers({
    cart
})