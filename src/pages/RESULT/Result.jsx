import React from 'react';
import Nombre from '../../components/Nombre/Nombre';
import './Result.css'
import CircleImg from '../../components/CircleImg/CircleImg';
import BotonNext from '../../components/BotonNext/BotonNext';

const Result = () => {
    return (
        <div className='cont'>
            <CircleImg />
            <Nombre />
            <TablaMes />
            <BotonNext />
            {/* <TablaMes /> */}
        </div>
    );
}

export default Result;
