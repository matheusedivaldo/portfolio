import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import styles from "./Navbar.module.css";

const SECTIONS = ["about", "experience", "projects", "services", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    if (onHome) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    else navigate("/", { state: { scrollTo: id } });
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.inner} aria-label="Principal">
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          Matheus<span>.</span>
        </Link>

        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                onClick={(e) => go(e, id)}
                className={onHome && active === id ? styles.active : ""}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.iconBtn} onClick={toggleLang} aria-label={t.nav.lang}>
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button className={styles.iconBtn} onClick={toggleTheme} aria-label={t.nav.theme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className={`${styles.iconBtn} ${styles.burger}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}
