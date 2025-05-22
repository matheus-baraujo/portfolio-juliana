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

  if (!isClient) return null; // Evita render no SSR

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      {
        isMobile? 
        <div className={styles.containerSlider}>
          <Slider {...settings}>
            <video src="videos/example (1).mp4" autoPlay loop muted></video>
            <video src="videos/example (2).mp4" autoPlay loop muted></video>
          </Slider>
        </div>
        :
        <>
          <video src="videos/example (1).mp4" autoPlay loop muted></video>
          <video src="videos/example (2).mp4" autoPlay loop muted></video>
        </>
      }
      

    </>
  )
}

export default index