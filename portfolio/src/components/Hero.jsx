import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useLang } from "../context/LangContext";
import { asset, START_DATE, yearsSince } from "../utils";
import styles from "./Hero.module.css";

const socials = [
  { href: "https://github.com/matheusedivaldo", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/matheus-silva-8297a320a/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://www.instagram.com/dev_startando", label: "Instagram", Icon: FaInstagram },
  { href: "mailto:matheusedivaldodev@gmail.com", label: "E-mail", Icon: FaEnvelope },
];

export default function Hero() {
  const { t } = useLang();
  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.greeting}>{t.hero.greeting}</p>
        <h1 className={styles.title}>Matheus Edivaldo</h1>
        <p className={styles.role}>{t.hero.role}</p>
        <p className={styles.description}>{t.hero.description(yearsSince(START_DATE))}</p>
        <div className={styles.ctas}>
          <a href="/#projects" className="btn btn-primary" onClick={(e) => go(e, "projects")}>{t.hero.ctaProjects}</a>
          <a href="/#contact" className="btn" onClick={(e) => go(e, "contact")}>{t.hero.ctaContact}</a>
        </div>
        <div className={styles.socials}>
          {socials.map(({ href, label, Icon }) => (
            <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          ))}
        </div>
      </motion.div>
      <motion.div
        className={styles.imageWrap}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <img src={asset("hero/heroImage.png")} alt={t.hero.imageAlt} className={styles.image} />
      </motion.div>
    </section>
  );
}
