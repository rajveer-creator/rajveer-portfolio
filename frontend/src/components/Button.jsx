import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Experimental Magnetic Button component with tactile spring response.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'lime' | 'cobalt' | 'ghost'
  className = '',
  ...props
}) {
  const base =
    'relative group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants = {
    primary:
      'bg-ink text-paper hover:bg-ink-soft border border-ink shadow-xs',
    secondary:
      'bg-accent text-ink hover:bg-accent-hover border border-accent shadow-xs',
    lime:
      'bg-accent text-ink hover:bg-accent-hover border border-accent font-bold shadow-xs',
    cobalt:
      'bg-cobalt text-white hover:bg-cobalt-hover border border-cobalt shadow-xs',
    ghost:
      'border border-paper-border bg-paper/60 backdrop-blur-xs text-ink hover:border-ink hover:bg-paper-card',
    outlineDark:
      'border border-white/30 bg-transparent text-paper hover:border-white hover:bg-white/10 shadow-xs',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
