// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuscadorPage from './pages/BuscadorPage/BuscadorPage';
import ResultPage from './pages/RESULT/Result';  // Importa ResultPage

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BuscadorPage />} />
          <Route path="/result" element={<ResultPage />} />  {/* Cambia el componente Result por ResultPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
