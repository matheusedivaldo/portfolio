import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Olá, sou Matheus
                </motion.h1>
                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Desenvolvedor júnior com 2 anos de experiência em sistemas ERP.
                    Possuo conhecimento em <span className={styles.frontend}>Front-end</span> e
                    <span className={styles.backend}> Back-end</span>, buscando sempre aprimorar
                    minhas habilidades e contribuir para soluções eficazes.
                </motion.p>
                <motion.div
                    className={styles.socialIcons}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
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
                </motion.div>
            </div>
            <motion.img
                src={getImageUrl("hero/heroImage.png")}
                alt="Minha imagem"
                className={styles.heroImg}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            />
        </section>
    );
};