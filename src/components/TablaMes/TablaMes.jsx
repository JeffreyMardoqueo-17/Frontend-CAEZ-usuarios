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
            [MesInfore.mes, MesInfore.fechaP, MesInfore.alumno, MesInfore.recibio, MesInfore.multa, MesInfore.mensualidad, MesInfore.total]
        ];

        generarPDF(titulo, columnas, data);
    };
    const headers = ["MES", "FECHA DE PAGO", "ALUMNO", "RECIBIO", "MULTA", "MENSUALIDAD", "TOTAL"];
    return (

        <div className='Table-contenedor'>
            <Table
                headers={headers}
                data={[MesInfore]}
                showDownloadPDFButton={true}
                onDownloadPDFClick={handleDescargarPDF}
            />
        </div>
    );
}

export default TablaMes;
