'use client'

import React, { useRef } from 'react'
import styles from './styles.module.css'

import Button from '@/components/others/navbar/button'
import Button2 from '@/components/others/navbar/button2'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const redirect = (url) => {
  window.location.href = '/' + url
}

const Index = ({ footer }) => {
  const menuRef = useRef()

  const toggleMenu = () => {
    menuRef.current.classList.toggle(styles.active)
  }

  return (
    <div className={styles.navbar}>
      <img className={styles.logoMobile} src="/logos/logoMenu.png" alt="logo" onClick={() => window.location.href = '/' }/>

      <div className={styles.menu} ref={menuRef}>
        <img className={styles.logo} src="/logos/logoMenu.png" alt="logo" onClick={() => window.location.href = '/' }/>

        <Button text={"Serviços"} onClickHandle={redirect} toggle={toggleMenu}/>
        <Button text={"Cases"} onClickHandle={redirect} />
        <Button text={"InCompany"} onClickHandle={redirect} />
        <Button text={"Contato"} onClickHandle={redirect} />
        <Button2 text={"Orçamento"} onClickHandle={redirect} footer={footer} />
      </div>

      <button className={styles.sandwich} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className={'fas fa-bars'} />
      </button>
    </div>
  )
}

export default Index
