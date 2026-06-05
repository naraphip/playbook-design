export function DataTableDemo() {
  const rows = [
    { name: "Aria Kim", status: "Active", role: "Designer", updated: "Today" },
    { name: "Boon Tong", status: "Pending", role: "Developer", updated: "2d ago" },
    { name: "Cleo Sun", status: "Active", role: "PM", updated: "1w ago" },
  ];

  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Data Table</p>
        <button className="text-xs text-primary font-medium px-2.5 py-1 rounded-lg bg-primary-soft">+ Add Row</button>
      </div>

      {/* Filter bar */}
      <div className="flex gap-2">
        <div className="flex-1 flex items-center gap-2 rounded-lg border border-border bg-bg-surface px-2.5 py-1.5">
          <span className="text-text-muted text-xs">🔍</span>
          <span className="text-xs text-text-muted">Search…</span>
        </div>
        <button className="px-2.5 py-1.5 rounded-lg border border-border bg-bg-surface text-xs text-text-secondary">Filter</button>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border bg-bg-soft">
              <th className="text-left px-3 py-2 text-text-muted font-semibold">Name ↕</th>
              <th className="text-left px-3 py-2 text-text-muted font-semibold">Role</th>
              <th className="text-left px-3 py-2 text-text-muted font-semibold">Status</th>
              <th className="text-left px-3 py-2 text-text-muted font-semibold">Updated</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.name} className={`border-b border-border last:border-0 hover:bg-bg-soft transition-colors ${i === 0 ? "bg-primary-soft/20" : ""}`}>
                <td className="px-3 py-2 text-text-primary font-medium">{row.name}</td>
                <td className="px-3 py-2 text-text-secondary">{row.role}</td>
                <td className="px-3 py-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    row.status === "Active"
                      ? "bg-success-soft text-success"
                      : "bg-warning-soft text-warning"
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-3 py-2 text-text-muted">{row.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-[10px] text-text-muted">
        <span>Showing 1–3 of 24</span>
        <div className="flex gap-1">
          {["←", "1", "2", "3", "→"].map((p) => (
            <button key={p} className={`px-2 py-0.5 rounded ${p === "1" ? "bg-primary text-white" : "bg-bg-surface border border-border text-text-secondary"}`}>
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
