import { jsPDF } from "jspdf";
import 'jspdf-autotable';

/*ESTA ES UNA FUNSION QUE LO QUE HACE ES GENERAR UN PDF, CON LOS DATOS QUE LES PASEMOS 
COMO LO SON LOS HEADERS Y LA DATA*/
const GenerarPDF = (titulo, columnas, data, nombreArchivo) => {
    const doc = new jsPDF();
    doc.text(titulo, 95, 20); //hubicacion del titulo
    const fechaActual = new Date(); // Fecha actual 
    const encabezados = columnas.map((col) => col.toUpperCase()); // Obtener un array de encabezados
    // Crear un array bidimensional con los datos
    const datosTabla = [encabezados, ...data.map((row) => columnas.map((col) => row[col]))];
    doc.autoTable({// Generar la tabla con los datos proporcionados
        startY: 30,
        head: [],  // <- No es necesario proporcionar head ya que se agregará manualmente
        body: datosTabla
    });
    // Guardar el PDF con el nombre proporcionado
    doc.save(`${nombreArchivo}, ${fechaActual.getDate()}-${fechaActual.getMonth() + 1}-${fechaActual.getFullYear()}.pdf`);
};
export default generarPDF;