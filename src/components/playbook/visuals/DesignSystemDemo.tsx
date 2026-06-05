export function DesignSystemDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-4">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Component Variants</p>
      <div className="flex flex-wrap gap-2">
        <button className="rounded-xl bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-primary-dark transition-colors">
          Primary
        </button>
        <button className="rounded-xl border-2 border-primary px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary-soft transition-colors">
          Secondary
        </button>
        <button className="rounded-xl border border-danger/40 bg-danger-soft px-3 py-1.5 text-xs font-bold text-danger hover:opacity-80 transition-colors">
          Destructive
        </button>
        <button className="rounded-xl px-3 py-1.5 text-xs font-bold text-text-muted cursor-not-allowed opacity-50" disabled>
          Disabled
        </button>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-xs text-text-muted font-medium">Sizes:</span>
        <button className="rounded-lg bg-primary px-2 py-1 text-xs font-semibold text-white">sm</button>
        <button className="rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-white">md</button>
        <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">lg</button>
      </div>
    </div>
  );
}
