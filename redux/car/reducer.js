import {
    CAR_START, CAR_SUCCESS, CAR_ERROR
} from '../constant/constants'

const initialValue = {
    loading: false,
    isError: false,
    carData: []
}

const carReducer = (state = initialValue, action) => {
    switch (action.type) {
        case CAR_START:
            return {
                ...state,
                loading: true,
                isError: false,
                carData: []
            }
        case CAR_SUCCESS:
            return {
                ...state,
                loading: false,
                isError: false,
                carData: action.payload
            }
        case CAR_ERROR:
            return {
                ...state,
                loading: false,
                isError: true,
                carData: []
            }
        default:
            return state
    }
}

export default carReducer