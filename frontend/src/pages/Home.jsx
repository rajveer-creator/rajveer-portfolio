import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Hero from '../components/Hero';
import MarqueeTicker from '../components/MarqueeTicker';
import IntroManifesto from '../components/IntroManifesto';
import FeaturedProjectsPreview from '../components/FeaturedProjectsPreview';
import Button from '../components/Button';
import personal from '../data/personal';

export default function Home() {
  return (
    <div className="relative">
      {/* 1. Hero Experience */}
      <Hero />

      {/* 2. Technology Stack Marquee */}
      <MarqueeTicker />

      {/* 3. Intro Statement & Focus Areas */}
      <IntroManifesto />

      {/* 4. Featured Projects Showcase */}
      <FeaturedProjectsPreview />

      {/* 5. Closing Call to Action */}
      <section className="section-padding relative border-b border-paper-border bg-paper text-ink">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-3">
              Get in Touch
            </p>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-ink leading-tight">
              Let&rsquo;s talk about software, <br />
              <span className="text-stroke text-stroke-hover">internships</span>, or projects.
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-muted max-w-xl mx-auto">
              I am actively seeking internship opportunities and technical collaborations where I can contribute code, learn from experienced engineers, and build real systems.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Button to="/contact" variant="lime" className="w-full sm:w-auto justify-center">
                <span>Send a Message</span>
                <ArrowUpRight size={15} />
              </Button>
              <Button to="/journey" variant="ghost" className="w-full sm:w-auto justify-center">
                <span>Academic Record</span>
              </Button>
            </div>

            <p className="mt-10 font-mono text-xs text-ink-faint">
              {personal.name} · {personal.education.institution} · {personal.education.status}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
