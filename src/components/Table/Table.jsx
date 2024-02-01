import React from 'react';
import { Table as ReactstrapTable } from 'reactstrap';
import './Table.css';

const Table = ({ headers, data, showDownloadPDFButton, onDownloadPDFClick }) => {
    return (
        <ReactstrapTable  hover  striped >
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>
                            {header}
                        </th>
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
                        <td colSpan={headers.length}>
                            <button onClick={onDownloadPDFClick} className='radius'>
                                Descargar PDF
                            </button>
                        </td>
                    </tr>
                </tfoot>
            )}
        </ReactstrapTable>
    );
};

export default Table;

