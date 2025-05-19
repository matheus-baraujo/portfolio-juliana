import React from 'react'
import styles from './styles.module.css'

const index = () => {
  return (
    <div className={styles.row}>

      <img className={styles.star} src="icons/star.png" alt="" />

      <div className={styles.info}>
        <h2>Quem será a sua professora?</h2>
        
        <p>Mente engenheira e alma comunicadora juntei o meu pensamento estruturado e a minha criatividade para gerir e criar conteúdo na internet.</p>
        <p>Amo planejar e criar estratégias que evidenciam a autenticidade e a missão de negócios através de conteúdos criativos e envolventes.</p>
        <p>Liderei o time de Marketing da Espaçonave, escola de empreendedorismos criativo por 3 anos e desde 2022 trabalho exclusivamente com conteúdo para redes sociais.</p>
        <p>Já tive mais de 300 alunos e mentorias nos últimos quatro anos criando conteúdo.</p>
        
      </div>

      <div className={styles.img}></div>

    </div>
  )
}

export default index