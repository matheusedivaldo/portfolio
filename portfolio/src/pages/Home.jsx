import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { useLang } from "../context/LangContext";

export default function Home() {
  const { state, hash } = useLocation();
  const { t } = useLang();

  useEffect(() => {
    document.title = t.meta.title;
  }, [t]);

  useEffect(() => {
    const id = state?.scrollTo || hash.replace("#", "");
    if (!id) return;
    // espera o layout montar antes de rolar
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
    return () => clearTimeout(timer);
  }, [state, hash]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
