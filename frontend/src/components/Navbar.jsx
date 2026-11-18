import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import personal from '../data/personal';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/journey', label: 'Journey' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Close mobile navigation drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-3 sm:top-4 lg:top-5 inset-x-0 z-50 mx-auto w-full max-w-wide px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="flex flex-col items-center">
        {/* --- DESKTOP DOCK (1024px and above) --- */}
        <div className="hidden lg:flex pointer-events-auto items-center gap-1.5 rounded-full border border-paper-border/90 bg-paper/90 px-3.5 py-1.5 backdrop-blur-md shadow-[0_8px_30px_rgb(10,11,14,0.06)] transition-all">
          {/* Brand Mark */}
          <Link
            to="/"
            className="group flex items-center pr-2.5 border-r border-paper-border/80 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-full"
            aria-label={`${personal.name} home`}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-accent font-mono text-[11px] font-bold transition-transform group-hover:scale-105">
              {personal.initials}
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1">
              {navItems.map(({ to, label }) => (
                <li key={to} className="relative">
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `group relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                        isActive
                          ? 'text-paper'
                          : 'text-ink-muted hover:text-ink hover:bg-paper-muted'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* Active Route Pill Indicator */}
                        {isActive && (
                          <motion.span
                            layoutId="activeNavPill"
                            transition={
                              shouldReduceMotion
                                ? { duration: 0 }
                                : { type: 'spring', stiffness: 380, damping: 30 }
                            }
                            className="absolute inset-0 rounded-full bg-ink -z-10"
                          />
                        )}
                        <span className="relative z-10">{label}</span>
                        {isActive && (
                          <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-accent" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Links */}
          <div className="flex items-center gap-2 pl-3 border-l border-paper-border/80">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted hover:text-ink hover:bg-paper-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Github size={15} />
            </a>

            <Link
              to="/contact"
              className="group inline-flex min-h-[32px] items-center gap-1.5 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span>Contact</span>
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* --- MOBILE & TABLET COMPACT DOCK (< 1024px) --- */}
        <div className="flex lg:hidden pointer-events-auto items-center justify-between rounded-full border border-paper-border/90 bg-paper/90 px-4 py-2 backdrop-blur-md shadow-[0_4px_20px_rgb(10,11,14,0.05)] w-full max-w-xl transition-all">
          {/* Brand Mark */}
          <Link
            to="/"
            className="group flex items-center select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-full"
            aria-label={`${personal.name} home`}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-accent font-mono text-xs font-bold transition-transform group-hover:scale-105">
              {personal.initials}
            </div>
          </Link>

          {/* Mobile Right Controls: GitHub Icon + Touch-friendly Hamburger */}
          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-ink-muted hover:text-ink hover:bg-paper-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Github size={16} />
            </a>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-paper-muted transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* --- MOBILE FLOATING DROPDOWN PANEL --- */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav-panel"
              role="region"
              aria-label="Mobile navigation menu"
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8, scale: 0.98 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, scale: 1 }
              }
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8, scale: 0.98 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
              }
              className="pointer-events-auto mt-2 w-full max-w-xl rounded-2xl border border-paper-border/90 bg-paper/95 p-4 backdrop-blur-xl shadow-[0_12px_40px_rgb(10,11,14,0.12)] lg:hidden"
            >
              <ul className="flex flex-col space-y-1">
                {navItems.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex min-h-[46px] items-center justify-between rounded-xl px-4 py-2.5 text-sm font-display uppercase tracking-wider transition-colors ${
                          isActive
                            ? 'bg-ink text-accent font-bold'
                            : 'text-ink-soft hover:bg-paper-muted hover:text-ink'
                        }`
                      }
                    >
                      <span>{label}</span>
                      <ArrowUpRight size={14} className="opacity-40" />
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-paper-border/80 pt-3 space-y-2">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-paper-border bg-paper-card px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink hover:bg-paper-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Github size={15} />
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={14} />
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
