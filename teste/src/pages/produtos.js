import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

// Quando o Integrante 2 criar a interface na pasta components, vocês vão descomentar a linha abaixo:
// import ProdutosContent from "@/components/ProdutosContent";

export default function Produtos() {
  return (
    <>
      <Menu />
      <main style={{ padding: '20px', minHeight: '60vh' }}>
        <h2>Nosso Catálogo de Produtos</h2>
        <p>A interface do catálogo com o grid e CSS Modules vai entrar aqui embaixo!</p>
        
        {/* <ProdutosContent /> */}
      </main>
      <Footer />
    </>
  );
}