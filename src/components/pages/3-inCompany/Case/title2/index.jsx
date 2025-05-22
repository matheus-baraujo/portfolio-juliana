import React from 'react'
import styles from './styles.module.css'

const index = ({minor, major, span}) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>{minor}</p>
        <h3>{major}<br/> <span>{span}</span></h3>
      </div>
    </div>
  )
}

export default index