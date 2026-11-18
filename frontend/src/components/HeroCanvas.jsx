import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

const PARTICLE_COUNT = 32;
const CONNECTION_DIST = 65;

export default function HeroCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const isVisibleRef = useRef(true);

  const shouldReduceMotion = useReducedMotion();
  const [isInteractiveDesktop, setIsInteractiveDesktop] = useState(false);

  // Smooth 3D tilt springs
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothTiltX = useSpring(tiltX, springConfig);
  const smoothTiltY = useSpring(tiltY, springConfig);

  // Mouse position in canvas coordinates for particle gravity
  const mousePosRef = useRef({ x: -1000, y: -1000, active: false });

  // Detect desktop with fine pointer
  useEffect(() => {
    const coarseMedia = window.matchMedia('(pointer: coarse)');
    const checkDesktop = () => {
      const isDesktop =
        !coarseMedia.matches &&
        window.innerWidth >= 768 &&
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

  // Handle cursor movement inside hero container for tilt & particles
  const handleMouseMove = useCallback(
    (e) => {
      if (!isInteractiveDesktop || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Restrained tilt angle: max +/- 6 degrees
      const rotY = ((e.clientX - centerX) / (rect.width / 2)) * 6;
      const rotX = -((e.clientY - centerY) / (rect.height / 2)) * 6;

      tiltX.set(rotX);
      tiltY.set(rotY);

      // Local canvas coordinates for particle repulsion
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    },
    [isInteractiveDesktop, tiltX, tiltY]
  );

  const handleMouseLeave = useCallback(() => {
    tiltX.set(0);
    tiltY.set(0);
    mousePosRef.current.active = false;
  }, [tiltX, tiltY]);

  // Canvas particle simulation with IntersectionObserver & HiDPI support
  useEffect(() => {
    if (!isInteractiveDesktop || shouldReduceMotion) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const setupDimensions = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Initialize particles within current dimensions
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, (_, idx) => {
        // Color palette: mostly faint ink with subtle lime & cobalt accents
        let color = 'rgba(10, 11, 14, 0.22)';
        if (idx % 8 === 0) color = 'rgba(206, 242, 58, 0.75)'; // Electric lime
        if (idx % 11 === 0) color = 'rgba(0, 71, 255, 0.45)';  // Cobalt

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.2 + 1,
          color,
        };
      });
    };

    setupDimensions();
    const resizeObserver = new ResizeObserver(setupDimensions);
    resizeObserver.observe(container);

    // IntersectionObserver to pause loop when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (!animFrameRef.current) loop();
        } else {
          if (animFrameRef.current) {
            cancelAnimationFrame(animFrameRef.current);
            animFrameRef.current = null;
          }
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Particle animation frame loop
    const loop = () => {
      if (!isVisibleRef.current) return;

      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mousePosRef.current;

      // Update & render nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle desktop mouse repulsion (no sudden snaps)
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 90 && dist > 0) {
            const force = ((90 - dist) / 90) * 0.4;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Draw node
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw faint interconnecting network lines
      ctx.lineWidth = 0.75;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.07;
            ctx.strokeStyle = `rgba(10, 11, 14, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      observer.disconnect();
    };
  }, [isInteractiveDesktop, shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
      className="relative flex items-center justify-center select-none py-4 sm:py-6 overflow-hidden w-full aspect-square max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[390px] xl:max-w-[450px]"
      style={{ perspective: 800 }}
    >
      {/* --- 1. INTERACTIVE 2D PARTICLE CANVAS (DESKTOP) --- */}
      {isInteractiveDesktop && !shouldReduceMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-0"
        />
      )}

      {/* --- 2. PRECISION GYROSCOPE (SVG WITH 3D PERSPECTIVE TILT) --- */}
      <motion.div
        style={{
          rotateX: isInteractiveDesktop ? smoothTiltX : 0,
          rotateY: isInteractiveDesktop ? smoothTiltY : 0,
        }}
        className="relative h-full w-full flex items-center justify-center pointer-events-none z-10"
      >
        <svg
          viewBox="0 0 380 380"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Coordinate Ring with Degree Marks */}
          <circle
            cx="190"
            cy="190"
            r="170"
            stroke="rgba(10, 11, 14, 0.12)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />

          {/* Coordinate Axis Crosshair Lines */}
          <line
            x1="190"
            y1="10"
            x2="190"
            y2="370"
            stroke="rgba(10, 11, 14, 0.06)"
            strokeWidth="1"
          />
          <line
            x1="10"
            y1="190"
            x2="370"
            y2="190"
            stroke="rgba(10, 11, 14, 0.06)"
            strokeWidth="1"
          />

          {/* Cardinal Coordinate Tick Labels */}
          <text
            x="190"
            y="26"
            textAnchor="middle"
            fill="rgba(10, 11, 14, 0.35)"
            className="font-mono text-[9px] font-bold"
          >
            000°
          </text>
          <text
            x="364"
            y="193"
            textAnchor="end"
            fill="rgba(10, 11, 14, 0.35)"
            className="font-mono text-[9px] font-bold"
          >
            090°
          </text>
          <text
            x="190"
            y="364"
            textAnchor="middle"
            fill="rgba(10, 11, 14, 0.35)"
            className="font-mono text-[9px] font-bold"
          >
            180°
          </text>
          <text
            x="16"
            y="193"
            textAnchor="start"
            fill="rgba(10, 11, 14, 0.35)"
            className="font-mono text-[9px] font-bold"
          >
            270°
          </text>

          {/* Orbital Track 1 (Slow Outer Orbit) */}
          <g className={isInteractiveDesktop && !shouldReduceMotion ? 'origin-center animate-spin-slow' : ''}>
            <circle
              cx="190"
              cy="190"
              r="135"
              stroke="rgba(10, 11, 14, 0.12)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            {/* Satellite Node: Electric Lime */}
            <circle cx="190" cy="55" r="4.5" fill="#CEF23A" />
            <circle
              cx="190"
              cy="55"
              r="8"
              stroke="rgba(206, 242, 58, 0.35)"
              strokeWidth="1"
            />
          </g>

          {/* Orbital Track 2 (Counter Orbit) */}
          <g
            className={
              isInteractiveDesktop && !shouldReduceMotion
                ? 'origin-center animate-[spin_28s_linear_infinite_reverse]'
                : ''
            }
          >
            <circle
              cx="190"
              cy="190"
              r="95"
              stroke="rgba(10, 11, 14, 0.1)"
              strokeWidth="1"
            />
            {/* Satellite Node: Cobalt Blue */}
            <circle cx="285" cy="190" r="3.5" fill="#0047FF" />
          </g>

          {/* Precision Center Hub */}
          <circle
            cx="190"
            cy="190"
            r="44"
            fill="#FAF8F5"
            stroke="rgba(10, 11, 14, 0.2)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Center RG Monogram Core Badge */}
        <div className="absolute inset-0 m-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-paper/90 backdrop-blur-xs border border-ink/20 shadow-xs pointer-events-none">
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg border border-ink bg-ink text-accent font-mono text-xs font-bold transition-transform">
            RG
          </div>
        </div>
      </motion.div>
    </div>
  );
}
