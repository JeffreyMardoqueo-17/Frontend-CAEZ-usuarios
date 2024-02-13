import { jsPDF } from "jspdf";
import 'jspdf-autotable';

/*ESTA ES UNA FUNSION QUE LO QUE HACE ES GENERAR UN PDF, CON LOS DATOS QUE LES PASEMOS 
COMO LO SON LOS HEADERS Y LA DATA*/
const GenerarPDF = (titulo, columnas, data, nombreArchivo) => {
    const doc = new jsPDF();
    doc.text(titulo, 95, 20); // Ubicación del título
    const fechaActual = new Date(); // Fecha actual 

    const datosTabla = data.map(row => columnas.map(col => row[col]));

    doc.autoTable({
        startY: 30,
        head: [columnas],
        body: datosTabla
    });

    doc.save(`${nombreArchivo}_${fechaActual.getDate()}-${fechaActual.getMonth() + 1}-${fechaActual.getFullYear()}.pdf`);
};

export default GenerarPDF;
