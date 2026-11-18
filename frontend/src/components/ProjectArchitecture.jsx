/**
 * ProjectArchitecture
 *
 * Lightweight, accessible, configuration-driven architecture visualizer.
 *
 * Supported project IDs:
 * - 'captionai'
 * - 'gym-os'
 * - 'mu-chatbot'
 *
 * Responsive Layout:
 * - Below 768px: vertical stepper (1 column)
 * - 768px-1023px: balanced 2x2 grid
 * - 1024px and above: horizontal four-stage pipeline (4 columns)
 */

const PIPELINES = {
  captionai: {
    title: 'CaptionAI',
    accentColor: 'lime',
    stages: [
      {
        step: '01',
        title: 'Topic / Platform / Tone / Language',
        detail: 'Parameterized prompt inputs',
      },
      {
        step: '02',
        title: 'FastAPI Backend',
        detail: 'Assembly & validation service',
      },
      {
        step: '03',
        title: 'Groq API',
        detail: 'Inference & completion',
      },
      {
        step: '04',
        title: 'Generated Caption',
        detail: 'Client output & copy action',
      },
    ],
  },
  'gym-os': {
    title: 'GYM-OS',
    accentColor: 'cobalt',
    stages: [
      {
        step: '01',
        title: 'Client Interface',
        detail: 'Administrative forms & dashboard',
      },
      {
        step: '02',
        title: 'Express API',
        detail: 'Request routing & controllers',
      },
      {
        step: '03',
        title: 'Prisma ORM',
        detail: 'Relational schema modeling',
      },
      {
        step: '04',
        title: 'PostgreSQL Database',
        detail: 'Members, plans & attendance data',
      },
    ],
  },
  'mu-chatbot': {
    title: 'Mandsaur University RAG Chatbot',
    accentColor: 'lime',
    stages: [
      {
        step: '01',
        title: 'FAQ Documents',
        detail: 'Institutional notices & handbooks',
      },
      {
        step: '02',
        title: 'Chunking / Embeddings',
        detail: 'Document parsing & vector indexing',
      },
      {
        step: '03',
        title: 'Context Retrieval',
        detail: 'Passage selection by query',
      },
      {
        step: '04',
        title: 'Groq Response Generation',
        detail: 'Source-grounded synthesis',
      },
    ],
  },
};

export default function ProjectArchitecture({ projectId }) {
  const pipeline = PIPELINES[projectId];

  // Safely handle missing or invalid project IDs without throwing
  if (!pipeline) return null;

  const isLime = pipeline.accentColor === 'lime';
  const accentDotClass = isLime ? 'bg-accent' : 'bg-cobalt';

  return (
    <div
      role="region"
      aria-label={`${pipeline.title} Architecture Pipeline`}
      className="w-full rounded-lg border border-paper-border/80 bg-paper-muted/50 p-3.5 sm:p-5"
    >
      {/* Visualizer Header */}
      <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-paper-border/70">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={`h-2 w-2 rounded-full ${accentDotClass}`}
          />
          <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Architecture Pipeline
          </span>
        </div>
        <span className="font-mono text-[10px] text-ink-faint">
          4 Verified Stages
        </span>
      </div>

      {/* Semantic Ordered List Pipeline */}
      <ol
        role="list"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5"
      >
        {pipeline.stages.map((stage, index) => {
          const isLast = index === pipeline.stages.length - 1;

          return (
            <li
              key={stage.step}
              className="relative rounded-md border border-paper-border bg-paper p-3.5 sm:p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink-muted">
                    Stage {stage.step}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${accentDotClass}`}
                  />
                </div>

                <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight text-ink leading-snug">
                  {stage.title}
                </h4>

                {stage.detail && (
                  <p className="mt-1 font-mono text-[10px] sm:text-[11px] text-ink-muted leading-relaxed">
                    {stage.detail}
                  </p>
                )}
              </div>

              {/* Directional Flow Connectors (hidden from screen readers) */}
              {!isLast && (
                <div
                  aria-hidden="true"
                  className="mt-3 pt-2 border-t border-paper-border/60 flex items-center justify-between text-ink-muted/50 font-mono text-[10px]"
                >
                  <span className="text-[9px] uppercase tracking-wider">Next</span>

                  {/* Desktop (>= 1024px): horizontal arrow */}
                  <svg
                    className="h-3 w-3 text-ink-muted/70 hidden lg:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>

                  {/* Tablet (768px-1023px): 2x2 grid directional connectors */}
                  <svg
                    className="h-3 w-3 text-ink-muted/70 hidden md:block lg:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {index === 0 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    )}
                    {index === 1 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                      />
                    )}
                    {index === 2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    )}
                  </svg>

                  {/* Mobile (< 768px): downward arrow for vertical stepper */}
                  <svg
                    className="h-3 w-3 text-ink-muted/70 block md:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                  </svg>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
