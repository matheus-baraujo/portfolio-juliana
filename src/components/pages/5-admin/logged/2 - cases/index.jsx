'use client'

import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import CaseEditor from '@/components/others/caseEditor';

const Index = () => {
  const [sections, setSections] = useState([]);

  const deleteCase = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/delete-case.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.error || "Erro ao deletar o case");
      }

      // Atualiza os dados após deletar
      const updatedRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getCases.php`);
      const data = await updatedRes.json();

      const formatted = data.map(section => ({
        ...section,
        texto1: section.titulo.replace(/\\r\\n|\\n/g, '\n'),
        texto2: section.texto.replace(/\\r\\n|\\n/g, '\n'),
        videos: JSON.parse(section.videos)
      }));

      setSections(formatted);

    } catch (error) {
      console.error("Erro ao deletar o case:", error.message);
      alert("Erro ao deletar o case: " + error.message);
    }
  };

  const moveSection = (fromIndex, toIndex) => {
    if (toIndex < 0 || toIndex >= sections.length) return;

    const updated = [...sections];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setSections(updated);

    // Salva a nova ordem automaticamente
    const ordens = updated.map((section, index) => ({
      id: section.id,
      ordem: index
    }));

    fetch(`${process.env.NEXT_PUBLIC_URL}/api/update-order.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ordens)
    })
      .then(res => res.json())
      .then(data => {
        if (!data.success) {
          console.error('Erro ao salvar nova ordem:', data.error);
        }
      });
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/getCases.php`)
      .then(res => res.json())
      .then(data => {
        // Transforma os dados brutos em objetos mais utilizáveis
        const formatted = data.map(section => ({
          ...section,
          texto1: section.titulo.replace(/\\r\\n|\\n/g, '\n'),
          texto2: section.texto.replace(/\\r\\n|\\n/g, '\n'),
          videos: JSON.parse(section.videos)
        }));
        setSections(formatted);
      })
      .catch(err => console.error("Erro ao buscar seções:", err));
  }, []);

  const title = "Atualize o título e o texto\n da seção de";
  const title2 = "cases.";

  return (
    <div className={styles.container}>
      
      <div className={styles.title}>
        <h2>Cases</h2>
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

            home={false}

            onDelete={() => deleteCase(section.id)}

            inFirst={idx === 0}
            inLast={idx === sections.length - 1}

            onMoveUp={() => moveSection(idx, idx - 1)}
            onMoveDown={() => moveSection(idx, idx + 1)}  

          />
        ))}
      </div>

      

    </div>
  )
}

export default Index;
