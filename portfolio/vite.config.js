import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  // Dominio proprio na raiz. Se publicar em github.io/portfolio, troque para "/portfolio/".
  base: "/",
});
