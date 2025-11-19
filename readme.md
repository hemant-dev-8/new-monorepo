Bilkul — maine ek **minimal Turborepo monorepo** template taiyaar karke canvas mein dala hai. Usmein:

* Turborepo root with `npm run start:dev` (runs frontend + backend in parallel)
* Frontend: Vite (JS) on port **3000** (very minimal files)
* Backend: TypeScript + Express + EJS on port **8443** — in dev it **proxies** to Vite so opening `http://localhost:8443` shows the frontend through the backend; in prod it serves built frontend from `dist/frontend`.
* Common `dist/` at repo root after build (frontend → `dist/frontend`, backend → `dist/backend`)
* A tiny `packages/shared` placeholder package to confirm the pipeline

Main document with the complete file tree and **copy-paste ready** contents is saved to the canvas as **“Minimal-monorepo-monorepo”**. (I've included all package.json, tsconfig, vite config, server code, and a simple EJS view.)

Aap kya chahenge ab:

1. Main yahi files line-by-line paste kar dun terminal/copy-ready?
2. Ya phir main `package.json` ko npm workspaces style convert kar du taaki `npm install` root se sab kuch manage kare?
3. Ya koi aur tweak — e.g., enable HTTPS on 8443, or make frontend build go directly to `dist/frontend` (I already showed both simple options)?

Bataiye — main aapke pasand ke hisaab se seedha files paste kar dunga. Shant aur simple. 🙏
