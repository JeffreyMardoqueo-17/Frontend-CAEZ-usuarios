import React from 'react';
import Nombre from '../../components/Nombre/Nombre';
import TablaMes from '../../components/MENU/TablaMes/TablaMes';
import './Result.css'
import CircleImg from '../../components/CircleImg/CircleImg';
import BotonNext from '../../components/BotonNext/BotonNext';

const Result = () => {
    return (
        <div className='cont'>
            <CircleImg />
            <Nombre />
            <CircleImg />
            <BotonNext />
            {/* <TablaMes /> */}
        </div>
    );
}

export default Result;
