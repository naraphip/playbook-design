import type { VisualType } from "@/types/playbook";
import { DemoRenderer } from "./demos/DemoRenderer";

type Props = { visualType: VisualType };

export function VisualDemo({ visualType }: Props) {
  return <DemoRenderer type={visualType} />;
}
