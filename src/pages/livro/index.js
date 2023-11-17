import React, { useState } from "react";
import "./styles.css";
import MenuLivro from "../../components/menuLivros/menuLivros";
import CadastroLivro from "../../components/cadastro/livros";
import Livros from "../../components/livros/livros";
import axios from "axios";

const LivroPage = () => {
  const [resultData, setResultData] = useState([]);

  const handleConsultaIndividual = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/livro");

      console.log(response.data);

      setResultData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLivrosAusentes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/livro/ausentes");

      console.log(response.data);

      setResultData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLivrosDisponiveis = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/livro/disponiveis");

      console.log(response.data);

      setResultData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fundo">
      <MenuLivro 
        onConsultaIndividual={handleConsultaIndividual}
        onLivrosAusentes={handleLivrosAusentes}
        onLivrosDisponiveis={handleLivrosDisponiveis}
      />
      <div className="bottomPart">
        <div id="form">
          <CadastroLivro />
        </div>
        <div className="textAreaLivros">
          <Livros resultData={resultData} />
        </div>
      </div>
    </div>
  );
};

export default LivroPage;
