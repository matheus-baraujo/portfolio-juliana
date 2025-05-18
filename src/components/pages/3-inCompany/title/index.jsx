import React from 'react'
import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
          <h3>Workshop de <br/> <span>Criação de Vídeos</span></h3>
          <p>por <img src="logos/logoIncompany.png" alt="" /></p>
        </div>
      </div>
  )
}

export default index