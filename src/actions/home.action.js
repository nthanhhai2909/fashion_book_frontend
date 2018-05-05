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
export const setCategory = (data) => ({
    type: homeTypes.SET_CATEGORY_BOOK,
    data
})

export const setPublisher = (data) => ({
    type: homeTypes.SET_PUBLISHSER,
    data
})