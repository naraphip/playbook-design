export function ResearchDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-2.5">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Research Methods</p>
      {[
        { method: "User Interview", type: "Qualitative", when: "Understand why" },
        { method: "Usability Test", type: "Behavioral", when: "Find issues" },
        { method: "Survey", type: "Quantitative", when: "Measure attitude" },
        { method: "A/B Test", type: "Experimental", when: "Compare variants" },
      ].map(({ method, type, when }) => (
        <div key={method} className="flex items-center gap-2 text-xs">
          <span className="w-28 font-semibold text-text-primary">{method}</span>
          <span className="rounded-full border border-primary-border bg-primary-soft text-primary px-2 py-0.5 font-medium">
            {type}
          </span>
          <span className="text-text-muted ml-auto">{when}</span>
        </div>
      ))}
    </div>
  );
}
