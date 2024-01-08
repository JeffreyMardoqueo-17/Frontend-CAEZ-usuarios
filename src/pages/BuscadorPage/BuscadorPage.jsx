import React, { useState } from 'react';

const BuscadorPage = () => {
    // Estado para almacenar el valor del NIE ingresado
    const [nie, setNie] = useState('');

    // Función para manejar cambios en el input del NIE
    const handleNieChange = (event) => {
        setNie(event.target.value);
    };

    // Lista de alumnos de ejemplo
    const alumnos = [
        { nie: "111111111", nombre: "Ana García", grado: "Secundaria", mesesP: "5" },
        { nie: "222222222", nombre: "Carlos López", grado: "Bachillerato", mesesP: "8" },
        { nie: "333333333", nombre: "Elena Martínez", grado: "Primaria", mesesP: "6" },
        { nie: "123456789", nombre: "Jeffrey Mardoqueo Jimenez Santos", grado: "Noveno Grado", mesesP: "7" }
    ];

    // Función para buscar un alumno por su NIE
    const buscarAlumno = () => {
        // Busca al alumno en la lista utilizando el NIE ingresado
        const alumnoEncontrado = alumnos.find((alumno) => alumno.nie === nie);

        // Si se encuentra el alumno, muestra una alerta con su información
        if (alumnoEncontrado) {
            alert(`Alumno encontrado: ${alumnoEncontrado.nombre}, Grado: ${alumnoEncontrado.grado}, Meses de Pago: ${alumnoEncontrado.mesesP}`);
        } else {
            // Si no se encuentra el alumno, muestra una alerta indicando que no se encontró
            alert('No se encontró ningún alumno con ese NIE');
        }
    };

    // Estructura del componente
    return (
        <div>
            <h1>Buscador de Alumnos</h1>
            <div>
                {/* Etiqueta y input para ingresar el NIE */}
                <label htmlFor="nie">NIE:</label>
                <input
                    type="text"
                    id="nie"
                    value={nie}
                    onChange={handleNieChange}
                    placeholder="Ingrese el NIE"
                />
            </div>
            <div>
                {/* Botón para iniciar la búsqueda */}
                <button onClick={buscarAlumno}>Buscar</button>
            </div>
        </div>
    );
};

export default BuscadorPage;

