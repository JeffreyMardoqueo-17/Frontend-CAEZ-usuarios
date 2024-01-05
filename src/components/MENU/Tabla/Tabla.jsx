// Tabla.js
import React from 'react';
import './Tabla.css';
import generarPDF from '../../../Fuctions/GenerarPDF';

const Alumno = {
    nie: "123456789",
    nombre: "Jeffrey Mardoqueo Jimenez Santos",
    grado: "noveno grado",
    mesesP: "7",
};

const Tabla = () => {
    const handleDescargarPDF = () => {
        const titulo = 'DATOS DEL ALUMNO';
        const columnas = ["NIE", "NOMBRE COMPLETO", "GRADO", "MESES PAGADOS"];
        const data = [
            [Alumno.nie, Alumno.nombre, Alumno.grado, Alumno.mesesP]
        ];

        generarPDF(titulo, columnas, data);
    };


    return (
        <div className='Table-contenedor'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>NIE</th>
                        <th>Nombre completo</th>
                        <th>Grado</th>
                        <th>Meses pagados</th>
                        <th>Descargar Inform</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="NIE">{Alumno.nie}</td>
                        <td data-label="NOMBRE COMPLETO">{Alumno.nombre}</td>
                        <td data-label="GRADO">{Alumno.grado}</td>
                        <td data-label="MESES PAGADOS">{Alumno.mesesP}</td>
                        <td data-label="DESCARGAR INFORME">
                            <button onClick={handleDescargarPDF}>
                                Descargar PDF
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Tabla;