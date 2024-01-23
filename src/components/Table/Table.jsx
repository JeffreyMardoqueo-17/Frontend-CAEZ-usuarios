import React from 'react';
import { Table as ReactstrapTable } from 'reactstrap';

const Table = ({ headers, data, showDownloadPDFButton, onDownloadPDFClick }) => {
    return (
        <ReactstrapTable bordered responsive>
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
                        {headers.map((header, columnIndex) => (
                            <td key={columnIndex}>
                                {row[header]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            {showDownloadPDFButton && (
                <tfoot>
                    <tr>
                        <td colSpan={headers.length}>
                            <button onClick={onDownloadPDFClick}>
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
