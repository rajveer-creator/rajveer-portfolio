import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IntroManifesto() {
  return (
    <section className="section-padding border-b border-paper-border bg-paper-muted">
      <div className="section-container-wide">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-12">
          {/* Editorial statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-ink leading-tight">
              Building things
              <br />
              to understand
              <br />
              <span className="text-stroke text-stroke-hover">how they work.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-ink-muted">
              I&rsquo;m drawn to the overlap between AI and web development
              &mdash; where models meet interfaces and data meets users. Right
              now that means building image captioning tools, RAG chatbots, and
              full-stack dashboards from scratch.
            </p>
            <Link
              to="/about"
              className="group mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:text-accent-dark transition-colors"
            >
              <span>More about me</span>
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          {/* Focus areas — border-left accents instead of cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            <div className="border-l-2 border-accent pl-5 sm:pl-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                AI &amp; Machine Learning
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Computer vision, RAG pipelines, vector search, and working with
                language models.
              </p>
            </div>
            <div className="border-l-2 border-cobalt pl-5 sm:pl-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                Web Development
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                React, responsive design, component architecture, and modern
                build tools.
              </p>
            </div>
            <div className="border-l-2 border-ink/20 pl-5 sm:pl-6">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                CS Fundamentals
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                Data structures, algorithms, OOP, and core computer science
                theory.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
