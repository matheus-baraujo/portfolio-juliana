'use client'

import React from 'react'
import styles from './styles.module.css'

import SliderMarcas from '@/components/others/sliderMarcas'
import Cta2 from '@/components/pages/1-homeContent/1 - cta2'
import Sobre from '@/components/pages/1-homeContent/2 - sobre'
import Cases from '@/components/pages/1-homeContent/3 - cases'
import Services from '@/components/pages/1-homeContent/4 - services'
import Reviews from '@/components/pages/1-homeContent/5 - reviews'

const index = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.cta}>
        <p>Vídeos com estratégia, criatividade e velocidade</p>
        <h2>Crio conteúdo mobile com cara de agora, mas pensado pra durar</h2>
        <button onClick={() => {window.location.href = '/cases'}}>Ver Trabalhos</button>
      </div>

      <video className={styles.bigVideo} src="videos/exampleHome.mp4" autoPlay loop muted></video>

      <SliderMarcas />

      <Cta2 />

      <Sobre />
      
      <Cases />

      <Services />

      <Reviews />
    </div>
  )
}

export default index