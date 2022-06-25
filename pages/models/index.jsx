<<<<<<< HEAD
import React from "react";
import ModelCard from "../../components/ModelCard";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss"
const Models=()=>{
    return(
        <div className={styles.models}>
            <Navbar dark/>
                <div   className={styles.sidebar}>
                    <div className={styles.menu}>
                        <div className={styles.titleMenu}>
                            <p className="title40 weight7 cl-white">
                                Brends
                            </p>
                        </div>
                        <div className={styles.menu}>
                            <ul className="ulMenu"> 
                                <li>Kia</li>
                                <li>XPeng</li>
                                <li>Mercedes Benz</li>
                                <li>Chevrolet</li>
                                <li>Skoda</li>
                            </ul>
                        </div>
                    </div>  
                </div>
                <div className={styles.main}>
                    <ModelCard/>
                </div>
        </div>
    )
}

=======
import React from "react";
import ModelCard from "../../components/ModelCard";
import styles from "./styles.module.scss"
const Models=()=>{
    return(
        <div className={styles.models}>
            <ModelCard/>
        </div>
    )
}

>>>>>>> 5901a84 (Add files via upload)
export default Models