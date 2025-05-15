'use client'

import React, {useState, useEffect } from 'react'
import styles from './styles.module.css'
import VideoCase from './videoCase'

import { useMediaQuery } from 'react-responsive';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const index = ({projeto, direction}) => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };


  if (!isClient) return null; // Evita render no SSR

  const videoList = Array.isArray(projeto?.[2]) ? projeto[2] : [];

  return (
    <div className={ direction ? styles.case : styles.case2}>
      
      <div className={styles.info}>
        <h2>{projeto?.[0]}</h2>
        <p>{projeto?.[1]}</p>
      </div>
      
      {
        isMobile ? 
          <div style={{ width: "170px", height: "300px" }}>
            <Slider {...settings}>
              {
                videoList.map((item, index) => {
                  return (
                    <VideoCase video={item} key={index}/>
                  )
                })
              }
            </Slider>
          </div>
        :
          videoList.map((item, index) => {
            return (
              <VideoCase video={item} key={index}/>
            )
          })

      }

    </div>
  )
}

export default index