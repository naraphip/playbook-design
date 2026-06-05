import type { TermCategory } from "@/types/playbook";

type Props = { category: TermCategory; label?: string };

const config: Record<TermCategory, string> = {
  ui:              "bg-blue-50 text-blue-700 border-blue-200",
  style:           "bg-pink-50 text-pink-700 border-pink-200",
  ux:              "bg-primary-soft text-primary border-primary-border",
  css:             "bg-orange-50 text-orange-700 border-orange-200",
  lead:            "bg-cyan-50 text-cyan-700 border-cyan-200",
  "ai-prompting":  "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
  research:        "bg-teal-50 text-teal-700 border-teal-200",
  accessibility:   "bg-success-soft text-success border-success/30",
  conversion:      "bg-accent-soft text-accent border-accent-border",
  "design-system": "bg-indigo-50 text-indigo-700 border-indigo-200",
};

export function CategoryBadge({ category, label }: Props) {
  const cls = config[category] ?? "bg-bg-soft text-text-secondary border-border";
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium border ${cls}`}>
      {label ?? category}
    </span>
  );
}
