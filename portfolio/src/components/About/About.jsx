import React from 'react';
import { getImageUrl } from '../../utils';
import { GiLaptop, GiNetworkBars, GiPaintBrush } from 'react-icons/gi';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mim</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/aboutImage.png')}
          alt="Trabalhando no computador"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <GiLaptop className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Frontend</h3>
              <p>
                Especialista em criar sites modernos, responsivos e otimizados
                para proporcionar uma excelente experiência de usuário em
                qualquer dispositivo.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <GiNetworkBars className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor de Sistemas ERP</h3>
              <p>
                Experiência no desenvolvimento de sistemas ERP utilizando
                tecnologias como PHP, jQuery, banco de dados Oracle, PL/SQL, e
                mais.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <GiPaintBrush className={styles.icon} />
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

export default About;