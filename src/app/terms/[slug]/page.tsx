import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TERMS } from "@/data/terms";
import { LevelBadge } from "@/components/playbook/LevelBadge";
import { CategoryBadge } from "@/components/playbook/CategoryBadge";
import { TagList } from "@/components/playbook/TagList";
import { PromptBox } from "@/components/playbook/PromptBox";
import { VisualDemo } from "@/components/playbook/VisualDemo";
import { CATEGORIES } from "@/data/categories";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TERMS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = TERMS.find((t) => t.slug === slug);
  if (!term) return {};
  return { title: term.term, description: term.shortDescription };
}

export default async function TermDetailPage({ params }: Props) {
  const { slug } = await params;
  const term = TERMS.find((t) => t.slug === slug);
  if (!term) notFound();

  const catMeta = CATEGORIES.find((c) => c.id === term.category);
  const relatedTerms = TERMS.filter((t) => term.relatedSlugs.includes(t.slug));

  return (
    <div className="min-h-screen bg-bg-main">
      <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b border-border bg-bg-surface/90 px-4 backdrop-blur-sm shadow-sm">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <ArrowLeft size={16} />
          Back to Playbook
        </Link>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <CategoryBadge category={term.category} label={catMeta?.label} />
            <LevelBadge level={term.level} />
          </div>
          <div className="flex items-start gap-4">
            <span className="text-5xl">{term.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-text-primary">{term.term}</h1>
              {term.aliases && term.aliases.length > 0 && (
                <p className="text-sm text-text-muted mt-0.5">{term.aliases.join(" · ")}</p>
              )}
            </div>
          </div>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">{term.shortDescription}</p>
          <TagList tags={term.tags} />
        </div>

        {/* Full Definition */}
        <section className="mb-6 rounded-2xl border border-border bg-bg-surface p-5 shadow-sm">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-text-muted">Full Definition</h2>
          <p className="text-text-secondary leading-relaxed">{term.fullDefinition}</p>
        </section>

        {/* Why It Matters */}
        <section className="mb-6 rounded-2xl border border-accent-border bg-accent-soft p-5">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">Why It Matters</h2>
          <p className="text-text-secondary leading-relaxed">{term.whyItMatters}</p>
        </section>

        {/* When To Use / When Not To Use */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <BulletSection title="When To Use" items={term.whenToUse} />
          <BulletSection title="When Not To Use" items={term.whenNotToUse} danger />
        </div>

        {/* How To Apply */}
        <section className="mb-6 rounded-2xl border border-border bg-bg-surface p-5 shadow-sm">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-text-muted">How To Apply</h2>
          <ol className="space-y-2">
            {term.howToApply.map((step, i) => (
              <li key={i} className="flex gap-3 text-text-secondary leading-relaxed">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent-soft text-xs font-bold text-accent">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Checklist + Deliverables */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <BulletSection title="Checklist" items={term.checklist} check />
          <BulletSection title="Deliverables" items={term.deliverables} />
        </div>

        {/* Good vs Bad Example */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <section className="rounded-2xl border border-success/25 bg-success-soft/40 p-5">
            <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-success">Good Example</h2>
            <p className="text-text-secondary leading-relaxed text-sm">{term.goodExample}</p>
          </section>
          <section className="rounded-2xl border border-danger/25 bg-danger-soft/30 p-5">
            <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-danger">Bad Example</h2>
            <p className="text-text-secondary leading-relaxed text-sm">{term.badExample}</p>
          </section>
        </div>

        {/* Common Mistakes */}
        <BulletSection title="Common Mistakes" items={term.commonMistakes} danger className="mb-6" />

        {/* Prompts */}
        {term.prompts.length > 0 && (
          <section className="mb-6">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-text-muted">Prompt Examples</h2>
            <div className="space-y-3">
              {term.prompts.map((p, i) => (
                <PromptBox key={i} prompt={p} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Visual Demo */}
        <section className="mb-6">
          <VisualDemo visualDemo={term.visualDemo} demoData={term.demoData} />
        </section>

        {/* Related Terms */}
        {relatedTerms.length > 0 && (
          <section className="mb-6">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-text-muted">Related Terms</h2>
            <div className="flex flex-wrap gap-2">
              {relatedTerms.map((rt) => (
                <Link
                  key={rt.slug}
                  href={`/terms/${rt.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-surface px-3 py-2 text-sm font-medium text-text-secondary shadow-sm hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span>{rt.icon}</span>
                  <span>{rt.term}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function BulletSection({ title, items, danger, check, className = "" }: { title: string; items: string[]; danger?: boolean; check?: boolean; className?: string }) {
  return (
    <section className={`rounded-2xl border border-border bg-bg-surface p-5 shadow-sm ${className}`}>
      <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-text-muted">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-text-secondary leading-relaxed text-sm">
            {check ? (
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-success/40 bg-success-soft text-[9px] font-black text-success">✓</span>
            ) : (
              <span className={`font-bold shrink-0 ${danger ? "text-danger" : "text-primary"}`}>•</span>
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
