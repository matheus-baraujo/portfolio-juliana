'use client'

import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import CaseEditor from '@/components/others/caseEditor';

const index = () => {

  const [text1, setText1] = useState("De evento a campanha.\nDe bastidor a institucional. Cada vídeo aqui tem um objetivo claro:");
  const [text2, setText2] = useState("Comunicar, emocionar, converter e engajar.");
  const [videos, setVideos] = useState([
    { id: 1, name: "example (1).mp4" },
    { id: 2, name: "example (2).mp4" },
    { id: 3, name: "example (3).mp4" },
  ]);

  const [text3, setText3] = useState("De evento a campanha.\nDe bastidor a institucional. Cada vídeo aqui tem um objetivo claro:2");
  const [text4, setText4] = useState("Comunicar, emocionar, converter e engajar.2");
  const [videos2, setVideos2] = useState([
    { id: 1, name: "example (3).mp4" },
    { id: 2, name: "example (2).mp4" },
    { id: 3, name: "example (1).mp4" },
  ]);

  return (
    <div className={styles.container}>
      
      <div className={styles.title}>
        <h2>Home</h2>
        <p>Atualize o título e o texto da seção de cases <span>“Conheça meu trabalho como Videomaker Mobile”</span> </p>
      </div>

      <div className={styles.editor}>
        <CaseEditor txt={text1} setText={setText1} txt2={text2} setText2={setText2} videos={videos} setarVideos={setVideos} />

        <CaseEditor txt={text3} setText={setText3} txt2={text4} setText2={setText4} videos={videos2} setarVideos={setVideos2} />

      </div>

    </div>
  )
}

export default index