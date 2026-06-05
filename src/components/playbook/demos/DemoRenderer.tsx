import type { VisualType } from "@/types/playbook";
import type { ComponentType, ReactNode } from "react";
import { Badge } from "../workspace";

type DemoProps = { config?: Record<string, string | number | boolean | string[]> };

const mapType = (type: VisualType): VisualType => {
  const aliases: Partial<Record<VisualType, VisualType>> = {
    cta: "conversionCTA",
    navbar: "sidebarNavigation",
    sidebar: "sidebarNavigation",
    modal: "modalPreview",
    toast: "toastStack",
    hero: "heroSection",
    cozy: "styleComparison",
    styles: "styleComparison",
    compact: "densityComparison",
    density: "densityComparison",
    darkmode: "themeComparison",
    responsive: "responsiveGrid",
    flow: "beforeAfterNoiseReduction",
    wireframe: "hierarchyComparison",
    accessibility: "accessibilityFocus",
    boxmodel: "responsiveGrid",
    grid: "responsiveGrid",
    "design-system": "componentVariants",
    token: "designTokens",
    handoff: "promptCardPreview",
    metrics: "dataTable",
    critique: "beforeAfterNoiseReduction",
    research: "dataTable",
    isometric: "heroSection",
    formula: "promptCardPreview",
    tips: "promptCardPreview",
    "button-variants": "buttonVariants",
    "form-fields": "formFieldStates",
    "tab-nav": "tabNavigation",
    "data-table": "dataTable",
    pricing: "pricingCards",
    hierarchy: "hierarchyComparison",
    "color-contrast": "colorContrast",
    "trust-signals": "trustSignals",
  };
  return aliases[type] ?? type;
};

export function DemoRenderer({ type, config }: { type: VisualType; config?: DemoProps["config"] }) {
  const normalized = mapType(type);
  const Demo = demos[normalized] ?? PromptCardPreviewDemo;
  return <Demo config={config} />;
}

const DemoFrame = ({ title, children, note }: { title: string; children: ReactNode; note?: string }) => (
  <div className="overflow-hidden rounded-md border border-border bg-bg-main">
    <div className="flex items-center justify-between border-b border-border bg-bg-surface px-3 py-2">
      <p className="mono text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted">{title}</p>
      <Badge>demo</Badge>
    </div>
    <div className="p-3">{children}</div>
    {note && <p className="border-t border-border bg-bg-surface px-3 py-2 text-xs leading-relaxed text-text-muted">{note}</p>}
  </div>
);

function ButtonVariantsDemo() {
  return (
    <DemoFrame title="Button Variants" note="Orange is reserved for the single primary action; destructive uses semantic critical, not orange.">
      <div className="grid gap-2 sm:grid-cols-2">
        <button className="h-9 rounded-md bg-primary px-3 text-xs font-bold text-white shadow-card">Save changes</button>
        <button className="h-9 rounded-md border border-border bg-bg-surface px-3 text-xs font-bold text-text-secondary">Preview</button>
        <button className="h-9 rounded-md border border-danger/25 bg-danger-soft px-3 text-xs font-bold text-danger">Delete project</button>
        <button className="h-9 rounded-md border border-border bg-bg-surface px-3 text-xs font-bold text-text-muted">Icon + label</button>
      </div>
    </DemoFrame>
  );
}

function FormFieldStatesDemo() {
  return (
    <DemoFrame title="Form Field States" note="Labels stay visible; errors use text and aria relationships, not color alone.">
      <div className="grid gap-2">
        {[
          ["Email", "name@company.com", "border-accent ring-2 ring-accent/15", "Focused"],
          ["Team name", "Growth Ops", "border-border", "Filled"],
          ["Password", "8+ characters", "border-danger bg-danger-soft/40", "Error: Use at least 8 characters"],
        ].map(([label, value, cls, helper]) => (
          <label key={label} className="grid gap-1 text-xs font-semibold text-text-secondary">
            {label}
            <input value={value} readOnly className={`h-9 rounded-md border bg-bg-surface px-3 text-sm text-text-primary outline-none ${cls}`} />
            <span className={`text-[11px] ${helper.startsWith("Error") ? "text-danger" : "text-text-muted"}`}>{helper}</span>
          </label>
        ))}
      </div>
    </DemoFrame>
  );
}

