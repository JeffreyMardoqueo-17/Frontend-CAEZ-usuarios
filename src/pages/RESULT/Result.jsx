import React from 'react';
import Nombre from '../../components/Nombre/Nombre';
import './Result.css'
import CircleImg from '../../components/CircleImg/CircleImg';
import BotonNext from '../../components/BotonNext/BotonNext';
import Table from '../../components/Table/Table';
//para la tabla o crar la tabal 

const datosAlumno = [
    { Name: 'Jeffrey Mardoqueo Jimenez Santos',NIE: '12345678', GRADO: 'NOVENO GRADO', TURNO: 'MAÑANA' }
];

// Encabezados por aparte
const encabezadosAlumno = ['Nombre','NIE', 'GRADO', 'TURNO'];
const Result = () => {
    return (
        <div className='cont'>
            <CircleImg />
            <Nombre />
            <div>
                <h2>Datos del Alumno</h2>
                <Table headers={encabezadosAlumno} data={datosAlumno} showDownloadPDFButton={false}  />
            </div>
            <BotonNext link="/result/Tablas" text="CONTINUAR"/>
        </div>
    );
}
export default Result;
