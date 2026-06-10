import type { UXTerm } from "@/types/playbook";

export const AI_PROMPTING_TERMS: UXTerm[] = [
  {
    id: "ui-generation-prompt",
    slug: "ui-generation-prompt",
    term: "UI Generation Prompt",
    category: "ai-prompting",
    icon: "🤖",
    level: "intermediate",
    shortDescription: "โครงสร้าง prompt สำหรับสั่ง AI สร้าง UI: role + context + ผู้ใช้ + constraints + design system + acceptance criteria — ไม่ใช่ 'ทำหน้าเว็บสวยๆ'",
    fullDefinition:
      "UI generation prompt ที่ดีมีส่วนประกอบคงที่: role (AI เป็นใคร เก่งอะไร), product context (ทำอะไร ให้ใคร), user + งานที่ user มาทำ, constraints ทางเทคนิค (framework, library, token ที่ต้องใช้), visual direction (อ้าง design system หรือ reference ชัดๆ), สิ่งที่ห้ามทำ (anti-requirements) และ acceptance criteria ที่บอกว่าผลลัพธ์แบบไหนนับว่าใช้ได้ — ยิ่ง prompt เฉพาะเจาะจงเรื่อง 'ตัดสินใจแล้ว' มากเท่าไร AI ยิ่งเหลือพื้นที่เดาน้อยลงเท่านั้น",
    whyItMatters:
      "AI เติมทุกช่องว่างใน prompt ด้วยค่าเฉลี่ยของอินเทอร์เน็ต — prompt คลุมเครือได้ UI generic สีม่วง gradient ที่เหมือนกันทุก demo — เวลาที่เซฟได้จากการ generate จะเสียคืนหมดถ้าต้องวนแก้ 10 รอบเพราะไม่เคยบอก AI ว่า product นี้คืออะไร ใช้ token อะไร และห้ามทำอะไร — prompt ที่ดีคือ design brief ที่ดี",
    whenToUse: [
      "สร้าง UI draft แรกเร็วๆ เพื่อ explore ทิศทาง ก่อนตัดสินใจลงแรงจริง",
      "สร้าง variation ของ section เดิมหลายแบบเพื่อเทียบ (hero 3 แบบจาก brief เดียว)",
      "ต่อยอดจาก design system ที่มีอยู่ — ให้ AI ประกอบ component ที่มีแล้ว ไม่ใช่ประดิษฐ์ใหม่",
    ],
    whenNotToUse: [
      "Flow ที่ logic ซับซ้อนกว่า visual (เช่น ตาราง permission) — ออกแบบ behavior ก่อนค่อยให้ AI ช่วย build",
      "อย่าใช้ผลลัพธ์ AI เป็น final โดยไม่ review — มันคือ draft จาก junior ที่เร็วมาก ไม่ใช่งานส่งลูกค้า",
    ],
    howToApply: [
      "เปิดด้วย role ที่เจาะจง: 'senior product designer ที่เชี่ยวชาญ B2B dashboard' ไม่ใช่ 'AI ผู้ช่วย'",
      "ให้ context 3 ชั้น: product ทำอะไร / user คือใครมาทำอะไร / หน้านี้ต้อง achieve อะไร",
      "ระบุ technical constraints: framework, CSS approach, token/component ที่ต้องใช้ (แปะ list จริง)",
      "ใส่ anti-requirements: ห้าม gradient, ห้าม stock illustration, ห้ามสีนอก palette",
      "ปิดด้วย acceptance criteria 3-5 ข้อ — ให้ AI ตรวจงานตัวเองก่อนส่ง",
      "Iterate ทีละมิติ: รอบแรก layout, รอบสอง spacing, รอบสาม copy — ไม่สั่งแก้ทุกอย่างพร้อมกัน",
    ],
    checklist: [
      "มี role เฉพาะเจาะจง ไม่ใช่ 'ผู้ช่วย AI'",
      "Context ครบ: product / user / เป้าหมายของหน้านี้",
      "Constraints ทางเทคนิคระบุชัด (framework, token, component)",
      "มี anti-requirements — สิ่งที่ห้ามทำ",
      "มี acceptance criteria ให้ AI ตรวจตัวเอง",
      "ขอผลลัพธ์ทีละชิ้น ไม่ใช่ทั้งแอปใน prompt เดียว",
    ],
    deliverables: ["Prompt template ของทีมสำหรับ UI generation", "Library ของ prompt ที่ work แล้ว พร้อม output ตัวอย่าง"],
    goodExample:
      "Prompt ระบุ: role (senior designer สาย logistics SaaS), user (พนักงานคลังใช้บน tablet หน้างาน), constraint (Tailwind + token ที่แปะมา, touch target ≥44px), ห้าม (สีนอก palette, icon เกิน 2 ชุด), AC (สแกนสถานะพัสดุได้ใน 3 วินาที) — ได้ draft ที่ทีมเอาไป refine ต่อได้จริงในรอบแรก",
    badExample:
      "'ช่วยทำ dashboard สวยๆ ทันสมัยหน่อย' — ได้ dashboard สีม่วง gradient, การ์ดสถิติ 4 ใบที่ไม่ตรง metric จริงของ product, กราฟ donut ที่ไม่มีข้อมูลจะใส่ — เสียเวลาแก้ 10 รอบแล้วทิ้งทั้งหมด เพราะสิ่งที่ขาดไม่ใช่ฝีมือ AI แต่คือ brief",
    commonMistakes: [
      "Prompt สั้นคลุมเครือแล้วหวังให้ AI เดาใจ — AI เดาเป็นค่าเฉลี่ยอินเทอร์เน็ตเสมอ",
      "ไม่ให้ design token/component ที่มี — ได้ของใหม่ที่เข้ากับระบบเดิมไม่ได้",
      "สั่งทั้งแอปใน prompt เดียว — ได้ของกว้างแต่ตื้นทุกหน้า",
      "ไม่มี anti-requirements — AI ใส่ของที่เห็นบ่อยในเทรนนิ่ง (gradient, glassmorphism) มาให้ฟรีๆ",
      "Iterate แบบ 'แก้ทุกอย่าง' ทุกรอบ — AI งง คุณงง ไม่มีมิติไหนนิ่งสักอัน",
    ],
    relatedSlugs: ["ux-review-prompt", "design-system-prompt", "component-refactor-prompt", "landing-page-prompt"],
    tags: ["prompt", "generation", "ai"],
    prompts: [
      `You are a senior product designer specializing in [DOMAIN, e.g. B2B logistics SaaS].

Build: [SPECIFIC SCREEN/SECTION — one screen per prompt]
Product: [WHAT IT DOES, ONE SENTENCE]
User: [WHO + THE TASK THEY COME TO DO + DEVICE CONTEXT]
This screen must achieve: [PRIMARY GOAL, e.g. "scan order status in under 3 seconds"]

Technical constraints:
- Stack: [FRAMEWORK + CSS APPROACH]
- Use ONLY these design tokens: [PASTE TOKEN LIST]
- Reuse these existing components: [LIST]

Do NOT: use colors outside the palette, add decorative gradients/illustrations, invent new components when a listed one fits, use placeholder lorem ipsum (write realistic copy for this product).

Acceptance criteria — verify before responding:
1. [CRITERION]
2. [CRITERION]
3. Works at 375px without horizontal scroll
4. All interactive elements have visible focus states

Output the code, then a short list of design decisions you made that I should review.`,
    ],
    visualDemo: "prompt-card",
    demoData: {
      title: "UI Generation Prompt",
      prompt: {
        title: "Warehouse Dashboard",
        audience: "claude-code",
        excerpt: "You are a senior product designer specializing in logistics SaaS. Build: order status board for warehouse staff on tablets. Use ONLY these tokens... Do NOT use colors outside the palette...",
      },
    },
  },
  {
    id: "ux-review-prompt",
    slug: "ux-review-prompt",
    term: "UX Review Prompt",
    category: "ai-prompting",
    icon: "🔍",
    level: "intermediate",
    shortDescription: "Prompt ให้ AI ทำ UX review แบบมีโครง: ระบุ persona + task + เกณฑ์ + รูปแบบ output — ได้ findings ที่ actionable แทนคำชมกว้างๆ",
    fullDefinition:
      "UX review prompt ที่ดีบังคับ AI ให้ review อย่างมีวินัย: กำหนดมุมมอง (review ในฐานะ user คนไหน มาทำ task อะไร), กำหนดเกณฑ์ (heuristics, conversion, accessibility — เลือกเลนส์), บังคับ output format (ตาราง finding × severity × evidence × fix), บังคับให้ชี้ตำแหน่งเจาะจง และจำกัดจำนวน (top 5 ตาม impact ไม่ใช่ 50 ข้อจิปาถะ) — ถ้าไม่คุมแบบนี้ AI จะตอบเป็นเรียงความชมก่อนติทีหลังที่เอาไปทำอะไรต่อไม่ได้",
    whyItMatters:
      "AI review แบบไม่มีโครงให้ feedback ประเภท 'โดยรวมดี อาจปรับ spacing เล็กน้อย' — ฟังเพลินแต่ actionable เป็นศูนย์ — ขณะที่ prompt มีโครงทำให้ AI กลายเป็น reviewer ที่ไม่เหนื่อย ไม่เกรงใจ และไล่ครบทุกหน้าจอ — เหมาะเป็นด่านแรกก่อน review โดยคน เพื่อให้คนใช้เวลากับปัญหาที่ต้องใช้ judgment จริงๆ",
    whenToUse: [
      "ก่อนส่งงานให้คน review — ให้ AI กรอง issue พื้นฐานออกก่อน (label, contrast, hierarchy)",
      "Review งานตัวเองตอนไม่มีเพื่อนร่วมทีม — AI เป็น rubber duck ที่มีความเห็น",
      "ไล่ review หลายหน้าด้วยเกณฑ์เดียวกันให้สม่ำเสมอ — งานที่คนทำแล้วล้า",
    ],
    whenNotToUse: [
      "ตัดสินใจ design ที่ต้องรู้ context องค์กร/การเมือง/ประวัติการตัดสินใจ — AI ไม่รู้ว่าทำไมปุ่มนั้นต้องอยู่ตรงนั้น",
      "แทน usability test กับ user จริง — AI เดาพฤติกรรมได้แต่ไม่ใช่หลักฐาน",
    ],
    howToApply: [
      "ให้ context ก่อนขอ review: product อะไร, user คือใคร, task ที่ user มาทำ, business goal ของหน้า",
      "เลือกเลนส์ชัด: heuristic / conversion / a11y / cognitive load — review คนละเลนส์คนละรอบ",
      "บังคับ format: ตาราง finding / ตำแหน่ง / severity / เหตุผล / fix ที่เสนอ",
      "บังคับจัดลำดับ: top 5 ตาม impact ต่อ task ของ user — ไม่เอา laundry list",
      "ขอให้แยก 'ผิดหลักการ' (มี evidence) กับ 'รสนิยม' (ความเห็น) — สอนให้ AI ถ่อมตัว",
      "ใช้ผลเป็น input ของ review โดยคน — ไม่ forward ผล AI ตรงให้ทีมโดยไม่กรอง",
    ],
    checklist: [
      "ให้ context ครบก่อน review: product / user / task / goal",
      "ระบุเลนส์การ review ชัดเจน หนึ่งเลนส์ต่อรอบ",
      "Output เป็นตารางที่มี severity และ fix เสมอ",
      "จำกัด top N ตาม impact — บังคับให้ AI จัดลำดับ",
      "แยก finding ที่มีหลักการกับความเห็นรสนิยม",
      "ผล AI ถูกกรองโดยคนก่อนส่งต่อทีมเสมอ",
    ],
    deliverables: ["UX review prompt template ต่อเลนส์ (heuristic/conversion/a11y)", "Review report จาก AI ที่กรองแล้ว พร้อม action items"],
    goodExample:
      "แปะ screenshot หน้า checkout + prompt: 'review ในฐานะ user ใหม่ที่รีบจ่ายบนมือถือ, เลนส์ friction, ตาราง finding/severity/fix, top 5' — AI จับได้ว่าช่อง promo code เด่นกว่าปุ่มจ่าย (พา user ออกไปหาคูปอง) — ข้อที่ทีมมองข้ามเพราะชินตา",
    badExample:
      "'ช่วยดู design นี้หน่อย ดีไหม' — AI ตอบ 'การออกแบบโดยรวมสะอาดตา มี hierarchy ชัดเจน อาจพิจารณาเพิ่ม contrast เล็กน้อย' — สามบรรทัดที่ไม่บอกว่าตรงไหน เท่าไร ทำไม — ผู้ถามรู้สึกได้รับคำตอบแต่ไม่มีอะไรไปทำต่อสักอย่าง",
    commonMistakes: [
      "ขอ review โดยไม่ให้ context — AI ติสิ่งที่จริงๆ เป็น constraint ที่ตัดสินใจแล้ว",
      "ไม่บังคับ format — ได้เรียงความที่ต้องมานั่งแปลงเป็น action เอง",
      "ไม่จำกัดจำนวน — ได้ 40 ข้อปนกันหมดไม่รู้อะไรสำคัญ",
      "เชื่อ AI หมดทุกข้อ — AI มั่นใจเท่ากันทั้งข้อที่ถูกและข้อที่มั่ว",
      "ใช้เลนส์ปนกันในรอบเดียว — ได้ review ตื้นทุกมิติแทนที่จะลึกสักมิติ",
    ],
    relatedSlugs: ["heuristic-evaluation", "ui-generation-prompt", "accessibility-review-prompt", "design-critique"],
    tags: ["review", "prompt", "ai"],
    prompts: [
      `You are a senior UX reviewer. Review the attached [SCREENSHOT/URL] strictly through ONE lens: [LENS: heuristic violations | conversion friction | cognitive load].

Context (do not review against anything outside this):
- Product: [WHAT IT IS]
- User: [WHO], arriving to: [TASK], on [DEVICE]
- Business goal of this screen: [GOAL]
- Known constraints (do not flag these): [e.g. "brand requires this logo size"]

Rules:
- Report the TOP 5 findings only, ordered by impact on the user's task
- Each finding: exact location / what's wrong / why it matters (cite the principle) / concrete fix
- Separate a final section "JUDGMENT CALLS" for anything that is taste rather than principle — max 2 items
- No compliments, no summary paragraph. If the screen has fewer than 5 real issues, say so instead of inventing filler.

Output as a markdown table, then judgment calls as bullets.`,
    ],
    visualDemo: "audit-report",
    demoData: {
      title: "AI UX Review — Checkout",
      findings: [
        { severity: "high", issue: "ช่อง promo code เด่นกว่าปุ่มจ่าย — พา user ออกนอก flow", fix: "ยุบเป็น text link 'มีโค้ดส่วนลด?'" },
        { severity: "medium", issue: "สรุปยอดอยู่ใต้ fold บนมือถือ", fix: "Sticky summary bar แสดงยอดรวม + ปุ่มจ่าย" },
        { severity: "low", issue: "ไอคอนบัตรเครดิตเก่า ไม่มี PromptPay", fix: "อัปเดต payment icons ตามที่รับจริง" },
      ],
    },
  },
  {
    id: "accessibility-review-prompt",
    slug: "accessibility-review-prompt",
    term: "Accessibility Review Prompt",
    category: "ai-prompting",
    icon: "♿",
    level: "intermediate",
    shortDescription: "Prompt ให้ AI ตรวจ accessibility จาก code/markup: semantic, ARIA, keyboard, contrast — จุดที่ AI ตรวจ code ได้แม่นกว่าดูภาพ",
    fullDefinition:
      "Accessibility review prompt ใช้จุดแข็งของ AI ที่อ่าน code ได้: ส่ง markup/component จริงให้ตรวจ semantic structure (heading order, landmark, list ที่ควรเป็น list), accessible name (button/link/input มี name ครบไหม), ARIA ที่ใช้ผิด (aria-label ทับ visible text, role ซ้ำซ้อน), keyboard interaction ของ custom widget เทียบกับ ARIA APG pattern และ focus management ใน modal/drawer — ส่วน contrast ให้แปะค่าสีให้คำนวณ — AI ตรวจสิ่งเหล่านี้จาก code ได้แม่นและครบกว่าการเดาจาก screenshot มาก",
    whyItMatters:
      "ปัญหา a11y ส่วนใหญ่อยู่ใน markup ไม่ใช่ใน visual — div+onClick ที่ดูเหมือนปุ่มทุกประการแต่ keyboard เข้าไม่ถึง, modal ที่เปิดแล้ว focus หลุดไปอยู่ข้างหลัง — ตามองไม่เห็นแต่ AI อ่าน code เจอใน 30 วินาที — การตรวจอัตโนมัติ (axe) จับได้แค่ ~30-40% ของปัญหา ส่วน AI ที่ถูก prompt ดีจับชั้นที่เหลือได้บางส่วน: ARIA ที่ valid แต่ใช้ผิดความหมาย, focus order ที่ valid แต่ประหลาด",
    whenToUse: [
      "Review component ใหม่ก่อน merge — แปะ code ให้ตรวจ semantic + keyboard + ARIA",
      "Custom widget (dropdown, combobox, modal ทำเอง) — เทียบกับ ARIA APG pattern",
      "เมื่อไม่มี a11y specialist ในทีม — AI เป็นด่านแรกที่ดีกว่าไม่มีอะไรเลยมาก",
    ],
    whenNotToUse: [
      "แทนการทดสอบกับ screen reader จริง — AI เดา VoiceOver/NVDA behavior ได้ไม่แม่น โดยเฉพาะ browser quirk",
      "แทนการทดสอบกับ user ที่ใช้ assistive technology จริง — เครื่องมือไม่เท่ากับประสบการณ์",
    ],
    howToApply: [
      "ส่ง code จริง (component/HTML) ไม่ใช่ screenshot — นี่คือจุดที่ AI แม่นสุด",
      "ระบุ scope: semantic / name / ARIA / keyboard / focus management — ครบ 5 ชั้น",
      "ให้เทียบ custom widget กับ ARIA APG pattern ที่ตรง — อ้างชื่อ pattern ตรงๆ",
      "แปะค่าสีจาก palette ให้คำนวณ contrast — อย่าให้เดาจากภาพ",
      "ขอ fix เป็น code ที่แก้แล้ว ไม่ใช่แค่คำอธิบาย — ลด friction การแก้เหลือศูนย์",
      "ตามด้วยตรวจจริง: Tab ไล่ทั้งหน้า + เปิด screen reader หนึ่งรอบ — AI จับ structure ได้ แต่ feel ต้องคนตรวจ",
    ],
    checklist: [
      "ส่ง code จริงให้ตรวจ ไม่ใช่ screenshot",
      "ครอบ 5 ชั้น: semantic / accessible name / ARIA / keyboard / focus",
      "Custom widget ถูกเทียบกับ ARIA APG pattern ที่ตรง",
      "Contrast คำนวณจากค่าสีจริงที่แปะให้",
      "ขอ fix เป็น code พร้อมใช้ ไม่ใช่คำแนะนำลอยๆ",
      "ผล AI ถูก verify ด้วย keyboard + screen reader จริงก่อนปิด",
    ],
    deliverables: ["A11y review report ต่อ component (finding + code fix)", "Prompt template ที่ฝังใน PR workflow ของทีม"],
    goodExample:
      "แปะ code dropdown ที่ทีมทำเอง + prompt ให้เทียบ ARIA APG combobox pattern — AI ชี้: ใช้ div ไม่มี role, ไม่มี aria-expanded, ลูกศรลงไม่เปิด list, Esc ไม่ปิด, focus ไม่กลับ trigger ตอนปิด — พร้อม code ที่แก้ครบ — ทีม verify ด้วย VoiceOver แล้ว merge ใน 1 ชม.",
    badExample:
      "แปะ screenshot หน้าเว็บถาม 'accessible ไหม' — AI ตอบจากที่เห็น: 'contrast ดูเพียงพอ ควรเพิ่ม alt text' — มองไม่เห็นว่าปุ่มทั้งหน้าเป็น div, modal ไม่มี focus trap, heading กระโดดจาก h1 ไป h4 — ได้ความมั่นใจปลอมว่า 'ผ่านแล้ว' ทั้งที่ keyboard user ใช้ไม่ได้เลย",
    commonMistakes: [
      "ส่ง screenshot แทน code — AI ตรวจได้แค่ผิว ส่วนปัญหาจริงอยู่ใน markup",
      "ถามกว้าง 'accessible ไหม' — ได้คำตอบกว้างที่พลาดชั้น keyboard/focus",
      "เชื่อผล AI โดยไม่ verify กับ screen reader จริง — AI พลาด browser/AT quirk ได้",
      "ให้ AI เดา contrast จากภาพ — ต้องแปะค่าสีให้คำนวณเท่านั้น",
      "ตรวจครั้งเดียวตอนจบ — ควรฝังใน PR ทุกครั้งที่แตะ component กลาง",
    ],
    relatedSlugs: ["accessibility-requirements", "accessibility-audit", "ux-review-prompt", "component-refactor-prompt"],
    tags: ["accessibility", "aria", "prompt", "code-review"],
    prompts: [
      `You are an accessibility engineer reviewing component code against WCAG 2.2 AA and ARIA Authoring Practices. Code: [PASTE COMPONENT CODE]. Color values used: [PASTE HEX PAIRS + USAGE].

Review in 5 layers:
1. SEMANTICS: wrong/missing elements (div-as-button, heading order, lists, landmarks)
2. ACCESSIBLE NAMES: every interactive element — does it have a name? Is the name meaningful? Write the missing labels.
3. ARIA: incorrect/redundant/conflicting attributes; for this widget type, compare against the matching ARIA APG pattern ([NAME IT]) and list every divergence
4. KEYBOARD: required keys for this pattern vs what the code handles; focus management (trap, restore, initial focus) for any overlay
5. CONTRAST: compute ratios for the color pairs provided; flag failures with required minimums

For every finding: severity (blocker/major/minor) + the corrected code snippet, not just advice. End with: what this review CANNOT verify from code alone (real screen reader behavior, etc.) so the team knows what to test manually.`,
    ],
    visualDemo: "qa-checklist",
    demoData: {
      title: "A11y Code Review — Dropdown",
      items: [
        "เปลี่ยน div เป็น button หรือเพิ่ม role + tabindex",
        "เพิ่ม aria-expanded + aria-controls ที่ trigger",
        "ArrowDown เปิด list และ focus item แรก (APG combobox)",
        "Esc ปิด + คืน focus ไปที่ trigger",
        "Contrast ตัวเลือกที่ hover: 2.9:1 → ต้อง ≥4.5:1",
        "ทดสอบจริงกับ VoiceOver ก่อน merge (AI verify ไม่ได้)",
      ],
    },
  },
  {
    id: "component-refactor-prompt",
    slug: "component-refactor-prompt",
    term: "Component Refactor Prompt",
    category: "ai-prompting",
    icon: "🔧",
    level: "advanced",
    shortDescription: "Prompt ให้ AI refactor UI code เข้าระบบ: แทน hardcode ด้วย token, ยุบ component ซ้ำ, เติม state ที่ขาด — โดยห้ามเปลี่ยน behavior",
    fullDefinition:
      "Component refactor prompt ใช้ AI ทำงานที่คนขี้เกียจที่สุดแต่ระบบต้องการที่สุด: ไล่แทนค่า hardcode ด้วย design token (ให้ mapping จริง), รวม component ที่ clone กันให้เหลือตัวเดียวรับ props, เติม state ที่ขาด (focus-visible, loading, error) ตาม spec, แยก logic ออกจาก presentation — หัวใจคือ guardrail: ระบุชัดว่าห้ามเปลี่ยน visual output และ behavior, ขอ diff ทีละไฟล์ review ได้, และมี checklist ให้ AI ยืนยันว่าอะไรไม่เปลี่ยนบ้าง",
    whyItMatters:
      "Design debt (hardcode 200 จุด, ปุ่ม 9 เวอร์ชัน) ไม่ถูกแก้เพราะงานน่าเบื่อและเสี่ยง — ไม่มีใครอยากไล่แทนสีทีละจุดสามสัปดาห์ — AI ทำงาน mechanical แบบนี้ได้เร็วและไม่ล้า แต่ถ้า prompt ไม่มี guardrail มันจะ 'ปรับปรุง' เกินสั่ง: เปลี่ยน behavior, แก้ logic ที่ไม่เกี่ยว — ความเสียหายจาก refactor ที่เกินขอบเขตแพงกว่า debt เดิม",
    whenToUse: [
      "หลัง audit เจอ hardcode/clone จำนวนมาก — ให้ AI ไล่แทนตาม mapping ที่อนุมัติแล้ว",
      "Component เก่าที่ขาด state (ไม่มี focus, loading) — เติมตาม spec ปัจจุบัน",
      "ก่อน rebrand/redesign — เก็บกวาดให้ทุกอย่างผ่าน token ก่อน แล้ว rebrand จะถูกลงมหาศาล",
    ],
    whenNotToUse: [
      "Refactor พร้อมกับเปลี่ยน design — แยกสองงานเสมอ: เก็บกวาดก่อน (visual เท่าเดิม) แล้วค่อยเปลี่ยน",
      "Code ที่ไม่มี test และไม่มีใครเข้าใจ — ให้ AI อธิบายก่อนว่ามันทำอะไร แล้วค่อยตัดสินใจแตะ",
    ],
    howToApply: [
      "ทำ mapping ก่อน: ค่า hardcode → token ไหน — คนตัดสินใจ mapping, AI ทำตาม",
      "ตั้ง guardrail ใน prompt: ห้ามเปลี่ยน visual output, ห้ามแตะ logic, ห้ามเพิ่ม dependency",
      "ขอทีละชุดเล็ก: ไฟล์เดียว/component เดียวต่อรอบ — diff ใหญ่ review ไม่ไหวคือ diff อันตราย",
      "ขอให้ AI ลิสต์ 'สิ่งที่ไม่แน่ใจ' แยกออกมา — ค่าที่ไม่มี token ตรง ให้ flag ไม่ใช่เดา",
      "Verify ด้วย visual regression (screenshot ก่อน-หลัง) หรืออย่างน้อยเทียบตาทุก state",
      "เคสที่เจอซ้ำให้สกัดเป็น codemod/lint rule — AI ช่วยเขียน rule ได้ด้วย",
    ],
    checklist: [
      "Mapping hardcode → token ถูกคนอนุมัติก่อน AI ลงมือ",
      "Prompt มี guardrail: ห้ามเปลี่ยน behavior/visual/dependency",
      "ทำทีละไฟล์/component — diff เล็กพอ review จริงได้",
      "ค่าที่ไม่มี token ตรงถูก flag ไม่ใช่ถูกเดา",
      "มี visual check ก่อน-หลัง ทุก state ไม่ใช่แค่ default",
      "Pattern ซ้ำถูกสกัดเป็น lint rule กันเกิดใหม่",
    ],
    deliverables: ["Refactor PR ทีละชุดพร้อม diff + รายการ flagged", "Token mapping table และ lint rule ที่เกิดจากงานนี้"],
    goodExample:
      "ทีมแปะ Button clone 3 เวอร์ชัน + token list + สั่ง 'รวมเป็นตัวเดียวรับ variant prop, visual ทุกตัวต้องเท่าเดิมเป๊ะ, ลิสต์ทุกจุดที่ไม่แน่ใจ' — AI ส่ง component เดียว + flag ว่าเวอร์ชัน C มี margin แปลกที่ไม่มี token ตรง — คนตัดสินใจเคสเดียวที่เหลือ, visual regression ผ่าน, debt ลด 3 เหลือ 1",
    badExample:
      "'ช่วย refactor ไฟล์นี้ให้ดีขึ้น' — AI เปลี่ยนชื่อ prop, สลับ library จัดการ form, 'ปรับปรุง' UX ด้วยการเพิ่ม animation, แทนสีด้วย token ที่มันเดาเอง — diff 800 บรรทัดที่ไม่มีใครกล้า merge — สุดท้ายทิ้งทั้ง PR เสียเวลาทั้งสองฝ่าย",
    commonMistakes: [
      "สั่ง 'ทำให้ดีขึ้น' โดยไม่ขีดเส้นขอบเขต — AI ปรับปรุงเกินสั่งเสมอ",
      "ให้ AI เดา token mapping เอง — ได้ mapping ที่ดูสมเหตุผลแต่ผิดความหมาย (เอา error-red ไปใช้กับ badge)",
      "Diff ใหญ่เกิน review — อ่านผ่านๆ แล้ว merge คือสูตร incident",
      "ตรวจแค่ default state — ความพังซ่อนใน hover/disabled/loading เสมอ",
      "Refactor + เปลี่ยน design ในรอบเดียว — แยกความเปลี่ยนแปลงไม่ออกว่าอะไรตั้งใจ",
    ],
    relatedSlugs: ["design-tokens", "design-to-code-review", "ui-generation-prompt", "design-system-governance", "ux-debt"],
    tags: ["refactor", "tokens", "tech-debt", "prompt"],
    prompts: [
      `You are a frontend engineer doing a strictly-scoped refactor. Input: [PASTE COMPONENT CODE(S)] and the approved token mapping: [PASTE MAPPING TABLE, e.g. #6B7280 → text-secondary].

Task: [e.g. "replace hardcoded values with tokens" | "merge these N duplicated components into one with variant props" | "add missing focus-visible/loading/disabled states per this spec: ..."]

HARD CONSTRAINTS — violating any of these fails the task:
- Visual output must be pixel-identical for all existing states and variants
- No behavior changes, no new dependencies, no renamed public props
- One file/component per response; output as a reviewable diff
- Any value with NO entry in the mapping table: do NOT guess — collect into a "NEEDS DECISION" list with your suggested token and reasoning

After the diff, output:
1. NEEDS DECISION list
2. UNCHANGED VERIFICATION: list of states/variants you confirmed identical
3. Suggested lint rule or codemod to prevent this debt from recurring`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Refactor: Button Clones",
      before: { label: "Debt", points: ["ปุ่ม clone 3 เวอร์ชันใน 3 หน้า", "สี hardcode 14 จุด", "เวอร์ชัน C ไม่มี focus state"] },
      after: { label: "เข้าระบบ", points: ["Button เดียวรับ variant prop", "ทุกค่าผ่าน token + 1 เคส flag ให้คนตัดสิน", "Visual regression ผ่านทุก state"] },
    },
  },
  {
    id: "design-system-prompt",
    slug: "design-system-prompt",
    term: "Design System Prompt",
    category: "ai-prompting",
    icon: "🏗️",
    level: "advanced",
    shortDescription: "Prompt ให้ AI ทำงานกับ design system: ร่าง token scale, เขียน component spec/doc, ตรวจความ consistent — โดยให้ของจริงของระบบเป็น input เสมอ",
    fullDefinition:
      "Design system prompt ใช้ AI ในงานระบบ: generate token scale จากค่าตั้งต้น (type scale จาก base 16px ratio 1.25, spacing scale, สี semantic จาก palette), เขียน component documentation จาก code ที่มีอยู่ (props, usage, do/don't), ตรวจ consistency ข้าม component (naming, prop pattern, state ครบไหม) และร่าง guideline จากการตัดสินใจที่ทีมทำแล้ว — กติกาสำคัญ: AI ต้องทำงานจากของจริงของระบบ (token จริง, code จริง, การตัดสินใจจริง) ไม่ใช่ความรู้ทั่วไปเรื่อง design system",
    whyItMatters:
      "Design system ตายเพราะงานเอกสารและงานตรวจ consistency ไม่มีใครทำ — component มี 30 ตัวแต่ doc มี 8, naming ปนกันสามสไตล์ — งานเหล่านี้คืองานที่ AI ทำได้ดีเพราะมัน systematic ไม่ใช่ creative — ทีมเล็กที่ไม่มี dedicated system team ได้ leverage ตรงนี้มากที่สุด: doc ที่อัปเดต, ความ consistent ที่ถูกตรวจอัตโนมัติ, ระบบที่มีชีวิตจริงแทนที่จะเป็นไฟล์ Figma ฝุ่นจับ",
    whenToUse: [
      "เริ่มระบบใหม่ — ให้ AI ร่าง scale (type/spacing/color) จาก base values แล้วคน adjust",
      "Doc ค้าง — แปะ component code ให้ AI ร่าง doc แล้วคนตรวจแก้",
      "ตรวจ consistency ประจำ — แปะ component หลายตัวให้หา pattern ที่แตกแถว",
    ],
    whenNotToUse: [
      "ตัดสินใจ design direction (โทนแบรนด์, ความหนาแน่นของ UI) — นี่คืองาน judgment ที่ระบบทั้งหมดจะสืบทอด ต้องเป็นคนตัดสิน",
      "อย่าให้ AI ร่างระบบจากศูนย์โดยไม่มี product จริงเป็น input — ได้ระบบ generic ที่ไม่ตอบโจทย์ใคร",
    ],
    howToApply: [
      "งาน scale: ให้ base value + ratio + จำนวนขั้น แล้วให้ AI gen พร้อมชื่อ — คนตัดสิน base/ratio",
      "งาน doc: แปะ code จริง + ตัวอย่าง doc ที่ทีมชอบหนึ่งชิ้นเป็น template — ได้ doc สม่ำเสมอทั้งระบบ",
      "งานตรวจ: แปะ component หลายตัว ถาม 'naming/prop/state pattern ตัวไหนแตกแถว' — ได้ inconsistency list",
      "งาน semantic token: ให้ palette + บริบทการใช้ ให้ AI เสนอ semantic layer (bg-surface, text-muted) — คน review ความหมาย",
      "ทุก output คือ draft — กฎของระบบต้องผ่านตาคนที่ accountable ต่อระบบเสมอ",
      "เก็บ prompt ที่ work เป็น library ของทีม — งานระบบเป็นงานซ้ำ prompt reuse ได้สูง",
    ],
    checklist: [
      "AI ได้ของจริงของระบบเป็น input (token/code/decision) ไม่ใช่ทำจากความรู้ทั่วไป",
      "คนตัดสิน base values และ direction — AI ทำส่วน systematic",
      "Doc ใช้ template จากตัวอย่างที่ทีมอนุมัติ",
      "Consistency check รันเป็นประจำ ไม่ใช่ครั้งเดียว",
      "ทุก output ผ่านการ review โดยเจ้าของระบบก่อนเป็นกฎ",
      "Prompt ที่ work ถูกเก็บเป็น library ใช้ซ้ำ",
    ],
    deliverables: ["Token scale + semantic layer (draft จาก AI, อนุมัติโดยคน)", "Component doc ครบทุกตัวในระบบ", "Consistency report ประจำ sprint"],
    goodExample:
      "ทีม 2 designer ไม่มีเวลาเขียน doc — แปะ code component 22 ตัว + doc ตัวอย่าง 1 ชิ้นที่เขียนเอง — AI gen doc ทั้งหมดตาม template, คนตรวจแก้เฉลี่ยตัวละ 10 นาที — จาก doc 8/30 เป็น 30/30 ในสองวัน และ AI ยังเจอ Button กับ IconButton ที่ prop ชื่อไม่ตรงกัน (size vs scale) แถมให้",
    badExample:
      "'ช่วยสร้าง design system ให้หน่อย' โดยไม่แปะอะไรเลย — ได้ token generic ชื่อ primary/secondary, ปุ่มสามขนาดมาตรฐาน, สีฟ้า default — ไม่เกี่ยวอะไรกับ product จริงที่เป็นแอปการเงินที่ต้องการความหนาแน่นข้อมูลสูง — ทีมหลงดีใจหนึ่งวันแล้วพบว่าใช้ไม่ได้สักชิ้น",
    commonMistakes: [
      "ให้ AI สร้างระบบจากอากาศ — ได้ของ generic ที่ไม่ตอบ product จริง",
      "ให้ AI ตัดสิน design direction — ความผิดพลาดจะถูกสืบทอดไปทั้งระบบ",
      "Doc ที่ AI เขียนไม่ผ่านตาคน — ผิดหนึ่งจุดในระบบ = ผิดทุกที่ที่อ้างถึง",
      "Gen ครั้งเดียวแล้วเลิก — ระบบเปลี่ยนทุก sprint, doc ต้อง regen ตาม",
      "ไม่เก็บ prompt ที่ work — จ่ายต้นทุนเรียนรู้ใหม่ทุกครั้งที่ทำงานเดิม",
    ],
    relatedSlugs: ["design-tokens", "component-specification", "design-system-governance", "component-refactor-prompt"],
    tags: ["design-system", "tokens", "documentation", "prompt"],
    prompts: [
      `You are a design systems specialist. Task: generate the semantic token layer for our system.

Inputs:
- Raw palette: [PASTE HEX VALUES WITH NAMES]
- Product context: [e.g. "data-dense fintech dashboard, light + dark themes, WCAG AA"]
- Existing naming convention to follow: [PASTE 3-5 EXISTING TOKEN NAMES AS PATTERN]

Generate:
1. Semantic tokens for: backgrounds (page/surface/raised), text (primary/secondary/muted/disabled), borders, interactive states (primary/hover/active/disabled), feedback (success/warning/error/info — bg + text + border each)
2. For every token: raw value assigned + contrast ratio against its intended pairing + PASS/FAIL at AA
3. Dark theme mapping for the same semantic names
4. FLAGS: every pairing that fails AA with the nearest passing alternative from the palette; semantic roles the palette cannot cover (gaps needing new raw colors)

Rules: never invent raw colors not in the palette (flag gaps instead); follow the naming pattern exactly. Output as a token table ready for review — mark this DRAFT, final approval is human.`,
    ],
    visualDemo: "handoff-spec",
    demoData: {
      title: "Semantic Token Draft",
      specs: [
        { label: "bg-surface", value: "gray-50 — contrast กับ text-primary 13.2:1 ✓" },
        { label: "text-muted", value: "gray-500 — 4.6:1 บน surface ✓" },
        { label: "feedback-error-text", value: "red-600 — 5.1:1 ✓ / dark: red-300" },
        { label: "FLAG", value: "warning-text บน warning-bg ได้ 3.8:1 — ต้องเพิ่ม amber-700" },
      ],
    },
  },
  {
    id: "product-page-prompt",
    slug: "product-page-prompt",
    term: "Product Page Prompt",
    category: "ai-prompting",
    icon: "🛍️",
    level: "intermediate",
    shortDescription: "Prompt สร้าง/รีวิวหน้า product (e-commerce/SaaS feature page) ที่บังคับโครงตามการตัดสินใจซื้อ: ภาพ-ราคา-ตัวเลือก-proof-CTA",
    fullDefinition:
      "Product page prompt ฝังความรู้โครงสร้างหน้า product ลงใน prompt: ลำดับข้อมูลตามการตัดสินใจซื้อ (เห็นของชัด → ราคา/เงื่อนไขไม่ต้องหา → เลือก variant ง่าย → ความเชื่อใจ (รีวิว, นโยบายคืน) → CTA ชัด), ข้อมูลที่ขาดไม่ได้ (ค่าส่ง, สต็อก, ขนาด/สเปก) และ mobile pattern (gallery แบบ swipe, sticky add-to-cart) — ใช้ได้ทั้งโหมด generate (สร้างหน้าใหม่จากข้อมูล product จริง) และโหมด review (ตรวจหน้าที่มีกับ checklist เดียวกัน)",
    whyItMatters:
      "หน้า product คือจุดตัดสินใจเงินจริง — ข้อมูลที่หาไม่เจอ ณ จุดตัดสิน (ค่าส่งเท่าไร? คืนได้ไหม? ไซส์นี้เหลือไหม?) คือเหตุผลอันดับต้นของ cart abandonment — prompt ที่ฝังโครงถูกต้องทำให้ AI สร้าง/ตรวจหน้าโดยไม่หลุดข้อมูลที่ขาดไม่ได้ แทนที่จะได้หน้าสวยที่ลืมบอกค่าส่ง",
    whenToUse: [
      "สร้าง product page template ใหม่ — gen โครงจากข้อมูล product จริงให้ครบตั้งแต่ draft แรก",
      "Review หน้า product เดิมที่ conversion ต่ำ — ไล่ checklist การตัดสินใจซื้อ",
      "ปรับหน้าเดียวกันให้เข้ากับ product หลาย category (เสื้อผ้าต้องมี size guide, อาหารต้องมีวันหมดอายุ)",
    ],
    whenNotToUse: [
      "Product ที่การซื้อไม่ตัดสินบนหน้า (enterprise ที่ต้องคุย sales) — โครง 'add to cart' ไม่ตรงโจทย์ ใช้โครง lead-gen แทน",
      "อย่าใช้ template เดียวข้าม category โดยไม่ adjust — ข้อมูลขาดไม่ได้ของแต่ละ category ต่างกัน",
    ],
    howToApply: [
      "ป้อนข้อมูล product จริง: ชื่อ, ราคา, variants, ภาพที่มี, ค่าส่ง, นโยบายคืน, รีวิวจริง — ห้ามให้ AI แต่งข้อมูล",
      "ระบุ category เพื่อให้ได้ข้อมูลเฉพาะ: แฟชั่นต้อง size guide, ของกินต้องวันหมดอายุ/ส่วนผสม",
      "บังคับลำดับ: ของชัดก่อน → ราคา+เงื่อนไขครบ → เลือกง่าย → proof → CTA — ห้าม creative จัดลำดับใหม่",
      "Mobile-first: sticky add-to-cart, gallery swipe ได้, variant เลือกได้ด้วยนิ้วเดียว",
      "โหมด review: แปะ URL/screenshot ให้ไล่ checklist เดียวกัน หา 'ข้อมูลที่ user ต้องการแต่หาไม่เจอ'",
      "ตรวจ copy ที่ AI เขียน — ห้ามมี claim ที่ product ทำไม่ได้จริง",
    ],
    checklist: [
      "ข้อมูล product เป็นของจริงทั้งหมด — AI ไม่ได้แต่งสเปก/รีวิว/ราคา",
      "ราคา + ค่าส่ง + นโยบายคืน เห็นโดยไม่ต้องออกจากหน้า",
      "Variant เลือกง่าย + บอกสต็อกต่อ variant",
      "Proof จริง (รีวิว, จำนวนขาย) วางก่อนจุดตัดสินใจ",
      "Mobile: sticky CTA + gallery swipe + touch target พอ",
      "ไม่มี claim เกินจริงที่ AI แต่งเติม",
    ],
    deliverables: ["Product page structure/code จาก prompt", "Review report ของหน้าเดิมตาม purchase-decision checklist"],
    goodExample:
      "ป้อนข้อมูลรองเท้าจริง (ราคา, 6 สี, size chart, ค่าส่ง, รีวิว 4.6 จาก 218) + สั่งโครงตามการตัดสินใจซื้อ + mobile sticky CTA — ได้หน้าที่ข้อมูลครบทุกจุดตัดสิน ทีมเอาไปต่อยอด visual ได้เลย ไม่ต้องวนกลับมาเติม 'ลืมใส่ค่าส่ง' ทีหลัง",
    badExample:
      "'ทำหน้าขายของสวยๆ ให้รองเท้ารุ่นนี้' — ได้หน้า hero ใหญ่อลังการ, copy 'ที่สุดแห่งนวัตกรรม', รีวิวปลอม 5 ดาวที่ AI แต่งเอง, ไม่มีค่าส่ง ไม่มี size guide — สวยพอ present ได้แต่ขายจริงไม่ได้ และรีวิวปลอมคือระเบิดเวลาทางกฎหมาย",
    commonMistakes: [
      "ให้ AI แต่งข้อมูล product/รีวิวเอง — ได้ content ปลอมที่หลุดไปโปรดักชันแล้วเป็นเรื่อง",
      "ลืมข้อมูล category-specific (size guide, วันหมดอายุ) เพราะ template เดียวใช้ทุกอย่าง",
      "ออกแบบ desktop แล้วย่อ — ทั้งที่ traffic ซื้อของ 70-80% คือมือถือ",
      "Gallery สวยแต่ภาพไม่ตอบคำถามซื้อ (ไม่มี scale เทียบ, ไม่เห็น texture)",
      "CTA หลุดจอบนมือถือเพราะข้อมูลอัดด้านบน — ไม่มี sticky bar",
    ],
    relatedSlugs: ["landing-page-prompt", "checkout-ux", "trust-signals", "ui-generation-prompt", "offer-clarity"],
    tags: ["e-commerce", "product-page", "prompt"],
    prompts: [
      `You are an e-commerce UX designer building a product page. Use ONLY the real product data below — never invent specs, reviews, or claims.

Product data:
- Name/price/variants(+stock per variant): [PASTE]
- Images available: [LIST]
- Shipping cost & time / return policy: [PASTE]
- Real reviews summary: [RATING, COUNT, 2-3 QUOTES]
- Category-specific info: [e.g. SIZE CHART for apparel]

Structure (fixed order, do not rearrange):
1. Gallery (mobile: swipeable) + name + price incl. any discount logic
2. Variant selection — one-thumb operable, stock shown per variant
3. Shipping + returns — visible without leaving the page
4. Social proof — real reviews only
5. Details/specs — scannable, category-appropriate
6. Sticky add-to-cart bar on mobile

Stack: [FRAMEWORK + TOKENS]. Acceptance: price/shipping/returns all findable within one viewport of the decision point; works at 375px; no fabricated content anywhere. After the code, list any missing product data I should provide.`,
    ],
    visualDemo: "user-flow",
    demoData: {
      title: "Purchase Decision Path",
      steps: [
        { name: "เห็นของชัด", detail: "Gallery swipe + zoom, ภาพครบมุม" },
        { name: "รู้ราคาจริง", detail: "ราคา + ค่าส่ง + เงื่อนไขคืน ในจอเดียว", risk: "ค่าส่งซ่อน = abandon อันดับ 1" },
        { name: "เลือก variant", detail: "สี/ไซส์ + สต็อกต่อตัวเลือก" },
        { name: "เชื่อใจ", detail: "รีวิวจริง 218 รายการ ก่อนจุดกด" },
        { name: "Add to cart", detail: "Sticky bar บนมือถือ — ไม่ต้อง scroll กลับ" },
      ],
    },
  },
  {
    id: "saas-dashboard-prompt",
    slug: "saas-dashboard-prompt",
    term: "SaaS Dashboard Prompt",
    category: "ai-prompting",
    icon: "📊",
    level: "advanced",
    shortDescription: "Prompt สร้าง dashboard ที่เริ่มจากคำถามที่ user ต้องตอบ ไม่ใช่จากการ์ดสถิติ 4 ใบ + กราฟ donut ตาม template",
    fullDefinition:
      "SaaS dashboard prompt ที่ดีกลับลำดับการคิด: เริ่มจาก 'user เปิดหน้านี้มาเพื่อตอบคำถามอะไร' (วันนี้มีอะไรต้องทำไหม? ตัวเลขผิดปกติไหม? งานค้างเท่าไร?) แล้วเลือก data display ที่ตอบคำถามนั้น — ตัวเลขเดี่ยวสำหรับ status, trend สำหรับ 'ดีขึ้นหรือแย่ลง', ตารางสำหรับ 'ตัวไหนต้อง action' — พร้อมระบุ hierarchy (อะไรสำคัญสุดใหญ่สุด), state จริง (ไม่มีข้อมูล, โหลด, ช่วงเวลาว่าง) และ action ที่ทำได้จากแต่ละ widget — ไม่ใช่สั่ง 'ทำ dashboard' แล้วได้ template การ์ด 4 ใบที่ตอบคำถามของใครก็ไม่รู้",
    whyItMatters:
      "Dashboard คือ UI ที่ AI generate ได้ generic ที่สุด — การ์ดสถิติ 4 ใบ, กราฟเส้น, donut chart — สวยใน demo แต่ตอบคำถามของใครไม่ได้สักคน เพราะไม่มีใครบอก AI ว่า user คือใครและตัดสินใจอะไรจากหน้านี้ — dashboard ที่ user เปิดทุกเช้ากับ dashboard ที่ถูกลืมใน 2 สัปดาห์ ต่างกันที่มันตอบคำถามจริงหรือเปล่า ไม่ใช่กราฟสวยแค่ไหน",
    whenToUse: [
      "สร้าง dashboard ใหม่ — เริ่มจากลิสต์คำถามของ user role นั้น แล้วให้ AI ออกแบบจากคำถาม",
      "รื้อ dashboard เดิมที่ engagement ต่ำ — ให้ AI วินิจฉัยว่า widget ไหนตอบคำถามอะไร (และอันไหนไม่ตอบอะไรเลย)",
      "Product มีหลาย role — ให้ AI เสนอว่า role ไหนควรเห็นอะไรต่างกัน",
    ],
    whenNotToUse: [
      "ยังไม่รู้ว่า user ตัดสินใจอะไรจากข้อมูล — ไปสัมภาษณ์ user ก่อน prompt เขียนแทนการ research ไม่ได้",
      "Data exploration tool (ให้ user สร้าง query เอง) — โจทย์คนละแบบกับ overview dashboard",
    ],
    howToApply: [
      "ลิสต์คำถามจริงของ user role: 'เช้านี้มีออเดอร์ค้างไหม', 'ลูกค้าคนไหนเสี่ยง churn' — 3-6 คำถามต่อหน้า",
      "ป้อนคำถาม + data ที่มีจริง (metric, dimension ที่ระบบเก็บ) — ห้ามให้ AI สมมุติ data ที่ไม่มี",
      "ให้ AI เลือก display ต่อคำถาม พร้อมเหตุผล: ทำไมตัวเลขเดี่ยว ทำไมไม่ใช่กราฟ",
      "บังคับ hierarchy: คำถามสำคัญสุดได้พื้นที่ใหญ่สุดบนซ้าย — ไม่ใช่ทุกการ์ดเท่ากันหมด",
      "บังคับ action: ทุก widget ต้องตอบได้ว่า user เห็นแล้วทำอะไรต่อได้ (คลิกไปไหน)",
      "ขอ states ครบ: ไม่มีข้อมูล, โหลด, ค่าผิดปกติ (alert ยังไง), ช่วงเวลาที่เลือกไม่มี data",
    ],
    checklist: [
      "เริ่มจากคำถามของ user role ไม่ใช่จาก layout",
      "ทุก widget ชี้ได้ว่าตอบคำถามข้อไหน — ตอบไม่ได้ = ตัด",
      "Display ถูกเลือกตามชนิดคำถาม (status/trend/action-list) มีเหตุผล",
      "Hierarchy ชัด: สำคัญสุดใหญ่สุด ไม่ใช่ grid เท่ากันหมด",
      "ทุก widget มี action ต่อ (drill-down, ลิงก์ไปแก้)",
      "States ครบ: empty, loading, anomaly, ช่วงเวลาว่าง",
    ],
    deliverables: ["Question-to-widget mapping (คำถาม × display × เหตุผล)", "Dashboard code/structure พร้อม states ครบ"],
    goodExample:
      "ป้อน: 'ผู้จัดการร้านเปิดทุกเช้า ถาม 3 ข้อ: ยอดเมื่อวานเทียบเป้า? มีออเดอร์ติดปัญหาไหม? สต็อกอะไรใกล้หมด?' + metric ที่มีจริง — AI ออกแบบ: แถบสถานะใหญ่ตอบข้อ 1, action list ออเดอร์ติดปัญหา (คลิกไปแก้ได้), ตารางสต็อกวิกฤต — ทุก pixel ตอบคำถามจริง ผู้จัดการเปิดทุกเช้าจริง",
    badExample:
      "'สร้าง analytics dashboard สวยๆ' — ได้การ์ด Total Users / Revenue / Sessions / Bounce Rate + กราฟเส้น 30 วัน + donut traffic source — สวยเหมือน template ทุกอัน แต่ผู้จัดการร้านเปิดมาแล้วยังไม่รู้อยู่ดีว่าเช้านี้ต้องทำอะไร — สองสัปดาห์ต่อมาไม่มีใครเปิดอีกเลย",
    commonMistakes: [
      "สั่ง 'ทำ dashboard' โดยไม่บอกคำถามที่ต้องตอบ — ได้ template การ์ด 4 ใบเสมอ",
      "ให้ AI สมมุติ metric ที่ระบบไม่ได้เก็บ — design ที่ build ไม่ได้จริง",
      "ทุก widget ขนาดเท่ากัน — hierarchy ของความสำคัญหายไป",
      "Widget โชว์ข้อมูลแต่ไม่มี action ต่อ — เห็นปัญหาแล้วไปแก้ที่ไหนต้องหาเอง",
      "Donut chart เพราะสวย ทั้งที่คำถามคือ 'อะไรผิดปกติ' ที่ตารางตอบดีกว่า",
    ],
    relatedSlugs: ["ui-generation-prompt", "state-specification", "user-goal", "information-architecture"],
    tags: ["dashboard", "saas", "data-viz", "prompt"],
    prompts: [
      `You are a product designer specializing in data-dense SaaS dashboards. Design a dashboard that answers real questions — not a template.

User role: [WHO + WHEN THEY OPEN THIS, e.g. "store manager, every morning"]
The questions they open this page to answer (ranked by importance):
1. [QUESTION]
2. [QUESTION]
3. [QUESTION]
Available data (do not assume anything beyond this): [METRICS + DIMENSIONS THE SYSTEM ACTUALLY TRACKS]

For each question:
- Choose the display type (single stat / trend / ranked list / action table) and justify it in one line
- Define the action: what the user clicks to act on what they see
- Define anomaly behavior: what makes this widget demand attention

Layout rules: most important question gets the largest top-left area; no equal-grid card soup; information density appropriate for a daily power user, not a demo.
Also specify: empty state (new account), loading, and selected-period-has-no-data for each widget.
Stack: [FRAMEWORK + TOKENS]. Output: question-to-widget map first, then the build.`,
    ],
    visualDemo: "priority-matrix",
    demoData: {
      title: "Widget = คำตอบของคำถาม",
      matrix: {
        xLabel: "ความถี่ที่ถาม",
        yLabel: "ความเร่งด่วนเมื่อรู้คำตอบ",
        quadrants: ["Hero widget บนซ้าย", "Alert + action list", "แถวรอง", "ตัดทิ้ง / ย้ายไป report"],
        items: [
          { name: "ออเดอร์ติดปัญหา?", quadrant: 1 },
          { name: "ยอดเทียบเป้า?", quadrant: 0 },
          { name: "สต็อกใกล้หมด?", quadrant: 1 },
          { name: "Traffic source donut", quadrant: 3 },
        ],
      },
    },
  },
  {
    id: "landing-page-prompt",
    slug: "landing-page-prompt",
    term: "Landing Page Prompt",
    category: "ai-prompting",
    icon: "🛬",
    level: "intermediate",
    shortDescription: "Prompt สร้าง landing page ที่บังคับ message match กับ traffic source และลำดับ section ตาม objection — ไม่ใช่ hero สวยกับ copy ลอยๆ",
    fullDefinition:
      "Landing page prompt ผูกหน้าเข้ากับ marketing reality: ระบุ traffic source และ message ของ ad ที่พาคนมา (headline ต้องสานต่อ ไม่เริ่มเรื่องใหม่), ระบุ audience และ objection หลักของเขา (แพงไป? ยากไป? เชื่อได้ไหม?) แล้วบังคับลำดับ section ตาม objection, ป้อน proof จริง (ตัวเลข, ลูกค้า, รีวิว — ห้ามให้ AI แต่ง), กำหนด CTA เดียว และบังคับ mobile-first — ผลลัพธ์คือหน้าที่แต่ละ section มีเหตุผลเชิง conversion ไม่ใช่หน้าที่สวยแต่ตอบ objection ของใครไม่ได้",
    whyItMatters:
      "AI เขียน landing page ได้ 'สวย' เสมอ — hero อลังการ, copy 'Transform your workflow' — แต่ conversion มาจากความ relevant: message ที่ match กับ ad, objection ที่ถูกตอบตามลำดับ, proof ที่เชื่อได้ — สิ่งเหล่านี้ AI ไม่รู้เองต้องถูกป้อน — และอันตรายสุดคือ AI แต่ง proof เอง (ตัวเลขผู้ใช้, คำรีวิว) ซึ่งทั้งผิดกฎหมายและพังเมื่อถูกจับได้",
    whenToUse: [
      "สร้าง landing page ต่อแคมเปญ — หน้าใหม่ต่อ ad group ที่ message ต่างกัน",
      "ทำ variant สำหรับ A/B test — โครงเดียว เปลี่ยน angle ของ hero/proof",
      "แปลงหน้าเดิมที่ generic ให้ match กับ traffic แต่ละทาง",
    ],
    whenNotToUse: [
      "ยังไม่รู้ audience และ objection — ไปคุยกับ sales/support ก่อน ไม่มี input นี้ prompt อะไรก็ generic",
      "หน้า homepage ที่รับ traffic ทุกทาง — โจทย์ต่างจาก landing เฉพาะแคมเปญ",
    ],
    howToApply: [
      "ป้อน traffic context: มาจาก ad ไหน, ad สัญญาอะไรไว้, keyword อะไร — headline ต้องสานต่อสัญญานั้น",
      "ป้อน audience + objection เรียงลำดับ: อะไรกั้นไม่ให้เขา convert (ราคา? ความเชื่อใจ? ความยุ่งยาก?)",
      "ป้อน proof จริงทั้งหมด: ตัวเลขจริง, ชื่อลูกค้าที่ใช้ได้จริง, รีวิวจริง — ระบุชัดว่าห้ามแต่งเพิ่ม",
      "กำหนด CTA เดียว + ขั้นตอนหลังกด (ทดลองฟรี? จองเดโม่?) — ทุก section ชี้ไปทางเดียว",
      "บังคับเขียน mobile ก่อน: จอแรก 375px ต้องมี headline + value + CTA ครบ",
      "รอบสอง: ขอ variant ของ hero 2-3 แบบ (angle ต่างกัน) ไว้ A/B test — โครงอื่นคงเดิม",
    ],
    checklist: [
      "Headline สานต่อ message ของ ad ที่พามา — ตรวจเทียบคำต่อคำ",
      "ลำดับ section ตอบ objection ที่ป้อนไว้ เรียงตามน้ำหนัก",
      "Proof ทุกชิ้นเป็นของจริงที่ป้อนเข้าไป — AI ไม่ได้แต่งสักตัวเลข",
      "CTA เดียวทั้งหน้า ซ้ำได้แต่ไม่มีคู่แข่ง",
      "จอแรก 375px: headline + value + CTA ครบ",
      "ทุก section ตอบได้ว่าอยู่เพื่อ objection ข้อไหน — ตอบไม่ได้ = ตัด",
    ],
    deliverables: ["Landing page structure + copy (proof จริงทั้งหมด)", "Hero variants 2-3 แบบสำหรับ A/B test"],
    goodExample:
      "ป้อน: ad Facebook สัญญา 'ปิดงบรายเดือนใน 3 วัน', audience คือนักบัญชี SME, objection: ย้ายข้อมูลยาก > ราคา > ปลอดภัยไหม, proof จริง: ลูกค้า 1,400 ราย + รีวิว 3 ชิ้น — AI สร้างหน้าที่ hero สานต่อคำสัญญา 3 วัน, section แรกตอบเรื่องย้ายข้อมูล (objection อันดับ 1), proof จริงวางก่อน pricing — โครงพร้อม test ไม่ใช่พร้อมแก้",
    badExample:
      "'เขียน landing page ให้โปรแกรมบัญชี เน้น convert' — ได้ hero 'Empower Your Business', feature 6 ข้อที่ไม่ได้เรียงตาม objection ใคร, 'ลูกค้ากว่า 50,000 ราย' ที่ AI แต่งเอง (จริงมี 1,400), CTA สามแบบแข่งกัน — ทีมเกือบเอาตัวเลขปลอมขึ้นโปรดักชันเพราะไม่ได้ตรวจ",
    commonMistakes: [
      "ไม่บอก traffic source — ได้หน้า generic ที่ message ไม่ match กับ ad สักทาง",
      "ปล่อยให้ AI แต่ง proof (ตัวเลข, รีวิว) — อันตรายทั้งกฎหมายและความเชื่อใจ",
      "ไม่ป้อน objection — ได้ feature list ที่เรียงตามความภูมิใจของทีม ไม่ใช่ความกังวลของลูกค้า",
      "ขอหลาย CTA 'เผื่อไว้' — ทุกทางเลือกที่เพิ่มคือ conversion ที่หาร",
      "Review บน desktop ทั้งที่ ads traffic เป็นมือถือ 80%",
    ],
    relatedSlugs: ["landing-page-review", "offer-clarity", "cta-hierarchy", "trust-signals", "ui-generation-prompt"],
    tags: ["landing-page", "conversion", "copy", "prompt"],
    prompts: [
      `You are a conversion copywriter + landing page designer. Build a landing page matched to its traffic source.

Traffic context:
- Source + ad message (exact wording the visitor just saw): [PASTE AD COPY]
- Audience: [WHO] / Their objections, ranked: 1) [OBJ] 2) [OBJ] 3) [OBJ]
- The single conversion action: [CTA + WHAT HAPPENS AFTER]

Real proof — use ONLY these, never fabricate numbers, names, or quotes:
[PASTE: real user count, real client names usable publicly, real review quotes]

Build order:
1. HERO: headline continuing the ad's exact promise (not a new slogan); subhead = concrete value; CTA. Must fit a 375px first viewport.
2. SECTIONS: one per objection, in ranked order — each section's job is to neutralize that objection using the proof provided
3. Final CTA block restating value
Rules: one CTA type for the whole page; every section must map to an objection (cut anything that doesn't); realistic copy, no "Empower/Transform" filler.
Output: the page + a one-line annotation per section stating which objection it answers + 2 alternative hero angles for A/B testing.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Landing from Prompt",
      before: { label: "Prompt คลุมเครือ", points: ["Hero 'Empower Your Business'", "ตัวเลขลูกค้าที่ AI แต่งเอง", "CTA 3 แบบแข่งกัน"] },
      after: { label: "Prompt มีโครง", points: ["Headline สานต่อคำสัญญาใน ad", "Section เรียงตาม objection จริง", "Proof จริง + CTA เดียว"] },
    },
  },
  {
    id: "mobile-app-prompt",
    slug: "mobile-app-prompt",
    term: "Mobile App Prompt",
    category: "ai-prompting",
    icon: "📱",
    level: "intermediate",
    shortDescription: "Prompt สร้าง mobile UI ที่บังคับ convention ของ platform: navigation pattern, touch target, thumb zone, gesture — ไม่ใช่เว็บย่อส่วน",
    fullDefinition:
      "Mobile app prompt ฝัง constraint ของ mobile ลงไปตั้งแต่ต้น: platform ไหน (iOS ตาม HIG / Android ตาม Material — navigation, ปุ่ม back, แชร์ ต่างกัน), thumb zone (action หลักอยู่ล่างในระยะนิ้วโป้ง ไม่ใช่มุมบน), touch target ≥44pt, gesture มาตรฐาน (swipe back, pull-to-refresh) พร้อมทางเลือกที่มองเห็นได้, ขนาดจอจริงที่ต้องรอด (จอเล็ก + landscape + font scaling) และ offline/poor connection state — ถ้าไม่ระบุ AI มักผลิต 'เว็บ desktop ที่บีบให้แคบ': hamburger ทุกอย่าง, ปุ่มเล็ก, action อยู่มุมบนที่นิ้วเอื้อมไม่ถึง",
    whyItMatters:
      "Mobile ไม่ใช่ desktop ที่จอเล็ก — input คือนิ้วโป้งข้างเดียวไม่ใช่ cursor แม่นยำ, บริบทคือยืนบนรถไฟฟ้าไม่ใช่นั่งโต๊ะ, connection หลุดได้ตลอด — UI ที่ไม่เคารพความจริงนี้ (ปุ่มเล็กมุมบน, hover-only, ฟอร์มยาว) คือ UI ที่ใช้ไม่ได้ในสถานการณ์จริงแม้จะดูดีใน simulator — และ user mobile ลบแอปเร็วกว่าที่ user เว็บปิด tab",
    whenToUse: [
      "สร้างหน้าจอแอป mobile ใหม่ — ระบุ platform + thumb zone + target size ตั้งแต่ prompt แรก",
      "แปลง flow จากเว็บมาเป็นแอป — ให้ AI เสนอ pattern mobile ที่แทน (table → list, hover → long-press)",
      "Review UI ที่มีอยู่ด้วยเลนส์ mobile: นิ้วโป้งเอื้อมถึงไหม, target พอไหม, offline เป็นไง",
    ],
    whenNotToUse: [
      "Responsive web — convention ต่างจาก native app (ไม่มี bottom tab มาตรฐาน, back คือ browser) อย่าปน prompt กัน",
      "อย่าใช้ prompt เดียวออกทั้ง iOS และ Android แล้วหวังให้ถูกทั้งคู่ — navigation/back/share ต่างกันจริง ระบุทีละ platform",
    ],
    howToApply: [
      "ระบุ platform ชัด: iOS (HIG) หรือ Android (Material) — และเวอร์ชัน design language ถ้าเจาะจง",
      "บังคับ thumb-zone rule: primary action ล่างจอในระยะนิ้วโป้ง, destructive ออกนอกระยะกดพลาด",
      "ระบุ touch target ขั้นต่ำ 44pt/48dp และ spacing ระหว่าง target ที่กดพลาดได้",
      "ระบุ navigation pattern: bottom tab (กี่แท็บ), stack push/pop, modal sheet ใช้เมื่อไร",
      "ขอ offline/slow connection state เสมอ: แอปเปิดบนรถไฟฟ้าได้ไหม",
      "ทดสอบบนจอเล็กจริง + font scaling ใหญ่สุดที่ OS อนุญาต — layout ต้องรอด",
    ],
    checklist: [
      "ระบุ platform + design language ชัดเจน",
      "Primary action อยู่ใน thumb zone (ครึ่งล่างของจอ)",
      "ทุก touch target ≥44pt/48dp พร้อม spacing กันกดพลาด",
      "Gesture ทุกตัวมีทางเลือกที่มองเห็นได้ (ไม่มี gesture-only)",
      "มี offline/slow connection state",
      "รอดบนจอเล็กสุด + font scaling ใหญ่สุด",
    ],
    deliverables: ["Mobile screen design/code ตาม platform convention", "Mobile review checklist (thumb/target/gesture/offline)"],
    goodExample:
      "Prompt ระบุ: Android Material 3, หน้า task list สำหรับช่างภาคสนาม (ถุงมือ, แดดจ้า), target ≥48dp, action หลัก = FAB ล่างขวา, ต้องทำงาน offline แล้ว sync — ได้หน้าที่ contrast สูง, ปุ่มใหญ่, offline banner + queue — ตรง context การใช้จริงตั้งแต่ draft แรก",
    badExample:
      "'ออกแบบแอปจัดการงานให้หน่อย' — ได้ sidebar แบบ desktop ที่กลายเป็น hamburger, ปุ่มแก้ไขเล็กจิ๋วมุมขวาบนที่นิ้วโป้งเอื้อมไม่ถึง, hover tooltip ที่ไม่มีอยู่จริงบนจอ touch, ไม่มี offline state — ครบสูตร 'เว็บ desktop บีบใส่จอมือถือ'",
    commonMistakes: [
      "ไม่ระบุ platform — ได้ลูกผสม iOS-Android ที่ผิด convention ทั้งคู่",
      "Action หลักมุมบน (ตาม desktop) — นิ้วโป้งเอื้อมไม่ถึงบนจอ 6.5 นิ้ว",
      "Touch target เล็กตาม visual design — สวยแต่กดพลาดตลอด",
      "ลืม offline/slow state — แอปที่ใช้ได้เฉพาะ wifi office",
      "Gesture-only interaction (swipe ลบโดยไม่มีปุ่ม) — feature ที่ user ไม่มีวันค้นพบ",
    ],
    relatedSlugs: ["mobile-first-review", "responsive-behavior", "ui-generation-prompt", "interaction-design"],
    tags: ["mobile", "ios", "android", "prompt"],
    prompts: [
      `You are a senior mobile app designer. Platform: [iOS — follow HIG | Android — follow Material 3]. Do NOT produce a shrunken desktop layout.

Screen: [SCREEN + WHAT THE USER DOES HERE]
User context: [WHO + REAL USAGE SITUATION, e.g. "field technician, gloves, bright sunlight, spotty connection"]

Hard requirements:
- THUMB ZONE: primary action in the bottom half, reachable one-handed; destructive actions outside accidental-tap zones
- TARGETS: every touch target ≥[44pt|48dp] with adequate spacing between adjacent targets
- NAVIGATION: [bottom tabs N items | stack | modal sheets] per platform convention — including correct back behavior
- GESTURES: standard ones only (swipe back, pull-to-refresh); every gesture action must also have a visible alternative
- STATES: include offline/slow-connection behavior (what's cached, what queues, what the user sees)
- RESILIENCE: must survive the smallest supported screen and the OS's largest font scaling

Stack: [e.g. React Native / SwiftUI / Flutter + TOKEN LIST]. Output: the screen, then a list of every platform-convention decision you applied (so I can verify against [HIG|Material]).`,
    ],
    visualDemo: "checklist",
    demoData: {
      title: "Mobile Prompt Essentials",
      items: [
        "ระบุ platform: iOS (HIG) หรือ Android (Material 3)",
        "Primary action ใน thumb zone ครึ่งล่างของจอ",
        "Touch target ≥44pt/48dp + spacing กันกดพลาด",
        "Gesture ทุกตัวมีทางเลือกที่มองเห็นได้",
        "Offline / slow connection state ครบ",
        "รอด font scaling ใหญ่สุด + จอเล็กสุดที่ support",
      ],
    },
  },
  {
    id: "developer-handoff-prompt",
    slug: "developer-handoff-prompt",
    term: "Developer Handoff Prompt",
    category: "ai-prompting",
    icon: "🤝",
    level: "intermediate",
    shortDescription: "Prompt ให้ AI แปลง design เป็นเอกสาร handoff: สเปก, AC, state matrix, token mapping — และไล่หาช่องโหว่ที่ design ยังไม่ได้ตัดสิน",
    fullDefinition:
      "Developer handoff prompt ใช้ AI เป็นผู้ช่วยทำเอกสารส่งมอบ: ป้อน design (ภาพ/Figma description) + บริบท แล้วให้ AI ร่าง spec แบบมีโครง — AC เป็น Given/When/Then, state matrix (hover/focus/empty/error), responsive behavior ต่อ breakpoint, token mapping, content rules — และที่มีค่าที่สุด: ให้ AI ทำตัวเป็น dev ที่ตั้งคำถาม 'design นี้ยังไม่ได้ตอบอะไรบ้าง' (gap analysis) — สิ่งที่ AI ระบุไม่ได้จากภาพจะกลายเป็น question list ให้ designer ตอบก่อน dev เริ่มงาน แทนที่จะโผล่เป็นคำถามกลาง sprint",
    whyItMatters:
      "Handoff ที่ดีใช้เวลาเขียนมาก — และความขี้เกียจเขียนคือเหตุที่ dev ต้องเดา — AI ลดต้นทุนการเขียนลงมากพอที่ handoff ละเอียดจะเป็นจริงได้ทุก story — และ gap analysis ของ AI (มองจากมุม dev ที่ต้อง build) จับคำถามที่ designer มองข้ามเพราะคำตอบ 'ชัดอยู่แล้วในหัว' — คำถามที่ถูกตอบก่อนเริ่ม sprint ถูกกว่าคำถามเดิมที่ถามกลาง sprint หลายเท่า",
    whenToUse: [
      "ก่อนส่งมอบทุก story ที่มี UI — ให้ AI ร่าง spec จาก design แล้ว designer ตรวจ/เติม",
      "Design เสร็จแต่เวลาเขียน handoff ไม่มี — AI ร่างโครง 80% คนเติม 20% ที่ AI ไม่รู้",
      "อยากรู้ว่า design พร้อมส่งมอบหรือยัง — รัน gap analysis ก่อน ถ้าคำถามเยอะแปลว่ายังไม่พร้อม",
    ],
    whenNotToUse: [
      "อย่าส่ง spec ที่ AI ร่างให้ dev โดยไม่ตรวจ — AI เดาส่วนที่มองไม่เห็นจากภาพ ถ้าไม่ตรวจคือส่งการเดาไปเป็น spec",
      "ทีมที่นั่งติดกันและ story เล็กมาก — คุยกัน 5 นาทีอาจถูกกว่า generate เอกสาร",
    ],
    howToApply: [
      "ป้อนให้ครบ: ภาพ design ทุก state ที่มี, token list, breakpoint, AC ที่เขียนไว้แล้ว (ถ้ามี)",
      "ขอโครงมาตรฐาน: AC (Given/When/Then) / state matrix / responsive / token mapping / content rules",
      "ขอ gap analysis แยกชัด: 'อะไรที่ระบุจากภาพไม่ได้และต้อง designer ตอบ' — นี่คือส่วนที่มีค่าสุด",
      "Designer ตอบ gap list + ตรวจส่วนที่ AI ร่าง — โดยเฉพาะส่วนที่ AI ต้องเดา (เช่น behavior ที่ภาพไม่โชว์)",
      "แนบ spec ที่ตรวจแล้วเข้า ticket — ทำ walkthrough สั้นกับ dev หนึ่งรอบ ไม่ปาเอกสารข้ามกำแพง",
      "เก็บ format ที่ dev ชอบเป็น template — handoff หน้าตาเดียวกันทุก story ทุกคนอ่านเร็วขึ้น",
    ],
    checklist: [
      "ป้อน design ครบทุก state ที่มี + token + breakpoint",
      "Spec ครบโครง: AC / states / responsive / token / content rules",
      "มี gap analysis: คำถามที่ design ยังไม่ตอบ แยกออกมาชัด",
      "Designer ตอบทุก gap ก่อนส่ง — ไม่ส่งการเดาของ AI ไปเป็น spec",
      "Spec ผ่านตา designer ทั้งฉบับ ไม่ forward ดิบๆ",
      "ยังมี walkthrough กับ dev — เอกสารเสริมบทสนทนา ไม่แทน",
    ],
    deliverables: ["Handoff spec ต่อ story (AC + states + responsive + tokens)", "Gap question list ที่ designer ตอบครบก่อน sprint"],
    goodExample:
      "Designer ป้อนภาพหน้า settings 4 states + token list — AI ร่าง spec ครบโครง + gap list 7 ข้อ: 'toggle ระหว่าง save แสดงอะไร? error ตอน save fail? ลำดับ focus ใน section?' — designer ตอบ 7 ข้อใน 20 นาที แนบเข้า ticket — sprint นั้น dev ไม่มีคำถามกลางทางเลย จากปกติ 5-6 ข้อต่อ story",
    badExample:
      "Designer รัน AI ร่าง spec แล้ว forward เข้า ticket ทันทีไม่อ่าน — AI เดาว่า dropdown 'น่าจะ' filter ทันทีที่เลือก (จริงๆ design ตั้งใจให้มีปุ่ม apply) — dev build ตามสเปกเดา, QA fail, ทุกฝ่ายงงว่าสเปกมาจากไหน — ความเร็วที่ได้จาก AI เสียคืนพร้อมดอกเบี้ย",
    commonMistakes: [
      "Forward spec ที่ AI ร่างโดยไม่ตรวจ — การเดาของ AI กลายเป็น requirement",
      "ป้อนแค่ภาพ ideal state — AI เดา state ที่เหลือแทนที่จะ flag ว่าไม่มี",
      "ไม่ขอ gap analysis — พลาดส่วนที่มีค่าที่สุดของการใช้ AI ตรงนี้",
      "ใช้เอกสารแทนการคุย — handoff ที่ดีคือ spec + walkthrough ไม่ใช่อย่างใดอย่างหนึ่ง",
      "Format เปลี่ยนทุก story — dev ต้อง parse ใหม่ทุกครั้ง ความเร็วที่ได้หายไปครึ่ง",
    ],
    relatedSlugs: ["ui-acceptance-criteria", "component-specification", "state-specification", "qa-checklist", "design-to-code-review"],
    tags: ["handoff", "spec", "prompt", "documentation"],
    prompts: [
      `You are a senior frontend engineer preparing to build from a design. Your job: draft the handoff spec AND interrogate the design for gaps.

Inputs:
- Design: [SCREENSHOTS OF ALL PROVIDED STATES + DESCRIPTION]
- Design tokens: [PASTE LIST] / Breakpoints: [LIST]
- Existing AC or notes: [PASTE IF ANY]

Produce:
1. ACCEPTANCE CRITERIA: Given/When/Then covering happy path + every state visible in the designs
2. STATE MATRIX: all states per component — mark each SPECIFIED (seen in design) or ASSUMED (your guess, flagged)
3. RESPONSIVE: behavior per breakpoint — only what the designs show; unknowns go to the gap list
4. TOKEN MAPPING: visible values → provided tokens; values with no matching token flagged
5. CONTENT RULES: truncation/empty/format behavior — visible or gap

Then the most important section:
6. GAP ANALYSIS — questions a developer would ask mid-sprint, asked now instead. Everything you could not determine from the inputs, as direct questions ("What does the toggle show while saving?"). Do not silently fill gaps with assumptions — every assumption must appear in section 2's ASSUMED flags or here.`,
    ],
    visualDemo: "handoff-spec",
    demoData: {
      title: "AI-Drafted Handoff — Settings",
      specs: [
        { label: "AC", value: "9 ข้อ Given/When/Then (4 จากภาพ, 5 จากคำตอบ gap)" },
        { label: "States", value: "Matrix 6 states — 2 ข้อถูก flag ASSUMED ให้ designer ยืนยัน" },
        { label: "Tokens", value: "Map ครบ, 1 ค่าไม่มี token ตรง → flag เข้า system" },
        { label: "Gaps", value: "7 คำถาม ตอบครบก่อน sprint — คำถามกลาง sprint = 0" },
      ],
    },
  },
];
