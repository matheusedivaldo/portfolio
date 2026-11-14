import { useLang } from "../context/LangContext";
import { asset } from "../utils";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function Experience() {
  const { t } = useLang();
  const { experience } = t;
  return (
    <section id="experience" className="section">
      <Reveal>
        <h2 className="section-title">{experience.title}</h2>
        <p className="section-sub">{experience.subtitle}</p>
      </Reveal>
      <ol className={styles.timeline}>
        {experience.items.map((item, i) => (
          <Reveal as="li" key={item.organisation} delay={i * 0.08} className={styles.timelineItem}>
            <span className={styles.dot} aria-hidden="true" />
            <div className={styles.card}>
              <img src={asset(item.imageSrc)} alt="" className={styles.orgLogo} />
              <div>
                <h3>{item.role}</h3>
                <p className={styles.org}>{item.organisation}</p>
                <p className={styles.period}>
                  {item.start} - {item.end ?? experience.present}
                </p>
                <ul className={styles.points}>
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
