import { useReducedMotion } from 'framer-motion';

const technologies = [
  'Python',
  'React',
  'FastAPI',
  'PostgreSQL',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Prisma ORM',
  'RAG Systems',
  'Vector Search',
  'Groq API',
];

export default function MarqueeTicker() {
  const shouldReduceMotion = useReducedMotion();

  // Accessible, static layout for users who prefer reduced motion
  if (shouldReduceMotion) {
    return (
      <section
        aria-label="Technology Stack"
        className="w-full border-y border-paper-border bg-paper-muted py-4 px-4 sm:px-6"
      >
        <div className="section-container">
          <ul
            role="list"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-center"
          >
            {technologies.map((tech, i) => (
              <li
                key={tech}
                className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink"
              >
                <span>{tech}</span>
                {i < technologies.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${
                      i % 2 === 0 ? 'bg-accent' : 'bg-cobalt'
                    }`}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Technology Stack"
      className="relative w-full overflow-hidden border-y border-paper-border bg-paper-muted py-3.5 sm:py-4 select-none"
    >
      {/* Edge gradient masks for subtle entry and exit transitions */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 z-10 bg-gradient-to-r from-paper-muted to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 z-10 bg-gradient-to-l from-paper-muted to-transparent"
        aria-hidden="true"
      />

      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused]"
        style={{ animationDuration: '32s' }}
      >
        {/* Primary Semantic Track */}
        <ul
          role="list"
          className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8"
        >
          {technologies.map((tech, i) => (
            <li key={`track1-${tech}`} className="flex items-center gap-6 sm:gap-8">
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink">
                {tech}
              </span>
              <span
                aria-hidden="true"
                className={`inline-block h-1.5 w-1.5 rounded-full ${
                  i % 2 === 0 ? 'bg-accent' : 'bg-cobalt'
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Duplicated Track for Seamless Infinite Scroll */}
        <ul
          role="list"
          aria-hidden="true"
          className="flex items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8"
        >
          {technologies.map((tech, i) => (
            <li key={`track2-${tech}`} className="flex items-center gap-6 sm:gap-8">
              <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink">
                {tech}
              </span>
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full ${
                  i % 2 === 0 ? 'bg-accent' : 'bg-cobalt'
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
