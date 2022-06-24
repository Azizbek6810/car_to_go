import React from "react";
import { useDispatch } from "react-redux"; 
import { UPDATE_STATE } from "../../redux/types/constants";
import styles from "./style.module.scss"
export default function RoundButtoLeft(props) {
  const {className , onClick  } = props;
  const dispatch = useDispatch()
  const actionToMolad =(props)=>{
    dispatch(props);
    setTimeout(()=>{
    dispatch({type: UPDATE_STATE , data: { animName: ""}})
    },[1400])
  }
  return (
    <div className={ className + " " +  styles.rounContent + " " + `${props.moledSlick ? styles.moledSlickleft : ""}` } 
        onClick={()=>{
          onClick();
          props.moledSlick?
          actionToMolad({type: UPDATE_STATE , data: { animName: "anim1"}}): "";
          }}>
    </div>
  )
}