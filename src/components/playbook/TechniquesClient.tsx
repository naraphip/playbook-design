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

function filterTechniques(techniques: Technique[], query: string, category: string) {
  const q = query.trim().toLowerCase();
  return techniques.filter((technique) => {
    if (category !== "all" && normalizeCategory(technique.category) !== category) return false;
    if (!q) return true;
    return [
      technique.title,
      technique.category,
      technique.useCase,
      ...technique.inputNeeded,
      ...technique.steps,
      technique.output,
      ...technique.decisionCriteria,
      technique.prompt,
      ...technique.commonMistakes,
      ...technique.tags,
      ...technique.relatedSlugs,
    ].join(" ").toLowerCase().includes(q);
  });
}

export function TechniquesClient() {
  const [query, setQuery] = useState("");
  const categories = useMemo(() => Array.from(new Set(TECHNIQUES.map((technique) => technique.category))), []);
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState(TECHNIQUES[0]?.id ?? "");
  const visible = useMemo(() => filterTechniques(TECHNIQUES, query, activeCategory), [query, activeCategory]);

  return (
    <AppShell activeRoute="techniques" topbarSlot={<SearchInput value={query} onChange={setQuery} placeholder="Search techniques, steps, outputs, criteria..." label="Search techniques" className="mx-auto max-w-2xl" />}>
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
            <Chip key={category} active={activeCategory === normalizeCategory(category)} onClick={() => setActiveCategory(normalizeCategory(category))}>
              {category}
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
            <Badge>{technique.category}</Badge>
            <Badge>{technique.difficulty}</Badge>
            <Badge>⏱ {technique.timeRequired.split("(")[0].trim()}</Badge>
          </div>
          <h2 className="text-sm font-bold text-text-primary">{technique.title}</h2>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-text-muted">{technique.useCase}</p>
        </div>
        <ChevronDown size={16} className={`mt-1 shrink-0 text-text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-border bg-bg-main px-4 py-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <MetaItem label="Time Required" value={technique.timeRequired} />
            <MetaItem label="Participants" value={technique.participants} />
          </div>
          <div className="mt-3 grid gap-3 xl:grid-cols-2">
            <ListSection title="Input Needed" items={technique.inputNeeded} />
            <TextSection title="Output" body={technique.output} />
          </div>
          <div className="mt-3">
            <ListSection title="Step-by-Step Process" items={technique.steps} ordered />
          </div>
          <div className="mt-3 grid gap-3 xl:grid-cols-2">
            <ListSection title="Decision Criteria" items={technique.decisionCriteria} />
            <ListSection title="Common Mistakes" items={technique.commonMistakes} danger />
          </div>
          <div className="mt-3">
            <TextSection title="Example Scenario" body={technique.exampleScenario} />
          </div>
          <div className="mt-3 rounded-md border border-border bg-bg-surface p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <h3 className="mono text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">Template</h3>
              <CopyButton text={technique.template} label="template" />
            </div>
            <p className="mono whitespace-pre-wrap text-[11px] leading-relaxed text-text-secondary">{technique.template}</p>
          </div>
          <div className="mt-3 rounded-md border border-border bg-bg-surface p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <h3 className="mono text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">AI Prompt</h3>
              <CopyButton text={technique.prompt} label="prompt" />
            </div>
            <p className="mono whitespace-pre-wrap text-[11px] leading-relaxed text-text-secondary">{technique.prompt}</p>
          </div>
          {technique.relatedSlugs.length > 0 && (
            <div className="mt-3">
              <ListSection title="Related Terms" items={technique.relatedSlugs.slice(0, 6)} compact />
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-bg-surface px-3 py-2">
      <p className="mono text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted">{label}</p>
      <p className="mt-0.5 text-xs leading-relaxed text-text-secondary">{value}</p>
    </div>
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
            {ordered ? (
              <span className="mono mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent-soft text-[10px] font-black text-accent">{index + 1}</span>
            ) : (
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${danger ? "bg-danger" : "bg-text-muted"}`} />
            )}
            <span>{item}</span>
          </li>
        ))}
      </Tag>
    </section>
  );
}
