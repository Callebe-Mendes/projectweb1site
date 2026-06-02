javascript
import styles from './ProdutosContent.module.css';
import CardProduto from '../CardProduto';

export default function ProdutosContent() {
  // O Integrante 3 vai assumir essa lista depois para gerenciar estados
  const listaProdutos = [
    { id: 1, nome: "Teclado Mecânico Akko", preco: "450,00" },
    { id: 2, nome: "Mouse Gamer Baseus", preco: "120,00" },
    { id: 3, nome: "Cabo HDMI UGREEN", preco: "45,00" },
    { id: 4, nome: "Hub USB Baseus", preco: "180,00" }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Nossos Equipamentos</h2>
      <div className={styles.grid}>
        {/* Aqui fazemos um map para renderizar os componentes reaproveitáveis */}
        {listaProdutos.map((item) => (
          <CardProduto 
            key={item.id} 
            id={item.id} 
            nome={item.nome} 
            preco={item.preco} 
          />
        ))}
      </div>
    </div>
  );
}
