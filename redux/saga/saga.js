import {call, put, takeEvery} from "redux-saga/effects"
import { RequestData } from "../requests/dataRequest";
import { ONSUBMIT, UPDATE_Data } from "../types/constants"

export function* UserSaga(action){
    try{
        const user = yield call(RequestData)
        if(user.data.length > 0 || !user.data){
            console.log(user );
            // yield put( {type: UPDATE_Data, data: user})
        }
    }
    catch (error){
        console.log(error.message)
    }
}
export function* AllSaga(){
    yield takeEvery(ONSUBMIT, UserSaga);
}