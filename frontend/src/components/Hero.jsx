import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';
import HeroCanvas from './HeroCanvas';
import personal from '../data/personal';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] border-b border-paper-border bg-paper overflow-hidden flex flex-col justify-center py-12 sm:py-16">
      {/* Subtle grid — single instance, hero only */}
      <div className="absolute inset-0 bg-grid-tech pointer-events-none opacity-20" />

      <div className="section-container-wide relative z-10 w-full">
        {/* Asymmetric Grid */}
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
          {/* Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col"
          >
            {/* Oversized Name — two intact lines with restored smooth white-to-black hover fill */}
            <motion.div variants={itemVariants} className="select-none group inline-block">
              <h1 className="font-display font-extrabold tracking-tight text-ink uppercase text-[clamp(2.35rem,6.2vw,6.5rem)] leading-[0.92] sm:leading-[0.88]">
                <span className="block whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2">
                  Rajveer
                </span>
                <span className="block whitespace-nowrap text-stroke text-stroke-hover">
                  Gurjar
                </span>
              </h1>
            </motion.div>

            {/* Editorial subtitle */}
            <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
              <p className="font-serif text-lg sm:text-2xl md:text-3xl text-ink font-normal leading-snug">
                Computer science student building at the
                intersection of{' '}
                <span className="italic underline decoration-accent decoration-2 underline-offset-4">
                  artificial intelligence
                </span>{' '}
                and the web.
              </p>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="mt-4 max-w-xl">
              <p className="text-sm sm:text-base leading-relaxed text-ink-muted">
                {personal.bio}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <Button
                to="/projects"
                variant="lime"
                className="w-full sm:w-auto justify-center"
              >
                <span>See My Work</span>
                <ArrowUpRight size={15} />
              </Button>
              <Button
                to="/contact"
                variant="ghost"
                className="w-full sm:w-auto justify-center"
              >
                <span>Get in Touch</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Orbital Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[260px] sm:min-h-[340px] md:min-h-[400px]">
            <HeroCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
