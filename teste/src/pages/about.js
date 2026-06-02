import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Author from "@/components/Author";
import { useState } from "react";

function About() {
  const [info, setInfo] = useState("Aula de Web I!");

  return (
    <main>
      <Menu/>
      <h1>Sobre a Aula de Web I</h1>
      
      {/* Aqui estamos usando as Props e o Children do componente Author */}
      <Author name={"Adriano Baião"} courses={{price: 50, workload:"60 horas"}}>Web I</Author>
      
      {/* Aqui é o teste do useState */}
      <p>{info}</p>
      <button onClick={()=> setInfo("Hoje é sexta-feiraaaa!")}>Alterar</button>
      
      <Footer/>
    </main>
  )
}
export default About;