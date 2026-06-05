export function NavbarDemo() {
  return (
    <div className="rounded-xl bg-bg-surface border border-border overflow-hidden shadow-sm">
      <nav className="flex items-center justify-between border-b border-border px-4 py-2.5 bg-bg-surface">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-md bg-primary" />
          <span className="text-sm font-bold text-text-primary">Brand</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          {["Home", "Features", "Pricing"].map((item, i) => (
            <span
              key={item}
              className={`text-xs font-medium ${
                i === 0
                  ? "text-primary border-b-2 border-primary pb-0.5"
                  : "text-text-secondary"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-dark transition-colors">
          Sign Up
        </button>
      </nav>
      <p className="p-3 text-center text-xs text-text-muted">Active state on current page</p>
    </div>
  );
}
