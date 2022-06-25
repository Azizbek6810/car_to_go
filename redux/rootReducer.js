import { combineReducers } from "redux";
import {  updateState } from "./redusers/homeReducer";
import carReducer from "./car/reducer";

export const rootReducer = combineReducers({
    home: updateState,
    car: carReducer
})