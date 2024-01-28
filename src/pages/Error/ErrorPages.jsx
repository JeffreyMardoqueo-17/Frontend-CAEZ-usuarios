import React from 'react';
import './ErrorPages.css'
const ErrorPages = () => {
    return (
        <div class="error">
            <img src="/assets/buscando.svg" alt="" className='imagenerror'/>
                <h1 className='H1'>Alumno No encontrado</h1>
                <p className='P'>Por favor ingrese el NIE del estudiante o verifique que el NIE  es correcto</p>
                {/* <boto href="/#" className='btn seguir'>Ingresar Nie</boto> */}
                <button onClick={"/"} className='radius'>Ingresar el Nie</button>
        </div>
    );
}

export default ErrorPages;
