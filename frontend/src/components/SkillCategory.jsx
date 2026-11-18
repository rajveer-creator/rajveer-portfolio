/**
 * Responsive-first category block for displaying technical skills.
 */
export default function SkillCategory({ category, items }) {
  return (
    <div className="rounded-xl border border-paper-border bg-paper-card p-4 sm:p-6 shadow-xs">
      <div className="mb-3 sm:mb-4 flex items-center justify-between border-b border-paper-border pb-2.5 sm:pb-3">
        <h3 className="font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-ink-muted">
          {category}
        </h3>
        <span className="font-mono text-[10px] text-ink-faint">[{items.length} items]</span>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-paper-border bg-paper px-2.5 py-1 font-mono text-[10px] sm:text-xs text-ink-soft transition-colors hover:border-ink/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
