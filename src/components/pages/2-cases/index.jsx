'use client'

import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Case from '@/components/others/case'

const index = () => {

  const [sections, setSections] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/getCases.php`)
      .then(res => res.json())
      .then(data => {
        setSections(data); // Supondo que você use: const [sections, setSections] = useState([]);
      })
      .catch(err => console.error("Erro ao buscar seções:", err));
  }, []);

  const [visibleCases, setVisibleCases] = useState(2)
  const sentinelRef = useRef(null)

  useEffect(() => {
    if (!sentinelRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCases(prev => (prev < sections.length ? prev + 1 : prev))
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -100px 0px', // começa a carregar 100px antes do fim
        threshold: 0
      }
    )

    observer.observe(sentinelRef.current)

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current)
      }
    }
  }, [sections.length])

  return (
    <div className={styles.container}>
      
      <div className={styles.cta}>
        <h2>Cases</h2>
        <p>Algumas das histórias que já ajudei a contar</p>
      </div>

      {
        sections.slice(0, visibleCases).map((item, index) => {
          return (
            <Case key={index} projeto={item} direction={index%2 == 0 ? true : false} home={false}/>
          )
        })
      }

      {/* Sentinela invisível no final */}
      <div ref={sentinelRef} style={{ height: '1px' }} />
      
    </div>
  )
}

export default index