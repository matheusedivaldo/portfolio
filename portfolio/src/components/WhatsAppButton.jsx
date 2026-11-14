import { FaWhatsapp } from "react-icons/fa";
import { useLang } from "../context/LangContext";
import { PHONE_INTL } from "../data/contact";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const { t } = useLang();
  return (
    <a
      className={styles.button}
      href={`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(t.contact.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.whatsappLabel}
    >
      <FaWhatsapp />
    </a>
  );
}
