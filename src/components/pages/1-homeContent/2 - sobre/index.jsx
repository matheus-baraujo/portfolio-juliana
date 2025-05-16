import React from 'react'
import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src="logos/logoSobre.png" alt="logo" />
        <h2>Juliana Ilha</h2>
      </div>
      <h2 className={styles.subtitle}>Sou mente engenheira e alma comunicadora.</h2>
        
      <div className={styles.content}>

        <div className={styles.col}>
          <p>Juntei meu pensamento estruturado com criatividade para transformar ideias em conteúdo que conecta com estratégia, criatividade e velocidade.</p>
          <img src="imagens/sobre1.png" alt="Foto Juliana" />
          <p>Planejo e produzo vídeos que revelam a autenticidade das marcas e traduzem sua missão de forma envolvente, real e funcional. Não é só sobre criar é sobre comunicar com verdade.</p>
          <h2>Não é só sobre criar é sobre comunicar com verdade.</h2>
        </div>

        <div className={styles.col}>
          <p>Desde 2018, trabalho com criação de conteúdo. E há 2 anos, mergulhei no universo do vídeo mobile e Real Time, onde encontrei a agilidade, a liberdade e a potência que sempre procurei. Assim conheci o poder da comunicação em tempo real que não só engaja, mas principalmente converte pessoas em fãs fiéis de uma marca que transmite verdade.</p>
          
          <div className={styles.imgContainer}>
            <img src="imagens/sobre2.png" alt="Foto Juliana 2" />
            <img className={styles.logoSobre2} src="logos/logoSobre2.png" alt="logo" />
          </div>
          
        </div>


      </div>

    </div>
  )
}

export default index