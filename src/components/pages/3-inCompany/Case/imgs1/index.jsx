import React from 'react'
import styles from './styles.module.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const index = ({mobile}) => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      {
        mobile ?
        <div className={styles.containerSlider}>
          <Slider {...settings}>
            <div className={styles.img1}></div>
            <div className={styles.img2}></div>
          </Slider>
        </div>
        :
        <div className={styles.container}>
          <div className={styles.img1}></div>
          <div className={styles.img2}></div>
        </div>
      }
    </>
  )
}

export default index