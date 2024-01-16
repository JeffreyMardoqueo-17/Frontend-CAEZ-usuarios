// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscadorPage from './pages/BuscadorPage/BuscadorPage';
import ResultPage from './pages/RESULT/Result';  // Importa ResultPage
import TablaPage from './pages/TablasPage/TablaPage';

import { useNavigate } from 'react-router-dom';
import ErrorPages from './pages/Error/ErrorPages';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BuscadorPage />} />
          <Route path="/result" element={<ResultPage />} /> 
          <Route path="/result/Tablas" element={<TablaPage />}/>
          <Route path='/NoEncontrado' element={<ErrorPages />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
