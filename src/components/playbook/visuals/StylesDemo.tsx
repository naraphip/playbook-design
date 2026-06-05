export function StylesDemo() {
  const styles = [
    {
      name: "Cozy Professional",
      bg: "bg-[#F7F3EC]",
      cardBg: "bg-white",
      border: "border-[#E2D8CC]",
      radius: "rounded-2xl",
      headText: "text-[#1F2933]",
      subText: "text-[#5E6673]",
      btnBg: "bg-[#5B4BFF]",
      btnText: "text-white",
      btnRadius: "rounded-lg",
      note: "SaaS, B2B, workspace",
    },
    {
      name: "Minimal Clean",
      bg: "bg-white",
      cardBg: "bg-white",
      border: "border-slate-200",
      radius: "rounded-sm",
      headText: "text-slate-950",
      subText: "text-slate-500",
      btnBg: "bg-slate-950",
      btnText: "text-white",
      btnRadius: "rounded-sm",
      note: "Editorial, portfolio, agency",
    },
    {
      name: "Glassmorphism",
      bg: "bg-gradient-to-br from-violet-500 to-indigo-600",
      cardBg: "bg-white/15 backdrop-blur",
      border: "border-white/25",
      radius: "rounded-2xl",
      headText: "text-white",
      subText: "text-white/70",
      btnBg: "bg-white/20",
      btnText: "text-white",
      btnRadius: "rounded-xl",
      note: "Landing pages, AI tools",
    },
    {
      name: "Enterprise",
      bg: "bg-slate-50",
      cardBg: "bg-white",
      border: "border-slate-300",
      radius: "rounded",
      headText: "text-slate-900",
      subText: "text-slate-500",
      btnBg: "bg-slate-700",
      btnText: "text-white",
      btnRadius: "rounded",
      note: "Admin, B2B enterprise, ERP",
    },
  ];

  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Style References</p>
      <div className="grid grid-cols-2 gap-2">
        {styles.map((s) => (
          <div key={s.name} className={`${s.bg} ${s.radius} p-2.5`}>
            <div className={`${s.cardBg} ${s.radius} border ${s.border} p-3 shadow-sm space-y-2`}>
              <div>
                <p className={`text-[11px] font-bold ${s.headText} leading-snug`}>{s.name}</p>
                <p className={`text-[9px] ${s.subText} mt-0.5`}>{s.note}</p>
              </div>
              <p className={`text-[10px] ${s.subText} leading-relaxed`}>
                Design style shapes how users feel about your product before they read a word.
              </p>
              <button className={`text-[10px] px-3 py-1 font-semibold ${s.btnBg} ${s.btnText} ${s.btnRadius}`}>
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-accent-soft border border-accent-border px-3 py-2">
        <span className="text-accent text-sm">→</span>
        <p className="text-xs text-text-secondary">Style direction = background + radius + shadow + font weight + button shape</p>
      </div>
    </div>
  );
}
