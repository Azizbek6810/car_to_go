import { useEffect } from 'react'
import AfterCarousel from '../components/AfterCarousel'
import Footer from '../components/Footer'
import Header from '../components/HeaderCarousel'
import Models from '../components/ModelsCarousel'
import Navbar from '../components/Navbar'
import Ordered from '../components/Order'
import Vedio from '../components/Vedio'
import styles from '../styles/Home.module.css'
import Aos from 'aos'
import OrderModal from '../components/OrderModal'
import Services from '../components/Services'
export default function Home() {
  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    })
  })
  return (
    <div className={styles.home}>
       <Navbar/>
       <Header/>
       <Models  data-aos="fade-up" 
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500" />
       <Ordered data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" />
       <Vedio data-aos="zoom-in-left"/>
       <div className={styles.exclusiveTitle}>
        <h1 className='title40 cl-black'>
        The exclusive Maserati personalization program allows you to create one-of-a-kind Maserati cars, styled by you.
        </h1>
        <button className={styles.titlebtn}>
          DISCOVER MORE
        </button>
       </div>
       <Services index = "0" />
       <Services index = "1" />
       <Services index = "2" />
       <Services index = "3" />
       <Services index = "4" />
       <Services index = "5" />
       <Services index = "6" />
       <Services index = "7" />
       <div className={styles.AfterTitle}>
        <h1 className='title88 cl-black '>
        The world of Car Go 
        </h1>
       </div>
       <AfterCarousel data-aos="zoom-in"/>
       <Footer/>  
       <OrderModal/>
    </div>
  )
}
