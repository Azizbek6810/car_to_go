import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss"


const Services =(props)=>{
     const size =  useWindowSize();
    return(
        <div className={styles.services}>
            {
                (Number(props.index) + Number(1))%2 === 0 || size.width < 767 ? <div className="w-100">
                <div className={styles.imgContents + " col-6"}>
                    <img src="./assets/images/svg/headerImg3.webp" alt="" />
                </div>
                <div className={styles.textContainer + " col-6"}>
                    <p className={styles.title + " title40"}>
                        Model all
                    </p>
                    <p className={styles.subtitle + " title20"}>
                        va boshqa narsalar Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores distinctio sequi? Eaque ipsam debitis aperiam enim quibusdam reprehenderit itaque dignissimos, blanditiis odio illo velit vel ut minus repellendus molestias odit iste, minima culpa? Maiores tenetur ducimus ab quo provident!
                    </p>
                </div>
            </div> : <div className="w-100">
                <div className={styles.textContainer + " col-6"}>
                    <p className={styles.title + " title40"}>
                        Model all
                    </p>
                    <p className={styles.subtitle + " title20"}>
                        va boshqa narsalar Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores distinctio sequi? Eaque ipsam debitis aperiam enim quibusdam reprehenderit itaque dignissimos, blanditiis odio illo velit vel ut minus repellendus molestias odit iste, minima culpa? Maiores tenetur ducimus ab quo provident!
                    </p>
                </div>
                <div className={styles.imgContents + " col-6"}>
                    <img src="./assets/images/svg/bg.webp" alt="" />
                </div>
            </div>
            }
            </div>  
            
            
    )
}
export default Services

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }