import React from 'react';
import './Tabla.css'
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
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1234</td>
                        <td>Jefrey Mardoqueo Jimenez Santos</td>
                        <td>Sexto Grado</td>
                        <td>7</td>
                        <td><a href='#' className='btn'>Descargar PDF</a></td>

                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default Tabla;
