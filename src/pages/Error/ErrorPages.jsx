import React from 'react';
import './ErrorPages.css'
const ErrorPages = () => {
    return (
        <div class="error">
            <img src="/assets/buscando.svg" alt="" />
                <h1 className='H1'>404</h1>
                <p className='P'>Oops! Page not found</p>
                <a href="#" className='A'>Go back to homepage</a>
        </div>
    );
}

export default ErrorPages;
