'use client'

import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import CaseEditor from '@/components/others/caseEditor';

const Index = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/getCasesHome.php`)
      .then(res => res.json())
      .then(data => {
        // Transforma os dados brutos em objetos mais utilizáveis
        const formatted = data.map(section => ({
          ...section,
          texto1: section.texto1.replace(/\\r\\n|\\n/g, '\n'),
          texto2: section.texto2.replace(/\\r\\n|\\n/g, '\n'),
          videos: JSON.parse(section.videos)
        }));
        setSections(formatted);
      })
      .catch(err => console.error("Erro ao buscar seções:", err));
  }, []);

  const title = "Atualize o título e o texto\n da seção de cases\n";
  const title2 = "“Conheça meu trabalho como Videomaker Mobile”";

  return (
    <div className={styles.container}>
      
      <div className={styles.title}>
        <h2>Home</h2>
        <p>{title} <span>{title2}</span></p>
      </div>

      <div className={styles.editor}>
        {sections.map((section, idx) => (
          <CaseEditor
            key={section.id}

            number={section.id}

            txt={section.texto1}

            setText={(newText) => {
              const copy = [...sections];
              copy[idx].texto1 = newText;
              setSections(copy);
            }}

            txt2={section.texto2}

            setText2={(newText) => {
              const copy = [...sections];
              copy[idx].texto2 = newText;
              setSections(copy);
            }}

            videos={section.videos}

            setarVideos={(newVideos) => {
              const copy = [...sections];
              copy[idx].videos = newVideos;
              setSections(copy);
            }}

          />
        ))}
      </div>

    </div>
  )
}

export default Index;
