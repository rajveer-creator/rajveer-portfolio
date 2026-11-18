import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion, useMotionTemplate } from 'framer-motion';
import { ArrowUpRight, Lock, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectArchitecture from './ProjectArchitecture';

/**
 * Editorial Project Card with desktop 3D perspective tilt.
 *
 * Props:
 * - project: Project data object conforming to projects.js schema
 * - children: Optional custom visual or schematic content slot (defaults to ProjectArchitecture)
 * - actionSlot: Optional custom action controls (e.g. accordion toggle)
 * - showArchitecture: Boolean to toggle architecture visualizer (defaults to true)
 */
export default function ProjectCard({ project, children, actionSlot, showArchitecture = true }) {
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isInteractiveDesktop, setIsInteractiveDesktop] = useState(false);

  // Smooth springs for 3D perspective tilt
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothTiltX = useSpring(tiltX, springConfig);
  const smoothTiltY = useSpring(tiltY, springConfig);

  // Local mouse coordinates for subtle radial spotlight sheen
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sheenOpacity = useMotionValue(0);

  // Detect desktop with fine pointer capability and width >= 1024px
  useEffect(() => {
    const coarseMedia = window.matchMedia('(pointer: coarse)');
    const checkDesktop = () => {
      const isDesktop =
        !coarseMedia.matches &&
        window.innerWidth >= 1024 &&
        !shouldReduceMotion;
      setIsInteractiveDesktop(isDesktop);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    if (coarseMedia.addEventListener) {
      coarseMedia.addEventListener('change', checkDesktop);
    } else {
      coarseMedia.addListener(checkDesktop);
    }

    return () => {
      window.removeEventListener('resize', checkDesktop);
      if (coarseMedia.removeEventListener) {
        coarseMedia.removeEventListener('change', checkDesktop);
      } else {
        coarseMedia.removeListener(checkDesktop);
      }
    };
  }, [shouldReduceMotion]);

  // Handle pointer motion for restrained 3D tilt and sheen
  const handleMouseMove = useCallback(
    (e) => {
      if (!isInteractiveDesktop || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Restrained tilt angle: max +/- 4 degrees
      const rotY = ((e.clientX - centerX) / (rect.width / 2)) * 4;
      const rotX = -((e.clientY - centerY) / (rect.height / 2)) * 4;

      tiltX.set(rotX);
      tiltY.set(rotY);

      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      sheenOpacity.set(1);
    },
    [isInteractiveDesktop, tiltX, tiltY, mouseX, mouseY, sheenOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    tiltX.set(0);
    tiltY.set(0);
    sheenOpacity.set(0);
  }, [tiltX, tiltY, sheenOpacity]);

  const sheenBackground = useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(206, 242, 58, 0.05), transparent 75%)`;

  if (!project) return null;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="w-full"
    >
      <motion.article
        style={{
          rotateX: isInteractiveDesktop ? smoothTiltX : 0,
          rotateY: isInteractiveDesktop ? smoothTiltY : 0,
          transformStyle: 'preserve-3d',
        }}
        className="group relative overflow-hidden rounded-xl border border-paper-border bg-paper-card p-6 sm:p-8 transition-colors hover:border-ink/60 shadow-xs hover:shadow-md"
      >
        {/* Subtle dynamic sheen spotlight on desktop */}
        {isInteractiveDesktop && !shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{
              background: sheenBackground,
              opacity: sheenOpacity,
            }}
          />
        )}

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-paper-border/70">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-ink select-none">
                {project.number}
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  {project.category}
                </p>
                {project.statusBadge && (
                  <span className="mt-1 inline-flex items-center rounded-sm border border-paper-border bg-paper px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold text-ink">
                    {project.statusBadge}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex min-h-[30px] items-center gap-1.5 rounded-full border border-paper-border bg-paper px-3 py-0.5 font-mono text-[10px] sm:text-[11px] text-ink-muted select-none">
                <Lock size={12} className="opacity-60" />
                <span>Private Repository</span>
              </span>
            </div>
          </div>

          {/* Main Narrative & Description */}
          <div className="pt-4 sm:pt-5">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-ink">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="mt-1 font-serif text-sm italic text-ink-soft">
                {project.tagline}
              </p>
            )}
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
              {project.description}
            </p>

            {/* Architecture Visualizer Slot */}
            {showArchitecture && (
              <div className="mt-5 sm:mt-6">
                {children || <ProjectArchitecture projectId={project.id} />}
              </div>
            )}

            {/* Technical Tags */}
            {Array.isArray(project.tags) && project.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-paper-border bg-paper px-2 py-0.5 font-mono text-[10px] sm:text-[11px] text-ink-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Action Controls */}
          <div className="mt-6 pt-4 border-t border-paper-border/60 flex flex-wrap items-center justify-between gap-3">
            {actionSlot ? (
              actionSlot
            ) : (
              <>
                <span className="font-mono text-xs text-ink-muted">
                  Status: <span className="font-semibold text-ink">{project.status}</span>
                </span>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-paper-border bg-paper px-3.5 py-1.5 font-mono text-xs font-semibold text-ink hover:border-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <Github size={13} />
                      <span>Code</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 font-mono text-xs font-bold text-ink hover:bg-accent-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                  {!project.live && (
                    <Link
                      to="/projects"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-paper-border bg-paper px-4 py-2 font-mono text-xs font-semibold text-ink hover:border-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      aria-label={`View case study for ${project.title}`}
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  );
}
