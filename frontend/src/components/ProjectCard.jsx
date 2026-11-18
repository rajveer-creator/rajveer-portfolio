import { ExternalLink, Github } from 'lucide-react';

/**
 * Responsive-first Editorial project card component.
 */
export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-paper-border bg-paper-card p-5 sm:p-6 transition-all duration-300 hover:border-ink hover:shadow-md">
      <div>
        {/* Tags */}
        <div className="mb-3 sm:mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-paper-border bg-paper px-2 py-0.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-2 font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-ink">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-5 sm:mb-6 text-xs sm:text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>
      </div>

      {/* Action links with minimum 40px touch targets */}
      <div className="flex flex-wrap items-center gap-3 pt-3 sm:pt-4 border-t border-paper-border/60">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-ink/20 px-3 py-1 font-mono text-[11px] sm:text-xs font-semibold text-ink transition-colors hover:border-ink hover:bg-accent"
            aria-label={`View source code for ${project.title}`}
          >
            <Github size={13} /> <span>Code</span> ↗
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full bg-ink px-3 py-1 font-mono text-[11px] sm:text-xs font-semibold text-paper transition-colors hover:bg-accent hover:text-ink"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={13} /> <span>Demo</span> ↗
          </a>
        )}
        {!project.github && !project.live && (
          <span className="font-mono text-[10px] sm:text-[11px] text-ink-faint">
            [STATUS: IN ACTIVE DEVELOPMENT]
          </span>
        )}
      </div>
    </article>
  );
}
