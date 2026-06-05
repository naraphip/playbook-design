import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { TECHNIQUES } from "@/data/techniques";
import { TagList } from "@/components/playbook/TagList";
import { CopyButton } from "@/components/playbook/CopyButton";

export const metadata: Metadata = {
  title: "UX/UI Techniques",
  description: "เทคนิค UX/UI ที่ใช้งานได้จริง พร้อม prompt สำหรับแต่ละ technique",
};

const CATEGORY_LABEL: Record<string, string> = {
  research: "Research",
  testing: "Testing",
  audit: "Audit",
  design: "Design",
  handoff: "Handoff",
  metrics: "Metrics",
};

export default function TechniquesPage() {
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
        <h1 className="text-sm font-semibold text-text-primary">UX/UI Techniques</h1>
        <span className="ml-auto text-xs text-text-muted tabular-nums">{TECHNIQUES.length} techniques</span>
        <nav className="flex items-center gap-0.5">
          {[
            { href: "/", label: "Playbook" },
            { href: "/prompts", label: "Prompts" },
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

      <main className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-text-primary mb-1.5">UX/UI Techniques</h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            เทคนิคปฏิบัติพร้อม how-to, example prompt และ common mistakes — เหมาะสำหรับ UX lead, designer และ reviewer
          </p>
        </div>

        <div className="space-y-2">
          {TECHNIQUES.map((tech) => (
            <article
              key={tech.id}
              className="rounded-2xl border border-border bg-bg-surface shadow-sm overflow-hidden"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start gap-4 p-5 hover:bg-bg-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                        {CATEGORY_LABEL[tech.category] ?? tech.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-text-primary">{tech.title}</h3>
                    <p className="mt-1 text-xs text-text-secondary line-clamp-2 leading-relaxed">{tech.whatItIs}</p>
                  </div>
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-text-muted transition-transform group-open:rotate-180 mt-1"
                  />
                </summary>

                <div className="border-t border-border bg-bg-main/40 px-5 py-5 space-y-5">
                  {/* What it is */}
                  <section>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-text-muted">What It Is</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{tech.whatItIs}</p>
                  </section>

                  {/* When to use */}
                  <section>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-text-muted">When to Use</h4>
                    <ul className="space-y-1.5">
                      {tech.whenToUse.map((w, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-text-secondary">
                          <span className="text-primary font-bold shrink-0 mt-0.5">→</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* How to do it */}
                  <section>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-text-muted">How to Run</h4>
                    <ol className="space-y-2">
                      {tech.howToDoIt.map((step, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-text-secondary">
                          <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary-soft text-primary text-xs font-bold mt-0.5">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </section>

                  {/* Example prompt */}
                  <section>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted">Example Prompt</h4>
                      <CopyButton text={tech.examplePrompt} label="prompt" />
                    </div>
                    <div className="rounded-xl border border-border bg-bg-soft px-4 py-3.5">
                      <p className="text-sm text-text-secondary leading-relaxed font-mono whitespace-pre-wrap">
                        {tech.examplePrompt}
                      </p>
                    </div>
                  </section>

                  {/* Common mistakes */}
                  <section>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-text-muted">Common Mistakes</h4>
                    <ul className="space-y-1.5">
                      {tech.commonMistakes.map((m, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-text-secondary">
                          <span className="text-danger font-bold shrink-0 mt-0.5">⚠</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <TagList tags={tech.tags} />
                </div>
              </details>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
