'use client'

import React from 'react'
import styles from './styles.module.css'
import Button from './button'
import Button2 from './button2'

const index = () => {

  const onClickHandle = () => {
    window.location.href = '/servicos'
  }


  return (
    <div className={styles.navbar}>

      <div className={styles.menu}>

        <img className={styles.logo} src="/logos/logoMenu.png" alt="logo" />

        <Button text={"Serviços"} onClickHandle={onClickHandle} />
        <Button text={"Cases"} onClickHandle={onClickHandle} />
        <Button text={"InCompany"} onClickHandle={onClickHandle} />
        <Button text={"Contato"} onClickHandle={onClickHandle} />

        <Button2 text={"Orçamento"} onClickHandle={onClickHandle}/>
      </div>

      
    </div>
  )
}

export default index