import { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { useLang } from "../context/LangContext";
import { EMAIL, PHONE_DISPLAY, PHONE_INTL } from "../data/contact";
import Reveal from "./Reveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = `${c.subjectPrefix} - ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const whatsappUrl = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(c.whatsappMessage)}`;

  return (
    <section id="contact" className="section">
      <Reveal>
        <h2 className="section-title">{c.title}</h2>
        <p className="section-sub">{c.subtitle}</p>
      </Reveal>
      <div className={styles.grid}>
        <Reveal>
          <form className={styles.form} onSubmit={submit}>
            <label>
              {c.name}
              <input type="text" required value={form.name} onChange={update("name")} autoComplete="name" />
            </label>
            <label>
              {c.email}
              <input type="email" required value={form.email} onChange={update("email")} autoComplete="email" />
            </label>
            <label>
              {c.message}
              <textarea required rows={5} value={form.message} onChange={update("message")} />
            </label>
            <button type="submit" className="btn btn-primary">
              <FaEnvelope /> {c.send}
            </button>
            <small>{c.hint}</small>
          </form>
        </Reveal>
        <Reveal delay={0.1} className={styles.info}>
          <a href={`mailto:${EMAIL}`}><FaEnvelope /> {EMAIL}</a>
          <a href={`tel:+${PHONE_INTL}`}><FaPhone /> {PHONE_DISPLAY}</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> {c.whatsapp}</a>
          <div className={styles.socials}>
            <a href="https://github.com/matheusedivaldo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/matheus-silva-8297a320a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.behance.net/matheussilva448" target="_blank" rel="noopener noreferrer" aria-label="Behance"><FaBehance /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
