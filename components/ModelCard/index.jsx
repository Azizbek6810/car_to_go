import styles from "./styles.module.scss";
import Image from "next/image";


const ModelCard = ()=>{
    return(
        <div className={styles.modelCard}>
            <div className={styles.title }>
                <h2 className={" title20 cl-light"}>1 100 000 So'm</h2>
                <h2 className={" title24"}>Grecale</h2>
                    <div className={styles.medium + " title14"}>1 100 000</div>
                    {/* <div className="bottom velocity-animating" >Embrace innovation. Avanza. Abre tu día a día a lo excepcional con las prestaciones arrolladoras del nuevo SUV Grecale.</div> */}
            </div>
            <div className={styles.img1}>    
                <Image width = "100%" height = "100%" layout="fill" objectFit="contain" priority src="/assets/images/svg/gr_side.webp" alt="" />
            </div>
            <div className={styles.img1 + " " + styles.imghover}>
                <Image width = "100%" height = "100%" layout="fill" objectFit="contain"   src="/assets/images/svg/gr_front.webp" alt = "" />
            </div>
            <button className={styles.button1 + " titlebtn"}>
                Booking
            </button>
            <button className={styles.button2 + " titlebtn"}>
                Booking
            </button>
        </div>
    )
}
export default ModelCard; 