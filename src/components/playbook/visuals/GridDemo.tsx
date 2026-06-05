export function GridDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      <p className="text-xs font-semibold text-text-muted">CSS Grid: auto-fill minmax(80px, 1fr)</p>
      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-primary-border bg-primary-soft p-2 text-center"
          >
            <span className="text-xs font-semibold text-primary">Item {i + 1}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-text-muted">Columns adapt automatically to available space</p>
    </div>
  );
}
