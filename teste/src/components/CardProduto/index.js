import styles from './CardProduto.module.css';
import Link from 'next/link';
import BotaoCurtir from '../BotaoCurtir'; // Importando o novo componente

export default function CardProduto({ id, nome, preco, imagem }) { // Adicionada a prop 'imagem'
  return (
    <div className={styles.card}>
      
      {/* Tag da imagem adicionada aqui, antes do título */}
      <CardProduto 
        id={1} 
        nome="Teclado Mecânico Akko" 
        preco="450,00" 
        imagem="Teclado_Mecanico_Akko.png" /* Adicione essa linha aqui */
      />
      
      <img 
        src={`/imagensProjeto/${imagem}`} 
        alt={`Imagem de ${nome}`} 
        className={styles.imagemProduto} 
      />

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