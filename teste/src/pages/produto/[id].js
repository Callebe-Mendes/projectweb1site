import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import ProdutoDetalheContent from "@/components/ProdutoDetalheContent";

export default function ProdutoDetalhe() {
  const router = useRouter();
  const { id } = router.query; 

  return (
    <>
      <Menu />
      <main style={{ minHeight: '60vh' }}>
        <ProdutoDetalheContent id={id} />
      </main>
      <Footer />
    </>
  );
}