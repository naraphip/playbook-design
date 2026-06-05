export function ModalToastDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      {/* Modal preview */}
      <div className="rounded-xl border border-border bg-bg-surface p-4 shadow-md">
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2">Modal</p>
        <h4 className="text-sm font-bold text-text-primary mb-1">Delete this item?</h4>
        <p className="text-xs text-text-secondary mb-4">This action cannot be undone.</p>
        <div className="flex justify-end gap-2">
          <button className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-secondary hover:bg-bg-soft transition-colors">
            Cancel
          </button>
          <button className="rounded-lg bg-danger px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 transition-colors">
            Delete
          </button>
        </div>
      </div>
      {/* Toast preview */}
      <div className="flex items-center gap-2.5 rounded-xl border border-success/30 bg-success-soft px-3 py-2.5 shadow-sm">
        <div className="h-2 w-2 rounded-full bg-success shrink-0" />
        <span className="text-xs font-semibold text-success">Saved successfully</span>
        <span className="ml-auto text-xs text-text-muted cursor-pointer">✕</span>
      </div>
    </div>
  );
}
