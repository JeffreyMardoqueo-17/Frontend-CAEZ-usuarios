import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Result.css';
import CircleImg from '../../components/CircleImg/CircleImg';
import Table from '../../components/Table/Table';

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    console.log(state);

    // Utiliza useEffect para manejar la redirección después de la renderización inicial
    useEffect(() => {
        // Verifica si hay datos en el estado y si existe la propiedad 'alumno'
        if (!state || !state.alumno) {
            console.error("Datos de alumno no encontrados. Redirigiendo a /NoEncontrado");
            navigate('/NoEncontrado');
        }
    }, [state, navigate]);

    // Verifica si hay datos en el estado y si existe la propiedad 'alumno'
    if (!state || !state.alumno) {
        // Puedes renderizar algo diferente aquí si es necesario
        return <div>No se encontraron datos de alumno.</div>;
    }

    const alumno = state.alumno;

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
                <button onClick={handleClick} className="">
                    CONTINUAR
                </button>
            </div>
        </div>
    );
};

export default Result;

