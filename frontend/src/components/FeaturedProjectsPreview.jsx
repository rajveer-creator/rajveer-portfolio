import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import personal from '../data/personal';
import Button from './Button';

export default function FeaturedProjectsPreview() {
  const featured = projects.filter((p) => p.featured);
  const shouldReduceMotion = useReducedMotion();

  // Validate GitHub URL strictly from existing personal data
  const hasValidGithub =
    typeof personal?.social?.github === 'string' &&
    personal.social.github.trim().startsWith('http');

  return (
    <section className="section-padding relative border-b border-paper-border bg-paper">
      <div className="section-container-wide">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-paper-border pb-6 sm:pb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2">
              Featured Work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-ink leading-tight select-none">
              Selected <br />
              <span className="text-stroke text-stroke-hover">Projects.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="max-w-sm text-xs sm:text-sm text-ink-muted leading-relaxed">
              Curated software prototypes and systems built to explore full-stack architecture, multi-tenancy, and retrieval systems.
            </p>
            <Link
              to="/projects"
              className="group inline-flex min-h-[44px] items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:text-accent-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span>View all projects</span>
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Project Showcase List */}
        <div className="space-y-4 sm:space-y-6">
          {featured.map((project, index) => (
            <motion.article
              key={project.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.35, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }
              }
              className="group relative overflow-hidden rounded-xl border border-paper-border bg-paper-card p-6 sm:p-8 transition-colors hover:border-ink/60 shadow-xs"
            >
              {/* Project row grid */}
              <div className="grid gap-6 md:grid-cols-12 md:items-center">
                {/* Left Column: Number, Category, Status & Tags (3 cols) */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-ink select-none">
                      {project.number}
                    </span>
                    <div>
                      <p className="font-mono text-xs text-ink-muted uppercase">
                        {project.category}
                      </p>
                      <span className="mt-1 inline-flex items-center rounded-sm border border-paper-border bg-paper px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold text-ink">
                        {project.statusBadge}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-paper-border bg-paper px-2 py-0.5 font-mono text-[10px] text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Middle Column: Title, Tagline & Description (6 cols) */}
                <div className="md:col-span-6">
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-serif text-sm italic text-ink-soft">
                    {project.tagline}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                </div>

                {/* Right Column: Repository Metadata & Action Link (3 cols) */}
                <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col md:items-end justify-between items-start gap-3 pt-4 border-t border-paper-border/60 md:border-t-0 md:pt-0">
                  <span className="inline-flex min-h-[32px] items-center gap-1.5 rounded-full border border-paper-border bg-paper px-3 py-1 font-mono text-[10px] sm:text-[11px] text-ink-muted select-none">
                    <Lock size={12} className="opacity-60" />
                    <span>Private Repository</span>
                  </span>

                  <Link
                    to="/projects"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-paper-border bg-paper px-4 py-2 font-mono text-xs font-semibold text-ink hover:border-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`View case study for ${project.title}`}
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Section bottom bar */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-paper-border pt-6 sm:pt-8">
          {hasValidGithub ? (
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[44px] items-center gap-2 font-mono text-xs text-ink-muted hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Github size={15} className="text-ink" />
              <span className="font-semibold uppercase tracking-wider">GitHub: @rajveer-creator</span>
              <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>
          ) : (
            <span className="font-mono text-xs text-ink-muted">Developer Portfolio</span>
          )}

          <Button to="/projects" variant="ghost" className="w-full sm:w-auto justify-center min-h-[44px]">
            <span>View All Projects</span>
            <ArrowUpRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}
