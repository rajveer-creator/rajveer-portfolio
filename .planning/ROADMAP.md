# Project Roadmap

## Milestone 1: Improving Project Case Studies (Completed)

### Goal
Upgrade the project showcase and case studies section into an authentic, deeply informative, and responsive technical experience that highlights real engineering decisions without generic cards or fake metrics.

---

### [x] Phase 1: Data Model Alignment & Verification (Completed & Verified)
- **Target File:** `frontend/src/data/projects.js`
- **Deliverables:**
  - Update CaptionAI metadata (Next.js, FastAPI, Groq, parameter inputs, copy/delete controls, backend deployed badge).
  - Update GYM-OS metadata (Node.js, Express, PostgreSQL, Prisma ORM, multi-tenant boundaries, core architecture built badge).
  - Update MU RAG Chatbot metadata (Python, document FAQ vector search, Groq generation, retrieval prototype badge).
  - Ensure all GitHub and live demo links are strictly null.
- **Verification:**
  - `node -e` runtime import passed (3 projects loaded).
  - `npm --prefix frontend run build` passed with exit code 0.

---

### [x] Phase 2: Projects Page Editorial Case Studies Implementation (Completed & Verified)
- **Target File:** `frontend/src/pages/Projects.jsx`
- **Deliverables:**
  - Elevate the accordion/showcase into an editorial technical deep-dive.
  - Present system architecture flow (dynamic `{project.architecture.length} Sequential Stages`).
  - Feature Problem & Goals vs. Implementation Approach asymmetric grid.
  - Conservative scope notes with explicit development boundaries and `[Private Repository]` metadata pill.
  - Accessible accordion (`role="region"`, `aria-labelledby`, `aria-expanded`, unmounting on collapse) with `useReducedMotion()`.
- **Verification:** Production build passed (exit code 0); code-level responsive audit passed.

---

### [x] Phase 3: Home Page Featured Showcase Synchronization (Completed & Verified)
- **Target File:** `frontend/src/components/FeaturedProjectsPreview.jsx`
- **Deliverables:**
  - Synchronize tags, categories, status badges, and concise descriptions to reflect the audited tech stacks.
  - Strict runtime validation of `personal.social.github` (no fallback/invented URLs).
  - Minimum 44px touch targets on all interactive links/buttons.
  - `useReducedMotion()` integration with simplified animations.
- **Verification:** Production build passed (exit code 0); code-level responsive audit passed.

---

### [x] Phase 4: Full Multi-Viewport QA & Verification (Completed & Verified via Code QA)
- **Deliverables:**
  - Multi-viewport verification across 7 distinct widths: 360px, 390px, 540px, 768px, 1024px, 1440px, 1882px.
  - Route coverage across all 6 application routes: `/`, `/about`, `/projects`, `/journey`, `/contact`, and `404`.
  - Touch targets >= 44px, keyboard accessibility (`:focus-visible`), and text wrapping verified.
  - Browser loopback status checked: socket loopback blocked by Windows AppContainer sandbox (`connect EACCES 127.0.0.1`). Reported honestly without claiming browser visual verification.
- **Verification:** `npm --prefix frontend run build` passed with exit code 0; zero defects found.


---

## Milestone 2: Portfolio Production Readiness (Active Planning)

### Goal
Prepare the portfolio for high-performance, secure, and resilient production deployment on Vercel with complete SEO metadata, route code splitting, branded assets, clean SPA routing fallbacks, and zero secret leakage.

---

### [x] Phase 1: Deployment & Git Configuration (Completed & Verified)
- Target: `frontend/vercel.json`, `.gitignore`
- Deliverables:
  - Add SPA routing rewrite rule (`{"rewrites": [{"source": "/(.*)", "destination": "/"}]}`) to prevent 404s on direct route visits.
  - Update root `.gitignore` to exclude dev screenshots, reports, and local backups.
  - Document Vercel project deployment settings (Root Directory: `frontend`).

---

### [x] Phase 2: SEO, Social Metadata & Favicon Assets (Completed & Verified)
- Target: `frontend/index.html`, `frontend/public/`, `frontend/src/layouts/MainLayout.jsx`
- Deliverables:
  - Replaced emoji favicon with branded geometric vector SVG at `frontend/public/favicon.svg`.
  - Added 1200x630 social preview card asset at `frontend/public/og-image.png`.
  - Added complete social sharing tags (OG, Twitter cards) in `frontend/index.html`.
  - Added lightweight route title and meta description updater in `MainLayout.jsx`.
  - Deferred canonical URL and `sitemap.xml` until production domain is finalized.
- Verification: Production build passed (exit code 0); PNG dimensions verified (1200x630, 49.5 kB).

---

### [ ] Phase 3: Performance & Bundle Optimization
- Target: `frontend/src/App.jsx`, `frontend/src/assets/`, `frontend/src/components/`
- Deliverables:
  - Implement route-level code splitting using `React.lazy()` and `<Suspense>`.
  - Convert `profile.jpeg` to optimized WebP.
  - Clean up unreferenced/dead components (`MarqueeTicker`, `ProjectCard`, `SectionHeading`, `SkillCategory`).

---

### [ ] Phase 4: Final Production Verification & Acceptance
- Deliverables:
  - Multi-chunk production build verification.
  - Route and link integrity verification.
  - Zero-secret and clean working directory confirmation.
