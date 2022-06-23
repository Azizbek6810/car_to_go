import axios from "axios"
import { URL } from "../types/constants"


 export const  RequestData  = async ()=>{
     return await axios( `${URL}`)
 }
    