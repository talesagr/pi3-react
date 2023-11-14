import React from "react";
import "./menuLivros.css";
import { Link } from "react-router-dom";

const MenuLivro = () => {
  return (
    <div className="divbotoes">
        <div className="botoes">
            <button id="botao">Consulta Individual</button>
            <button id="botao">Livros Ausentes</button>
            <button id="botao">Livros Disponíveis</button>
        </div>
    </div>
  );
};

export default MenuLivro;
