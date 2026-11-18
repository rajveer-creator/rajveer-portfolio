import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import personal from '../data/personal';
import skills from '../data/skills';
import profileImg from '../assets/profile.jpeg';
import Button from '../components/Button';

export default function About() {
  const areasOfStudy = [
    {
      title: 'Machine Learning & AI',
      desc: 'Studying neural network fundamentals, computer vision feature extractors, and retrieval-augmented generation (RAG) pipelines in Python.',
    },
    {
      title: 'Frontend Engineering',
      desc: 'Building responsive user interfaces with React, modern CSS/Tailwind, accessible interaction patterns, and clean component architecture.',
    },
    {
      title: 'Data Structures & Algorithms',
      desc: 'Regular problem-solving in C++ and Python covering arrays, trees, recursion, sorting algorithms, and computational complexity.',
    },
    {
      title: 'Systems & Developer Tooling',
      desc: 'Working comfortably in Linux environments, version control with Git, and configuring modern Vite build tooling.',
    },
  ];

  return (
    <div className="section-padding relative">
      <div className="section-container-wide">
        {/* Editorial Page Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 border-b border-paper-border pb-8 sm:pb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-3">
            About
          </p>
          <h1 className="font-display font-extrabold tracking-tight text-ink uppercase text-[clamp(2.15rem,5.5vw,4.75rem)] leading-[0.95] sm:leading-[0.9] select-none">
            <span className="block whitespace-nowrap">Student.</span>
            <span className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline gap-y-1 sm:gap-y-0 sm:gap-x-3 md:gap-x-4 lg:gap-x-5">
              <span className="whitespace-nowrap text-stroke text-stroke-hover">
                Builder.
              </span>
              <span className="whitespace-nowrap">
                Learner.
              </span>
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed">
            Second-year undergraduate studying Computer Science &amp; Engineering with a focus on Artificial Intelligence at Mandsaur University.
          </p>
        </div>

        {/* Profile + Personal Essay Grid */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 mb-16 sm:mb-24 items-start">
          {/* Left Column: Portrait & Key Details (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            {/* Portrait Container */}
            <div className="overflow-hidden rounded-xl border border-paper-border bg-paper-card shadow-xs">
              <div className="aspect-square w-full overflow-hidden bg-paper-muted">
                <img
                  src={profileImg}
                  alt={personal.name}
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-5 border-t border-paper-border">
                <h2 className="font-display text-lg font-bold uppercase tracking-tight text-ink">
                  {personal.name}
                </h2>
                <p className="text-xs font-mono text-ink-muted mt-0.5">
                  {personal.education.degree}
                </p>
                <p className="text-xs text-ink-faint mt-0.5">
                  {personal.education.institution}
                </p>

                <div className="mt-4 pt-4 border-t border-paper-border flex flex-col gap-2 font-mono text-xs text-ink-muted">
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-ink shrink-0" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-ink">Status:</span>
                    <span>2nd Year (2025–2029)</span>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <Button to="/contact" variant="lime" className="w-full justify-center">
                    <span>Contact Me</span>
                    <ArrowUpRight size={13} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Story & Philosophy (8 cols) */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* Background & Journey */}
            <section className="space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink">
                How I Got Started
              </h3>
              <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-ink-soft">
                <p>
                  I got interested in programming by experimenting with basic scripts and realizing how quickly code can solve real friction. Seeing an idea turn into a responsive website or a working script sparked a genuine drive to understand the layers beneath: how compilers execute instructions, how data structures optimize lookups, and how machines learn from patterns.
                </p>
                <p>
                  Right now, I am pursuing my Bachelor of Technology in Computer Science &amp; Engineering with an Artificial Intelligence specialization at Mandsaur University. My coursework provides the formal theoretical base &mdash; discrete math, algorithm analysis, and database architecture &mdash; while my personal projects let me test and apply these concepts in practical software.
                </p>
              </div>
            </section>

            {/* Development Philosophy */}
            <section className="space-y-4 border-t border-paper-border pt-8 sm:pt-10">
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink">
                How I Approach Software
              </h3>
              <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-ink-soft">
                <p>
                  I value clarity over complexity. As a student developer, it is tempting to jump straight to heavy frameworks or copy-paste complicated configurations, but I learn best by starting simple, understanding every dependency, and building features incrementally.
                </p>
                <p>
                  Whether I am working on an image captioning prototype in Python or styling a responsive dashboard in React, my goal is always the same: code that is legible, interfaces that are intuitive on any screen width, and systems that solve actual problems without pretending to be something they are not.
                </p>
              </div>
            </section>

            {/* Current Focus Areas */}
            <section className="space-y-6 border-t border-paper-border pt-8 sm:pt-10">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-ink">
                  Current Areas of Focus
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-ink-muted">
                  What I am actively studying, practicing, and building projects around this semester.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {areasOfStudy.map((area, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-paper-border bg-paper p-4 sm:p-5"
                  >
                    <h4 className="font-display text-sm font-bold uppercase tracking-tight text-ink">
                      {area.title}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Technical Skills Inventory */}
        <section className="border-t border-paper-border pt-12 sm:pt-16">
          <div className="mb-8 sm:mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2">
              Toolkit
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-ink">
              Technologies &amp; Fundamentals
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-ink-muted max-w-xl">
              Languages, libraries, and tools I use in coursework and independent projects.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.category}
                className="border-t-2 border-ink pt-3 sm:pt-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                    {group.category}
                  </h3>
                  <span className="font-mono text-[10px] text-ink-faint">
                    {group.items.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-paper-border bg-paper-card px-2.5 py-1 font-mono text-xs text-ink-soft"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
