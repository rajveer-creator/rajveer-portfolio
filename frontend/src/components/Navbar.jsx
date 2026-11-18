import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper-border/80 bg-paper/90 backdrop-blur-md transition-all">
      {/* Main navigation container */}
      <div className="mx-auto flex max-w-wide items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-3.5">
        {/* Brand / Name Treatment */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-left select-none"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-ink text-accent font-mono text-xs font-bold transition-transform group-hover:scale-105">
            {personal.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-ink uppercase group-hover:text-ink transition-colors">
              {personal.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
              B.Tech CSE (AI)
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-1 lg:gap-2">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `group relative flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-ink text-paper'
                        : 'text-ink-muted hover:text-ink hover:bg-paper-muted'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action: GitHub Profile & Contact Button */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-ink/20 bg-paper-card px-3.5 py-1.5 font-mono text-xs font-medium text-ink-muted transition-colors hover:border-ink hover:text-ink hover:bg-paper-muted"
          >
            <Github size={14} />
            <span className="hidden lg:inline text-[11px] uppercase tracking-wider font-semibold">GitHub</span>
          </a>
          <Link
            to="/contact"
            className="group inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-ink/20 bg-paper-card px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition-all hover:border-ink hover:bg-accent hover:text-ink"
          >
            <span>Contact</span>
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu toggle: Touch-friendly min 44x44px target */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-paper-muted md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-paper-border bg-paper px-4 sm:px-6 py-5 md:hidden"
          >
            <ul className="flex flex-col space-y-1.5">
              {navItems.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex min-h-[46px] items-center justify-between rounded-lg px-4 py-2.5 text-sm font-display uppercase tracking-wider transition-colors ${
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

            <div className="mt-5 border-t border-paper-border pt-4 space-y-2">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full border border-paper-border bg-paper-card px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink hover:bg-paper-muted transition-colors"
              >
                <Github size={15} />
                <span>GitHub Profile</span>
                <ArrowUpRight size={14} />
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-ink"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
