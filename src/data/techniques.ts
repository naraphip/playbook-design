import type { Technique } from "@/types/playbook";

export const TECHNIQUES: Technique[] = [
  {
    id: "five-second-test",
    slug: "five-second-test",
    title: "5-Second Test",
    category: "UX Research",
    whatItIs:
      "แสดง design ให้ user ดู 5 วินาทีแล้วถาม 'คุณจำอะไรได้บ้าง?' เพื่อทดสอบว่า first impression สื่อสาร message หลักได้ไหม",
    whenToUse: [
      "ก่อน launch landing page ใหม่",
      "ทดสอบว่า headline และ value proposition ชัดไหม",
      "เปรียบเทียบ 2 design concept",
      "ตรวจว่า CTA เห็นได้ทันทีไหม",
    ],
    howToDoIt: [
      "เลือก screen ที่ต้องการ test (มักเป็น hero section หรือ landing page)",
      "หา participants 5-10 คน ที่เป็น target user",
      "แสดง design ให้ดู 5 วินาทีพอดีแล้วซ่อน",
      "ถามคำถาม: 'คุณจำอะไรได้บ้าง?', 'หน้านี้ทำอะไร?', 'เห็นอะไรที่ชัดที่สุด?'",
      "บันทึกและ cluster responses",
    ],
    examplePrompt:
      "Design ใหม่นี้ pass 5-second test ไหม? อธิบาย user ว่าหน้านี้คืออะไรภายใน 5 วินาทีได้ไหม? ถ้าไม่ ส่วนไหนที่ต้องปรับให้ชัดขึ้น",
    commonMistakes: [
      "ถาม leading questions เช่น 'เห็น CTA ไหม?' แทนที่จะถาม open-ended",
      "Test กับ colleague แทน target user จริง",
      "ทดสอบหน้าที่ complex เกินไปสำหรับ 5 วินาที",
      "ไม่ recruit คนที่ unfamiliar กับ product",
    ],
    tags: ["research", "usability", "landing-page", "quick-test"],
  },
  {
    id: "usability-testing",
    slug: "usability-testing",
    title: "Usability Testing",
    category: "UX Research",
    whatItIs:
      "ให้ user จริงทำ task ที่กำหนดบน product แล้ว observe และ note จุดที่ stuck, confused, หรือ เข้าใจผิด",
    whenToUse: [
      "ก่อน launch feature ใหม่",
      "หลัง redesign major flow",
      "เมื่อ analytics แสดง high drop-off ที่จุดใดจุดหนึ่ง",
      "เพื่อ validate design decision ที่ยังไม่แน่ใจ",
    ],
    howToDoIt: [
      "Define tasks ที่ realistic: เช่น 'คุณต้องการ cancel subscription ทำอย่างไร?' ไม่ใช่ 'กดปุ่ม cancel'",
      "Recruit 5 users ที่เป็น target audience",
      "ขอให้ think-aloud ตลอดการ test",
      "Observer นั่งดูเงียบๆ จดบันทึก ไม่ช่วยเหลือ",
      "หลัง test ถาม debrief questions",
      "Cluster findings ตาม frequency และ severity",
    ],
    examplePrompt:
      "ออกแบบ usability test script สำหรับ checkout flow นี้: เขียน 3-5 task scenarios, success criteria สำหรับแต่ละ task, observation checklist, และ 5 debrief questions",
    commonMistakes: [
      "บอก user ว่า task อยู่ที่ไหนก่อนเริ่ม",
      "Test กับคนที่รู้จักหรือ colleague ที่ biased",
      "Recruit น้อยกว่า 5 คน",
      "ไม่ record session ทำให้ miss detail",
      "Focus แต่ issues ใหญ่ ละเลย friction เล็กๆ ที่สะสม",
    ],
    tags: ["research", "usability", "testing", "qualitative"],
  },
  {
    id: "heuristic-evaluation",
    slug: "heuristic-evaluation",
    title: "Heuristic Evaluation",
    category: "UX Review",
    whatItIs:
      "ผู้เชี่ยวชาญ UX ประเมิน interface โดยใช้ Nielsen's 10 Usability Heuristics เป็น framework ค้นหา usability issues โดยไม่ต้องใช้ user จริง",
    whenToUse: [
      "เมื่อไม่มีงบหรือเวลาสำหรับ user testing",
      "เป็น quick sanity check ก่อน user testing",
      "หลัง redesign เพื่อ catch obvious issues",
      "เมื่อ inherit existing product ที่ต้องการ audit",
    ],
    howToDoIt: [
      "เลือก evaluator 3-5 คน (อุดมคติ)",
      "แต่ละคน evaluate แยกกันด้วย Nielsen's 10 heuristics",
      "ให้แต่ละ evaluator rate severity: 0 (ไม่ใช่ปัญหา) ถึง 4 (Catastrophic)",
      "รวม findings และ debrief เพื่อ consolidate",
      "สร้าง prioritized list ของ issues",
    ],
    examplePrompt:
      "Evaluate interface นี้ด้วย Nielsen's 10 heuristics: ระบุ issues พร้อม heuristic ที่ละเมิด, severity rating (1-4), และ recommendation สำหรับแต่ละ issue",
    commonMistakes: [
      "ใช้ evaluator เดียวเพราะแต่ละคนเจอ issues ต่างกัน",
      "ไม่ระบุ heuristic ที่ละเมิด ทำให้ recommendation กว้างเกินไป",
      "ลืม rate severity ทำให้ prioritize ไม่ถูก",
      "Confuse heuristic evaluation กับ usability testing",
    ],
    tags: ["heuristic", "expert-review", "nielsen", "audit"],
  },
  {
    id: "design-critique",
    slug: "design-critique",
    title: "Design Critique",
    category: "UX/UI Lead Skills",
    whatItIs:
      "Structured session สำหรับ review design โดยใช้ framework ที่ทำให้ feedback เป็น objective และ actionable ไม่ใช่แค่ personal preference",
    whenToUse: [
      "ก่อน design handoff ให้ developer",
      "ระหว่าง design iteration",
      "สำหรับ stakeholder design review",
      "เมื่อ team ต้องการ alignment บน design direction",
    ],
    howToDoIt: [
      "Presenter: ให้ context ก่อน (goal, constraints, user need)",
      "Presenter: walk through design โดยไม่ defend ก่อน",
      "Observer: ถาม clarifying questions ก่อน critique",
      "ใช้ 'I notice...' และ 'How might we...' แทน 'This is wrong'",
      "Focus feedback บน design goals ไม่ใช่ personal taste",
      "Document action items ที่ชัดเจน",
    ],
    examplePrompt:
      "Review design นี้ด้วย critique framework: 1) What works well (กับ goal นี้?) 2) Questions เพื่อ understand decision 3) Specific suggestions พร้อม rationale 4) Open items ที่ยังต้องตัดสินใจ",
    commonMistakes: [
      "เริ่ม critique โดยไม่รู้ context หรือ goal ของ design",
      "ให้ feedback แบบ personal taste: 'ฉันไม่ชอบสีนี้'",
      "Presenter defend แทน listen",
      "ไม่ document action items ทำให้ session ไม่มี output",
      "Critique ทุก detail แทนที่จะ focus ที่ key decisions",
    ],
    tags: ["critique", "review", "process", "design-lead"],
  },
  {
    id: "accessibility-audit",
    slug: "accessibility-audit",
    title: "Accessibility Audit",
    category: "Accessibility",
    whatItIs:
      "การตรวจสอบ interface อย่างเป็นระบบเพื่อให้แน่ใจว่าใช้ได้กับทุกคน รวมถึงคนพิการ โดยใช้ WCAG 2.1 AA เป็น standard",
    whenToUse: [
      "ก่อน launch สู่ production",
      "เมื่อ enterprise client ต้องการ compliance",
      "หลัง redesign major component",
      "Quarterly audit สำหรับ existing product",
    ],
    howToDoIt: [
      "ใช้ automated tool: axe DevTools, Lighthouse accessibility",
      "Manual keyboard test: tab ผ่านทุก interactive element",
      "Screen reader test: VoiceOver (Mac) หรือ NVDA (Windows)",
      "Color contrast check ทุก text element",
      "ตรวจ heading structure ด้วย screen reader",
      "ตรวจ form labels และ error messages",
      "ตรวจ prefers-reduced-motion behavior",
    ],
    examplePrompt:
      "Run accessibility audit บนหน้านี้: 1) Automated: run axe DevTools 2) Keyboard: tab ผ่านทุกจุด 3) Contrast: check ทุก text 4) Screen reader: VoiceOver announce อะไร Report issues พร้อม severity และ fix",
    commonMistakes: [
      "ใช้แค่ automated tool — automated เจอแค่ ~30% ของ issues",
      "ไม่ test ด้วย keyboard navigation จริง",
      "ลืม test dynamic content และ modal",
      "Confuse decorative กับ informative images",
    ],
    tags: ["accessibility", "wcag", "audit", "a11y"],
  },
  {
    id: "mobile-first-review",
    slug: "mobile-first-review",
    title: "Mobile-First Review",
    category: "UX Review",
    whatItIs:
      "Review interface โดยเริ่มจาก 375px mobile view ก่อน ตรวจ content priority, touch target size, และ navigation ก่อน expand ขึ้น desktop",
    whenToUse: [
      "ก่อน responsive QA",
      "เมื่อ mobile bounce rate สูงกว่า desktop มาก",
      "หลัง redesign ที่ทำบน desktop",
      "ก่อน submit design สำหรับ implementation",
    ],
    howToDoIt: [
      "เปิด DevTools และ set viewport 375px",
      "ตรวจ content priority: สิ่งที่สำคัญที่สุดอยู่บนสุดไหม?",
      "ตรวจ touch targets: ทุก button/link ≥44×44px",
      "ตรวจ text ที่ overflow หรือ truncate ไม่ถูกต้อง",
      "ตรวจ images ที่ scale ไม่ถูกต้อง",
      "ตรวจ horizontal scroll ที่ไม่ต้องการ",
      "ตรวจ font size: minimum 16px เพื่อป้องกัน auto-zoom",
      "ขยายไป 768px/1280px แล้วตรวจ breakpoints",
    ],
    examplePrompt:
      "Review mobile experience ของหน้านี้ที่ 375px/768px/1280px: ตรวจ touch target, text overflow, image scaling, horizontal scroll, font size, และ navigation behavior แต่ละ breakpoint",
    commonMistakes: [
      "Test บน emulator ในแทน real device",
      "ลืมตรวจ font size ที่ trigger iOS auto-zoom (<16px)",
      "ตรวจแค่ layout ลืมตรวจ interaction และ state",
    ],
    tags: ["mobile", "responsive", "review", "qa"],
  },
  {
    id: "conversion-review",
    slug: "conversion-review",
    title: "Conversion Review",
    category: "Conversion UX",
    whatItIs:
      "Review landing page หรือ conversion flow อย่างเป็นระบบเพื่อหา friction ที่ลด conversion rate และ propose improvements",
    whenToUse: [
      "ก่อน launch new landing page",
      "เมื่อ conversion rate ต่ำกว่า benchmark",
      "A/B test ไม่ชนะ — ต้องหา root cause",
      "Quarterly review ของ key conversion pages",
    ],
    howToDoIt: [
      "ตรวจ value proposition: ชัดภายใน 5 วินาที above the fold ไหม?",
      "ตรวจ CTA hierarchy: primary CTA เดียวต่อ section ไหม?",
      "ตรวจ trust signals: testimonial/logos/guarantee อยู่ตรงไหน?",
      "ตรวจ form friction: fields ที่จำเป็นจริงๆ เท่านั้น",
      "ตรวจ mobile conversion: CTA accessible บน mobile ไหม?",
      "ตรวจ page speed: ทุก 1 second ที่ delay ลด conversion 7%",
      "ตรวจ social proof ที่อยู่ใกล้ CTA",
    ],
    examplePrompt:
      "Conversion audit บน landing page นี้: value proposition clarity, CTA hierarchy, trust signals placement, form field count, mobile experience, social proof positioning และ page speed",
    commonMistakes: [
      "Focus แต่ visual design ลืม copywriting",
      "เพิ่ม trust signals ที่ bottom page แทนใกล้ CTA",
      "Form ที่มี required fields เยอะเกินจำเป็น",
      "Mobile CTA ที่ below fold และต้อง scroll มาก",
    ],
    tags: ["conversion", "landing-page", "review", "optimization"],
  },
  {
    id: "design-handoff-checklist",
    slug: "design-handoff-checklist",
    title: "Design Handoff Checklist",
    category: "UX/UI Lead Skills",
    whatItIs:
      "Systematic checklist ที่ designer ใช้ก่อนส่ง design ให้ developer เพื่อให้ implementation ถูกต้อง ลด revision loop",
    whenToUse: [
      "ก่อนทุกครั้งที่ handoff design",
      "เมื่อ developer ถามซ้ำในเรื่องเดิม",
      "เมื่อ implementation ออกมาผิดซ้ำๆ",
      "สำหรับ complex component ที่มี states เยอะ",
    ],
    howToDoIt: [
      "Responsive: ระบุ layout rules ทุก breakpoint (375/768/1280px)",
      "States: document ทุก state (default/hover/active/focus/disabled/loading/error/success)",
      "Spacing: ตรวจว่าใช้ spacing tokens ไม่ใช่ arbitrary values",
      "Typography: ระบุ font family, size, weight, line-height จาก type scale",
      "Colors: ใช้ semantic token names ไม่ใช่ hex",
      "Interaction notes: animation duration, easing, transition behavior",
      "Edge cases: long text, empty data, error states, max/min constraints",
      "Accessibility notes: aria-label, focus order, keyboard behavior",
    ],
    examplePrompt:
      "ทำ design handoff checklist สำหรับ component นี้: responsive rules, all states, spacing/typography tokens, interaction notes, edge cases, และ accessibility requirements ที่ developer ต้อง implement",
    commonMistakes: [
      "Handoff แค่ happy path ลืม error/empty/loading states",
      "ระบุ pixel values ไม่ใช่ token names",
      "ลืม responsive behavior สำหรับ breakpoints บางอัน",
      "ไม่ระบุ accessibility requirements ให้ developer",
    ],
    tags: ["handoff", "developer", "checklist", "communication"],
  },
  {
    id: "ab-testing-design",
    slug: "ab-testing-design",
    title: "A/B Testing Design",
    category: "UX Research",
    whatItIs:
      "กระบวนการออกแบบ A/B test อย่างถูกวิธี: define hypothesis, isolate variable, calculate sample size, และ set up analytics ก่อน run test",
    whenToUse: [
      "เมื่อมี specific hypothesis ที่ต้องการ validate",
      "เมื่อมี traffic เพียงพอ (มักต้องการ 100+ conversions/variant)",
      "สำหรับ key conversion pages",
      "ก่อน make major design change",
    ],
    howToDoIt: [
      "Define hypothesis: 'ถ้าเปลี่ยน X เป็น Y จะเพิ่ม Z เพราะ...'",
      "เลือก 1 variable ต่อ test เท่านั้น",
      "Calculate sample size ที่ต้องการ (statistical power 80%)",
      "Define primary metric และ secondary metrics",
      "Set test duration: อย่างน้อย 2 สัปดาห์เพื่อ full business cycle",
      "Run test และไม่ peek ก่อน reach significance",
      "Analyze results ด้วย statistical significance (p < 0.05)",
    ],
    examplePrompt:
      "ออกแบบ A/B test สำหรับ hypothesis นี้: define control/variant, primary metric, sample size calculation, test duration, และ what statistical significance ต้องการก่อน conclude",
    commonMistakes: [
      "Test หลาย variables พร้อมกัน (multivariate ต้องการ traffic มาก)",
      "Stop test เมื่อเห็นผลเร็วเกินไป (peeking problem)",
      "Sample size ไม่ถึง statistical significance",
      "ไม่ monitor secondary metrics — 'winning' variant อาจ hurt other metrics",
    ],
    tags: ["ab-testing", "experimentation", "data", "conversion"],
  },
  {
    id: "ux-metrics-review",
    slug: "ux-metrics-review",
    title: "UX Metrics Review",
    category: "UX/UI Lead Skills",
    whatItIs:
      "Quarterly review ของ UX metrics สำคัญ เพื่อ track progress, identify regressions, และ prioritize next improvements",
    whenToUse: [
      "Monthly/quarterly review cycle",
      "ก่อน planning next sprint/quarter",
      "หลัง major release",
      "เมื่อต้องการ justify design investment ต่อ stakeholders",
    ],
    howToDoIt: [
      "Behavioral metrics: task completion rate, time on task, error rate",
      "Attitudinal metrics: NPS, CSAT, SUS score survey",
      "Business metrics: conversion rate, retention, activation rate",
      "ตรวจ trend: metrics ดีขึ้น/แย่ลง/ทรงตัว?",
      "Identify outlier flows ที่มี high drop-off",
      "Connect metric ลง design hypothesis สำหรับ next sprint",
    ],
    examplePrompt:
      "สร้าง UX metrics dashboard สำหรับ product นี้: define primary/secondary KPIs, baseline values, targets, และ tracking method สำหรับแต่ละ metric พร้อม recommended review cadence",
    commonMistakes: [
      "Track metrics แต่ไม่ act บน findings",
      "ใช้ vanity metrics (page views) แทน actionable metrics",
      "ไม่ set baseline ก่อน improvement ทำให้ measure progress ไม่ได้",
      "ลืม segment metrics by user type — aggregate hiding subgroup problems",
    ],
    tags: ["metrics", "kpi", "measurement", "review"],
  },
];
