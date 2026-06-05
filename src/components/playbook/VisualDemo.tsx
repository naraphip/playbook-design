import type { VisualType } from "@/types/playbook";
import { CtaDemo } from "./visuals/CtaDemo";
import { NavbarDemo } from "./visuals/NavbarDemo";
import { SidebarDemo } from "./visuals/SidebarDemo";
import { ModalToastDemo } from "./visuals/ModalToastDemo";
import { HeroDemo } from "./visuals/HeroDemo";
import { ResponsiveDemo } from "./visuals/ResponsiveDemo";
import { FlowDemo } from "./visuals/FlowDemo";
import { WireframeDemo } from "./visuals/WireframeDemo";
import { AccessibilityDemo } from "./visuals/AccessibilityDemo";
import { BoxModelDemo } from "./visuals/BoxModelDemo";
import { GridDemo } from "./visuals/GridDemo";
import { DesignSystemDemo } from "./visuals/DesignSystemDemo";
import { TokenDemo } from "./visuals/TokenDemo";
import { MetricsDemo } from "./visuals/MetricsDemo";
import { IsometricDemo } from "./visuals/IsometricDemo";
import { HandoffDemo } from "./visuals/HandoffDemo";
import { ResearchDemo } from "./visuals/ResearchDemo";
import { StylesDemo } from "./visuals/StylesDemo";
import { TipsDemo } from "./visuals/TipsDemo";
import { ButtonVariantsDemo } from "./visuals/ButtonVariantsDemo";
import { FormFieldsDemo } from "./visuals/FormFieldsDemo";
import { TabNavDemo } from "./visuals/TabNavDemo";
import { DataTableDemo } from "./visuals/DataTableDemo";
import { PricingDemo } from "./visuals/PricingDemo";
import { HierarchyDemo } from "./visuals/HierarchyDemo";
import { DensityDemo } from "./visuals/DensityDemo";
import { ColorContrastDemo } from "./visuals/ColorContrastDemo";
import { TrustSignalsDemo } from "./visuals/TrustSignalsDemo";

const DEMO_MAP: Partial<Record<VisualType, React.ComponentType>> = {
  // UI components
  cta: CtaDemo,
  navbar: NavbarDemo,
  sidebar: SidebarDemo,
  modal: ModalToastDemo,
  toast: ModalToastDemo,
  hero: HeroDemo,
  // UX / Layout
  responsive: ResponsiveDemo,
  flow: FlowDemo,
  wireframe: WireframeDemo,
  // CSS / Dev
  accessibility: AccessibilityDemo,
  boxmodel: BoxModelDemo,
  grid: GridDemo,
  // Design System
  "design-system": DesignSystemDemo,
  token: TokenDemo,
  handoff: HandoffDemo,
  // Lead / Metrics
  metrics: MetricsDemo,
  critique: MetricsDemo,
  // Research
  research: ResearchDemo,
  isometric: IsometricDemo,
  // Style / AI
  styles: StylesDemo,
  cozy: StylesDemo,
  formula: TipsDemo,
  tips: TipsDemo,
  // New demos
  "button-variants": ButtonVariantsDemo,
  "form-fields": FormFieldsDemo,
  "tab-nav": TabNavDemo,
  "data-table": DataTableDemo,
  pricing: PricingDemo,
  hierarchy: HierarchyDemo,
  density: DensityDemo,
  compact: DensityDemo,
  darkmode: TokenDemo,
  "color-contrast": ColorContrastDemo,
  "trust-signals": TrustSignalsDemo,
};

type Props = { visualType: VisualType };

export function VisualDemo({ visualType }: Props) {
  const Demo = DEMO_MAP[visualType];
  if (!Demo) return null;
  return (
    <div className="mt-3">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-text-muted">Visual Demo</p>
      <Demo />
    </div>
  );
}
