import Slider from "react-slick";
import RoundButtonRight from "../RoundButtonLeft";
import RoundButtonLeft from "../RoundButtonRight";
import styles from "./style.module.scss"


 
export default function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <RoundButtonRight/>,
    prevArrow: <RoundButtonLeft/>,
  };
  
  return (
    <div className={styles.headerContent }>
      <Slider className={styles.carouselHeader + " headerCarousel"} {...settings}>
          <div className={styles.cardHeader}>
            <img src="./assets/images/svg/headerImg1.webp"  className="Img" alt="" />
          </div>
          <div className={styles.cardHeader}>
            <img src="./assets/images/svg/headerImg2.webp" alt="" />
          </div>
          <div className={styles.cardHeader}>
             <img src="./assets/images/svg/headerImg3.webp" alt="" />
          </div>
          <div className={styles.cardHeader}>
            <img src="./assets/images/svg/headerImg1.webp" alt="" />
          </div>
          <div className={styles.cardHeader}>
            <img src="./assets/images/svg/headerImg3.webp" alt="" />
          </div>
          <div className={styles.cardHeader}>
            <img src="./assets/images/svg/headerImg2.webp" alt="" />
          </div>
        </Slider>
    </div>
  )
}