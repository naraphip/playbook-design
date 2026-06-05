import type { TermLevel } from "@/types/playbook";

type Props = { level: TermLevel };

const config: Record<TermLevel, { label: string; className: string }> = {
  basic: {
    label: "Basic",
    className: "bg-success-soft text-success border border-success/30",
  },
  intermediate: {
    label: "Intermediate",
    className: "bg-warning-soft text-warning border border-warning/30",
  },
  advanced: {
    label: "Advanced",
    className: "bg-primary-soft text-primary border border-primary-border",
  },
};

export function LevelBadge({ level }: Props) {
  const { label, className } = config[level];
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${className}`}>
      {label}
    </span>
  );
}
