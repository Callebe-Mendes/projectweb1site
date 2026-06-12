import styles from './About.module.css';
import Image from 'next/image';

export default function AboutContent() {
  return (
    <div className={styles.container}>

      {/* Split Layout — imagem + história */}
      <section className={styles.splitLayout}>
        <div className={styles.splitImagem}>
          <Image 
            src="/imagensProjeto/Setup_Gamer.jpg"
            alt="Setup gamer profissional"
            className={styles.imagem}
            width={600}
            height={400}
          />
        </div>
        <div className={styles.splitTexto}>
          <span className={styles.eyebrow}>Nossa História</span>
          <h1 className={styles.titulo}>De gamers para gamers</h1>
          <p className={styles.descricao}>
            Nascemos em Aparecida de Goiânia, GO, com uma missão simples: reunir em um único
            catálogo os melhores periféricos e equipamentos de hardware do mercado, curados
            por quem realmente usa e entende do assunto.
          </p>
          <p className={styles.descricao}>
            Desde 2022, ajudamos centenas de jogadores e profissionais a montarem setups
            de alta performance sem perder tempo pesquisando em dezenas de lojas. Somos
            especialistas em marcas como Akko, Baseus e UGREEN.
          </p>
        </div>
      </section>

      {/* Cards Missão, Visão e Valores */}
      <section className={styles.secaoMVV}>
        <h2 className={styles.secaoTitulo}>O que nos guia</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Nossa Missão</h3>
            <p>Conectar pessoas à tecnologia de qualidade com preço justo e curadoria honesta.</p>
          </div>
          <div className={styles.card}>
            <h3>Nossa Visão</h3>
            <p>Ser referência nacional em catálogos de produtos tech para gamers e criadores.</p>
          </div>
          <div className={styles.card}>
            <h3>Nossos Valores</h3>
            <p>Transparência, inovação e satisfação do cliente acima de tudo.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
