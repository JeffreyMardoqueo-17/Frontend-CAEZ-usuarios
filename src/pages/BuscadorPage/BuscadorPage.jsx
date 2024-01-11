// BuscadorPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuscadorPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';


const BuscadorPage = () => {
    const [nie, setNie] = useState('');
    const navigate = useNavigate();

    const handleNieChange = (event) => {
        setNie(event.target.value);
    };

    const alumnos = [
        { nie: "1", nombre: "Ana García", grado: "Secundaria", mesesP: "5" },
        { nie: "2", nombre: "Carlos López", grado: "Bachillerato", mesesP: "8" },
        { nie: "4", nombre: "Elena Martínez", grado: "Primaria", mesesP: "6" },
        { nie: "5", nombre: "Jeffrey Mardoqueo Jimenez Santos", grado: "Noveno Grado", mesesP: "7" }
    ];

    const buscarAlumno = () => {
        const alumnoEncontrado = alumnos.find((alumno) => alumno.nie === nie);

        if (alumnoEncontrado) {
            // Redirige a la página de resultados con el alumno encontrado como prop
            navigate('/result', { state: { alumno: alumnoEncontrado } });
        } else {
            // Si no se encuentra, puedes manejarlo de acuerdo a tus necesidades (puedes mostrar un mensaje de error, etc.)
            console.log("Alumno no encontrado");
        }
    };

    return (
        // <div className='caja'>
        //     <h1>Buscador de Alumnos</h1>
        //     <div className='cajaB'>
        //         <label htmlFor="nie">NIE:</label>
        //         <input
        //             type="text"
        //             id="nie"
        //             value={nie}
        //             onChange={handleNieChange}
        //             placeholder="Ingrese el NIE"
        //         />
        //         <button onClick={buscarAlumno}>Buscar</button>
        //     </div>

        // </div>
        <div className="conti">
            <div className="side">
                {/* <img src="/assets/BuscarAlumno.svg" alt="" className="side-img" /> */}
            </div>

            <div className="main">
                <div className="login-container">
                    <p className="title">Welcome back</p>
                    <div className="separator"></div>
                    <p className="welcome-message">
                        Please, provide login credential to proceed and have access to all our services
                    </p>

                    <form className="login-form">
                        <div className="form-control">
                            <input type="text" placeholder="Username" />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" />
                            <i className="fas fa-lock"></i>
                        </div>

                        <button className="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default BuscadorPage;
