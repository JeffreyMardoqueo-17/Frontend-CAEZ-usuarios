import { jsPDF } from "jspdf";
import 'jspdf-autotable';

const generarPDF = (titulo, columnas, data, nombreArchivo) => {
    const doc = new jsPDF();
    // Fecha actual 
    const fechaActual = new Date();
    doc.text(titulo, 95, 20);
    // Obtener un array de encabezados
    const encabezados = columnas.map((col) => col.toUpperCase());

    // Crear un array bidimensional con los encabezados y los datos
    const datosTabla = [encabezados, ...data.map((row) => Object.values(row))];

    // Generar la tabla con los datos proporcionados
    doc.autoTable({
        startY: 30,
        head: [],  // <- No es necesario proporcionar head ya que se agregaraaa manualmente , todo jugado
        body: datosTabla
    });
    // Guardar el PDF con el nombre proporcionado
    doc.save(`${nombreArchivo}, ${fechaActual.getDate()}-${fechaActual.getMonth() + 1}-${fechaActual.getFullYear()}.pdf`);
};

export default generarPDF;
