export function TipsDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-2.5">
      <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Quick Tips</p>
      {[
        "Always specify aspect ratio: --ar 16:9",
        "Use 'no text, no watermark' always",
        "Name the style: flat vector / isometric / 3D render",
        "Describe mood: professional, playful, premium",
      ].map((tip, i) => (
        <div key={i} className="flex gap-2 text-xs text-text-secondary">
          <span className="text-accent font-bold shrink-0">→</span>
          <span>{tip}</span>
        </div>
      ))}
    </div>
  );
}
