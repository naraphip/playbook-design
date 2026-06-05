import type { TermLevel } from "@/types/playbook";
import { LevelBadge as WorkspaceLevelBadge } from "./workspace";

type Props = { level: TermLevel };

export function LevelBadge({ level }: Props) {
  return <WorkspaceLevelBadge level={level} />;
}
