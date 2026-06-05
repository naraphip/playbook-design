"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { TECHNIQUES } from "@/data/techniques";
import type { Technique } from "@/types/playbook";
import { AppShell, Badge, Card, Chip, EmptyState, FilterToolbar, PageHeader, PrimaryButton, SearchInput } from "./workspace";
import { CopyButton } from "./CopyButton";

function normalizeCategory(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function categoryLabel(category: string) {
  return category
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function filterTechniques(techniques: Technique[], query: string, category: string) {
  const q = query.trim().toLowerCase();
  return techniques.filter((technique) => {
    if (category !== "all" && normalizeCategory(technique.category) !== category) return false;
    if (!q) return true;
    return [
      technique.title,
      technique.category,
      technique.whatItIs,
      ...technique.whenToUse,
      ...technique.howToDoIt,
      technique.examplePrompt,
      ...technique.commonMistakes,
      ...technique.tags,
      ...(technique.relatedTerms ?? []),
    ].join(" ").toLowerCase().includes(q);
  });
}

export function TechniquesClient() {
  const [query, setQuery] = useState("");
  const categories = useMemo(() => Array.from(new Set(TECHNIQUES.map((technique) => normalizeCategory(technique.category)))), []);
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState(TECHNIQUES[0]?.id ?? "");
  const visible = useMemo(() => filterTechniques(TECHNIQUES, query, activeCategory), [query, activeCategory]);

  return (
    <AppShell activeRoute="techniques" topbarSlot={<SearchInput value={query} onChange={setQuery} placeholder="Search techniques, deliverables, mistakes..." label="Search techniques" className="mx-auto max-w-2xl" />}>
      <div className="flex h-full min-h-0 flex-col overflow-hidden bg-bg-main">
        <PageHeader
          title="UX/UI Techniques"
          subtitle="Lead-ready workflows for research, critique, accessibility, conversion review, handoff and product decision-making"
          count={TECHNIQUES.length}
          countLabel="techniques"
        />
        <FilterToolbar>
          <Chip active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
            All <span className="mono">{TECHNIQUES.length}</span>
          </Chip>
          {categories.map((category) => (
            <Chip key={category} active={activeCategory === category} onClick={() => setActiveCategory(category)}>
              {categoryLabel(category)}
            </Chip>
          ))}
        </FilterToolbar>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
          {visible.length === 0 ? (
            <EmptyState
              title="No matching techniques"
              description="Clear the search or category filter to return to the lead workflow list."
              action={<PrimaryButton onClick={() => { setQuery(""); setActiveCategory("all"); }}>Clear filters</PrimaryButton>}
            />
          ) : (
            <div className="mx-auto grid max-w-5xl gap-2">
              {visible.map((technique, index) => (
                <TechniqueAccordion
                  key={technique.id}
                  technique={technique}
                  open={openId === technique.id || (!openId && index === 0)}
                  onToggle={() => setOpenId(openId === technique.id ? "" : technique.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}

function TechniqueAccordion({ technique, open, onToggle }: { technique: Technique; open: boolean; onToggle: () => void }) {
  const deliverable = getDeliverable(technique);
  return (
    <Card className={`overflow-hidden border-l-[3px] ${open ? "border-l-accent" : "border-l-border-strong"}`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-bg-soft"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-1.5">
            <Badge>{categoryLabel(normalizeCategory(technique.category))}</Badge>
            <Badge>{technique.tags.slice(0, 2).join(" / ")}</Badge>
          </div>
          <h2 className="text-sm font-bold text-text-primary">{technique.title}</h2>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-text-muted">{technique.whatItIs}</p>
        </div>
        <ChevronDown size={16} className={`mt-1 shrink-0 text-text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-border bg-bg-main px-4 py-4">
          <div className="grid gap-3 xl:grid-cols-2">
            <TextSection title="What It Is" body={technique.whatItIs} />
            <ListSection title="When To Use" items={technique.whenToUse} />
            <ListSection title="How To Run" items={technique.howToDoIt} ordered />
            <TextSection title="Deliverable" body={deliverable} />
          </div>
          <div className="mt-3 rounded-md border border-border bg-bg-surface p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <h3 className="mono text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">Example Prompt</h3>
              <CopyButton text={technique.examplePrompt} label="prompt" />
            </div>
            <p className="mono whitespace-pre-wrap text-[11px] leading-relaxed text-text-secondary">{technique.examplePrompt}</p>
          </div>
          <div className="mt-3 grid gap-3 xl:grid-cols-2">
            <ListSection title="Common Mistakes" items={technique.commonMistakes} danger />
            <ListSection title="Related Terms" items={(technique.relatedTerms && technique.relatedTerms.length > 0 ? technique.relatedTerms : technique.tags).slice(0, 6)} compact />
          </div>
        </div>
      )}
    </Card>
  );
}

function TextSection({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-md border border-border bg-bg-surface p-3">
      <h3 className="mono mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{body}</p>
    </section>
  );
}

function ListSection({ title, items, ordered, danger, compact }: { title: string; items: string[]; ordered?: boolean; danger?: boolean; compact?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <section className="rounded-md border border-border bg-bg-surface p-3">
      <h3 className="mono mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">{title}</h3>
      <Tag className={`grid ${compact ? "gap-1" : "gap-1.5"}`}>
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${danger ? "bg-danger" : "bg-text-muted"}`} />
            <span>{item}</span>
          </li>
        ))}
      </Tag>
    </section>
  );
}

function getDeliverable(technique: Technique) {
  const category = technique.category.toLowerCase();
  if (category.includes("research")) return "Finding summary with participant evidence, severity, recommendation, and decision needed from the team.";
  if (category.includes("accessibility")) return "Prioritized accessibility report with WCAG mapping, reproduction steps, and implementation-ready fixes.";
  if (category.includes("handoff") || category.includes("lead")) return "Decision log, acceptance criteria, owner, open questions, and component/state checklist.";
  if (category.includes("conversion")) return "Impact/effort backlog with hypothesis, metric, experiment idea, and copy/layout changes.";
  return "Structured review notes with severity, rationale, owner, and next action.";
}
