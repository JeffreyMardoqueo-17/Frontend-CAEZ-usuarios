// pdfGenerator.js
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

const generarPDF = (titulo, columnas, data) => {
    const doc = new jsPDF();
    // Fecha actual 
    const fechaActual = new Date();
    doc.text(titulo, 95, 20);

    // Generar la tabla con los datos proporcionados
    doc.autoTable({
        startY: 30,
        head: [columnas],
        body: data
    });

    // Guardar el PDF con un nombre específico
    doc.save(`Informe_${titulo.replace(/ /g, '_')}_${fechaActual.getFullYear()}${('0' + (fechaActual.getMonth() + 1)).slice(-2)}${('0' + fechaActual.getDate()).slice(-2)}.pdf`);
};

export default generarPDF;
