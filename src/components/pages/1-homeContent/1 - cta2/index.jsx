import React from 'react'
import styles from './styles.module.css'

const index = () => {

  const videos = ['videos/example (1).mp4', 'videos/example (2).mp4', 'videos/example (2).mp4', 'videos/example (1).mp4']

  return (
    <div className={styles.container}>
      
      <div className={styles.cta}>
        <h2>Mobile é o <br/> meio e <br/> precisa de<br/> estratégia</h2>
        <p>Gravar com o celular não é improviso e 93% dos consumidores acreditam que vídeos são primordiais na decisão de compra.</p>
      </div>

      <div className={styles.filter}></div>

      {
        videos.map((video, index) => (
          <div key={index} className={styles.videoContainer}>
            <video className={styles.video} src={video} autoPlay loop muted></video>
          </div>
        ))
      }
      
    </div>
  )
}

export default index