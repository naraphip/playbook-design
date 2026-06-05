export function CtaDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-6">
      <p className="mb-4 text-center text-xs font-semibold text-text-muted uppercase tracking-widest">
        CTA Hierarchy
      </p>
      <div className="flex flex-col items-center gap-3">
        <button className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors">
          Start Free Trial
        </button>
        <button className="rounded-xl border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft transition-colors">
          See Demo
        </button>
        <button className="text-sm text-text-secondary underline underline-offset-2 hover:text-text-primary transition-colors">
          Learn more
        </button>
      </div>
      <p className="mt-4 text-center text-xs text-text-muted">Primary → Secondary → Tertiary</p>
    </div>
  );
}
