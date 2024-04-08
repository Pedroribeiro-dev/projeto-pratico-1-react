import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home';
import Fotos from './pages/fotos/fotos';
import Contato from './pages/contatos/contatos';
import Logado from './pages/logado/logado';

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fotos' element={<Fotos />} />
        <Route path='/contatos' element={<Contato />} />
        <Route path='/home/logado' element={<Logado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