function SearchAndFilterDemo() {
  return (
    <DemoFrame title="Search + Filter" note="Active filters are visible and removable; result count is deterministic.">
      <div className="space-y-2">
        <div className="flex h-9 items-center rounded-md border border-border bg-bg-surface px-3 text-xs text-text-muted">Search terms, aliases, prompts...</div>
        <div className="flex flex-wrap gap-1.5">
          {["Accessibility", "Advanced", "Prompt examples"].map((item, index) => (
            <span key={item} className={`rounded-md border px-2 py-1 text-xs font-semibold ${index === 0 ? "border-accent/25 bg-accent-soft text-accent" : "border-border bg-bg-surface text-text-secondary"}`}>{item}</span>
          ))}
        </div>
        <p className="mono text-[11px] text-text-muted">18 results</p>
      </div>
    </DemoFrame>
  );
}

function TabNavigationDemo() {
  return (
    <DemoFrame title="Tab Navigation" note="Tabs switch parallel content; sequential flows need a stepper instead.">
      <div className="rounded-md border border-border bg-bg-surface">
        <div className="flex border-b border-border">
          {["Overview", "Analytics", "Settings"].map((tab, index) => (
            <div key={tab} className={`flex-1 px-3 py-2 text-center text-xs font-bold ${index === 1 ? "border-b-2 border-accent bg-accent-soft text-accent" : "text-text-muted"}`}>{tab}</div>
          ))}
        </div>
        <div className="grid gap-1.5 p-3">
          <div className="h-3 w-32 rounded bg-bg-hover" />
          <div className="h-3 w-44 rounded bg-bg-soft" />
          <div className="h-16 rounded-md border border-border bg-bg-main" />
        </div>
      </div>
    </DemoFrame>
  );
}

