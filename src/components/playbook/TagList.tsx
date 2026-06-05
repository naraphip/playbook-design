type Props = { tags: string[]; onTagClick?: (tag: string) => void };

export function TagList({ tags, onTagClick }: Props) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {tags.map((tag) =>
        onTagClick ? (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className="rounded-full bg-bg-soft border border-border px-2 py-0.5 text-xs text-text-muted hover:bg-bg-hover hover:text-text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            #{tag}
          </button>
        ) : (
          <span key={tag} className="rounded-full bg-bg-soft border border-border px-2 py-0.5 text-xs text-text-muted">
            #{tag}
          </span>
        )
      )}
    </div>
  );
}
