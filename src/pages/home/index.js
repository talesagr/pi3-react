import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles.css';
import cadastroIcon from "../../assets/images/selectorhat.png";
import retirarIcon from "../../assets/images/timeturner.png";
const Home = () => {
  return (
    <div id="main" className="main">
      <div className="divBotões">
        <div className="cadastro">
          <Link to="/cadastro">
            <img
              className="cadastroIcon"
              src={cadastroIcon}
              alt="Ícone de Cadastro"
            />
            <button className="cadastroButton">Cadastrar ou Consultar</button>
          </Link>
        </div>
        <div className="retirar">
          <Link to="/retiraroudevolver">
            <img
              className="retirarIcon"
              src={retirarIcon}
              alt="Ícone de Retirada"
            />
            <button className="retirarButton">Retirar ou Devolver</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
