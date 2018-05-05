import { homeTypes } from '../constants/action.types'
import { combineReducers } from 'redux'

const category = (state = {data: [] }, action) => {
    switch(action.type) {
        case homeTypes.SET_CATEGORY_BOOK: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
const publisher = (state = {data: []}, action) => {
    switch(action.type) {
        case homeTypes.SET_PUBLISHSER: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
export default combineReducers({
    category,
    publisher
})