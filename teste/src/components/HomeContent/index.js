import styles from './Home.module.css';
import CardProduto from '../CardProduto';

export default function HomeContent() {
  // Separamos apenas 2 produtos para a vitrine inicial
  const destaques = [
    { id: 1, nome: "Teclado Mecânico Akko", preco: "450,00" },
    { id: 2, nome: "Mouse Gamer Baseus", preco: "120,00" }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heroTitle}>Bem-vindo à E-Horizon</h1>
      <p className={styles.heroSubtitle}>Os melhores equipamentos de alta performance para o seu setup.</p>
      
      <h2 className={styles.destaquesTitulo}>Produtos em Destaque</h2>
      <div className={styles.grid}>
        {destaques.map((item) => (
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