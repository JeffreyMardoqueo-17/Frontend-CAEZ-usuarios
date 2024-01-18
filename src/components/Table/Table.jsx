import React from 'react';
import { Table, Button } from 'reactstrap';
import './Table.css';

const Table = ({ headers, data, showDownloadPDFButton, onDownloadPDFClick }) => {
    return (
        <Table responsive striped>
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
                        {headers.map((header, columnIndex) => (
                            <td key={columnIndex}>{row[header]}</td>
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
    );
};

export default Table;
