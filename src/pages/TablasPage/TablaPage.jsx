import React from 'react';
import Tabla from '../../components/TablaAlumno/Tabla';
import Menu from '../../components/MENU/Menu'
const TablaPage = () => {
    return (
        <div>
            <Menu />
            <div className='m-2'>
                <Tabla />
            </div>
        </div>
    );
}

export default TablaPage;
