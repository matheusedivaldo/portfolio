import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from "../../utils";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const handleMenuToggle = () => {
        if (menuOpen) {
            setFadeOut(true);
            setTimeout(() => {
                setMenuOpen(false);
                setFadeOut(false);
            }, 200);
        } else {
            setMenuOpen(true);
        }
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Me</a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt='btn-menu'
                    onClick={handleMenuToggle}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''} ${fadeOut ? styles.fadeOut : ''}`}
                >
                    <li className={fadeOut ? 'fadeOut' : ''}><a href="#about">Sobre mim</a></li>
                    <li className={fadeOut ? 'fadeOut' : ''}><a href="#skills">Habilidades</a></li>
                    <li className={fadeOut ? 'fadeOut' : ''}><a href="#projects">Projetos</a></li>
                    <li className={fadeOut ? 'fadeOut' : ''}><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;