import React from 'react';
import Menu from '../../components/MENU/Menu';
import './Contacto.css'
const Contacto = () => {
    return (
        <div>
            <Menu />
            <div className='conti'>
                <div className='izquierda'>
                </div>
                <div className='derecha'>
                    <div className="contacto-containes">
                        <p className="title">Bienvenidos </p>

                        <div className="separator"></div>
                        <p className="welcome-message">
                            Por favor, ingrese el número de NIE del estudiante para poder realizar la consulta de sus Pagos
                        </p>
                        <form className="login-form">
                            <div className="form-controll">
                                <input type="text" />
                                <i className="fas fa-user"></i>
                            </div>
                            <button className="boton buscar radius" >
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
