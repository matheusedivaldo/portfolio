import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfólio</a>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
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
