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
        <div className={styles.icon}>
           <img src="./assets/images/svg/location.svg" className="Icons" alt="" />
        </div>
        <div>
           <img src="./assets/images/svg/steering.svg" className="Icons" alt="" />
        </div>
      </div>
    </div>
  )
}