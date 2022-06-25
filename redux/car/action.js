import axios from "axios";
import {
    CAR_START, CAR_SUCCESS, CAR_ERROR, SUCCESS_STATUS, ERROR_STATUS
} from '../constant/constants'
import {BaseUrl, car} from '../../api/api'

export const getCar = () => async dispatch => {
    dispatch({type: CAR_START})
    try {
        const res = await axios.get(BaseUrl + car);
        if(res.status===200){
            dispatch({type: CAR_SUCCESS, payload: res.data})
        }
    } catch (e) {
        dispatch({type: CAR_ERROR, payload: e.message})
    }
}