import React from 'react';
import './InicioAbajo.css'
const InicioAbajo = () => {
    return (
        <div>
            <div className="svg-container">
                {/* SVG 1 - Con curvas como olas */}
                <svg
                    width="411"
                    height="168"
                    viewBox="0 0 411 168"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-custom svg1"
                >
                    <path
                        d="M458.043 349.5C457.765 353.356 454.414 356.256 450.558 355.978L-97.0222 316.52C-100.878 316.242 -103.779 312.891 -103.501 309.035L-81.9343 9.74306C-81.6525 5.83176 -76.0953 5.362 -75.1609 9.17051C-52.4611 101.694 54.6554 144.267 134.676 92.5705L219.762 37.6006C297.218 -6.64425 391.09 -11.4502 472.659 24.6532L480.684 28.2051C480.981 28.3367 481.164 28.6408 481.14 28.9652L458.043 349.5Z"
                        fill="#020240"
                    />
                </svg>

                {/* SVG 2 - Con nuevas montañas */}
                <svg
                    width="411"
                    height="261"
                    viewBox="0 0 411 261"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-custom svg2"
                >
                    <path
                        d="M444.268 503.044C443.333 506.795 439.534 509.078 435.783 508.143L-166.208 358.098C-169.959 357.163 -172.242 353.364 -171.307 349.613L-84.9533 3.157C-84.0253 -0.565984 -78.7107 -0.498329 -77.8778 3.24706L-55.6621 103.148C-38.806 178.948 57.0946 203.36 108.142 144.846L118.613 132.844C140.346 107.931 170.923 92.4553 203.868 89.6931L245.347 86.2153C344.555 77.8972 444.147 96.8862 533.334 141.125V141.125C533.928 141.419 534.236 142.087 534.076 142.729L444.268 503.044Z"
                        fill="#4D51B3"
                    />
                </svg>
            </div>
        </div>
    );
}

export default InicioAbajo;
