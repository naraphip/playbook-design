export function FormFieldsDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-4">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Form Field States</p>

      <div className="space-y-3">
        {/* Default */}
        <div>
          <label className="block text-[10px] font-medium text-text-muted mb-1 uppercase tracking-wide">Default</label>
          <div className="flex items-center gap-2 w-full rounded-lg border border-border bg-bg-surface px-3 py-2">
            <span className="text-xs text-text-muted flex-1">email@example.com</span>
          </div>
        </div>

        {/* Focused */}
        <div>
          <label className="block text-[10px] font-medium text-text-muted mb-1 uppercase tracking-wide">Focused</label>
          <div className="flex items-center gap-2 w-full rounded-lg border-2 border-primary bg-bg-surface px-3 py-2 ring-2 ring-primary/20">
            <span className="text-xs text-text-primary flex-1">hello@company.com</span>
            <span className="w-0.5 h-3 bg-primary animate-pulse" />
          </div>
        </div>

        {/* Error */}
        <div>
          <label className="block text-[10px] font-medium text-danger mb-1 uppercase tracking-wide">Error</label>
          <div className="flex items-center gap-2 w-full rounded-lg border border-danger bg-danger-soft px-3 py-2">
            <span className="text-xs text-text-primary flex-1">not-an-email</span>
          </div>
          <p className="text-[11px] text-danger mt-1 flex items-center gap-1">
            <span>⚠</span> Please enter a valid email address
          </p>
        </div>

        {/* Disabled */}
        <div>
          <label className="block text-[10px] font-medium text-text-muted mb-1 uppercase tracking-wide">Disabled</label>
          <div className="flex items-center gap-2 w-full rounded-lg border border-border bg-bg-hover px-3 py-2 cursor-not-allowed">
            <span className="text-xs text-text-muted flex-1">Locked field</span>
          </div>
        </div>
      </div>

      {/* Toggle + Checkbox row */}
      <div className="border-t border-border pt-3 space-y-2">
        <p className="text-[10px] text-text-muted uppercase tracking-wide">Controls</p>
        <div className="flex items-center gap-3">
          {/* Toggle */}
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-5 bg-primary rounded-full">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
            <span className="text-xs text-text-secondary">On</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-5 bg-border rounded-full">
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
            </div>
            <span className="text-xs text-text-secondary">Off</span>
          </div>
          {/* Checkbox */}
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded bg-primary flex items-center justify-center">
              <span className="text-white text-[10px]">✓</span>
            </div>
            <span className="text-xs text-text-secondary">Checked</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded border border-border bg-bg-surface" />
            <span className="text-xs text-text-secondary">Unchecked</span>
          </div>
        </div>
      </div>
    </div>
  );
}
