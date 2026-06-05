export function TrustSignalsDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-4">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Trust Signals</p>

      {/* Star rating + count */}
      <div className="flex items-center gap-3 rounded-xl bg-bg-surface border border-border px-4 py-3">
        <div>
          <div className="flex items-center gap-0.5 mb-0.5">
            {[1,2,3,4,5].map((i) => (
              <span key={i} className={`text-sm ${i <= 4 ? "text-warning" : "text-border"}`}>★</span>
            ))}
          </div>
          <p className="text-xs text-text-muted">4.8 / 5 · 2,400 reviews</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-lg font-bold text-text-primary">10,000+</p>
          <p className="text-xs text-text-muted">teams worldwide</p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="rounded-xl bg-bg-surface border border-border px-4 py-3 space-y-2">
        <p className="text-xs text-text-secondary italic leading-relaxed">
          &ldquo;Reduced our design handoff time by 60%. Our developers finally understand intent.&rdquo;
        </p>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center text-[10px] font-bold text-primary">S</div>
          <div>
            <p className="text-[11px] font-semibold text-text-primary">Sarah L.</p>
            <p className="text-[10px] text-text-muted">Head of Design, Acme Corp</p>
          </div>
        </div>
      </div>

      {/* Security + logos */}
      <div className="space-y-2">
        <p className="text-[10px] text-text-muted uppercase tracking-wide">Security & Compliance</p>
        <div className="flex flex-wrap gap-2">
          {["SOC 2", "GDPR", "SSL", "ISO 27001"].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 rounded-lg border border-border bg-bg-surface px-2.5 py-1.5">
              <span className="text-success text-xs">✓</span>
              <span className="text-[11px] font-medium text-text-secondary">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Used by logos placeholder */}
      <div className="border-t border-border pt-3">
        <p className="text-[10px] text-text-muted uppercase tracking-wide mb-2">Used by teams at</p>
        <div className="flex items-center gap-3">
          {["Stripe", "Notion", "Figma", "Linear"].map((co) => (
            <span key={co} className="text-xs font-bold text-text-muted/60">{co}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
