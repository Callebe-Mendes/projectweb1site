import Link from "next/link";

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Sobre Empresa</Link></li>
        <li><Link href="/produtos">Produtos</Link></li>
        <li><Link href="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;