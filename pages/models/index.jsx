import React from "react";
import ModelCard from "../../components/ModelCard";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss"
const Models=()=>{
    return(
        <div className={styles.models}>
            <Navbar dark/>
            <div className="w-100">
            <ModelCard/>
            </div>
        </div>
    )
}

export default Models