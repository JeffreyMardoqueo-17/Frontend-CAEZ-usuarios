import React from 'react';
import './ErrorPages.css'
const ErrorPages = () => {
    return (
        <div class="error">
            <img src="/assets/buscando.svg" alt="" className='imagenerror'/>
                <h1 className='H1'>Alumno No encontrado</h1>
                <p className='P'>Por favor ingrese el NIE del estudiante o verifique que el NIE  es correcto</p>
                <a href="/#" className='btn seguir'>Ingresar Nie</a>
        </div>
    );
}

export default ErrorPages;
