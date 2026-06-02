import styles from './CardProduto.module.css';
import Link from 'next/link';
import BotaoCurtir from '../BotaoCurtir'; // Importando o novo componente

export default function CardProduto({ id, nome, preco }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.titulo}>{nome}</h3>
      <p className={styles.preco}>R$ {preco}</p>
      
      <div>
        <Link href={`/produto/${id}`}>
          <button className={styles.botao}>Ver Detalhes</button>
        </Link>
        {/* Adicionando a interatividade do Integrante 3 aqui */}
        <BotaoCurtir />
      </div>
    </div>
  );
}