import React from "react";
import { Link } from "react-router-dom";
import atendenteIcon from "../../../assets/images/owl.png";
import livroIcon from "../../../assets/images/map.png";
import editoraIcon from "../../../assets/images/eldenwand.png";
import "./menu.css";

const Menu = () => {
  return (
    <div id="menu" className="menu">
      <div className="divBotões">
        <div className="atendente">
          <Link to="/pessoa">
            <img
              className="atendenteIcon"
              src={atendenteIcon}
              alt="Ícone de Atendente"
            />
            <button className="atendenteButton">Pessoa</button>
          </Link>
        </div>
        <div className="livro">
          <Link to="/livro">
            <img className="livroIcon" src={livroIcon} alt="Ícone de livro" />
            <button className="clivroButton">Livro</button>
          </Link>
        </div>
        <div className="editora">
          <Link to="/editoraougenero">
            <img
              className="ceditoraIcon"
              src={editoraIcon}
              alt="Ícone de editora"
            />
            <button className="editoraButton">Editora ou Gênero</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
