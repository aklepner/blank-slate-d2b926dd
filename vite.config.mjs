// Root Vite config for the platform's static-build step, which runs
// `vite build` at the repo root. The actual site lives in the
// `artifacts/dso-pricing` package; this config points Vite at that app so the
// root build produces the same output the package build does.
//
// vite.config.mjs is used (not .ts/.js) because vite.config.ts and
// vite.config.js are platform-managed. Vite resolves this file automatically.
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dsoRoot = path.resolve(__dirname, "artifacts/dso-pricing");

export default {
  root: dsoRoot,
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(dsoRoot, "src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
};
