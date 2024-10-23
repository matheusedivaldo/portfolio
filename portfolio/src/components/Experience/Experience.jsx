import React, { useEffect, useRef } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsContainer = skillsRef.current;
    if (skillsContainer) {
      const scroll = () => {
        skillsContainer.scrollBy({
          left: 1,
          behavior: "smooth",
        });
      };

      const interval = setInterval(scroll, 20);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Habilidades</h2>
      <div className={styles.content}>
        <div className={styles.skills} ref={skillsRef}>
          {skills.concat(skills).map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
