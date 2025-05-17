import React from 'react'
import styles from './styles.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const index = () => {

  const reviews = [
    ['5', 'To passando aqui pra agradecer o excelente trabalho de você e sua equipe. Você é muito profissional e dedicada. Tenho certeza que tornou nosso evento mais especial.', 'Michel Amaral', 'Organizador do Front In Vale'],
    ['5', 'Guria, você superou todas as expectativas possíveis!!!! O trabalho de vocês foi impecável!! Tenho certeza que fizemos história e esse é só o começo!', 'Vanessa Bueno da Rocha', 'Coordenadora de Marketing da Schulz'],
    ['5', 'A Ju possui uma capacidade analítica e de planejamento incrível, consegue conduzir de forma estratégica a implementação de um projeto como ninguém. Juntas criamos métricas para entendimento de custo por lead, conversão, CPM... Graças a isso ganhamos escala e crescemos as vendas em 50%.', 'Andressa Bordon', 'CEO e Fundadora da Turney'],
    ['5', 'A Ju é do tipo de profissional que é capaz de gerar valor para qualquer marca, pessoa ou negócio, em diferentes circunstâncias, pois tem um set de habilidades diversas e uma visão sistêmica e inovadora das coisas. Trabalhar com ela é um tiro certeiro e um prazer.', 'Rafa Cappai', 'CEO e Fundadora da Espaçonave'],
  ]


  return (
    <div className={styles.container}>

      <div className={styles.col}>
        <div className={styles.bg}> </div>

        <h2>Depoimentos</h2>
        <h3>O que dizer depois que o vídeo vai pro ar conta mais que qualquer bio.</h3>
        

        <div className={styles.reviews}>
          {
            reviews.map((review, index) => {
              return (
                <div key={index} className={styles.review}>
                  <div className={styles.reviewRating}>
                    <p><FontAwesomeIcon icon={faStar} className={"fas fa-star"} /> {review[0]}/5</p>
                  </div>
                  <div className={styles.reviewText}>
                    <p>{review[1]}</p>
                  </div>
                  <div className={styles.reviewAuthor}>
                    <p>{review[2]}</p>
                    <p>{review[3]}</p>
                  </div>
                </div>
              )
            })
          }
        </div>


      </div>

    </div>
  )
}

export default index