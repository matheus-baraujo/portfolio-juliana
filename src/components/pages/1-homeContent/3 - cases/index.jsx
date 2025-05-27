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
        // data é um array com as duas seções
        console.log(data); // Veja a estrutura

        // Se quiser armazenar tudo de uma vez:
        setSections(data); // Supondo que você use: const [sections, setSections] = useState([]);
      })
      .catch(err => console.error("Erro ao buscar seções:", err));
  }, []);

  // const cases = [ ['De evento a campanha. De bastidor a institucional. Cada vídeo aqui tem um objetivo claro: ', 
  //                 'Comunicar,\nemocionar,\nconverter e\nengajar.', 
  //                 ['videos/example (1).mp4', 'videos/example (2).mp4', 'videos/example (3).mp4']], 
  //                 ['No evento X participei da equipe de produção real time para entrega de conteúdos. Fiquei responsável pela (captação, edição - colocar aqui) , coordenando as entregas e editando os materiais captados. Foram X dias com uma média de X vídeos entregues por dia.', 
  //                 '+ x% alcance\n+ x% engajamento', 
  //                 ['videos/example (1).mp4', 'videos/example (2).mp4', 'videos/example (3).mp4']], 
  //               ]

  return (
    <div className={styles.container}>
      
      <div className={styles.title}>
        <h2>Conheça meu trabalho como Videomaker Mobile</h2>
      </div>

      {
        sections.map((item, index) => {
          console.log(item);
          return (
            <Case key={index} projeto={item} direction={index%2 == 0 ? true : false} home={true}/>
          )
        })
      }
      
    </div>
  )
}

export default index