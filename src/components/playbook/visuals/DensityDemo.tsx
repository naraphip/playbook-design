export function DensityDemo() {
  const item = { label: "Dashboard Overview", sub: "Last updated 2h ago", badge: "Active" };

  const densities = [
    { name: "Comfortable", py: "py-4", textSize: "text-sm", gap: "gap-3", note: "Consumer apps, editorial" },
    { name: "Compact", py: "py-2.5", textSize: "text-sm", gap: "gap-2", note: "SaaS tools, dashboards" },
    { name: "Dense", py: "py-1.5", textSize: "text-xs", gap: "gap-1.5", note: "Data-heavy admin, dev tools" },
  ];

  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">UI Density Scale</p>

      <div className="space-y-2">
        {densities.map((d) => (
          <div key={d.name} className="rounded-xl border border-border bg-bg-surface overflow-hidden">
            <div className={`flex items-center justify-between px-4 ${d.py} border-b border-border bg-bg-soft`}>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{d.name}</span>
              <span className="text-[10px] text-text-muted">{d.note}</span>
            </div>
            {[1, 2].map((row) => (
              <div key={row} className={`flex items-center justify-between px-4 ${d.py} border-b border-border last:border-0`}>
                <div className={`flex items-center ${d.gap}`}>
                  <div className="w-6 h-6 rounded-lg bg-primary-soft flex items-center justify-center shrink-0">
                    <span className="text-primary text-[10px]">⊞</span>
                  </div>
                  <div>
                    <p className={`${d.textSize} font-medium text-text-primary`}>{item.label} {row}</p>
                    <p className="text-[10px] text-text-muted">{item.sub}</p>
                  </div>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-success-soft text-success">{item.badge}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-primary-soft px-3 py-2">
        <span className="text-primary text-sm">→</span>
        <p className="text-xs text-primary">Match density to user&apos;s workflow: consumer = comfortable, pro tools = compact/dense</p>
      </div>
    </div>
  );
}
