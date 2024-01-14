import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Result.css';
import CircleImg from '../../components/CircleImg/CircleImg';
import Table from '../../components/Table/Table';

const Result = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/result/Tablas');
  };

  return (
    <div className="result-container">
      <div className='circle'>
        <img src="/IMG/FOOTOO.png" alt="" className='img' />
      </div>

      <div className="perfil">
        <div className="info">
          <h1 className="name">JEFFREY MARDOQUEO JIMENEZ SANTOS</h1>
          <h4>12345678</h4>
        </div>
      </div>

      <div>
        <h2>Datos del Alumno</h2>
        <Table
          headers={['Nombre', 'NIE', 'GRADO', 'TURNO']}
          data={[{ Name: 'Jeffrey Mardoqueo Jimenez Santos', NIE: '12345678', GRADO: 'NOVENO GRADO', TURNO: 'MAÑANA' }]}
          showDownloadPDFButton={false}
        />
      </div>

      <div className="container">
        <button onClick={handleClick} className="btn">
          CONTINUAR
        </button>
      </div>
    </div>
  );
};

export default Result;

