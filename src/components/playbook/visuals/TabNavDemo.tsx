export function TabNavDemo() {
  const tabs = ["Overview", "Analytics", "Settings", "Team"];
  const activeTab = "Analytics";

  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Tab Navigation</p>

      {/* Tab bar */}
      <div className="rounded-xl bg-bg-surface border border-border overflow-hidden">
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`flex-1 text-center py-2.5 text-xs font-medium transition-colors
                ${tab === activeTab
                  ? "text-primary border-b-2 border-primary -mb-px bg-primary-soft/40"
                  : "text-text-secondary hover:text-text-primary"
                }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-4">
          <p className="text-xs font-semibold text-text-primary mb-2">{activeTab}</p>
          <div className="space-y-1.5">
            {[["Total Views", "48,291"], ["Unique Users", "12,043"], ["Avg. Session", "3m 42s"]].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">{k}</span>
                <span className="text-xs font-semibold text-text-primary">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segmented variant */}
      <div>
        <p className="text-[10px] text-text-muted mb-1.5 uppercase tracking-wide">Segmented / Pill Style</p>
        <div className="inline-flex rounded-xl bg-bg-hover p-1 gap-0.5">
          {["Day", "Week", "Month"].map((t, i) => (
            <div
              key={t}
              className={`px-3 py-1 text-xs font-medium rounded-lg ${
                i === 1 ? "bg-bg-surface text-text-primary shadow-sm" : "text-text-secondary"
              }`}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
