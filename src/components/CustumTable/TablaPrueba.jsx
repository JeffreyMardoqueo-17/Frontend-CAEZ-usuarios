import React from 'react';
import CustomTable from './CustomTable';

const TablaPrueba = () => {
  const headers = ["Nombre", "Edad", "Ciudad"];
  const data = [
    { Nombre: "Juan", Edad: 25, Ciudad: "México" },
    { Nombre: "María", Edad: 30, Ciudad: "Madrid" },
    // ... otros datos
  ];

  const handleDownloadPDF = () => {
    // Lógica para descargar PDF
    console.log('Descargando PDF...');
  };

  return (
    <div>
      <CustomTable
        headers={headers}
        data={data}
        showDownloadPDFButton={true}
        onDownloadPDFClick={handleDownloadPDF}
      />
    </div>
  );
};

export default TablaPrueba;
