import { useLang } from "../context/LangContext";
import { asset } from "../utils";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section">
      <Reveal>
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-sub">{t.about.subtitle}</p>
      </Reveal>
      <div className={styles.aboutGrid}>
        <Reveal>
          <img src={asset("about/aboutImage.png")} alt={t.about.imageAlt} className={styles.aboutImage} loading="lazy" />
        </Reveal>
        <ul className={styles.aboutList}>
          {t.about.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.08} className={styles.card}>
              <img src={asset(item.icon)} alt="" className={styles.aboutIcon} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
