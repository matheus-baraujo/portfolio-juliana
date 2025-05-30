'use client'

import React, {useState} from 'react'
import styles from './styles.module.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEyeSlash, faEye, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

import { toast } from 'react-toastify';


const index = ({login}) => {

  const [show, setShow] = useState(false);

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const forgotPass = () => {
      toast(
        <div className={styles.toastInfo}>
          <h3>Recuperação de senha</h3>
          <p>Entre em contato com o suporte para redefinir sua senha.</p>
        </div>, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
        style: { marginTop: '40vh', width: '90%', maxWidth: '400px', borderRadius: '8px'},
      });
  }

  // Exibe toast
  const showErroLogin = () => {
    toast(
      <div className={styles.toastFailure}>
        <p><FontAwesomeIcon icon={faXmarkCircle} /> Credenciais Incorretas!</p>
      </div>, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      progress: undefined,
      theme: "dark",
      style: { marginTop: '40vh', width: '90%', maxWidth: '400px', borderRadius: '8px', backgroundColor: 'var(--highlight)'},
    });
  }

  const logar = async (user, pass) => {
    if (user == '' || pass == '') {
      showErroLogin();
      return;
    }

    // console.log(user, pass);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/loginAdmin.php`, {
        method: "POST",
        body: JSON.stringify({ usuario: user, senha: pass }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.success) {
        login(true);
      } else {
        showErroLogin();
        setUser('');
        setPass('');
        return;
      }
    } catch (e) {
      showErroLogin();
      setUser('');
      setPass('');
      return;
    }
  }


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
          <label htmlFor="login">Email</label>

          <div className={styles.inputWrapper}>
            <input type="text" id="login" placeholder="Usuário" required value={user} onChange={(e) => setUser(e.target.value)} />
            <FontAwesomeIcon icon={faUser} className={'fas fa-user '+ styles.inputIcon} />
          </div>
          
        </div>

        <div className={styles.input}>
          <div className={styles.passwordRow}>
            <label htmlFor="senha">Senha</label>
            <small onClick={forgotPass}>Esqueceu a senha?</small>
          </div>

          <div className={styles.inputWrapper}>
            <input type={show == true ? "text" : "password"} id="senha" placeholder="********" required value={pass} onChange={(e) => setPass(e.target.value)} />
            <FontAwesomeIcon icon={faLock} className={'fas fa-lock '+ styles.inputIcon} />
            <FontAwesomeIcon icon={ show == true ? faEyeSlash : faEye} className={ show == true ? 'fas fa-eye-slash '+ styles.inputIcon2 : 'fas fa-eye '+ styles.inputIcon2 } onClick={()=>{setShow(!show)}}/>
          </div>
          
        </div>

        <button onClick={() => logar(user, pass)}>Entrar</button>
      </div>
      
    </div>
  )
}

export default index