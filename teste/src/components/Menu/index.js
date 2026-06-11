import Link from "next/link";
import styles from "./Menu.module.css"; // Importando o CSS

function Menu() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.lista}>
        <li><Link href="/" className={styles.link}>Home</Link></li>
        <li><Link href="/about" className={styles.link}>Sobre Empresa</Link></li>
        <li><Link href="/produtos" className={styles.link}>Produtos</Link></li>
        <li><Link href="/contact" className={styles.link}>Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;