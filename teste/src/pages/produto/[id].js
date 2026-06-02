import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

// Quando o Integrante 3 criar a lógica e interface de detalhes, vocês descomentam:
// import ProdutoDetalheContent from "@/components/ProdutoDetalheContent";

export default function ProdutoDetalhe() {
  const router = useRouter();
  const { id } = router.query; 

  return (
    <>
      <Menu />
      <main style={{ padding: '20px', minHeight: '60vh' }}>
        <h2>Detalhes do Produto ID: {id}</h2>
        <p>A lógica do useState e os dados simulados do produto vão carregar aqui!</p>
        
        {/* <ProdutoDetalheContent id={id} /> */}
      </main>
      <Footer />
    </>
  );
}