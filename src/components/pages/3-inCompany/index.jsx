import React from 'react'
import styles from './styles.module.css'

import Title from './title'
import Title2 from './title2'

import Imgs1 from './imgs1'
import Imgs2 from './imgs2'
import Imgs3 from './imgs3'
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
          <p>por <img src="logos/logoIncompany.png" alt="" /></p>
        </div>
      </div>

      <div className={styles.container}>

        <div className={styles.row}>
          <div className={styles.col}>
            <Title />

            <div className={styles.info}>

              <div className={styles.item}>
                <img src="icons/star2.png" alt="" />
                <p>7h de aulas e exercícios práticos</p>
              </div>

              <div className={styles.item}>
                <img src="icons/star2.png" alt="" />
                <p>Mais autonomia para o seu time criar no dia a dia</p>
              </div>

              <div className={styles.item}>
                <img src="icons/star2.png" alt="" />
                <p>Templates para organizar a sua criação</p>
              </div>

            </div>
          </div>

          <div className={styles.col2}>
            <video src="videos/example (1).mp4" autoPlay loop muted></video>
            <video src="videos/example (2).mp4" autoPlay loop muted></video>
          </div>
        </div>

        <div className={styles.row}>

          <img className={styles.star +' '+ styles.star1} src="icons/star.png" alt="" />

          <div className={styles.col}>
            <Title2 minor={titles[0][0]} major={titles[0][1]} span={titles[0][2]}/>
            <Imgs1 />
          </div>

          <div className={styles.col}>
            <div className={styles.info}>

              {
                items[0].map((item, index) => {
                  return(
                    <div className={styles.item} key={index}>
                      <img src="icons/star2.png" alt="" />
                      <p>{item}</p>
                    </div>
                  )
                })
              }

            </div>
          </div>

        </div>

        <div className={styles.row}>

          <img className={styles.star +' '+ styles.star2} src="icons/star.png" alt="" />
      
          <div className={styles.col}>
            <div className={styles.info}>

              {
                items[1].map((item, index) => {
                  return(
                    <div className={styles.item} key={index}>
                      <img src="icons/star2.png" alt="" />
                      <p>{item}</p>
                    </div>
                  )
                })
              }

            </div>
          </div>

          <div className={styles.col}>
            <Title2 minor={titles[1][0]} major={titles[1][1]} span={titles[1][2]}/>
            <Imgs2 />
          </div>

        </div>

        <div className={styles.row}>

          <img className={styles.star +' '+ styles.star1} src="icons/star.png" alt="" />

          <div className={styles.col}>
            <Title2 minor={titles[2][0]} major={titles[2][1]} span={titles[2][2]}/>
            <Imgs3 />
          </div>

          <div className={styles.col}>
            <div className={styles.info}>

              {
                items[2].map((item, index) => {
                  return(
                    <div className={styles.item} key={index}>
                      <img src="icons/star2.png" alt="" />
                      <p>{item}</p>
                    </div>
                  )
                })
              }

            </div>
          </div>

        </div>

        <About />

        <Brands />

        <BigLogo />

      </div>
    
    </>
    
  )
}

export default index