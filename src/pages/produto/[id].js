import ProdutoDetalheContent from "@/components/ProdutoDetalheContent";
import { useRouter } from "next/router";

export default function ProdutoDetalhe() {
  const router = useRouter();
  const { id } = router.query;

  return <ProdutoDetalheContent id={id} />;
}