import { Link } from "react-router-dom";
import projects from "../data/projects.json";
import { useLang } from "../context/LangContext";
import { asset } from "../utils";
import Reveal from "./Reveal";
import styles from "./Projects.module.css";

export default function Projects() {
  const { t } = useLang();
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-sub">{t.projects.subtitle}</p>
      </Reveal>
      <ul className={styles.grid}>
        {projects.map((p, i) => {
          const text = t.projects.list[p.slug];
          return (
            <Reveal as="li" key={p.slug} delay={i * 0.08} className={styles.card}>
              <Link to={`/projetos/${p.slug}`} className={styles.imageLink} aria-label={`${t.projects.details}: ${text.title}`}>
                <img src={asset(p.imageSrc)} alt={t.projects.imageAlt(text.title)} loading="lazy" />
              </Link>
              <div className={styles.body}>
                <h3>{text.title}</h3>
                <p>{text.description}</p>
                <ul className={styles.tags}>
                  {p.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className={styles.actions}>
                  <Link to={`/projetos/${p.slug}`} className="btn btn-primary">{t.projects.details}</Link>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn">{t.projects.visit}</a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
