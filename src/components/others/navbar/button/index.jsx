import React from 'react'
import styles from './styles.module.css'

const index = ({ text, onClickHandle, toggle, inCompany}) => {

  var url = null;

  let aux = null

  inCompany ?
    aux = styles.inCompany
  :
    aux = ''

  switch (text) {
    case 'Serviços':
      url = '#services'
      break;
    case 'Cases':
      url = 'cases'
      break;
    case 'InCompany':
      url = 'incompany'
      break;
    case 'Contato':
      url = 'contato'
      break;
  
    default:
      url = ''
      break;
  }

  return (
    <button className={styles.btn+' '+aux}
      onClick={() => {text == 'Serviços' ? (toggle(), onClickHandle(url)) : onClickHandle(url)} } >
      <span>{text}</span>
    </button>
  )
}

export default index