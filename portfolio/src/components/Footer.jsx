import { FaArrowUp } from "react-icons/fa";
import { useLang } from "../context/LangContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} {t.footer.rights} | {t.footer.by}
      </p>
      <button className={styles.top} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={t.footer.top}>
        <FaArrowUp />
      </button>
    </footer>
  );
}
