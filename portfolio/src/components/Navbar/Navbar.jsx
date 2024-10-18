import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from "../../utils"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Me</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn}
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt='btn-menu'
                    onClick={() => setMenuOpen(!menuOpen)} />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
