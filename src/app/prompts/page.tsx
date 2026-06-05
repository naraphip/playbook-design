import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROMPTS } from "@/data/prompts";
import { LevelBadge } from "@/components/playbook/LevelBadge";
import { CopyButton } from "@/components/playbook/CopyButton";
import type { PromptItem } from "@/types/playbook";

export const metadata: Metadata = {
  title: "Prompt Library",
  description: "คลัง prompt สำหรับสั่งงาน designer, developer, Claude Code และ AI image tools",
};

const USE_CASE_META: Record<
  PromptItem["useCase"],
  { label: string; description: string; accentClass: string }
> = {
  designer: {
    label: "For Designer",
    description: "สั่งงาน designer ให้ deliver งานได้ตรง spec",
    accentClass: "border-l-4 border-l-[#E07A5F]",
  },
  developer: {
    label: "For Developer",
    description: "สั่ง dev ให้ implement UI/UX ตาม design intent",
    accentClass: "border-l-4 border-l-[#4B6CB7]",
  },
  "claude-code": {
    label: "For Claude Code",
    description: "Prompt สำหรับสั่ง Claude Code ทำ UI/UX tasks",
    accentClass: "border-l-4 border-l-primary",
  },
  "ux-review": {
    label: "For UX Review",
    description: "Prompt สำหรับ conduct UX review และ critique",
    accentClass: "border-l-4 border-l-[#2E86AB]",
  },
  accessibility: {
    label: "For Accessibility",
    description: "Audit และ improve accessibility ของ product",
    accentClass: "border-l-4 border-l-[#2F7D57]",
  },
  conversion: {
    label: "For Conversion",
    description: "Optimize UI/UX สำหรับ conversion และ engagement",
    accentClass: "border-l-4 border-l-accent",
  },
  "ai-image": {
    label: "For AI Image",
    description: "Prompt สำหรับ generate UI/UX mockups ด้วย AI",
    accentClass: "border-l-4 border-l-[#9B59B6]",
  },
};

const USE_CASE_ORDER: PromptItem["useCase"][] = [
  "designer",
  "developer",
  "claude-code",
  "ux-review",
  "accessibility",
  "conversion",
  "ai-image",
];

export default function PromptsPage() {
  const grouped = USE_CASE_ORDER.map((uc) => ({
    useCase: uc,
    meta: USE_CASE_META[uc],
    prompts: PROMPTS.filter((p) => p.useCase === uc),
  })).filter((g) => g.prompts.length > 0);

  return (
    <div className="min-h-screen bg-bg-main">
      <header className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b border-border bg-bg-surface/95 px-4 backdrop-blur-sm shadow-sm">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <ArrowLeft size={15} />
          Playbook
        </Link>
        <div className="h-4 w-px bg-border" />
        <h1 className="text-sm font-semibold text-text-primary">Prompt Library</h1>
        <span className="ml-auto text-xs text-text-muted tabular-nums">{PROMPTS.length} prompts</span>
        <nav className="flex items-center gap-0.5">
          {[
            { href: "/", label: "Playbook" },
            { href: "/techniques", label: "Techniques" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-1.5">Prompt Library</h2>
          <p className="text-sm text-text-secondary">
            คลัง prompt พร้อมใช้ · {grouped.length} categories · {PROMPTS.length} prompts
          </p>
        </div>

        {/* Section index */}
        <div className="mb-8 flex flex-wrap gap-2">
          {grouped.map(({ useCase, meta, prompts }) => (
            <a
              key={useCase}
              href={`#section-${useCase}`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
            >
              {meta.label}
              <span className="text-text-muted">({prompts.length})</span>
            </a>
          ))}
        </div>

        <div className="space-y-12">
          {grouped.map(({ useCase, meta, prompts }) => (
            <section key={useCase} id={`section-${useCase}`}>
              {/* Section header */}
              <div className="mb-5 pb-3 border-b border-border">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-base font-bold text-text-primary">{meta.label}</h3>
                  <span className="text-xs text-text-muted">({prompts.length})</span>
                </div>
                <p className="text-sm text-text-secondary mt-0.5">{meta.description}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {prompts.map((p) => (
                  <article
                    key={p.id}
                    className={`rounded-2xl border border-border bg-bg-surface shadow-sm hover:shadow-md transition-shadow overflow-hidden ${meta.accentClass}`}
                  >
                    <div className="p-4 space-y-3">
                      {/* Card header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-text-primary leading-snug">{p.title}</h4>
                        </div>
                        <LevelBadge level={p.level} />
                      </div>

                      {/* Prompt preview */}
                      <div className="rounded-xl border border-border bg-bg-soft px-3.5 py-3">
                        <p className="text-xs leading-relaxed font-mono text-text-secondary line-clamp-4 whitespace-pre-wrap">
                          {p.prompt}
                        </p>
                      </div>

                      {/* Tags + copy */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1 min-w-0">
                          {p.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs text-text-muted">#{tag}</span>
                          ))}
                        </div>
                        <CopyButton text={p.prompt} label="prompt" className="shrink-0" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
