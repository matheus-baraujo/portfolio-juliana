'use client'

import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'

import Case from '@/components/others/case'

const index = () => {

  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("http://localhost/api/getCasesHome.php")
      .then(res => res.json())
      .then(data => {
        setSections(data); // Supondo que você use: const [sections, setSections] = useState([]);
      })
      .catch(err => console.error("Erro ao buscar seções:", err));
  }, []);


  return (
    <div className={styles.container}>
      
      <div className={styles.title}>
        <h2>Conheça meu trabalho como Videomaker Mobile</h2>
      </div>

      {
        sections.map((item, index) => {
          
          return (
            <Case key={index} projeto={item} direction={index%2 == 0 ? true : false} home={true}/>
          )
        })
      }
      
    </div>
  )
}

export default index