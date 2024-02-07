import React from 'react';
import generarPDF from '../../Fuctions/GenerarPDF';
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
        const body = [Alumno]; // Deja el array bidimensional como está
        // Convertir el objeto Alumno en un array de valores en el mismo orden que los encabezados
        const rowData = headers.map(header => Alumno[header]);
        const nombreArchivo = `Informe_${Alumno.nombre.replace(/ /g, '')}_NIE${Alumno.nie}`;
        generarPDF(titulo, headers, [rowData], nombreArchivo);
    };

        const data = [Alumno];
        const nombreArchivo = `Informe_${Alumno.nombre.replace(/ /g, '')}_NIE${Alumno.nie}`;
        generarPDF(titulo, headers, data, nombreArchivo);
    };

    return (
        <div className='Table-contenedor'>
            <Table
                headers={['NIE', 'NOMBRE COMPLETO', 'GRADO', "MESES PAGADOS", "MESES EN MORA"]}
                data={[Alumno]}
                showDownloadPDFButton={true}
                onDownloadPDFClick={handleDescargarPDF}
            />
        </div>
    );
};

export default Tabla;
