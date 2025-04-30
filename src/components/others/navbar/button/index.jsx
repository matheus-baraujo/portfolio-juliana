import React from 'react'
import styles from './styles.module.css'

const index = ({ text, onClickHandle}) => {
  return (
    <button className={styles.btn}
      onClick={() => {onClickHandle()} } >
      <span>{text}</span>
    </button>
  )
}

export default index