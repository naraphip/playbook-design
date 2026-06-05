export function SidebarDemo() {
  const items = ["Dashboard", "Analytics", "Users", "Settings"];
  return (
    <div className="rounded-xl bg-bg-surface border border-border overflow-hidden shadow-sm flex">
      <aside className="w-36 border-r border-border bg-bg-soft p-3 flex flex-col gap-1">
        {items.map((item, i) => (
          <div
            key={item}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-medium ${
              i === 0
                ? "bg-primary-soft text-primary font-semibold"
                : "text-text-secondary hover:bg-bg-hover"
            }`}
          >
            {item}
          </div>
        ))}
      </aside>
      <div className="flex-1 p-4 bg-bg-surface">
        <div className="h-3 w-20 rounded-full bg-border mb-2" />
        <div className="h-2 w-32 rounded-full bg-bg-soft" />
        <div className="mt-3 h-16 rounded-xl bg-bg-soft border border-border" />
      </div>
    </div>
  );
}
