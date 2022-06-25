import styles from "./styles.module.scss"


const Footer =()=>{
    return(
        <div className={styles.footer}>
            <div className={"col-6"}>
                    <div className={styles.contentItem}>
                        <div className="flex">
                            <img src="./assets/images/svg/car.svg" className={styles.itemImg} alt="" />
                            <p className="title11 cl-white ml-5">
                                BUILD YOUR OWN
                            </p>
                        </div>
                        <p className="title14 cl-white ">
                            {">"}
                        </p>
                    </div>
                    <div className={styles.contentItem}>
                        <div className="flex">
                            <img src="./assets/images/svg/steering.svg" className={styles.itemImg} alt="" />
                            <p className="title11 cl-white ml-5">
                                BUILD YOUR OWN
                            </p>
                        </div>
                        <p className="title14 cl-white">
                            {">"}
                        </p>
                    </div>
            </div>
            <div className={"col-6"}>
                    <div className={styles.contentItem}>
                        <div className="flex">
                            <img src="./assets/images/svg/paper.svg" className={styles.itemImg} alt="" />
                            <p className="title11 cl-white ml-5">
                                BUILD YOUR OWN
                            </p>
                        </div>
                        <p className="title14 cl-white">
                            {">"}
                        </p>
                    </div>
                    <div className={styles.contentItem}>
                        <div className="flex">
                            <img src="./assets/images/svg/location.svg" className={styles.itemImg} alt="" />
                            <p className="title11 cl-white ml-5">
                                BUILD YOUR OWN
                            </p>
                        </div>
                        <p className="title14 cl-white">
                            {">"}
                        </p>
                    </div>
            </div>
            <div className={styles.logo}>
                <img src="./assets/images/svg/logotipWhite.svg" alt="" />
            </div>
            <div className={ styles.liks +  " content"}>
            <div className="col-3">
                <ul className={styles.ulMenu}>
                    <li>
                        Models
                    </li>
                    <li>
                        Barand
                    </li>
                    <li>
                        Ownership
                    </li>
                </ul>
            </div>
            <div className="col-3">
                <ul className={styles.ulMenu}>
                    <li>
                    Services and Aftersales
                    </li>
                    <li>
                    Dealer Locator
                    </li>
                    <li>
                    Build {" & "} Price
                    </li>
                </ul>
            </div>
            <div className="col-3">
                <ul className={styles.ulMenu}>
                    <li>
                    Press Releases (Media)
                    </li>
                    <li>
                    Contact Us
                    </li>
                    <li>
                    Newsletter
                    </li>
                    <li>
                        Bluetooth Compatibility
                    </li>
                </ul>
            </div>
            <div className="col-3">
                <ul className={styles.ulMenu}>
                    <li>
                    Stay up to date
                    </li>
                    <li>
                        <button className={ styles.titlebtn}>
                        <p>Subscribe to our newsletter</p>
                        <p>{">"}</p> 
                        </button>
                    </li>
                    
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer;