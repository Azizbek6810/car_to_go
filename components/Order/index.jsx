import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss"

const Ordered = (props)=>{
    return(
        <div className={styles.SearchContainer + " " + `${props.inmodal?styles.min: "" }`}>
         <form   action="/action_page.php" className={styles.formAll + " container"}>
                        <div className="row">
                            <div className="w-100">
                                <div className={styles.inputRow + " row"}>
                                    <div className={styles.inputCity }> 
                                        
                                    <div className={styles.selectALl + " " + styles.car}>
                                        <select  id="standard-select">
                                            <option value="Option 1">Avtomobil turi</option>
                                            <option value="Option 2">Kaptiva 4</option>
                                            <option value="Option 3">Malibu 2</option>
                                            <option value="Option 4">Skoda Octavia</option>
                                            <option value="Option 5">kia</option>
                                            <option value="Option length">Xpen</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className={ styles.inputCity }  > 
                                    <div className={styles.selectALl + " " + styles.location}>
                                        <select  id="standard-select">
                                            <option value="Option 1">Location</option>
                                            <option value="Option 2">Toshkent</option>
                                            <option value="Option 3">Samarqand</option>
                                            <option value="Option 4">Buxoro</option>
                                            <option value="Option 5">Qashqadaryo</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className={ styles.inputCity + " " + styles.dataNow}>
                                        <input type="date"  className="form-data" required />
                                    </div>
                                    <div className={ styles.inputCity + " "  + styles.dataEnd}>
                                        <input type="date"  className="form-data" required />
                                    </div>
                                </div>                            
                            </div>
                            <button className={styles.btnSearch} type="sumbit">BOOKING</button>
                        </div>
                  </form>  
        </div>
    )
}
export default Ordered;