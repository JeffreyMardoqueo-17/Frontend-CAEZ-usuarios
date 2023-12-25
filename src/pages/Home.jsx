// Home.js

import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Tu SVG aquí */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="svg-wave"
            >
                <path
                    fill="#020240"
                    fillOpacity="1"
                    d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,101.3C672,117,768,203,864,234.7C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
};

export default Home;
