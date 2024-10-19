import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Olá, sou Matheus</h1>
                <p className={styles.description}>
                    Desenvolvedor júnior com 2 anos de experiência em sistemas ERP.
                    Especializado em tecnologias como React, Angular e PHP, busco
                    sempre aprimorar minhas habilidades e contribuir para soluções eficazes.
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