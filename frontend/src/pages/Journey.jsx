import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import education from '../data/education';
import certifications from '../data/certifications';
import Button from '../components/Button';

export default function Journey() {
  return (
    <div className="section-padding relative">
      <div className="section-container-wide">
        {/* Editorial Page Header: Intentional two-line break, preventing word split on 360px viewports */}
        <div className="mb-12 sm:mb-16 md:mb-20 border-b border-paper-border pb-8 sm:pb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-3">
            Academic Background
          </p>
          <h1 className="font-display font-extrabold tracking-tight text-ink uppercase text-[clamp(2.15rem,6.5vw,5.5rem)] leading-[0.95] sm:leading-[0.88] select-none">
            <span className="block whitespace-nowrap">Education</span>
            <span className="block whitespace-nowrap text-stroke text-stroke-hover">
              &amp; Learning.
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed">
            Formal university education, secondary school foundation, and self-directed technical coursework.
          </p>
        </div>

        {/* Formal Education Progression */}
        <section className="mb-16 sm:mb-24">
          <div className="mb-8 sm:mb-12 border-b border-paper-border pb-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink">
              Formal Education
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-8 sm:space-y-10 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-paper-border">
            {education.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Node */}
                <span
                  className={`absolute -left-[27px] sm:-left-[35px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper ${
                    item.isCurrent ? 'bg-accent ring-2 ring-accent/30' : 'bg-ink/40'
                  }`}
                />

                <div className="rounded-lg border border-paper-border bg-paper p-5 sm:p-7 transition-colors hover:border-ink/50">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[11px] text-ink-muted uppercase">
                        {item.tag}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-ink mt-0.5 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-ink-muted mt-1">
                        {item.institution}
                      </p>
                      <p className="font-mono text-xs text-ink-faint mt-0.5">
                        Board / University: {item.board}
                      </p>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <p className="font-mono text-xs text-ink-muted">
                        {item.year}
                      </p>
                      <p className="font-mono text-xs font-semibold text-ink mt-1">
                        {item.result}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 pt-4 border-t border-paper-border text-xs sm:text-sm text-ink-soft leading-relaxed">
                    <strong className="text-ink font-semibold">Coursework:</strong> {item.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Self-Directed Coursework & Certifications */}
        <section>
          <div className="mb-8 sm:mb-12 border-b border-paper-border pb-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink leading-tight">
              Independent Coursework &amp; Certifications
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-ink-muted">
              Structured technical courses completed independently alongside university studies.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="flex flex-col justify-between rounded-lg border border-paper-border bg-paper p-5 sm:p-6 transition-colors hover:border-ink/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                      {cert.category}
                    </span>
                    <span className="font-mono text-xs text-ink-faint">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-ink leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted mt-1">
                    Offered by {cert.issuer}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-paper-border flex items-center justify-between font-mono text-[11px] text-ink-muted">
                  <span>Completed Coursework</span>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Verification note */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border border-paper-border bg-paper-muted p-5 sm:p-6">
            <p className="text-xs sm:text-sm text-ink-muted">
              Enrollment documentation, coursework details, or university transcripts are available upon request.
            </p>
            <Button to="/contact" variant="ghost" className="shrink-0 w-full sm:w-auto justify-center">
              <span>Get in Touch</span>
              <ArrowUpRight size={13} />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
