import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuscadorPage.css';

const BuscadorPage = () => {
    const [nie, setNie] = useState('');
    const navigate = useNavigate();

    const handleNieChange = (event) => {
        // Filtrar solo números y asegurarse de que no sean negativos y tengan al menos 7 dígitos
        const nuevoValor = event.target.value.replace(/\D/g, ''); // Eliminar no dígitos
        if (!isNaN(nuevoValor) && nuevoValor >= 0 && nuevoValor.length <= 7) {
            setNie(nuevoValor);
        }
    };

    // Datos de búsqueda temporal
    const alumnos = [
        { nie: "1", nombre: "Ana García", grado: "Secundaria", turno: "Mañana" },
        { nie: "2", nombre: "Carlos López", grado: "Bachillerato", turno: "Tarde" },
        { nie: "4", nombre: "Elena Martínez", grado: "Primaria", turno: "Mañana" },
        { nie: "5", nombre: "Jeffrey Mardoqueo Jimenez Santos", grado: "Noveno Grado", turno: "Mañana" }
    ];

    const buscarAlumno = () => {
        const alumnoEncontrado = alumnos.find((alumno) => alumno.nie === nie);
        if (alumnoEncontrado) {
            // Redirige a la página de resultados con el alumno encontrado como prop
            navigate('/result', { state: { alumno: alumnoEncontrado } });
        } else {
            // Si no se encuentra, muestra un mensaje de error
            navigate('/NoEncontrado');
            console.log("Alumno no encontrado");
        }
    };

    return (
        <div className="conti">
            <div className="side"></div>
            <div className="main">
                <div className="login-container">
                    <div className="ImagenCel">
                        <img src="/assets/lOGOoRIGINAL.svg" alt="" className="imgCel" />
                    </div>
                    <p className="title">Bienvenidos </p>

                    <div className="separator"></div>
                    <p className="welcome-message">
                        Por favor, ingrese el número de NIE del estudiante para poder realizar la consulta de sus Pagos
                    </p>
                    <form className="login-form">
                        <div className="form-controll">
                            <input
                                type="number" // Cambiado de "number" a "text"
                                id="nie"
                                value={nie}
                                onChange={handleNieChange}
                                placeholder="Nie del estudiante"
                                required
                            />
                            <i className="fas fa-user"></i>
                        </div>
                        <button className="boton buscar radius" onClick={buscarAlumno}>
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuscadorPage;
