import Link from "next/link";
import { SearchInput } from "./SearchInput";

type Props = {
  searchQuery: string;
  onSearch: (v: string) => void;
  totalCount: number;
};

export function PlaybookTopbar({ searchQuery, onSearch, totalCount }: Props) {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b border-border bg-bg-surface/95 px-4 backdrop-blur-sm shadow-sm shrink-0">
      <Link
        href="/"
        className="flex items-center gap-2 shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center shadow-sm">
          <span className="text-xs font-bold text-white tracking-tight">UX</span>
        </div>
        <span className="hidden sm:block text-sm font-bold text-text-primary">
          UX/UI Lead Playbook
        </span>
      </Link>

      <div className="flex-1 max-w-sm">
        <SearchInput value={searchQuery} onChange={onSearch} />
      </div>

      <span className="hidden md:block shrink-0 text-xs text-text-muted tabular-nums">
        {totalCount} terms
      </span>

      <nav className="flex items-center gap-0.5 shrink-0 ml-auto sm:ml-0">
        {[
          { href: "/", label: "Playbook" },
          { href: "/prompts", label: "Prompts" },
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
  );
}
