import type { TermCategory } from "@/types/playbook";

export type CategoryMeta = {
  id: TermCategory;
  label: string;
  icon: string;
  description: string;
};

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "ux-foundation",
    label: "UX Foundation",
    icon: "🧠",
    description:
      "Concept พื้นฐานที่ทุก design decision ต้องอ้างอิง — user problem, flow, IA, mental model, usability ถ้าพื้นฐานพวกนี้ผิด layer อื่นช่วยไม่ได้",
  },
  {
    id: "ux-research",
    label: "UX Research",
    icon: "🔬",
    description:
      "Method หาคำตอบจาก user จริงก่อนตัดสินใจ — แต่ละ method มี input, เวลา, และคำถามที่ตอบได้ต่างกัน เลือกผิดได้ข้อมูลที่ใช้ไม่ได้",
  },
  {
    id: "ux-review",
    label: "UX Review & Audit",
    icon: "🔍",
    description:
      "วิธี review interface อย่างเป็นระบบ — heuristic, cognitive load, error/empty state, form, navigation, trust พร้อม severity และ fix ที่ dev ทำต่อได้",
  },
  {
    id: "design-system",
    label: "UI Design System",
    icon: "🏗️",
    description:
      "ระบบ token, typography, spacing, component states และ motion ที่ทำให้ UI consistent และ scale ได้ — ภาษากลางระหว่าง designer กับ developer",
  },
  {
    id: "lead-skills",
    label: "UX/UI Lead Skills",
    icon: "🎯",
    description:
      "ทักษะ lead งานออกแบบ — critique, stakeholder review, decision log, prioritization, design QA, UX debt และ governance ของ design system",
  },
  {
    id: "conversion",
    label: "Conversion UX",
    icon: "📈",
    description:
      "เชื่อม design decision เข้ากับ business metric — landing, pricing, checkout, onboarding, friction, offer clarity และการออกแบบ A/B test ที่ถูกวิธี",
  },
  {
    id: "handoff",
    label: "Developer Handoff",
    icon: "🤝",
    description:
      "ภาษา spec ที่ developer implement ได้โดยไม่ต้องเดา — acceptance criteria, component/state spec, responsive behavior, edge cases และ design-to-code review",
  },
  {
    id: "ai-prompting",
    label: "AI Prompting for UX/UI",
    icon: "🤖",
    description:
      "Pattern การเขียน prompt สำหรับงาน UX/UI — UI generation, review, refactor, handoff โครงสร้าง role + context + constraints + output format ที่ได้ผลจริง",
  },
];

export const ALL_CATEGORY: CategoryMeta = {
  id: "ux-foundation" as TermCategory,
  label: "ทั้งหมด",
  icon: "📚",
  description: "ทุกคำศัพท์ UX/UI ในคลัง — ค้นหาหรือกรองตาม category ด้านซ้าย",
};
