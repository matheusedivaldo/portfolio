import skills from "../data/skills.json";
import { useLang } from "../context/LangContext";
import { asset } from "../utils";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function Skills() {
  const { t } = useLang();
  return (
    <section className="section" aria-labelledby="skills-title">
      <Reveal>
        <h2 id="skills-title" className="section-title">{t.skills.title}</h2>
        <p className="section-sub">{t.skills.subtitle}</p>
      </Reveal>
      <div className={styles.marquee}>
        <ul className={styles.track}>
          {[...skills, ...skills].map((skill, i) => (
            <li key={i} className={styles.skill} aria-hidden={i >= skills.length}>
              <img src={asset(skill.imageSrc)} alt={i < skills.length ? skill.title : ""} loading="lazy" />
              <span>{skill.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
