'use client'

import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'

import { useMediaQuery } from 'react-responsive';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const index = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
  };

  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
  };

  if (!isClient) return null; // Evita render no SSR

  const videos = ['videos/example (1).mp4', 'videos/example (2).mp4', 'videos/example (2).mp4', 'videos/example (1).mp4']

  return (
    <div className={styles.container}>
      
      <div className={styles.cta}>
        <h2>Mobile é o <br/> meio e <br/> precisa de<br/> estratégia</h2>
        <p>Gravar com o celular não é improviso e 93% dos consumidores acreditam que vídeos são primordiais na decisão de compra.</p>
      </div>

      <div className={styles.filter}></div>

      {
        isMobile ?
        <>
          <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {
                  videos.slice(0,2).map((video, index)=>{
                    return(
                      <video className={styles.video} src={video} key={index} autoPlay loop muted></video>
                    )
                  })
                }
              </Slider>
          </div>
          <div className={styles.sliderContainer}>
            <Slider {...settings2}>
                {
                  videos.slice(2,4).map((video, index)=>{
                    return(
                      <video className={styles.video} src={video} key={index} autoPlay loop muted></video>
                    )
                  })
                }
              </Slider>
          </div>
        </>
        
        :
        <>
        {
          videos.map((video, index) => (
            <div key={index} className={styles.videoContainer}>
              <video className={styles.video} src={video} autoPlay loop muted></video>
            </div>
          ))
        }
        </>
        
      }
      
    </div>
  )
}

export default index