import {cartTypes } from '../constants/action.types'
import axios from 'axios'
import storeConfig from '../config/storage.config'
export const setCart = (data) => ({
    type: cartTypes.SET_CART,
    data
})
export const getCart = () => async (dispatch, getState) => {
    let cart = null
    cart = storeConfig.getCart()
    if(cart !== null) {
        dispatch(setCart(cart))
        return
    }
    if(storeConfig.getUser() === null)
        return
    let id_user = storeConfig.getUser().id
    try{
         cart = await axios.get('http://localhost:8080/cart/' + id_user)
    }
    catch(err) {
        console.log(err)
        return
    }
    dispatch(setCart(cart.data.data.products))
}
export const updateProductInCart = (product) => async (dispatch, getState) => {
    if (!getState().userReducers.login.islogin) {
        storeConfig.updateProductInCart(product)
        dispatch(getCart())
    }
    else {
        console.log('hihi chua lam')
    }
}