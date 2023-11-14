import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './main.css';
import CadastroPage from '../cadastro/cadastro.js';
import RetirarPage from '../retiraroudevolver/retirarOuDevolver.js';
import ConsultarPage from '../consultar/consultar.js';
import Home from '../../pages/home/index.js';

const MainContent = () => {
  return (
    <div></div>
    // <Router>
    //   <Home/>
    //     <Routes>
    //       <Route path="/cadastro" element={<CadastroPage />} />
    //       <Route path="/retirar" element={<RetirarPage />} />
    //       <Route path="/consultar" element={<ConsultarPage />} />
    //     </Routes>
    // </Router>
  );
};

export default MainContent;
