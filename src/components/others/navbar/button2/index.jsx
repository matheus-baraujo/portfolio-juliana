import React from 'react'
import styles from './styles.module.css'

const index = ({ text, onClickHandle, footer, inCompany}) => {

  let aux = null
  let aux2 = null

  footer ? 
    aux = styles.btnFooter
  :
    aux = styles.btnDefault

  
  inCompany ?
    aux2 = styles.inCompany
  :
    aux2 = ''


  return (
    <button className={styles.btn + ' ' + aux + ' ' + aux2}
      onClick={() => {onClickHandle('orcamento')} } >
      <span>{text}</span>
    </button>
  )
}

export default index