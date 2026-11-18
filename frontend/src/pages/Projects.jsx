import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Lock, Server } from 'lucide-react';
import projects from '../data/projects';
import personal from '../data/personal';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';

// Verified implementation scope notes matching strict audit constraints
const projectScopeNotes = {
  captionai: {
    scope:
      'Current Scope: Parameterized prompt assembly for social media posts. Backend web service is deployed. Frontend client interface remains in active prototype development.',
    deployment: 'Backend Service Deployed',
  },
  'gym-os': {
    scope:
      'Current Scope: Administrative access, membership plans, subscription tracking, and attendance logs. Multi-tenant data isolation is an active architectural objective; enforcement mechanisms are under ongoing development.',
    deployment: 'Local Development Environment',
  },
  'mu-chatbot': {
    scope:
      'Current Scope: Document parsing, embedding generation, and similarity retrieval grounded strictly in university FAQ documents. Evaluated as an exploratory retrieval prototype without live campus ERP integration.',
    deployment: 'Local Retrieval Prototype',
  },
};

export default function Projects() {
  const [expandedId, setExpandedId] = useState('captionai');
  const shouldReduceMotion = useReducedMotion();

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="section-padding relative">
      <div className="section-container-wide">
        {/* Editorial Page Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 border-b border-paper-border pb-8 sm:pb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-3">
            Case Studies
          </p>
          <h1 className="font-display font-extrabold tracking-tight text-ink uppercase text-[clamp(2.15rem,6.5vw,5.5rem)] leading-[0.95] sm:leading-[0.88] select-none">
            <span className="block whitespace-nowrap">Selected</span>
            <span className="block whitespace-nowrap text-stroke text-stroke-hover">
              Projects.
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed">
            Software systems and AI prototypes built to explore full-stack web architecture, multi-tenant backend design, and document-based retrieval-augmented generation.
          </p>
        </div>

        {/* Project Case Studies List */}
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            const scopeInfo = projectScopeNotes[project.id] || {
              scope: 'Current Scope: Prototype under active development.',
              deployment: 'Local Development',
            };

            return (
              <div key={project.id} className="space-y-4">
                <ProjectCard
                  project={project}
                  actionSlot={
                    <div className="w-full flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs text-ink-muted">
                        Status: <span className="font-semibold text-ink">{project.status}</span>
                      </span>

                      <button
                        type="button"
                        id={`toggle-${project.id}`}
                        onClick={() => toggleExpand(project.id)}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-paper-border bg-paper px-4 py-2 font-mono text-xs font-semibold text-ink hover:border-ink transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        aria-expanded={isExpanded}
                        aria-controls={`case-study-${project.id}`}
                      >
                        <span>{isExpanded ? 'Hide Deep Dive' : 'Case Study Details'}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${
                            shouldReduceMotion ? 'duration-0' : 'duration-200'
                          } ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>
                  }
                />

                {/* Case Study Details Accordion */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`case-study-${project.id}`}
                      role="region"
                      aria-labelledby={`toggle-${project.id}`}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { duration: 0.28, ease: [0.16, 1, 0.3, 1] }
                      }
                      className="overflow-hidden rounded-xl border border-paper-border bg-paper-muted p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8"
                    >
                      {/* Section 1: Problem vs. Approach Asymmetric Grid */}
                      <div className="grid gap-6 md:grid-cols-2">
                        {/* 1A. Problem & Goal */}
                        <div className="rounded-lg border border-paper-border bg-paper-card p-5 sm:p-6">
                          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-2 font-semibold">
                            Project Goals & Intended Use Case
                          </p>
                          <h3 className="font-display text-base font-bold uppercase tracking-tight text-ink mb-2">
                            The Motivation
                          </h3>
                          <p className="text-sm leading-relaxed text-ink-soft">
                            {project.problem}
                          </p>
                        </div>

                        {/* 1B. Solution & Approach */}
                        <div className="rounded-lg border border-paper-border bg-paper-card p-5 sm:p-6">
                          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-2 font-semibold">
                            Engineering Approach
                          </p>
                          <h3 className="font-display text-base font-bold uppercase tracking-tight text-ink mb-2">
                            Implementation Strategy
                          </h3>
                          <p className="text-sm leading-relaxed text-ink-soft">
                            {project.approach}
                          </p>
                        </div>
                      </div>

                      {/* Section 2: Scope Notes & Access Boundaries */}
                      <div className="rounded-lg border border-paper-border bg-paper-card p-5 sm:p-6">
                        <div className="grid gap-6 md:grid-cols-12 md:items-center">
                          {/* Scope notes (8 cols) */}
                          <div className="md:col-span-8">
                            <p className="font-mono text-xs uppercase tracking-wider text-ink-muted font-semibold mb-1">
                              Current Implementation Scope
                            </p>
                            <p className="text-xs sm:text-sm leading-relaxed text-ink-soft">
                              {scopeInfo.scope}
                            </p>
                          </div>

                          {/* Access badges (4 cols) */}
                          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5 md:items-end justify-end pt-3 border-t border-paper-border/60 md:border-t-0 md:pt-0">
                            <span className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-paper-border bg-paper px-3 py-1 font-mono text-[11px] font-medium text-ink-muted">
                              <Lock size={12} className="opacity-60" />
                              <span>Private Repository</span>
                            </span>
                            <span className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full border border-paper-border bg-paper px-3 py-1 font-mono text-[11px] font-medium text-ink-muted">
                              <Server size={12} className="opacity-60" />
                              <span>{scopeInfo.deployment}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Architectural Discussion Callout */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl border border-paper-border bg-paper-card p-6 sm:p-8">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-ink">
              Interested in System Architecture?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-ink-muted leading-relaxed max-w-xl">
              I am always open to discussing backend design, retrieval pipelines, or full-stack patterns.
            </p>
          </div>
          <Button to="/contact" variant="lime" className="w-full sm:w-auto shrink-0 justify-center min-h-[44px]">
            <span>Get in Touch</span>
            <ArrowUpRight size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}
