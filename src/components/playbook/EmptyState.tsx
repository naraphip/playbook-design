import { SearchX } from "lucide-react";

type Props = { query: string; onClear: () => void };

export function EmptyState({ query, onClear }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-bg-soft border border-border">
        <SearchX size={24} className="text-text-muted" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-text-primary">No results found</h3>
      <p className="mb-6 max-w-xs text-sm text-text-secondary">
        ไม่พบคำศัพท์ที่ตรงกับ{" "}
        <span className="font-medium text-text-primary">&quot;{query}&quot;</span>
        {" "}ลองคำอื่นหรือล้าง filter
      </p>
      <button
        onClick={onClear}
        className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 shadow-sm"
      >
        Clear search
      </button>
    </div>
  );
}
