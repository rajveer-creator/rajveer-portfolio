# Directory & Codebase Structure

## 1. Root Directory Layout
```text
project root
├── .planning/                  # GSD planning state & codebase intelligence
│   ├── codebase/              # 7 architectural map documents
│   ├── config.json            # GSD workflow configuration
│   ├── PROJECT.md             # Project definition & global constraints
│   ├── ROADMAP.md             # Milestone & phase roadmaps
│   ├── REQUIREMENTS.md        # Milestone requirements specification
│   └── STATE.md               # GSD memory & active phase state
├── _backup/                   # Original website backup before modern redesign
│   ├── backend-reference/     # Reference legacy backend code (.env.example, controllers)
│   └── frontend/              # Original static site HTML/CSS/JS
├── frontend/                  # Modern React + Vite application
│   ├── public/                # Static public assets
│   ├── src/                   # Application source code
│   │   ├── assets/            # Static images (profile.jpeg)
│   │   ├── components/        # Reusable UI components
│   │   ├── data/              # Single-source-of-truth data models
│   │   ├── layouts/           # MainLayout container
│   │   ├── pages/             # Route-level view components
│   │   └── styles/            # Tailwind base, utilities & editorial CSS
│   ├── index.html             # HTML entry point with font links
│   ├── package.json           # Dependencies and build scripts
│   ├── tailwind.config.js     # Editorial design system configuration
│   └── vite.config.js         # Vite bundler configuration
├── AGENTS.md                  # Project rules: Responsive-first & Lazy Dev mode
├── GEMINI.md                  # Synced project guidelines
├── README.md                  # Project documentation & setup instructions
└── run_lighthouse.js          # Lighthouse verification test script
```

## 2. Frontend Source Organization (`frontend/src/`)
- `components/`:
  - `Button.jsx`: Universal button/link with variant styles (lime, dark, outline, ghost).
  - `Navbar.jsx`: Fixed responsive header with desktop links & mobile drawer.
  - `Footer.jsx`: Bottom branding, route navigation, and verified external links.
  - `Hero.jsx`: Large editorial title, status indicators, and introductory copy.
  - `HeroCanvas.jsx`: Interactive particle visualizer.
  - `IntroManifesto.jsx`: Philosophy and approach statement.
  - `FeaturedProjectsPreview.jsx`: Home page curated showcase of active projects.
  - `SectionHeading.jsx`: Consistent section title typography wrapper.
  - `SkillCategory.jsx`: Categorized skill pill cluster.
  - `CustomCursor.jsx`: Desktop-only subtle cursor trail.
  - `ProjectCard.jsx`: Legacy unused component (candidate for cleanup).
- `pages/`:
  - `Home.jsx`, `About.jsx`, `Projects.jsx`, `Journey.jsx`, `Contact.jsx`, `NotFound.jsx`.
