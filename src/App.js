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
    <Router>hg t
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    // Ocultar el menú en rutas "/result" y "/data/Tablas", mostrarlo en el resto
    setShowMenu(!["/result", "/data/Tablas"].includes(location.pathname));
  }, [location]);

  return (
    <div className="App">
      {showMenu && <Menu />} {/* Renderizar el menú solo si showMenu es true */}
      <Routes>
        <Route path="/" element={<BuscadorPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/data/">
          <Route path="/data/Tablas" element={<TablaPage />} />
          <Route path="/data/Contacto" element={<Contacto />} />
          <Route path="/data/InformacionColegio" element={<InforCole />} />
        </Route>
        <Route path='/NoEncontrado' element={<ErrorPages />} />
      </Routes>
    </div>
  );
}

export default App;
