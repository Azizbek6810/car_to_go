import styles from "./style.module.scss"
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.navbarContent}>
      <div className={styles.redesignMenuLeft}>
          <ul className={styles.ulMenu}>
              <li>
                  Model
              </li>
              <li>
                  <Link href={'/brand'}><a>Brand</a></Link>
              </li>
              <li>
                  Owership
              </li>
              <li>
                  <Link href={'/cars'}><a>Cars</a></Link>
              </li>
          </ul>
      </div>
      <div className={styles.redesignMenuCenter}>
           <img src="./assets/images/svg/logotip.svg" className={styles.Logo} alt="" />
      </div>
      <div className={styles.redesignMenuRight}>
        {/* <a className="flex" href="tel: 908888888">
        <div className={styles.icon}>
           <img src="https://crc.uz/wp-content/themes/cityrentcar/images/phone.svg" className="Icons" alt="" />
        </div>
        <p className="title14 cl-yellow">90 888 88 88 </p>
        </a> */}
        <div className={styles.icon + " ml-5"}>
           <img src="./assets/images/svg/steering.svg" className="Icons" alt="" />
        </div>
      </div>
    </div>
  )
}