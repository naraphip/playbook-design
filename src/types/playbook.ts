export type TermLevel = "basic" | "intermediate" | "advanced";

export type TermCategory =
  | "ui"
  | "style"
  | "ux"
  | "css"
  | "lead"
  | "ai-prompting"
  | "research"
  | "accessibility"
  | "conversion"
  | "design-system";

export type VisualType =
  | "buttonVariants"
  | "formFieldStates"
  | "searchAndFilter"
  | "tabNavigation"
  | "modalPreview"
  | "drawerPreview"
  | "toastStack"
  | "emptyState"
  | "skeletonLoading"
  | "dataTable"
  | "pricingCards"
  | "heroSection"
  | "conversionCTA"
  | "accessibilityFocus"
  | "keyboardNavigation"
  | "colorContrast"
  | "responsiveGrid"
  | "densityComparison"
  | "hierarchyComparison"
  | "cardLayout"
  | "designTokens"
  | "componentVariants"
  | "sidebarNavigation"
  | "commandPalette"
  | "mobileForm"
  | "checkoutFriction"
  | "trustSignals"
  | "promptCardPreview"
  | "beforeAfterNoiseReduction"
  | "styleComparison"
  | "glassPanel"
  | "themeComparison"
  | "cta"
  | "navbar"
  | "sidebar"
  | "modal"
  | "toast"
  | "hero"
  | "cozy"
  | "compact"
  | "darkmode"
  | "responsive"
  | "flow"
  | "wireframe"
  | "accessibility"
  | "boxmodel"
  | "grid"
  | "design-system"
  | "token"
  | "handoff"
  | "metrics"
  | "critique"
  | "research"
  | "isometric"
  | "formula"
  | "styles"
  | "tips"
  | "button-variants"
  | "form-fields"
  | "tab-nav"
  | "data-table"
  | "pricing"
  | "hierarchy"
  | "density"
  | "color-contrast"
  | "trust-signals";

export type UXTerm = {
  id: string;
  slug: string;
  category: TermCategory;
  icon: string;
  term: string;
  pronunciation?: string;
  aliases?: string[];
  level: TermLevel;
  shortDefinition: string;
  fullDefinition: string;
  whyItMatters: string;
  whenToUse?: string[];
  examples: string[];
  prompts: string[];
  tags: string[];
  visualType: VisualType;
  demoConfig?: Record<string, string | number | boolean | string[]>;
  relatedSlugs: string[];
};

export type PromptItem = {
  id: string;
  title: string;
  useCase:
    | "designer"
    | "developer"
    | "claude-code"
    | "ux-review"
    | "accessibility"
    | "conversion"
    | "ai-image";
  level: TermLevel;
  prompt: string;
  tags: string[];
};

export type Technique = {
  id: string;
  slug: string;
  title: string;
  category: string;
  whatItIs: string;
  whenToUse: string[];
  howToDoIt: string[];
  examplePrompt: string;
  commonMistakes: string[];
  tags: string[];
  relatedTerms?: string[];
};