function ModalPreviewDemo() {
  return (
    <DemoFrame title="Accessible Modal" note="The dialog has a label, clear consequences, focus management, and a safe cancel path.">
      <div className="rounded-md border border-border bg-bg-soft p-5">
        <div className="mx-auto max-w-sm rounded-md border border-border bg-bg-surface p-4 shadow-panel">
          <p className="text-sm font-bold text-text-primary">Delete workspace?</p>
          <p className="mt-1 text-xs leading-relaxed text-text-muted">This removes 12 projects. Export data before continuing.</p>
          <div className="mt-3 flex justify-end gap-2">
            <button className="h-8 rounded-md border border-border px-3 text-xs font-bold text-text-secondary">Cancel</button>
            <button className="h-8 rounded-md bg-danger px-3 text-xs font-bold text-white">Delete</button>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}

function DrawerPreviewDemo() {
  return (
    <DemoFrame title="Drawer / Sheet" note="Desktop uses a right-side detail sheet; mobile can become full-screen.">
      <div className="flex overflow-hidden rounded-md border border-border bg-bg-surface">
        <div className="flex-1 p-3">
          <div className="mb-2 h-3 w-24 rounded bg-bg-soft" />
          <div className="grid gap-1.5">
            <div className="h-8 rounded border border-border bg-bg-main" />
            <div className="h-8 rounded border border-border bg-bg-main" />
          </div>
        </div>
        <div className="w-36 border-l border-border bg-bg-main p-3">
          <p className="text-xs font-bold text-text-primary">Prompt detail</p>
          <div className="mt-2 h-20 rounded border border-border bg-bg-surface" />
        </div>
      </div>
    </DemoFrame>
  );
}

function ToastStackDemo() {
  return (
    <DemoFrame title="Toast Stack" note="Toast feedback should not block the workflow and should remain readable long enough.">
      <div className="ml-auto grid max-w-xs gap-2">
        {[["Saved successfully", "bg-success-soft text-success border-success/25"], ["Upload failed. Retry", "bg-danger-soft text-danger border-danger/25"], ["3 tasks queued", "bg-bg-surface text-text-secondary border-border"]].map(([text, cls]) => (
          <div key={text} className={`rounded-md border px-3 py-2 text-xs font-semibold shadow-card ${cls}`}>{text}</div>
        ))}
      </div>
    </DemoFrame>
  );
}

function EmptyStateDemo() {
  return (
    <DemoFrame title="Empty State" note="A useful empty state explains what happened and gives the next action.">
      <div className="rounded-md border border-dashed border-border bg-bg-surface p-5 text-center">
        <p className="text-sm font-bold text-text-primary">No prompts saved</p>
        <p className="mx-auto mt-1 max-w-xs text-xs text-text-muted">Save audit prompts you reuse for pricing pages, checkout, and admin dashboards.</p>
        <button className="mt-3 h-8 rounded-md bg-primary px-3 text-xs font-bold text-white">Create prompt</button>
      </div>
    </DemoFrame>
  );
}

function SkeletonLoadingDemo() {
  return (
    <DemoFrame title="Skeleton Loading" note="Skeletons match the final content shape to reduce perceived waiting.">
      <div className="grid gap-2">
        {[0, 1, 2].map((row) => (
          <div key={row} className="rounded-md border border-border bg-bg-surface p-3">
            <div className="h-3 w-2/5 rounded bg-bg-soft" />
            <div className="mt-2 h-2 w-5/6 rounded bg-bg-soft" />
            <div className="mt-1 h-2 w-3/5 rounded bg-bg-soft" />
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function DataTableDemo() {
  return (
    <DemoFrame title="Data Table" note="Tables need semantic headers, compact density, filters, status, and responsive fallback.">
      <div className="overflow-hidden rounded-md border border-border bg-bg-surface">
        {[
          ["Order", "Status", "Total"],
          ["#1042", "Paid", "$128"],
          ["#1043", "Review", "$84"],
          ["#1044", "Failed", "$42"],
        ].map((row, index) => (
          <div key={row.join("")} className={`grid grid-cols-3 gap-2 border-b border-border px-3 py-2 text-xs last:border-b-0 ${index === 0 ? "mono bg-bg-soft font-bold uppercase text-text-muted" : "text-text-secondary"}`}>
            {row.map((cell) => <span key={cell}>{cell}</span>)}
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function PricingCardsDemo() {
  return (
    <DemoFrame title="Pricing Cards" note="Recommended tier can use indigo selection; CTA remains orange only where it is the primary action.">
      <div className="grid gap-2 sm:grid-cols-3">
        {["Free", "Pro", "Enterprise"].map((plan, index) => (
          <div key={plan} className={`rounded-md border p-3 ${index === 1 ? "border-accent bg-accent-soft" : "border-border bg-bg-surface"}`}>
            <p className="text-xs font-bold text-text-primary">{plan}</p>
            <p className="mono mt-1 text-lg font-bold text-text-primary">{index === 2 ? "Custom" : `$${index * 39}`}</p>
            <div className="mt-2 grid gap-1">
              <div className="h-2 rounded bg-bg-soft" />
              <div className="h-2 w-4/5 rounded bg-bg-soft" />
            </div>
            <button className={`mt-3 h-8 w-full rounded-md text-xs font-bold ${index === 1 ? "bg-primary text-white" : "border border-border text-text-secondary"}`}>{index === 1 ? "Start trial" : "Choose"}</button>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function HeroSectionDemo() {
  return (
    <DemoFrame title="Landing Hero" note="Hero content names the offer, shows product signal, and leaves room for the next proof section.">
      <div className="rounded-md border border-border bg-bg-surface p-4">
        <div className="grid gap-3 sm:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-lg font-bold leading-tight text-text-primary">Resolve support tickets faster</p>
            <p className="mt-1 text-xs leading-relaxed text-text-muted">AI replies trained on your help center and policies.</p>
            <button className="mt-3 h-8 rounded-md bg-primary px-3 text-xs font-bold text-white">Start free trial</button>
          </div>
          <div className="rounded-md border border-border bg-bg-main p-2">
            <div className="mb-2 h-4 w-24 rounded bg-bg-soft" />
            <div className="grid gap-1.5">
              <div className="h-6 rounded bg-bg-surface" />
              <div className="h-6 rounded border border-accent bg-accent-soft" />
              <div className="h-6 rounded bg-bg-surface" />
            </div>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}

function ConversionCTADemo() {
  return (
    <DemoFrame title="CTA Hierarchy" note="One primary CTA per decision zone; nearby proof reduces hesitation.">
      <div className="rounded-md border border-border bg-bg-surface p-4">
        <p className="text-sm font-bold text-text-primary">Ready to audit your checkout?</p>
        <p className="mt-1 text-xs text-text-muted">No card required · 14-day trial · SOC 2 ready</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="h-9 rounded-md bg-primary px-3 text-xs font-bold text-white">Start audit</button>
          <button className="h-9 rounded-md border border-border px-3 text-xs font-bold text-text-secondary">View checklist</button>
        </div>
      </div>
    </DemoFrame>
  );
}

function AccessibilityFocusDemo() {
  return (
    <DemoFrame title="Accessibility Focus" note="Focus rings are indigo and visible; labels and touch targets stay usable.">
      <div className="grid gap-2 sm:grid-cols-3">
        <button className="h-10 rounded-md border-2 border-accent bg-accent-soft px-3 text-xs font-bold text-accent">Focused</button>
        <label className="rounded-md border border-border bg-bg-surface p-2 text-xs font-bold text-text-secondary">Email<input readOnly value="name@team.com" className="mt-1 h-9 w-full rounded border border-border px-2 text-xs" /></label>
        <button className="h-10 rounded-md border border-border bg-bg-surface px-3 text-xs font-bold text-text-secondary">40px target</button>
      </div>
    </DemoFrame>
  );
}

function KeyboardNavigationDemo() {
  return (
    <DemoFrame title="Keyboard Navigation" note="Tab enters groups, arrow keys move within grouped controls, and skip links bypass repeated nav.">
      <div className="flex flex-wrap items-center gap-2">
        {["Skip link", "Search", "Result 1", "Copy", "Detail"].map((item, index) => (
          <div key={item} className={`rounded-md border px-2 py-1.5 text-xs font-bold ${index === 2 ? "border-accent bg-accent-soft text-accent" : "border-border bg-bg-surface text-text-secondary"}`}>
            <span className="mono mr-1 text-[10px]">{index + 1}</span>{item}
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function ColorContrastDemo() {
  return (
    <DemoFrame title="Color Contrast" note="Do not rely on color alone; pair state color with text or iconography.">
      <div className="grid gap-2 sm:grid-cols-3">
        <div className="rounded-md border border-border bg-bg-surface p-3"><p className="text-xs font-bold text-text-primary">Ink on card</p><p className="mono text-[10px] text-text-muted">AA target</p></div>
        <div className="rounded-md border border-success/25 bg-success-soft p-3"><p className="text-xs font-bold text-success">Approved</p><p className="mono text-[10px] text-success">text + color</p></div>
        <div className="rounded-md border border-danger/25 bg-danger-soft p-3"><p className="text-xs font-bold text-danger">Failed</p><p className="mono text-[10px] text-danger">message required</p></div>
      </div>
    </DemoFrame>
  );
}

function ResponsiveGridDemo() {
  return (
    <DemoFrame title="Responsive Grid" note="Use stable tracks and min-width rules to prevent overflow.">
      <div className="grid gap-2">
        {["375px: 1 column", "768px: 2 columns", "1280px: 3 zones"].map((label, index) => (
          <div key={label} className="rounded-md border border-border bg-bg-surface p-2">
            <p className="mono mb-2 text-[10px] font-bold text-text-muted">{label}</p>
            <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${index + 1}, minmax(0, 1fr))` }}>
              {Array.from({ length: index + 1 }).map((_, item) => <div key={item} className="h-6 rounded bg-bg-soft" />)}
            </div>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function DensityComparisonDemo() {
  const levels = [
    { name: "Comfortable", rowPy: "py-3", gap: "gap-2.5", fontSize: "text-xs", label: "28px card pad · cozy" },
    { name: "Compact", rowPy: "py-2", gap: "gap-1.5", fontSize: "text-[11px]", label: "14px card pad · default" },
    { name: "Dense", rowPy: "py-1", gap: "gap-1", fontSize: "text-[10px]", label: "8px card pad · data-heavy" },
  ];
  const rows = [
    { id: "#1042", status: "Paid", amount: "$128" },
    { id: "#1043", status: "Review", amount: "$84" },
    { id: "#1044", status: "Failed", amount: "$42" },
  ];
  return (
    <DemoFrame title="Density: Same Data, Three Spacings" note="Compact ships as default. Cozy is a user preference. Dense is for data-heavy admin views.">
      <div className="grid gap-3">
        {levels.map(({ name, rowPy, gap, fontSize, label }) => (
          <div key={name} className="rounded-md border border-border bg-bg-surface overflow-hidden">
            <div className="flex items-center justify-between border-b border-border bg-bg-soft px-3 py-1.5">
              <span className="text-[10px] font-bold text-text-primary">{name}</span>
              <span className="mono text-[9px] text-text-muted">{label}</span>
            </div>
            <div className={`grid ${gap} p-2`}>
              {rows.map(({ id, status, amount }) => (
                <div key={id} className={`grid grid-cols-3 rounded border border-border bg-bg-main px-2 ${rowPy} ${fontSize} text-text-secondary`}>
                  <span className="mono">{id}</span>
                  <span className={status === "Paid" ? "text-success" : status === "Failed" ? "text-danger" : "text-text-muted"}>{status}</span>
                  <span className="mono text-right">{amount}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function HierarchyComparisonDemo() {
  return (
    <DemoFrame title="Hierarchy Comparison" note="Reduce competing weights so the primary task is obvious.">
      <div className="grid gap-2 sm:grid-cols-2">
        <MiniNoise title="Before" noisy />
        <MiniNoise title="After" />
      </div>
    </DemoFrame>
  );
}

function CardLayoutDemo() {
  return (
    <DemoFrame title="Card Layout" note="Cards frame repeated items; page sections themselves stay unframed.">
      <div className="grid gap-2 sm:grid-cols-2">
        {[1, 2].map((item) => (
          <div key={item} className="rounded-md border border-border bg-bg-surface p-3 shadow-card">
            <p className="text-sm font-bold text-text-primary">Prompt card</p>
            <p className="mt-1 line-clamp-2 text-xs text-text-muted">Compact preview with copy action and deterministic metadata.</p>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function DesignTokensDemo() {
  const tokens = [
    ["--paper", "#F6F4EF", "bg-bg-main"],
    ["--ink", "#15161A", "bg-text-primary"],
    ["--bb-orange", "#F04E23", "bg-primary"],
    ["--bb-indigo", "#4A37FF", "bg-accent"],
  ];
  return (
    <DemoFrame title="Design Tokens" note="Every surface, border, text, action, and selection should resolve through tokens.">
      <div className="grid gap-2">
        {tokens.map(([name, value, swatch]) => (
          <div key={name} className="flex items-center gap-2 rounded-md border border-border bg-bg-surface p-2">
            <span className={`h-5 w-5 rounded border border-border ${swatch}`} />
            <code className="mono flex-1 text-[11px] font-bold text-accent">{name}</code>
            <span className="mono text-[10px] text-text-muted">{value}</span>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function ComponentVariantsDemo() {
  return (
    <DemoFrame title="Component Variants" note="Variants are shared component API, not one-off page classes.">
      <div className="grid gap-2">
        {["default", "hover", "selected", "disabled"].map((state, index) => (
          <div key={state} className={`rounded-md border px-3 py-2 text-xs font-bold ${index === 2 ? "border-accent bg-accent-soft text-accent" : index === 3 ? "border-border bg-bg-soft text-text-muted opacity-70" : "border-border bg-bg-surface text-text-secondary"}`}>Term row · {state}</div>
        ))}
      </div>
    </DemoFrame>
  );
}

function SidebarNavigationDemo() {
  return (
    <DemoFrame title="Shared Shell Navigation" note="Active nav uses paper fill, orange left rule, and compact mono counts.">
      <div className="flex overflow-hidden rounded-md border border-border bg-bg-surface">
        <div className="w-36 border-r border-border bg-bg-main p-2">
          {["Playbook 141", "Prompts 30", "Techniques 10"].map((item, index) => (
            <div key={item} className={`relative rounded-md px-2 py-2 text-xs font-bold ${index === 0 ? "bg-bg-soft text-text-primary before:absolute before:left-0 before:top-1.5 before:h-5 before:w-[3px] before:rounded-full before:bg-primary" : "text-text-muted"}`}>{item}</div>
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="h-3 w-28 rounded bg-bg-soft" />
          <div className="mt-2 h-16 rounded border border-border bg-bg-main" />
        </div>
      </div>
    </DemoFrame>
  );
}

function CommandPaletteDemo() {
  return (
    <DemoFrame title="Command Palette" note="AI/workspace commands use indigo selection and keyboard-first interaction.">
      <div className="rounded-md border border-border bg-bg-surface p-3 shadow-panel">
        <div className="mb-2 rounded-md border border-accent bg-accent-soft px-3 py-2 text-xs font-semibold text-accent">Search commands...</div>
        {["Create prompt", "Run accessibility audit", "Open pricing checklist"].map((item, index) => (
          <div key={item} className={`rounded px-2 py-1.5 text-xs ${index === 1 ? "bg-accent-soft text-accent" : "text-text-secondary"}`}>{item}</div>
        ))}
      </div>
    </DemoFrame>
  );
}

function MobileFormDemo() {
  return (
    <DemoFrame title="Mobile Form" note="Mobile conversion forms need large controls, visible labels, and specific errors.">
      <div className="mx-auto max-w-[240px] rounded-lg border border-border bg-bg-surface p-3">
        <label className="grid gap-1 text-xs font-bold text-text-secondary">Work email<input readOnly value="founder@shop.com" className="h-10 rounded-md border border-border px-2 text-xs" /></label>
        <label className="mt-2 grid gap-1 text-xs font-bold text-text-secondary">Password<input readOnly value="••••" className="h-10 rounded-md border border-danger bg-danger-soft px-2 text-xs" /><span className="font-medium text-danger">Use at least 8 characters.</span></label>
        <button className="mt-3 h-10 w-full rounded-md bg-primary text-xs font-bold text-white">Create account</button>
      </div>
    </DemoFrame>
  );
}

function CheckoutFrictionDemo() {
  return (
    <DemoFrame title="Checkout Friction" note="Remove fields and decisions that are not needed to complete payment.">
      <div className="grid gap-2 sm:grid-cols-2">
        <MiniForm title="Before" fields={["Name", "Company", "Phone", "Address", "Coupon", "Notes"]} />
        <MiniForm title="After" fields={["Email", "Payment", "Billing ZIP"]} primary />
      </div>
    </DemoFrame>
  );
}

function TrustSignalsDemo() {
  return (
    <DemoFrame title="Trust Signals" note="Place proof close to the decision, not buried at the bottom.">
      <div className="grid gap-2">
        <div className="rounded-md border border-border bg-bg-surface p-3">
          <p className="text-sm font-bold text-text-primary">Trusted by 12,000 teams</p>
          <p className="text-xs text-text-muted">4.8/5 average rating · SOC 2 · GDPR ready</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["SOC 2", "GDPR", "No card", "Cancel anytime"].map((item) => <span key={item} className="rounded border border-border bg-bg-surface px-2 py-1 text-xs font-bold text-text-secondary">{item}</span>)}
        </div>
      </div>
    </DemoFrame>
  );
}

function PromptCardPreviewDemo() {
  return (
    <DemoFrame title="Prompt Card Preview" note="Prompt previews use JetBrains Mono and open the full prompt in a drawer/panel.">
      <div className="rounded-md border border-border bg-bg-surface p-3 shadow-card">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-bold text-text-primary">Accessibility Review Prompt</p>
            <p className="mono mt-1 text-[10px] text-text-muted">ACCESSIBILITY · INTERMEDIATE</p>
          </div>
          <button className="h-8 rounded-md border border-border px-2 text-xs font-bold text-text-secondary">Copy</button>
        </div>
        <p className="mono mt-3 line-clamp-4 rounded-md border border-border bg-bg-main p-2 text-[11px] leading-relaxed text-text-secondary">Audit this UI for keyboard navigation, focus states, labels, ARIA, contrast, and responsive touch targets...</p>
      </div>
    </DemoFrame>
  );
}

function BeforeAfterNoiseReductionDemo() {
  return (
    <DemoFrame title="Before / After Noise Reduction" note="Minimalism removes competing visual weights — not content. The same info, less noise.">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-md border border-border bg-bg-surface p-3">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-danger" />
            <p className="text-[10px] font-bold uppercase tracking-wide text-text-muted">Before</p>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-1">
              <span className="rounded bg-[#FDE7DF] px-1 text-[9px] font-bold text-[#F04E23]">NEW</span>
              <span className="rounded bg-[#ECE8FF] px-1 text-[9px] font-bold text-[#4A37FF]">BETA</span>
              <span className="rounded border border-border px-1 text-[9px] text-text-muted">PRO</span>
            </div>
            <p className="text-[11px] font-bold text-text-primary">Dashboard Overview!!!</p>
            <p className="text-[10px] text-text-secondary">Track your metrics below. See all your data here.</p>
            <div className="flex gap-1">
              <button className="h-6 flex-1 rounded bg-primary text-[9px] font-bold text-white">Export</button>
              <button className="h-6 flex-1 rounded bg-primary text-[9px] font-bold text-white">Share</button>
              <button className="h-6 flex-1 rounded bg-primary text-[9px] font-bold text-white">Save</button>
            </div>
          </div>
        </div>
        <div className="rounded-md border border-border bg-bg-surface p-3">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-success" />
            <p className="text-[10px] font-bold uppercase tracking-wide text-text-muted">After</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-bold text-text-primary">Dashboard</p>
            <p className="text-[10px] text-text-muted">3 active projects · updated today</p>
            <button className="h-6 rounded bg-primary px-3 text-[9px] font-bold text-white">Export</button>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}

function StyleComparisonDemo() {
  const styles = [
    {
      name: "Cozy Professional",
      note: "Warm paper · rounded-12 · orange CTA",
      wrapCls: "bg-[#F6F4EF] rounded-md p-3",
      cardCls: "rounded-lg border border-[#E2DDD1] bg-white p-3 shadow-sm",
      headCls: "text-[13px] font-bold text-[#15161A]",
      bodyCls: "text-[11px] text-[#6B6F7A] mt-1 leading-relaxed",
      ctaCls: "mt-3 rounded-md bg-[#F04E23] px-3 py-1.5 text-[11px] font-bold text-white",
      body: "Warm baseline for SaaS dashboards.",
    },
    {
      name: "Minimal Clean",
      note: "Pure white · no border · dark CTA",
      wrapCls: "bg-white rounded-sm p-3",
      cardCls: "rounded p-3",
      headCls: "text-[13px] font-bold text-[#15161A]",
      bodyCls: "text-[11px] text-[#9AA0AB] mt-1 leading-relaxed",
      ctaCls: "mt-3 rounded px-3 py-1.5 text-[11px] font-bold bg-[#15161A] text-white",
      body: "Lower visual weight, breathing room.",
    },
    {
      name: "Glassmorphism",
      note: "Dark gradient · translucent panel",
      wrapCls: "bg-gradient-to-br from-[#4A37FF] to-[#15161A] rounded-md p-3",
      cardCls: "rounded-md border border-white/20 bg-white/10 p-3 backdrop-blur",
      headCls: "text-[13px] font-bold text-white",
      bodyCls: "text-[11px] text-white/60 mt-1 leading-relaxed",
      ctaCls: "mt-3 rounded px-3 py-1.5 text-[11px] font-bold bg-white/20 text-white border border-white/30",
      body: "Verify all text contrast ratios.",
    },
    {
      name: "Enterprise",
      note: "Cool gray · dense · strong border",
      wrapCls: "bg-[#EFECE4] rounded p-3",
      cardCls: "rounded border border-[#D6D0C0] bg-[#FFFFFF] p-2",
      headCls: "text-[12px] font-bold text-[#15161A] uppercase tracking-wide",
      bodyCls: "text-[10px] text-[#6B6F7A] mt-0.5 font-mono",
      ctaCls: "mt-2 rounded px-2 py-1 text-[10px] font-bold bg-[#2C2E36] text-white",
      body: "Dense admin / B2B clarity.",
    },
  ];
  return (
    <DemoFrame title="Style Reference Comparison" note="Background, type weight, border, CTA color, and density differ across each style.">
      <div className="grid gap-2 sm:grid-cols-2">
        {styles.map(({ name, note, wrapCls, cardCls, headCls, bodyCls, ctaCls, body }) => (
          <div key={name} className={wrapCls}>
            <div className={cardCls}>
              <p className={headCls}>{name}</p>
              <p className={bodyCls}>{body}</p>
              <button className={ctaCls}>Action</button>
            </div>
            <p className="mt-1 text-[9px] font-mono text-[#9AA0AB]">{note}</p>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function GlassPanelDemo() {
  return (
    <DemoFrame title="Glassmorphism" note="Requires contrast testing at every text layer — translucent panels over busy gradients fail WCAG easily.">
      <div className="rounded-md bg-gradient-to-br from-[#4A37FF] via-[#2D1FA8] to-[#15161A] p-4">
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-md border border-white/30 bg-white/15 p-3 shadow-panel backdrop-blur-md">
            <p className="text-xs font-bold text-white">Revenue forecast</p>
            <p className="mt-1 text-[10px] text-white/80">Q2: $128k · +14% MoM</p>
            <div className="mt-2 h-10 rounded border border-white/20 bg-white/10" />
            <p className="mt-1.5 text-[9px] text-white/60">AAA pass: headline · AA pass: body</p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/6 p-3 backdrop-blur-sm">
            <p className="text-xs font-bold text-white/50">⚠ Weak contrast</p>
            <p className="mt-1 text-[10px] text-white/30">This text fails AA contrast</p>
            <div className="mt-2 h-10 rounded border border-white/10 bg-white/5" />
            <p className="mt-1.5 text-[9px] text-[#F04E23]">Fail — do not ship this</p>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}

function ThemeComparisonDemo() {
  return (
    <DemoFrame title="Dark / Light Mode" note="Dark mode remaps tokens — surfaces lift, text stays high-contrast. It is not color inversion.">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-md border border-[#E2DDD1] bg-[#F6F4EF] p-3">
          <p className="mono mb-2 text-[9px] font-bold uppercase tracking-[0.1em] text-[#6B6F7A]">Light</p>
          <div className="rounded border border-[#E2DDD1] bg-white p-2 shadow-sm">
            <p className="text-xs font-bold text-[#15161A]">Dashboard</p>
            <p className="mt-0.5 text-[10px] text-[#6B6F7A]">3 active projects</p>
            <button className="mt-2 h-7 rounded bg-[#F04E23] px-3 text-[10px] font-bold text-white">Generate</button>
          </div>
          <div className="mt-1.5 grid gap-0.5">
            {[["--paper", "#F6F4EF"], ["--card", "#FFFFFF"], ["--ink", "#15161A"]].map(([t, v]) => (
              <div key={t} className="flex justify-between text-[9px]">
                <span className="mono text-[#6B6F7A]">{t}</span>
                <span className="mono text-[#9AA0AB]">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-[#2A2C35] bg-[#15161A] p-3">
          <p className="mono mb-2 text-[9px] font-bold uppercase tracking-[0.1em] text-[#6B6F7A]">Dark</p>
          <div className="rounded border border-[#2A2C35] bg-[#1F2128] p-2">
            <p className="text-xs font-bold text-white">Dashboard</p>
            <p className="mt-0.5 text-[10px] text-[#8B909E]">3 active projects</p>
            <button className="mt-2 h-7 rounded bg-[#F04E23] px-3 text-[10px] font-bold text-white">Generate</button>
          </div>
          <div className="mt-1.5 grid gap-0.5">
            {[["--paper", "#15161A"], ["--card", "#1F2128"], ["--ink", "#F0F0F2"]].map(([t, v]) => (
              <div key={t} className="flex justify-between text-[9px]">
                <span className="mono text-[#6B6F7A]">{t}</span>
                <span className="mono text-[#6B6F7A]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}

function MiniNoise({ title, noisy }: { title: string; noisy?: boolean }) {
  return (
    <div className="rounded-md border border-border bg-bg-surface p-3">
      <p className="mb-2 text-xs font-bold text-text-primary">{title}</p>
      <div className={`grid ${noisy ? "gap-1" : "gap-2"}`}>
        <div className={`${noisy ? "h-4 w-full" : "h-4 w-3/5"} rounded bg-bg-soft`} />
        <div className={`${noisy ? "h-3 w-5/6" : "h-3 w-4/5"} rounded bg-bg-soft`} />
        {noisy && <div className="flex gap-1">{["New", "Beta", "Hot"].map((item) => <span key={item} className="rounded border border-border px-1 text-[9px] text-text-muted">{item}</span>)}</div>}
        <button className={`${noisy ? "w-full border border-border text-text-secondary" : "w-28 bg-primary text-white"} h-7 rounded text-[10px] font-bold`}>{noisy ? "Save / Export / Share" : "Continue"}</button>
      </div>
    </div>
  );
}

function MiniForm({ title, fields, primary }: { title: string; fields: string[]; primary?: boolean }) {
  return (
    <div className="rounded-md border border-border bg-bg-surface p-3">
      <p className="mb-2 text-xs font-bold text-text-primary">{title}</p>
      <div className="grid gap-1.5">
        {fields.map((field) => <div key={field} className="h-7 rounded border border-border bg-bg-main px-2 py-1 text-[10px] text-text-muted">{field}</div>)}
      </div>
      <button className={`mt-2 h-8 w-full rounded text-xs font-bold ${primary ? "bg-primary text-white" : "border border-border text-text-secondary"}`}>{primary ? "Pay now" : "Continue"}</button>
    </div>
  );
}

const demos: Partial<Record<VisualType, ComponentType<DemoProps>>> = {
  buttonVariants: ButtonVariantsDemo,
  formFieldStates: FormFieldStatesDemo,
  searchAndFilter: SearchAndFilterDemo,
  tabNavigation: TabNavigationDemo,
  modalPreview: ModalPreviewDemo,
  drawerPreview: DrawerPreviewDemo,
  toastStack: ToastStackDemo,
  emptyState: EmptyStateDemo,
  skeletonLoading: SkeletonLoadingDemo,
  dataTable: DataTableDemo,
  pricingCards: PricingCardsDemo,
  heroSection: HeroSectionDemo,
  conversionCTA: ConversionCTADemo,
  accessibilityFocus: AccessibilityFocusDemo,
  keyboardNavigation: KeyboardNavigationDemo,
  colorContrast: ColorContrastDemo,
  responsiveGrid: ResponsiveGridDemo,
  densityComparison: DensityComparisonDemo,
  hierarchyComparison: HierarchyComparisonDemo,
  cardLayout: CardLayoutDemo,
  designTokens: DesignTokensDemo,
  componentVariants: ComponentVariantsDemo,
  sidebarNavigation: SidebarNavigationDemo,
  commandPalette: CommandPaletteDemo,
  mobileForm: MobileFormDemo,
  checkoutFriction: CheckoutFrictionDemo,
  trustSignals: TrustSignalsDemo,
  promptCardPreview: PromptCardPreviewDemo,
  beforeAfterNoiseReduction: BeforeAfterNoiseReductionDemo,
  styleComparison: StyleComparisonDemo,
  glassPanel: GlassPanelDemo,
  themeComparison: ThemeComparisonDemo,
};
