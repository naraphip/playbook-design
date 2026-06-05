"use client";

import { useMemo, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import type { PromptItem } from "@/types/playbook";
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

const USE_CASE_META: Record<PromptItem["useCase"], { label: string; description: string }> = {
  designer: { label: "For Designer", description: "สั่งงาน designer ให้ deliver ตรง design intent" },
  developer: { label: "For Developer", description: "แปลง UX/UI intent เป็น implementation ที่ชัดเจน" },
  "claude-code": { label: "For Claude Code", description: "Prompt สำหรับ coding agent และ UI refactor" },
  "ux-review": { label: "For UX Review", description: "Review flow, hierarchy, friction และ usability" },
  accessibility: { label: "For Accessibility", description: "Audit keyboard, ARIA, contrast และ semantic structure" },
  conversion: { label: "For Conversion", description: "Optimize landing, pricing, signup และ checkout" },
  "ai-image": { label: "For AI Image", description: "Generate product visuals and UI mockups with constraints" },
};

const USE_CASE_ORDER: Array<PromptItem["useCase"] | "all"> = ["all", "designer", "developer", "claude-code", "ux-review", "accessibility", "conversion", "ai-image"];

function filterPrompts(prompts: PromptItem[], query: string, useCase: PromptItem["useCase"] | "all") {
  const q = query.trim().toLowerCase();
  return prompts.filter((prompt) => {
    if (useCase !== "all" && prompt.useCase !== useCase) return false;
    if (!q) return true;
    return [prompt.title, USE_CASE_META[prompt.useCase].label, prompt.level, prompt.prompt, ...prompt.tags].join(" ").toLowerCase().includes(q);
  });
}

export function PromptLibraryClient() {
  const [query, setQuery] = useState("");
  const [activeUseCase, setActiveUseCase] = useState<PromptItem["useCase"] | "all">("all");
  const [openPrompt, setOpenPrompt] = useState<PromptItem | null>(null);

  const visible = useMemo(() => filterPrompts(PROMPTS, query, activeUseCase), [query, activeUseCase]);
  const counts = useMemo(() => {
    return PROMPTS.reduce<Record<string, number>>((acc, prompt) => {
      acc[prompt.useCase] = (acc[prompt.useCase] ?? 0) + 1;
      return acc;
    }, {});
  }, []);

  return (
    <AppShell activeRoute="prompts" topbarSlot={<SearchInput value={query} onChange={setQuery} placeholder="Search prompt title, tags, preview..." label="Search prompts" className="mx-auto max-w-2xl" />}>
      <div className="flex h-full min-h-0 flex-col overflow-hidden bg-bg-main">
        <PageHeader
          title="Prompt Library"
          subtitle="Prompt พร้อมใช้สำหรับ designer, developer, Claude Code, UX review, accessibility, conversion และ AI image tools"
          count={PROMPTS.length}
          countLabel="prompts"
        />

        <FilterToolbar>
          {USE_CASE_ORDER.map((useCase) => (
            <Chip key={useCase} active={activeUseCase === useCase} onClick={() => setActiveUseCase(useCase)}>
              {useCase === "all" ? "All prompts" : USE_CASE_META[useCase].label}
              <span className="mono tabular-nums">{useCase === "all" ? PROMPTS.length : counts[useCase] ?? 0}</span>
            </Chip>
          ))}
        </FilterToolbar>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
          {visible.length === 0 ? (
            <EmptyState
              title="No matching prompts"
              description="Try a different use case, tag, or prompt keyword."
              action={<PrimaryButton onClick={() => { setQuery(""); setActiveUseCase("all"); }}>Clear filters</PrimaryButton>}
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
  const meta = USE_CASE_META[prompt.useCase];
  return (
    <Card className="flex flex-col p-3">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="mb-1 flex flex-wrap items-center gap-1.5">
            <Badge>{meta.label}</Badge>
            <LevelBadge level={prompt.level} />
          </div>
          <h2 className="line-clamp-2 text-sm font-bold leading-snug text-text-primary">{prompt.title}</h2>
          <p className="mt-1 line-clamp-1 text-xs text-text-muted">{meta.description}</p>
        </div>
      </div>

      <div className="min-h-0 flex-1">
        <PromptPreview>{prompt.prompt}</PromptPreview>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2">
        <div className="flex min-w-0 flex-wrap gap-1">
          {prompt.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="mono text-[10px] text-text-muted">#{tag}</span>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <CopyButton text={prompt.prompt} label="prompt" />
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
  const meta = USE_CASE_META[prompt.useCase];
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
          <div className="rounded-md border border-border bg-bg-main p-4">
            <p className="mono whitespace-pre-wrap text-sm leading-relaxed text-text-secondary">{prompt.prompt}</p>
          </div>
        </div>
        <div className="flex shrink-0 justify-end border-t border-border bg-bg-main px-4 py-3">
          <CopyButton text={prompt.prompt} label="prompt" />
        </div>
      </aside>
    </div>
  );
}
