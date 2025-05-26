'use client'

import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'

import Login from  './login'
import Logged from './logged'

const index = () => {

  const [logged, setLogged] = useState(true);

  return (
    <div className={styles.container}>
      
      {
        logged ?
        <Logged logged={logged} logout={setLogged}/>
        :
        <Login login={setLogged}/>
      }
      
    </div>
  )
}

export default index