import Link from 'next/link';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <nav className={styles.navbar}>
      {/* A Logo em texto */}
      <div className={styles.logo}>
        <Link href="/">
          ThunderGear 
        </Link>
      </div>

      {/* Os Links Centralizados */}
      <ul className={styles.listaLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Sobre Empresa</Link></li>
        <li><Link href="/produtos">Produtos</Link></li>
        <li><Link href="/contact">Contato</Link></li>
      </ul>

      <div className={styles.espacador}></div>
    </nav>
  );
}