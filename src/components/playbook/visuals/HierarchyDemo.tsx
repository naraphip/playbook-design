export function HierarchyDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Visual Hierarchy</p>

      <div className="grid grid-cols-2 gap-3">
        {/* Without hierarchy */}
        <div className="rounded-xl border border-danger/30 bg-danger-soft p-3 space-y-2">
          <p className="text-[10px] font-bold text-danger uppercase tracking-wide">✗ No Hierarchy</p>
          <div className="space-y-1.5">
            <div className="h-3 bg-text-secondary/50 rounded w-3/4" />
            <div className="h-3 bg-text-secondary/50 rounded w-full" />
            <div className="h-3 bg-text-secondary/50 rounded w-5/6" />
            <div className="h-3 bg-text-secondary/50 rounded w-4/5" />
            <div className="h-8 bg-text-secondary/40 rounded w-full mt-2" />
          </div>
          <p className="text-[10px] text-danger/80">Everything same weight → user doesn&apos;t know where to look</p>
        </div>

        {/* With hierarchy */}
        <div className="rounded-xl border border-success/30 bg-success-soft p-3 space-y-2">
          <p className="text-[10px] font-bold text-success uppercase tracking-wide">✓ Clear Hierarchy</p>
          <div className="space-y-1.5">
            <div className="h-5 bg-text-primary/80 rounded w-4/5" />
            <div className="h-3 bg-text-secondary/50 rounded w-full" />
            <div className="h-3 bg-text-secondary/50 rounded w-5/6" />
            <div className="h-8 bg-primary rounded w-1/2 mt-2" />
          </div>
          <p className="text-[10px] text-success/80">H1 → body → CTA — eye flows naturally</p>
        </div>
      </div>

      {/* Scale reference */}
      <div className="border-t border-border pt-3">
        <p className="text-[10px] text-text-muted mb-2 uppercase tracking-wide">Typography Scale</p>
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-text-primary leading-none">H1</span>
            <span className="text-[10px] text-text-muted">32px · Bold · Primary action/title</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-text-primary leading-none">H2</span>
            <span className="text-[10px] text-text-muted">20px · Semibold · Section title</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-text-secondary leading-none">Body</span>
            <span className="text-[10px] text-text-muted">14px · Regular · Content</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-text-muted leading-none">Caption</span>
            <span className="text-[10px] text-text-muted">12px · Muted · Supporting</span>
          </div>
        </div>
      </div>
    </div>
  );
}
