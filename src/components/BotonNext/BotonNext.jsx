import React from 'react';
import {useNavigate } from 'react-router-dom';
import './BotonNext.css';

const BotonNext = ({ link, text }) => {
    // Si estás utilizando React Router v6, usa useNavigate
    // Si estás utilizando React Router v5, usa useHistory
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return (
        <div>
            <button onClick={handleClick} className="btn">
                {text}
            </button>
        </div>
    );
};

export default BotonNext;
