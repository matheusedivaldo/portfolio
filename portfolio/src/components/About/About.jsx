import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Apresentação do projeto Core na Campus Party."
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Front-end." />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
                Especialista em criar sites modernos, responsivos e otimizados
                para proporcionar uma excelente experiência de usuário em
                qualquer dispositivo
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Back-end." />
            <div className={styles.aboutItemText}>
              <h3>Sistemas ERP</h3>
              <p>
                Experiência no desenvolvimento de sistemas ERP utilizando
                tecnologias como PHP, jQuery, banco de dados Oracle, PL/SQL, e mais
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/designerIcon.png")} alt="UX & UI." />
            <div className={styles.aboutItemText}>
              <h3>Designer Gráfico</h3>
              <p>
                Criação de identidades visuais, vetorização, rebranding de
                marcas, e serviços completos de design gráfico.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};