    import styles from "./styles.module.scss"



const Scoda = ({anim , value})=>{
    return(
       <div className={styles.globalImg  + " " + styles[value.stillDisc]}>
        <img className={styles.carImg} src= {`.${value.imgUrl}`} alt="" />
        <div className = {styles.imgcontent + " " + styles.imgleft  + " " + styles[anim] }>
            <img className={styles.diskImg1 } src="./assets/images/png/disc2.png" alt="" />
        </div>
        <div className = {styles.imgcontent + " " + styles.imgright + " " + styles[anim]}>
            <img className={styles.diskImg1 } src="./assets/images/png/disc2.png" alt="" />
        </div>
        {/* <img className={styles.diskImg2} src="./assets/images/svg/scoda_weel.webp" alt="" /> */}
       </div>
    )
} 

export default Scoda;