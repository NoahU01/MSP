import type { NextConfig } from "next";

// Entwicklungswerkzeuge (Menü "/ Entwicklung /", Storyboard, Startseiten-Varianten, Leistungs-Unterseiten, Archiv)
// sind nur außerhalb des Live-Branches aktiv. Vercel setzt VERCEL_GIT_COMMIT_REF beim Build; lokal ist er leer → aktiv.
// Lokal testen, wie main aussieht: VERCEL_GIT_COMMIT_REF=main npm run build
const devTools = process.env.VERCEL_GIT_COMMIT_REF !== "main";

const nextConfig: NextConfig = {
  env: {
    DEV_TOOLS: devTools ? "1" : "0",
  },
};

export default nextConfig;
