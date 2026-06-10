"use client";

import { useMemo, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import type { PromptAudience, PromptItem } from "@/types/playbook";
import { PROMPTS } from "@/data/prompts";
import {
  AppShell,
  Badge,
  Card,
  Chip,
  EmptyState,
  FilterToolbar,
  LevelBadge,
  PageHeader,
  PrimaryButton,
  PromptPreview,
  SearchInput,
} from "./workspace";
import { CopyButton } from "./CopyButton";

const AUDIENCE_META: Record<PromptAudience, { label: string; description: string }> = {
  designer: { label: "For Designer", description: "สั่งงาน designer ให้ deliver ตรง design intent" },
  developer: { label: "For Developer", description: "แปลง UX/UI intent เป็น implementation ที่ชัดเจน" },
  "claude-code": { label: "For Claude Code", description: "Prompt สำหรับ coding agent และ UI refactor" },
  "ux-review": { label: "For UX Review", description: "Review flow, hierarchy, friction และ usability" },
  accessibility: { label: "For Accessibility", description: "Audit keyboard, ARIA, contrast และ semantic structure" },
  conversion: { label: "For Conversion", description: "Optimize landing, pricing, signup และ checkout" },
  "ai-image": { label: "For AI Image", description: "Generate product visuals and UI mockups with constraints" },
};

const AUDIENCE_ORDER: Array<PromptAudience | "all"> = ["all", "designer", "developer", "claude-code", "ux-review", "accessibility", "conversion", "ai-image"];

function filterPrompts(prompts: PromptItem[], query: string, audience: PromptAudience | "all") {
  const q = query.trim().toLowerCase();
  return prompts.filter((prompt) => {
    if (audience !== "all" && prompt.audience !== audience) return false;
    if (!q) return true;
    return [
      prompt.title,
      AUDIENCE_META[prompt.audience].label,
      prompt.level,
      prompt.useCase,
      prompt.promptText,
      ...prompt.inputRequired,
      ...prompt.constraints,
      ...prompt.tags,
    ].join(" ").toLowerCase().includes(q);
  });
}

export function PromptLibraryClient() {
  const [query, setQuery] = useState("");
  const [activeAudience, setActiveAudience] = useState<PromptAudience | "all">("all");
  const [openPrompt, setOpenPrompt] = useState<PromptItem | null>(null);

  const visible = useMemo(() => filterPrompts(PROMPTS, query, activeAudience), [query, activeAudience]);
  const counts = useMemo(() => {
    return PROMPTS.reduce<Record<string, number>>((acc, prompt) => {
      acc[prompt.audience] = (acc[prompt.audience] ?? 0) + 1;
      return acc;
    }, {});
  }, []);

  return (
    <AppShell activeRoute="prompts" topbarSlot={<SearchInput value={query} onChange={setQuery} placeholder="Search prompt title, use case, constraints..." label="Search prompts" className="mx-auto max-w-2xl" />}>
      <div className="flex h-full min-h-0 flex-col overflow-hidden bg-bg-main">
        <PageHeader
          title="Prompt Library"
          subtitle="Prompt พร้อมใช้สำหรับ designer, developer, Claude Code, UX review, accessibility, conversion และ AI image tools"
          count={PROMPTS.length}
          countLabel="prompts"
        />

        <FilterToolbar>
          {AUDIENCE_ORDER.map((audience) => (
            <Chip key={audience} active={activeAudience === audience} onClick={() => setActiveAudience(audience)}>
              {audience === "all" ? "All prompts" : AUDIENCE_META[audience].label}
              <span className="mono tabular-nums">{audience === "all" ? PROMPTS.length : counts[audience] ?? 0}</span>
            </Chip>
          ))}
        </FilterToolbar>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
          {visible.length === 0 ? (
            <EmptyState
              title="No matching prompts"
              description="Try a different audience, tag, use case, or prompt keyword."
              action={<PrimaryButton onClick={() => { setQuery(""); setActiveAudience("all"); }}>Clear filters</PrimaryButton>}
            />
          ) : (
            <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
              {visible.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} onOpen={() => setOpenPrompt(prompt)} />
              ))}
            </div>
          )}
        </div>

        {openPrompt && <PromptDrawer prompt={openPrompt} onClose={() => setOpenPrompt(null)} />}
      </div>
    </AppShell>
  );
}

