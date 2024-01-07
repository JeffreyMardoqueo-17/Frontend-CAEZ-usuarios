import React from 'react';

const Table = ({ headers, data, showButton, onButtonClick }) => {
    return (
        <div>
            <div className='Table-contenedor'>
                <table className='table'>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                            {showButton && <th>Descargar Informe</th>}
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
                                {showButton && (
                                    <td>
                                        <button onClick={() => onButtonClick(row)}>
                                            Descargar PDF
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
