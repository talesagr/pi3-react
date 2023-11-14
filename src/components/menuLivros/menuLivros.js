import React from "react";
import "./menuLivros.css";

const MenuLivro = () => {
  return (
    <div className="divbotoesMenuLivros">
        <div className="botoeMenuLivross">
            <button id="botao">Consulta Individual</button>
            <button id="botao">Livros Ausentes</button>
            <button id="botao">Livros Disponíveis</button>
        </div>
    </div>
  );
};

export default MenuLivro;
