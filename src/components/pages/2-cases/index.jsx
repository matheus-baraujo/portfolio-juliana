'use client'

import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Case from './case/index.jsx'

const index = () => {

  const cases = [ ['Título do trabalho executado', 
                  'Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh.', 
                  ['videos/example (1).mp4', 'videos/example (2).mp4', 'videos/example (3).mp4']], 
                  ['Título do trabalho executado', 
                  'Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh.', 
                  ['videos/example (1).mp4', 'videos/example (2).mp4', 'videos/example (3).mp4']], 
                  ['Título do trabalho executado', 
                  'Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh.', 
                  ['videos/example (1).mp4', 'videos/example (2).mp4', 'videos/example (3).mp4']],
                  ['Título do trabalho executado', 
                  'Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh.', 
                  ['videos/example (1).mp4', 'videos/example (2).mp4', 'videos/example (3).mp4']], 
                  ['Título do trabalho executado', 
                  'Lorem ipsum dolor sit amet consectetur. Nisi diam vel eleifend malesuada turpis. Viverra ut metus arcu pulvinar nisi id tellus. Arcu habitant elementum lorem erat. Congue tristique vel suspendisse eu elit blandit sed nibh.', 
                  ['videos/example (1).mp4', 'videos/example (2).mp4', 'videos/example (3).mp4']]
                ]

  const [visibleCases, setVisibleCases] = useState(2)
  const sentinelRef = useRef(null)

  useEffect(() => {
    if (!sentinelRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCases(prev => (prev < cases.length ? prev + 1 : prev))
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
  }, [cases.length])

  return (
    <div className={styles.container}>
      
      <div className={styles.cta}>
        <h2>Cases</h2>
        <p>Algumas das histórias que já ajudei a contar</p>
      </div>

      {
        cases.slice(0, visibleCases).map((item, index) => {
          return (
            <Case key={index} projeto={item} direction={index%2 == 0 ? true : false} />
          )
        })
      }

      {/* Sentinela invisível no final */}
      <div ref={sentinelRef} style={{ height: '1px' }} />
      
    </div>
  )
}

export default index