import axios from 'axios'
import storeConfig from '../config/storage.config'
import { purchaseHistoryTypes } from '../constants/action.types'
export const setPurchaseHistory = (data) => ({
    type: purchaseHistoryTypes.SET_PURCHASED_HISTORY,
    data
})
export const getPurchaseHitory = () => async (dispatch, getState) => {
    
}