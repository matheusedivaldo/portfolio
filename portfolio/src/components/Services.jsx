import { useLang } from "../context/LangContext";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="section">
      <Reveal>
        <h2 className="section-title">{t.services.title}</h2>
        <p className="section-sub">{t.services.subtitle}</p>
      </Reveal>
      {t.services.categories.map((cat) => (
        <div key={cat.name} className={styles.category}>
          <h3 className={styles.categoryName}>{cat.name}</h3>
          <ul className={styles.serviceGrid}>
            {cat.items.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06} className={`${styles.card} ${styles.service}`}>
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
