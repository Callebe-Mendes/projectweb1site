"use client";
import { useState } from 'react';
import styles from './BotaoCurtir.module.css';

export default function BotaoCurtir() {
  const [curtidas, setCurtidas] = useState(0);
  const [jaCurtiu, setJaCurtiu] = useState(false);

  // Função para lidar com o clique no botão de curtir
 function handleCurtir() {
    if (jaCurtiu) {
      setCurtidas(curtidas - 1);
      setJaCurtiu(false);
    } else {
      setCurtidas(curtidas + 1);
      setJaCurtiu(true);
    }
  }

    return (
    <button
      className={`${styles.botaoFavorito} ${jaCurtiu ? styles.curtido : ""}`}
      onClick={handleCurtir}
    >
      {jaCurtiu ? "❤️ Curtido!" : `🤍 Curtir (${curtidas})`}
    </button>
  );
}