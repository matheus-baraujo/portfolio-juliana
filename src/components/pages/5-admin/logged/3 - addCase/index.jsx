'use client'

import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSuitcase } from '@fortawesome/free-solid-svg-icons';

import CaseForm from '@/components/others/caseForm';

const Index = ({ onReturn }) => {
  
  const title = "Adicione novo item aos";
  const title2 = "cases.";

  return (
    <div className={styles.container}>
      
      <div className={styles.title}>
        <h2>Adicionando Cases</h2>
        <p>{title} <span>{title2}</span></p>
      </div>

      <div className={styles.editor}>
        <CaseForm onReturn={onReturn} />

      </div>

    </div>
  )
}

export default Index;
