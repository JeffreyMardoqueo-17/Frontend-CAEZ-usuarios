import React from 'react';
import './Tabla.css'
import { jsPDF } from "jspdf";

const Alumno = {
    nie: "123456789",
    nombre: "Jeffrey Mardoqueo Jimenez Santos",
    grado: "noveno grado",
    mesesP: "7",

}

const GenerarPDF = ()=>{
    const doc = new jsPDF();

    doc.text(`DATOS DEL ALUMNO`, 95,20);
    doc.text(`NIE:  ${Alumno.nie}`, 10, 20);
    doc.text(`Nombre completo: ${Alumno.nombre}`, 10, 40);
    doc.text(`Grado: ${Alumno.grado}`,10, 30);
    doc.text(`Meses pagados:${Alumno.mesesP}`, 10, 20);

    //guardar el PDF con un nombre Especifico
    doc.save(`Informe_${Alumno.nombre}_NIE${Alumno.nie}`);
}
const Tabla = () => {
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
                            <button onClick={GenerarPDF}>
                                Descargar PDF
                            </button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;
