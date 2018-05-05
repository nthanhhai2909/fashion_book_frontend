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
const book = (state = {data: [], page: 1, totalpage: null}, action) => {
    switch(action.type) {
        case homeTypes.SET_BOOK: {
            if(state.page > 1){
                return {
                    ...state,
                    data: [...state.data, action.data]
                }
            }
            else {
                return {
                    ...state,
                    data: action.data
                }
            }
            
        }
        case homeTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case homeTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
export default combineReducers({
    category,
    publisher,
    book
})