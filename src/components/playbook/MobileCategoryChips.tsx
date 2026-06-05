import type { TermCategory } from "@/types/playbook";
import { CATEGORIES } from "@/data/categories";

type Props = {
  activeCategory: TermCategory | "all";
  onSelect: (cat: TermCategory | "all") => void;
};

export function MobileCategoryChips({ activeCategory, onSelect }: Props) {
  const all = [
    { id: "all" as const, label: "ทั้งหมด", icon: "📚" },
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.label, icon: c.icon })),
  ];

  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-2.5 scrollbar-none" role="tablist" aria-label="Category filter">
      {all.map(({ id, label, icon }) => (
        <button
          key={id}
          role="tab"
          aria-selected={activeCategory === id}
          onClick={() => onSelect(id as TermCategory | "all")}
          className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            activeCategory === id
              ? "border-primary bg-primary-soft text-primary"
              : "border-border bg-bg-surface text-text-secondary hover:border-border-strong hover:text-text-primary"
          }`}
        >
          <span>{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
