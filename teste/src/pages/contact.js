import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useState } from "react";

// Exemplo de uma Arrow Function
const Contact = () => {
  // useState para guardar os dados do formulário
  const [data, setData] = useState({
    nameUser: "",
    emailUser: ""
  });

  // Função para capturar o que é digitado nos inputs
  const valueInput = e => setData({...data, [e.target.name]: e.target.value});

  // Função disparada ao enviar o formulário
  const addUser = (e) => {
    e.preventDefault(); // Evita que a página recarregue
    console.log("Nome: " + data.nameUser);
    console.log("E-mail: " + data.emailUser);
  }

  return (
    <>
      <main>
        <Menu/><br/><br/>
        <h2>Vem falar com a gente!</h2>
        
        <form onSubmit={addUser}>
          <label>Nome: </label>
          <input type="text" name="nameUser" placeholder="Nome do Cliente" onChange={valueInput} /><br/> 
          
          <label>Email: </label>
          <input type="email" name="emailUser" placeholder="E-mail do Cliente" onChange={valueInput} /><br/>
          
          <button type="submit">Cadastrar</button>
        </form>
        <br/><br/>
        <Footer/>
      </main>
    </>
  )
}

export default Contact;