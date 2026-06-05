import Link from "next/link";
import { ExternalLink, Bookmark, BookmarkCheck } from "lucide-react";
import type { UXTerm } from "@/types/playbook";
import { LevelBadge } from "./LevelBadge";
import { CategoryBadge } from "./CategoryBadge";
import { TagList } from "./TagList";
import { PromptBox } from "./PromptBox";
import { VisualDemo } from "./VisualDemo";
import { CATEGORIES } from "@/data/categories";
import { TERMS } from "@/data/terms";

type Props = {
  term: UXTerm;
  isBookmarked: boolean;
  onBookmark: (slug: string) => void;
};

export function TermDetailPanel({ term, isBookmarked, onBookmark }: Props) {
  const catMeta = CATEGORIES.find((c) => c.id === term.category);
  const relatedTerms = TERMS.filter((t) => term.relatedSlugs.includes(t.slug));

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Panel header */}
      <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-border bg-bg-surface shrink-0">
        <div className="flex items-center gap-2 flex-wrap">
          <CategoryBadge category={term.category} label={catMeta?.label} />
          <LevelBadge level={term.level} />
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => onBookmark(term.slug)}
            aria-label={isBookmarked ? `Remove bookmark for ${term.term}` : `Bookmark ${term.term}`}
            className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium text-text-secondary hover:bg-bg-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {isBookmarked
              ? <BookmarkCheck size={13} className="text-warning" />
              : <Bookmark size={13} />
            }
            <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
          </button>
          <Link
            href={`/terms/${term.slug}`}
            className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium text-text-secondary hover:bg-bg-soft hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Open full page for ${term.term}`}
          >
            <ExternalLink size={13} />
            <span className="hidden sm:inline">Full page</span>
          </Link>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
        {/* Term header */}
        <div>
          <div className="flex items-start gap-3 mb-2">
            <span className="text-4xl select-none">{term.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-text-primary leading-snug">{term.term}</h2>
              {term.pronunciation && (
                <p className="text-xs text-text-muted mt-0.5">/{term.pronunciation}/</p>
              )}
            </div>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{term.shortDefinition}</p>
          <TagList tags={term.tags} />
        </div>

        {/* Full definition */}
        <section className="rounded-xl border border-border bg-bg-surface p-4 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Full Definition</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{term.fullDefinition}</p>
        </section>

        {/* Why it matters */}
        <section className="rounded-xl border border-accent-border bg-accent-soft p-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Why It Matters</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{term.whyItMatters}</p>
        </section>

        {/* Examples */}
        {term.examples.length > 0 && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Examples</h3>
            <ul className="space-y-1.5">
              {term.examples.map((ex, i) => (
                <li key={i} className="flex gap-2 text-sm text-text-secondary">
                  <span className="text-primary shrink-0 font-bold">•</span>
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Prompt examples */}
        {term.prompts.length > 0 && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Prompt Examples</h3>
            <div className="space-y-2">
              {term.prompts.map((p, i) => (
                <PromptBox key={i} prompt={p} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Visual demo */}
        <section>
          <VisualDemo visualType={term.visualType} />
        </section>

        {/* Related terms */}
        {relatedTerms.length > 0 && (
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Related Terms</h3>
            <div className="flex flex-wrap gap-2">
              {relatedTerms.map((rt) => (
                <Link
                  key={rt.slug}
                  href={`/terms/${rt.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary shadow-sm hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="select-none">{rt.icon}</span>
                  <span>{rt.term}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom padding */}
        <div className="h-4" />
      </div>
    </div>
  );
}
