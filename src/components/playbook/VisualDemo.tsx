import type { DemoData, VisualDemoType } from "@/types/playbook";
import { DemoRenderer } from "./demos/DemoRenderer";

type Props = { visualDemo: VisualDemoType; demoData?: DemoData };

export function VisualDemo({ visualDemo, demoData }: Props) {
  return <DemoRenderer type={visualDemo} data={demoData} />;
}
