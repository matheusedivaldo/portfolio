import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (label) => {
        setActiveItem(label);
        setMenuOpen(false);
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
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                onClick={() => handleLinkClick(item.label)}
                                className={activeItem === item.label ? styles.active : ''}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
