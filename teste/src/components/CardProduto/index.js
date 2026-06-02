javascript
import styles from './CardProduto.module.css';
import Link from 'next/link';

export default function CardProduto({ id, nome, preco }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.titulo}>{nome}</h3>
      <p className={styles.preco}>R$ {preco}</p>
      
      {/* Aqui já reaproveitamos a rota dinâmica que você criou na etapa anterior */}
      <Link href={`/produto/${id}`}>
        <button className={styles.botao}>Ver Detalhes</button>
      </Link>
    </div>
  );
}
