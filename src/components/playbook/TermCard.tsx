"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Bookmark, BookmarkCheck, ExternalLink } from "lucide-react";
import type { UXTerm } from "@/types/playbook";
import { LevelBadge } from "./LevelBadge";
import { CategoryBadge } from "./CategoryBadge";
import { TagList } from "./TagList";
import { PromptBox } from "./PromptBox";
import { VisualDemo } from "./VisualDemo";
import { CATEGORIES } from "@/data/categories";

type Props = {
  term: UXTerm;
  isBookmarked: boolean;
  onBookmark: (slug: string) => void;
  forceExpanded?: boolean;
};

export function TermCard({ term, isBookmarked, onBookmark, forceExpanded }: Props) {
  const [expanded, setExpanded] = useState(false);
  const isOpen = forceExpanded || expanded;
  const catMeta = CATEGORIES.find((c) => c.id === term.category);

  return (
    <article
      className="rounded-2xl border border-border bg-bg-surface shadow-sm overflow-hidden transition-shadow hover:shadow-md"
      aria-label={term.term}
    >
      {/* Card Header */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <CategoryBadge category={term.category} label={catMeta?.label} />
            <LevelBadge level={term.level} />
          </div>
          <div className="flex items-center gap-0.5 shrink-0">
            <button
              onClick={() => onBookmark(term.slug)}
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this term"}
              className="rounded-lg p-1.5 text-text-muted hover:text-warning transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {isBookmarked ? (
                <BookmarkCheck size={15} className="text-warning" />
              ) : (
                <Bookmark size={15} />
              )}
            </button>
            <Link
              href={`/terms/${term.slug}`}
              aria-label={`View details for ${term.term}`}
              className="rounded-lg p-1.5 text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ExternalLink size={15} />
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="text-2xl shrink-0 mt-0.5">{term.icon}</span>
          <div>
            <h2 className="text-base font-bold text-text-primary leading-snug">{term.term}</h2>
            {term.pronunciation && (
              <p className="text-xs text-text-muted mt-0.5">/{term.pronunciation}/</p>
            )}
          </div>
        </div>

        <p className="mt-2.5 text-sm text-text-secondary leading-relaxed">{term.shortDefinition}</p>

        <TagList tags={term.tags} />
      </div>

      {/* Expand Button */}
      <button
        onClick={() => setExpanded((p) => !p)}
        aria-expanded={isOpen}
        aria-controls={`term-body-${term.id}`}
        className="flex w-full items-center justify-between border-t border-border px-4 py-2.5 text-xs font-medium text-text-muted hover:bg-bg-soft hover:text-text-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <span>{isOpen ? "Hide details" : "Definition, prompts & visual demo"}</span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {/* Expanded Body */}
      {isOpen && (
        <div id={`term-body-${term.id}`} className="border-t border-border bg-bg-main/50 p-4 space-y-4">
          {/* Full Definition */}
          <section>
            <h3 className="mb-1.5 text-xs font-bold uppercase tracking-widest text-text-muted">Definition</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{term.fullDefinition}</p>
          </section>

          {/* Why It Matters */}
          <section className="rounded-xl border border-accent-border bg-accent-soft px-4 py-3">
            <h3 className="mb-1.5 text-xs font-bold uppercase tracking-widest text-accent">Why It Matters</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{term.whyItMatters}</p>
          </section>

          {/* Examples */}
          {term.examples.length > 0 && (
            <section>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-text-muted">Examples</h3>
              <ul className="space-y-1.5">
                {term.examples.map((ex, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-secondary">
                    <span className="text-primary shrink-0">•</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Prompts */}
          {term.prompts.length > 0 && (
            <section>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-text-muted">Prompt Examples</h3>
              <div className="space-y-2">
                {term.prompts.map((p, i) => (
                  <PromptBox key={i} prompt={p} index={i} />
                ))}
              </div>
            </section>
          )}

          {/* Visual Demo */}
          <VisualDemo visualType={term.visualType} />
        </div>
      )}
    </article>
  );
}
