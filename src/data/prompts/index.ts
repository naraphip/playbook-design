import type { PromptItem } from "@/types/playbook";
import { DESIGNER_PROMPTS } from "./designer";
import { DEVELOPER_PROMPTS } from "./developer";
import { CLAUDE_CODE_PROMPTS } from "./claude-code";
import { UX_REVIEW_PROMPTS } from "./ux-review";
import { ACCESSIBILITY_PROMPTS } from "./accessibility";
import { CONVERSION_PROMPTS } from "./conversion";
import { AI_IMAGE_PROMPTS } from "./ai-image";

export const PROMPTS: PromptItem[] = [
  ...DESIGNER_PROMPTS,
  ...DEVELOPER_PROMPTS,
  ...CLAUDE_CODE_PROMPTS,
  ...UX_REVIEW_PROMPTS,
  ...ACCESSIBILITY_PROMPTS,
  ...CONVERSION_PROMPTS,
  ...AI_IMAGE_PROMPTS,
];

export {
  DESIGNER_PROMPTS,
  DEVELOPER_PROMPTS,
  CLAUDE_CODE_PROMPTS,
  UX_REVIEW_PROMPTS,
  ACCESSIBILITY_PROMPTS,
  CONVERSION_PROMPTS,
  AI_IMAGE_PROMPTS,
};
