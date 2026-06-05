export function TokenDemo() {
  const tokens = [
    { name: "--color-text-primary", value: "#1F2933", swatch: "bg-[#1F2933]" },
    { name: "--color-primary", value: "#7C5CFF", swatch: "bg-[#7C5CFF]" },
    { name: "--color-accent", value: "#D97745", swatch: "bg-[#D97745]" },
    { name: "--color-bg-surface", value: "#FFFFFF", swatch: "bg-white border border-border" },
    { name: "--spacing-md", value: "16px", swatch: null },
    { name: "--radius-card", value: "20px", swatch: null },
  ];
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-2.5">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">Design Tokens</p>
      {tokens.map(({ name, value, swatch }) => (
        <div key={name} className="flex items-center gap-2.5">
          {swatch && <div className={`h-5 w-5 rounded-lg shadow-sm ${swatch}`} />}
          {!swatch && <div className="h-5 w-5 rounded-lg bg-bg-surface border border-border flex items-center justify-center"><span className="text-[8px] text-text-muted font-mono">T</span></div>}
          <code className="text-xs font-semibold text-primary flex-1">{name}</code>
          <span className="text-xs text-text-muted font-mono">{value}</span>
        </div>
      ))}
    </div>
  );
}
