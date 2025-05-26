'use client'

import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'

import Home from './1 - home'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSuitcase } from '@fortawesome/free-solid-svg-icons';

const index = ({logged, logout}) => {

  // 0 home - 1 home content - 2 cases content
  const [selector, setSelector] = useState(1);

  return (
    <div className={styles.container}>
      
      {
        selector == 0 ?
        <>
          <div className={styles.title}>
            <h2>O que vamos atualizar hoje?</h2>
            <p>Selecione a sessão a ser atualizada</p>
          </div>

          <div className={styles.selector}>
            <div>
              <button><FontAwesomeIcon icon={faHouse} className={'fas fa-house'} /> Home</button>
              <p>Gerencie conteúdos da página principal</p>
            </div>

            <div>
              <button><FontAwesomeIcon icon={faSuitcase} className={'fas fa-suitcase'} /> Cases</button>
              <p>Gerencie conteúdos da página de cases</p>
            </div>

          </div>
        </>
        :
          selector == 1?
          <Home />
          :
          <></>

      }


      

      <button className={styles.logout}>Logout</button>

    </div>
  )
}

export default index