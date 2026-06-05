import type { TermCategory } from "@/types/playbook";
import { CategoryChip } from "./workspace";

type Props = { category: TermCategory; label?: string };

export function CategoryBadge({ category, label }: Props) {
  return <CategoryChip category={category} label={label} />;
}
