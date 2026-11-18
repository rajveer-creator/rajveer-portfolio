// Projects — verified, real projects in active development
// No invented metrics, screenshots, or fake URLs

const projects = [
  {
    id: 'captionai',
    number: '01',
    title: 'CaptionAI',
    tagline: 'Social media caption generator with Groq-powered inference',
    description:
      'A web application designed to generate social media captions tailored to user inputs including topic, target platform, tone, and language, with copy and delete functionality.',
    category: 'Full-Stack AI Utility',
    tags: ['Next.js', 'FastAPI', 'Python', 'Groq API', 'Tailwind CSS'],
    status: 'Prototype',
    statusBadge: 'Backend Deployed (API Only)',
    accentColor: 'lime',
    problem:
      'Writing platform-specific captions manually is repetitive and time-consuming when adapting content across different social media channels.',
    approach:
      'Decoupling a Next.js interface from a Python FastAPI backend that passes structured prompt parameters to the Groq API for caption generation.',
    architecture: [
      'Next.js client interface with topic, platform, tone, and language parameters',
      'Python FastAPI backend service for request handling and prompt assembly',
      'Groq API integration for text generation',
      'Client-side clipboard copy and caption management controls',
    ],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 'gym-os',
    number: '02',
    title: 'GYM-OS',
    tagline: 'Multi-tenant gym management and operational backend',
    description:
      'A multi-tenant management platform built to handle gym registrations, administrative access, membership plans, subscription tracking, payments, and attendance logging with tenant data isolation.',
    category: 'Multi-Tenant Web Application',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma ORM'],
    status: 'In Development',
    statusBadge: 'Core Architecture Built',
    accentColor: 'cobalt',
    problem:
      'Fitness centers often rely on disjointed spreadsheets or complex software systems for routine member tracking, attendance records, and plan management.',
    approach:
      'Modeling relational gym entities in PostgreSQL using Prisma ORM, utilizing an Express backend to enforce multi-tenant operational boundaries.',
    architecture: [
      'Gym registration and administrative authentication flows',
      'Tenant-scoped relational data modeling with PostgreSQL and Prisma ORM',
      'Membership plan tiers and subscription lifecycle tracking',
      'Attendance check-in logging and payment records management',
    ],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 'mu-chatbot',
    number: '03',
    title: 'Mandsaur University RAG Chatbot',
    tagline: 'Document-based campus FAQ assistant using RAG',
    description:
      'A conversational assistant that indexes Mandsaur University FAQ documents and retrieves relevant context passages to answer student queries using Groq.',
    category: 'AI / Knowledge Systems',
    tags: ['Python', 'RAG', 'Vector Search', 'Groq API'],
    status: 'Prototype',
    statusBadge: 'Retrieval Prototype',
    accentColor: 'lime',
    problem:
      'Students and visitors frequently need to search through fragmented notices and university handbooks to find answers to routine campus and academic questions.',
    approach:
      'Parsing institutional FAQ documents into a vector retrieval pipeline to retrieve relevant text chunks and generate source-grounded answers via Groq.',
    architecture: [
      'University FAQ document ingestion and text chunking',
      'Vector embedding generation and semantic similarity search',
      'Context retrieval from indexed institutional documents',
      'Source-grounded response generation via Groq API',
    ],
    github: null,
    live: null,
    featured: true,
  },
];

export default projects;
