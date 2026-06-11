
import styles from './About.module.css';

export default function AboutContent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Sobre a Empresa</h1>
      <p className={styles.descricao}>
        Somos uma loja especializada em equipamentos de tecnologia, com foco em
        oferecer os melhores produtos para gamers e profissionais de home office.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>🎯 Nossa Missão</h3>
          <p>Conectar pessoas à tecnologia de qualidade com preço justo.</p>
        </div>
        <div className={styles.card}>
          <h3>👁️ Nossa Visão</h3>
          <p>Ser referência nacional em catálogos de produtos tech.</p>
        </div>
        <div className={styles.card}>
          <h3>💡 Nossos Valores</h3>
          <p>Transparência, inovação e satisfação do cliente acima de tudo.</p>
        </div>
      </div>
    </div>
  );
}
