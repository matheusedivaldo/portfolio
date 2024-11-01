import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Hamburger from 'hamburger-react';

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

    const handleLinkClick = () => {
        setFadeOut(true);
        setTimeout(() => {
            setMenuOpen(false);
            setFadeOut(false);
        }, 200);
    };

    const menuItems = [
        { label: 'Sobre mim', href: '#about' },
        { label: 'Serviços', href: '#services' },
        { label: 'Projetos', href: '#projects' },
        { label: 'Contato', href: '#contact' }
    ];

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Me</a>
            <div className={styles.menu}>
                <div className={styles.menuBtn} onClick={handleMenuToggle}>
                    <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
                </div>
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''} ${fadeOut ? styles.fadeOut : ''}`}>
                    {menuItems.map((item, index) => (
                        <li key={index} onClick={handleLinkClick} className={fadeOut ? styles.fadeOut : ''}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;