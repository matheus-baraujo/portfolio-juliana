import React from 'react'
import styles from './styles.module.css'

const index = () => {
  return (
    <>
  
      <div className={styles.cta}>
        <video className={styles.ctaVideo} src="videos/exampleHome.mp4" autoPlay loop muted></video>
        <div className={styles.ctaText}>
          <h2>InCompany</h2>
          <h3>Workshop de <br/> <span>Criação de Vídeos</span></h3>
          <p>por <img src="logos/logoIncompany.png" alt="" /></p>
        </div>
      </div>

      <div className={styles.container}>

        <div className={styles.row}>
          <div className={styles.col}>
            <h2>FALA COMIGO!</h2>
            <p>Tá com uma ideia, precisa de orçamento ou quer falar sobre algum projeto? Tô te esperando!<br/> É só chamar!</p>
          </div>

          <div className={styles.col2}>

          </div>

        </div>

      </div>
    
    </>
    
  )
}

export default index