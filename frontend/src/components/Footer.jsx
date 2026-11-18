import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, ArrowUpRight } from 'lucide-react';
import personal from '../data/personal';

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/journey', label: 'Journey' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-ink bg-ink text-paper overflow-hidden select-none">
      {/* Background technical coordinate grid */}
      <div className="absolute inset-0 bg-grid-tech-dark pointer-events-none opacity-20" />

      {/* Editorial Headline */}
      <div className="border-b border-white/10 py-12 sm:py-16 md:py-20">
        <div className="section-container-wide relative z-10">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter leading-[0.95] break-words">
            Interested in working together <br />
            or <span className="text-stroke-lime text-stroke-hover">starting</span> a conversation?
          </h2>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:bg-accent-hover transition-colors"
            >
              <span>Get in touch</span>
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:border-white hover:bg-white/5 transition-colors"
            >
              <Mail size={14} />
              <span>{personal.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation & Details Grid */}
      <div className="section-container-wide py-12 sm:py-16 relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-accent text-ink font-mono text-xs font-bold">
                {personal.initials}
              </div>
              <span className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-paper">
                {personal.name}
              </span>
            </div>
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-paper-muted">
              Second-year B.Tech CSE (AI) undergraduate at Mandsaur University. Exploring machine learning, web interfaces, and modern developer tooling.
            </p>
            <p className="font-mono text-[11px] text-white/50">
              {personal.location}
            </p>
          </div>

          {/* Directory Links (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="mb-3 sm:mb-4 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent font-bold">
              Navigation
            </h3>
            <ul className="space-y-1.5">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group inline-flex min-h-[36px] items-center gap-2 text-xs sm:text-sm text-paper-muted hover:text-accent transition-colors py-1"
                  >
                    <span className="font-display uppercase tracking-wider font-semibold">
                      {label}
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="mb-3 sm:mb-4 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-accent font-bold">
              Connect
            </h3>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[36px] items-center gap-2 text-paper-muted hover:text-accent transition-colors py-1"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[36px] items-center gap-2 text-paper-muted hover:text-accent transition-colors py-1"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex min-h-[36px] items-center gap-2 text-paper-muted hover:text-accent transition-colors py-1"
                >
                  <Mail size={14} />
                  <span>Email</span>
                  <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Touch-friendly return to top */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 sm:pt-8 font-mono text-[11px] sm:text-xs text-white/50 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="group flex min-h-[42px] items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-paper hover:border-accent hover:text-accent transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp
              size={13}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
