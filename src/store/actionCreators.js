import {CHANGE_CURRENCY, HANDLE_COUNT_PRODUCT} from './actions'
import {BUY_PRODUCT} from './actions'
import {DELETE_PRODUCT} from './actions'
import {INCREMENT_PRODUCT} from './actions'
import {DECREMENT_PRODUCT} from './actions'

export const createChangeCurrency = (payload) => {
    return {
        type: CHANGE_CURRENCY,
        payload,
    }
}
export const createBuyProduct = (payload) => {
    return {
        type: BUY_PRODUCT,
        payload,
    }
}
export const createDeleteProduct = (payload) => {
    return {
        type: DELETE_PRODUCT,
        payload,
    }
}
export const createIncrementProduct = (payload) => {
    return {
        type: INCREMENT_PRODUCT,
        payload,
    }
}
export const createDecrementProduct = (payload) => {
    return {
        type: DECREMENT_PRODUCT,
        payload,
    }
}
export const createHandleCount = (payload) => {
    return {
        type: HANDLE_COUNT_PRODUCT,
        payload,
    }
}
