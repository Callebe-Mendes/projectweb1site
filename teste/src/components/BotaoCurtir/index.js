"use client"; // Diretiva exigida pelo professor para componentes interativos
import { useState } from 'react';
import styles from './BotaoCurtir.module.css';

export default function BotaoCurtir() {
  // Hook useState para gerenciar o número de curtidas
  const [curtidas, setCurtidas] = useState(0);

  return (
    <button 
      className={styles.botaoFavorito} 
      onClick={() => setCurtidas(curtidas + 1)}
    >
      ❤️ Curtir ({curtidas})
    </button>
  );
}