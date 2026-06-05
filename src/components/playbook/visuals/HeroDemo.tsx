export function HeroDemo() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-primary-soft via-bg-surface to-accent-soft border border-border p-6 text-center shadow-sm">
      <div className="mb-3 inline-flex rounded-full border border-primary-border bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
        New: AI-powered features →
      </div>
      <h2 className="mt-2 text-xl font-bold text-text-primary leading-tight">
        Design faster,<br />ship with confidence
      </h2>
      <p className="mt-2 text-sm text-text-secondary max-w-xs mx-auto leading-relaxed">
        The UX/UI playbook for founders, developers, and product teams.
      </p>
      <div className="mt-5 flex justify-center gap-2.5">
        <button className="rounded-xl bg-primary px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-dark transition-colors">
          Get Started Free
        </button>
        <button className="rounded-xl border-2 border-primary px-5 py-2 text-xs font-bold text-primary hover:bg-primary-soft transition-colors">
          See Demo
        </button>
      </div>
    </div>
  );
}
