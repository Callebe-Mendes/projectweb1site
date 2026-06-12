"use client";
import styles from './Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeContent() {
  return (
    <div className={styles.container}>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Seu Setup dos Sonhos<br />Começa Aqui.</h1>
        <p className={styles.heroSubtitle}>
          Hardware gamer e periféricos de alta performance para quem leva o jogo a sério.
        </p>
        <Link href="/produtos">
          <button className={styles.botaoCTA}>Ver Catálogo Completo</button>
        </Link>
      </section>

      {/* Cards de benefícios */}
      <section className={styles.secaoBeneficios}>
        <h2 className={styles.secaoTitulo}>Por que comprar conosco?</h2>
        <div className={styles.gridBeneficios}>
          <div className={styles.cardBeneficio}>
            <h3>Entrega Rápida</h3>
            <p>Receba seus produtos em até 3 dias úteis em todo o Brasil.</p>
          </div>
          <div className={styles.cardBeneficio}>
            <h3>Compra Segura</h3>
            <p>Seus dados protegidos com criptografia em todas as etapas.</p>
          </div>
          <div className={styles.cardBeneficio}>           
            <h3>Suporte 24h</h3>
            <p>Nossa equipe está pronta para te ajudar a qualquer hora.</p>
          </div>
        </div>
      </section>

      {/* Destaque da Semana — Split Layout */}
      <section className={styles.secaoDestaque}>
        <h2 className={styles.secaoTitulo}>Destaque da Semana</h2>
        <div className={styles.splitLayout}>
          <div className={styles.splitImagem}>
            <Image
              src="/imagensProjeto/Teclado_Akko_Goku.png" 
              alt="Teclado Akko Dragon Ball Z"
              className={styles.imagemDestaque}
              width={600}
              height={600}
            />
        </div>
          <div className={styles.splitTexto}>
            <span className={styles.badge}>Oferta Especial</span>
            <h3 className={styles.destaqueNome}>Teclado Akko Dragon Ball Z</h3>
            <p className={styles.destaqueDescricao}>
              Edição especial do teclado mecânico Akko com tema Dragon Ball Z, switches tácteis e iluminação RGB.
            </p>
            <p className={styles.destaquePreco}>R$ 350,00</p>
            <Link href="/produto/5">
              <button className={styles.botaoCTA}>Ver Detalhes</button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
