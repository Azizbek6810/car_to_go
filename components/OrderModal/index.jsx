import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_STATE } from "../../redux/types/constants";
import Ordered from "../Order";
import styles from "./styles.module.scss"

export default function OrderModal(){
    const state = useSelector((state) => state)
    const data ={
        onModal: state.home.onModal,
    }
    const dispatch = useDispatch();
    return(
        <div className={styles.Modal  + ` ` + `${data.onModal? "disFlex ": "disNone"}`}>
            <div className={styles.Countent}>
            <div className={styles.leave + " flex column"} onClick = {()=>dispatch({type:UPDATE_STATE , data: {onModal: !data.onModal}})}>
                <img src="https://www.svgrepo.com/show/349140/x.svg" alt="" />
            </div>
                    
                    <div className="container row">
                        <div className="col-6 flex relative">
                        <div className={styles.logoModal}>
                            <img src="http://localhost:3000/assets/images/svg/logotipWhite.svg" alt="" />
                        </div>
                            <div className={styles.imgProdact}>
                                <img src="./assets/images/svg/soon.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-6 ">
                            <p className="title60">
                                Skoda codiak
                            </p>
                            <ul className= {styles.ulMenu} >
                                <li>
                                    <div className={styles.Icon}>
                                     <img src="./assets/images/svg/money.svg" alt="" />
                                    </div>
                                    Cost:
                                    <p className="title20 ml-5 cl-yellow">
                                        5 500 000 So'm
                                    </p>
                               </li>
                                <li>
                                    <div className={styles.Icon}>
                                     <img src="	https://crc.uz/wp-content/themes/cityrentcar/images/door.svg" alt="" />
                                    </div>
                                    Door:
                                    <p className="title20 ml-5 cl-yellow">
                                        5
                                    </p>
                               </li>
                                <li>
                                    <div className={styles.Icon}>
                                     <img src="https://crc.uz/wp-content/themes/cityrentcar/images/sit.svg" alt="" />
                                    </div>
                                    Seats:
                                    <p className="title20 ml-5 cl-yellow">
                                        5
                                    </p>
                                </li>
                                <li>
                                    <div className={styles.Icon}>
                                     <img src="	https://crc.uz/wp-content/themes/cityrentcar/images/sit.svg" alt="" />
                                    </div>
                                    Baggage:
                                    <p className="title20 ml-5 cl-yellow">
                                        5
                                    </p>
                                </li>
                                <li>
                                    <div className={styles.Icon}>
                                     <img src="		https://crc.uz/wp-content/themes/cityrentcar/images/transmission.svg" alt="" />
                                    </div>
                                Transmission:
                                <p className="title20 ml-5 cl-yellow">
                                        5
                                    </p>
                                </li>
                                <li>
                                    <div className={styles.Icon}>
                                     <img src="	https://crc.uz/wp-content/themes/cityrentcar/images/air-conditioner.svg" alt="" />
                                    </div>
                                Air conditioner:
                                <p className="title20 ml-5 cl-yellow">
                                Имеется
                                    </p>
                                </li>
                                <li>
                                    <div className={styles.Icon}>
                                     <img src="	https://crc.uz/wp-content/themes/cityrentcar/images/shield.svg" alt="" />
                                    </div>
                                Insurance:
                                <p className="title20 ml-5 cl-yellow">
                                        100
                                    </p>
                                </li>
                                <li>
                                    <div className={styles.Icon}>
                                     <img src="	https://crc.uz/wp-content/themes/cityrentcar/images/door.svg" alt="" />
                                    </div>
                                Fuel:
                                <p className="title20 ml-5 cl-yellow">
                                        500
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.number + " container cl-grey"}>
                        <img  src="	https://crc.uz/wp-content/themes/cityrentcar/images/phone.svg" alt="" />
                        <a href="tel:909993333" className="title20"> +99890 999  33 33 </a>
                    </div>
                    <Ordered inmodal/>
            </div>
        </div>
    )
}