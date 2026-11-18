# Application Architecture

## 1. Architectural Style
- **Pattern:** Single Page Application (SPA) with declarative client-side routing.
- **Rendering:** Client-side rendering (CSR) powered by Vite + React 18.
- **Aesthetic:** Minimal Editorial / Digital Signature. Asymmetric grids, large expressive typography, high-contrast outlines, paper/ink palette.

## 2. Component Hierarchy & Flow
```text
App (BrowserRouter)
└── MainLayout
    ├── Navbar (Fixed top navigation, mobile slide-out drawer)
    ├── Outlet (Routed views)
    │   ├── Home (Hero, Canvas, Philosophy, FeaturedProjectsPreview, Closing CTA)
    │   ├── About (Bio narrative, profile card, categorized skills)
    │   ├── Projects (Detailed project showcase, accordion architecture views)
    │   ├── Journey (Education timeline, verifiable certifications)
    │   ├── Contact (Validated message form, mailto fallback)
    │   └── NotFound (Editorial 404 handler)
    └── Footer (Editorial copyright, navigation links, GitHub/LinkedIn external targets)
```

## 3. Data Flow & Single Source of Truth
The application does not use external state management libraries (Redux/Zustand) or backend databases; data is encapsulated in static, strictly typed JavaScript data files in `frontend/src/data/`:
- `personal.js` — Name, initials, bio, degrees, contact channels, social profiles.
- `projects.js` — Project metadata, categories, architecture pipelines, problem/approach notes.
- `skills.js` — Categorized skills (Languages, Frontend, Tools, CS Fundamentals, Exploring).
- `education.js` — Degree timelines, institution, coursework, performance notes.
- `certifications.js` — Verified certifications, issuers, dates, credential links.

## 4. Layout & Interaction Patterns
- **Responsive Wrapper:** `.section-container` (max-w 1240px) and `.section-container-wide` (max-w 1440px).
- **Interactive Hover:** `.text-stroke-hover` delivers a 300ms transition from transparent outlined text to solid ink on hover (`(hover: hover) and (pointer: fine)`).
- **Reduced Motion:** Interactive canvas and animations respect accessibility constraints. Custom cursor is disabled on small viewports `< 1024px`.
