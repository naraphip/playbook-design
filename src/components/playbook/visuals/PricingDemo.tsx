export function PricingDemo() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/mo",
      description: "Get started",
      features: ["5 projects", "1 user", "Basic analytics"],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/mo",
      description: "Most popular",
      features: ["Unlimited projects", "10 users", "Advanced analytics", "Priority support"],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large teams",
      features: ["Unlimited everything", "SSO / SAML", "SLA", "Dedicated CSM"],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Pricing Page UX</p>

      <div className="grid grid-cols-3 gap-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl p-3 space-y-2 flex flex-col ${
              plan.highlight
                ? "bg-primary text-white border-2 border-primary shadow-md"
                : "bg-bg-surface border border-border"
            }`}
          >
            {plan.highlight && (
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/80">{plan.description}</div>
            )}
            <div>
              <p className={`text-[11px] font-bold ${plan.highlight ? "text-white/80" : "text-text-muted"}`}>{plan.name}</p>
              <p className={`text-lg font-bold leading-tight ${plan.highlight ? "text-white" : "text-text-primary"}`}>
                {plan.price}
                <span className={`text-[10px] font-normal ${plan.highlight ? "text-white/70" : "text-text-muted"}`}>{plan.period}</span>
              </p>
            </div>
            <ul className="space-y-0.5 flex-1">
              {plan.features.map((f) => (
                <li key={f} className={`text-[10px] flex gap-1 ${plan.highlight ? "text-white/90" : "text-text-secondary"}`}>
                  <span className={plan.highlight ? "text-white" : "text-success"}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-1.5 rounded-lg text-[11px] font-semibold mt-1 ${
                plan.highlight
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-primary-soft text-primary border border-primary/20"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-accent-soft border border-accent-border px-3 py-2">
        <span className="text-accent text-sm">→</span>
        <p className="text-xs text-text-secondary">Highlight middle/recommended tier visually — it anchors user decision</p>
      </div>
    </div>
  );
}
