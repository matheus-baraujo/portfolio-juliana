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

  var cta = "Vídeos com estratégia,\ncriatividade e velocidade"


  return (

    <>
      <div className={styles.cta}>
        <p>{cta}</p>
        <h2 className={styles.desktop}>Crio conteúdo mobile com cara <br /> de agora, mas pensado pra durar</h2>
        <h2 className={styles.mobile}>Crio conteúdo mobile <br /> com cara  de agora, <br /> mas pensado pra durar</h2>
        <button onClick={() => {window.location.href = '/cases'}}>Ver Trabalhos</button>
      </div>

      <video className={styles.bigVideo} src="videos/exampleHome.mp4" autoPlay loop muted></video>

      <div className={styles.container}>
        
        

        <SliderMarcas />

        <Sobre />

        <Cta2 />

        <Cases />

        <Services />

        <Reviews />
      </div>
    </>
  )
}

export default index