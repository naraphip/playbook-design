export function MetricsDemo() {
  const metrics = [
    { label: "Task Completion", value: "82%", target: "85%", color: "bg-primary", width: "82%" },
    { label: "Error Rate", value: "3.2%", target: "<5%", color: "bg-success", width: "32%" },
    { label: "NPS Score", value: "42", target: "50", color: "bg-accent", width: "64%" },
    { label: "SUS Score", value: "74", target: "80", color: "bg-warning", width: "74%" },
  ];
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">UX Metrics</p>
      {metrics.map(({ label, value, target, color, width }) => (
        <div key={label}>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="font-semibold text-text-primary">{label}</span>
            <span className="text-text-muted">{value} / target {target}</span>
          </div>
          <div className="h-2 rounded-full bg-border">
            <div className={`h-full rounded-full ${color} transition-all`} style={{ width }} />
          </div>
        </div>
      ))}
    </div>
  );
}
