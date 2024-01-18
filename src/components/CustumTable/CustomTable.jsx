import React from 'react';
import { Table, Button, Container } from 'reactstrap';

const CustomTable = ({ headers, data, showDownloadPDFButton, onDownloadPDFClick }) => {
  return (
    <Container className="custom-table-container">
      <Table dark striped>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, columnIndex) => (
                <td key={columnIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
        {showDownloadPDFButton && (
          <tfoot>
            <tr>
              <td colSpan={headers.length}>
                <Button onClick={onDownloadPDFClick} color="primary">
                  Descargar PDF
                </Button>
              </td>
            </tr>
          </tfoot>
        )}
      </Table>
    </Container>
  );
};

export default CustomTable;
