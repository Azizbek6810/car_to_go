import {
    ORDER_POST_START, ORDER_POST_ERROR, ORDER_POST_SUCCESS, ORDER_GET_START, ORDER_GET_SUCCESS
} from '../constant/constants'

const initialValue = {
    loading: false,
    isError: false,
    orderStatus: '',
    orderData: []
}

const carReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ORDER_POST_START:
            return {
                ...state,
                loading: true,
                isError: false,
                orderStatus: ''
            }
        case ORDER_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                orderStatus: action.payload
            }
        case ORDER_POST_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                orderStatus: ''
            }
        case ORDER_GET_START:
            return {
                ...state,
                loading: true,
                isError: false,
                orderStatus: '',
            }
        case ORDER_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                orderStatus: '',
                orderData: action.payload
            }
        case ORDER_GET_ERROR:
            return {
                ...state,
                loading: false,
                isError: false,
                orderStatus: '',
                orderData: []
            }
        default:
            return state
    }
}

export default carReducer