'use client'

import React, { useRef } from 'react'
import styles from './styles.module.css'

import { usePathname } from 'next/navigation';

import Button from '@/components/others/navbar/button'
import Button2 from '@/components/others/navbar/button2'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const redirect = (url) => {
  window.location.href = '/' + url
}

const Index = ({ footer }) => {
  const menuRef = useRef();

  const pathname = usePathname();

  const toggleMenu = () => {
    menuRef.current.classList.toggle(styles.active)
  }

  return (
    <div className={ (pathname == '/incompany' ? styles.navbar+' '+styles.inCompany : styles.navbar)}>
      <img className={styles.logoMobile} src="/logos/logoMenu.svg" alt="logo" onClick={() => window.location.href = '/' }/>

      <div className={styles.menu} ref={menuRef}>
        <img className={styles.logo} src="/logos/logoMenu.svg" alt="logo" onClick={() => window.location.href = '/' }/>

        {
          pathname == '/administrator' ?
          <></>
          :
          <>
            <Button text={"Serviços"} onClickHandle={redirect} toggle={toggleMenu}/>
            <Button text={"Cases"} onClickHandle={redirect} />
            <Button text={"InCompany"} onClickHandle={redirect} />

            {
              footer ? 
              <Button text={"Contato"} onClickHandle={redirect} />
              :
              <Button2 text={"Contato"} onClickHandle={redirect} footer={footer} inCompany={(pathname == '/incompany' ? true : false)}/>
            }
          </>

        }

      </div>

      {
        pathname == '/administrator' ?
        <></>
        :
        <button className={styles.sandwich} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className={'fas fa-bars'} />
        </button>
      }
      
    </div>
  )
}

export default Index
