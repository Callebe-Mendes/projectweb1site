"use client";
import styles from './Home.module.css';
import Link from 'next/link';

export default function HomeContent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heroTitle}>Bem-vindo ao nosso Catálogo!</h1>
      <p className={styles.heroSubtitle}>
        Encontre os melhores equipamentos para o seu setup gamer e home office.
      </p>
      <Link href="/produtos">
        <button className={styles.botaoCTA}>Ver Produtos</button>
      </Link>

      <div className={styles.secaoDestaque}>
        <h2 className={styles.destaquesTitulo}>Por que comprar conosco?</h2>
        <div className={styles.grid}>
          <div className={styles.itemDestaque}>
            <h3>🚀 Entrega Rápida</h3>
            <p>Receba seus produtos em até 3 dias úteis.</p>
          </div>
          <div className={styles.itemDestaque}>
            <h3>🔒 Compra Segura</h3>
            <p>Seus dados estão protegidos em todas as etapas.</p>
          </div>
          <div className={styles.itemDestaque}>
            <h3>💬 Suporte 24h</h3>
            <p>Nossa equipe está pronta para te ajudar a qualquer hora.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
