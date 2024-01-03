import React, { useState } from 'react';
import './Menu.css'
//icono mennu
import { IoMdMenu } from "react-icons/io";
//icono exit 
import { IoIosCloseCircleOutline } from "react-icons/io";

const links = [
    { text: 'INICIO', href: '#', className: 'active' },
    { text: 'NOTAS', href: '#' },
    { text: 'Contactar', href: '#' },
    { text: 'Informacion del cole', href: '#' },
];

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav>
                <input type="checkbox" id="check" checked={menuOpen} onChange={toggleMenu} />
                <label htmlFor="check" className="checkbtn">
                    {menuOpen ? <IoIosCloseCircleOutline className='icono' /> : <IoMdMenu className='icono' />}
                </label>
                <a href="#" className="enlace">
                    <img src="/logo192.png" alt="Logo del cole" className="logo" />
                </a>
                <ul className={menuOpen ? 'show-menu' : ''}>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className={link.className}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <section></section>
        </div>
    );
}

export default Menu;
