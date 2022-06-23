import Slider from "react-slick";
import RoundButtonRight from "../RoundButtonLeft";
import RoundButtonLeft from "../RoundButtonRight";
import styles from "./style.module.scss"


export default function AfterCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <RoundButtonRight/>,
    prevArrow: <RoundButtonLeft/>,
  };
  return (
    <div className={styles.afterContent }>
      <Slider className={styles.carouselHeader + " afterCarousel"} {...settings}>
          
          <div className={styles.cardHeader}>
          {/* <video class="videoItem w-100 " alt="video" onloadedmetadata="this.muted = true" muted="" preload="none" loop="" playsinline="true" autoplay="true">
                        <source src="./assets/video/fuoriserie-loop-1.mp4" type="video/mp4"/>
          </video> */}
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