# Testing & Verification Protocols

## 1. Automated Build Verification
The primary deterministic sanity check is:
```bash
npm --prefix frontend run build
```
This runs `vite build`, validating:
- TypeScript / JSX syntax compilation.
- Module resolution and asset imports.
- PostCSS / Tailwind CSS generation without style errors.
- Bundle emission into `frontend/dist/`.

## 2. Interactive Development Testing
```bash
npm --prefix frontend run dev
```
Serves the Vite development server with Hot Module Replacement (HMR).

## 3. Viewport QA Checkpoints
Every UI modification must be manually or headlessly verified at:
1. `360px` (Compact mobile)
2. `390px` (Standard mobile)
3. `540px` (Large mobile)
4. `768px` (Tablet)
5. `1024px` (Laptop)
6. `1440px` (Desktop)
7. `1882px` (Ultra-wide)

### Critical Inspection Checklist:
- [ ] Zero horizontal scrollbar / overflow.
- [ ] No awkward mid-word line breaks or text clipping.
- [ ] Minimum 44px touch targets on buttons and mobile menu triggers.
- [ ] Keyboard navigation: focus rings visible (`focus-visible:outline-accent`).
- [ ] Interactive hover states smoothly transition (`.text-stroke-hover`).
- [ ] Reduced motion: No aggressive or disorienting animations on small viewports.
