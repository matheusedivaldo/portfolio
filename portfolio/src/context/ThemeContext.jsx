import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const read = () => {
  try { return localStorage.getItem("theme"); } catch { return null; }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => read() || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch { /* ignore */ }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
