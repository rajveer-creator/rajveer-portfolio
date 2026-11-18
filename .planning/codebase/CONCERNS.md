# Technical Concerns & Debt

## 1. Project Data Inaccuracies in `projects.js`
- **CaptionAI:** Currently cataloged as "Computer Vision / NLP image caption generator" in `frontend/src/data/projects.js`, whereas the real project architecture is **Next.js frontend + Python FastAPI + Groq backend** with platform, tone, and language inputs.
- **GYM-OS:** Currently cataloged as "JavaScript, React, Local Storage", whereas the real project is a **Node.js, Express, PostgreSQL, Prisma ORM multi-tenant gym management system**.
- **Mandsaur University RAG Chatbot:** Missing specific references to **Groq** and the specific institutional FAQ knowledge base.

## 2. Legacy Unused Files
- `frontend/src/components/ProjectCard.jsx` is an unused legacy component that is not imported anywhere in the project. Both `Projects.jsx` and `FeaturedProjectsPreview.jsx` use inline editorial card layouts.

## 3. Absence of Project Media Assets
- `frontend/src/assets/` only holds `profile.jpeg`.
- There are no screenshots, diagrams, or UI mockups for CaptionAI, GYM-OS, or the MU Chatbot.
- Need to decide between sourcing genuine screenshots vs. rendering clean editorial SVG/ASCII architecture flow diagrams.

## 4. Null Project Repository & Demo Links
- `github` and `live` fields in `frontend/src/data/projects.js` are currently `null`.
- UI handles null values gracefully, but real case studies benefit from confirmed links or clear "Available on Request" copy.
