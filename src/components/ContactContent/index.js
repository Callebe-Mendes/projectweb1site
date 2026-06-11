
"use client";
import { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactContent() {
  const [data, setData] = useState({
    nameUser: "",
    emailUser: ""
  });

  const [enviado, setEnviado] = useState(false);

  const valueInput = e => setData({ ...data, [e.target.name]: e.target.value });

  const addUser = (e) => {
    e.preventDefault();
    console.log("Nome: " + data.nameUser);
    console.log("E-mail: " + data.emailUser);
    setEnviado(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Vem falar com a gente!</h2>
      <p className={styles.subtitulo}>Preencha o formulário abaixo e entraremos em contato.</p>

      {enviado ? (
        <p className={styles.sucesso}>✅ Cadastro realizado com sucesso!</p>
      ) : (
        <form onSubmit={addUser} className={styles.formulario}>
          <div className={styles.campo}>
            <label className={styles.label}>Nome</label>
            <input
              type="text"
              name="nameUser"
              placeholder="Nome do Cliente"
              onChange={valueInput}
              className={styles.input}
            />
          </div>

          <div className={styles.campo}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="emailUser"
              placeholder="E-mail do Cliente"
              onChange={valueInput}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.botao}>Cadastrar</button>
        </form>
      )}
    </div>
  );
}
