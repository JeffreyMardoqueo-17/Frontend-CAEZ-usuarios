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
                        <th>Descargar Inform</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="NIE">1234</td>
                        <td data-label="NOMBRE COMPLETO">Jefrey Mardoqueo Jimenez Santos</td>
                        <td data-label="GRADO">Sexto Grado</td>
                        <td data-label="MESES PAGADOS">7</td>
                        <td data-label="DESCARGAR INFORME">
                            <button>
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
