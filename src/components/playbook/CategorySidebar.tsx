import type { TermCategory } from "@/types/playbook";
import { CATEGORIES } from "@/data/categories";
import { TERMS } from "@/data/terms";

type Props = {
  activeCategory: TermCategory | "all";
  onSelect: (cat: TermCategory | "all") => void;
};

export function CategorySidebar({ activeCategory, onSelect }: Props) {
  const counts = TERMS.reduce<Record<string, number>>((acc, t) => {
    acc[t.category] = (acc[t.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <nav aria-label="Term categories" className="flex flex-col gap-0.5 py-3">
      <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-widest text-text-muted">
        Categories
      </p>
      <button
        onClick={() => onSelect("all")}
        className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
          activeCategory === "all"
            ? "bg-primary-soft text-primary font-semibold"
            : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
        }`}
      >
        <span className="flex items-center gap-2.5">
          <span className="text-base">📚</span>
          <span>ทั้งหมด</span>
        </span>
        <span className={`text-xs rounded-full px-1.5 py-0.5 ${activeCategory === "all" ? "bg-primary/10 text-primary" : "text-text-muted"}`}>
          {TERMS.length}
        </span>
      </button>

      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            activeCategory === cat.id
              ? "bg-primary-soft text-primary font-semibold"
              : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
          }`}
        >
          <span className="flex items-center gap-2.5">
            <span className="text-base">{cat.icon}</span>
            <span className="leading-snug">{cat.label}</span>
          </span>
          <span className={`text-xs rounded-full px-1.5 py-0.5 ${activeCategory === cat.id ? "bg-primary/10 text-primary" : "text-text-muted"}`}>
            {counts[cat.id] ?? 0}
          </span>
        </button>
      ))}
    </nav>
  );
}
