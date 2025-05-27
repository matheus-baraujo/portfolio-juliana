'use client'

import React, {useState, useEffect } from 'react'
import styles from './styles.module.css'
import VideoCase from './videoCase'

import { useMediaQuery } from 'react-responsive';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const index = ({projeto, direction, home}) => {

  const [isClient, setIsClient] = useState(false);
  const [titulo, setTitulo] = useState();
  const [texto, setTexto] = useState();

  useEffect(() => {
    setIsClient(true);

    if (home) {
      setTitulo(projeto?.texto1);
      setTexto(projeto?.texto2);
    } else {
      setTitulo(projeto?.titulo);
      setTexto(projeto?.texto);
    }

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

  const videoList = JSON.parse(projeto?.videos);

  return (
    <div className={ direction ? styles.case : styles.case2}>
      
      <div className={ home ? styles.infoHome : styles.info}>
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
      
      {
        isMobile ? 
          <div style={{ width: "170px", height: "300px" }}>
            <Slider {...settings}>
              {
                videoList.map((item, index) => {

                  var url = "http://localhost:3000/videos/" + item.name;

                  return (
                    <VideoCase video={url} key={index}/>
                  )
                })
              }
            </Slider>
          </div>
        :
          videoList.map((item, index) => {

            var url = "http://localhost:3000/videos/" + item.name;

            return (
              <VideoCase video={url} key={index}/>
            )
          })

      }

    </div>
  )
}

export default index