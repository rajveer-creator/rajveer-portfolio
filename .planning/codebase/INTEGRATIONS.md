# Integrations & External Touchpoints

## 1. External Social & Profile Links
All social links are centralized in `frontend/src/data/personal.js`:
- **GitHub:** `https://github.com/rajveer-creator`
- **LinkedIn:** `https://www.linkedin.com/in/rajveer-gurjar-77b867382`
- **Direct Email:** `rgurjar8889@gmail.com`

## 2. Contact Dispatch Integration
- **Mechanism:** Client-side form validation in `frontend/src/pages/Contact.jsx`.
- **Backend Coupling:** Decoupled. Zero server-side API or mock backend endpoints.
- **Fallback:** Direct `mailto:` string synthesis with sanitized URI encoding for subject, name, and message body.

## 3. Project Repositories & Live Demos
- Defined in `frontend/src/data/projects.js`.
- Currently set to `github: null` and `live: null` for all projects.
- UI components conditionally render links only when non-null URLs are present, preventing 404 links.

## 4. Fonts & CDN Assets
- Google Fonts loaded via preconnect in `frontend/index.html`:
  - `Inter` (weights: 300, 400, 500, 600, 700)
  - `Playfair Display` (weights: 400, 600, 700, 800)
  - `JetBrains Mono` (weights: 400, 500, 600)
  - `Syne` (weights: 700, 800)
