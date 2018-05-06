import axios from 'axios'
import { homeTypes } from '../constants/action.types'

export const getCategory = () => async (dispatch, getState) =>  {
    let res
    try {
        res = await axios.get('http://localhost:8080/category/all')
    }
    catch (err) {
        return
    }

    dispatch(setCategory(res.data.data))
}

export const getPublisher = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/publisher/all')
    }
    catch (err) {
        return
    }
    dispatch(setPublisher(res.data.data))
}

export const getBook = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/book/allbook', {
            page: getState().homeReducers.book.page,
            range: null
        })
    }
    catch (err) {
        return
    }
    dispatch(setBook(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
}

export const setBook = (data) => ({
    type: homeTypes.SET_BOOK,
    data
})
export const setPage = (page) => ({
    type: homeTypes.SET_PAGE,
    page
})
export const setTotalPage = (totalpage) => ({
    type: homeTypes.SET_TOTAL_PAGE,
    totalpage
})
export const setCategory = (data) => ({
    type: homeTypes.SET_CATEGORY_BOOK,
    data
})

export const setPublisher = (data) => ({
    type: homeTypes.SET_PUBLISHSER,
    data
})

export const backPage = () => (dispatch, getState) => {
    let page = getState().homeReducers.book.page
    if(page > 1) {
        dispatch(setPage(parseInt(page) - 1))
    }
}

export const nextPage = () => (dispatch, getState) => {
    let page = getState().homeReducers.book.page
    let totalpage = getState().homeReducers.book.totalpage
    if(page < totalpage) {
        dispatch(setPage(parseInt(page) + 1))
    }
}