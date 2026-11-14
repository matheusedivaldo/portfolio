import { createContext, useContext, useEffect, useState } from "react";
import pt from "../i18n/pt";
import en from "../i18n/en";

const dictionaries = { pt, en };
const LangContext = createContext(null);

const initial = () => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved in dictionaries) return saved;
  } catch { /* ignore */ }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initial);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = dictionaries[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", dictionaries[lang].meta.description);
    try { localStorage.setItem("lang", lang); } catch { /* ignore */ }
  }, [lang]);

  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  return <LangContext.Provider value={{ lang, toggle, t: dictionaries[lang] }}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LangContext);
