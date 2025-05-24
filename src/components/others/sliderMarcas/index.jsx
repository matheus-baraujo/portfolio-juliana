// LogosCarousel.jsx
import React from 'react';
import styles from './styles.module.css';

const marcas = [
  '/marcas/marca (1).svg',
  '/marcas/marca (2).svg',
  '/marcas/marca (3).svg',
  '/marcas/marca (4).svg',
  '/marcas/marca (5).svg',
  '/marcas/marca (6).svg',
  '/marcas/marca (7).svg',
  '/marcas/marca (8).svg',
  '/marcas/marca (9).svg',
  '/marcas/marca (10).svg',
  '/marcas/marca (11).svg',
  '/marcas/marca (12).svg',
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
