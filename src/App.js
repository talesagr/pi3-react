import React, { useState } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import CadastroPage from './pages/cadastro/main/index.js';
import RetirarOuDevolverPage from './pages/retiraroudevolver/index.js';
import Home from './pages/home/index.js';
import './App.css';
import AtendentePage from "./pages/cadastro/pessoa/index.js";
import LivroPage from "./pages/livro/index.js";
import CadastroLivroPage from "./pages/cadastro/livro/index.js";
import Footer from "./components/footer/footer.js";
import EditoraOuGeneroPage from "./pages/cadastro/editoraOuGenero/index.js";
import LoginPage from "./pages/login/index.js";

const App = () => {
  return (

    <BrowserRouter>
      <div className="App">
          <Header />
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/retiraroudevolver" element={<RetirarOuDevolverPage />} />

        <Route path="/pessoa" element={<AtendentePage />} />
        <Route path="/livro" element={<LivroPage />} />
        <Route path="/editoraougenero" element={<EditoraOuGeneroPage />} />

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
