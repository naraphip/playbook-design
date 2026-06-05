export function AccessibilityDemo() {
  const items = [
    { label: "Contrast ratio ≥4.5:1", pass: true },
    { label: "Keyboard navigable", pass: true },
    { label: "Focus state visible", pass: true },
    { label: "aria-label on icon buttons", pass: true },
    { label: "Alt text on images", pass: true },
    { label: "Heading structure (h1→h2→h3)", pass: false },
  ];
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-2">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">Accessibility Checklist</p>
      {items.map(({ label, pass }) => (
        <div key={label} className="flex items-center gap-2.5">
          <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md ${pass ? "bg-success" : "border-2 border-danger/40 bg-danger-soft"}`}>
            {pass && <span className="text-white text-xs leading-none font-bold">✓</span>}
          </div>
          <span className={`text-xs font-medium flex-1 ${pass ? "text-text-secondary" : "text-danger"}`}>{label}</span>
          <span className={`text-xs font-bold ${pass ? "text-success" : "text-danger"}`}>
            {pass ? "Pass" : "Fail"}
          </span>
        </div>
      ))}
    </div>
  );
}
