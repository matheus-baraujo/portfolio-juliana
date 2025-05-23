import React from 'react'
import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src="logos/logoSobre.svg" alt="logo" />
      </div>

      <div className={styles.content}>

        <div className={styles.col}>
          <p>Juntei meu pensamento estruturado com criatividade para transformar ideias em conteúdo que conecta com estratégia, criatividade e velocidade.</p>
          <div className={styles.imgContainer}>
            <img className={styles.foto} src="imagens/imgSobre.svg" alt="Foto Juliana" />
            <img className={styles.logoSobre2} src="logos/logoSobre2.svg" alt="logo" />
          </div>
          
        </div>

        <div className={styles.col+' '+styles.col2}>

          <div className={styles.subtitle}>
            <img className={styles.aspas1} src="icons/aspas.svg" alt="icon" />
            <img className={styles.aspas2} src="icons/aspas.svg" alt="icon" />
            <h2>Sou mente engenheira <br/>e alma comunicadora.</h2>
          </div>
          
          <p>Desde 2018, trabalho com criação de conteúdo. E há 2 anos, mergulhei no universo do vídeo mobile e Real Time, onde encontrei a agilidade, a liberdade e a potência que sempre procurei. Assim conheci o poder da comunicação em tempo real que não só engaja, mas principalmente converte pessoas em fãs fiéis de uma marca que transmite verdade.</p>
          
          <h2>Não é só sobre criar é sobre comunicar com verdade.</h2>
          <p>Planejo e produzo vídeos que revelam a autenticidade das marcas e traduzem sua missão de forma envolvente, real e funcional. Não é só sobre criar é sobre comunicar com verdade.</p>
          
        </div>


      </div>

    </div>
  )
}

export default index