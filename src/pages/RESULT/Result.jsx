import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Result.css';
import CircleImg from '../../components/CircleImg/CircleImg';
import Table from '../../components/Table/Table';

const Result = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/result/Tablas');
    };
    // Utiliza useLocation para obtener el estado enviado desde BuscadorPage
    const location = useLocation();
    const { state } = location;

    // Verifica si hay datos en el estado
    if (!state || !state.alumno) {
        return (
            <div>
                <p>No se encontraron datos de alumno.</p>
            </div>
        );
    }

    const alumno = state.alumno;

    return (
        <div className="result-container">
            <div className='circle'>
                <img src="/IMG/FOOTOO.png" alt="" className='img' />
            </div>

            <div className="perfil">
                <div className="info">
                    <h1 className="name">{alumno.nombre}</h1>
                    <h4>{alumno.nie}</h4>
                </div>
            </div>
            <div>
                <h2>Datos del Alumno</h2>
                <Table
                    headers={['NIE', 'Nombre', 'Grado', 'Turno']}
                    data={[alumno]}
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

