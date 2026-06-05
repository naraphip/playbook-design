export function ResponsiveDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Responsive Breakpoints</p>
      {[
        { label: "375px", cols: 1, active: true },
        { label: "768px", cols: 2, active: false },
        { label: "1280px", cols: 3, active: false },
      ].map(({ label, cols, active }) => (
        <div key={label} className={`rounded-xl border p-3 ${active ? "border-primary bg-primary-soft" : "border-border bg-bg-surface"}`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-mono font-bold ${active ? "text-primary" : "text-text-secondary"}`}>{label}</span>
            <span className="text-xs text-text-muted">{cols} col{cols > 1 ? "s" : ""}</span>
          </div>
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {Array.from({ length: cols }).map((_, i) => (
              <div key={i} className={`h-4 rounded-lg ${active ? "bg-primary/20" : "bg-border"}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
