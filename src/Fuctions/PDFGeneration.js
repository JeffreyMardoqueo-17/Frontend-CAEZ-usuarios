import { jsPDF } from "jspdf";
import 'jspdf-autotable';

const Factura = {
    num : "2",
    producto: "Lapicero",
    cantidad : 2,
    precio: 0.20,
    fecha: "2023-01-10",
    cliente: "Jeffrey",
    total: 0.40,
}

const GenerarPDFF = ()=>{
    const doc = new jsPDF();
    // doc.text("Factura", 95,20);
    // doc.text(`Nuero de factura ${Factura.num}`, 10,20);
    // doc.text(`fecha ${Factura.fecha}`, 10,30);
    // doc.text(`Cliente ${Factura.cliente}`, 10, 40);
    // doc.text(`Total: ${Factura.total}`, 10, 50)

    //crear una tabla  con los detalles de la facura
    const colunas = ["Numero", "producto", "cantifad", "precio", "fecha", "cliente", "total"]
    const data = [`${Factura.num}, ${Factura.producto}, ${Factura.cantidad}, ${Factura.precio}, ${Factura.fecha}, ${Factura.cliente}, ${Factura.total}`];

    doc.autoTable({
        startY: 30,
        head: [colunas],
        body: data
    })
    doc.save(`Fctura_${Factura.num}.pdf`);
}
