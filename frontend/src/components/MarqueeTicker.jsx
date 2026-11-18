export default function MarqueeTicker() {
  const items = [
    'Digital Chaos',
    'Controlled Precision',
    'Algorithmic Rigor',
    'Intelligent Systems',
    'Creative Engineering',
    'Full-Stack Architecture',
    'Curiosity Driven',
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-ink bg-ink py-4 text-paper select-none">
      <div className="flex w-max animate-marquee">
        {/* First track */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((text, i) => (
            <div key={`track1-${i}`} className="flex items-center gap-8">
              <span className="font-display text-lg sm:text-2xl font-bold uppercase tracking-wider">
                {text}
              </span>
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
            </div>
          ))}
        </div>

        {/* Second duplicate track for seamless infinite scroll */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((text, i) => (
            <div key={`track2-${i}`} className="flex items-center gap-8">
              <span className="font-display text-lg sm:text-2xl font-bold uppercase tracking-wider">
                {text}
              </span>
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-cobalt" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
