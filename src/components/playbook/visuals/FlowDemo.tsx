export function FlowDemo() {
  const steps = ["Landing", "Sign Up", "Email Verify", "Onboarding", "Dashboard"];
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4">
      <p className="text-xs font-semibold text-text-muted mb-4">User Flow: Signup</p>
      <div className="flex items-center gap-1 overflow-x-auto pb-1">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-1 shrink-0">
            <div
              className={`rounded-xl border px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap shadow-sm ${
                i === 0
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-bg-surface text-text-secondary"
              }`}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <svg width="16" height="10" viewBox="0 0 16 10" className="text-text-muted shrink-0">
                <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
