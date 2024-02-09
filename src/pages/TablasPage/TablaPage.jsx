import React from 'react';
import Tabla from '../../components/TablaAlumno/Tabla';
import Menu from '../../components/MENU/Menu'
import TablaMes from '../../components/TablaMes/TablaMes';
const TablaPage = () => {
    return (
        <div>
            <div className='m-2'>
                <Tabla />
                <TablaMes />
            </div>
        </div>
    );
}

export default TablaPage;
