import axios from 'axios'
import { productTypes } from '../constants/action.types'

export const getBookDetail = (id) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/book/' + id)
    }
    catch (err) {
        return
    }
    dispatch(setProductDetail(res.data.data))
}
export const getNameCategoryByID = (id) => async (dispatch) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/category/name/' + id)
    }
    catch (err) {
        return
    }
    dispatch(setNameCategory(res.data.name))
}
export const setProductDetail = (productDetail) => ({
    type: productTypes.SET_PRODUCT_DETAIL,
    productDetail
})
export const setNameCategory = (name) => ({
    type: productTypes.SET_NAME_CATEGORY,
    name
})