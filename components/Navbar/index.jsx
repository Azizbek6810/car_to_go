import styles from "./style.module.scss"

export default function Navbar() {
  return (
    <div className={styles.navbarContent}>
      <div className={styles.redesignMenuLeft}>
        <ul className={styles.ulMenu}>
          <li>
            Model
          </li>
          <li>
            Brand
          </li>
          <li>
            Owership
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