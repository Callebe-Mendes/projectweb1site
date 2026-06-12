"use client";
import { useState } from 'react';
import styles from './ProdutosContent.module.css';
import CardProduto from '../CardProduto';
import BarraBusca from '../BarraBusca';

export default function ProdutosContent() {
  const [textoBusca, setTextoBusca] = useState("");

  const listaProdutos = [
    { id: 1, nome: "Teclado Mecânico Akko", preco: "450,00", imagem: "Teclado_Mecanico_Akko.jpg" },
    { id: 2, nome: "Mouse Gamer Logitech", preco: "120,00", imagem: "Mouse_Gamer_Logitech.jpg" },
    { id: 3, nome: "Cabo HDMI UGREEN", preco: "45,00", imagem: "Cabo_Hdmi_Ugreen.jpg" },
    { id: 4, nome: "Hub USB Baseus", preco: "180,00", imagem: "Hub_Usb_Ugreen.jpg" }
  ];

  // Lógica de filtro baseada no texto digitado
  const produtosFiltrados = listaProdutos.filter(produto => 
    produto.nome.toLowerCase().includes(textoBusca.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Nossos Equipamentos</h2>
      
      <center><BarraBusca textoBusca={textoBusca} setTextoBusca={setTextoBusca} /></center>

      <div className={styles.grid}>
        {produtosFiltrados.map((item) => (
          <CardProduto 
            key={item.id} 
            id={item.id} 
            nome={item.nome} 
            preco={item.preco} 
            imagem={item.imagem} /* <--- ERA ISSO QUE FALTAVA PARA NÃO CRASHAR! */
          />
        ))}
      </div>
    </div>
  );
}