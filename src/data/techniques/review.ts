import type { Technique } from "@/types/playbook";

export const REVIEW_TECHNIQUES: Technique[] = [
  {
    id: "tech-heuristic-evaluation",
    slug: "heuristic-evaluation",
    title: "Heuristic Evaluation",
    category: "UX Review",
    useCase: "ตรวจ UI กับหลัก usability มาตรฐาน (Nielsen 10) เพื่อกวาดปัญหาพื้นฐานออกก่อน โดยไม่ต้องรอ user test",
    difficulty: "intermediate",
    timeRequired: "1-2 วัน ต่อ flow (ตรวจ 0.5-1 วัน + รวมผล 0.5 วัน)",
    participants: "ผู้ตรวจ 2-3 คนแยกกันตรวจแล้วรวมผล (คนเดียวเจอ ~35% ของปัญหา)",
    inputNeeded: [
      "Flow/หน้าที่จะตรวจ + task ของ user บนหน้านั้น",
      "Heuristics ที่ใช้ (Nielsen 10 เป็น default)",
      "Template บันทึก: ปัญหา × heuristic ที่ผิด × ตำแหน่ง × severity",
    ],
    steps: [
      "กำหนดขอบเขต: flow ไหน, task อะไร — ตรวจในบริบท task ไม่ใช่ไล่ดูหน้าจอลอยๆ",
      "ผู้ตรวจแต่ละคนเดิน flow 2 รอบ: รอบแรกตาม task (รู้สึกแบบ user), รอบสองไล่ heuristic ทีละข้อ",
      "บันทึกทุกปัญหา: อยู่ตรงไหน + ผิด heuristic ข้อไหน + ทำไม — การอ้างหลักทำให้เถียงกันด้วยหลักการไม่ใช่รสนิยม",
      "ให้ severity ต่อปัญหา: 0 ไม่ใช่ปัญหา / 1 ผิวเผิน / 2 minor / 3 major / 4 catastrophe",
      "รวมผลผู้ตรวจ: ปัญหาที่เจอซ้ำหลายคน = น่าเชื่อ, ปัญหาที่คนเดียวเจอ = คุยกันว่าจริงไหม",
      "สรุปเป็นรายการเรียง severity พร้อม screenshot + ข้อเสนอแก้ — ไม่ใช่แค่รายการด่า",
    ],
    output: "Findings report: ปัญหา × heuristic × severity × screenshot × ข้อเสนอแก้ — เรียงตาม severity",
    decisionCriteria: [
      "Severity 3-4 = แก้ก่อน release / 2 = เข้า backlog มี priority / 1 = แก้เมื่อผ่านบริเวณนั้น",
      "ปัญหาที่ผู้ตรวจ ≥2 คนเจอตรงกัน = เชื่อถือได้สูง",
      "Heuristic evaluation จับปัญหา 'ผิดหลัก' ได้ แต่จับ 'ผิดบริบท user' ไม่ได้ — เจอน้อยผิดปกติให้สงสัยว่าตรวจตื้น ไม่ใช่ของดีจริง",
    ],
    exampleScenario:
      "ก่อนส่ง flow เปิดบัญชีให้ user test (แพง) ทีมให้ 3 คนตรวจ heuristic ก่อน — เจอ 17 ปัญหา: 4 ตัว severity 3+ (ไม่มี feedback หลังกด submit, ภาษา error เป็นรหัส, ย้อนกลับแล้วข้อมูลหาย) — แก้ก่อนแล้วค่อย user test ทำให้ session ไปเจอปัญหาลึกแทนปัญหาตื้น",
    commonMistakes: [
      "ตรวจคนเดียวแล้วเชื่อว่าครบ — คนเดียวเจอราวหนึ่งในสามของปัญหา",
      "ไม่อ้าง heuristic — กลายเป็นรายการความเห็นที่ dev เถียงได้ว่ารสนิยมใคร",
      "ไม่ให้ severity — ทุกอย่างดูเร่งเท่ากัน สุดท้ายทีมเลือกแก้ของง่าย",
      "ตรวจนอกบริบท task — เจอปัญหา cosmetic เยอะ พลาดปัญหาที่ขวาง task จริง",
      "ใช้แทน user test — สองอย่างนี้จับปัญหาคนละชนิด ต้องมีทั้งคู่",
    ],
    template: `HEURISTIC EVALUATION
Flow: ___ Task บริบท: ___ ผู้ตรวจ: ___ คน (แยกตรวจ)
ต่อปัญหา:
  ตำแหน่ง: [หน้า/element + screenshot]
  Heuristic ที่ผิด: [#1-10 Nielsen] เพราะ: ___
  Severity: [0-4] (ความถี่จะเจอ × ผลกระทบ × หนีได้ไหม)
  ข้อเสนอแก้: ___
รวมผล: เจอซ้ำ ___ คน → confidence สูง
สรุป: Sev 4: ___ / Sev 3: ___ / Sev 2: ___ → แผนแก้`,
    prompt: `You are a senior UX evaluator performing a heuristic evaluation against Nielsen's 10 heuristics. Screens/flow: [SCREENSHOTS + THE USER TASK]. Known constraints (don't flag): [LIST].

Process:
1. Walk the flow as the user performing [TASK] — then sweep heuristic-by-heuristic
2. Per finding: location / heuristic violated (name + number) / why it violates it / severity 0-4 (frequency × impact × escapability) / concrete fix
3. Order by severity; cap at the 15 most impactful — no padding with severity-1 trivia
4. Separate section: judgment calls where a heuristic conflicts with this product's context
5. End: which findings a heuristic check CANNOT validate (needs real-user evidence) — mark them as test-with-users
No compliments section. If a heuristic has no violations, skip it silently.`,
    relatedSlugs: ["heuristic-evaluation", "usability", "design-critique", "error-state-review"],
    tags: ["heuristics", "expert-review", "nielsen"],
  },
  {
    id: "tech-cognitive-load-review",
    slug: "cognitive-load-review",
    title: "Cognitive Load Review",
    category: "UX Review",
    useCase: "หน้า/flow ที่ user บ่นว่า 'ใช้ยาก ดูไม่รู้เรื่อง' แต่ชี้จุดไม่ได้ — วัดภาระการคิดอย่างเป็นระบบแล้วลดทีละชนิด",
    difficulty: "advanced",
    timeRequired: "1 วัน ต่อหน้า/flow สั้น",
    participants: "ผู้ตรวจ 1-2 คน + ตัวแทนที่รู้จัก user จริง (calibrate ว่า expert หรือ novice)",
    inputNeeded: [
      "หน้า/flow ที่จะตรวจ", "Task หลักของ user", "Profile ผู้ใช้: ใช้ครั้งแรกหรือใช้ทุกวัน (เกณฑ์ต่างกันมาก)",
    ],
    steps: [
      "ระบุ task หลักหนึ่งเดียวของหน้า — load วัดเทียบกับ task ไม่ใช่ลอยๆ",
      "นับ decision: ทุกจุดที่ user ต้องเลือก/ตีความ/เปรียบเทียบระหว่างทำ task — ลิสต์ออกมาเป็นข้อ",
      "นับ working memory: อะไรที่ user ต้องจำข้ามจอ/ข้าม section (รหัส, เงื่อนไข, ความหมาย icon)",
      "นับ reading tax: text ที่ต้องอ่านเพื่อผ่านไปได้ vs text ตกแต่ง — และ label ที่ต้องตีความ",
      "นับ visual search: หา element ที่ task ต้องใช้เจอเร็วไหม อะไรแย่งสายตา",
      "จำแนกทุกรายการ: จำเป็นต่อ task (intrinsic) หรือ design สร้างเอง (extraneous) — อย่างหลังคือเป้าโจมตี",
      "ลด extraneous ทีละตัว: ตัด, ซ่อนตามจังหวะ (progressive disclosure), default, จัดกลุ่มใหม่ — แล้ววัดซ้ำ",
    ],
    output: "Load inventory: รายการภาระ × ชนิด × จำเป็นไหม + ข้อเสนอลดต่อรายการ + เปรียบเทียบจำนวนก่อน/หลัง",
    decisionCriteria: [
      "Extraneous load (design สร้างเอง) ต้องเข้าใกล้ศูนย์ — intrinsic load ลดได้ด้วยการเรียงจังหวะเท่านั้น",
      "ถ้า user ประจำ (expert) บ่นว่าช้า = อย่าลดด้วยการซ่อน (เพิ่ม click) ให้ลดด้วยความสม่ำเสมอ + shortcut",
      "การซ่อนของ (progressive disclosure) แลกมาด้วย discoverability — ใช้กับของที่คนส่วนน้อยใช้เท่านั้น",
    ],
    exampleScenario:
      "หน้าสร้างแคมเปญ 32 ตัวเลือกในจอเดียว user ใหม่ค้าง 10+ นาที — review พบ decision 21 จุดเป็น extraneous 13 (ตัวเลือกที่ 90% ใช้ค่าเดียว) — แก้: default ทุกตัวที่มีคำตอบยอดนิยม + ซ่อน advanced ไว้หลัง toggle — เหลือ 6 decision สำหรับเคสทั่วไป เวลาสร้างแคมเปญแรกลดเหลือ 3 นาที",
    commonMistakes: [
      "วัด load โดยไม่ fix task — ทุกอย่างดู 'อาจจำเป็น' เมื่อไม่มี task เป็นเกณฑ์",
      "ลด load ด้วยการซ่อนทุกอย่าง — ย้ายภาระจาก 'คิด' ไป 'หา' ซึ่งบางทีแย่กว่า",
      "ใช้เกณฑ์ first-timer กับเครื่องมือที่คนใช้ทุกวัน — density ที่ expert ต้องการโดนตัดทิ้ง",
      "นับแต่จำนวน element ไม่นับจำนวน 'การตัดสินใจ' — หน้าโล่งที่ label กำกวมโหลดหนักกว่าหน้าแน่นที่ชัด",
    ],
    template: `COGNITIVE LOAD REVIEW
หน้า: ___ Task: ___ User profile: [first-time / daily expert]
INVENTORY:
  Decisions: [ลิสต์] → จำเป็น? [intrinsic/extraneous]
  Working memory: [ต้องจำอะไรข้ามจุด] → ระบบถือแทนได้ไหม
  Reading tax: [text ที่ต้องอ่าน/ตีความ] → ตัด/เขียนใหม่
  Visual search: [ของที่หายาก/แย่งตา]
ลด extraneous: ตัด ___ / default ___ / ซ่อน(เฉพาะ minority) ___ / จัดกลุ่ม ___
ก่อน: decisions ___ → หลัง: ___`,
    prompt: `You are a UX reviewer measuring cognitive load. Screen: [SCREENSHOT]. User task: [TASK]. User profile: [first-timer / daily expert].

Audit:
1. DECISION COUNT: list every decision required to complete the task; classify each intrinsic (the task itself needs it) vs extraneous (the design created it)
2. WORKING MEMORY: everything held in the head across the task — can the interface hold it instead?
3. READING TAX: must-read text and interpret-me labels — quote the worst offenders
4. VISUAL SEARCH: findability of task-critical elements; what competes for attention without serving the task
5. Reduction plan per extraneous item: cut / default / group / progressive-disclose (only for minority-use items — note the discoverability cost)
6. Calibrate to the stated profile — flag over-simplification that would slow an expert, or density that would lose a novice
Output: load inventory table + before/after decision count + the 3 changes with the biggest load drop.`,
    relatedSlugs: ["cognitive-load-review", "mental-model", "information-architecture", "friction-reduction"],
    tags: ["cognitive-load", "simplicity", "decisions"],
  },
  {
    id: "tech-mobile-first-review",
    slug: "mobile-first-review",
    title: "Mobile-First Review",
    category: "UX Review",
    useCase: "ตรวจว่าประสบการณ์มือถือเป็น 'ตัวจริง' ไหม — ไม่ใช่ desktop ที่ถูกบีบ — สำหรับ product ที่ traffic หลักคือมือถือ",
    difficulty: "intermediate",
    timeRequired: "0.5-1 วัน ต่อ flow",
    participants: "ผู้ตรวจ 1-2 คน + มือถือจริงอย่างน้อย 1 เครื่อง (จอเล็ก/กลาง)",
    inputNeeded: [
      "Flow/หน้าที่ตรวจ เปิดบนอุปกรณ์จริงหรือ device mode 375px",
      "Top mobile tasks (จาก analytics ว่า user มือถือมาทำอะไรจริง)",
      "สัดส่วน mobile traffic + device แตกหน่อยที่ใช้กันจริง",
    ],
    steps: [
      "เปิดบนเครื่องจริง ถือมือเดียว — ความรู้สึกนิ้วโป้งเอื้อมไม่ถึงไม่มีทางรู้จาก desktop devtools",
      "เดิน top task: เริ่มได้จากจอแรกไหม อะไรกินจอแรกแทน (banner ซ้อน, hero ใหญ่)",
      "Thumb map: action หลักอยู่โซนนิ้วโป้งไหม (ครึ่งล่าง) / destructive อยู่ใกล้ปุ่มที่กดบ่อยไหม",
      "ไล่ touch target: จุดที่เล็กกว่า ~44px หรือชิดกันจนกดพลาด — เจอบ่อยสุดที่ text link และ icon แถวบน",
      "ตรวจ input: คีย์บอร์ดตรงชนิด field ไหม, ฟอร์มยาวมี autofill ไหม, พิมพ์แทนได้ด้วยตัวเลือกไหม",
      "ตรวจของ desktop หลงมา: hover-only, ตารางกว้างบีบจนอ่านไม่ออก, modal ที่ล้นจอ, horizontal overflow",
      "ลองในสภาพจริง: เน็ตช้า (throttle), แดดจ้า (ลด brightness ดู contrast), ระหว่างเดิน",
    ],
    output: "Findings เรียง severity ต่อ task + thumb map ของ action หลัก + รายการ desktop-pattern ที่ต้องแปลงเป็น mobile pattern",
    decisionCriteria: [
      "Top task เริ่มไม่ได้จากจอแรก = severity สูงสุด แก้ก่อน",
      "ทุก interaction ที่พึ่ง hover = ใช้ไม่ได้บนมือถือ ไม่ใช่ 'ลดทอน' — ต้องมีทางเลือก tap",
      "ถ้า mobile traffic >50% แล้ว review ยังเริ่มจาก desktop = กระบวนการทีมผิดทาง ยกธง",
    ],
    exampleScenario:
      "แอปจองคิว traffic มือถือ 84% — review บนเครื่องจริงพบ: ปุ่ม 'จองเลย' อยู่มุมขวาบน (นิ้วโป้งเอื้อมไม่ถึง), จอแรกโดน banner 2 ชั้นกิน, ฟอร์มเบอร์โทรเปิดคีย์บอร์ดตัวอักษร — แก้ 3 จุด booking completion บนมือถือขึ้น 22%",
    commonMistakes: [
      "Review จาก devtools อย่างเดียว — ไม่เจอปัญหา reach, แดด, เน็ตช้า ที่เครื่องจริงเจอ",
      "เช็คแค่ 'layout ไม่พัง' — layout เรียบร้อยแต่ task เริ่มไม่ได้จากจอแรกคือ fail",
      "ลืม keyboard ชนิด field — ความหงุดหงิดสะสมที่ทีมไม่เคยรู้สึกเพราะไม่ได้กรอกเอง",
      "ตัด content บนมือถือจนข้อมูลตัดสินใจหาย — มือถือคือ user หลัก ไม่ใช่เวอร์ชันย่อ",
    ],
    template: `MOBILE-FIRST REVIEW
Flow: ___ Mobile traffic: ___% Top tasks: 1.___ 2.___
อุปกรณ์: [เครื่องจริง: ___] + 375px
เช็คต่อ task:
  จอแรก: เริ่ม task ได้? อะไรกินจอ: ___
  Thumb: action หลักโซนล่าง? [Y/N] destructive ปลอดภัย? [Y/N]
  Targets <44px: [ลิสต์]
  Input: keyboard ตรง field? autofill? แทนการพิมพ์ได้?
  Desktop หลงมา: hover-only ___ / ตารางบีบ ___ / overflow ___
  สภาพจริง: เน็ตช้าเห็นอะไร / contrast กลางแดด
Severity เรียงตาม impact ต่อ top task`,
    prompt: `You are a mobile UX specialist reviewing screens for mobile-primary usage. Screens: [375px SCREENSHOTS]. Mobile traffic: [X%]. Top mobile tasks: [LIST]. Usage context: [SITUATIONS].

Review:
1. FIRST VIEWPORT per task: can the task start without scrolling? What occupies the viewport instead — count the junk layers (banners, prompts) before content
2. THUMB MAP: each primary action → reach zone (easy/stretch/two-hands); destructive actions near frequent ones
3. TARGETS: elements likely below 44px or tightly packed — list locations
4. INPUT: per field — right keyboard type, autofill, could-be-a-picker-instead
5. DESKTOP REMNANTS: hover-dependent UI, squeezed tables, oversized modals, unintended horizontal scroll
6. CONDITIONS: slow-network behavior (what renders first), outdoor-contrast risks per the stated context
Severity judged against the stated tasks and context, not generic rules. Output: findings table + thumb remap + top 3 fixes for task completion.`,
    relatedSlugs: ["mobile-first-review", "responsive-behavior", "responsive-rules", "interaction-design"],
    tags: ["mobile", "touch", "thumb-zone"],
  },
  {
    id: "tech-accessibility-audit",
    slug: "accessibility-audit",
    title: "Accessibility Audit",
    category: "UX Review",
    useCase: "ตรวจ accessibility ทั้ง flow อย่างเป็นระบบ 3 ชั้น: เครื่องมืออัตโนมัติ + ตรวจมือ + ใช้งานจริงด้วย AT — ได้แผนแก้ที่จัดลำดับแล้ว",
    difficulty: "advanced",
    timeRequired: "2-4 วัน ต่อ flow สำคัญ",
    participants: "ผู้ตรวจที่รู้ WCAG 1 คน + dev 1 (ช่วยดู code) — หรือจ้าง specialist สำหรับ audit ทางการ",
    inputNeeded: [
      "Flow ที่ user ต้องทำได้ (กำหนดเป็น task)",
      "เครื่องมือ: axe DevTools, keyboard, screen reader (VoiceOver/NVDA)",
      "เกณฑ์: WCAG 2.2 AA",
    ],
    steps: [
      "ชั้น 1 — automated: รัน axe/Lighthouse ทุกหน้าใน flow เก็บผล (จับได้ ~30-40% ของปัญหา: contrast, name, ARIA ผิดรูป)",
      "ชั้น 2 — keyboard: เดินทั้ง flow ด้วย keyboard ล้วน: Tab ไล่ครบไหม, focus เห็นไหม, ติด trap ไหม, ทำ task จบไหม — จดทุกจุดที่ตาย",
      "ชั้น 2 ต่อ — โครงสร้าง: heading outline สมเหตุผลไหม, landmark ครบไหม, zoom 200% แล้วใช้ได้ไหม, สีเดี่ยวสื่อความหมายตรงไหน",
      "ชั้น 3 — screen reader: ทำ task เดียวกันด้วย VoiceOver/NVDA: ปุ่มมีชื่อไหม, ฟอร์ม error ประกาศไหม, dynamic content เงียบไหม",
      "รวมทุก finding: อ้าง WCAG criterion + severity (blocker = ทำ task ไม่ได้สำหรับกลุ่มใด, major, minor)",
      "จัดกลุ่มตาม root cause: ปัญหา 40 จุดจาก component เดียว = fix เดียว — แผนแก้เรียงตาม impact/effort",
    ],
    output: "Audit report: findings × WCAG criterion × severity × root cause + แผนแก้จัดกลุ่มตาม component + รายการที่ต้อง retest",
    decisionCriteria: [
      "Blocker (task ทำไม่ได้ด้วย keyboard/AT) = หยุด release ของ flow นั้น",
      "แก้ที่ shared component ก่อนเสมอ — หนึ่ง fix ฆ่าหลายสิบ instance",
      "ผ่าน automated 100% ≠ ผ่านจริง — ชั้น 2-3 คือตัวตัดสิน",
    ],
    exampleScenario:
      "Audit flow สมัครสมาชิก: axe เจอ 23 (ส่วนใหญ่ contrast), keyboard เจอที่ axe ไม่เห็น — dropdown วันเกิดเป็น div ที่ keyboard เข้าไม่ถึงเลย (blocker), screen reader พบ error ฟอร์มโผล่เงียบๆ ไม่ประกาศ — แผนแก้: 3 component fixes ครอบ 80% ของ findings",
    commonMistakes: [
      "รันแต่เครื่องมืออัตโนมัติแล้วประกาศว่าผ่าน — พลาด 60-70% ของปัญหาจริง",
      "ตรวจเป็นหน้าๆ แทนเป็น task — ผ่านทีละหน้าแต่ flow รวมทำไม่จบก็มี",
      "รายงาน 100 ข้อแบนๆ ไม่จัด root cause — ทีมท้อและแก้แบบสุ่ม",
      "Audit ครั้งเดียวจบ — ไม่มี retest และไม่มี guard กัน regression",
    ],
    template: `A11Y AUDIT — 3 LAYERS
Flow/tasks: ___ เกณฑ์: WCAG 2.2 AA
L1 Automated (axe/Lighthouse): [ผลต่อหน้า]
L2 Manual:
  Keyboard: Tab ครบ? focus เห็น? trap? task จบ? ___
  โครงสร้าง: headings ___ landmarks ___ zoom 200% ___ สีเดี่ยว ___
L3 Screen reader ([VoiceOver/NVDA]): ชื่อปุ่ม ___ ฟอร์ม/error ___ dynamic ___
FINDINGS: [WCAG # / ตำแหน่ง / severity / root component]
แผน: fix ต่อ component (ครอบกี่ instance) เรียง impact/effort
Retest: [รายการ + วันที่]`,
    prompt: `You are an accessibility auditor consolidating a 3-layer audit. Inputs: automated results: [AXE/LIGHTHOUSE OUTPUT], keyboard walkthrough notes: [PASTE], screen reader notes: [PASTE]. Flow tasks: [LIST].

Produce:
1. Unified findings table: issue / WCAG 2.2 criterion / layer that caught it / severity (blocker = task impossible for a user group / major / minor) / location
2. ROOT-CAUSE CLUSTERS: group by source component — instances per cluster, the single fix per cluster
3. Remediation plan: blockers by task first, then clusters by coverage-per-effort; flag fixes needing design decisions (e.g. no passing color in palette)
4. Retest checklist per fix + the regression guards worth adding (lint rules, CI checks)
5. Honesty section: what this audit did NOT cover (real AT user testing, browser/AT combos untested)
Use my actual data — do not invent findings not present in the inputs.`,
    relatedSlugs: ["accessibility-audit", "accessibility", "accessibility-requirements", "form-ux-review"],
    tags: ["accessibility", "wcag", "audit"],
  },
  {
    id: "tech-form-ux-review",
    slug: "form-ux-review",
    title: "Form UX Review",
    category: "UX Review",
    useCase: "ตรวจฟอร์มที่ completion ต่ำหรือก่อน launch ฟอร์มสำคัญ — field audit, ลำดับ, validation, ความปลอดภัยของข้อมูลที่กรอก",
    difficulty: "basic",
    timeRequired: "0.5 วัน ต่อฟอร์ม",
    participants: "ผู้ตรวจ 1 + เจ้าของ data (ยืนยันว่า field ไหนใช้จริง)",
    inputNeeded: [
      "ฟอร์มจริงที่กรอกได้ (ไม่ใช่แค่ภาพ) + ทุก field",
      "ข้อมูลจาก business ว่า field ไหนถูกใช้จริง field ไหนเก็บเผื่อ",
      "Drop-off/error data ถ้ามี",
    ],
    steps: [
      "กรอกฟอร์มจริงให้จบหนึ่งรอบบนมือถือ — จด friction ทุกจุดที่ตัวเองรู้สึก",
      "Field audit กับเจ้าของ data: ต่อ field — ใช้ทำอะไร ใครใช้ ใช้เมื่อไร — ตอบไม่ได้ = ตัด, ใช้ทีหลัง = เลื่อน, ระบบรู้เอง = derive",
      "ตรวจลำดับ: ง่ายก่อนยาก, ของ sensitive อยู่ท้าย, จัดกลุ่มมีเหตุผล, คอลัมน์เดียว",
      "ตรวจ label/help: label อยู่นอก field (ไม่ใช่ placeholder), format บอกก่อนพิมพ์, required/optional ชัด",
      "ทดสอบ validation: พิมพ์ผิดดู — ด่าตอนกำลังพิมพ์ไหม (ต้อง blur), error บอกวิธีแก้ไหม, อยู่ติด field ไหม",
      "ทดสอบความปลอดภัย: submit แล้วตัดเน็ต / ใส่ข้อมูลผิดหนึ่งช่อง — ข้อมูลที่กรอกหายไหม (บาปหนักสุด)",
      "นับ effort ก่อน/หลังข้อเสนอ: จำนวน field, keystroke, การตัดสินใจ",
    ],
    output: "Field audit table (เก็บ/เลื่อน/ตัด/derive ต่อ field) + รายการ fix validation/label พร้อม copy ใหม่ + effort เทียบก่อนหลัง",
    decisionCriteria: [
      "Field ที่ไม่มีใครตอบได้ว่าใช้ทำอะไร = ตัดทันที — ทุก field มีต้นทุน completion จริง",
      "Submit fail แล้วข้อมูลหาย = blocker เดียวที่ต้องแก้ก่อนทุกอย่าง",
      "Error message ที่ไม่บอกวิธีแก้ = นับเป็น fail ทุกข้อความ",
    ],
    exampleScenario:
      "ฟอร์มขอใบเสนอราคา 14 ช่อง completion 31% — field audit พบ 6 ช่องไม่มีใครในบริษัทใช้ (เก็บมาตั้งแต่ทำเว็บครั้งแรก), 3 ช่องถามได้ทีหลังตอน sales โทร — เหลือ 5 ช่อง + แก้ error ให้บอกวิธี — completion ขึ้น 58% ในเดือนแรก",
    commonMistakes: [
      "Review จากภาพโดยไม่กรอกจริง — ไม่เจอ validation timing, keyboard, ข้อมูลหาย",
      "ไม่เอาเจ้าของ data มานั่งด้วย — ตัด field ไม่ได้เพราะไม่มีใครกล้ายืนยันว่าไม่ใช้",
      "เพิ่ม helper text แก้ทุกปัญหา — text เพิ่มภาระ ตัด field ดีกว่าอธิบาย field",
      "ไม่ test เคส fail (เน็ตหลุด, server error) — เคสที่ฆ่า completion เงียบที่สุด",
    ],
    template: `FORM UX REVIEW
ฟอร์ม: ___ completion ปัจจุบัน: ___% กรอกจริงแล้ว: [มือถือ Y/N]
FIELD AUDIT (กับเจ้าของ data):
  [field] → ใช้ทำอะไร: ___ → [เก็บ/เลื่อน/ตัด/derive]
ลำดับ: ง่าย→ยาก? sensitive ท้าย? กลุ่มสมเหตุผล? คอลัมน์เดียว?
Validation: ตอน blur? error บอกวิธีแก้? ติด field?
ความปลอดภัย: submit fail ข้อมูลอยู่? [ทดสอบจริง]
Effort: fields ___ → ___ / keystrokes ___ → ___`,
    prompt: `You are a form UX reviewer. Form: [SCREENSHOT + FIELD LIST]. Field usage truth from the business: [WHICH FIELDS ARE ACTUALLY USED]. Data: [DROP-OFF/ERRORS IF ANY]. Context: [DEVICE MIX].

Audit:
1. Per field: verdict — keep (used for this transaction) / defer (ask later) / derive (computable) / cut (never used) — with reasoning
2. Order & grouping: easy-to-hard, sensitive-last, single column, visible group logic
3. Labels: persistent labels (not placeholder-as-label), format shown before typing, required-marking on the minority
4. Validation: timing (blur, not keystroke), per-error message quoted + rewritten to say what's wrong AND how to fix
5. Failure safety: data survival on server error / network loss — the cardinal check
6. Effort tally: fields, keystrokes, decisions — before vs proposed
Output: field verdict table + fixes with rewritten Thai copy + the proposed form spec + effort comparison.`,
    relatedSlugs: ["form-ux-review", "form-conversion", "error-handling", "ux-writing"],
    tags: ["form", "completion", "validation"],
  },
  {
    id: "tech-error-state-review",
    slug: "error-state-review",
    title: "Error State Review",
    category: "UX Review",
    useCase: "ไล่ตรวจทุก error ใน flow สำคัญ: เกิดจริงหน้าตาเป็นยังไง บอก user ครบไหม (เกิดอะไร/ข้อมูลปลอดภัยไหม/ทำอะไรต่อ) — ก่อนที่ user จะเจอเอง",
    difficulty: "intermediate",
    timeRequired: "1 วัน ต่อ flow",
    participants: "Designer 1 + dev 1 (จำเป็น — ต้องจำลอง error จริงได้)",
    inputNeeded: [
      "Flow ที่ตรวจ + สิทธิ์เข้า staging ที่จำลอง error ได้",
      "รายการ error ที่เป็นไปได้จาก dev (network, validation, permission, server, third-party)",
      "Error log/ticket จริง — error ไหนเกิดบ่อยสุดในโปรดักชัน",
    ],
    steps: [
      "ทำ failure inventory กับ dev: ทุกจุดของ flow พังแบบไหนได้บ้าง — dev รู้จุดเปราะที่ designer มองไม่เห็น",
      "จำลองให้เกิดจริงทีละตัว (ตัดเน็ต, ส่งค่าผิด, mock 500) — ดูของจริง อย่าดูจาก Figma",
      "ต่อ error เช็ค 3 คำถาม: บอกไหมว่าเกิดอะไร / ข้อมูล-เงินของ user เป็นอะไรไหม / ทำอะไรต่อได้",
      "เช็คความปลอดภัย: error แล้วข้อมูลที่กรอกหายไหม, เงินถูกตัดไหม-บอกไหม, กดซ้ำแล้วเกิดอะไร (double-submit)",
      "เช็คภาษา: โทษ user ไหม, มีแต่รหัส (ERR_5021) ไหม, generic ('Something went wrong') ในจุดเงินไหม",
      "หา error ที่ป้องกันได้: constraint/disable/confirm ที่ทำให้ error นั้นไม่ต้องมีอยู่เลย",
      "เรียงแก้ตาม: ความถี่จริง (จาก log) × ความเสียหาย (เงิน/ข้อมูล มาก่อน)",
    ],
    output: "Error matrix: จุดพัง × หน้าตาปัจจุบัน × ผ่าน 3 คำถามไหม × copy ใหม่ × ป้องกันได้ไหม — เรียงตามความถี่×ความเสียหาย",
    decisionCriteria: [
      "Error ในจุดเงิน/ข้อมูลที่ไม่บอกสถานะ = blocker — user ไม่รู้ว่าเงินถูกตัดไหมคือ trust พังถาวร",
      "Error ที่ป้องกันได้ด้วย constraint = ป้องกันดีกว่าออกแบบ error สวย",
      "ข้อมูลที่ user กรอกต้องรอดทุก error ไม่มีข้อยกเว้น",
    ],
    exampleScenario:
      "ตรวจ checkout พบ: payment timeout โชว์ 'Error' เปล่าๆ — user ไม่รู้เงินตัดยัง กดซ้ำ เกิด double-charge 12 เคส/เดือน — แก้: บอกสถานะเงินชัด + กันกดซ้ำ + ตะกร้าไม่หาย — ticket 'เงินหาย' เป็นศูนย์ในเดือนถัดมา",
    commonMistakes: [
      "Review จาก mockup — error จริงในโปรดักชันหน้าตาไม่เหมือนใน Figma เสมอ",
      "ไม่มี dev ใน session — จำลอง error ไม่ได้ และไม่รู้ว่าจุดไหนพังได้",
      "เช็คแค่ validation ลืม network/timeout/third-party — ตัวที่เกิดจริงบ่อยกว่า",
      "แก้ทุก error เท่ากัน — error จุดเงินกับ error โหลดรูป avatar ไม่ควรได้งบเท่ากัน",
    ],
    template: `ERROR STATE REVIEW
Flow: ___ (ทำกับ dev — จำลองได้จริง)
FAILURE INVENTORY: [จุด × ชนิด: validation/network/permission/server/3rd-party]
ต่อ error (จำลองแล้วดูจริง):
  หน้าตาปัจจุบัน: [screenshot]
  3 คำถาม: เกิดอะไร? [Y/N] ข้อมูล-เงินปลอดภัย? [Y/N] ทำอะไรต่อ? [Y/N]
  ข้อมูลที่กรอกรอด? [ทดสอบจริง Y/N]
  Copy ใหม่: ___
  ป้องกันได้ไหม: [constraint/disable/confirm]
เรียงแก้: ความถี่ (log จริง) × ความเสียหาย`,
    prompt: `You are a UX designer reviewing error states with an engineer. Flow: [NAME + STEPS]. Failure inventory from engineering: [PASTE LIST]. Production error frequency: [LOG DATA IF ANY]. Current error screens: [SCREENSHOTS/DESCRIPTIONS].

Per failure point:
1. Three-question test on the current state: does it say what happened / is the user's data-money explicitly safe / what to do next — pass/fail each
2. Data survival: does entered input survive? Money state: if payment-adjacent, is charge status unambiguous? Double-submit protected?
3. Language: blame, bare error codes, generic "something went wrong" at high-stakes points — quote and rewrite (Thai copy, no placeholders)
4. Prevention: could a constraint/disable/confirm eliminate this error entirely?
Order the fix list by real frequency × damage (money/data first). Output: error matrix + rewritten copy + prevention list.`,
    relatedSlugs: ["error-state-review", "error-handling", "checkout-ux", "ux-writing"],
    tags: ["error", "recovery", "trust"],
  },
  {
    id: "tech-empty-state-review",
    slug: "empty-state-review",
    title: "Empty State Review",
    category: "UX Review",
    useCase: "ไล่ตรวจทุกจุดที่หน้าว่างได้ (first-use, no-results, ลบหมด) ว่าเป็นจุดเริ่มหรือทางตัน — โดยเฉพาะ first-use ที่เป็นด่านแรกของ user ใหม่ทุกคน",
    difficulty: "basic",
    timeRequired: "0.5 วัน ต่อ product area",
    participants: "ผู้ตรวจ 1 คน (+ บัญชีใหม่เอี่ยมสำหรับดู first-use จริง)",
    inputNeeded: [
      "บัญชีใหม่ที่ยังไม่มีข้อมูล (ดู first-use จริง ไม่ใช่จินตนาการ)",
      "รายการหน้า/section ที่แสดงข้อมูล (ทุกอันว่างได้)",
      "Analytics: user ใหม่หยุดที่หน้าไหน (ถ้ามี)",
    ],
    steps: [
      "สร้างบัญชีใหม่แล้วเดินทั้ง product — ทุกหน้าที่เจอความว่างคือ first impression จริงของ user ใหม่",
      "ต่อหน้า แยกชนิดความว่าง: first-use (ยังไม่เคยมีข้อมูล) / no-results (filter/search ไม่เจอ) / cleared (เคยมีแล้วหมด) / error ที่แสดงเป็นว่าง (อันตรายสุด)",
      "เช็ค first-use ต่อจุด: บอกไหมว่าที่นี่ทำอะไรได้ / เห็นภาพไหมว่ามีข้อมูลแล้วหน้าตาเป็นไง / มี action เริ่มต้นไหม",
      "เช็ค no-results: บอกไหมว่าหาอะไรแล้วไม่เจอ / มีทางออกไหม (ล้าง filter, แก้คำค้น) — ห้ามใช้ message เดียวกับ first-use",
      "เช็คเคสร้าย: fetch fail แล้วแสดงเป็น 'ไม่มีข้อมูล' ไหม — user เข้าใจว่าข้อมูลหาย = ความเสียหายระดับ trust",
      "จัดลำดับ: หน้าแรกที่ user ใหม่เจอ + หน้าใน activation path มาก่อน",
    ],
    output: "Empty state inventory: ทุกจุด × ชนิด × ผ่านเกณฑ์ไหม × copy/CTA ที่เสนอ — เรียงตามตำแหน่งใน activation path",
    decisionCriteria: [
      "Error ที่ render เป็น 'ไม่มีข้อมูล' = blocker แก้ก่อนทุกอย่าง",
      "First-use บน activation path ที่ไม่มี action เริ่มต้น = แก้อันดับสอง — มันคือ onboarding ที่หายไป",
      "No-results ที่ใช้ message เดียวกับ first-use = สับสนทันทีเมื่อ filter ไม่เจอ",
    ],
    exampleScenario:
      "เดิน product ด้วยบัญชีใหม่พบ 11 จุดว่าง: หน้า dashboard (จุดแรกที่ user ใหม่เห็น) เป็น widget เปล่า 6 ช่องไม่มีคำอธิบาย — ตรงกับ analytics ที่ user ใหม่ 60% ไม่กลับมาวันที่สอง — แก้เป็น setup guide 3 ขั้น + ตัวอย่างข้อมูล demo, D2 retention ขึ้นจาก 40% เป็น 58%",
    commonMistakes: [
      "ไม่เคยดู product ด้วยบัญชีเปล่าจริง — ทีมเห็นแต่บัญชี dev ที่ข้อมูลเต็ม",
      "ใช้ message 'ไม่มีข้อมูล' เดียวครอบทุกชนิดความว่าง",
      "Empty state สวย (illustration น่ารัก) แต่ไม่มี action — สวยและตัน",
      "มองข้าม error-as-empty — บั๊กที่ทำลายความเชื่อใจเงียบที่สุด",
    ],
    template: `EMPTY STATE REVIEW
เดินด้วย: [บัญชีใหม่เอี่ยม] วันที่: ___
ต่อจุดว่าง:
  หน้า/section: ___ ชนิด: [first-use/no-results/cleared/error-as-empty]
  ปัจจุบัน: [screenshot]
  เกณฑ์: บอกว่าทำอะไรได้? เห็นภาพปลายทาง? มี action? [Y/N]
  เสนอ: headline ___ / body ___ / CTA ___
ลำดับแก้: error-as-empty → activation path → ที่เหลือ`,
    prompt: `You are a UX reviewer auditing empty states. Inventory from a fresh-account walkthrough: [PASTE: per location — screenshot/description, how users reach it]. Activation path: [WHICH SCREENS NEW USERS HIT FIRST].

Per empty state:
1. Classify: first-use / no-results / cleared / error-rendered-as-empty (flag these as blockers — a failed fetch shown as "no data" is trust damage)
2. Score first-use against: explains what this area does / previews the populated value / offers a starting action (+ sample-data option where setup is heavy)
3. Score no-results against: states what was searched / offers exits (clear filters, adjust) — and confirm it's NOT sharing the first-use message
4. Write the fix per failing state: headline + body (Thai, ≤2 sentences) + CTA label
5. Order by activation-path position — the first empty screen a new user meets outranks everything
Output: inventory table + verdicts + written copy + priority order.`,
    relatedSlugs: ["empty-state-review", "onboarding-flow", "state-specification", "ux-writing"],
    tags: ["empty-state", "first-use", "activation"],
  },
  {
    id: "tech-trust-signal-review",
    slug: "trust-signal-review",
    title: "Trust Signal Review",
    category: "UX Review",
    useCase: "ตรวจว่าทุกจุดที่ขอ commitment (อีเมล, ข้อมูล, เงิน) มีความน่าเชื่อพอไหมสำหรับคนแปลกหน้า — และ proof ที่มีถูกวางถูกที่ไหม",
    difficulty: "intermediate",
    timeRequired: "0.5-1 วัน",
    participants: "ผู้ตรวจ 1-2 คน (คนนอกทีมยิ่งดี — ตาคนแปลกหน้า)",
    inputNeeded: [
      "Flow ที่มีจุดขอ commitment (signup, checkout, ขอข้อมูล)",
      "Trust assets ที่มีจริงทั้งหมด: ลูกค้า, รีวิว+จำนวน, มาตรฐาน/cert, นโยบาย, ตัวตนบริษัท",
      "ระดับความรู้จักของ brand (คนรู้จักอยู่แล้วหรือใหม่เอี่ยม)",
    ],
    steps: [
      "Map commitment points: ทุกจุดที่ขออะไรจาก user — อีเมล, ข้อมูลส่วนตัว, บัตร, เงิน — เรียงตามความเสี่ยงที่ user รู้สึก",
      "ณ แต่ละจุด ถามแบบคนแปลกหน้า: 'ทำไมต้องเชื่อ' — reassurance อยู่ตรงนั้นไหม (ไม่นับของที่อยู่หน้า about)",
      "ตรวจ proof ทุกชิ้น: เจาะจง-ตรวจสอบได้ (ชื่อจริง, ตัวเลขจริง, ลิงก์ได้) หรือประดับ ('ลูกค้ามากมาย', โควตไม่มีชื่อ) — อย่างหลังลด trust ในสายตาคนขี้สงสัย",
      "ตรวจคำถามเสี่ยง ณ จุดเงิน: ยกเลิกได้ไหม คืนเงินยังไง ข้อมูลเอาไปทำอะไร — ตอบ ณ จุดตัดสินใจไหม ภาษาคนไหม",
      "กวาด professional defects: ลิงก์ตาย, รูปแตก, ปีลิขสิทธิ์เก่า, typo, สไตล์ไม่สม่ำเสมอ — แต่ละจุดเล็กแต่รวมกันอ่านว่า 'ร้าง'",
      "สแกน dark patterns: countdown ปลอม, scarcity ปลอม, pre-checked add-on, ราคาโผล่ทีหลัง — เจอแล้วต้องถอด",
      "เทียบ asset ที่มีกับที่ใช้: ของดีที่มีจริงแต่ไม่ได้วางตรงจุดที่ทำงานหนักสุด",
    ],
    output: "Commitment-point map (จุด × reassurance ที่มี × ช่องว่าง × fix) + proof audit (จริง/ประดับ) + defect list + แผนวาง asset ใหม่",
    decisionCriteria: [
      "จุดขอเงิน/บัตรที่ไม่มี reassurance ในสายตา = แก้อันดับแรก",
      "Proof ประดับ (ตัวเลขกลม, โควตไร้ชื่อ) = ถอดหรือแทนด้วยของจริง — อย่าปล่อยไว้",
      "Dark pattern ทุกชนิด = ถอดทันที — conversion ที่ได้ไม่คุ้ม trust ที่เสียถาวร",
    ],
    exampleScenario:
      "ร้านออนไลน์แบรนด์ใหม่ cart abandonment สูง — review พบจุดกรอกบัตรไม่มี reassurance ใดๆ ทั้งที่มีของจริง: รีวิว 4.7 (89), คืนสินค้า 30 วัน, ที่อยู่บริษัทจดทะเบียน — ทั้งหมดอยู่ใน footer ที่ไม่มีใครเห็น — ย้ายมาไว้ข้างปุ่มจ่าย + ถอด 'ประกัน' ที่ pre-checked — abandonment ลด 14%",
    commonMistakes: [
      "วาง trust ไว้หน้า about/footer แล้วคิดว่าครบ — reassurance ทำงานเฉพาะ ณ จุดที่ความกลัวเกิด",
      "ใช้ proof ประดับเพราะของจริงตัวเลขน้อย — '89 รีวิว' จริง ชนะ 'ผู้ใช้มากมาย' ปลอม",
      "มองข้าม defect เล็กๆ — typo กับลิงก์ตายส่งสัญญาณแรงกว่าที่ทีมคิด",
      "เพิ่ม badge ความปลอดภัยมั่วๆ ที่ไม่ได้เป็นสมาชิกจริง — ถูกจับได้คือจบ",
    ],
    template: `TRUST SIGNAL REVIEW
Brand: [ใหม่/เป็นที่รู้จัก] Flow: ___
COMMITMENT MAP:
  จุด: [ขออะไร] ความกลัว ณ จุดนั้น: ___
  Reassurance ในสายตา: [มี/ไม่มี: ___] → fix: ___
PROOF AUDIT: [ชิ้น × จริง-ตรวจได้/ประดับ × ที่อยู่ปัจจุบัน × ควรอยู่]
DEFECTS: ลิงก์ตาย ___ รูปแตก ___ typo ___ ปีเก่า ___
DARK PATTERNS: [เจอ → ถอด]
ASSET ที่มีแต่ไม่ได้ใช้: ___ → วางที่: ___`,
    prompt: `You are a trust & credibility reviewer. Flow: [SCREENSHOTS, especially commitment points]. Brand recognition: [new/known]. Real trust assets: [LIST EVERYTHING REAL: reviews+counts, clients, certs, policies, company identity].

Audit as a skeptical stranger:
1. Commitment map: every ask (email/data/card/money) → the fear at that moment → reassurance present AT that point (about-page doesn't count) → gap
2. Proof audit: each signal — specific-verifiable vs decorative; decorative proof gets replaced-or-removed verdicts (it reads as fake to skeptics)
3. Risk reversal at the money point: cancel/refund/data-use answered in human language at the decision?
4. Professional defect sweep: broken links/images, stale dates, typos, inconsistent styling — list all
5. Dark pattern scan: fake urgency, pre-checked add-ons, late-revealed costs — flag for removal
6. Asset placement plan: my real assets that exist but sit where they don't work
Output: commitment table + proof verdicts + defect list + placement plan. Never suggest fabricating proof.`,
    relatedSlugs: ["trust-credibility-review", "trust-signals", "checkout-ux", "landing-page-review"],
    tags: ["trust", "credibility", "proof"],
  },
];
