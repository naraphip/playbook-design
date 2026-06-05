import type { TermCategory } from "@/types/playbook";
import { CATEGORIES } from "@/data/categories";

type Props = { activeCategory: TermCategory | "all" };

export function HeroPanel({ activeCategory }: Props) {
  const cat =
    activeCategory === "all"
      ? {
          label: "UX/UI Lead Playbook",
          icon: "📚",
          description:
            "ทุกคำศัพท์ UX/UI ที่ควรรู้ พร้อม prompt สำหรับสั่งงาน designer, developer และ AI — สำหรับ founder, PM, developer และ UX lead",
        }
      : CATEGORIES.find((c) => c.id === activeCategory) ?? CATEGORIES[0];

  return (
    <div className="rounded-2xl border border-border bg-bg-surface p-5 mb-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-2xl">
          {cat.icon}
        </div>
        <div>
          <h1 className="text-lg font-bold text-text-primary">{cat.label}</h1>
          <p className="mt-1 text-sm text-text-secondary max-w-2xl leading-relaxed">
            {cat.description}
          </p>
        </div>
      </div>
    </div>
  );
}
