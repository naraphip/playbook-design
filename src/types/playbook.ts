export type TermLevel = "basic" | "intermediate" | "advanced";

/**
 * Clean 8-group taxonomy. Every term belongs to exactly one group:
 * concepts (foundation), methods (research/review), systems (design-system),
 * leadership practice (lead-skills), business UX (conversion),
 * delivery (handoff), and AI usage (ai-prompting).
 */
export type TermCategory =
  | "ux-foundation"
  | "ux-research"
  | "ux-review"
  | "design-system"
  | "lead-skills"
  | "conversion"
  | "handoff"
  | "ai-prompting";

/** Reusable, data-driven visual demo types — one renderer per type. */
export type VisualDemoType =
  | "checklist"
  | "before-after"
  | "audit-report"
  | "acceptance-criteria"
  | "component-state"
  | "handoff-spec"
  | "user-flow"
  | "priority-matrix"
  | "prompt-card"
  | "qa-checklist";

export type AuditSeverity = "low" | "medium" | "high" | "critical";

/** Structured demo content. Each demo type reads its own slice. */
export type DemoData = {
  title?: string;
  note?: string;
  /** checklist / qa-checklist */
  items?: string[];
  /** before-after critique */
  before?: { label: string; points: string[] };
  after?: { label: string; points: string[] };
  /** audit-report */
  findings?: Array<{ severity: AuditSeverity; issue: string; fix: string }>;
  /** acceptance-criteria */
  criteria?: Array<{ given: string; when: string; then: string }>;
  /** component-state */
  states?: Array<{ name: string; spec: string }>;
  /** handoff-spec */
  specs?: Array<{ label: string; value: string }>;
  /** user-flow */
  steps?: Array<{ name: string; detail: string; risk?: string }>;
  /** priority-matrix — quadrants order: [top-left, top-right, bottom-left, bottom-right] */
  matrix?: {
    xLabel: string;
    yLabel: string;
    quadrants: [string, string, string, string];
    items: Array<{ name: string; quadrant: 0 | 1 | 2 | 3 }>;
  };
  /** prompt-card */
  prompt?: { title: string; audience: string; excerpt: string };
};

export type UXTerm = {
  id: string;
  slug: string;
  term: string;
  category: TermCategory;
  icon: string;
  level: TermLevel;
  aliases?: string[];
  /** One clear sentence. */
  shortDescription: string;
  /** Practical definition, not academic. */
  fullDefinition: string;
  /** Tied to real product/business/design risk. */
  whyItMatters: string;
  /** Concrete situations. */
  whenToUse: string[];
  /** Prevent misuse. */
  whenNotToUse: string[];
  /** Step-by-step. */
  howToApply: string[];
  /** Minimum 5 items. */
  checklist: string[];
  /** Real outputs someone can produce. */
  deliverables: string[];
  goodExample: string;
  badExample: string;
  /** Minimum 4 mistakes. */
  commonMistakes: string[];
  /** 3-6 related term slugs. */
  relatedSlugs: string[];
  tags: string[];
  /** At least 1 production-grade prompt, copy-ready. */
  prompts: string[];
  visualDemo: VisualDemoType;
  demoData?: DemoData;
};

export type PromptAudience =
  | "designer"
  | "developer"
  | "claude-code"
  | "ux-review"
  | "accessibility"
  | "conversion"
  | "ai-image";

export type PromptItem = {
  id: string;
  title: string;
  audience: PromptAudience;
  level: TermLevel;
  /** One-line situation this prompt is for. */
  useCase: string;
  /** What the user must prepare/attach before running the prompt. */
  inputRequired: string[];
  /** Copy-ready production prompt: role, context, constraints, output format. */
  promptText: string;
  /** What shape the output comes back in. */
  outputFormat: string;
  constraints: string[];
  /** Tools/models this works best with. */
  bestUsedWith: string[];
  tags: string[];
  exampleInput?: string;
  expectedOutputPreview?: string;
};

export type TechniqueCategory =
  | "UX Research"
  | "UX Review"
  | "Conversion"
  | "Design System & Handoff";

export type Technique = {
  id: string;
  slug: string;
  title: string;
  category: TechniqueCategory;
  /** When you reach for this technique. */
  useCase: string;
  difficulty: TermLevel;
  timeRequired: string;
  participants: string;
  inputNeeded: string[];
  steps: string[];
  /** The concrete artifact this produces. */
  output: string;
  /** How to decide / interpret results. */
  decisionCriteria: string[];
  exampleScenario: string;
  commonMistakes: string[];
  /** Fill-in template, copy-ready. */
  template: string;
  /** Production prompt to run this technique with an AI assistant. */
  prompt: string;
  relatedSlugs: string[];
  tags: string[];
};

export type WorkflowStage = {
  id: string;
  title: string;
  goal: string;
  activities: string[];
  deliverables: string[];
  exitCriteria: string[];
  termSlugs: string[];
  techniqueSlugs: string[];
  promptIds: string[];
};
