import React from "react";
import "./menuLivros.css";

const MenuLivro = ({ onConsultaIndividual,onLivrosAusentes,onLivrosDisponiveis }) => {
  return (
    <div className="divbotoesMenuLivros">
      <div className="botoeMenuLivross">
        <button id="botao" onClick={onConsultaIndividual}>Consulta Individual</button>
        <button id="botao" onClick={onLivrosAusentes}>Livros Ausentes</button>
        <button id="botao" onClick={onLivrosDisponiveis}>Livros Disponíveis</button>
      </div>
    </div>
  );
};

export default MenuLivro;