import axios from 'axios'
import { homeTypes, sortTypes } from '../constants/action.types'
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
export const setSortType = (sortType) => async (dispatch, getState) => {
    dispatch(setPage(1))
    let sorttype = 'release_date'
    let sortorder = '-1'
    if (sortType === sortTypes.SORT_DAY_DECREASED) {
        sorttype = 'release_date'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_DAY_INCREASED) {
        sorttype = 'release_date'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_PRICE_DECREASED) {
        sorttype = 'price'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_PRICE_INCREASED) {
        sorttype = 'price'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_SALES_DECREASED) {
        sorttype = 'sales'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_SALES_INCREASED) {
        sorttype = 'sales'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_VIEWS_DECREASED) {
        sorttype = 'view_counts'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_VIEWS_INCREASED) {
        sorttype = 'view_counts'
        sortorder = '1'
    }
    dispatch(setSort(sortType, sortorder))

    let res
    try {
        res = await axios.post('http://localhost:8080/book/allbook', {
            page: 1,
            range: getState().homeReducers.book.range,
            sorttype: sorttype,
            sortorder: sortorder
        })
    }
    catch (err) {
        return
    }
    dispatch(setBook(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
}
export const setSort= (sortType) => ({
    type: homeTypes.SET_SORT_TYPE,
    sortType
})
export const setRangeType = (range) => async (dispatch, getState) => {
    dispatch(setPage(1))
    let sorttype = 'release_date'
    let sortorder = '-1'
    let sortType = getState().homeReducers.book.sortType
    if (sortType === sortTypes.SORT_DAY_DECREASED) {
        sorttype = 'release_date'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_DAY_INCREASED) {
        sorttype = 'release_date'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_PRICE_DECREASED) {
        sorttype = 'price'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_PRICE_INCREASED) {
        sorttype = 'price'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_SALES_DECREASED) {
        sorttype = 'sales'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_SALES_INCREASED) {
        sorttype = 'sales'
        sortorder = '1'
    } else if (sortType === sortTypes.SORT_VIEWS_DECREASED) {
        sorttype = 'view_counts'
        sortorder = '-1'
    } else if (sortType === sortTypes.SORT_VIEWS_INCREASED) {
        sorttype = 'view_counts'
        sortorder = '1'
    }
    let res
    try {
        res = await axios.post('http://localhost:8080/book/allbook', {
            page: 1,
            range: range,
            sorttype: sorttype,
            sortorder: sortorder
        })
    }
    catch (err) {
        return
    }
    dispatch(setRange(range))
    dispatch(setBook(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
} 

export const setRange = (range) => ({
    type: homeTypes.SET_RANGE,
    range
})
 export const setBranch = (branch) => ({
     type: homeTypes.SET_BRANCH_SEARCH_BOOK,
     branch
 })
 export const setTitle = (title) => ({
     type: homeTypes.SET_NAME_TITLE_ITEM, 
     title
 })