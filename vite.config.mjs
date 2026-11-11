// Root Vite config for the platform's static-build step, which runs
// `vite build` at the repo root. The site lives in `artifacts/dso-pricing`.
// Its plugins are installed in that package (not at the workspace root), so
// they are resolved from the app's directory here. This file is plain .mjs
// and does not import the app's .ts config.
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL, fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dsoRoot = path.resolve(__dirname, "artifacts/dso-pricing");
const appRequire = createRequire(path.join(dsoRoot, "package.json"));

async function loadFromApp(name) {
  const resolved = appRequire.resolve(name);
  return import(pathToFileURL(resolved).href);
}

const reactModule = await loadFromApp("@vitejs/plugin-react");
const tailwindModule = await loadFromApp("@tailwindcss/vite");

const react = reactModule.default ?? reactModule;
const tailwindcss = tailwindModule.default ?? tailwindModule;

export default {
  root: dsoRoot,
  base: process.env.BASE_PATH ?? "/",
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
