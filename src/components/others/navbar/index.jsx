'use client'

import React from 'react'
import styles from './styles.module.css'


import Button from '@/components/others/navbar/button'
import Button2 from '@/components/others/navbar/button2'




const redirect = (url) => {
  window.location.href = '/'+url
}


const index = ({footer}) => {

  return (
    <div className={styles.navbar}>

      <div className={styles.menu}>

        <img className={styles.logo} src="/logos/logoMenu.png" alt="logo" onClick={() => window.location.href = '/' }/>

        <Button text={"Serviços"} onClickHandle={redirect} />
        <Button text={"Cases"} onClickHandle={redirect} />
        <Button text={"InCompany"} onClickHandle={redirect} />
        <Button text={"Contato"} onClickHandle={redirect} />

        <Button2 text={"Orçamento"} onClickHandle={redirect} footer={footer}/>
      </div>

    </div>
  )
}

export default index