# Milestone 2: Portfolio Production Readiness Plan

## 1. Overview & Objective
Prepare Rajveer Gurjar's portfolio website for flawless, secure, and professional production deployment on Vercel. Address all SEO, performance, accessibility, clean git hygiene, and SPA routing requirements identified during the pre-deployment audit.

---

## 2. Audit Findings Summary

### Critical Deployment Blockers
1. **Missing SPA Routing Fallback (`vercel.json`):** Direct navigation or page refresh on `/projects`, `/about`, `/journey`, or `/contact` returns 404 on Vercel without a rewrite rule (`rewrites: [{ source: "/(.*)", destination: "/" }]`).
2. **Repository Subdirectory Root Mismatch:** Repository root has no `package.json`; application resides in `frontend/`. Vercel deployments will fail unless Root Directory is set to `frontend` or a root proxy configuration is provided.
3. **Incomplete `.gitignore`:** Dev artifacts (`screenshots/`, `screenshots_about/`, `lighthouse_reports/`, `_backup/`, `frontend/src_backup_before_redesign/`) are untracked and unignored, risking accidental commit of local media/backups.

### High-Priority Improvements
1. **SEO & Social Sharing:** Missing Open Graph image (`og:image`), Twitter cards, canonical tags, and dynamic route titles (all routes currently show static "Rajveer Gurjar | Portfolio").
2. **Branded Favicon:** Replace inline SVG emoji (`⚡`) with authentic, branded SVG/ICO matching initials ("RG").
3. **Bundle Optimization (Route Splitting):** Single monolithic 392 kB JS bundle. Introduce `React.lazy()` + `<Suspense>` for route-based chunking.
4. **Asset Optimization:** Compress `profile.jpeg` (135 kB) to optimized WebP format (~35 kB) and set explicit dimensions to prevent CLS.
5. **Code Hygiene:** Remove dead components (`MarqueeTicker.jsx`, `ProjectCard.jsx`, `SectionHeading.jsx`, `SkillCategory.jsx`).

---

## 3. Phased Implementation Roadmap

### Phase 1: Deployment & Git Configuration (Blockers)
- Add `vercel.json` with SPA routing rewrite rule.
- Update `.gitignore` to exclude `screenshots/`, `lighthouse_reports/`, `_backup/`, and backup folders.
- Provide clear Vercel project settings guide (Root Directory: `frontend`, Build Command: `npm run build`, Output Directory: `dist`).

### Phase 2: SEO, Metadata & Favicon Assets (Completed & Verified)
- Create branded SVG favicon and update `index.html`.
- Add Open Graph image asset (`og-image.png`) in `public/`.
- Add complete social sharing metadata (OG, Twitter cards).
- Add lightweight document title and meta description updater for route navigation.
- *Domain-Dependent Pending Tasks:* Canonical tag (`<link rel="canonical">`) and `sitemap.xml` are intentionally held until the final production custom domain or Vercel URL is confirmed.

### Phase 3: Performance & Bundle Optimization
- Implement route-level code splitting (`React.lazy()` and `<Suspense>` in `App.jsx`).
- Convert `profile.jpeg` to WebP and update imports in `About.jsx`.
- Clean up unused/dead components in `frontend/src/components/`.

### Phase 4: Final Production Verification & Acceptance
- Run `npm --prefix frontend run build` to confirm multi-chunk build pass.
- Verify zero regression across all 6 routes and 7 responsive viewports (360px–1882px).
- Verify honest contact form mailto behavior.
- Document zero-secret guarantee and Vercel launch readiness.

---

## 4. Acceptance Criteria
- [ ] `npm --prefix frontend run build` exits 0 with distinct route-level chunks.
- [ ] Direct URL refresh on `/projects`, `/about`, etc. routes cleanly via `vercel.json`.
- [ ] Social share preview cards render properly with valid OG image metadata.
- [ ] No local screenshots, backups, or secrets committed to git.
- [ ] Zero functional or responsive regressions on existing routes.
