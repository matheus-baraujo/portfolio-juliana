'use client'

import React from 'react'
import styles from './styles.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Navbar from '@/components/others/navbar'

import { usePathname } from 'next/navigation';

const index = () => {

  const pathname = usePathname();

  const info = [
    [faInstagram, 'fab fa-instagram'],
    [faWhatsapp, 'fab fa-whatsapp'],
    [faEnvelope, 'far fa-envelope'],
  ];

  return (
    <div className={ (pathname == '/contato' ? styles.footerContato : styles.footer)}>


      {
        pathname == '/contato' ?
          <></>
          :
          <div className={styles.cta}>
            <h2>Coloque sua marca em movimento</h2>
            <p>vem co-criar com a ju!</p>
          </div>
      }

      <div className={styles.section}>

      {
        pathname == '/contato' ?
          <></>
          :
          <Navbar footer={true}/>
      }

        

        <div className={styles.socials}>
          <div className={styles.info}>
            <p>Onde me encontrar</p>

            <div className={styles.icons}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={info[0][0]} className={info[0][1]} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={info[1][0]} className={info[1][1]} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={info[2][0]} className={info[2][1]} />
              </a>
            </div>
          </div>

        </div>

        <div className={styles.copyright}>
          <p>Política de privacidade</p>
          <p>2025 by FINDOUT | Juliana Ilha</p>
        </div>

      </div>

    </div>
  )
}

export default index