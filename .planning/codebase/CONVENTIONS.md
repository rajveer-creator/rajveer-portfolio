# Code & Design Conventions

## 1. Permanent Responsive Design Rules (from `AGENTS.md` / `GEMINI.md`)
- **Responsive-First Architecture:** Every layout must adapt gracefully across viewports.
- **Mandatory Breakpoint Testing Matrix:**
  - `360px` (Compact mobile / small Android)
  - `390px` (Standard modern mobile / iPhone 12-15)
  - `540px` (Large mobile / small foldables)
  - `768px` (Tablet portrait)
  - `1024px` (Tablet landscape / small laptop)
  - `1440px` (Desktop)
  - `1882px` (Ultra-wide desktop)
- **Zero Horizontal Overflow:** Strict adherence to `overflow-x: hidden`, `width: 100%`, and avoiding unconstrained widths.
- **Mobile Usability:** Minimum 44px touch targets on interactive controls; stack action buttons on mobile screens; disable custom cursor on touch/small viewports (`< 1024px`).
- **Typography Responsiveness:** Use responsive `clamp()` font sizing (e.g. `clamp(2.15rem, 5.5vw, 4.75rem)`) and explicit flex-wrap rules to prevent mid-word hyphenation and horizontal clipping.

## 2. Ponytail / Lazy Senior Dev Rules
- **Smallest Working Diff:** Solve problems with the least new code. The best code is code never written.
- **No Speculative Abstractions:** No wrappers, boilerplate, mock layers, or "for later" features nobody asked for.
- **Scope Discipline:** Only touch callers, tests, fixtures, config, and exports strictly required for the feature.
- **Root-Cause Fixes:** Fix issues at the shared data layer or utility rather than hacking individual call sites.
- **Truthful Copy:** Never invent metrics, user numbers, custom-trained model claims, or fake testimonials.

## 3. Styling & Naming Patterns
- Standard Tailwind utility classes preferred over custom CSS where possible.
- Custom utilities reserved for core aesthetic tokens (`.text-stroke`, `.text-stroke-hover`, `.bg-grid-tech`).
- PascalCase for React components (`FeaturedProjectsPreview.jsx`).
- camelCase for JavaScript utilities and data modules (`projects.js`).
