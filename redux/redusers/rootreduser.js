import { combineReducers } from "redux";
import {  updateState } from "./homeReduser";






export const rootreduser = combineReducers({
       
        home: updateState,
        // delete: updateDelete,
        

})