import React from 'react'
import styles from './styles.module.css'

const index = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" id="telefone" name="telefone" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows={7} required></textarea>
      </div>
      <button>Enviar</button>
    </form>
  )
}

export default index