'use client'

import React from 'react'
import styles from './styles.module.css'

import StickyBox from "react-sticky-box";

import Card from './card'

const index = () => {

  const cards = [['Real Time','Cobertura em tempo real de eventos, ativações e bastidores. Captação, edição e publicação com agilidade no ritmo digital',''],
                 ['Pacote de vídeos','Criação contínua de conteúdo em vídeo para redes sociais. Pautas, gravação e entrega com consistência e estratégia.',''],
                 ['Treinamento inCompany','Seu time para criar aprende a produzir vídeos com qualidade, usando o que já tem: celular, ideia e direção. Sem enrolação, com foco em prática real.',''],
                 ['Liderança de Time Audiovisual','Assumo a direção criativa e estratégica da produção de vídeos ao vivo da sua equipe. Coordeno, executo e garanto resultado.','']]


  return (
    <div className={styles.container} id='services'>
      
      <div className={styles.borderTop}> </div>
      <div className={styles.borderBottom}> </div>

      <div className={styles.col1}>
        <StickyBox offsetTop={100} offsetBottom={20}>
          <h2>Como posso impulsionar suas ideias?</h2>
        </StickyBox>
      </div>

      <div className={styles.col2}>

        {
          cards.map((card, index) => {
            return (
              <Card key={index} number={index} titulo={card[0]} texto={card[1]} url={card[2]} />
            )
          })
        }

      </div>
      
    </div>
  )
}

export default index