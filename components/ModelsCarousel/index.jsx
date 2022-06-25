import React, { Component } from "react";
import { useState ,useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import Slider from "react-slick";
import Scoda from "../Cars";
import RoundButtonRight from "../RoundButtonLeft";
import RoundButtonLeft from "../RoundButtonRight";
import styles from "./style.module.scss"
import Aos from 'aos'
import { UPDATE_STATE } from "../../redux/types/constants";

export default function Models() {
  const [nav1 , setNav1] = useState(null);
  const [nav2 , setNav2] = useState(null);
  const [active , setActive] = useState(0);
  const settings1 = {
    infinite: true,
    speed: 1400,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
}
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1400,
    nextArrow: <RoundButtonRight moledSlick />,
    prevArrow: <RoundButtonLeft moledSlick />,
    afterChange: current  => setActive(current ),
  };
  useEffect(()=>{
    console.log(active);
  },[active]);
  const state = useSelector((state) => state);
  const data = {
    anim: state.home.animName,
    onModal: state.home.onModal,
    models: state.home.modelsPlay,

}
const dipastch = useDispatch();

   
  return (
    <div  className={styles.modelContent + " containersAll" }>
      <div className={styles.title}>
        <h1 className="title60 cl-white">
            An extraordinary model range
        </h1>
      </div>
      <Slider
          asNavFor= {nav1}
          className= "slider1"
          swipeToSlide={true}
          ref= {slider => setNav2(slider)}
          {...settings1}
        >
          {
                data.models.map((value)=>{
                    return(
                      <div key={value.id} className={styles.modeltop + " navbarModel"}>
                        <div className={styles.madalbg}>
                          <img src={value.imgbg}  className={styles.bgImg + " Img"} alt="" />
                        </div>
                        <h3>{value.name}</h3>
                      </div>
                    )
                })
              }
          
      </Slider>
      <div className={styles.SliderBottom}>
        <Slider  
            data-aos="fade-left" 
            asNavFor={nav2}
            ref={slider => setNav1(slider)}
            swipeToSlide={true}
            className={styles.carouselHeader + " Modal" } 
            {...settings2}
            >
              {
                data.models.map((value)=>{
                    return(
                      <div  key={value.id} className={styles.cardHeader }>
                        <div className={styles.models}>
                           <Scoda value = {value}  anim = {data.anim}/>
                        </div>
                      </div>
                    )
                })
              }
            
        </Slider>
      </div>
        
        <div className={styles.orderContent}>
          <div className={styles.comment + " col-6"}>
            <h1 className={ 'title40 cl-black'}>
              {data.models[active].name} 
            </h1>
            <p className="title40 cl-yellow">{data.models[active].cost} so'm</p>
          </div>
          <div className={"col-6"}>  
            <button onClick={()=> dipastch({type: UPDATE_STATE , data: {onModal: !data.onModal , modelId: data.models[active].id }})}  className={styles.titlebtn + " titlebtn"}>
                BOOK NOW
              <p>{">"}</p>
            </button>
          </div>
        </div>
      </div>
  )
}

