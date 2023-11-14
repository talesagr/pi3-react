import React from "react";

import "./styles.css";
import MenuLivro from "../../components/menuLivros/menuLivros";
import CadastroLivro from "../../components/cadastro/livros";
import Livros from "../../components/livros/livros";

const LivroPage = () => {
  return (
    <div className="fundo">
      <MenuLivro />
      <div className="bottomPart">
        <div id="form">
          <CadastroLivro />
        </div>
        <div className="textAreaLivros">
          <Livros />
        </div>
      </div>
    </div>
  );
};

export default LivroPage;
