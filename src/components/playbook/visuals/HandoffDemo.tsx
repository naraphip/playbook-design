export function HandoffDemo() {
  const items = [
    { label: "Responsive rules (375/768/1280px)", done: true },
    { label: "All states: hover, focus, error, disabled", done: true },
    { label: "Spacing tokens — no magic numbers", done: true },
    { label: "Interaction notes & animation", done: false },
    { label: "Accessibility requirements", done: false },
  ];
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">Handoff Checklist</p>
      <div className="space-y-2.5">
        {items.map(({ label, done }) => (
          <div key={label} className="flex items-center gap-2.5">
            <div className={`h-4 w-4 rounded-md flex items-center justify-center shrink-0 ${done ? "bg-success" : "border-2 border-border bg-bg-surface"}`}>
              {done && <span className="text-white text-xs font-bold leading-none">✓</span>}
            </div>
            <span className={`text-xs font-medium ${done ? "text-text-secondary" : "text-text-muted"}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
