import React from 'react'
import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.row}>

      <div className={styles.col}>
        <img src="logos/logoVertical.svg" alt="" />
        <div className={styles.bg1}></div>
      </div>

      <div className={styles.info}>
        <h2>Marcas que já co-criei conteúdo em vídeo:</h2>
        <img src="marcas/marcas.svg" alt="" />
        <div className={styles.bg2}></div>
      </div>

      

    </div>
  )
}

export default index