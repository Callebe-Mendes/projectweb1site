"use client";
import { useState } from 'react';
import styles from './ProdutoDetalhe.module.css';
import Link from 'next/link';
import { listaProdutos } from '../ProdutosContent';


export default function ProdutoDetalheContent({ id }) {
  const produto = listaProdutos.find((p) => p.id === Number(id));
  const [curtidas, setCurtidas] = useState(0);
  const [jaCurtiu, setJaCurtiu] = useState(false);
// Mesma função de curtir do BotaoCurtir, porém adaptada para o contexto do produto detalhado
  function handleCurtir() {
    if (jaCurtiu) {
      setCurtidas(curtidas - 1);
      setJaCurtiu(false);
    } else {
      setCurtidas(curtidas + 1);
      setJaCurtiu(true);
    }
  }

  if (!produto) {
    return (
      <div className={styles.container}>
        <p className={styles.erro}>Produto não encontrado.</p>
        <Link href="/produtos">
          <button className={styles.botaoVoltar}>← Voltar aos Produtos</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.nome}>{produto.nome}</h2>
        <p className={styles.preco}>R$ {produto.preco}</p>
        <p className={styles.descricao}>{produto.descricao}</p>

        <div className={styles.acoes}>
          <button
            className={`${styles.botaoCurtir} ${jaCurtiu ? styles.curtido : ""}`}
            onClick={handleCurtir}
          >
            {jaCurtiu ? "❤️ Curtido!" : `🤍 Curtir (${curtidas})`}
          </button>

          <Link href="/produtos">
            <button className={styles.botaoVoltar}>← Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}