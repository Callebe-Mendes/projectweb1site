import styles from './CardProduto.module.css';
import Link from 'next/link';
import BotaoCurtir from '../BotaoCurtir';
import Image from 'next/image';

export default function CardProduto({ id, nome, preco, imagem }) {
  return (
    <div className={styles.card}>
      <Image
        src={`/imagensProjeto/${imagem}`}
        alt={`Imagem de ${nome}`}
        className={styles.imagemProduto}
        width={300}
        height={300}
      />
      <h3 className={styles.titulo}>{nome}</h3>
      <p className={styles.preco}>R$ {preco}</p>
      <div className={styles.acoes}>
        <Link href={`/produto/${id}`}>
          <button className={styles.botao}>Ver Detalhes</button>
        </Link>
        <BotaoCurtir />
      </div>
    </div>
  );
}
