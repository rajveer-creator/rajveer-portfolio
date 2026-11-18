import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function HeroCanvas() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) {
      return;
    }

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 30);
      mouseY.set((e.clientY / innerHeight - 0.5) * 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative h-full w-full flex items-center justify-center select-none pointer-events-none py-4 sm:py-6 overflow-hidden">
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="relative h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] lg:h-[390px] lg:w-[390px] xl:h-[450px] xl:w-[450px] max-w-[90vw] aspect-square"
      >
        {/* Outer ring — slow rotation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border border-dashed border-ink/15"
        >
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 sm:h-3.5 sm:w-3.5 -translate-x-1/2 rounded-full bg-accent" />
        </motion.div>

        {/* Inner ring — counter-rotation */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-8 sm:inset-12 md:inset-14 rounded-full border border-ink/10"
        >
          <span className="absolute top-1/2 -right-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 -translate-y-1/2 rounded-full bg-cobalt" />
        </motion.div>

        {/* Cross axis lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-ink/15 to-transparent" />
          <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
        </div>

        {/* Center monogram */}
        <div className="absolute inset-0 m-auto flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full bg-paper/90 backdrop-blur-md border border-ink/20">
          <div className="flex h-11 w-11 sm:h-13 sm:w-13 md:h-14 md:w-14 items-center justify-center rounded-lg border border-ink bg-ink text-accent font-mono text-xs font-bold">
            RG
          </div>
        </div>
      </motion.div>
    </div>
  );
}
