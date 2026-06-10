"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { WorkflowStage } from "@/types/playbook";
import { WORKFLOW_STAGES } from "@/data/workflow";
import { TERMS } from "@/data/terms";
import { TECHNIQUES } from "@/data/techniques";
import { PROMPTS } from "@/data/prompts";
import { AppShell, Badge, SectionHeader } from "./workspace";
import { CopyButton } from "./CopyButton";

export function WorkflowClient() {
  const [activeId, setActiveId] = useState(WORKFLOW_STAGES[0]?.id ?? "");
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const activeStage = useMemo(
    () => WORKFLOW_STAGES.find((stage) => stage.id === activeId) ?? WORKFLOW_STAGES[0],
    [activeId],
  );
  const activeIndex = WORKFLOW_STAGES.findIndex((stage) => stage.id === activeStage.id);
  const nextStage = WORKFLOW_STAGES[activeIndex + 1];

  return (
    <AppShell activeRoute="workflow">
      <div className="grid h-full min-h-0 grid-cols-1 overflow-hidden lg:grid-cols-[340px_minmax(0,1fr)] xl:grid-cols-[380px_minmax(0,1fr)]">
        <section className={`${showMobileDetail ? "hidden lg:flex" : "flex"} min-h-0 flex-col border-r border-border bg-bg-surface`}>
          <div className="border-b border-border px-4 py-3">
            <h1 className="text-base font-bold text-text-primary">UX/UI Lead Workflow</h1>
            <p className="mt-1 text-xs leading-relaxed text-text-muted">
              เส้นทางทำงานครบ loop: requirement → research → structure → design → review → handoff → QA → measure
            </p>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-2 py-2">
            <ol className="space-y-1">
              {WORKFLOW_STAGES.map((stage, index) => {
                const isActive = stage.id === activeStage.id;
                return (
                  <li key={stage.id}>
                    <button
                      type="button"
                      aria-current={isActive ? "step" : undefined}
                      onClick={() => {
                        setActiveId(stage.id);
                        setShowMobileDetail(true);
                      }}
                      className={`relative flex w-full items-start gap-2.5 rounded-md border px-2.5 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isActive
                          ? "border-accent/25 bg-accent-soft shadow-card before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-[3px] before:rounded-full before:bg-accent"
                          : "border-transparent hover:border-border hover:bg-bg-soft"
                      }`}
                    >
                      <span className={`mono mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-black ${
                        isActive ? "border-accent/25 bg-bg-surface text-accent" : "border-border bg-bg-main text-text-muted"
                      }`}>
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="mb-0.5 flex items-center gap-1.5">
                          <span className={`truncate text-sm font-bold leading-snug ${isActive ? "text-accent" : "text-text-primary"}`}>{stage.title}</span>
                          <Badge>{stage.phase}</Badge>
                        </span>
                        <span className="line-clamp-2 block text-xs leading-relaxed text-text-secondary">{stage.goal}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className={`${showMobileDetail ? "flex" : "hidden lg:flex"} min-w-0 flex-col overflow-hidden bg-bg-main`}>
          <div className="flex h-11 shrink-0 items-center border-b border-border bg-bg-surface px-3 lg:hidden">
            <button
              type="button"
              onClick={() => setShowMobileDetail(false)}
              className="inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-sm font-semibold text-text-secondary hover:bg-bg-soft"
            >
              <ArrowLeft size={15} />
              All stages
            </button>
          </div>
          <StageDetail
            stage={activeStage}
            stageNumber={activeIndex + 1}
            nextStage={nextStage}
            onNext={nextStage ? () => setActiveId(nextStage.id) : undefined}
          />
        </section>
      </div>
    </AppShell>
  );
}

function StageDetail({ stage, stageNumber, nextStage, onNext }: { stage: WorkflowStage; stageNumber: number; nextStage?: WorkflowStage; onNext?: () => void }) {
  const usefulTerms = stage.termSlugs
    .map((slug) => TERMS.find((term) => term.slug === slug))
    .filter((term) => term != null);
  const usefulTechniques = stage.techniqueSlugs
    .map((slug) => TECHNIQUES.find((technique) => technique.slug === slug))
    .filter((technique) => technique != null);
  const usefulPrompts = stage.promptIds
    .map((id) => PROMPTS.find((prompt) => prompt.id === id))
    .filter((prompt) => prompt != null);

  const checklistText = `${stage.title} — checklist\n${stage.checklist.map((item) => `- [ ] ${item}`).join("\n")}`;

  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
      <div className="mx-auto max-w-4xl space-y-4">
        <header className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
          <div className="mb-2 flex flex-wrap items-center gap-1.5">
            <Badge>Stage {stageNumber} of {WORKFLOW_STAGES.length}</Badge>
            <Badge>{stage.phase}</Badge>
          </div>
          <h2 className="text-2xl font-bold leading-tight text-text-primary">{stage.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{stage.goal}</p>
        </header>

        <InfoBlock title="When To Use">{stage.whenToUse}</InfoBlock>

        <section className="grid gap-3 xl:grid-cols-2">
          <ListBlock title="Inputs" items={stage.inputs} />
          <ListBlock title="Outputs" items={stage.outputs} strong />
        </section>

        <ListBlock title="Process" items={stage.process} ordered />

        <section className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h3 className="mono text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">Checklist</h3>
            <CopyButton text={checklistText} label="checklist" />
          </div>
          <ul className="space-y-1.5">
            {stage.checklist.map((item, index) => (
              <li key={index} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
                <span className="mono mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-success/40 bg-success-soft text-[9px] font-black text-success">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <ListBlock title="Common Mistakes" items={stage.commonMistakes} danger />

        <section className="rounded-lg border border-border bg-bg-soft p-4 shadow-card" style={{ borderLeftWidth: "3px", borderLeftColor: "var(--bb-orange)" }}>
          <h3 className="mono mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">Handoff Notes</h3>
          <p className="text-sm leading-relaxed text-text-secondary">{stage.handoffNotes}</p>
        </section>

        {usefulTerms.length > 0 && (
          <section className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
            <SectionHeader title="Useful Terms" meta={`${usefulTerms.length} terms`} />
            <div className="flex flex-wrap gap-1.5">
              {usefulTerms.map((term) => (
                <Link
                  key={term.slug}
                  href={`/terms/${term.slug}`}
                  className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-bg-main px-2.5 text-xs font-semibold text-text-secondary transition-colors hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
                >
                  <span>{term.icon}</span>
                  {term.term}
                </Link>
              ))}
            </div>
          </section>
        )}

        {usefulTechniques.length > 0 && (
          <section className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
            <SectionHeader title="Useful Techniques" meta={`${usefulTechniques.length} workflows`} />
            <div className="flex flex-wrap gap-1.5">
              {usefulTechniques.map((technique) => (
                <Link
                  key={technique.slug}
                  href="/techniques"
                  className="inline-flex h-8 items-center rounded-md border border-border bg-bg-main px-2.5 text-xs font-semibold text-text-secondary transition-colors hover:border-accent/30 hover:bg-accent-soft hover:text-accent"
                >
                  {technique.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        {usefulPrompts.length > 0 && (
          <section className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
            <SectionHeader title="Useful Prompts" meta={`${usefulPrompts.length} ready to copy`} />
            <div className="space-y-2">
              {usefulPrompts.map((prompt) => (
                <div key={prompt.id} className="flex items-center justify-between gap-2 rounded-md border border-border bg-bg-main px-3 py-2">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-text-primary">{prompt.title}</p>
                    <p className="mono text-[10px] uppercase tracking-[0.08em] text-text-muted">{prompt.audience}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1">
                    <CopyButton text={prompt.promptText} label="prompt" />
                    <Link
                      href="/prompts"
                      className="inline-flex h-8 items-center rounded-md border border-border bg-bg-surface px-2.5 text-xs font-semibold text-text-secondary hover:bg-bg-soft"
                    >
                      Open
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {nextStage && onNext && (
          <div className="flex justify-end pb-2">
            <button
              type="button"
              onClick={onNext}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-bold text-white shadow-card transition-opacity hover:opacity-90"
            >
              Next: {nextStage.title}
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: string }) {
  return (
    <section className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
      <h3 className="mono mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{children}</p>
    </section>
  );
}

function ListBlock({ title, items, ordered, danger, strong }: { title: string; items: string[]; ordered?: boolean; danger?: boolean; strong?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <section className="rounded-lg border border-border bg-bg-surface p-4 shadow-card">
      <h3 className="mono mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">{title}</h3>
      <Tag className="space-y-1.5">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className={`flex gap-2 text-sm leading-relaxed ${strong ? "font-medium text-text-primary" : "text-text-secondary"}`}>
            {ordered ? (
              <span className="mono mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent-soft text-[10px] font-black text-accent">{index + 1}</span>
            ) : (
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${danger ? "bg-danger" : strong ? "bg-primary" : "bg-text-muted"}`} />
            )}
            <span>{item}</span>
          </li>
        ))}
      </Tag>
    </section>
  );
}
