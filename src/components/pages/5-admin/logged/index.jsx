'use client'

import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'

import Home from './1 - home'
import Cases from './2 - cases'
import AddCases from './3 - addCase'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSuitcase } from '@fortawesome/free-solid-svg-icons';

const index = ({logged, logout}) => {

  // 0 home - 1 home content - 2 cases content - 3 add case
  const [selector, setSelector] = useState(0);

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
              <button onClick={() => setSelector(1)}><FontAwesomeIcon icon={faHouse} className={'fas fa-house'}/> Home</button>
              <p>Gerencie conteúdos da página principal</p>
            </div>

            <div>
              <button  onClick={() => setSelector(2)}><FontAwesomeIcon icon={faSuitcase} className={'fas fa-suitcase'}/> Cases</button>
              <p>Gerencie conteúdos da página de cases</p>
            </div>

          </div>
        </>
        :
          selector == 1?
            <Home />
          :selector == 2?
            <Cases addCase={setSelector}/>
          :<AddCases onReturn={setSelector}/>

      }

      
      <div className={styles.returnContainer}>

        {
          selector != 0 ?
          <button className={styles.return} onClick={() => selector==3 ? setSelector(2) : setSelector(0)}>Voltar</button>
          :
          <></>
        }
        
        <button className={styles.logout} onClick={() => logout(false)}>Logout</button>
      </div>

    </div>
  )
}

export default index