function PromptCard({ prompt, onOpen }: { prompt: PromptItem; onOpen: () => void }) {
  const meta = AUDIENCE_META[prompt.audience];
  return (
    <Card className="flex flex-col p-3">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="mb-1 flex flex-wrap items-center gap-1.5">
            <Badge>{meta.label}</Badge>
            <LevelBadge level={prompt.level} />
          </div>
          <h2 className="line-clamp-2 text-sm font-bold leading-snug text-text-primary">{prompt.title}</h2>
          <p className="mt-1 line-clamp-2 text-xs text-text-muted">{prompt.useCase}</p>
        </div>
      </div>

      <div className="min-h-0 flex-1">
        <PromptPreview>{prompt.promptText}</PromptPreview>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2">
        <div className="flex min-w-0 flex-wrap gap-1">
          {prompt.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="mono text-[10px] text-text-muted">#{tag}</span>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <CopyButton text={prompt.promptText} label="prompt" />
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex h-8 items-center gap-1 rounded-md border border-border bg-bg-surface px-2.5 text-xs font-semibold text-text-secondary hover:bg-bg-soft"
          >
            <ExternalLink size={13} />
            Open
          </button>
        </div>
      </div>
    </Card>
  );
}

function PromptDrawer({ prompt, onClose }: { prompt: PromptItem; onClose: () => void }) {
  const meta = AUDIENCE_META[prompt.audience];
  return (
    <div className="fixed inset-0 z-[70] bg-text-primary/24" role="presentation" onClick={onClose}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="prompt-drawer-title"
        className="ml-auto flex h-full w-full max-w-2xl flex-col border-l border-border bg-bg-surface shadow-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-border px-4">
          <div className="min-w-0">
            <p id="prompt-drawer-title" className="truncate text-sm font-bold text-text-primary">{prompt.title}</p>
            <p className="mono text-[10px] uppercase tracking-[0.08em] text-text-muted">{meta.label}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close prompt detail" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-surface text-text-muted hover:bg-bg-soft">
            <X size={16} />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <div className="mb-3 flex flex-wrap gap-1.5">
            <Badge>{meta.label}</Badge>
            <LevelBadge level={prompt.level} />
            {prompt.tags.map((tag) => <Badge key={tag}>#{tag}</Badge>)}
          </div>

          <DrawerSection title="Use Case">
            <p className="text-sm leading-relaxed text-text-secondary">{prompt.useCase}</p>
          </DrawerSection>

          <DrawerSection title="Input Required">
            <DrawerList items={prompt.inputRequired} />
          </DrawerSection>

          <DrawerSection title="Prompt">
            <div className="rounded-md border border-border bg-bg-main p-4">
              <p className="mono whitespace-pre-wrap text-sm leading-relaxed text-text-secondary">{prompt.promptText}</p>
            </div>
          </DrawerSection>

          <DrawerSection title="Output Format">
            <p className="text-sm leading-relaxed text-text-secondary">{prompt.outputFormat}</p>
          </DrawerSection>

          <DrawerSection title="Constraints">
            <DrawerList items={prompt.constraints} />
          </DrawerSection>

          <DrawerSection title="Best Used With">
            <div className="flex flex-wrap gap-1.5">
              {prompt.bestUsedWith.map((tool) => <Badge key={tool}>{tool}</Badge>)}
            </div>
          </DrawerSection>

          {prompt.exampleInput && (
            <DrawerSection title="Example Input">
              <p className="mono rounded-md border border-border bg-bg-main p-3 text-xs leading-relaxed text-text-secondary">{prompt.exampleInput}</p>
            </DrawerSection>
          )}

          {prompt.expectedOutputPreview && (
            <DrawerSection title="Expected Output Preview">
              <p className="mono rounded-md border border-border bg-bg-main p-3 text-xs leading-relaxed text-text-muted">{prompt.expectedOutputPreview}</p>
            </DrawerSection>
          )}
        </div>
        <div className="flex shrink-0 justify-end border-t border-border bg-bg-main px-4 py-3">
          <CopyButton text={prompt.promptText} label="prompt" />
        </div>
      </aside>
    </div>
  );
}

function DrawerSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-4">
      <h3 className="mono mb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">{title}</h3>
      {children}
    </section>
  );
}

function DrawerList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-1">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 text-sm leading-relaxed text-text-secondary">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
