import type { UXTerm } from "@/types/playbook";

export const REVIEW_TERMS: UXTerm[] = [
  {
    id: "heuristic-evaluation",
    slug: "heuristic-evaluation",
    term: "Heuristic Evaluation",
    category: "ux-review",
    icon: "📋",
    level: "intermediate",
    shortDescription: "ตรวจ interface กับ heuristics มาตรฐาน (Nielsen 10 ข้อ) เพื่อหา usability issue โดยไม่ต้องใช้ user",
    fullDefinition:
      "Heuristic evaluation คือ expert review ที่ใช้เกณฑ์มาตรฐาน — Nielsen's 10 heuristics (visibility of status, match real world, user control, consistency, error prevention, recognition over recall, flexibility, minimalist design, error recovery, help) — ไล่ตรวจทีละหน้า/flow แล้วบันทึก issue พร้อมข้อที่ละเมิดและ severity 0-4 ใช้ evaluator 2-3 คนแยกกันตรวจแล้วรวมผล",
    whyItMatters:
      "เป็นวิธีหา usability issue ที่ถูกและเร็วที่สุด (ไม่ต้อง recruit ใคร) — เหมาะเป็นรอบกรองก่อน usability test เพื่อให้ session กับ user จริงไม่เสียไปกับ issue พื้นฐานที่ expert เจอได้เองอยู่แล้ว",
    whenToUse: [
      "ก่อน usability test — เก็บ issue ผิวๆ ออกก่อนให้ test เจอของลึก",
      "ตอน inherit product เก่าที่ต้อง audit ภาพรวมเร็วๆ",
      "Quarterly sweep บน flow หลักที่ไม่มีงบ research ต่อเนื่อง",
    ],
    whenNotToUse: [
      "ใช้แทน user testing ไม่ได้ — heuristics จับ violation ของหลักการ แต่ไม่เห็น mental model จริงของ user",
      "ตัดสิน business decision (จะ build feature ไหม) — มันตอบแค่คุณภาพ interface",
    ],
    howToApply: [
      "กำหนด scope: flow ไหน หน้าไหน device ไหน",
      "Evaluator 2-3 คนตรวจแยกกันก่อน (กัน groupthink) คนละ 1-2 ชม.",
      "ทุก issue บันทึก: ตำแหน่ง, heuristic ที่ละเมิด, severity 0-4, screenshot",
      "รวมผล: ตัด duplicate, ถก severity ที่ให้ต่างกัน, จัด priority",
      "ส่งมอบเป็น actionable list — issue + ข้อเสนอแก้ ไม่ใช่แค่รายการปัญหา",
    ],
    checklist: [
      "ใช้ evaluator ≥2 คนตรวจแยกกันก่อนรวมผล",
      "ทุก issue ระบุ heuristic ที่ละเมิด (กันการรีวิวตามรสนิยม)",
      "ทุก issue มี severity rating พร้อมเหตุผล",
      "มี screenshot/ตำแหน่งชัดเจน reproduce ได้",
      "แต่ละ issue มีข้อเสนอแก้ที่ dev นำไปทำได้",
      "แยก 'violation ของหลักการ' ออกจาก 'ความเห็นส่วนตัว' อย่างซื่อสัตย์",
    ],
    deliverables: ["Findings table: issue × heuristic × severity × fix", "Top-10 prioritized fixes สำหรับ sprint ถัดไป"],
    goodExample:
      "Evaluator 3 คนตรวจ checkout แยกกัน พบตรงกัน: ไม่มี feedback หลังกดจ่าย (H1: visibility, severity 4) — รายงานแนบ clip กดปุ่มแล้วนิ่ง 3 วิ พร้อม fix: spinner + disable ปุ่ม dev แก้จบใน sprint เดียว",
    badExample:
      "Designer คนเดียวไล่ดูแอปแล้วเขียน 'หน้านี้ดูรกไปหน่อย ควรсделать minimal' — ไม่อ้าง heuristic, ไม่มี severity, ไม่มี fix เจาะจง กลายเป็น opinion war ใน comment",
    commonMistakes: [
      "ตรวจคนเดียว — แต่ละ evaluator เจอ issue เพียง ~35% การรวม 3 คนถึงครอบคลุม",
      "ไม่ระบุ heuristic ทำให้แยกไม่ออกว่าอันไหน principle อันไหนรสนิยม",
      "ไม่ให้ severity เลยจัดลำดับไม่ได้ ทีมเลือกแก้อันง่ายแทนอันสำคัญ",
      "สับสนกับ usability testing แล้วอ้างว่า 'test แล้ว' ทั้งที่ user จริงยังไม่เคยเห็น",
    ],
    relatedSlugs: ["usability", "cognitive-load-review", "usability-testing", "accessibility-audit"],
    tags: ["heuristics", "expert-review", "nielsen", "audit"],
    prompts: [
      `You are a senior UX auditor. Evaluate the screens/flow I provide against Nielsen's 10 usability heuristics.

For every issue found:
- Location (screen + element)
- Heuristic violated (number + name)
- Severity 0-4 (0 not a problem, 1 cosmetic, 2 minor, 3 major, 4 catastrophic) with one-line justification
- Concrete fix a developer can implement

Rules: separate principle violations from stylistic opinions — if it's opinion, label it [OPINION] or omit. Cover all 10 heuristics explicitly; state "no issues found" per heuristic if clean.
Output: markdown table sorted by severity, then a top-5 fix list with effort estimates (S/M/L).`,
    ],
    visualDemo: "audit-report",
    demoData: {
      title: "Heuristic Evaluation: Checkout",
      findings: [
        { severity: "critical", issue: "กดจ่ายแล้วไม่มี feedback 3 วิ (H1: Visibility of system status)", fix: "Spinner ทันที + disable ปุ่ม" },
        { severity: "high", issue: "ลบที่อยู่ได้โดยไม่มี confirm/undo (H5: Error prevention)", fix: "เพิ่ม undo toast 8 วินาที" },
        { severity: "medium", issue: "ศัพท์ 'Fulfillment node' บนหน้า user (H2: Match real world)", fix: "เปลี่ยนเป็น 'สาขาที่จัดส่ง'" },
        { severity: "low", issue: "ปุ่ม back สองจุดให้ผลต่างกัน (H4: Consistency)", fix: "รวม behavior ให้เหลือแบบเดียว" },
      ],
    },
  },
  {
    id: "cognitive-load-review",
    slug: "cognitive-load-review",
    term: "Cognitive Load Review",
    category: "ux-review",
    icon: "🧮",
    level: "intermediate",
    shortDescription: "ตรวจว่าหน้าจอบังคับให้ user คิด จำ และตัดสินใจเกินจำเป็นตรงไหน แล้วลดอย่างเป็นระบบ",
    fullDefinition:
      "Cognitive load review คือการไล่ดูทีละหน้าว่า user ต้อง อ่านอะไรบ้าง / จำอะไรข้ามหน้า / ตัดสินใจกี่ครั้ง / เทียบตัวเลือกกี่ทาง เพื่อทำ task ให้เสร็จ — แล้วลดด้วยเครื่องมือ: default ที่ฉลาด, progressive disclosure, จัดกลุ่มข้อมูล (chunking), ลดตัวเลือก, แสดงข้อมูลตอนที่ต้องใช้แทนให้จำ",
    whyItMatters:
      "ทุกการตัดสินใจเล็กๆ ที่ไม่จำเป็นสะสมเป็นความเหนื่อย — user ไม่ได้ออกจาก flow เพราะตัดสินใจใหญ่ไม่ได้ แต่เพราะโดนบังคับตัดสินใจเล็ก 15 ครั้งติดกัน โดยเฉพาะบน flow ที่เกี่ยวกับเงินซึ่งความเหนื่อยกลายเป็นความไม่มั่นใจแล้วเลื่อนการตัดสินใจออกไป (= conversion ตก)",
    whenToUse: [
      "Flow สมัคร/จ่ายเงิน/ตั้งค่าครั้งแรก ที่ drop-off สูง",
      "หน้า form ยาวหรือหน้าที่มีตัวเลือกเยอะ (pricing, ตั้งค่า)",
      "หลังยัด feature เพิ่มมาหลายรอบจนหน้าเริ่มแน่น",
    ],
    whenNotToUse: [
      "Dashboard ของ expert ที่ใช้ทุกวัน — ความหนาแน่นสูงอาจคือ efficiency ไม่ใช่ load (ลด density อาจทำให้ช้าลง)",
      "อย่าใช้เป็นข้ออ้างซ่อนข้อมูล critical (ราคา/เงื่อนไข) ใต้ progressive disclosure",
    ],
    howToApply: [
      "เดิน flow แล้วนับจริง: จำนวนการตัดสินใจ, field ที่ต้องกรอก, สิ่งที่ต้องจำข้ามหน้า, ศัพท์ที่ต้องตีความ",
      "หาจุด 'ต้องจำ': ข้อมูลที่เห็นหน้าก่อนแล้วต้องใช้หน้านี้ — เปลี่ยนเป็นแสดงซ้ำ ณ จุดใช้",
      "ทุกการตัดสินใจถาม: มี default ที่ดีพอสำหรับ 80% ไหม / เลื่อนไปถามทีหลังได้ไหม / ตัดได้ไหม",
      "จัดกลุ่มข้อมูลเป็นก้อน 3-5 รายการ (chunking) แทน list ยาว",
      "เทียบก่อน-หลังด้วยตัวเลข: decisions ลดจาก X→Y, fields จาก A→B",
    ],
    checklist: [
      "นับจำนวน decision/field/สิ่งที่ต้องจำ ก่อนและหลังแก้",
      "ทุก field มี default หรือเหตุผลว่าทำไม default ไม่ได้",
      "ไม่มีข้อมูลที่ user ต้องจำข้ามหน้า (แสดงซ้ำ ณ จุดใช้)",
      "ตัวเลือกที่คนใช้ <20% ถูกพับเข้า advanced",
      "ศัพท์ทุกคำเป็นภาษาที่ user ใช้ ไม่ต้องตีความ",
      "ข้อมูล critical ต่อการตัดสินใจไม่ถูกซ่อน",
    ],
    deliverables: ["Load audit: ตาราง decision/memory/option ต่อหน้า พร้อมข้อเสนอลด", "Before/after metrics (จำนวน decision, fields, เวลาเฉลี่ย)"],
    goodExample:
      "หน้าสมัครประกัน: ลด 'เลือกแผน 12 แบบ' เหลือ 3 แบบ + ปุ่ม 'ดูแผนทั้งหมด', default แผนยอดนิยม, แสดงเลขบัตรประชาชนที่กรอกหน้าก่อนซ้ำตรง field ยืนยัน — ลด decision จาก 9 เหลือ 3, completion ขึ้น 22%",
    badExample:
      "ฟอร์มถาม 'รูปแบบใบเสร็จ (3 ตัวเลือก)' 'ภาษาเอกสาร (2)' 'ความถี่ email (4)' ตั้งแต่ก่อน user ได้ใช้งานครั้งแรก — ทุกข้อมี default ที่ดีได้แต่กลับโยนให้ user ตัดสินใจ 9 ครั้งโดยไม่มี context",
    commonMistakes: [
      "ลด load ด้วยการซ่อนทุกอย่าง จนข้อมูลที่ต้องใช้ตัดสินใจหายไปด้วย",
      "นับแค่จำนวน element ไม่นับจำนวน 'การตัดสินใจ' ซึ่งเป็น load จริง",
      "บังคับเลือก preference ตอน onboarding ทั้งที่เลื่อนไปถามตอนใช้จริงได้",
      "ลด density ให้ dashboard ของ power user แล้วทำงานช้าลง",
    ],
    relatedSlugs: ["usability", "form-ux-review", "friction-reduction", "content-design", "onboarding-flow"],
    tags: ["cognitive-load", "simplification", "defaults"],
    prompts: [
      `You are a UX reviewer specializing in cognitive load. Analyze the flow/screens I provide.

Count and list explicitly:
1. Decisions the user must make (each choice point, including "should I read this?")
2. Form fields and which ones lack a smart default
3. Memory demands: info shown on one screen but needed on another
4. Vocabulary requiring interpretation (jargon, ambiguous labels)
5. Options used by a minority that could collapse into "advanced"

For each item propose ONE of: remove / default / defer / chunk / show-at-point-of-use — with the concrete change.
Output: load inventory table + redesigned flow summary + before/after counts (decisions, fields, memory items). Do not hide decision-critical info (price, terms).`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Cognitive Load: สมัครประกัน",
      before: { label: "9 decisions", points: ["เลือกแผนจาก 12 แบบ", "ตั้งค่าใบเสร็จ/ภาษา/email ก่อนใช้งาน", "จำเลขบัตรจากหน้าก่อนมากรอกซ้ำ"] },
      after: { label: "3 decisions", points: ["3 แผนแนะนำ + ลิงก์ดูทั้งหมด", "Default ทุก preference เลื่อนไปแก้ทีหลังได้", "เลขบัตรแสดงซ้ำ ณ จุดยืนยัน"] },
    },
  },
  {
    id: "mobile-first-review",
    slug: "mobile-first-review",
    term: "Mobile-First Review",
    category: "ux-review",
    icon: "📱",
    level: "basic",
    shortDescription: "Review งานที่ viewport 375px ก่อน desktop — ตรวจ priority, touch target, overflow และ input บนมือถือจริง",
    fullDefinition:
      "Mobile-first review คือการบังคับเปิดงานที่ 375px เป็นจอแรกของการ review (ไม่ใช่จอสุดท้าย) แล้วไล่ตรวจ: content priority ถูกไหมเมื่อเหลือคอลัมน์เดียว, touch target ≥44px, ไม่มี horizontal overflow, font ≥16px ใน input (กัน iOS auto-zoom), keyboard type ถูกชนิด, sticky element ไม่กิน viewport — เพราะ design ที่ทำบน desktop ก่อนมักแตกบนมือถือเสมอ",
    whyItMatters:
      "Traffic ส่วนใหญ่ของ product B2C ไทยมาจากมือถือ แต่ designer/dev ทำงานบนจอ 27 นิ้ว — ความต่างนี้ทำให้ bug ประเภท ปุ่มเล็กเกินกด, ตาราง overflow, modal ปิดไม่ได้ หลุดไป production ประจำ และ mobile conversion ที่ต่ำกว่า desktop ผิดปกติมักมีสาเหตุจากตรงนี้ ไม่ใช่จาก 'พฤติกรรม user มือถือ'",
    whenToUse: [
      "ทุกครั้งก่อน approve design และก่อน merge UI ใหญ่ — เปิด 375px ก่อนเสมอ",
      "เมื่อ mobile conversion/engagement ต่ำกว่า desktop ผิดปกติ",
      "หลังเพิ่ม content/component ใหม่เข้าหน้าเดิม (จุดเกิด overflow บ่อยสุด)",
    ],
    whenNotToUse: [
      "Internal tool ที่ user 100% ใช้ desktop (ตรวจ usage data ก่อนตัดสิน ไม่ใช่เดา)",
      "อย่าตีความ mobile-first เป็น 'desktop เป็นแค่ mobile ขยาย' — desktop ควรใช้พื้นที่เพิ่มให้เป็นประโยชน์",
    ],
    howToApply: [
      "เปิด DevTools 375px ตรวจก่อน แล้วค่อย 768/1280 — และทดสอบบนเครื่องจริงอย่างน้อย 1 รอบ",
      "ตรวจ content priority: สิ่งสำคัญสุดต้องอยู่จอแรกเมื่อเหลือ 1 คอลัมน์",
      "วัด touch target ≥44×44px และระยะห่างระหว่างปุ่มติดกัน",
      "Scroll ทั้งหน้าหา horizontal overflow (ตาราง, รูป, ข้อความยาวไม่ตัดบรรทัด)",
      "กรอกฟอร์มจริง: font ≥16px, inputmode/keyboard ถูกชนิด, error เห็นได้โดยไม่ถูก keyboard บัง",
      "ตรวจ sticky header/footer + banner รวมกันแล้วเหลือพื้นที่ content เท่าไหร่",
    ],
    checklist: [
      "ไม่มี horizontal scroll ที่ไม่ตั้งใจทุกหน้า",
      "Touch target ≥44px และปุ่มสำคัญอยู่ในระยะนิ้วโป้ง",
      "Input font ≥16px กัน iOS auto-zoom, keyboard ถูกชนิด (tel/email/number)",
      "Content สำคัญสุดอยู่จอแรกที่ 375px",
      "Sticky elements รวมกันกิน viewport <25%",
      "ทดสอบบนเครื่องจริงอย่างน้อย iOS หรือ Android หนึ่งเครื่อง",
    ],
    deliverables: ["Mobile review checklist ที่กรอกแล้วต่อหน้า/feature", "Issue list พร้อม screenshot ต่อ breakpoint"],
    goodExample:
      "ก่อน merge หน้า pricing ใหม่ ทีมเปิด 375px พบตารางเทียบ 4 plan overflow และปุ่มสมัครหลุดใต้ fold → เปลี่ยนเป็น card สลับดูทีละ plan + sticky CTA — เจอใน review 10 นาที แทนที่จะเจอจาก user complaint",
    badExample:
      "Approve design จาก mockup desktop อย่างเดียว ปล่อย dev 'เดี๋ยว responsive เอง' — ผลคือ filter 6 ตัวเรียงแนวนอนถูกบีบเป็นปุ่มจิ๋วกดไม่ได้ และ date picker เปิด keyboard ตัวเลขไม่ได้ ต้องพิมพ์ปฏิทินเอง",
    commonMistakes: [
      "Review บน desktop แล้วถือว่า responsive เป็นงานของ dev",
      "ตรวจแค่ layout ไม่ตรวจ interaction (กรอกฟอร์ม, เปิด modal, ใช้ filter จริง)",
      "ลืม state ที่ keyboard เปิดอยู่ — error/CTA ถูกบังหมด",
      "ทดสอบบน emulator อย่างเดียว ไม่เคยจับเครื่องจริง (latency, นิ้วจริง, font rendering ต่างกัน)",
    ],
    relatedSlugs: ["responsive-rules", "responsive-behavior", "form-ux-review", "checkout-ux"],
    tags: ["mobile", "responsive", "touch-target", "review"],
    prompts: [
      `You are a mobile UX reviewer. Review the page/component I provide at 375px first, then 768px and 1280px.

Check systematically:
1. Content priority: what's in the first viewport at 375px — is the most important thing there?
2. Touch targets: any control under 44×44px or buttons packed too close
3. Overflow: tables, images, long unbroken strings causing horizontal scroll
4. Forms: input font size ≥16px, correct inputmode/keyboard type, error visibility with keyboard open
5. Sticky elements: combined viewport consumption
6. Breakpoint transitions: what breaks between 375→768→1280

Output: issue table (breakpoint / element / problem / severity / fix) + the single worst mobile blocker. Suggest CSS-level fixes where possible.`,
    ],
    visualDemo: "qa-checklist",
    demoData: {
      title: "Mobile Review @375px",
      items: [
        "ไม่มี horizontal overflow ทุก section",
        "Touch target ≥44px ทุกปุ่ม/ลิงก์",
        "Input font ≥16px + keyboard ถูกชนิด",
        "CTA หลักอยู่จอแรกหรือ sticky",
        "Error ไม่ถูก keyboard บัง",
        "ทดสอบบนเครื่องจริงแล้ว",
      ],
    },
  },
  {
    id: "accessibility-audit",
    slug: "accessibility-audit",
    term: "Accessibility Audit",
    category: "ux-review",
    icon: "🦮",
    level: "advanced",
    shortDescription: "ตรวจ WCAG 2.1 AA อย่างเป็นระบบ: automated + keyboard + screen reader + contrast — automated อย่างเดียวจับได้แค่ ~30%",
    fullDefinition:
      "Accessibility audit คือการตรวจ conformance กับ WCAG 2.1 AA ครบ 4 ชั้น: (1) automated scan (axe/Lighthouse) จับ violation เชิงโครงสร้าง (2) keyboard-only walkthrough ทำ task จริงโดยไม่แตะเมาส์ (3) screen reader walkthrough (VoiceOver/NVDA) ฟังว่าประกาศอะไร (4) manual check: contrast, reflow ที่ 200% zoom, reduced motion — ทุก issue map เข้า WCAG criterion พร้อม severity และวิธีแก้ระดับโค้ด",
    whyItMatters:
      "ทีมที่ run Lighthouse ได้ 95 คะแนนแล้วประกาศว่า 'accessible แล้ว' กำลังพลาด issue อีก 70% ที่เครื่องตรวจไม่ได้ (tab order มั่ว, ประกาศ error ไม่บอก, focus หายหลังปิด modal) — ขณะที่ดีล enterprise/ภาครัฐต้องการ conformance จริงที่ตรวจโดยมนุษย์ และ lawsuit ด้าน a11y มีให้เห็นเพิ่มขึ้นทุกปี",
    whenToUse: [
      "ก่อน release feature ที่มี interaction ซับซ้อน (modal, combobox, drag, table ใหญ่)",
      "เมื่อขาย enterprise/ภาครัฐที่ขอ VPAT หรือ conformance statement",
      "Audit ประจำปีของ flow หลัก + ทุกครั้งหลังเปลี่ยน design system",
    ],
    whenNotToUse: [
      "อย่ารอ audit ใหญ่แล้วค่อยใส่ใจ a11y — งานหลักควรถูกกันไว้ตั้งแต่ design/component (audit คือตาข่ายสุดท้าย)",
      "อย่า audit ทั้ง 200 หน้าพร้อมกัน — เลือก flow ที่ critical + template ที่ใช้ซ้ำ ครอบคลุมกว่าและทำเสร็จจริง",
    ],
    howToApply: [
      "กำหนด scope: top task flows + template หลัก (1 instance ของแต่ละ pattern พอ)",
      "Run axe DevTools/Lighthouse เก็บ baseline violations",
      "Keyboard pass: ทำ task จนจบด้วย Tab/Enter/Esc/Arrow — จด trap, ลำดับเพี้ยน, focus หาย",
      "Screen reader pass: ทำ task เดิมด้วย VoiceOver/NVDA — ฟัง label, state, error announcement",
      "Manual: contrast ทุกคู่สีใน design token, zoom 200%, prefers-reduced-motion",
      "เขียน report: issue × WCAG criterion × severity × ขั้น reproduce × code fix แล้วตามแก้เป็น sprint",
    ],
    checklist: [
      "ครบ 4 ชั้น: automated / keyboard / screen reader / manual",
      "ทุก issue map กับ WCAG criterion เลขข้อชัดเจน",
      "Severity แบ่งตาม user impact (blocker = ทำ task ไม่ได้เลย)",
      "ทดสอบ dynamic content: modal, toast, validation, live region",
      "Contrast ตรวจระดับ design token ไม่ใช่ไล่ทีละหน้า",
      "มี re-test plan หลังแก้ ไม่ใช่ audit แล้วจบ",
    ],
    deliverables: ["Audit report (issue × WCAG × severity × fix) + conformance summary", "Fix backlog จัด sprint พร้อม re-test checklist"],
    goodExample:
      "Audit เจอ: modal เปิดแล้ว focus ยังอยู่หลังฉาก, screen reader ไม่ประกาศ error ใน form, contrast ปุ่ม secondary 2.9:1 — ทั้งหมด Lighthouse ให้ผ่าน รายงาน map WCAG ครบ ทีมแก้ 2 sprints แล้ว re-test ผ่าน ก่อนส่ง VPAT ให้ลูกค้า enterprise",
    badExample:
      "ติด accessibility overlay widget + run Lighthouse ได้ 96 แล้วแปะ badge 'WCAG compliant' บนเว็บ — ลูกค้า enterprise ส่ง auditor มาตรวจจริง พบ keyboard ใช้ checkout ไม่ได้ ดีลเลื่อนไปสองไตรมาส",
    commonMistakes: [
      "เชื่อ automated score อย่างเดียว (จับได้ ~30% ของ issue)",
      "ตรวจแต่หน้า static ข้าม dynamic state (modal, error, loading) ที่พังบ่อยสุด",
      "รายงาน issue โดยไม่ระบุ WCAG criterion ทำให้เถียงกันว่า 'ต้องแก้จริงไหม'",
      "Audit เสร็จแล้วไม่มี owner ตามแก้ — report ตายใน drive",
    ],
    relatedSlugs: ["accessibility", "accessibility-requirements", "form-ux-review", "component-states", "color-system"],
    tags: ["a11y", "wcag", "audit", "compliance"],
    prompts: [
      `You are a WCAG 2.1 AA auditor. I will provide component code or page markup.

Run a 4-layer audit:
1. Structural: semantic elements, heading order, landmarks, alt text, form labels
2. Keyboard: tab order, focus visible, traps, ESC/arrow patterns for composite widgets (ARIA APG)
3. Screen reader: accessible names, roles, states; dynamic announcements (aria-live for errors/toasts); focus management on open/close
4. Visual: contrast per token pair (4.5:1 text, 3:1 large/UI), 200% zoom reflow, prefers-reduced-motion

Per issue: WCAG criterion (number), severity (blocker/major/minor), affected users, reproduction step, exact code fix.
Output: report table sorted by severity + conformance summary (pass/fail per WCAG principle) + re-test checklist.`,
    ],
    visualDemo: "audit-report",
    demoData: {
      title: "WCAG Audit (สิ่งที่ automated มองไม่เห็น)",
      findings: [
        { severity: "critical", issue: "เปิด modal แล้ว focus ค้างหลังฉาก — keyboard user ติดอยู่ (2.4.3)", fix: "Focus เข้า modal + trap + คืน focus ตอนปิด" },
        { severity: "critical", issue: "Error ใน form ไม่ถูกประกาศ (4.1.3)", fix: "aria-live='polite' ที่ error summary" },
        { severity: "high", issue: "ปุ่ม secondary contrast 2.9:1 (1.4.3)", fix: "ปรับ token เป็นคู่ที่ผ่าน 4.5:1" },
        { severity: "medium", issue: "Zoom 200% แล้วตาราง action หลุดจอ (1.4.10)", fix: "Reflow เป็น card layout" },
      ],
    },
  },
  {
    id: "conversion-review",
    slug: "conversion-review",
    term: "Conversion Review",
    category: "ux-review",
    icon: "📉",
    level: "intermediate",
    shortDescription: "Review หน้า/flow ที่มีเป้า conversion อย่างเป็นระบบ: value clarity → CTA → trust → friction → speed",
    fullDefinition:
      "Conversion review คือการ audit หน้าที่มีเป้าหมายเชิงธุรกิจ (landing, pricing, signup, checkout) ด้วยกรอบ 5 ชั้นเรียงตามผลกระทบ: (1) value proposition ชัดใน 5 วินาทีไหม (2) CTA hierarchy — primary เดียวเด่นจริงไหม (3) trust — หลักฐานอยู่ใกล้จุดตัดสินใจไหม (4) friction — ขั้นตอน/field เกินจำเป็นตรงไหน (5) speed/mobile — ช้าหรือพังบนมือถือไหม แล้วผูกทุก finding กับ funnel data",
    whyItMatters:
      "ทีมมัก optimize สีปุ่ม (ชั้น 2) ทั้งที่ปัญหาจริงอยู่ชั้น 1 — คนยังไม่เข้าใจว่าขายอะไรจึงไม่มีเหตุผลจะกดปุ่มสีไหนก็ตาม การ review เรียงชั้นทำให้แก้ถูกลำดับและไม่เผา traffic ค่าโฆษณาทิ้งกับหน้าที่รั่ว",
    whenToUse: [
      "ก่อน launch หน้า conversion ใหม่ และก่อนเริ่มเทแคมเปญ ads",
      "เมื่อ conversion rate ต่ำกว่า benchmark หรือตกหลังแก้หน้า",
      "ก่อนตั้ง A/B test — review หาสมมติฐานที่น่าทดสอบสุดก่อน ไม่ใช่สุ่มเทสต์",
    ],
    whenNotToUse: [
      "หน้า content/docs ที่ไม่มีเป้า conversion — เกณฑ์คนละชุด",
      "อย่าสรุป 'ต้องแก้' จากการ review อย่างเดียวเมื่อ traffic พอเทสต์ — ใช้ review สร้าง hypothesis แล้วให้ A/B ตัดสิน",
    ],
    howToApply: [
      "ดู funnel data ก่อน: รั่วที่ step ไหน บน device ไหน จาก source ไหน",
      "ชั้น 1 Value: ทำ 5-second test — คนแปลกหน้าบอกได้ไหมว่าขายอะไร ให้ใคร ราคาเท่าไหร่",
      "ชั้น 2 CTA: นับ CTA ใน viewport แรก — primary ต้องมีเดียวและบอก outcome",
      "ชั้น 3 Trust: ตรวจว่า social proof/guarantee อยู่ติดจุดที่คนลังเล (ใกล้ฟอร์ม/ปุ่มจ่าย) ไม่ใช่ก้นหน้า",
      "ชั้น 4 Friction: นับ fields/steps/การตัดสินใจ — ตัดทุกอย่างที่ไม่จำเป็นต่อการจ่ายครั้งแรก",
      "ชั้น 5 Speed: LCP <2.5s บน mobile + เดิน flow บนเครื่องจริง",
      "สรุปเป็น hypothesis เรียง impact×effort พร้อม metric ที่จะวัด",
    ],
    checklist: [
      "ดู funnel data ก่อนเปิดหน้าเว็บ (รู้ว่ารั่วตรงไหนก่อนหาว่าทำไม)",
      "Value prop ผ่าน 5-second test กับคนนอกทีม",
      "Primary CTA เดียวต่อ viewport บอก outcome ชัด",
      "Trust signal อยู่ติดจุดตัดสินใจ ไม่ใช่ footer",
      "Form ขอเฉพาะที่จำเป็นต่อ transaction แรก",
      "ทุกข้อเสนอแก้ผูก metric + จัดเป็น hypothesis ที่เทสต์ได้",
    ],
    deliverables: ["Review report 5 ชั้น พร้อม screenshot + funnel data ประกอบ", "Hypothesis backlog เรียง impact×effort พร้อม metric"],
    goodExample:
      "Funnel ชี้รั่วหนักที่หน้า form (60% drop) — review พบขอ 11 fields รวมเลขผู้เสียภาษีตั้งแต่ trial → ตัดเหลือ 4, ที่เหลือถามหลังสมัคร + ย้าย testimonial มาติดปุ่ม → signup เพิ่ม 31% โดยไม่แตะ hero เลย เพราะ data บอกว่า hero ไม่ใช่จุดรั่ว",
    badExample:
      "ทีมเถียงกันสองสัปดาห์เรื่องสีปุ่มกับรูป hero ทั้งที่ไม่เคยเปิด funnel — จุดรั่วจริงคือหน้า OTP ที่ส่ง SMS ไม่ถึง 40% ของเบอร์ ซึ่งไม่มีใครเห็นเพราะมัวดูแต่หน้าแรก",
    commonMistakes: [
      "Optimize ชั้นล่าง (สีปุ่ม) ก่อนเช็คชั้นบน (คนเข้าใจ offer ไหม)",
      "Review โดยไม่เปิด funnel data — แก้จุดที่ไม่ได้รั่ว",
      "วาง trust ไว้ section ท้ายหน้าที่คนไปไม่ถึง",
      "เพิ่ม urgency ปลอม (นับถอยหลังที่ reset ได้) ซึ่งทำลาย trust ระยะยาว",
    ],
    relatedSlugs: ["landing-page-review", "cta-hierarchy", "trust-signals", "friction-reduction", "ab-test-design"],
    tags: ["conversion", "funnel", "cro", "review"],
    prompts: [
      `You are a conversion (CRO) reviewer. I will provide the page + funnel data (drop-off per step, device split, traffic source).

Review in strict layer order — do not skip ahead:
1. VALUE: can a stranger state what's sold, for whom, at what price in 5 seconds? Quote the actual headline and judge it.
2. CTA: count CTAs in first viewport; is there exactly one primary with an outcome-driven label?
3. TRUST: where is proof relative to decision points? List trust elements and their positions.
4. FRICTION: count fields/steps/decisions; mark each as required-now / defer-able / removable.
5. SPEED & MOBILE: flag heavy elements and mobile-specific breaks.

Match findings against the funnel data: only propose fixes for layers where data shows leakage. Output: findings per layer + hypothesis backlog (hypothesis / metric / expected lift / effort S-M-L) ranked.`,
    ],
    visualDemo: "audit-report",
  },
  {
    id: "error-state-review",
    slug: "error-state-review",
    term: "Error State Review",
    category: "ux-review",
    icon: "🚨",
    level: "intermediate",
    shortDescription: "ไล่ตรวจทุกจุดที่พังได้ ว่า user รู้ไหมว่าเกิดอะไร แก้ยังไง และข้อมูลเขายังอยู่ไหม",
    fullDefinition:
      "Error state review คือการทำ inventory ของทุก error ที่เกิดได้ใน flow (validation, network, server, permission, timeout, payment declined) แล้วตรวจ 4 อย่างต่อ error: (1) ป้องกันได้ก่อนเกิดไหม (2) message บอก เกิดอะไร+เพราะอะไร+แก้ยังไง ไหม (3) ข้อมูลที่ user กรอกยังอยู่ไหม (4) มีทางไปต่อเสมอไหม — เพราะ error state คือจุดที่ user เปราะบางสุดและตัดสินใจเลิกใช้ง่ายสุด",
    whyItMatters:
      "Error ที่ออกแบบแย่เปลี่ยนปัญหาเทคนิคเล็กๆ เป็นหายนะ UX: ฟอร์ม 20 ช่องที่ล้างค่าเมื่อ submit fail, 'เกิดข้อผิดพลาด' ที่ไม่บอกอะไร, จ่ายเงินไม่ผ่านแล้วไม่รู้ว่าโดนตัดเงินไหม — จุดเหล่านี้สร้าง support ticket แพงๆ และรีวิว 1 ดาวมากกว่า feature ที่ขาดหายเสียอีก",
    whenToUse: [
      "ก่อน release ทุก flow ที่มี form, payment หรือ external dependency",
      "เมื่อ support ticket ประเภท 'ใช้ไม่ได้/ติด error' สูง",
      "หลังเปลี่ยน API/backend ที่ทำให้ error ชนิดใหม่เกิดได้",
    ],
    whenNotToUse: [
      "อย่าทุ่มออกแบบ error ที่เกิดยากมาก จน error ที่เกิดทุกวัน (validation) ยังห่วยอยู่ — เรียงตาม frequency ก่อน",
      "อย่าใช้ error review แทนการแก้ root cause — ถ้า SMS OTP ส่งไม่ถึง 40% ต้องแก้ provider ไม่ใช่เขียน error สวยขึ้น",
    ],
    howToApply: [
      "ทำ error inventory: ไล่ทุก step ว่าพังแบบไหนได้บ้าง (validation/network/server/auth/payment/timeout)",
      "จัดลำดับตาม frequency × ความเสียหาย (เงิน/ข้อมูลหาย = สูงสุด)",
      "ตรวจ prevention ก่อน: inline validation, ปุ่ม disable ตอนข้อมูลไม่ครบ, confirm ก่อน action เสี่ยง",
      "เขียน message ตาม format: เกิดอะไร + เพราะอะไร(ถ้ารู้) + ทำอะไรต่อ — ห้ามจบที่ 'ลองใหม่อีกครั้ง' ถ้า retry ไม่ช่วย",
      "ทดสอบจริงด้วยการ force error: ปิด network, ใส่ข้อมูลผิด, ใช้บัตรที่ถูกปฏิเสธ — ดูว่าข้อมูลค้างไหม ทางไปต่อมีไหม",
    ],
    checklist: [
      "มี error inventory ครบทุก step ของ flow สำคัญ",
      "ข้อมูลที่กรอกไว้ไม่หายเมื่อเกิด error ใดๆ",
      "ทุก message บอกวิธีแก้หรือทางเลือกถัดไป",
      "Error การเงินบอกสถานะเงินชัดเจน (ตัดแล้ว/ยังไม่ตัด/กำลังตรวจสอบ)",
      "Validation เกิด inline ทันที ไม่รอ submit",
      "Error ถูกประกาศต่อ screen reader (aria-live)",
      "มี logging เพื่อรู้ว่า error ไหนเกิดบ่อยจริงใน production",
    ],
    deliverables: ["Error inventory matrix: trigger × message × recovery × data-preserved", "Copy spec ของทุก error message ใน flow"],
    goodExample:
      "จ่ายเงินไม่ผ่าน: 'ธนาคารปฏิเสธรายการ — ยังไม่มีการตัดเงิน ลองบัตรใบอื่นหรือเปลี่ยนเป็นพร้อมเพย์' + ข้อมูลออเดอร์ยังครบ + ปุ่มเปลี่ยนวิธีจ่ายตรงนั้นเลย — ตอบครบ: เกิดอะไร เงินอยู่ไหน ไปต่อยังไง",
    badExample:
      "Submit ฟอร์มวีซ่า 23 ช่องแล้วได้ 'Error 500' หน้าแดง — ข้อมูลหายทั้งหมด ไม่รู้ผิดช่องไหน ต้องเริ่มใหม่และไม่กล้ากรอกอีกเพราะกลัวพังซ้ำ",
    commonMistakes: [
      "Design แค่ happy path แล้วให้ error เป็น default ของ framework",
      "ข้อความรวม ('Something went wrong') ทุก error ทำ support วินิจฉัยไม่ได้",
      "ล้างฟอร์มหลัง submit ล้มเหลว",
      "Error การเงินไม่บอกสถานะเงิน ทำให้คนจ่ายซ้ำหรือไม่กล้าจ่ายต่อ",
      "ใส่มุก/มาสคอตน่ารักบน error ที่ user กำลังเครียดเรื่องเงิน",
    ],
    relatedSlugs: ["error-handling", "ux-writing", "form-ux-review", "interaction-design", "edge-cases"],
    tags: ["error-states", "recovery", "messages"],
    prompts: [
      `You are a UX reviewer auditing error states. I will describe a flow (or paste screens/code).

Tasks:
1. Build the error inventory: for every step, list possible failures (validation, network, server, auth, payment, timeout, permission)
2. Rank by frequency × damage (money/data loss highest)
3. For each error, audit 4 things: Can it be prevented earlier? Does the message say what happened + why + what to do? Is user input preserved? Is there always a path forward?
4. Rewrite every failing message in format: [what happened] + [why, if known] + [next action]. For payment errors, always state money status explicitly.
5. List test cases to force each error (for QA).

Output: inventory matrix + rewritten copy + top 5 fixes by impact.`,
    ],
    visualDemo: "acceptance-criteria",
    demoData: {
      title: "Error AC: Payment Declined",
      criteria: [
        { given: "User กดจ่ายด้วยบัตรที่ถูกปฏิเสธ", when: "Gateway ตอบ declined", then: "แสดง 'ธนาคารปฏิเสธ — ยังไม่ตัดเงิน' + ทางเลือกจ่ายแบบอื่น, ข้อมูลออเดอร์ครบ" },
        { given: "Network หลุดระหว่าง submit", when: "Request timeout", then: "ฟอร์มค้างค่าทั้งหมด + ปุ่ม retry + ไม่สร้างออเดอร์ซ้ำ" },
        { given: "User ใช้ screen reader", when: "Error ใดๆ ปรากฏ", then: "aria-live ประกาศข้อความเต็มทันที" },
      ],
    },
  },
  {
    id: "empty-state-review",
    slug: "empty-state-review",
    term: "Empty State Review",
    category: "ux-review",
    icon: "📭",
    level: "basic",
    shortDescription: "ตรวจทุกหน้าที่ 'ว่าง' ว่าบอกไหมว่าทำไมว่าง ทำอะไรได้ และพาเริ่มยังไง — เพราะ first-run คือ empty ทั้งแอป",
    fullDefinition:
      "Empty state มี 4 ชนิดที่ต้อง design ต่างกัน: (1) first-use — ยังไม่เคยมีข้อมูล ต้องสอน+พาเริ่ม (2) no-results — search/filter ไม่เจอ ต้องช่วยแก้เงื่อนไข (3) cleared — user เคลียร์งานหมด ควรฉลองไม่ใช่เหงา (4) error-empty — โหลดไม่ได้ ต้องแยกจาก 'ไม่มีข้อมูล' ให้ชัด — การ review คือไล่หา state เหล่านี้ทุกหน้าแล้วตรวจว่า แต่ละอันบอกสาเหตุ + next action ไหม",
    whyItMatters:
      "User ใหม่เจอ empty state ก่อน feature ใดๆ — 'No data' เฉยๆ ในวันแรกคือการบอกว่า 'แอปนี้ไม่มีอะไรให้คุณ' ส่งผลตรงต่อ activation rate และ no-results ที่ไม่ช่วยแก้เงื่อนไขทำให้คนสรุปว่า 'ไม่มีของ' ทั้งที่แค่สะกดผิด — เสีย conversion ฟรีๆ",
    whenToUse: [
      "ทุกหน้า list/table/dashboard ต้องถูกถามว่า 'ตอนว่างหน้าตาเป็นยังไง' ตั้งแต่ design review",
      "ตอน audit activation/onboarding — first-use empty คือหน้าแรกจริงของ user ใหม่",
      "เมื่อ search analytics เจอ no-results rate สูง",
    ],
    whenNotToUse: [
      "อย่ายัด illustration + copy ยาวให้ empty state ชั่วคราว (โหลดแว่บเดียว) — ใช้ skeleton แทน",
      "Cleared state (inbox zero) ไม่ต้องมี CTA ใหญ่พาทำงานต่อ — ความว่างคือรางวัล",
    ],
    howToApply: [
      "ทำ inventory: ทุก list/table/search/dashboard มี empty ได้กี่แบบ (first-use/no-results/cleared/error)",
      "First-use: บอกว่า section นี้มีไว้ทำอะไร + ตัวอย่างหน้าตาเมื่อมีข้อมูล + ปุ่มเริ่ม 1 อัน (หรือ sample data)",
      "No-results: โชว์คำที่ค้นหา, เสนอแก้ (สะกด/ตัวกรอง/คำใกล้เคียง), ปุ่มล้าง filter",
      "Error-empty: แยก copy จาก 'ไม่มีข้อมูล' เด็ดขาด + ปุ่ม retry",
      "เขียน copy ทุก state ใน design file จริง — นี่คือจุดที่ lorem ipsum ทำร้ายมากสุด",
    ],
    checklist: [
      "ทุก list/table มี design ครบ 4 empty states ที่เกี่ยวข้อง",
      "First-use มี next action เดียวที่ชัด (ไม่ใช่ทางเลือก 4 ทาง)",
      "No-results เสนอวิธีแก้เงื่อนไข ไม่ใช่บอกแค่ 'ไม่พบ'",
      "Error-empty แยกจาก no-data ชัดเจน (คนละสาเหตุ คนละ action)",
      "Copy เขียนจริงทุก state ไม่มี placeholder",
      "Empty state แรกของ user ใหม่ถูกเทสต์ใน onboarding flow จริง",
    ],
    deliverables: ["Empty state inventory ต่อหน้า พร้อม copy จริง", "First-run experience spec (ลำดับ empty ที่ user ใหม่เจอ)"],
    goodExample:
      "หน้าใบแจ้งหนี้ (first-use): 'ใบแจ้งหนี้ของคุณจะอยู่ที่นี่ — สร้างใบแรกได้ใน 1 นาที' + ภาพ preview ใบแจ้งหนี้ + ปุ่ม 'สร้างใบแจ้งหนี้' + ลิงก์ 'ดูตัวอย่าง' — บอกประโยชน์ เห็นภาพ และมีทางเริ่มเดียวชัดๆ",
    badExample:
      "Dashboard วันแรกแสดง widget 6 อันที่เขียน 'No data available' เหมือนกันหมด — user ใหม่ไม่รู้ว่าต้องทำอะไรให้ data มา และแยกไม่ออกว่าอันไหนว่างเพราะยังไม่เริ่ม อันไหนพัง",
    commonMistakes: [
      "ใช้ 'No data found' ก้อนเดียวกับทุกสาเหตุ (ยังไม่เริ่ม/ค้นไม่เจอ/โหลดพัง)",
      "Empty state สวยแต่ไม่มี action — ทางตันที่ตกแต่งแล้ว",
      "ให้ทางเลือกเยอะตอน first-use จน user ใหม่ไม่รู้จะเริ่มไหน",
      "ลืมว่า empty state คือหน้า landing จริงของ user ใหม่ เลยไม่เคยเทสต์มัน",
    ],
    relatedSlugs: ["onboarding-flow", "ux-writing", "content-design", "error-state-review"],
    tags: ["empty-states", "first-run", "activation"],
    prompts: [
      `You are a UX reviewer focused on empty states. I will list the screens/components of a product area.

Tasks:
1. Inventory: for each list/table/search/dashboard widget, identify which empty types apply (first-use / no-results / cleared / error-empty)
2. Audit existing states: does each explain WHY it's empty and offer the right next action for that cause?
3. Write final copy for every missing/failing state:
   - first-use: value of this section + preview of filled state + ONE clear starting action
   - no-results: echo the query, suggest fixes, clear-filters action
   - cleared: positive confirmation, no pushy CTA
   - error-empty: distinct from no-data, with retry
4. Map the first-run journey: which empty states does a brand-new user hit in sequence?

Output: inventory table + final copy per state + first-run sequence diagram in text.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Empty State: หน้าใบแจ้งหนี้",
      before: { label: "ทางตัน", points: ["'No data found'", "ไม่บอกว่า section นี้มีไว้ทำอะไร", "ไม่มีปุ่มเริ่ม"] },
      after: { label: "พาเริ่ม", points: ["'ใบแจ้งหนี้ของคุณจะอยู่ที่นี่'", "ภาพ preview เมื่อมีข้อมูล", "ปุ่ม 'สร้างใบแรกใน 1 นาที'"] },
    },
  },
  {
    id: "navigation-review",
    slug: "navigation-review",
    term: "Navigation Review",
    category: "ux-review",
    icon: "🧭",
    level: "intermediate",
    shortDescription: "ตรวจว่า user รู้ไหมว่า ตัวเองอยู่ไหน ไปไหนได้ และกลับยังไง — สามคำถามที่ nav ทุกอันต้องตอบ",
    fullDefinition:
      "Navigation review ตรวจระบบนำทางทั้งหมด (navbar, sidebar, breadcrumb, tab, back behavior, deep link) กับ 3 คำถาม: Where am I? (active state, page title, breadcrumb ชัดไหม) Where can I go? (เมนูครอบคลุม task หลักโดยไม่ท่วมไหม) How do I get back? (back ของ browser/app ทำงานตามคาดไหม) — รวมถึงตรวจว่า structure ใน nav ตรงกับ IA และ label ตรงกับภาษา user",
    whyItMatters:
      "User ที่หลงไม่ได้บอกว่าหลง — เขาออกเลย พฤติกรรมที่ฟ้องว่า nav มีปัญหา: pogo-sticking (เข้าๆ ออกๆ หลายเมนูเพื่อหาของชิ้นเดียว), การพึ่ง search ทั้งที่ของอยู่ในเมนู, และ back ที่ทำข้อมูลหายซึ่งทำลายความกล้า explore ทั้งแอป",
    whenToUse: [
      "หลังเพิ่ม section ใหม่หรือ feature โตจนเมนูเริ่มแน่น",
      "เมื่อ analytics เห็น pogo-sticking หรือ internal search ถูกใช้หาของที่มีในเมนู",
      "ก่อน redesign nav — เก็บ baseline ว่าพังตรงไหนก่อนเปลี่ยน",
    ],
    whenNotToUse: [
      "อย่ารื้อ nav ทั้งระบบเพราะ feature เดียวหายาก — ลองแก้ label/ตำแหน่งก่อน",
      "App 3-4 หน้า — ปัญหา nav มักเป็นปัญหา label ไม่ใช่ structure",
    ],
    howToApply: [
      "เดิน top task 5 อันแรกจากหน้า home โดยไม่ใช้ search — นับคลิกและจุดลังเล",
      "ตรวจ 'Where am I': ทุกหน้ามี active state ใน nav + title ตรงกับ label ที่กดมา",
      "ตรวจ 'How do I get back': กด back ของ browser ทุกจุดสำคัญ — ต้องไม่ทำข้อมูลหาย/ไม่เด้งไปที่ไม่คาด",
      "เข้าจาก deep link (push, อีเมล, ads) แล้วดูว่ารู้ไหมว่าอยู่ส่วนไหนของแอป",
      "เทียบ label ในเมนูกับคำใน search log — ต่างกันคือสัญญาณต้องแก้",
      "ตรวจ mobile nav แยก: ของที่ซ่อนใน hamburger คือของที่ถูกใช้น้อยจริงไหม",
    ],
    checklist: [
      "ทุกหน้ามี active state ชัดว่าอยู่ section ไหน",
      "Title หน้า ตรงกับ label เมนูที่กดมา (ไม่ rename กลางทาง)",
      "Browser back ทำงานตามคาดทุกจุด ไม่ทำข้อมูลหาย",
      "เข้าจาก deep link แล้วมี context + ทางไปส่วนอื่น",
      "Top tasks เข้าถึงได้ ≤3 คลิกโดยไม่พึ่ง search",
      "ของใน hamburger/overflow คือของ low-frequency จริง (ดูจาก data)",
    ],
    deliverables: ["Nav audit: 3 คำถาม × ทุก entry point พร้อม issue list", "ข้อเสนอแก้ label/structure เทียบ search log"],
    goodExample:
      "Review พบ user เข้าหน้า 'รายงาน' จาก push notification แล้วไม่มี nav กลับ (header เปล่า) — เพิ่ม breadcrumb + bottom nav ใน view นั้น ลด session ที่จบหลังเปิด push จาก 70% เหลือ 31%",
    badExample:
      "เมนูเขียน 'Workspace' แต่หน้าข้างในชื่อ 'Organization' และ breadcrumb เขียน 'Team' — สามชื่อสำหรับที่เดียวกัน user ไม่มีทางสร้าง mental map ได้ และไม่มีใครในทีมรู้ว่ามันคือปัญหาเพราะทุกคนชินแล้ว",
    commonMistakes: [
      "Label ในเมนู, title หน้า, breadcrumb ใช้คนละชื่อกับที่เดียวกัน",
      "ลืม review เส้นทางเข้าจาก deep link ที่ข้าม home ไป",
      "Back ของ browser พัง (โดน SPA จัดการผิด) แล้วโทษว่า user ไม่เข้าใจ",
      "จัดเมนูตาม org ภายใน แล้วใช้ hamburger ซ่อนความรกแทนการแก้ IA",
    ],
    relatedSlugs: ["information-architecture", "user-flow", "mental-model", "mobile-first-review"],
    tags: ["navigation", "wayfinding", "ia", "review"],
    prompts: [
      `You are a UX reviewer auditing navigation. I will provide the nav structure, key screens, and entry points (including deep links).

Audit against three questions at every screen:
1. WHERE AM I — active state present? page title matches the menu label clicked? breadcrumb consistent?
2. WHERE CAN I GO — are top 5 tasks reachable in ≤3 clicks without search? what's buried that shouldn't be?
3. HOW DO I GET BACK — browser/app back behavior at each step: any data loss or unexpected jumps?

Also: compare menu labels against these user search terms [PASTE SEARCH LOG] and flag mismatches; review deep-link entries for orientation (does the user know where they landed?).
Output: issue table per question + label fix list + the 3 changes with highest wayfinding impact.`,
    ],
    visualDemo: "user-flow",
  },
  {
    id: "form-ux-review",
    slug: "form-ux-review",
    term: "Form UX Review",
    category: "ux-review",
    icon: "📑",
    level: "intermediate",
    shortDescription: "ตรวจฟอร์มทีละชั้น: จำนวน field → label/help → input type → validation → error → submit state",
    fullDefinition:
      "Form UX review คือการ audit ฟอร์มอย่างเป็นลำดับ: (1) ทุก field จำเป็นตอนนี้จริงไหม (2) label ชัด อยู่นอก field และมี help text ตรงจุดยากไหม (3) input ตรงชนิดข้อมูล (keyboard, mask, autocomplete) ไหม (4) validate inline ตอนเหมาะสม (on blur ไม่ใช่ on keystroke แรก) ไหม (5) error ชี้ field พร้อมวิธีแก้ไหม (6) ปุ่ม submit มี loading/disable กันกดซ้ำ และรักษาข้อมูลเมื่อ fail ไหม — ฟอร์มคือจุดที่ user 'จ่าย' ด้วยแรงงาน ทุก field คือราคา",
    whyItMatters:
      "ฟอร์มคือด่านสุดท้ายก่อน conversion เกือบทุกชนิด (สมัคร, จ่าย, จอง) — field ที่เกินมา 1 ช่องคือ drop เพิ่มแบบวัดได้, placeholder ที่ใช้แทน label ทำคนลืมว่ากำลังกรอกอะไร, error ที่บอกแค่ 'invalid' ทำคนเดาจนยอมแพ้ — รวมกันแล้วฟอร์มห่วยเผา ads budget เงียบๆ ได้มากกว่าทุกหน้า",
    whenToUse: [
      "ทุกฟอร์มที่อยู่ใน conversion path (signup, checkout, lead form)",
      "เมื่อ form analytics เห็น field-level drop หรือ error rate สูงที่ช่องใด",
      "ก่อน launch ฟอร์มที่ขอข้อมูล sensitive (บัตร, เลขบัตรประชาชน)",
    ],
    whenNotToUse: [
      "อย่าตัด field ที่กฎหมาย/ความปลอดภัยบังคับ เพื่อไล่ conversion — แต่ต้องอธิบายว่าทำไมต้องขอ",
      "ฟอร์ม internal admin ที่ใช้โดย operator มืออาชีพ — ความเร็วกรอก (tab order, bulk) สำคัญกว่าความเรียบง่าย",
    ],
    howToApply: [
      "ไล่ทุก field ถาม: ใช้ทำอะไร ใช้เมื่อไหร่ ถ้าไม่มีตอนนี้เสียอะไร — ตัด/เลื่อน/ทำ optional",
      "Label อยู่นอก field เสมอ (ห้าม placeholder-as-label), help text วางใต้ field ที่คนงงบ่อย",
      "ตั้ง input ให้ตรงชนิด: type/inputmode, autocomplete, mask เบอร์/บัตร, ปุ่มโชว์รหัสผ่าน",
      "Validation: on blur สำหรับ format, ทันทีเฉพาะที่ช่วย (ความแข็งแรงรหัสผ่าน), summary บนหัวเมื่อ submit fail พร้อมลิงก์ไป field",
      "Error копи: บอกว่าผิดยังไงและตัวอย่างที่ถูก ('เบอร์ต้องมี 10 หลัก เช่น 0812345678')",
      "Submit: disable + loading ระหว่างส่ง, ข้อมูลอยู่ครบเมื่อ fail, success บอกผลที่เกิด",
    ],
    checklist: [
      "ทุก field ผ่านการ justify ว่าจำเป็นตอนนี้ (ไม่ใช่ 'เผื่อไว้')",
      "Label นอก field + required/optional ระบุชัด (mark ฝั่งที่น้อยกว่า)",
      "Keyboard/inputmode ถูกชนิดทุก field บนมือถือ",
      "Validation on blur, ไม่ scream ตั้งแต่ตัวอักษรแรก",
      "Error ชี้ field + บอกวิธีแก้ + ตัวอย่างที่ถูก",
      "Submit กันกดซ้ำ + ข้อมูลไม่หายเมื่อ fail",
      "Autocomplete attributes ครบ (name, email, tel, address)",
    ],
    deliverables: ["Field-by-field audit table พร้อมคำตัดสิน (keep/defer/remove)", "Validation + error copy spec ครบทุก field"],
    goodExample:
      "ฟอร์ม lead ลดจาก 11 → 4 fields (ที่เหลือถามใน call แรก), เบอร์โทรใช้ inputmode='tel' + mask, error เขียน 'อีเมลต้องมี @ เช่น name@company.com' — completion เพิ่ม 38% และคุณภาพ lead เท่าเดิมเพราะข้อมูลที่ตัดไปไม่เคยถูกใช้คัดเลย",
    badExample:
      "ฟอร์มที่ใช้ placeholder เป็น label (พิมพ์แล้วลืมว่าช่องอะไร), validate ทุก keystroke จนขึ้นแดงตั้งแต่ยังพิมพ์ไม่จบ, submit แล้ว error 'Invalid input' โดยไม่บอกช่องไหน — ทุกชั้นพังพร้อมกัน",
    commonMistakes: [
      "ขอข้อมูล 'เผื่อ marketing ใช้' ที่ไม่เคยถูกใช้จริง",
      "Placeholder แทน label — หายตอนพิมพ์ และ screen reader ไม่นับเป็น label",
      "Validate on keystroke ตั้งแต่ตัวแรก ทำให้โดนด่าว่าผิดทั้งที่ยังพิมพ์ไม่เสร็จ",
      "Error summary ไม่ลิงก์ไป field บนฟอร์มยาว — คนหาไม่เจอว่าผิดตรงไหน",
      "ลืม state ตอน keyboard มือถือเปิด: ปุ่ม submit/error ถูกบังพอดี",
    ],
    relatedSlugs: ["form-conversion", "error-state-review", "ux-writing", "accessibility", "cognitive-load-review"],
    tags: ["forms", "validation", "fields", "review"],
    prompts: [
      `You are a form UX specialist. Review the form I provide (screenshot/code/field list).

Layer-by-layer audit:
1. FIELDS: justify each — used for what, when, what breaks if removed now? Verdict: keep / make-optional / defer / remove
2. LABELS: outside the field? required-vs-optional marked on the minority side? help text where confusion is likely?
3. INPUTS: correct type/inputmode/autocomplete per field; masks for phone/card; password visibility toggle
4. VALIDATION: on-blur (not first-keystroke); what validates inline vs on submit; error summary linking to fields
5. ERRORS: rewrite each message — what's wrong + how to fix + valid example
6. SUBMIT: double-submit guard, loading state, data preserved on failure, success confirms outcome

Output: field audit table + rewritten error copy + estimated field-count reduction + mobile-specific issues (keyboard cover, zoom).`,
    ],
    visualDemo: "component-state",
    demoData: {
      title: "Form Field States Spec",
      states: [
        { name: "Default", spec: "Label นอก field + help text จุดยาก" },
        { name: "Focus", spec: "Ring ชัด + keyboard ถูกชนิด (tel/email)" },
        { name: "Validating", spec: "ตรวจ on blur — ไม่ scream ระหว่างพิมพ์" },
        { name: "Error", spec: "ขอบแดง + icon + ข้อความวิธีแก้ + aria-describedby" },
        { name: "Disabled/Loading", spec: "Submit กันกดซ้ำ + spinner + ข้อมูลไม่หาย" },
      ],
    },
  },
  {
    id: "trust-credibility-review",
    slug: "trust-credibility-review",
    term: "Trust & Credibility Review",
    category: "ux-review",
    icon: "🛡️",
    level: "intermediate",
    shortDescription: "ตรวจว่าทุกจุดที่ user ต้อง 'กล้า' (จ่าย, กรอกข้อมูล, ผูกบัญชี) มีหลักฐานให้กล้าไหม",
    fullDefinition:
      "Trust review คือการไล่หา 'moment of hesitation' — จุดที่ user ต้องยอมเสี่ยงบางอย่าง (เงิน, ข้อมูลส่วนตัว, เวลา) แล้วตรวจว่า ณ จุดนั้นมีอะไรตอบความกังวลพอดีไหม: social proof ที่ตรวจสอบได้, ความชัดของราคา/เงื่อนไข, สัญญาณความปลอดภัย, ความ professional ของ design และความง่ายในการติดต่อ/ยกเลิก — trust สร้างจากความ consistent เล็กๆ หลายจุด และพังได้จากจุดเดียว",
    whyItMatters:
      "ความลังเลตอนกรอกบัตรไม่ได้แปลว่า UI ไม่สวย แต่แปลว่า 'ยังไม่ไว้ใจ' — cart abandonment ส่วนใหญ่มีองค์ประกอบของ trust (ค่าใช้จ่ายแอบโผล่, ไม่รู้ว่ายกเลิกได้ไหม, เว็บดูไม่ professional) และ trust ที่เสียจาก dark pattern ครั้งเดียว ทำลาย repeat purchase ถาวร",
    whenToUse: [
      "ทุกจุดเก็บเงิน/ข้อมูล sensitive: checkout, สมัคร, ผูกบัญชีธนาคาร, ให้ permission",
      "Brand ใหม่ที่ user ยังไม่รู้จัก — trust ต้องสร้างใน session แรก",
      "เมื่อ funnel รั่วที่ขั้น 'ใส่ข้อมูลจริง' ทั้งที่ขั้น browse ปกติ",
    ],
    whenNotToUse: [
      "อย่าโปรย badge/รางวัล/โลโก้ทุกหน้าจน noise — trust signal ที่ผิดที่ลดความน่าเชื่อแทนที่จะเพิ่ม",
      "อย่าใช้ trust element ปลอม (รีวิวเฟค, นับถอยหลังปลอม, 'เหลือ 2 ชิ้น' ที่ reset) — ได้ short-term เสีย permanent",
    ],
    howToApply: [
      "Map hesitation moments: จุดไหนขอเงิน/ข้อมูล/permission — นั่นคือจุดที่ต้องวาง trust",
      "ตรวจ social proof: เจาะจง+ตรวจสอบได้ (ชื่อจริง, บริษัท, ตัวเลข) ไม่ใช่ 'ดีมากครับ — ลูกค้าท่านหนึ่ง'",
      "ตรวจความชัดของ commitment: ราคารวมทุกอย่างก่อนถึงหน้าจ่าย, เงื่อนไขยกเลิก/คืนเงินอ่านเจอง่าย",
      "ตรวจสัญญาณ professional: typo, ลิงก์เสีย, รูป stock เกร่อ, footer ไม่มีที่อยู่/ติดต่อ — ของเล็กที่ฟ้องดัง",
      "ลองเป็น user ขี้สงสัย: หาวิธียกเลิก subscription ก่อนสมัคร — ถ้าหายาก คนยิ่งไม่กล้าเริ่ม",
    ],
    checklist: [
      "ทุก hesitation moment มี trust element ตอบความกังวลตรงจุด",
      "Social proof เจาะจงและตรวจสอบได้",
      "ราคา + ค่าใช้จ่ายทั้งหมดเห็นก่อนเริ่มกรอกข้อมูลจ่ายเงิน",
      "เงื่อนไขยกเลิก/คืนเงินหาเจอใน 1 คลิกจากจุดตัดสินใจ",
      "ไม่มี typo/ลิงก์เสีย/ข้อมูลขัดแย้งกันเองใน flow สำคัญ",
      "ไม่มี dark pattern (urgency ปลอม, opt-out ที่ซ่อน, ค่าใช้จ่ายแอบเพิ่ม)",
    ],
    deliverables: ["Trust audit map: hesitation moment × ความกังวล × element ที่ตอบ", "รายการ trust-breaker เรียง severity พร้อมวิธีแก้"],
    goodExample:
      "หน้า checkout วาง 'ยอดรวมสุทธิ รวมส่งแล้ว' ก่อนขอบัตร, ใต้ปุ่มจ่ายมี 'ยกเลิกได้ใน 30 วัน เงินคืนเต็ม' + รีวิวจากลูกค้าที่ระบุชื่อร้านจริง — ตอบความกังวล 3 อย่าง (ราคาแอบเพิ่ม? ติดสัญญา? โดนโกง?) ณ จุดที่กังวลพอดี",
    badExample:
      "หน้าแรกแปะ badge รางวัล 8 อัน แต่หน้า checkout โผล่ 'ค่าธรรมเนียม 3%' ตอนกดจ่าย, ปุ่มยกเลิก subscription ต้องโทรเท่านั้น, รีวิวทั้งหมดไม่มีชื่อคน — badge หน้าแรกช่วยอะไรไม่ได้เลย",
    commonMistakes: [
      "วาง trust signal ที่หน้าแรกแต่ปล่อยหน้าจ่ายเงินโล่ง (กังวลสูงสุดอยู่ที่นั่น)",
      "Social proof ลอยๆ ที่ตรวจสอบไม่ได้ — สมัยนี้คนอ่านออกว่าเฟค",
      "ค่าใช้จ่ายเพิ่มโผล่ตอนท้าย (สาเหตุอันดับต้นของ cart abandonment)",
      "ซ่อนช่องทางยกเลิก/ติดต่อ — คนตีความว่า 'ถ้าเริ่มแล้วจะออกยาก' เลยไม่เริ่ม",
    ],
    relatedSlugs: ["trust-signals", "checkout-ux", "pricing-page-ux", "conversion-review", "offer-clarity"],
    tags: ["trust", "credibility", "social-proof", "dark-patterns"],
    prompts: [
      `You are a trust & credibility auditor. Walk through the flow I provide as a skeptical first-time customer about to spend money.

Tasks:
1. Map hesitation moments: every point asking for money, personal data, account linking, or permissions
2. At each moment, list the user's likely fear (hidden costs? scam? locked in? data misuse?) and whether anything on-screen answers it
3. Audit social proof: specific & verifiable vs generic/fake-looking — judge each instance
4. Hunt trust-breakers: surprise costs, typos, broken links, contradictory info, hidden cancellation, fake urgency — list every instance
5. Check the skeptic's test: how hard is it to find cancellation/refund terms BEFORE buying?

Output: hesitation map table (moment / fear / current answer / gap / fix) + trust-breaker list by severity + 5 highest-impact additions.`,
    ],
    visualDemo: "checklist",
  },
];
