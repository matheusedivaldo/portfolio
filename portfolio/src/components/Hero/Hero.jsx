import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá, sou Matheus</h1>
                <p className={styles.description}>
                    Desenvolvedor júnior com 2 anos de experiência em sistemas ERP.
                    Conhecimento em tecnologias como
                    <span className={styles.react}> React</span>,
                    <span className={styles.angular}> Angular</span> e
                    <span className={styles.php}> PHP</span>,
                    busco sempre aprimorar minhas habilidades e contribuir para soluções eficazes.
                </p>
                <div className={styles.socialIcons}>
                    <a href="https://github.com/matheusedivaldo" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-silva-8297a320a/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.icon} />
                    </a>
                    <a href="https://www.instagram.com/dev_startando" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.icon} />
                    </a>
                    <a href="mailto:matheusedivaldodev@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className={styles.icon} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100016363537300&locale=pt_BR" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={styles.icon} />
                    </a>
                </div>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Minha imagem"
                className={styles.heroImg}
            />
        </section>
    );
};