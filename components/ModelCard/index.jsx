import styles from "./styles.module.scss";
import Image from "next/image";


const ModelCard = ()=>{
    return(
        <div className={styles.modelCard}>
            <div className={styles.title }>
                <h2 class={styles.top + " title24"}>Grecale</h2>
                    <div className={styles.medium}>Haz cada día excepcional</div>
                    {/* <div className="bottom velocity-animating" >Embrace innovation. Avanza. Abre tu día a día a lo excepcional con las prestaciones arrolladoras del nuevo SUV Grecale.</div> */}
            </div>
            <div className={styles.img1}>    
                <Image width = "100%" height = "100%" layout="fill" objectFit="contain" priority src="/assets/images/svg/gr_side.webp" alt="" />
            </div>
            <div className={styles.img1 + " " + styles.imghover}>
                <Image width = "100%" height = "100%" layout="fill" objectFit="contain"   src="/assets/images/svg/gr_front.webp" alt = "" />
            </div>
        </div>
    )
}
export default ModelCard; 