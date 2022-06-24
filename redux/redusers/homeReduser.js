import { Cars } from "../../utils/cars";
import { UPDATE_Data, UPDATE_STATE, UPDAT_EDELETE } from "../types/constants"



const initionalState = {
    data: [{id: 0, title: "summa", body: " malekam"}],
    animName: "",
    delete: "true",
    onModal: false,
    modelsPlay: Cars,
}



export const updateState = (state = initionalState, action)=>{
    switch(action.type){
    case UPDATE_STATE:   return {...state , ...action.data};  
    default : return state;
    } 
} 

