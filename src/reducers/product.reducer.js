import { userTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
import { productTypes} from '../constants/action.types'
const product = (state = {productDetail: null}, action) => {
    switch (action.type) {
        case productTypes.SET_PRODUCT_DETAIL: {
            return {
                ...state,
                productDetail: action.productDetail
            }
        }
        case productTypes.SET_NAME_CATEGORY: {
            return {
                ...state,
                nameCategory: action.name
            }
        }
        default: return state
    }
}
export default combineReducers({
    product,
})