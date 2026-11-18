# Rajveer Gurjar — Developer Portfolio

Modern, minimal, editorial developer portfolio built with React, Vite, Tailwind CSS, and React Router.

## Project Structure

```text
├── _backup/                     # Safe archive of original static site & backend reference
│   ├── backend-reference/       # Non-secret backend source files & .env.example
│   └── frontend/                # Original HTML/CSS/JS files & assets
├── frontend/                    # Modern React + Vite application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── assets/              # Profile placeholder & media assets
│   │   ├── components/          # Reusable editorial components
│   │   │   ├── Button.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── SkillCategory.jsx
│   │   ├── data/                # Single source of truth data layer
│   │   │   ├── certifications.js
│   │   │   ├── education.js
│   │   │   ├── personal.js
│   │   │   ├── projects.js
│   │   │   └── skills.js
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx   # Shared layout with Navbar, Outlet, Footer, and scroll-to-top
│   │   ├── pages/
│   │   │   ├── About.jsx        # Bio, narrative, categorized skills
│   │   │   ├── Contact.jsx      # Direct info & validated message form
│   │   │   ├── Home.jsx         # Hero, philosophy, featured projects preview, CTA
│   │   │   ├── Journey.jsx      # Academic milestones & certifications
│   │   │   ├── NotFound.jsx     # Editorial 404 page
│   │   │   └── Projects.jsx     # Showcase grid & active project links
│   │   ├── styles/
│   │   │   └── index.css        # Base styles, typography & layout utilities
│   │   ├── App.jsx              # Application router definition
│   │   └── main.jsx             # React entry point
│   ├── index.html               # HTML document with Inter, Playfair Display & JetBrains Mono fonts
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js       # Minimal editorial color palette (paper, ink, accent)
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Creative Direction

- **Style:** Minimal Editorial / Digital Signature.
- **Palette:**
  - `paper`: `#FAF9F6` (warm off-white background)
  - `ink`: `#141413` (near-black typography)
  - `accent`: `#CEF23A` (restrained electric-lime accent)
- **Typography:**
  - Sans: Inter (system & body text)
  - Serif: Playfair Display (editorial headings & branding)
  - Mono: JetBrains Mono (status labels, codes & metrics)

## Routes

- `/` — Home (Hero, Philosophy, Featured Projects preview, Call to action)
- `/about` — About (Background narrative, profile card, categorized skill groups)
- `/journey` — Journey (Formal education timeline & verifiable certifications)
- `/projects` — Projects (Detailed projects grid with repository and preview flags)
- `/contact` — Contact (Direct contact points, client-side validated form, decoupled dispatch)
- `*` — Custom 404 page

## Getting Started

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
Build output is generated in `frontend/dist/`.
