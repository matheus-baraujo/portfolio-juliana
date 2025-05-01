import React from 'react'
import styles from './styles.module.css'

const index = ({ text, onClickHandle, footer}) => {

  let aux = null

  footer ? 
    aux = styles.btnFooter
  :
    aux = styles.btnDefault


  return (
    <button className={styles.btn + ' ' + aux}
      onClick={() => {onClickHandle('orcamento')} } >
      <span>{text}</span>
    </button>
  )
}

export default index