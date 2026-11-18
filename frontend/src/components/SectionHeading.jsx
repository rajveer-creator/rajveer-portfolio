/**
 * Responsive-first Section Heading with editorial display typography.
 */
export default function SectionHeading({ label, title, subtitle, className = '' }) {
  return (
    <div className={`mb-8 sm:mb-12 ${className}`}>
      {label && (
        <div className="mb-2 sm:mb-3 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-ink-muted">
            {label}
          </p>
        </div>
      )}
      {title && (
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-ink leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-ink-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
