"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { TermCategory, UXTerm } from "@/types/playbook";
import { TERMS } from "@/data/terms";
import { CATEGORIES } from "@/data/categories";
import {
  AppShell,
  Chip,
  CountPill,
  EmptyState,
  FilterToolbar,
  PrimaryButton,
  SearchInput,
  SidebarCategoryNav,
} from "./workspace";
import { TermRow } from "./TermRow";
import { TermDetailPanel } from "./TermDetailPanel";

function searchTerms(terms: UXTerm[], q: string): UXTerm[] {
  const query = q.toLowerCase().trim();
  if (!query) return terms;
  return terms.filter((t) => {
    const haystack = [
      t.term,
      ...(t.aliases ?? []),
      t.shortDefinition,
      t.fullDefinition,
      t.whyItMatters,
      ...t.examples,
      ...t.prompts,
      ...t.tags,
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

export function PlaybookClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<TermCategory | "all">("all");
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  useEffect(() => {
    const tid = setTimeout(() => {
      try {
        const savedCat = localStorage.getItem("playbook-category") as TermCategory | "all" | null;
        if (savedCat === "all") setActiveCategory("all");
        else if (savedCat && CATEGORIES.some((category) => category.id === savedCat)) setActiveCategory(savedCat);
        const savedBookmarks = localStorage.getItem("playbook-bookmarks");
        if (savedBookmarks) setBookmarks(new Set(JSON.parse(savedBookmarks)));
      } catch {
        /* ignore persisted preference failures */
      }
    }, 0);
    return () => clearTimeout(tid);
  }, []);

  const filtered = useMemo(() => {
    const byCat = activeCategory === "all" ? TERMS : TERMS.filter((t) => t.category === activeCategory);
    return searchTerms(byCat, query);
  }, [activeCategory, query]);

  const selectedTerm = useMemo(() => {
    if (filtered.length === 0) return null;
    return filtered.find((term) => term.slug === selectedSlug) ?? filtered[0];
  }, [filtered, selectedSlug]);

  const handleCategorySelect = useCallback((cat: TermCategory | "all") => {
    setActiveCategory(cat);
    setQuery("");
    setShowMobileDetail(false);
    try {
      localStorage.setItem("playbook-category", cat);
    } catch {
      /* ignore */
    }
  }, []);

  const handleBookmark = useCallback((slug: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      try {
        localStorage.setItem("playbook-bookmarks", JSON.stringify([...next]));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const handleSelectTerm = useCallback((term: UXTerm) => {
    setSelectedSlug(term.slug);
    setShowMobileDetail(true);
  }, []);

  const handleClear = useCallback(() => {
    setQuery("");
    setActiveCategory("all");
    setShowMobileDetail(false);
    try {
      localStorage.setItem("playbook-category", "all");
    } catch {
      /* ignore */
    }
  }, []);

  const activeCatMeta = activeCategory === "all" ? null : CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <AppShell
      activeRoute="playbook"
      sidebar={<SidebarCategoryNav activeCategory={activeCategory} onSelect={handleCategorySelect} />}
      topbarSlot={
        <div className="mx-auto flex max-w-2xl items-center gap-2">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search terms, aliases, definitions, prompts..."
            label="Search playbook"
            className="min-w-0 flex-1"
          />
        </div>
      }
    >
      <div className="grid h-full min-h-0 grid-cols-1 overflow-hidden lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[400px_minmax(0,1fr)]">
        <section className={`${showMobileDetail ? "hidden lg:flex" : "flex"} min-h-0 flex-col border-r border-border bg-bg-surface`}>
          <FilterToolbar className="lg:hidden">
            <Chip active={activeCategory === "all"} onClick={() => handleCategorySelect("all")}>
              All <span className="mono tabular-nums">{TERMS.length}</span>
            </Chip>
            {CATEGORIES.map((category) => (
              <Chip key={category.id} active={activeCategory === category.id} onClick={() => handleCategorySelect(category.id)}>
                {category.label}
              </Chip>
            ))}
          </FilterToolbar>

          <div className="border-b border-border px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h1 className="text-base font-bold text-text-primary">{activeCatMeta?.label ?? "All terms"}</h1>
                  <CountPill value={filtered.length} label="visible" />
                </div>
                <p className="line-clamp-2 text-xs leading-relaxed text-text-muted">
                  {activeCatMeta?.description ?? "Compact UX/UI Lead reference with prompts, demos, and practical implementation language."}
                </p>
              </div>
              {(query || activeCategory !== "all") && (
                <button type="button" onClick={handleClear} className="h-8 shrink-0 rounded-md border border-border bg-bg-surface px-2.5 text-xs font-bold text-text-secondary hover:bg-bg-soft">
                  Reset
                </button>
              )}
            </div>
            <div className="mt-3 lg:hidden">
              <SearchInput value={query} onChange={setQuery} placeholder="Search playbook..." label="Search playbook mobile" />
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-2 py-2">
            {filtered.length === 0 ? (
              <div className="p-2">
                <EmptyState
                  title="No matching terms"
                  description={`No terms match "${query}". Search covers titles, aliases, definitions, tags, and prompt examples.`}
                  action={<PrimaryButton onClick={handleClear}>Clear filters</PrimaryButton>}
                />
              </div>
            ) : (
              <div className="space-y-1">
                {filtered.map((term) => (
                  <TermRow
                    key={term.id}
                    term={term}
                    isSelected={selectedTerm?.id === term.id}
                    isBookmarked={bookmarks.has(term.slug)}
                    onSelect={handleSelectTerm}
                    onBookmark={handleBookmark}
                  />
                ))}
              </div>
            )}
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
              Back to list
            </button>
          </div>
          {selectedTerm ? (
            <TermDetailPanel term={selectedTerm} isBookmarked={bookmarks.has(selectedTerm.slug)} onBookmark={handleBookmark} />
          ) : (
            <div className="p-4">
              <EmptyState title="No terms visible" description="Clear the current search or category filter to show term details." action={<PrimaryButton onClick={handleClear}>Reset</PrimaryButton>} />
            </div>
          )}
        </section>
      </div>
    </AppShell>
  );
}
