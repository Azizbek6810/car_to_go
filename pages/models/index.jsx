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
                                <button className="titlebtn">All</button>
                                <button className="titlebtn">Kia</button>
                                <button className="titlebtn">XPeng</button>
                                <button className="titlebtn">Mercedes Benz</button>
                                <button className="titlebtn">Chevrolet</button>
                                <button className="titlebtn">Skoda</button>
                            </ul>
                        </div>
                    </div>  
                </div>
                <div className={styles.main}>
                    <div className={styles.Allfiltr}>
                        <ul className="ulMenu">
                            <button className={ " titlebtn " + styles.btn }>
                                4 x 4
                            </button>
                            <button className={ " titlebtn " + styles.btn }>
                            Biznes 
                            </button>
                            <button className={ " titlebtn " + styles.btn }>
                            Premium
                            </button>
                            <button className={ " titlebtn " + styles.btn }>
                            Standart
                            </button>
                            <button className={ " titlebtn " + styles.btn }>
                            Economy							
                            </button>
                            <button className={ " titlebtn " + styles.btn }>
                            Electro							
                            </button>

                        </ul>
                    </div>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                    <ModelCard/>
                </div>
        </div>
    )
}

export default Models