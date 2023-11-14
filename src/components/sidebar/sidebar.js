import React, {useState} from "react";
import menuIcon from '../../assets/images/hamburger.png';
import './sidebar.css';

const Sidebar = ({ onToggle }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <div id="sidebar">
      <div className="toggle-btn" onClick={ () => setIsOpen(!isOpen)}>
        <img src={menuIcon} alt="Abrir/Fechar" />
      </div>

      <ul hidden={ !isOpen } >
        <div>
          <li><a className="menuItens" href="#">Cadastrar</a></li>
        </div>
        <li><a className="menuItens" href="#">Retiradas ou Devoluções</a></li>
        <li><a className="menuItens" href="#">Consultas</a></li>
      </ul>

    </div>
  );
};

export default Sidebar;