import React from 'react'
import styles from './styles.module.css'

const index = ({number, titulo, texto, url}) => {

  var img = 'icons/icon'+(number+1)+'.svg'

  return (
    <div className={styles.container}>

      <img src={img} alt="icon" />
      <div className={styles.info}>
        <div className={styles.title}>
          <span>0{number+1}</span> {titulo}
        </div>
        <p>{texto}</p>
        <button>Ver case</button>
      </div>

      <div className={styles.borderBottom}> </div>

    </div>
  )
}

export default index