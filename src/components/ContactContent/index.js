"use client";
import { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactContent() {
  const [dados, setDados] = useState({
    nameUser: "",
    emailUser: "",
    assunto: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", dados);
    setEnviado(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Fale Conosco</h1>
      <p className={styles.subtitulo}>Estamos prontos para te ajudar com qualquer dúvida sobre nossos produtos.</p>

      <div className={styles.splitLayout}>

        {/* Esquerda — Informações de contato */}
        <div className={styles.infoContato}>
          <h2 className={styles.infoTitulo}>Nossas Informações</h2>

          <div className={styles.infoItem}>
            <div>
              <strong>Endereço</strong>
              <p>Rua das Tecnologias, 42<br />Aparecida de Goiânia, GO<br />CEP: 74920-000</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <strong>E-mail</strong>
              <p>contato@hardwaregamer.com.br</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <strong>Atendimento</strong>
              <p>Segunda a Sexta: 9h – 18h<br />Sábado: 9h – 13h</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <strong>WhatsApp</strong>
              <p>(62) 99999-0000</p>
            </div>
          </div>
        </div>

        {/* Direita — Formulário */}
        <div className={styles.formWrapper}>
          {enviado ? (
            <div className={styles.sucesso}>
              <span>OK</span>
              <p>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formulario}>
              <div className={styles.campo}>
                <label className={styles.label}>Nome</label>
                <input
                  type="text"
                  name="nameUser"
                  placeholder="Seu nome completo"
                  value={dados.nameUser}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.campo}>
                <label className={styles.label}>E-mail</label>
                <input
                  type="email"
                  name="emailUser"
                  placeholder="seu@email.com"
                  value={dados.emailUser}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.campo}>
                <label className={styles.label}>Assunto</label>
                <input
                  type="text"
                  name="assunto"
                  placeholder="Ex: Dúvida sobre produto"
                  value={dados.assunto}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.campo}>
                <label className={styles.label}>Mensagem</label>
                <textarea
                  name="mensagem"
                  placeholder="Escreva sua mensagem aqui..."
                  value={dados.mensagem}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className={styles.botao}>Enviar Mensagem</button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
