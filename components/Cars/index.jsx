import styles from "./styles.module.scss"



const Scoda = (props)=>{
    return(
       <div className={styles.globalImg }>
        <img className={styles.carImg} src="./assets/images/svg/scoda_codia.webp" alt="" />
        <div className = {styles.imgcontent + " " + styles.imgleft  + " " + styles[props.anim] }>
            <img className={styles.diskImg1 } src="./assets/images/png/disc2.png" alt="" />
        </div>
        <div className = {styles.imgcontent + " " + styles.imgright + " " + styles[props.anim]}>
            <img className={styles.diskImg1 } src="./assets/images/png/disc2.png" alt="" />
        </div>
        {/* <img className={styles.diskImg2} src="./assets/images/svg/scoda_weel.webp" alt="" /> */}
       </div>
    )
} 
export default Scoda;