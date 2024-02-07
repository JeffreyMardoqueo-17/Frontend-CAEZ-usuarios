import React from 'react';
import './InforCole.css'
import Menu from '../../components/MENU/Menu';
const InforCole = () => {
    return (
        <div>
            <Menu />
            <div className='InforCole m-5'>
                <div className='Mision'>
                    <h3 className='tit'>Misión</h3>
                    <p>
                        "Transformar la educación a través de la innovación tecnológica, brindando herramientas y recursos accesibles que potencien el aprendizaje y permitan a cada individuo alcanzar su máximo potencial."
                    </p>
                </div>
                <div className='Vision'>
                    <h3 className='tit'>Visión</h3>
                    <p>
                        "Ser líderes en la revolución educativa, siendo reconocidos globalmente por nuestra contribución al desarrollo de una sociedad más educada, equitativa y preparada para los desafíos del futuro, impulsada por nuestras soluciones tecnológicas centradas en el aprendizaje."
                    </p>
                </div>
                <div className='Valores'>
                    <h3 className='tit'>Valores</h3>
                    <ul>
                        <li>Integridad</li>
                        <li>Respeto</li>
                        <li>Colaboración</li>
                        <li>Innovación</li>
                        <li>Responsabilidad</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InforCole;