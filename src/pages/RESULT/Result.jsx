import React from 'react';
import Nombre from '../../components/Nombre/Nombre';
import './Result.css'
import CircleImg from '../../components/CircleImg/CircleImg';
import BotonNext from '../../components/BotonNext/BotonNext';
import Table from '../../components/Table/Table';
//para la tabla o crar la tabal 


const headers = ['S.No', 'Name', 'Age', 'Marks%', 'Status'];
const data = [
    { 'S.No': 1, Name: 'Dinesh', Age: 34, 'Marks%': '50%', Status: 'Passed' },
    { 'S.No': 2, Name: 'Kamal', Age: 23, 'Marks%': '70%', Status: 'Passed' },
    { 'S.No': 3, Name: 'Neha', Age: 20, 'Marks%': '90%', Status: 'Passed' },
    { 'S.No': 4, Name: 'Priya', Age: 30, 'Marks%': '30%', Status: 'Failed' },
];
const Result = () => {
    return (
        <div className='cont'>
            <CircleImg />
            <Nombre />
            <div>
                <h2>Datos del Alumno</h2>
                <Table headers={headers} data={data} />
                {/* Puedes crear más tablas con diferentes datos y configuraciones */}

                <h2>Tabla 2</h2>
                <Table headers={['Name', 'Age', 'Status']} data={[{ Name: 'John', Age: 25, Status: 'Active' }]} />
            </div>
            <BotonNext />
        </div>
    );
}
export default Result;
