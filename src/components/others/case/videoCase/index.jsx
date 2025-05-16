'use client'

import React, { useRef } from 'react'
import styles from './styles.module.css'

const index = ({video}) => {

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play().catch(error => {
      console.error("Autoplay prevented:", error);
    });
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video ref={videoRef} className={styles.video} muted loop={true} >
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default index