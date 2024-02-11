import React from 'react';
import Tabla from '../../components/TablaAlumno/Tabla';
import Menu from '../../components/MENU/Menu'
import TablaMes from '../../components/TablaMes/TablaMes';
const TablaPage = () => {
    return (
        <div>
            <Menu />
            <div className='m-2'>
                <div className='m-4'>
                    <Tabla />
                    <TablaMes />
                </div>
            </div>
        </div>
    );
}

export default TablaPage;
