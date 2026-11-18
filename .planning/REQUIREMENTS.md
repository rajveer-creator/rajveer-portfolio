# Milestone 1 Requirements: Project Case Studies Overhaul

## 1. Project Truth Alignment
- **REQ-01 (CaptionAI Stack):** Accurately represent CaptionAI as a Python + FastAPI + Groq backend with Next.js frontend, parameterized by topic, platform, tone, and language. Do not claim custom-trained ML models.
- **REQ-02 (GYM-OS Architecture):** Accurately represent GYM-OS as a multi-tenant SaaS management system with Node.js, Express, PostgreSQL, and Prisma ORM, covering registration, auth, membership plans, subscriptions, attendance, and tenant isolation.
- **REQ-03 (MU RAG Chatbot Scope):** Accurately represent Mandsaur University RAG Chatbot as an institutional FAQ conversational assistant built with Python, vector embeddings, semantic search, and Groq generation. Do not invent campus adoption metrics.

## 2. Case Study UX & Editorial Presentation
- **REQ-04 (Deep Dive Architecture):** Present each project with problem space, user motivation, architectural pipeline flow, engineering trade-offs, and current status.
- **REQ-05 (Honest Limitations):** Explicitly list what is built vs. what is a prototype, ongoing work, or known constraint.
- **REQ-06 (Links & Fallbacks):** Safely render repository and live demo links, with graceful fallbacks when repos are private or local-only.

## 3. Responsive & Quality Guarantees
- **REQ-07 (Responsive Layouts):** Zero horizontal overflow and clean typography wrapping across all 7 mandatory viewports (360px, 390px, 540px, 768px, 1024px, 1440px, 1882px).
- **REQ-08 (Build Pass):** Production build (`npm --prefix frontend run build`) must pass with 0 errors.
- **REQ-09 (Synchronization):** Home page featured preview (`FeaturedProjectsPreview.jsx`) must stay synchronized with the updated project metadata.
