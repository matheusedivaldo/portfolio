import React from "react";
import { FaGithub, FaLinkedin, FaBehance, FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.footerContent}>
                <div className={styles.contactInfo}>
                    <h3>Entre em Contato</h3>
                    <p>
                        <a href="mailto:matheusedivaldodev@gmail.com">
                            <FaEnvelope /> matheusedivaldodev@gmail.com
                        </a>
                    </p>
                    <p>
                        <a href="tel:+5511932250639">
                            <FaPhone /> (11) 93225-0639
                        </a>
                    </p>
                </div>
                <div className={styles.quickLinks}>
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#projects">Projetos</a></li>
                    </ul>
                </div>
                <div className={styles.socialIcons}>
                    <h3>Conecte-se</h3>
                    <a href="https://github.com/matheusedivaldo" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-silva-8297a320a/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.behance.net/matheussilva448" target="_blank" rel="noopener noreferrer">
                        <FaBehance />
                    </a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>
                    © {new Date().getFullYear()} Matheus Edivaldo. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};