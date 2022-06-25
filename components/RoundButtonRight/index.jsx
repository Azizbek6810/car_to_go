import { useDispatch } from "react-redux";
import { UPDATE_STATE } from "../../redux/constant/constants";
import styles from "./style.module.scss"

export default function RoundButtonRight(props) {
  const {className, onClick} = props;
  const dispatch = useDispatch()

  const actionToModal = (props) => {
    dispatch(props);
    setTimeout(() => {
      dispatch({type: UPDATE_STATE, data: {animName: ""}})
    }, [1400])
  }
  return (
      <div className={className + " " + styles.rounContent}
           onClick={() => {
             onClick();
             actionToModal({type: UPDATE_STATE, data: {animName: "anim2"}})
    }}>

    
    </div>
  )
}
