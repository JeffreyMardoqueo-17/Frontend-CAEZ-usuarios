import { jsPDF } from "jspdf";
import 'jspdf-autotable';

const generarPDF = (titulo, columnas, data, nombreArchivo) => {
    const doc = new jsPDF();

    // Fecha actual 
    const fechaActual = new Date();
    doc.text(titulo, 95, 20);

    // Generar la tabla con los datos proporcionados
    doc.autoTable({
        startY: 30,
        head: [columnas],  // <- Array unidimensional para la cabecera
        body: data.map(row => Object.values(row))  // <- Array bidimensional para el cuerpo
    });

    // Guardar el PDF con el nombre proporcionado
    doc.save(`${nombreArchivo}, ${fechaActual.getDate()}-${fechaActual.getMonth() + 1}-${fechaActual.getFullYear()}.pdf`);
};

export default generarPDF;
