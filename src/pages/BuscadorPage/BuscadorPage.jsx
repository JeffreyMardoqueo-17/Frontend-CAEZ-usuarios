// BuscadorPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuscadorPage.css'
import { FaUser } from "react-icons/fa";

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
        <div className="conti">
            <div className="side">
                {/* <img src="/assets/BuscarAlumno.svg" alt="" className="side-img" /> */}
            </div>
            <div className="main">
                <div className="login-container">
                    <p className="title">Bienvenidos</p>

                    <div className="separator"></div>
                    <p className="welcome-message">
                        Porfavor, ingrese el numero de NIE del estudiante, para poder realizar la busqueda de sus Pagos
                    </p>

                    <form className="login-form">
                        <div className="form-control">
                            <div className="form-control">
                                <FaUser className="user-icon" />
                                <input
                                    type="number"
                                    id='nie'
                                    value={nie}
                                    onChange={handleNieChange}
                                    placeholder="Nie del estudiante"
                                    required
                                />
                            </div>
                        </div>
                        <button className="submit" onClick={buscarAlumno}>Buscar</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default BuscadorPage;
