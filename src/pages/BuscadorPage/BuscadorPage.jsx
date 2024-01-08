import React, { useState } from 'react';

const BuscadorPage = () => {
    const [nie, setNie] = useState('');

    const handleNieChange = (event) => {
        setNie(event.target.value);
    };

    const alumnos = [
        { nombre: "Ana García", nie: "11111111A", edad: 19, grado: "Secundaria" },
        { nombre: "Carlos López", nie: "22222222B", edad: 18, grado: "Bachillerato" },
        { nombre: "Elena Martínez", nie: "33333333C", edad: 17, grado: "Primaria" }
    ];

    const buscarAlumno = () => {
        const alumnoEncontrado = alumnos.find((alumno) => alumno.nie === nie);

        if (alumnoEncontrado) {
            alert(`Alumno encontrado: ${alumnoEncontrado.nombre}, Edad: ${alumnoEncontrado.edad}, Grado: ${alumnoEncontrado.grado}`);
        } else {
            alert('No se encontró ningún alumno con ese NIE');
        }
    };

    return (
        <div>
            <h1>Buscador de Alumnos</h1>
            <div>
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
                <button onClick={buscarAlumno}>Buscar</button>
            </div>
        </div>
    );
};

export default BuscadorPage;
