import Link from "next/link";
import { Bookmark, BookmarkCheck, ExternalLink } from "lucide-react";
import type { UXTerm } from "@/types/playbook";
import { CATEGORIES } from "@/data/categories";
import { TERMS } from "@/data/terms";
import { Badge, CategoryChip, IconButton, LevelBadge, SectionHeader } from "./workspace";
import { PromptBox } from "./PromptBox";
import { DemoRenderer } from "./demos/DemoRenderer";

type Props = {
  term: UXTerm;
  isBookmarked: boolean;
  onBookmark: (slug: string) => void;
};

function fallbackWhenToUse(term: UXTerm) {
  return term.whenToUse && term.whenToUse.length > 0
    ? term.whenToUse
    : [
        `ใช้เมื่อ review หรือ implement ${term.term} ใน SaaS dashboard, admin panel, landing page หรือ mobile flow`,
        "ใช้ตอนเขียน acceptance criteria, prompt ให้ AI coding agent, หรือ handoff ให้ designer/developer",
      ];
}

function fallbackExamples(term: UXTerm) {
  return term.examples.length > 0
    ? term.examples
    : [
        `${term.term} ใน SaaS dashboard ต้องมี state และ responsive behavior ที่ชัดเจน`,
        `${term.term} ใน mobile form ต้องคุม touch target, error copy และ keyboard flow`,
      ];
}

function fallbackPrompts(term: UXTerm) {
  return term.prompts.length > 0
    ? term.prompts
    : [
        `Audit ${term.term} in this product. Explain what is working, what creates friction, and provide specific implementation fixes using the current design system tokens and shared components.`,
      ];
}

export function TermDetailPanel({ term, isBookmarked, onBookmark }: Props) {
  const catMeta = CATEGORIES.find((c) => c.id === term.category);
  const relatedTerms = TERMS.filter((t) => term.relatedSlugs.includes(t.slug)).slice(0, 8);
  const whenToUse = fallbackWhenToUse(term);
  const examples = fallbackExamples(term);
  const prompts = fallbackPrompts(term);

  return (
    <div className="flex h-full flex-col overflow-hidden bg-bg-main">
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border bg-bg-surface px-4 py-2.5">
        <div className="flex min-w-0 flex-wrap items-center gap-1.5">
          <CategoryChip category={term.category} label={catMeta?.label} />
          <LevelBadge level={term.level} />
          {term.aliases?.slice(0, 2).map((alias) => <Badge key={alias}>{alias}</Badge>)}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <IconButton label={isBookmarked ? `Remove bookmark for ${term.term}` : `Bookmark ${term.term}`} active={isBookmarked} onClick={() => onBookmark(term.slug)}>
            {isBookmarked ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
          </IconButton>
          <Link
            href={`/terms/${term.slug}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-surface text-text-muted transition-colors hover:bg-bg-soft hover:text-text-primary"
            aria-label={`Open full page for ${term.term}`}
            title="Open full page"
          >
            <ExternalLink size={15} />
          </Link>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        <div className="mx-auto max-w-4xl space-y-4">
          <header className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
            <div className="mb-3 flex items-start gap-3">
              <span className="mono flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-bg-main text-[11px] font-black uppercase text-text-muted">
                {term.icon.slice(0, 4)}
              </span>
              <div className="min-w-0">
                <h1 className="text-2xl font-bold leading-tight text-text-primary">{term.term}</h1>
                {term.pronunciation && <p className="mono mt-0.5 text-[11px] text-text-muted">/{term.pronunciation}/</p>}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">{term.shortDefinition}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {term.tags.map((tag) => (
                <span key={tag} className="mono rounded border border-border bg-bg-soft px-1.5 py-0.5 text-[10px] text-text-muted">
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          <section className="grid gap-3 xl:grid-cols-[1fr_1fr]">
            <InfoBlock title="Full Definition">{term.fullDefinition}</InfoBlock>
            <InfoBlock title="Why It Matters" accent>{term.whyItMatters}</InfoBlock>
          </section>

          <section className="grid gap-3 xl:grid-cols-2">
            <ListBlock title="When To Use" items={whenToUse} />
            <ListBlock title="Examples" items={examples} />
          </section>

          <section className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
            <SectionHeader title="Prompt Examples" meta={`${prompts.length} ready to copy`} />
            <div className="space-y-2">
              {prompts.map((prompt, index) => (
                <PromptBox key={`${term.id}-prompt-${index}`} prompt={prompt} index={index} />
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
            <SectionHeader title="Visual Demo" meta={term.visualType} />
            <DemoRenderer type={term.visualType} config={term.demoConfig} />
          </section>

          <section className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
            <SectionHeader title="Related Terms" meta={`${relatedTerms.length} links`} />
            <div className="flex flex-wrap gap-1.5">
              {(relatedTerms.length > 0 ? relatedTerms : TERMS.filter((item) => item.category === term.category && item.slug !== term.slug).slice(0, 6)).map((rt) => (
                <Link
                  key={rt.slug}
                  href={`/terms/${rt.slug}`}
                  className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-bg-main px-2.5 text-xs font-semibold text-text-secondary transition-colors hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
                >
                  {rt.term}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ title, children, accent }: { title: string; children: string; accent?: boolean }) {
  return (
    <section
      className={`rounded-lg border border-border p-4 shadow-card ${accent ? "bg-bg-soft" : "bg-bg-surface"}`}
      style={accent ? { borderLeftWidth: "3px", borderLeftColor: "var(--bb-orange)" } : undefined}
    >
      <h2 className="mono mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">{title}</h2>
      <p className="text-sm leading-relaxed text-text-secondary">{children}</p>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
      <h2 className="mono mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">{title}</h2>
      <ul className="space-y-1.5">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
