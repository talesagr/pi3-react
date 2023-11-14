import React, { useState } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import MainContent from "./components/main/main";
import CadastroPage from './pages/cadastro/main/index.js';
import RetirarOuDevolverPage from './pages/retiraroudevolver/index.js';
import Home from './pages/home/index.js';
import './App.css';
import AtendentePage from "./pages/cadastro/pessoa/index.js";
import LivroPage from "./pages/livro/index.js";
import CadastroLivroPage from "./pages/cadastro/livro/index.js";
import Footer from "./components/footer/footer.js";

const App = () => {
  return (

    <BrowserRouter>
      <div className="App">
          <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/retiraroudevolver" element={<RetirarOuDevolverPage />} />

        <Route path="/pessoa" element={<AtendentePage />} />
        <Route path="/livro" element={<LivroPage />} />
        <Route path="/editoraougenero" element={<AtendentePage />} />

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
