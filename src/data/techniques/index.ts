import type { Technique } from "@/types/playbook";
import { RESEARCH_TECHNIQUES } from "./research";
import { REVIEW_TECHNIQUES } from "./review";
import { CONVERSION_TECHNIQUES } from "./conversion";
import { SYSTEM_HANDOFF_TECHNIQUES } from "./system-handoff";

export const TECHNIQUES: Technique[] = [
  ...RESEARCH_TECHNIQUES,
  ...REVIEW_TECHNIQUES,
  ...CONVERSION_TECHNIQUES,
  ...SYSTEM_HANDOFF_TECHNIQUES,
];

export {
  RESEARCH_TECHNIQUES,
  REVIEW_TECHNIQUES,
  CONVERSION_TECHNIQUES,
  SYSTEM_HANDOFF_TECHNIQUES,
};
