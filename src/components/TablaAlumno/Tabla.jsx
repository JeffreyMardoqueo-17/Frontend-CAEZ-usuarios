import React from 'react';
import GenerarPDF from '../../Fuctions/GenerarPDF'; // Asegúrate de importar la función GenerarPDFF desde donde esté ubicada en tu proyecto
import Table from '../Table/Table';

const Alumno = {
    nie: "5",
    nombre: "Jeffrey Mardoqueo Jimenez Santos",
    grado: "noveno grado",
    mesesP: "7",
    mesesD: "6"
};

const Tabla = () => {

    const handleDescargarPDF = () => {
        const titulo = 'DATOS DEL ALUMNO';
        const headers = ["NIE", "NOMBRE COMPLETO", "GRADO", "MESES PAGADOS", "MESES EN MORA"];
        const nombreArchivo = `Informe_${Alumno.nombre.replace(/ /g, '')}_NIE${Alumno.nie}`;

        const body = [[
            Alumno.nie,
            Alumno.nombre,
            Alumno.grado,
            Alumno.mesesP,
            Alumno.mesesD
        ]];

        GenerarPDF(titulo, headers, body, nombreArchivo);
    };

    return (
        <div className='Table-contenedor'>
            <Table
                headers={['NIE', 'NOMBRE COMPLETO', 'GRADO', "MESES PAGADOS", "MESES EN MORA"]}
                data={[Alumno]} // Aquí pasas los datos del alumno como un array de un solo elemento
                showDownloadPDFButton={true}
                onDownloadPDFClick={handleDescargarPDF}
            />
        </div>
    );
};

export default Tabla;
