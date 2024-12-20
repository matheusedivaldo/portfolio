import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
    return (
        <div className={styles.container}>
            <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                    <img
                        src={getImageUrl(imageSrc)}
                        alt={`Image of ${title}`}
                        className={styles.image}
                    />
                </div>
            </a>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>
                        {skill}
                    </li>
                ))}
            </ul>
            <div className={styles.links}>
                <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Demo
                </a>
                {source && (
                    <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Código
                    </a>
                )}
            </div>
        </div>
    );
};