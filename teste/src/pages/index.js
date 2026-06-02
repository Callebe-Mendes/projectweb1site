import Menu from "@/components/Menu";
import Footer from "@/components/Footer"; 
import { useEffect, useState } from "react"; 

function Home() {
  const [productId, setProductId ] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProducPrice ] = useState();
  const [dataProduct, setDataProduct ] = useState({
    id:"",
    name:"",
    price:""
  });

  function searchProduct(){
    console.log("Buscar Produto!")
    setProductId(1);
    setProductName("Web I");
    setProducPrice(150);
    setDataProduct({
      id: 2,
      name: "Web II",
      price: 250,
    })
  }

  useEffect( ()=>{
    searchProduct();
  }, [productId])

  return(
    <main>
      <Menu/>
      <h1>Olá Galerinha do canal!</h1>
      <p>ID do produto: {productId}</p>
      <p>Nome do produto: {productName}</p>
      <p>Preço do produto: {productPrice}</p><br/><br/>
      <p>ID do produto: {dataProduct.id}</p>
      <p>Nome do produto: {dataProduct.name}</p>
      <p>Preço do produto: {dataProduct.price}</p>
      <Footer/>
    </main>
  )
}
export default Home;