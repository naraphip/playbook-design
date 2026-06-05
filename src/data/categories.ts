import type { TermCategory } from "@/types/playbook";

export type CategoryMeta = {
  id: TermCategory;
  label: string;
  icon: string;
  description: string;
  count?: number;
};

export const CATEGORIES: CategoryMeta[] = [
  {
    id: "ui",
    label: "UI Components",
    icon: "🧩",
    description:
      "ชิ้นส่วนหน้าจอที่ designer และ developer ใช้สร้าง interface — เข้าใจชื่อและ behavior ของแต่ละ component เพื่อสั่งงานได้ตรง",
  },
  {
    id: "style",
    label: "Style & Look and Feel",
    icon: "🎨",
    description:
      "ภาษาสำหรับ 'สั่ง mood' ให้แม่นขึ้น — แทนที่จะพูดว่า 'ขอสวยๆ' ใช้คำศัพท์เหล่านี้เพื่อกำหนด visual direction ที่ชัดเจน",
  },
  {
    id: "ux",
    label: "UX Concepts",
    icon: "🧠",
    description:
      "หลักการออกแบบประสบการณ์ที่ทำให้เว็บ/แอปใช้งานได้จริง ไม่ใช่แค่สวย — รู้แล้วจะ review งาน designer ได้แหลมขึ้น",
  },
  {
    id: "css",
    label: "Dev / CSS Terms",
    icon: "💻",
    description:
      "คำศัพท์ฝั่ง dev ที่ UX/UI lead ควรรู้เพื่อสื่อสารกับ developer ได้แม่น — ลดความเข้าใจผิดระหว่าง design และ implementation",
  },
  {
    id: "lead",
    label: "UX/UI Lead Skills",
    icon: "🎯",
    description:
      "ทักษะเฉพาะสำหรับ lead งาน UX/UI — ตั้งแต่ design system, critique, handoff ไปจนถึงการแปลง requirement เป็น UI spec",
  },
  {
    id: "ai-prompting",
    label: "AI Image Prompting",
    icon: "🤖",
    description:
      "เทคนิคและ formula สำหรับสร้าง AI image ให้ได้ visual ที่ตรง use case — ทั้ง Midjourney, DALL-E, Ideogram และ Leonardo",
  },
  {
    id: "research",
    label: "UX Research",
    icon: "🔬",
    description:
      "วิธีการวิจัยผู้ใช้เพื่อตัดสินใจด้วยข้อมูล ไม่ใช่ความรู้สึก — รู้จัก method แต่ละแบบว่าเหมาะกับ context ไหน",
  },
  {
    id: "accessibility",
    label: "Accessibility",
    icon: "♿",
    description:
      "มาตรฐานและเทคนิคทำให้เว็บใช้ได้กับทุกคน รวมถึงคนพิการ — รู้ไว้เพื่อ audit งานและสื่อสาร requirement ให้ developer",
  },
  {
    id: "conversion",
    label: "Conversion UX",
    icon: "📈",
    description:
      "เชื่อม UX กับ business metric — เข้าใจว่า design decision ส่งผลต่อ conversion, bounce rate และ revenue อย่างไร",
  },
  {
    id: "design-system",
    label: "Design System",
    icon: "🏗️",
    description:
      "ระบบ token, component และ pattern ที่ทำให้ทีมทำงานร่วมกันได้สอดคล้อง — รากฐานของ design ที่ scale ได้",
  },
];

export const ALL_CATEGORY: CategoryMeta = {
  id: "ui" as TermCategory,
  label: "ทั้งหมด",
  icon: "📚",
  description: "ทุกคำศัพท์ UX/UI ในคลัง — ค้นหาหรือกรองตาม category ด้านซ้าย",
};
