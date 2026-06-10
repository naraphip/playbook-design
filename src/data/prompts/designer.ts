import type { PromptItem } from "@/types/playbook";

export const DESIGNER_PROMPTS: PromptItem[] = [
  {
    id: "designer-high-contrast-cta",
    title: "Design High-Contrast CTA",
    audience: "designer",
    level: "basic",
    useCase: "ปุ่ม CTA จมหายไปกับหน้า หรือมีปุ่มแข่งกันจน user ไม่รู้จะกดอะไร",
    inputRequired: ["Screenshot ของหน้า/section ที่มีปัญหา", "Color palette + token ที่ใช้ได้", "Action ที่ business อยากให้กดที่สุด"],
    promptText: `You are a senior UI designer specializing in conversion-focused interfaces.

Context: I have a screen where the primary CTA does not stand out. Attached: [SCREENSHOT]. Available colors/tokens: [PASTE PALETTE]. The single action this screen must drive: [ACTION].

Task:
1. Diagnose why the current CTA fails: contrast ratio vs surroundings, competing visual weight, size, placement relative to the natural eye path
2. Propose a corrected CTA design: exact color pair from my palette (state the contrast ratio), size, placement, and the demoted treatment for every competing element
3. Rewrite the CTA label as verb + outcome (no "Submit"/"OK")
4. Show the hierarchy as a ranked list: primary / secondary / tertiary with the visual treatment of each

Constraints: use ONLY colors from the provided palette; text contrast must pass WCAG AA (4.5:1); exactly one filled primary button per viewport; do not redesign anything beyond the CTA hierarchy.

Output: diagnosis (3 bullets max) → corrected spec (element / treatment / token / contrast ratio table) → rewritten labels.`,
    outputFormat: "Diagnosis bullets + ตาราง spec (element / treatment / token / contrast) + label ใหม่",
    constraints: ["ใช้สีจาก palette ที่ให้เท่านั้น", "Contrast ผ่าน WCAG AA", "Filled primary ปุ่มเดียวต่อ viewport", "ไม่ redesign ส่วนอื่น"],
    bestUsedWith: ["Claude", "ChatGPT (vision)", "Figma AI"],
    tags: ["cta", "contrast", "hierarchy"],
    exampleInput: "Screenshot หน้า pricing ที่ปุ่ม 'สมัคร' เป็น ghost สีเทา + palette 8 สี + action: เริ่ม trial",
    expectedOutputPreview: "Diagnosis: ปุ่มหลัก contrast 1.8:1 ต่ำกว่าการ์ดรอบข้าง... Spec: ปุ่ม → filled brand-600 บน surface, ratio 5.2:1...",
  },
  {
    id: "designer-visual-hierarchy",
    title: "Establish Visual Hierarchy",
    audience: "designer",
    level: "intermediate",
    useCase: "หน้าที่ทุกอย่างตะโกนเท่ากันหมด — user ไม่รู้จะอ่านอะไรก่อน ต้องจัดลำดับใหม่",
    inputRequired: ["Screenshot หน้าที่มีปัญหา", "ลำดับความสำคัญของข้อมูลตาม user task (1-5)", "Type scale + spacing tokens ที่มี"],
    promptText: `You are a senior visual designer who fixes information hierarchy with type, spacing, and weight — not decoration.

Context: this screen reads "flat": everything has equal visual weight. Attached: [SCREENSHOT]. The user's task on this screen: [TASK]. Correct priority order of information: [RANKED LIST 1-5]. My type scale: [TOKENS]. Spacing scale: [TOKENS].

Task:
1. Map what hierarchy the CURRENT design communicates (what the eye hits 1st/2nd/3rd) vs the intended priority — show the mismatch
2. Redesign hierarchy using only: type size/weight, spacing (proximity + whitespace), and color emphasis from my tokens — assign each element a level (H1-style dominant → supporting → metadata)
3. Specify grouping: which elements get pulled together (proximity), which get separated
4. One de-emphasis pass: list what should get SMALLER/lighter (designers always promote, rarely demote)

Constraints: no new colors, no decorative elements, no layout restructure unless hierarchy is impossible without it (flag it if so); max 3 levels of emphasis per region.

Output: current-vs-intended eye path → element-by-element spec table (element / level / size token / weight / spacing) → demotion list.`,
    outputFormat: "Eye-path เทียบ ก่อน/หลัง + ตาราง spec ต่อ element + รายการ demote",
    constraints: ["ใช้แค่ type/spacing/weight ไม่เพิ่มสีหรือ decoration", "สูงสุด 3 ระดับ emphasis ต่อ region", "ไม่รื้อ layout เว้นแต่จำเป็น (ต้อง flag)"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["hierarchy", "typography", "spacing"],
    exampleInput: "Dashboard การ์ด 6 ใบ heading เท่ากันหมด + ลำดับ: ยอดขายวันนี้ > ออเดอร์ค้าง > อื่นๆ",
    expectedOutputPreview: "Eye path ปัจจุบัน: โลโก้ → การ์ดซ้ายบน → ปุ่ม filter (ผิด — ยอดขายควรมาก่อน)... ยอดขาย: text-3xl/bold, การ์ดอื่น: text-base...",
  },
  {
    id: "designer-empty-state",
    title: "Empty State Design",
    audience: "designer",
    level: "basic",
    useCase: "หน้า/feature ที่ user ใหม่เปิดมาเจอความว่างเปล่า — ต้องเปลี่ยน dead end เป็นจุดเริ่ม",
    inputRequired: ["หน้า/feature ที่มี empty state", "User มาถึงจุดนี้ได้ยังไง (first-use? ลบหมด? filter ไม่เจอ?)", "Action แรกที่ควรทำ"],
    promptText: `You are a UX designer who treats empty states as onboarding moments, not error pages.

Context: [SCREEN/FEATURE] shows an empty state. Ways users reach it: [LIST: first-use / cleared all items / search-filter no results / error]. The first action that creates value: [ACTION]. Product tone: [e.g. friendly-professional].

Task — design a separate empty state for EACH arrival path:
1. FIRST-USE: explain what this area does (one sentence), show what it looks like when populated (mini preview/ghost content), one primary CTA to create the first item — plus a sample-data option if applicable
2. NO-RESULTS (search/filter): state what was searched, why nothing matched, offer concrete exits: clear filters / adjust query / create new
3. CLEARED/COMPLETED: acknowledge completion (this can be a positive moment), suggest the natural next action
For each: headline copy + body copy (write the actual words in Thai, key terms English), CTA label, and visual treatment (illustration worth it or not — justify).

Constraints: no "ไม่มีข้อมูล" dead ends; every state has exactly one primary action; copy under 2 sentences per state; no generic illustrations that add height without meaning on mobile.

Output: per-path spec (headline / body / CTA / visual) + one-line rationale each.`,
    outputFormat: "Spec ต่อ arrival path: headline / body / CTA / visual + เหตุผล",
    constraints: ["ทุก state มี action ต่อเสมอ", "Copy ไม่เกิน 2 ประโยคต่อ state", "แยก first-use กับ no-results", "Illustration ต้องมีเหตุผล ไม่ใส่เพราะน่ารัก"],
    bestUsedWith: ["Claude", "ChatGPT"],
    tags: ["empty-state", "onboarding", "copy"],
    exampleInput: "หน้า 'รายงานของฉัน' ใน SaaS — user ใหม่ยังไม่เคยสร้างรายงาน + action แรก: สร้างรายงานจาก template",
    expectedOutputPreview: "First-use: headline 'สร้างรายงานแรกของคุณ' + ghost preview ของรายงานตัวอย่าง + CTA 'เริ่มจาก template'...",
  },
  {
    id: "designer-mobile-first-redesign",
    title: "Mobile-First Redesign",
    audience: "designer",
    level: "intermediate",
    useCase: "หน้า desktop ที่ถูก 'ย่อ' ลงมือถือแล้วใช้ไม่ได้จริง — ต้องคิดใหม่จากจอเล็กขึ้นไป",
    inputRequired: ["Screenshot หน้า desktop ปัจจุบัน", "Top 1-2 task ที่ user ทำบนมือถือจริง", "สัดส่วน mobile traffic"],
    promptText: `You are a mobile-first product designer. Redesign this desktop page starting from 375px, not by shrinking it.

Context: [SCREENSHOT of desktop page]. Mobile traffic share: [X%]. On mobile, users primarily come to do: [TOP 1-2 TASKS]. Everything else is secondary.

Task:
1. TASK-FIRST CUT: list every element on the desktop page → keep / demote (collapse, move deeper) / cut for mobile, judged ONLY against the top tasks
2. Design the 375px layout top-to-bottom: what's in the first viewport (must let the user start the top task), reading order, where demoted content lives (accordion/tab/secondary screen)
3. INPUT REALITY: replace desktop patterns — hover reveals, dense tables, multi-column forms — with touch patterns (tap targets ≥44px, bottom sheets, single column)
4. THUMB MAP: primary action placement reachable one-handed; nothing critical in top corners
5. Then scale UP: how the mobile structure expands to tablet/desktop (what un-collapses, when columns appear)

Constraints: first viewport must contain the top task's entry point; no horizontal scroll except intentional carousels; no element survives just because "it was on desktop" — each keep needs a task justification.

Output: keep/demote/cut table with justifications → 375px wireframe description (ordered sections) → scale-up notes per breakpoint.`,
    outputFormat: "ตาราง keep/demote/cut + โครง 375px เรียง section + scale-up ต่อ breakpoint",
    constraints: ["จอแรกต้องเริ่ม top task ได้", "Touch target ≥44px", "ห้าม horizontal scroll", "ทุก element ที่เก็บต้องอ้าง task ได้"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["mobile-first", "responsive", "redesign"],
    exampleInput: "หน้า dashboard desktop 3 คอลัมน์ + mobile traffic 72% + top task: เช็คสถานะออเดอร์",
    expectedOutputPreview: "Cut: กราฟ 30 วัน (ดูบน desktop), Keep: สถานะออเดอร์ → ขึ้นจอแรก... 375px: [1] search ออเดอร์ [2] ออเดอร์ล่าสุด 5 รายการ...",
  },
  {
    id: "designer-saas-dashboard",
    title: "SaaS Dashboard Layout",
    audience: "designer",
    level: "advanced",
    useCase: "ออกแบบ dashboard ที่ตอบคำถามจริงของ role นั้นๆ ไม่ใช่ template การ์ดสถิติ",
    inputRequired: ["Role ของ user + ความถี่ที่เปิด", "คำถาม 3-6 ข้อที่ user เปิดมาเพื่อตอบ (เรียงตามสำคัญ)", "Metric/data ที่ระบบเก็บจริง"],
    promptText: `You are a product designer specializing in data-dense SaaS dashboards for daily power users.

Context: dashboard for [ROLE] who opens it [FREQUENCY]. The questions they need answered, ranked: 1) [Q1] 2) [Q2] 3) [Q3]... Available data — do not assume metrics beyond this: [METRICS LIST].

Task:
1. QUESTION → WIDGET: for each question choose the display (single stat / trend line / ranked list / action table / alert) and justify in one line why this display answers this question type
2. LAYOUT: most important question gets the largest, top-left position; size widgets by decision value, not symmetry — explicitly reject equal-card-grid
3. ACTIONABILITY: every widget specifies what the user clicks to act (drill-down target); a widget with no action must justify existing
4. ATTENTION DESIGN: which widget states demand attention (thresholds/anomalies) and how they escalate visually without making everything red
5. STATES: per widget — empty (new account), loading (skeleton matching layout), no-data-in-period
6. DENSITY: this is a daily tool — compact spacing, no marketing whitespace; specify the spacing tokens

Constraints: every widget must map to a ranked question — orphan widgets get cut; no donut charts unless part-of-whole is genuinely the question; max 2 visual alert levels.

Output: question-to-widget map (table) → layout description with sizes → per-widget action + states spec.`,
    outputFormat: "ตาราง question→widget + layout พร้อมขนาด + spec action/states ต่อ widget",
    constraints: ["ทุก widget ต้อง map กับคำถาม", "ห้าม equal-grid soup", "ห้าม donut ถ้าคำถามไม่ใช่ part-of-whole", "ระบุ states ครบทุก widget"],
    bestUsedWith: ["Claude", "ChatGPT"],
    tags: ["dashboard", "saas", "data-viz"],
    exampleInput: "Role: ผู้จัดการร้าน เปิดทุกเช้า / คำถาม: ยอดเทียบเป้า? ออเดอร์ติดปัญหา? สต็อกใกล้หมด? / data: ยอดขาย, ออเดอร์, สต็อก",
    expectedOutputPreview: "Q1 ยอดเทียบเป้า → single stat ใหญ่ + progress vs เป้า (ตอบใน 1 วินาที)... Layout: Q1 กว้าง 2/3 บนซ้าย, Q2 action table ขวา...",
  },
  {
    id: "designer-landing-hero",
    title: "Landing Page Hero Section",
    audience: "designer",
    level: "intermediate",
    useCase: "ออกแบบ hero ที่ตอบ 3 คำถามใน 5 วินาที: ขายอะไร ฉันได้อะไร ทำอะไรต่อ",
    inputRequired: ["Product + value proposition", "Traffic source และ message ของ ad ที่พามา", "Proof จริงที่อ้างได้ (ตัวเลข/ลูกค้า)", "CTA เดียวที่ต้องการ"],
    promptText: `You are a conversion-focused designer + copywriter designing a landing page hero.

Context: product: [WHAT IT DOES, FOR WHOM]. Visitors arrive from: [SOURCE + EXACT AD MESSAGE]. Real proof available (use only these, never invent): [NUMBERS/CLIENTS/QUOTES]. The one conversion action: [CTA].

Task — design a hero that answers in 5 seconds: what is sold / what do I get / what do I do next:
1. HEADLINE: continues the ad's exact promise (message match) — specific outcome, no slogan-speak ("Empower", "Transform" banned). Write 3 options.
2. SUBHEAD: one sentence of concrete mechanism or proof — how it delivers the headline
3. CTA: verb + outcome label; what happens after click stated under it (e.g. "ฟรี 14 วัน ไม่ต้องใส่บัตร") to kill the biggest click anxiety
4. VISUAL: what image actually shows the product value (real UI screenshot beats abstract illustration for SaaS — recommend and justify)
5. PROOF PLACEMENT: one trust element in the hero (number or logos) — pick the strongest from provided proof
6. MOBILE 375px: everything above must fit the first viewport — specify what shrinks/stacks

Constraints: headline ≤10 words (Thai: ≤15), one CTA only, no fabricated proof, no stock photos of people shaking hands.

Output: 3 headline options + chosen layout spec (element / content / placement) + mobile-viewport order.`,
    outputFormat: "Headline 3 ตัวเลือก + layout spec + ลำดับบน mobile viewport",
    constraints: ["Message match กับ ad", "Headline ≤10 คำ", "CTA เดียว", "Proof จริงเท่านั้น", "จอแรก 375px ครบ"],
    bestUsedWith: ["Claude", "ChatGPT"],
    tags: ["landing-page", "hero", "copy"],
    exampleInput: "โปรแกรมบัญชี SME / ad: 'ปิดงบใน 3 วัน' / proof: ลูกค้า 1,400 ราย / CTA: ทดลองฟรี",
    expectedOutputPreview: "Headline A: 'ปิดงบรายเดือนใน 3 วัน ไม่ต้องจ้างเพิ่ม'... CTA: 'เริ่มทดลองฟรี 14 วัน' + ใต้ปุ่ม: 'ไม่ต้องใส่บัตรเครดิต'...",
  },
  {
    id: "designer-product-card",
    title: "Product Card UX",
    audience: "designer",
    level: "basic",
    useCase: "ออกแบบ card สินค้า/รายการใน grid ที่ตัดสินใจได้จาก card โดยไม่ต้องคลิกเข้าไปทุกใบ",
    inputRequired: ["ประเภทสินค้า/รายการ", "ข้อมูลที่ user ใช้ตัดสินใจเลือก (เรียงลำดับ)", "Action ที่ทำได้จาก card", "ข้อมูลจริงตัวอย่าง 3 รายการ (รวมเคสชื่อยาว)"],
    promptText: `You are a UI designer optimizing list/grid cards for scan-and-decide behavior.

Context: cards for [PRODUCT/ITEM TYPE] in a [GRID/LIST]. Users decide between items based on, in order: [DECISION FACTORS]. Actions available from the card: [ACTIONS]. Real sample data including ugly cases: [3 SAMPLES — include longest name, missing image, edge values].

Task:
1. CONTENT HIERARCHY: order card content by decision factors — the #1 factor must be scannable across 10 cards in one vertical sweep; metadata that doesn't drive choice goes to the detail page
2. CONTENT BEHAVIOR: per element — max lines, truncation, fallback for missing image/empty values (use my ugly samples to verify)
3. ACTION DESIGN: primary action one-click from card (with placement for thumb on mobile); whole-card tap target vs in-card buttons — resolve the conflict explicitly
4. STATES: default / hover (desktop) / pressed / out-of-stock-disabled / loading skeleton
5. CONSISTENCY: the card grid must align (equal heights) despite variable content — specify how (fixed image ratio, line clamps)

Constraints: card shows decision data only — max 5 content elements; all 3 ugly samples must render cleanly; touch targets ≥44px and separated from card-tap area.

Output: card anatomy spec (slot / content / max lines / fallback) + states + a render check against each ugly sample.`,
    outputFormat: "Card anatomy spec + states + ผลตรวจกับ ugly samples ทั้ง 3",
    constraints: ["สูงสุด 5 content elements", "ทุก ugly sample ต้อง render ผ่าน", "แก้ conflict ระหว่าง card-tap กับปุ่มใน card", "Grid สูงเท่ากัน"],
    bestUsedWith: ["Claude", "ChatGPT"],
    tags: ["card", "grid", "e-commerce"],
    exampleInput: "Card คอร์สเรียนออนไลน์ / ตัดสินจาก: ราคา > รีวิว > ระยะเวลา / sample มีชื่อคอร์ส 70 ตัวอักษร",
    expectedOutputPreview: "Anatomy: [รูป 16:9 fixed] [ชื่อ 2 บรรทัด clamp] [★4.6 (218)] [฿1,290 — ใหญ่สุดรอง headline]... ชื่อ 70 ตัวอักษร: ตัด ellipsis บรรทัด 2...",
  },
  {
    id: "designer-pricing-table",
    title: "Pricing Table UX",
    audience: "designer",
    level: "intermediate",
    useCase: "ออกแบบตาราง pricing ที่เลือกแผนได้ใน 1 นาที — tier ต่างชัด แผนแนะนำเด่น คำถามเงินถูกตอบครบ",
    inputRequired: ["Tiers ทั้งหมด + ราคา + เงื่อนไข billing", "เกณฑ์ที่แยก tier (ขนาดทีม/ฟีเจอร์/ปริมาณ)", "แผนที่อยากให้คนส่วนใหญ่เลือก", "Feature ตัวตัดสินใจ 5-8 ตัว"],
    promptText: `You are a SaaS pricing page designer. Design a pricing table that lets a buyer choose in under a minute.

Context: tiers: [LIST: name / price / billing terms]. What actually differentiates tiers: [ONE CLEAR DIMENSION]. The plan most users should pick: [PLAN]. Decision-driving features: [5-8 FEATURES]. Common money questions from sales/support: [e.g. VAT? cancel anytime? mid-cycle upgrade?].

Task:
1. TIER PRESENTATION: name + price + the one-line "for whom" per tier; highlight the recommended plan (visual treatment + "แนะนำ" label with the reason, e.g. "เหมาะกับทีม 5-20 คน")
2. PRICE HONESTY: billed-annually pricing shown without asterisk games — show the real monthly charge and the annual total; if a discount toggle exists, both states designed
3. FEATURE TABLE: ONLY the decision-driving features — comparison rows where tiers genuinely differ; identical-everywhere features collapse into "ทุกแผนรวม:" line above the table
4. MONEY QUESTIONS: answer every listed question ON the page (microcopy under table or compact FAQ) — buyer should not need to contact anyone to understand cost
5. CTA per tier: what literally happens next (trial? card required? sales call?) — different tiers may have different next steps, label them honestly
6. MOBILE: tiers as swipeable cards or stacked with sticky compare — pick and justify

Constraints: max 4 tiers visible; one recommended plan only; no hidden costs revealed later; feature table ≤8 rows.

Output: tier layout spec + feature table content + money-question microcopy (written out in Thai) + mobile pattern.`,
    outputFormat: "Tier layout + ตาราง feature + microcopy คำถามเงิน + mobile pattern",
    constraints: ["สูงสุด 4 tiers", "แผนแนะนำเดียว", "ราคา annual โชว์ยอดจริง", "Feature table ≤8 แถว"],
    bestUsedWith: ["Claude", "ChatGPT"],
    tags: ["pricing", "saas", "conversion"],
    exampleInput: "3 แผน: Starter 290/Pro 590/Team 1,490 ต่อเดือน / แยกด้วยจำนวน user / อยากดัน Pro",
    expectedOutputPreview: "Pro: เด่นด้วย border brand + badge 'แนะนำ — เหมาะกับทีม 2-10 คน'... 'ทุกแผนรวม: SSL, backup รายวัน...' / FAQ: 'ยกเลิกได้ทุกเมื่อ คิดตามรอบที่ใช้'...",
  },
  {
    id: "designer-form-ux",
    title: "Form UX Improvement",
    audience: "designer",
    level: "intermediate",
    useCase: "ฟอร์มยาว คนกรอกไม่จบ — ลด field, จัดลำดับใหม่, แก้ validation ให้คนผ่านได้จริง",
    inputRequired: ["Screenshot/รายการ field ทั้งหมดของฟอร์ม", "Field ไหน business ใช้จริง vs เก็บเผื่อ", "จุดที่คน drop (ถ้ามี data)", "Context การกรอก (มือถือ? รีบ?)"],
    promptText: `You are a form UX specialist. Cut, reorder, and fix this form so real users complete it.

Context: form for [PURPOSE]. All current fields: [LIST]. Which fields the business ACTUALLY uses now vs collects "just in case": [BREAKDOWN]. Drop-off data if any: [WHERE PEOPLE QUIT]. Filling context: [DEVICE/SITUATION].

Task:
1. FIELD AUDIT: per field — keep (used now) / defer (ask later, after value delivered) / cut (never used) / derive (can be computed: e.g. country from phone). Be aggressive: every field costs completions.
2. ORDER: easy → hard, personal/sensitive last; group related fields with visible section logic; one column only
3. INPUT TYPES: per field the right control + mobile keyboard (tel/email/numeric), format help (mask or example placeholder showing format, e.g. "081-234-5678"), autofill attributes
4. VALIDATION: validate on blur not keystroke; error message per field written out (what's wrong + how to fix, no "invalid input"); submit keeps all entered data on failure
5. LABELS & HELP: every label outside the field (no placeholder-as-label); required vs optional marked on the MINORITY type; help text only where a real question exists
6. PROGRESS: if >7 fields remain, propose steps with progress indicator — each step ends at a natural pause

Constraints: target ≥40% field reduction or written justification per surviving field; error copy must be actual Thai text, not placeholders; mobile keyboard specified per field.

Output: field audit table (field / verdict / reason) → final form spec in order (field / type / keyboard / validation / error copy) → before/after field count.`,
    outputFormat: "ตาราง audit ต่อ field + spec ฟอร์มใหม่เรียงลำดับ + จำนวน field ก่อน/หลัง",
    constraints: ["ลด field ≥40% หรือ justify ทุกตัวที่เหลือ", "Error copy เขียนจริงทุกข้อ", "Validate ตอน blur", "คอลัมน์เดียว", "ระบุ mobile keyboard ทุก field"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["form", "validation", "conversion"],
    exampleInput: "ฟอร์มสมัครบริการ 14 ช่อง รวมแฟกซ์และที่อยู่ 4 บรรทัด / business ใช้จริงแค่ email+ชื่อ+เบอร์",
    expectedOutputPreview: "Cut: แฟกซ์ (ไม่มีใครใช้), ที่อยู่ (defer ไปตอน checkout)... ฟอร์มใหม่ 5 ช่อง: email (keyboard: email, autofill: email)...",
  },
  {
    id: "designer-onboarding-flow",
    title: "Onboarding Flow Design",
    audience: "designer",
    level: "advanced",
    useCase: "ออกแบบ onboarding ที่พา user ใหม่ไปถึง first value เร็วที่สุด — ไม่ใช่ทัวร์ฟีเจอร์ 8 หน้า",
    inputRequired: ["Product + aha moment (จุดที่ user เห็นคุณค่าจริงครั้งแรก)", "ข้อมูลขั้นต่ำที่ต้องได้จาก user เพื่อไปถึงจุดนั้น", "Activation data ถ้ามี (คน drop ตรงไหน)"],
    promptText: `You are a product designer specializing in activation. Design an onboarding flow that reaches first value fast — not a feature tour.

Context: product: [WHAT IT DOES]. The aha moment — the first time a new user experiences real value: [DESCRIBE, e.g. "sees their first report generated from real data"]. Minimum the product needs from the user to deliver that: [DATA/SETUP ITEMS]. Current activation funnel if known: [DROP-OFF POINTS].

Task:
1. CRITICAL PATH: shortest step sequence from signup → aha moment. Every step must either collect something REQUIRED for first value or deliver value — steps that do neither (welcome carousels, feature tours, "tell us about yourself" surveys) get cut or deferred
2. PER STEP: what's collected / why it's needed NOW (vs deferrable) / effort level / copy (headline + helper, written in Thai) / skip behavior — can they skip and what happens
3. DEFER LIST: everything moved to post-aha (profile completion, preferences, team invites unless required) and WHEN each gets asked instead
4. EMPTY-PRODUCT BRIDGE: if first value needs data the user doesn't have yet — design the sample-data / template path so they experience value before doing setup work
5. PROGRESS + ESCAPE: show steps remaining; every step has a way out that doesn't dead-end (skip → sensible default)
6. MEASUREMENT: define the activation event + per-step funnel events to instrument

Constraints: ≤4 steps to first value; no feature tour; every required field justified against first value; skippable unless technically impossible.

Output: flow map (step / collects / why now / copy / skip) → defer list with timing → instrumentation events.`,
    outputFormat: "Flow map ต่อ step + defer list + events ที่ต้อง instrument",
    constraints: ["≤4 steps ถึง first value", "ห้าม feature tour", "ทุก field ที่ขอ justify ได้", "Skip ได้เว้นแต่เป็นไปไม่ได้ทางเทคนิค"],
    bestUsedWith: ["Claude", "ChatGPT"],
    tags: ["onboarding", "activation", "flow"],
    exampleInput: "แอปทำบัญชี / aha: เห็นกำไร-ขาดทุนเดือนนี้จากข้อมูลจริง / ต้องการ: เชื่อมบัญชีธนาคารหรือ import ไฟล์",
    expectedOutputPreview: "Step 1: เลือกประเภทธุรกิจ (กำหนด template)... Step 3: import ไฟล์ หรือ 'ดูตัวอย่างด้วยข้อมูล demo' → เห็น P&L ทันที... Defer: เชิญทีม → หลังสร้างรายงานแรก",
  },
];
