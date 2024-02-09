import React from 'react';
import generarPDF from '../../Fuctions/GenerarPDF';
import Table from '../Table/Table';

const MesInfore = {
    mes: "eneero",
    fechaP: "12/5/2024",
    alumno: "Jeffrey Mardoqueo Jimenez Santos",
    recibio: "Mauricio VASQUEZ",
    multa: "5",
    mensualidad: "25",
    total: "30"
};
const TablaMes = () => {
    const handleDescargarPDF = () => {
        const titulo = 'DATOS de Mes de Pago';
        const columnas = ["MES", "FECHA QUE SE CANSELO", "ALUMNO", "RECIBIO", "MULTA", "MENSUALIDAD", "TOTAL"];
        const data = [
            [MesInfore.mes, MesInfore.fechaP, MesInfore.alumno, MesInfore.recibio, MesInfore.multa, MesInfore.mensualidad, MesInfore.total]
            [MesInfore.mes, MesInfore.fechaP,MesInfore.alumno, MesInfore.recibio, MesInfore.multa, MesInfore.mensualidad, MesInfore.total]
        ];

        generarPDF(titulo, columnas, data);
    };
    return (
        <div className='Table-contenedor'>
            <Table
                headers={[  "MES", "FECHA QUE SE CANSELO", "ALUMNO", "RECIBIO", "MULTA", "MENSUALIDAD", "TOTAL"]}
                data={[MesInfore]}
                showDownloadPDFButton={true}
                onDownloadPDFClick={handleDescargarPDF}
            />
            {/* <table className='table'>
                <thead>
                    <tr>
                        <th>MES</th>
                        <th>FECHA DE PAGO</th>
                        <th>ALUMNO</th>
                        <th>RECIBIO</th>
                        <th>MULTA</th>
                        <th>MENSUALIDAD</th>
                        <th>TOTAL</th>
                        <th>DESCARGAR INFORME DE PAGO DEL MES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="MES">{MesInfore.mes}</td>
                        <td data-label="FECHA DE PAGO">{MesInfore.fechaP}</td>
                        <td data-label="ALUMNO">{MesInfore.alumno}</td>
                        <td data-label="RECIBIO">{MesInfore.recibio}</td>
                        <td data-label="MULTA">{MesInfore.multa}</td>
                        <td data-label="MENSUALIDAD">{MesInfore.mensualidad}</td>
                        <td data-label="TOTAL">{MesInfore.total}</td>
                        <td data-label="DESCARGAR INFORME">
                            <button onClick={handleDescargarPDF}>
                                Descargar PDF de Mes
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    );
}

export default TablaMes;
