import Link from "next/link";
import {
  BookOpen,
  ClipboardList,
  Library,
  LucideIcon,
  PanelLeft,
  Search,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import type { TermCategory, TermLevel } from "@/types/playbook";
import { CATEGORIES } from "@/data/categories";
import { TERMS } from "@/data/terms";

type ActiveRoute = "playbook" | "prompts" | "techniques" | "workflow";

const navItems: Array<{ id: ActiveRoute; href: string; label: string; icon: LucideIcon }> = [
  { id: "playbook", href: "/", label: "Playbook", icon: BookOpen },
  { id: "prompts", href: "/prompts", label: "Prompts", icon: Library },
  { id: "techniques", href: "/techniques", label: "Techniques", icon: ClipboardList },
  { id: "workflow", href: "/workflow", label: "Workflow", icon: Workflow },
];

export function AppShell({
  activeRoute,
  children,
  sidebar,
  topbarSlot,
}: {
  activeRoute: ActiveRoute;
  children: ReactNode;
  sidebar?: ReactNode;
  topbarSlot?: ReactNode;
}) {
  return (
    <div className="flex h-dvh min-h-screen overflow-hidden bg-bg-main text-text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[80] focus:rounded-md focus:border focus:border-accent focus:bg-bg-surface focus:px-3 focus:py-2 focus:text-xs focus:font-semibold focus:text-accent"
      >
        Skip to main content
      </a>
      <AppSidebar activeRoute={activeRoute}>{sidebar}</AppSidebar>
      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopbar activeRoute={activeRoute}>{topbarSlot}</AppTopbar>
        <main id="main-content" tabIndex={-1} className="min-h-0 flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

export function AppSidebar({
  activeRoute,
  children,
}: {
  activeRoute: ActiveRoute;
  children?: ReactNode;
}) {
  return (
    <aside className="hidden w-[252px] shrink-0 border-r border-border bg-bg-main/92 lg:flex lg:flex-col">
      <div className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-[11px] font-black tracking-tight text-white shadow-card">
          UX
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold leading-tight text-text-primary">UX/UI Lead Playbook</p>
          <p className="mono text-[10px] uppercase leading-tight tracking-[0.08em] text-text-muted">workspace system</p>
        </div>
      </div>
      <nav aria-label="Workspace navigation" className="shrink-0 border-b border-border px-3 py-3">
        <p className="mono mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted">Workspace</p>
        <div className="space-y-0.5">
          {navItems.map(({ id, href, label, icon: Icon }) => {
            const active = activeRoute === id;
            return (
              <Link
                key={id}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative flex h-9 items-center gap-2 rounded-md px-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-bg-soft text-text-primary before:absolute before:left-0 before:top-1.5 before:h-6 before:w-[3px] before:rounded-full before:bg-primary"
                    : "text-text-secondary hover:bg-bg-soft hover:text-text-primary"
                }`}
              >
                <Icon size={15} className={active ? "text-text-primary" : "text-text-muted"} />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      {children}
    </aside>
  );
}

export function AppTopbar({ activeRoute, children }: { activeRoute: ActiveRoute; children?: ReactNode }) {
  return (
    <header className="sticky top-0 z-50 flex h-14 shrink-0 items-center gap-2 border-b border-border bg-bg-surface/94 px-3 shadow-card backdrop-blur-md sm:px-4">
      <Link href="/" className="flex items-center gap-2 rounded-md lg:hidden">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-[11px] font-black text-white shadow-card">
          UX
        </div>
        <span className="hidden text-sm font-bold text-text-primary sm:block">UX/UI Lead Playbook</span>
      </Link>
      <nav aria-label="Primary routes" className="hidden items-center gap-0.5 md:flex lg:hidden">
        {navItems.map(({ id, href, label }) => (
          <Link
            key={id}
            href={href}
            className={`rounded-md px-2.5 py-1.5 text-xs font-semibold ${
              activeRoute === id ? "bg-bg-soft text-text-primary font-bold" : "text-text-secondary hover:bg-bg-soft"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="min-w-0 flex-1">{children}</div>
      <div className="hidden items-center gap-1 md:flex">
        <span className="mono rounded-md border border-border bg-bg-soft px-2 py-1 text-[11px] font-semibold text-text-muted tabular-nums">
          {TERMS.length} terms
        </span>
      </div>
    </header>
  );
}

export function PageHeader({
  title,
  subtitle,
  count,
  countLabel,
  actions,
}: {
  title: string;
  subtitle: string;
  count?: number;
  countLabel?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-5">
      <div className="min-w-0">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h1 className="text-xl font-bold leading-tight text-text-primary">{title}</h1>
          {typeof count === "number" && (
            <span className="mono rounded-md border border-border bg-bg-soft px-2 py-1 text-[11px] font-semibold text-text-muted tabular-nums">
              {count} {countLabel}
            </span>
          )}
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-text-muted">{subtitle}</p>
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </div>
  );
}

export function SectionHeader({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="mb-2 flex items-center justify-between gap-3">
      <h2 className="text-sm font-bold text-text-primary">{title}</h2>
      {meta && <span className="mono text-[11px] font-semibold text-text-muted">{meta}</span>}
    </div>
  );
}

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-lg border border-border bg-bg-surface shadow-panel ${className}`}>{children}</section>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`rounded-md border border-border bg-bg-surface shadow-card ${className}`}>{children}</article>;
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "level" | "indigo" | "good" | "warn" | "crit" }) {
  const tones = {
    neutral: "border-border bg-bg-soft text-text-muted",
    level: "border-border-strong bg-bg-main text-text-secondary",
    indigo: "border-accent/25 bg-accent-soft text-accent",
    good: "border-success/25 bg-success-soft text-success",
    warn: "border-warning/25 bg-warning-soft text-warning",
    crit: "border-danger/25 bg-danger-soft text-danger",
  };
  return (
    <span className={`mono inline-flex h-5 items-center rounded px-1.5 text-[10px] font-semibold uppercase tracking-[0.06em] ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Chip({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  const cls = `inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border px-2.5 text-xs font-semibold transition-colors ${
    active
      ? "border-text-primary bg-text-primary text-white"
      : "border-border bg-bg-surface text-text-secondary hover:border-border-strong hover:bg-bg-soft"
  }`;
  if (!onClick) return <span className={cls}>{children}</span>;
  return (
    <button type="button" onClick={onClick} className={cls} aria-pressed={active}>
      {children}
    </button>
  );
}

export function IconButton({
  label,
  children,
  onClick,
  active,
  className = "",
}: {
  label: string;
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-surface text-text-muted transition-colors hover:bg-bg-soft hover:text-text-primary ${active ? "border-accent/30 bg-accent-soft text-accent" : ""} ${className}`}
      title={label}
    >
      {children}
    </button>
  );
}

export function LevelBadge({ level }: { level: TermLevel }) {
  const label = level === "basic" ? "Basic" : level === "intermediate" ? "Intermediate" : "Advanced";
  const tone = level === "basic" ? "good" : level === "intermediate" ? "warn" : "indigo";
  return <Badge tone={tone}>{label}</Badge>;
}

export function CategoryChip({ category, label }: { category: TermCategory; label?: string }) {
  const meta = CATEGORIES.find((c) => c.id === category);
  return <Badge>{label ?? meta?.label ?? category}</Badge>;
}

export function FilterToolbar({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex gap-1.5 overflow-x-auto border-b border-border px-4 py-2.5 ${className}`}>{children}</div>;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search",
  label = "Search",
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Search size={14} className="pointer-events-none absolute left-3 text-text-muted" />
      <input
        type="search"
        role="searchbox"
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-9 w-full rounded-md border border-border bg-bg-surface pl-8 pr-8 text-sm text-text-primary shadow-card outline-none placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-2 inline-flex h-5 w-5 items-center justify-center rounded text-text-muted hover:bg-bg-soft hover:text-text-primary"
        >
          <X size={13} />
        </button>
      )}
    </div>
  );
}

export function EmptyState({
  title = "No results",
  description,
  action,
}: {
  title?: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex min-h-52 flex-col items-center justify-center rounded-md border border-dashed border-border bg-bg-main px-4 py-8 text-center">
      <Search size={20} className="mb-3 text-text-muted" />
      <h3 className="text-sm font-bold text-text-primary">{title}</h3>
      <p className="mt-1 max-w-sm text-sm leading-relaxed text-text-muted">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function PrimaryButton({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-xs font-bold text-white shadow-card transition-colors hover:bg-primary-dark"
    >
      {children}
    </button>
  );
}

export function PromptPreview({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md border border-border bg-bg-main px-3 py-2.5">
      <p className="mono line-clamp-5 whitespace-pre-wrap text-[11px] leading-relaxed text-text-secondary">{children}</p>
    </div>
  );
}

export function CountPill({ value, label }: { value: number; label: string }) {
  return (
    <span className="mono inline-flex items-center rounded-md border border-border bg-bg-soft px-2 py-1 text-[11px] font-semibold text-text-muted tabular-nums">
      {value} {label}
    </span>
  );
}

export function SidebarCategoryNav({
  activeCategory,
  onSelect,
}: {
  activeCategory: TermCategory | "all";
  onSelect: (category: TermCategory | "all") => void;
}) {
  const counts = TERMS.reduce<Record<string, number>>((acc, term) => {
    acc[term.category] = (acc[term.category] ?? 0) + 1;
    return acc;
  }, {});
  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
      <p className="mono mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted">Term Categories</p>
      <div className="space-y-0.5">
        <CategoryNavButton active={activeCategory === "all"} label="All terms" count={TERMS.length} onClick={() => onSelect("all")} />
        {CATEGORIES.map((category) => (
          <CategoryNavButton
            key={category.id}
            active={activeCategory === category.id}
            label={category.label}
            count={counts[category.id] ?? 0}
            onClick={() => onSelect(category.id)}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryNavButton({ active, label, count, onClick }: { active: boolean; label: string; count: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex h-9 w-full items-center justify-between gap-2 rounded-md px-2.5 text-left text-sm transition-colors ${
        active
          ? "bg-bg-soft font-bold text-text-primary before:absolute before:left-0 before:top-1.5 before:h-6 before:w-[3px] before:rounded-full before:bg-primary"
          : "text-text-secondary hover:bg-bg-soft hover:text-text-primary"
      }`}
    >
      <span className="truncate pl-1">{label}</span>
      <span className="mono text-[11px] text-text-muted tabular-nums">{count}</span>
    </button>
  );
}

export function AiMark() {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-accent/20 bg-accent-soft px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-accent">
      <Sparkles size={11} />
      AI
    </span>
  );
}

export function MobileNavHint() {
  return <PanelLeft size={15} className="text-text-muted" />;
}
