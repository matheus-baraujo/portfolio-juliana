// LogosCarousel.jsx
import React from 'react';
import styles from './styles.module.css';

const marcas = [
  '/marcas/marca.png',
  '/marcas/marca1.png',
  '/marcas/marca2.png',
  '/marcas/marca3.png',
  '/marcas/marca4.png',
  '/marcas/marca5.png',
  // repita se quiser mais fluidez
];

export default function LogosCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack}>
        {[...marcas, ...marcas].map((logo, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src={logo} alt="Logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
