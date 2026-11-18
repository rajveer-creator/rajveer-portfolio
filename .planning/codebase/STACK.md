# Technology Stack

## 1. Core Runtime & Tooling
- **Language / Runtime:** JavaScript (ES Modules, `type: module`), Node.js
- **Build Tool & Bundler:** Vite 6.0.1 (`@vitejs/plugin-react` 4.3.4)
- **CSS Preprocessor & Post-processing:** PostCSS 8.4.49, Autoprefixer 10.4.20
- **Package Manager:** npm

## 2. Frontend Framework & Routing
- **UI Framework:** React 18.3.1
- **DOM Renderer:** React DOM 18.3.1
- **Client Routing:** React Router DOM 6.28.0 (Browser router with route tree in `App.jsx`)

## 3. Styling & Design System
- **CSS Engine:** Tailwind CSS 3.4.15
- **Design Tokens (`tailwind.config.js`):**
  - `paper`: `#FAF8F5` (background), `#FFFFFF` (card), `#F2EFE9` (muted), `#DDD7CA` (border)
  - `ink`: `#0A0B0E` (primary), `#25272C` (soft), `#5F636E` (muted), `#9BA0AB` (faint)
  - `accent`: `#CEF23A` (electric lime), `#B8E020` (hover), `#0A0B0E` (dark)
  - `cobalt`: `#0047FF` (editorial accent), `#0038CC` (hover)
- **Typography:**
  - Display: Syne / Inter
  - Serif: Playfair Display
  - Sans: Inter
  - Mono: JetBrains Mono

## 4. Animation & Icons
- **Animation Engine:** Framer Motion 14.14.0 (orchestrated page transitions, fade-ins, accordions)
- **Icon System:** Lucide React 0.460.0 (ArrowUpRight, Github, ExternalLink, ChevronDown, etc.)
- **Interactive Graphics:** HTML5 Canvas particle network (`HeroCanvas.jsx`)

## 5. Development Dependencies & Scripts
- `npm run dev`: Starts local Vite HMR server on port 5173
- `npm run build`: Executes `vite build` into `frontend/dist/`
- `npm run preview`: Previews production build locally
