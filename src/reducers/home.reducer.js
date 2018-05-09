import { homeTypes, sortTypes } from '../constants/action.types'
import { combineReducers } from 'redux'

const category = (state = { data: [] }, action) => {
    switch (action.type) {
        case homeTypes.SET_CATEGORY_BOOK: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
const publisher = (state = { data: [] }, action) => {
    switch (action.type) {
        case homeTypes.SET_PUBLISHSER: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}

const book = (state = { data: [], page: 1, totalpage: null, sortType: sortTypes.SORT_DAY_DECREASED }, action) => {
    switch (action.type) {
        case homeTypes.SET_BOOK: {
            return {
                ...state,
                data: action.data
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
        case homeTypes.SET_SORT_TYPE: {
            return {
                ...state,
                sortType: action.sortType
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