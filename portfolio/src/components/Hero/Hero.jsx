import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá, sou Matheus</h1>
                <p className={styles.description}>
                    Sou desenvolvedor apaixonado, com experiência em ERPs e em tecnologias como
                    HTML, CSS, JavaScript, PHP, React e Angular. Busco sempre desafios que aprimorem
                    minhas habilidades e contribuam para projetos inovadores.
                </p>
                <a href="mailto:matheusedivaldodev@gmail.com" className={styles.contactBtn}>
                    Vamos conversar!
                </a>
            </div>
            <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Minha imagem"
                className={styles.heroImg}
            />
        </section>
    );
};