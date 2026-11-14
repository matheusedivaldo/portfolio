import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projects from "../data/projects.json";
import { useLang } from "../context/LangContext";
import { asset } from "../utils";
import styles from "./ProjectPage.module.css";

export default function ProjectPage() {
  const { slug } = useParams();
  const { t } = useLang();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const text = project && t.projects.list[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (text) document.title = `${text.title} | Matheus Edivaldo`;
  }, [slug, text]);

  if (!project) {
    return (
      <main className={`section ${styles.page}`}>
        <p>{t.projects.notFound}</p>
        <Link to="/#projects" className="btn">{t.projects.back}</Link>
      </main>
    );
  }

  const next = projects[(index + 1) % projects.length];

  return (
    <main className={`section ${styles.page}`}>
      <Link to="/" state={{ scrollTo: "projects" }} className={styles.back}>
        <FaArrowLeft /> {t.projects.back}
      </Link>

      <h1 className={styles.title}>{text.title}</h1>
      <p className={styles.lead}>{text.description}</p>

      <img src={asset(project.imageSrc)} alt={t.projects.imageAlt(text.title)} className={styles.cover} />

      <div className={styles.meta}>
        <section>
          <h2>{t.projects.stack}</h2>
          <ul className={styles.tags}>
            {project.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>{t.projects.links}</h2>
          <div className={styles.links}>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaExternalLinkAlt /> {t.projects.visit}
            </a>
            {project.source && (
              <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">
                <FaGithub /> {t.projects.code}
              </a>
            )}
          </div>
        </section>
      </div>

      <Link to={`/projetos/${next.slug}`} className={styles.next}>
        <span>{t.projects.next}</span>
        <strong>
          {t.projects.list[next.slug].title} <FaArrowRight />
        </strong>
      </Link>
    </main>
  );
}
