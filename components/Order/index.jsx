import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {postOrder} from "../../redux/order/action";

const Ordered = (props)=>{
    const dispatch = useDispatch()
    const {orderData} = useSelector(state => state.car)
    console.log(orderData, 'orderData')
    const onSubmit =(event)=>{
        event.preventDefault()
        dispatch(postOrder({
            car: event.target[0].value,
            city: event.target[1].value,
            from_time: event.target[2].value,
            to_time: event.target[3].value,
            phone: "+998978066810",
            name: "Najim",
            email: "najim@gmail.com",
            driver: false,
            armchair_kids: false
        }))
        console.log(event.target[0].value, 'car')
        console.log(event.target[1].value, 'city')
        console.log(event.target[2].value, 'from_time')
        console.log(event.target[3].value, 'to_time')
    }

    return(
        <div className={styles.SearchContainer + " " + `${props.inmodal?styles.min: "" }`}>
         <form onSubmit={onSubmit} className={styles.formAll + " container"}>
                        <div className="row">
                            <div className="w-100">
                                <div className={styles.inputRow + " row"}>
                                    <div className={styles.inputCity }>
                                    <div className={styles.selectALl + " " + styles.car}>
                                        <select  id="standard-select">
                                            <option selected={true} disabled value={null}>Avtomobil turi</option>
                                            <option value="1">Captiva 4</option>
                                            <option value="2">Malibu 2</option>
                                            <option value="3">Skoda Octavia</option>
                                            <option value="4">Kia</option>
                                            <option value="5">Xpen</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className={ styles.inputCity }  >
                                    <div className={styles.selectALl + " " + styles.location}>
                                        <select  id="standard-select">
                                            <option selected disabled value={null}>Hududni tanlang</option>
                                            <option value="Tashkent">Tashkent</option>
                                            <option value="Samarqand">Samarqand</option>
                                            <option value="Buxoro">Buxoro</option>
                                            <option value="Qashqadaryo">Qashqadaryo</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className={ styles.inputCity + " " + styles.dataNow}>
                                        <input type="date" name={'from_time'}  className="form-data" required />
                                    </div>
                                    <div className={ styles.inputCity + " "  + styles.dataEnd}>
                                        <input type="date" name={'to_time'} className="form-data" required />
                                    </div>
                                </div>
                            </div>
                            <button className={styles.btnSearch} type="submit">BOOKING</button>
                        </div>
                  </form>
        </div>
    )
}
export default Ordered;