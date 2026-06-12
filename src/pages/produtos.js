import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import ProdutosContent from "@/components/ProdutosContent";

export default function Produtos() {
  return (
    <>
      <Menu />
      <main style={{ minHeight: '70vh' }}>
        <ProdutosContent />
      </main>
      <Footer />
    </>
  );
}