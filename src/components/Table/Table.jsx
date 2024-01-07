import React from 'react';
import './Table.css';

const Table = ({ headers, data, showDownloadPDFButton, onDownloadPDFClick }) => {
    return (
        <table className="table">
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
                            <td key={columnIndex} data-label={headers[columnIndex]}>
                                {value}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            {showDownloadPDFButton && (
                <tfoot>
                    <tr>
                        <td colSpan={headers.length + 1}>
                            <button onClick={onDownloadPDFClick}>
                                Descargar PDF
                            </button>
                        </td>
                    </tr>
                </tfoot>
            )}
        </table>
    );
};

export default Table;
