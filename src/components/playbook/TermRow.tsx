import { Bookmark, BookmarkCheck } from "lucide-react";
import type { UXTerm } from "@/types/playbook";
import { CATEGORIES } from "@/data/categories";
import { Badge, LevelBadge } from "./workspace";

type Props = {
  term: UXTerm;
  isSelected: boolean;
  isBookmarked: boolean;
  onSelect: (term: UXTerm) => void;
  onBookmark: (slug: string) => void;
};

export function TermRow({ term, isSelected, isBookmarked, onSelect, onBookmark }: Props) {
  const category = CATEGORIES.find((item) => item.id === term.category);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`Select ${term.term}`}
      onClick={() => onSelect(term)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(term);
        }
      }}
      className={`group relative flex cursor-pointer items-start gap-2.5 rounded-md border px-2.5 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
        ${isSelected
          ? "border-accent/25 bg-accent-soft shadow-card before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-[3px] before:rounded-full before:bg-accent"
          : "border-transparent hover:border-border hover:bg-bg-soft"
        }`}
    >
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-base ${
        isSelected ? "border-accent/20 bg-bg-surface" : "border-border bg-bg-main"
      }`}>
        {term.icon}
      </span>

      <div className="flex-1 min-w-0">
        <div className="mb-1 flex min-w-0 items-center gap-1.5">
          <span className={`truncate text-sm font-bold leading-snug ${isSelected ? "text-accent" : "text-text-primary"}`}>
            {term.term}
          </span>
          <LevelBadge level={term.level} />
        </div>
        <div className="mb-1.5 flex items-center gap-1.5">
          <Badge>{category?.label ?? term.category}</Badge>
        </div>
        <p className="line-clamp-2 text-xs leading-relaxed text-text-secondary">
          {term.shortDescription}
        </p>
        {term.tags.length > 0 && (
          <div className="mt-1.5 flex flex-wrap gap-x-1.5 gap-y-0.5">
            {term.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="mono text-[10px] text-text-muted">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onBookmark(term.slug); }}
        aria-label={isBookmarked ? `Remove bookmark for ${term.term}` : `Bookmark ${term.term}`}
        className={`shrink-0 rounded-md p-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
          ${isBookmarked
            ? "text-warning opacity-100"
            : "text-text-muted opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
          }`}
      >
        {isBookmarked
          ? <BookmarkCheck size={14} />
          : <Bookmark size={14} />
        }
      </button>
    </div>
  );
}
