export function ButtonVariantsDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-4">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Button System</p>

      {/* Variants */}
      <div>
        <p className="text-[10px] text-text-muted mb-2 uppercase tracking-wide">Variants</p>
        <div className="flex flex-wrap gap-2">
          <button className="px-3.5 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold shadow-sm">Primary</button>
          <button className="px-3.5 py-1.5 bg-bg-surface text-text-primary border border-border rounded-lg text-xs font-medium">Secondary</button>
          <button className="px-3.5 py-1.5 bg-danger text-white rounded-lg text-xs font-semibold">Destructive</button>
          <button className="px-3.5 py-1.5 text-primary rounded-lg text-xs font-medium hover:bg-primary-soft">Ghost</button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="text-[10px] text-text-muted mb-2 uppercase tracking-wide">Sizes</p>
        <div className="flex items-center flex-wrap gap-2">
          <button className="px-2.5 py-1 bg-primary text-white rounded-md text-[11px] font-semibold">Small</button>
          <button className="px-3.5 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold">Medium</button>
          <button className="px-5 py-2 bg-primary text-white rounded-xl text-sm font-semibold">Large</button>
        </div>
      </div>

      {/* States */}
      <div>
        <p className="text-[10px] text-text-muted mb-2 uppercase tracking-wide">States</p>
        <div className="flex flex-wrap gap-2">
          <button className="px-3.5 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold">Default</button>
          <button className="px-3.5 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold ring-2 ring-primary ring-offset-2 ring-offset-bg-soft">Focused</button>
          <button className="px-3.5 py-1.5 bg-primary/40 text-white rounded-lg text-xs font-semibold cursor-not-allowed" disabled>Disabled</button>
          <button className="px-3.5 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold min-w-[80px]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Loading
            </span>
          </button>
        </div>
      </div>

      {/* Touch target note */}
      <div className="flex items-center gap-2 rounded-lg bg-primary-soft px-3 py-2">
        <span className="text-primary text-sm">→</span>
        <p className="text-xs text-primary">Min touch target: 44×44px (WCAG 2.5.5)</p>
      </div>
    </div>
  );
}
