import React from 'react'
import styles from './styles.module.css'

const index = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default index