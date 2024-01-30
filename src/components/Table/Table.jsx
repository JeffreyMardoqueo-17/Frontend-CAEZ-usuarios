import React from 'react';
import { Table as ReactstrapTable } from 'reactstrap';
<<<<<<< HEAD
import './Table.css';

const Table = ({ headers, data, showDownloadPDFButton, onDownloadPDFClick }) => {
    return (
        <ReactstrapTable  hover  striped >
=======

const Table = ({ headers, data, showDownloadPDFButton, onDownloadPDFClick }) => {
    return (
        <ReactstrapTable bordered responsive>
>>>>>>> 077055e6e83ac29879f4979c50bc54181771574c
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
<<<<<<< HEAD
                            <button onClick={onDownloadPDFClick} className='radius'>
=======
                            <button onClick={onDownloadPDFClick}>
>>>>>>> 077055e6e83ac29879f4979c50bc54181771574c
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

