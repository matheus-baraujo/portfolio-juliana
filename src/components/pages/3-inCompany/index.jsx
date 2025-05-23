import React from 'react'
import styles from './styles.module.css'

import Title from './title'

import Videos from './videos'
import Case from './Case'

import About from './about'
import Brands from './brands'
import BigLogo from './bigLogo'


const index = () => {

  var titles = [
    ['você e o seu time vão aprender...','Pré-produção','A busca por clareza'],
    ['você e o seu time vão aprender...','Captação','Busque o que faz o teu olho brilhar'],
    ['você e o seu time vão aprender...','Edição','Todo vídeo pode ficar dinâmico']
  ]

  var items = [
    ['O que é importante definir antes de começar','Tudo sobre briefing e planejamento','Como organizar eventos e dias de captação','Como criar e organizar seus roteiros'],
    ['Tudo sobre os pilares mais importantes da captação','Vamos treinar o seu olhar','Aprender planos, ângulos, enquadramento','Movimentos de câmera','Equipamentos e acessórios para celular'],
    ['Tudo sobre as principais ferramentas do capcut','Transições, efeitos e filtros profissionais','Edições criativas']
  ]


  return (
    <>
  
      <div className={styles.cta}>
        <video className={styles.ctaVideo} src="videos/exampleHome.mp4" autoPlay loop muted></video>
        <div className={styles.ctaText}>
          <h2>InCompany</h2>
          <h3>Workshop de <br/> <span>Criação de Vídeos</span></h3>
          <p>por <img src="logos/logoIncompany.svg" alt="logo" /></p>
        </div>
      </div>

      <div className={styles.container}>

        <div className={styles.row}>
          <div className={styles.col}>
            <Title />

            <div className={styles.info}>

              <div className={styles.item}>
                <img src="icons/star2.svg" alt="" />
                <p>7h de aulas e exercícios práticos</p>
              </div>

              <div className={styles.item}>
                <img src="icons/star2.svg" alt="" />
                <p>Mais autonomia para o seu time criar no dia a dia</p>
              </div>

              <div className={styles.item}>
                <img src="icons/star2.svg" alt="" />
                <p>Templates para organizar a sua criação</p>
              </div>

            </div>
          </div>

          <div className={styles.col2}>
            <Videos />
          </div>
        </div>

        {titles.map((item, index)=>{
          var odd = (index%2 == 0);

          return(
            <div className={styles.row} key={index}>
              <Case odd={odd} number={index} title={item} items={items[index]}/>
            </div>
          )
        })}

        <About />

        <Brands />

        <BigLogo />

      </div>
    
    </>
    
  )
}

export default index