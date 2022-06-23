import React from "react";
import styles from "./styles.module.scss"

const Services =(props)=>{
    console.log(props);
    return(
        <div className={styles.services}>
            {
                (Number(props.index) + Number(1))%2 === 0 ? <div className="w-100">
                <div className={styles.imgContents}>
                    <img src="./assets/images/svg/headerImg3.webp" alt="" />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.title + " title40"}>
                        Model all
                    </p>
                    <p className={styles.subtitle + " title20"}>
                        va boshqa narsalar Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores distinctio sequi? Eaque ipsam debitis aperiam enim quibusdam reprehenderit itaque dignissimos, blanditiis odio illo velit vel ut minus repellendus molestias odit iste, minima culpa? Maiores tenetur ducimus ab quo provident!
                    </p>
                </div>
            </div> : <div className="w-100">
                <div className={styles.textContainer}>
                    <p className={styles.title + " title40"}>
                        Model all
                    </p>
                    <p className={styles.subtitle + " title20"}>
                        va boshqa narsalar Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores distinctio sequi? Eaque ipsam debitis aperiam enim quibusdam reprehenderit itaque dignissimos, blanditiis odio illo velit vel ut minus repellendus molestias odit iste, minima culpa? Maiores tenetur ducimus ab quo provident!
                    </p>
                </div>
                <div className={styles.imgContents}>
                    <img src="./assets/images/svg/bg.webp" alt="" />
                </div>
            </div>
            }
            </div>  
            
            
    )
}
export default Services