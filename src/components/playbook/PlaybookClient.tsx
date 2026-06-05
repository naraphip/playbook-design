"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import type { TermCategory, UXTerm } from "@/types/playbook";
import { TERMS } from "@/data/terms";
import { CATEGORIES } from "@/data/categories";
import { PlaybookTopbar } from "./PlaybookTopbar";
import { CategorySidebar } from "./CategorySidebar";
import { TermRow } from "./TermRow";
import { TermDetailPanel } from "./TermDetailPanel";
import { EmptyState } from "./EmptyState";
import { SearchInput } from "./SearchInput";

function searchTerms(terms: UXTerm[], q: string): UXTerm[] {
  const query = q.toLowerCase().trim();
  if (!query) return terms;
  return terms.filter(
    (t) =>
      t.term.toLowerCase().includes(query) ||
      t.shortDefinition.toLowerCase().includes(query) ||
      t.fullDefinition.toLowerCase().includes(query) ||
      t.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      t.prompts.some((p) => p.toLowerCase().includes(query))
  );
}

export function PlaybookClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<TermCategory | "all">("all");
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [selectedTerm, setSelectedTerm] = useState<UXTerm | null>(null);
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  // Load persisted state after mount via async callback (hydration-safe, avoids set-state-in-effect rule)
  useEffect(() => {
    const tid = setTimeout(() => {
      try {
        const savedCat = localStorage.getItem("playbook-category") as TermCategory | "all";
        if (savedCat) setActiveCategory(savedCat);
        const savedBookmarks = localStorage.getItem("playbook-bookmarks");
        if (savedBookmarks) setBookmarks(new Set(JSON.parse(savedBookmarks)));
      } catch { /* ignore */ }
    }, 0);
    return () => clearTimeout(tid);
  }, []);

  const handleCategorySelect = useCallback((cat: TermCategory | "all") => {
    setActiveCategory(cat);
    setQuery("");
    setSelectedTerm(null);
    setShowMobileDetail(false);
    try { localStorage.setItem("playbook-category", cat); } catch { /* ignore */ }
  }, []);

  const handleBookmark = useCallback((slug: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      try { localStorage.setItem("playbook-bookmarks", JSON.stringify([...next])); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const handleSelectTerm = useCallback((term: UXTerm) => {
    setSelectedTerm(term);
    setShowMobileDetail(true);
  }, []);

  const handleBackMobile = useCallback(() => {
    setShowMobileDetail(false);
  }, []);

  const filtered = useMemo(() => {
    const byCat = activeCategory === "all" ? TERMS : TERMS.filter((t) => t.category === activeCategory);
    return searchTerms(byCat, query);
  }, [activeCategory, query]);

  const handleClear = useCallback(() => {
    setQuery("");
    setActiveCategory("all");
    try { localStorage.setItem("playbook-category", "all"); } catch { /* ignore */ }
  }, []);

  const activeCatMeta = activeCategory === "all"
    ? null
    : CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="h-screen flex flex-col bg-bg-main overflow-hidden">
      <PlaybookTopbar
        searchQuery={query}
        onSearch={setQuery}
        totalCount={TERMS.length}
      />

      <div className="flex flex-1 min-h-0">
        {/* Left sidebar — desktop only */}
        <aside className="hidden lg:flex flex-col w-56 shrink-0 border-r border-border bg-bg-surface overflow-y-auto">
          <CategorySidebar activeCategory={activeCategory} onSelect={handleCategorySelect} />
        </aside>

        {/* Center list */}
        <div className={`flex flex-col border-r border-border bg-bg-surface
          ${showMobileDetail ? "hidden lg:flex" : "flex"}
          ${selectedTerm ? "w-full lg:w-80 xl:w-96 lg:shrink-0" : "flex-1"}
        `}>
          {/* Mobile category chips */}
          <div className="lg:hidden flex overflow-x-auto gap-1.5 px-3 py-2.5 border-b border-border shrink-0">
            <button
              onClick={() => handleCategorySelect("all")}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeCategory === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-bg-soft text-text-secondary hover:bg-bg-hover"
              }`}
            >
              All ({TERMS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-bg-soft text-text-secondary hover:bg-bg-hover"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile search */}
          <div className="lg:hidden px-3 py-2 border-b border-border shrink-0">
            <SearchInput value={query} onChange={setQuery} />
          </div>

          {/* List header */}
          <div className="px-4 py-2.5 border-b border-border shrink-0">
            <div className="flex items-center justify-between">
              <p className="text-xs text-text-muted">
                {activeCatMeta && (
                  <span className="mr-1.5">{activeCatMeta.icon}</span>
                )}
                <span className="font-semibold text-text-primary">{filtered.length}</span>
                {" "}
                {activeCategory === "all" ? "terms total" : "terms"}
                {query && (
                  <span className="ml-1 text-text-muted">
                    for &quot;{query}&quot;
                  </span>
                )}
              </p>
              {(query || activeCategory !== "all") && (
                <button
                  onClick={handleClear}
                  className="text-xs text-text-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Term list */}
          <div className="flex-1 overflow-y-auto px-2 py-2">
            {filtered.length === 0 ? (
              <div className="px-2 py-6">
                <EmptyState query={query} onClear={handleClear} />
              </div>
            ) : (
              <div className="space-y-0.5">
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
        </div>

        {/* Right detail panel */}
        {selectedTerm ? (
          <div className={`flex-1 min-w-0 flex flex-col overflow-hidden bg-bg-main
            ${showMobileDetail ? "flex" : "hidden lg:flex"}
          `}>
            {/* Mobile back button */}
            <div className="lg:hidden flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-surface shrink-0">
              <button
                onClick={handleBackMobile}
                className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1 pr-2"
              >
                <ArrowLeft size={15} />
                Back to list
              </button>
            </div>
            <TermDetailPanel
              term={selectedTerm}
              isBookmarked={bookmarks.has(selectedTerm.slug)}
              onBookmark={handleBookmark}
            />
          </div>
        ) : (
          /* Empty state — desktop when nothing selected */
          <div className="hidden lg:flex flex-1 items-center justify-center bg-bg-main">
            <div className="text-center px-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl select-none">📖</span>
              </div>
              <p className="text-sm font-semibold text-text-primary mb-1">Select a term</p>
              <p className="text-xs text-text-muted max-w-[200px] leading-relaxed">
                Click any term in the list to view its definition, prompts, and examples
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
