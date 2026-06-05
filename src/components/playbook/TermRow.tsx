import { Bookmark, BookmarkCheck } from "lucide-react";
import type { UXTerm } from "@/types/playbook";
import { LevelBadge } from "./LevelBadge";

type Props = {
  term: UXTerm;
  isSelected: boolean;
  isBookmarked: boolean;
  onSelect: (term: UXTerm) => void;
  onBookmark: (slug: string) => void;
};

export function TermRow({ term, isSelected, isBookmarked, onSelect, onBookmark }: Props) {
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
      className={`group relative flex items-start gap-3 rounded-xl px-3 py-3 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
        ${isSelected
          ? "bg-primary-soft border border-primary/20 shadow-sm"
          : "border border-transparent hover:bg-bg-soft hover:border-border"
        }`}
    >
      <span className="text-xl shrink-0 mt-0.5 select-none">{term.icon}</span>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className={`text-sm font-semibold leading-snug truncate ${isSelected ? "text-primary" : "text-text-primary"}`}>
            {term.term}
          </span>
          <LevelBadge level={term.level} />
        </div>
        <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
          {term.shortDefinition}
        </p>
        {term.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {term.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-text-muted">#{tag}</span>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onBookmark(term.slug); }}
        aria-label={isBookmarked ? `Remove bookmark for ${term.term}` : `Bookmark ${term.term}`}
        className={`shrink-0 p-1 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary
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
