import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

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
                <div className={styles.menuBtn} onClick={handleMenuToggle}>
                    {menuOpen ?
                        <FaXmark size={30} className={`${styles.icon} ${styles.rotate}`} /> :
                        <FaBarsStaggered size={30} className={`${styles.icon} ${menuOpen ? styles.rotate : ''}`} />
                    }
                </div>
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''} ${fadeOut ? styles.fadeOut : ''}`}>
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