"use client";
import styles from './BarraBusca.module.css';

export default function BarraBusca({ textoBusca, setTextoBusca }) {
  return (
    <input 
      type="text" 
      className={styles.inputBusca}
      placeholder="Pesquisar produtos..."
      value={textoBusca}
      onChange={(e) => setTextoBusca(e.target.value)}
    />
  );
}
