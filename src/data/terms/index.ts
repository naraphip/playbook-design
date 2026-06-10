import type { UXTerm } from "@/types/playbook";
import { FOUNDATION_TERMS } from "./foundation";
import { RESEARCH_TERMS } from "./research";
import { REVIEW_TERMS } from "./review";
import { DESIGN_SYSTEM_TERMS } from "./design-system";
import { LEAD_SKILLS_TERMS } from "./lead-skills";
import { CONVERSION_TERMS } from "./conversion";
import { HANDOFF_TERMS } from "./handoff";
import { AI_PROMPTING_TERMS } from "./ai-prompting";

export const TERMS: UXTerm[] = [
  ...FOUNDATION_TERMS,
  ...RESEARCH_TERMS,
  ...REVIEW_TERMS,
  ...DESIGN_SYSTEM_TERMS,
  ...LEAD_SKILLS_TERMS,
  ...CONVERSION_TERMS,
  ...HANDOFF_TERMS,
  ...AI_PROMPTING_TERMS,
];

export {
  FOUNDATION_TERMS,
  RESEARCH_TERMS,
  REVIEW_TERMS,
  DESIGN_SYSTEM_TERMS,
  LEAD_SKILLS_TERMS,
  CONVERSION_TERMS,
  HANDOFF_TERMS,
  AI_PROMPTING_TERMS,
};
