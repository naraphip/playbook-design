export function ColorContrastDemo() {
  const pairs = [
    { bg: "bg-primary", text: "text-white", label: "#5B4BFF + white", ratio: "8.3:1", pass: true, level: "AAA" },
    { bg: "bg-bg-surface", text: "text-text-primary", label: "White + #1F2933", ratio: "14.9:1", pass: true, level: "AAA" },
    { bg: "bg-bg-main", text: "text-text-secondary", label: "#F7F3EC + #5E6673", ratio: "4.6:1", pass: true, level: "AA" },
    { bg: "bg-bg-soft", text: "text-text-muted", label: "#FBF8F3 + #8B95A1", ratio: "2.8:1", pass: false, level: "FAIL" },
  ];

  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Color Contrast</p>
        <span className="text-[10px] text-text-muted">WCAG 2.1 · AA = 4.5:1</span>
      </div>

      <div className="space-y-2">
        {pairs.map((p) => (
          <div key={p.label} className={`flex items-center justify-between rounded-xl px-3 py-2.5 ${p.bg}`}>
            <div>
              <p className={`text-sm font-semibold ${p.text}`}>Sample Text</p>
              <p className={`text-[10px] ${p.text} opacity-80`}>{p.label}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] ${p.text} opacity-80`}>{p.ratio}</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                p.pass
                  ? "bg-success-soft text-success"
                  : "bg-danger-soft text-danger"
              }`}>
                {p.level}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-3 space-y-1">
        <p className="text-[10px] font-bold text-text-muted uppercase tracking-wide">WCAG Thresholds</p>
        <div className="flex gap-4 text-[10px] text-text-secondary">
          <span><span className="font-bold text-text-primary">AA:</span> 4.5:1 normal · 3:1 large text</span>
          <span><span className="font-bold text-text-primary">AAA:</span> 7:1 normal</span>
        </div>
      </div>
    </div>
  );
}
