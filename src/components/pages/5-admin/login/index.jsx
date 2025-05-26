'use client'

import React, {useState} from 'react'
import styles from './styles.module.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';


const index = ({login}) => {

  const [show, setShow] = useState(false);


  return (
    <div className={styles.containerLogin}>

      <div className={styles.title}>
        <h2>Gerenciador <br/> de conteúdo</h2>
        <img src="icons/hammer.png" alt="icon hammer" />
      </div>

      <div className={styles.loginBox}>

        <div>
          <h2>Acesso</h2>
          <p>Entre com suas credenciais</p>
        </div>
        
        <div className={styles.input}>
          <label htmlFor="email">Email</label>

          <div className={styles.inputWrapper}>
            <input type="email" id="email" placeholder="seuemail@exemplo.com" required/>
            <FontAwesomeIcon icon={faUser} className={'fas fa-user '+ styles.inputIcon} />
          </div>
          
        </div>

        <div className={styles.input}>
          <div className={styles.passwordRow}>
            <label htmlFor="senha">Senha</label>
            <small>Esqueceu a senha?</small>
          </div>

          <div className={styles.inputWrapper}>
            <input type={show == true ? "text" : "password"} id="senha" placeholder="********" required/>
            <FontAwesomeIcon icon={faLock} className={'fas fa-lock '+ styles.inputIcon} />
            <FontAwesomeIcon icon={ show == true ? faEyeSlash : faEye} className={ show == true ? 'fas fa-eye-slash '+ styles.inputIcon2 : 'fas fa-eye '+ styles.inputIcon2 } onClick={()=>{setShow(!show)}}/>
          </div>
          
        </div>

        <button>Entrar</button>
      </div>
      
    </div>
  )
}

export default index