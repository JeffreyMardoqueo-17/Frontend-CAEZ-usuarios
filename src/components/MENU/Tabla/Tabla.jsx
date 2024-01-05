import React from 'react';
import './Tabla.css'
import { jsPDF } from "jspdf";
import 'jspdf-autotable'

const Alumno = {
    nie: "123456789",
    nombre: "Jeffrey Mardoqueo Jimenez Santos",
    grado: "noveno grado",
    mesesP: "7",

}

const GenerarPDF = ()=>{
    const doc = new jsPDF();
    //fecha actual 
    var fechaActual = new Date();

    //crear la tabla que se mostrara en la factira o el informe
    const columnas = [ "NIE", "NOMBRE COMPLETO", "GRADO", "MESES PAGADOS"]
    const data = [
        [`${Alumno.nie}`, `${Alumno.nombre}`, `${Alumno.grado}`, `${Alumno.mesesP}`]
    ]
    //Genera la tabla
    doc.autoTable({
        startY:30,
        head:[columnas],
        body: data
    })

    //guardar el PDF con un nombre Especifico
    doc.save(`Informe_${Alumno.nombre}_NIE${Alumno.nie}_${fechaActual.getFullYear()}${('0' + (fechaActual.getMonth() + 1)).slice(-2)}${('0' + fechaActual.getDate()).slice(-2)}.pdf`);
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
