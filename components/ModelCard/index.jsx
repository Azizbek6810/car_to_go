import Image from "next/image";
import styles from "./styles.module.scss";



const ModelCard = ()=>{
    return(
        <div className={styles.modelCard}>
            <Image width="100%" height="100%" layout='responsive' objectFit={'contain'} src="/assets/images/svg/gr_side.webp" alt="" />
            <Image  width="100%" height="100%" layout='responsive'  objectFit={'contain'} src="/assets/images/svg/gr_front.webp" alt="" />
        </div>
    )
}
export default ModelCard; 