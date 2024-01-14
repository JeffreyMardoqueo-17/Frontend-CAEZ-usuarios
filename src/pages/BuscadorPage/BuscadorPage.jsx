// BuscadorPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuscadorPage.css'


const BuscadorPage = () => {
    const [nie, setNie] = useState('');
    const navigate = useNavigate();

    const handleNieChange = (event) => {
        setNie(event.target.value);
    };

    const alumnos = [
        { nie: "1", nombre: "Ana García", grado: "Secundaria", turno: "Mañna" },
        { nie: "2", nombre: "Carlos López", grado: "Bachillerato", turno: "Tarde" },
        { nie: "4", nombre: "Elena Martínez", grado: "Primaria", turno: "Mañana" },
        { nie: "5", nombre: "Jeffrey Mardoqueo Jimenez Santos", grado: "Noveno Grado", turno: "mañana" }
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
                    <p className="title">Bienvenidos </p>

                    <div className="separator"></div>
                    <p className="welcome-message">
                        Por favor, ingrese el número de NIE del estudiante, para poder realizar la consulta de sus Pagos
                    </p>

                    <form className="login-form">
                        <div className="form-control">
                            <input type="number" id='nie' value={nie} onChange={handleNieChange} placeholder="Nie del estudiante" required />
                            <i className="fas fa-user"></i>
                        </div>
                        <button className="submit" onClick={buscarAlumno}>Buscar</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default BuscadorPage;
