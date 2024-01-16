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
        // const data = [
        //     { Campo: "NIE", Valor: Alumno.nie },
        //     { Campo: "Nombre completo", Valor: Alumno.nombre },
        //     { Campo: "Grado", Valor: Alumno.grado },
        //     { Campo: "Meses pagados", Valor: Alumno.mesesP }
        // ];
        const data = [Alumno.nie, Alumno.nombre, Alumno.grado, Alumno.mesesP, Alumno.mesesD]
        const nombreArchivo = `Informe_${Alumno.nombre.replace(/ /g, '')}_NIE${Alumno.nie}`;
        generarPDF(titulo, headers, data, nombreArchivo);
    };

    return (
        <div className='Table-contenedor'>
            <Table headers={['Campo', 'Valor']} data={[
                { Campo: 'NIE', Valor: Alumno.nie },
                { Campo: 'Nombre completo', Valor: Alumno.nombre },
                { Campo: 'Grado', Valor: Alumno.grado },
                { Campo: 'Meses pagados', Valor: Alumno.mesesP }
            ]} showDownloadPDFButton={true} onDownloadPDFClick={handleDescargarPDF} />
        </div>
    );
};

export default Tabla;
