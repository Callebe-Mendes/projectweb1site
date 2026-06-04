"use client";
import { useState } from 'react';
import styles from './ProdutoDetalhe.module.css';
import Link from 'next/link';

const listaProdutos = [
  { id: 1, nome: "Teclado Mecânico Akko", preco: "450,00", descricao: "Teclado mecânico com switches tácteis, iluminação RGB e layout compacto 75%." },
  { id: 2, nome: "Mouse Gamer Baseus", preco: "120,00", descricao: "Mouse gamer com sensor óptico de alta precisão, 6 botões programáveis e RGB." },
  { id: 3, nome: "Cabo HDMI UGREEN", preco: "45,00", descricao: "Cabo HDMI 2.0 de alta velocidade, suporta 4K 60Hz e HDR. 2 metros." },
  { id: 4, nome: "Hub USB Baseus", preco: "180,00", descricao: "Hub USB-C com 4 portas USB 3.0, entrada HDMI e carregamento rápido." },
];

export default function ProdutoDetalheContent({ id }) {
  const produto = listaProdutos.find((p) => p.id === Number(id));
  const [curtidas, setCurtidas] = useState(0);
  const [jaCurtiu, setJaCurtiu] = useState(false);
// Mesma função de curtir do BotaoCurtir, mas adaptada para o contexto do produto detalhado
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