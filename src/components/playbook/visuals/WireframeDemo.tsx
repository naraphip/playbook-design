export function WireframeDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4">
      <p className="text-xs font-semibold text-text-muted mb-3">Wireframe: Landing Page</p>
      <div className="border border-border rounded-xl overflow-hidden bg-bg-surface shadow-sm">
        {/* Navbar */}
        <div className="border-b border-border flex items-center justify-between px-3 py-2 bg-bg-soft">
          <div className="h-2.5 w-12 rounded-full bg-border" />
          <div className="flex gap-2">
            <div className="h-2 w-8 rounded-full bg-border" />
            <div className="h-2 w-8 rounded-full bg-border" />
            <div className="h-2 w-8 rounded-full bg-border" />
          </div>
          <div className="h-5 w-12 rounded-lg bg-primary/30" />
        </div>
        {/* Hero */}
        <div className="px-4 py-5 text-center space-y-2">
          <div className="mx-auto h-4 w-40 rounded-full bg-border" />
          <div className="mx-auto h-2.5 w-56 rounded-full bg-bg-soft" />
          <div className="mx-auto h-2 w-48 rounded-full bg-bg-soft" />
          <div className="mx-auto h-7 w-28 rounded-xl bg-primary/20 mt-2" />
        </div>
        {/* Cards row */}
        <div className="px-3 pb-3 grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-border p-2 space-y-1.5 bg-bg-soft">
              <div className="h-2.5 w-full rounded-full bg-border" />
              <div className="h-2 w-4/5 rounded-full bg-border/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
