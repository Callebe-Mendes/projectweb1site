"use client";
import { useState } from 'react';
import styles from './ProdutosContent.module.css';
import CardProduto from '../CardProduto';
import BarraBusca from '../BarraBusca';

export const listaProdutos = [
  { id: 1, nome: "Teclado Mecânico Akko", preco: "450,00", imagem: "Teclado_Mecanico_Akko.jpg", descricao: "Teclado mecânico com switches tácteis, iluminação RGB e layout compacto 75%." },
  { id: 2, nome: "Mouse Gamer Baseus GM10", preco: "120,00", imagem: "Mouse_Gamer_Logitech.jpg", descricao: "Mouse gamer com sensor óptico de alta precisão, 6 botões programáveis e RGB." },
  { id: 3, nome: "Cabo HDMI UGREEN 4K 2m", preco: "45,00", imagem: "Cabo_Hdmi_Ugreen.jpg", descricao: "Cabo HDMI 2.0 de alta velocidade, suporta 4K 60Hz e HDR. 2 metros." },
  { id: 4, nome: "Hub USB-C Baseus 7-em-1", preco: "180,00", imagem: "Hub_Usb_Ugreen.jpg", descricao: "Hub USB-C com 4 portas USB 3.0, entrada HDMI e carregamento rápido." },
  { id: 5, nome: "Teclado Akko Dragon Ball Z", preco: "520,00", imagem: "Teclado_Akko_Goku.png", descricao: "Edição especial do teclado mecânico Akko com tema Dragon Ball Z, switches tácteis e iluminação RGB." },
  { id: 6, nome: "Cabo USB-C UGREEN 1.5m", preco: "38,00", imagem: "Cabo_USB-C_UGREEN_1.5m.webp", descricao: "Cabo USB-C para USB-A de alta velocidade, compatível com carregamento rápido e transferência de dados. 1.5 metros." },
];

export default function ProdutosContent() {
  const [textoBusca, setTextoBusca] = useState("");

  const produtosFiltrados = listaProdutos.filter(produto =>
    produto.nome.toLowerCase().includes(textoBusca.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Nossos Equipamentos</h2>
      <BarraBusca textoBusca={textoBusca} setTextoBusca={setTextoBusca} />

      {produtosFiltrados.length === 0 ? (
        <p className={styles.semResultado}>Nenhum produto encontrado.</p>
      ) : (
        <div className={styles.grid}>
          {produtosFiltrados.map((item) => (
            <CardProduto
              key={item.id}
              id={item.id}
              nome={item.nome}
              preco={item.preco}
              imagem={item.imagem}
            />
          ))}
        </div>
      )}
    </div>
  );
}
