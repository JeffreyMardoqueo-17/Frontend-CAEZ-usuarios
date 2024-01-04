import React, { useState, useEffect } from 'react';
import './Menu.css';
import { IoMdMenu, IoIosCloseCircleOutline } from 'react-icons/io';

const links = [
    { text: 'INICIO', href: '#', className: 'active' },
    { text: 'NOTAS', href: '#' },
    { text: 'Contactar', href: '#' },
    { text: 'Informacion del cole', href: '#' },
];

const ScrollNav = () => {
    useEffect(() => {
        const nav = document.querySelector('nav');

        const handleScroll = () => {
            if (window.scrollY > 80) {
                nav.classList.add('fixed');
            } else {
                nav.classList.remove('fixed');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return null;
};

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLinkClick = () => {
        closeMenu();
    };

    return (
        <div>
            <ScrollNav /> {/* Agregamos el componente ScrollNav aquí */}
            <nav>
                <input type="checkbox" id="check" checked={menuOpen} onChange={toggleMenu} />
                <label htmlFor="check" className="checkbtn">
                    {menuOpen ? (
                        <div className="icono-container" onClick={closeMenu}>
                            <IoIosCloseCircleOutline className="icono" />
                        </div>
                    ) : (
                        <IoMdMenu className="icono" />
                    )}
                </label>

                <a href="#" className="enlace" onClick={handleLinkClick}>
                    <img src="/logo192.png" alt="Logo del cole" className="logo" />
                </a>
                <ul className={menuOpen ? 'show-menu' : ''}>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className={link.className} onClick={handleLinkClick}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <section></section>
        </div>
    );
};

export default Menu;
