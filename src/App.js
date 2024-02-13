// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BuscadorPage from './pages/BuscadorPage/BuscadorPage';
import ResultPage from './pages/RESULT/Result';
import TablaPage from './pages/TablasPage/TablaPage';
import Contacto from './pages/Contacto/Contacto';
import ErrorPages from './pages/Error/ErrorPages';
import InforCole from './pages/InforCole/InforCole';
import Menu from './components/MENU/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BuscadorPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/result/Tablas" element={<TablaPage />} />
          <Route path="/result/Contacto" element={<Contacto />} />
          <Route path="/result/InformacionColegio" element={<InforCole />} />
          <Route path='/NoEncontrado' element={<ErrorPages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
