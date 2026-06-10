import type { UXTerm } from "@/types/playbook";

export const LEAD_SKILLS_TERMS: UXTerm[] = [
  {
    id: "design-critique",
    slug: "design-critique",
    term: "Design Critique",
    category: "lead-skills",
    icon: "🗣️",
    level: "intermediate",
    shortDescription: "Session review งานออกแบบที่มีโครงสร้าง — feedback ผูกกับ goal ไม่ใช่รสนิยม และจบด้วย action items",
    fullDefinition:
      "Design critique คือพิธีกรรมที่มีกติกาชัด: presenter ให้ context ก่อน (goal, constraints, อยาก feedback เรื่องอะไร/ยังไม่อยากเรื่องอะไร), ผู้ฟังถาม clarifying questions ก่อน critique, feedback ทุกข้อผูกกับ goal ('headline นี้ไม่ตอบ value prop ที่ตั้งไว้' ไม่ใช่ 'ผมไม่ชอบฟอนต์นี้'), presenter ฟังไม่ defend, และจบด้วย action items ที่มีเจ้าของ — critique ที่ดีคือเครื่องมือยกระดับงาน ไม่ใช่เวที approve/reject",
    whyItMatters:
      "ทีมที่ไม่มีโครงสร้าง critique จะได้สองอย่าง: feedback รสนิยมที่ designer ป้องกันตัวจนไม่มีอะไรดีขึ้น หรือความเงียบที่ทุกคนเก็บความเห็นไว้บ่นหลังบ้าน — ทั้งคู่ทำให้งานคุณภาพต่ำหลุดไปถึง user และ designer ไม่โตเพราะไม่เคยได้ feedback ที่ใช้ได้จริง",
    whenToUse: [
      "งานถึงจุด 30%/70% — critique ตอน 30% แก้ทิศทางได้ ตอน 99% แก้ได้แค่สี",
      "ก่อน design ใหญ่เข้าสู่ handoff — รอบสุดท้ายเก็บตก",
      "เป็น ritual ประจำ (เช่น ทุกพุธ) ให้ทีมชินกับการให้/รับ feedback",
    ],
    whenNotToUse: [
      "การตัดสินใจที่จริงๆ ถูกตัดสินไปแล้ว — เรียก critique ทั้งที่แค่ต้องการ rubber stamp คือการเผาเวลาและ trust",
      "ปัญหา interpersonal ระหว่างคนสองคน — คุยตรง ไม่ใช่ผ่านเวที critique",
    ],
    howToApply: [
      "Presenter เปิดด้วย 3 อย่าง: user problem/goal, constraints, 'วันนี้ขอ feedback เรื่อง X ยังไม่ขอเรื่อง Y'",
      "รอบแรก: clarifying questions เท่านั้น (ห้าม feedback แฝงในรูปคำถาม)",
      "Feedback ใช้โครง: 'ผมสังเกตว่า [observation] ซึ่งอาจกระทบ [goal] — เป็นไปได้ไหมว่า [direction]'",
      "Facilitator คุมเวลา ตัดการ defend, ดึงคนเงียบ ('ยังไม่ได้ยินมุมจาก dev เลย')",
      "ปิดด้วย action items: ใคร แก้อะไร เมื่อไหร่ — และเรื่องที่ 'รับฟังแต่ไม่แก้' พร้อมเหตุผล",
    ],
    checklist: [
      "Presenter ระบุ goal และขอบเขต feedback ก่อนโชว์งาน",
      "มีรอบ clarifying questions แยกจากรอบ critique",
      "Feedback ทุกข้อผูกกับ goal/principle ไม่ใช่รสนิยม",
      "Presenter ไม่ defend — จดและถามต่อเท่านั้น",
      "จบด้วย action items มีเจ้าของ + บันทึกข้อที่ตั้งใจไม่แก้",
      "งานที่เอาเข้า critique ยังอยู่ในจุดที่แก้ทิศได้จริง",
    ],
    deliverables: ["Critique notes: feedback × goal ที่อ้าง × action/no-action", "Action items ที่ตามผลได้ใน session ถัดไป"],
    goodExample:
      "'ผมสังเกตว่า CTA สองปุ่มน้ำหนักเท่ากัน ซึ่งอาจขัด goal ที่บอกว่าอยากดัน trial เป็นหลัก — ลองลด secondary เป็น text link ไหม' — observation + ผูก goal + เปิดทาง ไม่ใช่คำสั่ง",
    badExample:
      "'ผมว่ามันดูเชยอะ ลองทำให้มัน modern ขึ้นหน่อย' — ไม่มี observation เจาะจง ไม่ผูก goal ไม่มีทิศทาง designer ได้แค่ความรู้สึกแย่และไม่รู้จะแก้อะไร",
    commonMistakes: [
      "Feedback รสนิยมส่วนตัวที่ไม่ผูกกับ goal ใดๆ",
      "Presenter ใช้เวลา defend มากกว่าฟัง",
      "คนตำแหน่งใหญ่สุดพูดก่อน — ความเห็นที่เหลือกลายเป็น echo (ให้ senior พูดท้าย)",
      "ไม่จด action items — critique จบแล้วทุกอย่างเหมือนเดิม",
      "เอางาน 99% เสร็จมา critique แล้วหงุดหงิดที่มีคนแตะเรื่องทิศทาง",
    ],
    relatedSlugs: ["stakeholder-review", "design-decision-log", "cross-functional-review", "design-qa"],
    tags: ["critique", "feedback", "facilitation"],
    prompts: [
      `You are a design lead facilitating critique. I will paste a design (or describe it) plus its goal and constraints.

Give critique following strict rules:
1. First: 3 clarifying questions you'd ask before any feedback
2. Then feedback in the form: "I notice [specific observation] — this may affect [stated goal/principle] — consider [direction, not prescription]"
3. Separate into: (a) blocks the goal, (b) weakens the goal, (c) polish — max 3 items each
4. Flag anything that is pure taste with [TASTE] and keep it out of the main list
5. End with: top 3 action items + 1 thing that works well and must not be lost in revision

Goal of this design: [GOAL]. Feedback wanted on: [SCOPE]. Not wanted: [OUT OF SCOPE].`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Feedback Quality",
      before: { label: "รสนิยม", points: ["'ดูเชยไปหน่อย'", "'ลอง modern ขึ้น'", "'ผมไม่ชอบสีนี้'"] },
      after: { label: "ผูกกับ goal", points: ["'CTA 2 ปุ่มน้ำหนักเท่ากัน ขัด goal ดัน trial'", "'Form 11 ช่องขัด constraint สมัครใน 2 นาที'", "'สังเกตว่า trust signal อยู่ใต้ fold ทั้งที่ goal คือลดความลังเล'"] },
    },
  },
  {
    id: "stakeholder-review",
    slug: "stakeholder-review",
    term: "Stakeholder Review",
    category: "lead-skills",
    icon: "🤵",
    level: "advanced",
    shortDescription: "การนำเสนองาน design ต่อผู้มีอำนาจตัดสินใจ — เฟรมด้วย business goal, ขอ decision เจาะจง, คุมไม่ให้กลายเป็น critique รสนิยม",
    fullDefinition:
      "Stakeholder review ต่างจาก design critique: ผู้ฟังคือคนถืองบ/ทิศทาง ไม่ใช่เพื่อน designer — โครงที่ได้ผล: เปิดด้วยปัญหา business + เป้าหมาย, โชว์ทางเลือกที่พิจารณาแล้วพร้อมเหตุผลที่เลือก/ไม่เลือก, ระบุชัดว่าวันนี้ต้องการ decision อะไร (ไม่ใช่ 'คิดเห็นยังไงครับ'), และจัดการ feedback รสนิยมด้วยการดึงกลับมาที่ goal/data — เป้าหมายคือได้ decision ที่ unblock งาน ไม่ใช่ได้คำชม",
    whyItMatters:
      "งาน design ที่ดีตายในห้องประชุมเป็นประจำเพราะนำเสนอผิด: เปิดด้วยหน้าจอแทนปัญหา ทำให้ CEO comment สีปุ่มแทนอนุมัติทิศทาง, ถามกว้างๆ ('เป็นไงบ้างครับ') เลยได้ความเห็น 7 ทิศจาก 7 คน — ทักษะนี้คือความต่างระหว่าง designer ที่งานถูก rewrite โดยห้องประชุม กับ lead ที่พางานรอดถึง user",
    whenToUse: [
      "ทุก milestone ที่ต้องการ approve งบ/ทิศทาง/launch",
      "เมื่อมี decision ติดอยู่ที่ stakeholder — เตรียม options + recommendation ไปให้เลือก",
      "ก่อนถูกเรียกเข้าไป 'โชว์หน่อยว่าไปถึงไหนแล้ว' — เปลี่ยน show-and-tell เป็น decision meeting",
    ],
    whenNotToUse: [
      "อย่าเอางานที่ยังไม่มีคำตอบเรื่อง feasibility ไปขอ approve — โดนคำถามที่ตอบไม่ได้แล้วเสีย momentum ทั้งโปรเจกต์",
      "Decision เล็กที่ทีมตัดสินใจเองได้ — ทุกครั้งที่ขอ approve ของไม่จำเป็น คือการสอน stakeholder ว่าต้อง approve ทุกอย่าง",
    ],
    howToApply: [
      "เปิดด้วย 1 สไลด์: ปัญหา + ตัวเลขที่เจ็บ (churn, drop-off, ticket) — ก่อนโชว์ design ใดๆ",
      "เล่าทางเลือก 2-3 ทางที่พิจารณา พร้อมเหตุผลตัด — ป้องกันคำถาม 'ทำไมไม่ทำแบบ X' ล่วงหน้า",
      "โชว์ design ใน context ของ flow จริง ไม่ใช่ screen เดี่ยวลอยๆ",
      "ประกาศชัด: 'วันนี้ต้องการตัดสินใจ 2 เรื่อง: A หรือ B, และ approve scope สำหรับ Q3'",
      "เจอ feedback รสนิยม: 'น่าสนใจครับ — ช่วยขยายว่ามันกระทบ [goal] ยังไงครับ' ดึงกลับ goal เสมอ",
      "ปิดด้วยสรุป decision + next steps เป็นลายลักษณ์อักษรภายในวันเดียวกัน",
    ],
    checklist: [
      "เปิดด้วยปัญหา business ไม่ใช่หน้าจอ",
      "มี options ที่ถูกตัดพร้อมเหตุผล (แสดงว่าคิดมาแล้ว)",
      "ระบุ decision ที่ต้องการจาก meeting นี้ชัดเจน",
      "ทุก design ถูกโยงกับ goal/data ที่ stakeholder แคร์",
      "Feedback รสนิยมถูกดึงกลับมาที่ goal อย่างสุภาพ",
      "Decision ถูกบันทึกและส่งย้ำหลังประชุม",
    ],
    deliverables: ["Deck: ปัญหา → options → recommendation → decision ที่ขอ", "Decision summary ส่งหลังประชุม (ใคร approve อะไร)"],
    goodExample:
      "เปิดด้วย 'เราเสีย 31% ของ signup ที่หน้า form — นี่คือ 3 ทางที่พิจารณา เราแนะนำทาง B เพราะ... วันนี้ขอ decision เดียว: ตัด field เหล่านี้ได้ไหม' — CEO ตัดสินใจใน 15 นาทีและไม่มีใคร comment สีปุ่ม",
    badExample:
      "เปิดด้วย mockup สวยๆ เต็มจอแล้วถามว่า 'เป็นไงบ้างครับ' — ได้ความเห็น 40 นาทีเรื่องโลโก้ใหญ่ไป, ลอง carousel ไหม, ทำไมไม่เหมือนแอป X และไม่มี decision ใดๆ เกิดขึ้น งานเลื่อนไปอีกสองสัปดาห์",
    commonMistakes: [
      "โชว์ design ก่อนเล่าปัญหา — เชิญทุกคน comment ผิวงานทันที",
      "ถามเปิดกว้าง ('คิดเห็นยังไง') แทนขอ decision เจาะจง",
      "ไม่เตรียม options ที่ถูกตัด เลยโดน 'ทำไมไม่ลองแบบ...' จนเป๋",
      "รับทุก feedback กลับไปแก้ (เอาใจ) แทนการ negotiate ด้วย goal — สอนให้ stakeholder เป็น art director",
      "ไม่บันทึก decision — สามสัปดาห์ต่อมา 'ผมเคยพูดแบบนั้นเหรอ'",
    ],
    relatedSlugs: ["design-critique", "design-decision-log", "prioritization-matrix", "cross-functional-review"],
    tags: ["stakeholders", "presentation", "influence", "decisions"],
    prompts: [
      `You are a design lead preparing a stakeholder review. Help me build the narrative.

Context: [design work + the business problem it solves + available data]
Audience: [who, what they care about, past objections]
Decision needed: [what must be approved today]

Produce:
1. Opening slide content: the problem framed in their language with the painful number
2. Options narrative: 2-3 alternatives considered, one-line kill reason each, recommendation with rationale tied to their goals
3. The exact decision ask, phrased as a choice (A or B), not an open question
4. Objection prep: 5 likely pushbacks (including taste-based ones) + responses that pull back to goal/data
5. Closing: decision summary template to send after the meeting

Output: deck outline with speaker notes per slide.`,
    ],
    visualDemo: "user-flow",
    demoData: {
      title: "โครง Stakeholder Review",
      steps: [
        { name: "ปัญหา + ตัวเลข", detail: "'เสีย 31% ที่หน้า form' — ก่อนโชว์ design", risk: "เปิดด้วย mockup = เชิญ comment สี" },
        { name: "Options ที่พิจารณา", detail: "3 ทาง + เหตุผลตัด — กันคำถาม 'ทำไมไม่...'" },
        { name: "Recommendation", detail: "โชว์ใน context flow จริง ผูกกับ goal" },
        { name: "Decision ask", detail: "'วันนี้ขอตัดสินใจ: A หรือ B'", risk: "'คิดเห็นยังไง' = ความเห็น 7 ทิศ" },
        { name: "สรุปเป็นลายลักษณ์", detail: "ส่ง decision summary ภายในวันเดียว" },
      ],
    },
  },
  {
    id: "design-decision-log",
    slug: "design-decision-log",
    term: "Design Decision Log",
    category: "lead-skills",
    icon: "📒",
    level: "basic",
    shortDescription: "บันทึก decision สำคัญ: ตัดสินใจอะไร เพราะอะไร ทางเลือกที่ตัดคืออะไร — กันการเถียงซ้ำและ context ที่หายไปกับคนลาออก",
    fullDefinition:
      "Decision log คือเอกสาร running list ของการตัดสินใจ design ที่มีผลระยะยาว — แต่ละรายการสั้นๆ: วันที่, ตัดสินใจอะไร, ทำไม (evidence/constraint ที่มีตอนนั้น), ทางเลือกที่พิจารณาแล้วตัด, ใครตัดสิน, จะ revisit เมื่อไหร่/เงื่อนไขไหน — เก็บที่เดียวที่ทีมหาเจอ (Notion/wiki ติด design file) ไม่ใช่ฝังใน thread แชท",
    whyItMatters:
      "ทีมที่ไม่มี log จะเถียงเรื่องเดิมซ้ำทุก 3 เดือน ('ทำไมเราไม่ทำ infinite scroll นะ?') โดยลืมว่าเคยตัดไปแล้วเพราะ data อะไร — และเมื่อ designer คนเดิมลาออก เหตุผลทั้งหมดหายไปด้วย คนใหม่ rewrite สิ่งที่ถูกตัดสินมาดีแล้ว หรือไม่กล้าแตะอะไรเลยเพราะไม่รู้ว่าอะไรตั้งใจอะไรบังเอิญ",
    whenToUse: [
      "Decision ที่มีคนไม่เห็นด้วยแต่ตัดสินแล้ว — บันทึกกัน relitigate",
      "Trade-off ที่เลือกทางหนึ่งโดยรู้ข้อเสีย (ความเร็ว vs ความสมบูรณ์)",
      "Decision ที่อิง constraint ชั่วคราว ('ทำแบบนี้เพราะ API ยังไม่รองรับ') — พร้อมเงื่อนไข revisit",
    ],
    whenNotToUse: [
      "Decision เล็กที่กลับได้ง่าย (สี hover) — log ที่บันทึกทุกอย่างคือ log ที่ไม่มีใครอ่าน",
      "อย่าใช้ log แทนการสื่อสาร — บันทึกแล้วต้องแจ้งทีมด้วย ไม่ใช่ 'อยู่ใน log แล้วนี่'",
    ],
    howToApply: [
      "Template ต่อรายการ: วันที่ / decision / เหตุผล+evidence / ทางเลือกที่ตัด+ทำไม / ผู้ตัดสิน / เงื่อนไข revisit",
      "เขียนภายใน 24 ชม. หลังตัดสิน — ช้ากว่านั้นเหตุผลเริ่มเพี้ยน",
      "เก็บที่เดียว ลิงก์จาก design file/PRD ที่เกี่ยว",
      "เมื่อมีคนเปิดประเด็นซ้ำ: ส่งลิงก์ log ก่อน — เถียงต่อได้ถ้ามี data ใหม่ที่ log ไม่เคยเห็น",
      "Review log ทุก quarter: decision ที่เงื่อนไข revisit สุกแล้ว หยิบขึ้นมาทบทวนจริง",
    ],
    checklist: [
      "Decision สำคัญทุกตัวถูกบันทึกภายใน 24 ชม.",
      "ทุกรายการมีทางเลือกที่ถูกตัด + เหตุผล (ส่วนที่มีค่าสุด)",
      "ระบุ evidence/constraint ณ เวลานั้น (สิ่งที่อนาคตจะไม่รู้)",
      "มีเงื่อนไข revisit สำหรับ decision ที่อิงข้อจำกัดชั่วคราว",
      "ทีมรู้ว่า log อยู่ไหนและถูกใช้จริงตอนมีคนเปิดประเด็นซ้ำ",
    ],
    deliverables: ["Decision log กลางของทีม (Notion/wiki)", "Quarterly review ของ decisions ที่ถึงเงื่อนไข revisit"],
    goodExample:
      "'2026-03: เลือก pagination แทน infinite scroll — เพราะ user หลักใช้เพื่อหา record เก่าแล้วอ้างอิงเลขหน้า (interview 7/9 คน) ตัด infinite scroll เพราะทำลายการอ้างอิงตำแหน่ง — revisit ถ้า use case เปลี่ยนเป็น browse แบบ feed' — หกเดือนต่อมา PM ใหม่ถามเรื่องเดิม ส่งลิงก์จบใน 1 นาที",
    badExample:
      "Decision เกิดใน Figma comment 47 ข้อ + แชท + ห้องประชุม — สามเดือนต่อมาไม่มีใคร reconstruct ได้ว่าทำไมเป็นแบบนี้ คนใหม่เลย redesign แล้วชนปัญหาเดิมที่เคยทำให้ตัดทางนั้นทิ้งไปแล้ว",
    commonMistakes: [
      "บันทึกแค่ 'ตัดสินใจอะไร' ไม่บันทึก 'ทำไม' และ 'อะไรถูกตัด' — ส่วนหลังคือของมีค่าจริง",
      "เก็บกระจาย (แชท, comment, หัวคน) แทนที่เดียว",
      "Log ละเอียดยิบทุก decision จนเลิกเขียนกันใน 3 สัปดาห์",
      "ไม่เคย revisit decision ที่เงื่อนไขเปลี่ยนแล้ว — 'เพราะ API ไม่รองรับ' ที่ API รองรับมาปีแล้ว",
    ],
    relatedSlugs: ["stakeholder-review", "design-critique", "design-system-governance", "ux-debt"],
    tags: ["documentation", "decisions", "alignment"],
    prompts: [
      `You are a design ops assistant. I will paste a messy decision discussion (meeting notes, chat thread, Figma comments).

Extract and write the decision log entry:
- Date + decision (one sentence, what was chosen)
- Rationale: evidence and constraints that existed at the time (be explicit — future readers won't know context)
- Alternatives considered and why each was rejected
- Decision maker + who was consulted
- Revisit condition: what change (data, tech, business) should trigger reopening this

Then flag: any unresolved disagreement hidden in the thread, and any temporary constraint stated as permanent.
Output: clean log entry in markdown + flags list.`,
    ],
    visualDemo: "handoff-spec",
    demoData: {
      title: "Decision Log Entry",
      specs: [
        { label: "Decision", value: "Pagination แทน infinite scroll (2026-03)" },
        { label: "เหตุผล", value: "User อ้างอิงเลขหน้า — interview 7/9" },
        { label: "ตัดทิ้ง", value: "Infinite scroll: ทำลายการอ้างอิงตำแหน่ง" },
        { label: "ผู้ตัดสิน", value: "Design lead + PM (consulted: eng)" },
        { label: "Revisit เมื่อ", value: "Use case เปลี่ยนเป็น feed browsing" },
      ],
    },
  },
  {
    id: "prioritization-matrix",
    slug: "prioritization-matrix",
    term: "Prioritization Matrix",
    category: "lead-skills",
    icon: "🧮",
    level: "basic",
    shortDescription: "เครื่องมือจัดลำดับงานด้วยสองแกน (impact × effort) — เปลี่ยนการเถียงด้วยเสียงดัง เป็นการเถียงด้วยเกณฑ์",
    fullDefinition:
      "Prioritization matrix วางทุก candidate (fix, feature, debt) ลงตาราง 2 แกน — ที่ใช้บ่อยสุด: impact (ต่อ user/metric) × effort (คน-สัปดาห์) ได้ 4 ช่อง: quick wins (สูง/ต่ำ — ทำเลย), big bets (สูง/สูง — วางแผน), fill-ins (ต่ำ/ต่ำ — ทำตอนว่าง), time sinks (ต่ำ/สูง — ตัดทิ้ง) — พลังจริงไม่ใช่ตัวตาราง แต่คือการบังคับให้ทุกชิ้นถูกประเมินด้วยเกณฑ์เดียวกันต่อหน้ากัน",
    whyItMatters:
      "ไม่มี matrix การจัดลำดับจะถูกตัดสินด้วย: ใครเสียงดังสุด, ใครถาม ล่าสุด, อะไรสนุกที่จะทำ — ผลคือ quick wins ที่ค้าง backlog หกเดือนขณะทีมเข็น time sink ที่ใครบางคนผูกพัน — matrix ทำให้การเมืองเหล่านี้ต้องสู้กับเกณฑ์ที่มองเห็นได้",
    whenToUse: [
      "วางแผน sprint/quarter ที่ candidate เยอะกว่า capacity",
      "หลังได้ findings จาก audit/research — แปลงเป็นลำดับการแก้",
      "เมื่อ stakeholder ยัดงาน 'ด่วน' เข้ามา — ให้มันผ่านเกณฑ์เดียวกับงานอื่น",
    ],
    whenNotToUse: [
      "งานที่มี dependency บังคับลำดับอยู่แล้ว (ต้องทำ A ก่อน B ถึงเป็นไปได้) — matrix ไม่เห็น dependency",
      "Commitment ตามสัญญา/กฎหมาย — ไม่ต้องจัดอันดับ มันต้องทำ",
    ],
    howToApply: [
      "List candidates พร้อมข้อมูลขั้นต่ำ: แก้ปัญหาอะไร กระทบใคร ประเมิน effort คร่าว",
      "นิยามแกนให้ชัดก่อนวาง: impact วัดจากอะไร (metric ไหน, กี่ user), effort หน่วยอะไร",
      "ให้ทีม (design+eng+PM) วางคะแนนร่วมกัน — ค่าของ matrix คือบทสนทนาตอนเถียงตำแหน่ง",
      "ระวัง bias: ทุกอย่างจะถูกดันเข้า 'impact สูง effort ต่ำ' — บังคับ rank เทียบกัน ไม่ใช่ให้คะแนนลอย",
      "ผลลัพธ์: ทำ quick wins ทันที, วางแผน big bets, ทิ้ง time sinks อย่างเปิดเผย (บอกเจ้าของไอเดียตรงๆ)",
    ],
    checklist: [
      "นิยามแกน impact/effort ชัดก่อนเริ่มวาง",
      "วางร่วมกันหลายฝ่าย ไม่ใช่คนเดียวจัดแล้วประกาศ",
      "Impact อ้าง evidence (data/research) ไม่ใช่ความเชื่อ",
      "Time sinks ถูกตัดอย่างเปิดเผย ไม่ใช่แขวนไว้เกรงใจ",
      "ผล matrix ถูกแปลงเป็น commitment จริงใน sprint plan",
      "Revisit ทุก quarter — impact/effort เปลี่ยนตามเวลา",
    ],
    deliverables: ["Matrix พร้อมตำแหน่งทุก candidate + เหตุผลย่อ", "Sprint/quarter plan ที่อ้างอิงผลจาก matrix ได้"],
    goodExample:
      "ทีมวาง 14 findings จาก UX audit ลง matrix ร่วมกับ eng — พบว่า 'แก้ error message ชุด checkout' คือ quick win (กระทบทุก user ที่จ่ายเงิน, effort 3 วัน) ที่ค้างมานานเพราะไม่เซ็กซี่ ขณะที่ 'redesign dashboard' ที่ทุกคนตื่นเต้นตกช่อง time sink — sprint ถัดไปเลยมีของที่ขยับ metric จริง",
    badExample:
      "PM จัดลำดับคนเดียวใน spreadsheet โดยให้ทุก feature ของ stakeholder ใหญ่เป็น 'high impact' — matrix กลายเป็นเครื่องมือฟอกการเมืองให้ดูเป็นวิทยาศาสตร์ ทีมเลิกเชื่อตั้งแต่รอบที่สอง",
    commonMistakes: [
      "ให้คะแนน impact จากความเชื่อ/เสียงดัง ไม่ใช่ evidence",
      "ประเมิน effort โดยไม่มี engineer ในห้อง",
      "ทุกอย่างกองอยู่ quick wins เพราะให้คะแนนแบบเกรงใจ — ต้อง force rank",
      "จัดอันดับเสร็จแล้วแผนจริงไม่ตาม — matrix เป็นพิธีกรรม",
    ],
    relatedSlugs: ["pain-point-analysis", "ux-debt", "stakeholder-review", "design-decision-log"],
    tags: ["prioritization", "impact-effort", "planning"],
    prompts: [
      `You are a product/design lead facilitating prioritization. I will paste a list of candidate items (fixes, features, debt) with any available evidence.

Tasks:
1. Define the axes for this round: impact = [metric/users affected], effort = [person-weeks] — state assumptions
2. Force-rank items on each axis (no ties allowed — ranking, not absolute scores)
3. Place into quadrants: quick wins / big bets / fill-ins / time sinks
4. For each item: one-line justification citing evidence; flag items where impact is belief-based with [NO EVIDENCE]
5. Recommend: what enters the next sprint, what gets scheduled, what gets killed openly — with the sentence to tell the time-sink owner

Output: ranked table + quadrant placement + sprint recommendation.`,
    ],
    visualDemo: "priority-matrix",
    demoData: {
      title: "Impact × Effort",
      matrix: {
        xLabel: "Effort",
        yLabel: "Impact",
        quadrants: ["Quick wins — ทำเลย", "Big bets — วางแผน", "Fill-ins — ตอนว่าง", "Time sinks — ตัดทิ้ง"],
        items: [
          { name: "แก้ error copy ชุด checkout", quadrant: 0 },
          { name: "Redesign onboarding", quadrant: 1 },
          { name: "ปรับ icon ให้คมขึ้น", quadrant: 2 },
          { name: "Redesign dashboard ทั้งหน้า", quadrant: 3 },
        ],
      },
    },
  },
  {
    id: "design-qa",
    slug: "design-qa",
    term: "Design QA",
    category: "lead-skills",
    icon: "🔍",
    level: "intermediate",
    shortDescription: "การตรวจของจริงที่ build แล้วเทียบกับ design spec ก่อน release — ขั้นที่แยก product เนี้ยบออกจาก product เกือบเนี้ยบ",
    fullDefinition:
      "Design QA คือรอบตรวจที่ designer เปิด build จริง (ไม่ใช่ Figma) แล้วไล่เทียบ: spacing/typography/สีตรง token ไหม, ทุก state ทำงานไหม (hover, focus, loading, error, empty), responsive ตาม spec ไหม, motion ถูก duration ไหม, content จริงไม่ทำ layout พังไหม — บันทึก diff เป็น issue ที่มี screenshot คู่ (design vs build) + ระดับความสำคัญ — ทำบน staging ก่อน release ไม่ใช่หลัง user เห็น",
    whyItMatters:
      "ช่องว่าง design-to-build คือที่ที่คุณภาพรั่ว: spacing เพี้ยน 4px ทุกจุดรวมกันทำ product ดู 'ถูกๆ' โดยไม่มีใครชี้ได้ว่าตรงไหน, state ที่ไม่ถูก implement โผล่เป็น UI พังต่อหน้า user — และถ้าไม่มีรอบ QA ที่เป็นทางการ ปัญหาเหล่านี้จะถูกพบโดย CEO ใน production พร้อมคำถามว่า 'ทำไมมันดูไม่เหมือนที่ design'",
    whenToUse: [
      "ทุก feature ที่มี UI ใหม่ — เป็น gate ก่อน release ใน Definition of Done",
      "บน staging ที่มี data จริง/ใกล้จริง — content จริงคือตัวทำ layout พัง",
      "หลัง dependency ใหญ่อัปเดต (design system version, framework) — regression sweep",
    ],
    whenNotToUse: [
      "อย่าใช้ design QA เป็นที่ระบาย design ใหม่ ('ตอนนี้เห็นของจริงแล้ว อยากเปลี่ยน...') — นั่นคือ change request ไม่ใช่ QA",
      "อย่า QA ทุก pixel เท่ากันหมด — โฟกัส flow หลักและ component ที่ใช้ซ้ำ ก่อนมุมที่คนเห็นน้อย",
    ],
    howToApply: [
      "ตกลงกับ eng ตั้งแต่ต้น sprint ว่ามีรอบ design QA + เวลาแก้ ถูกนับใน estimate",
      "ใช้ checklist คงที่: token (สี/ฟอนต์/ระยะ), states ครบ, responsive 3 จุด, content ยาว/สั้นจริง, motion, a11y พื้นฐาน",
      "เทียบกับ spec ไม่ใช่ความรู้สึก — ถ้า spec ไม่เคยระบุ แปลว่า spec บกพร่อง (บทเรียนรอบหน้า) ไม่ใช่ dev ผิด",
      "Report เป็น issue: screenshot คู่ + ตำแหน่ง + ค่าที่ควรเป็น (token) + severity (blocker/should/polish)",
      "Blocker แก้ก่อน release, should-fix เข้า sprint ถัดไป, polish เข้า backlog — ประกาศเกณฑ์ชัด",
    ],
    checklist: [
      "QA บน build จริง + data จริง ไม่ใช่ screenshot ที่ dev ส่งมา",
      "ไล่ states ครบ: hover/focus/disabled/loading/error/empty",
      "ตรวจ 375/768/1280 ทุก feature",
      "ทดสอบ content ขอบ: ชื่อยาวสุด, เลขใหญ่สุด, ภาษาไทยผสมอังกฤษ",
      "ทุก issue มี screenshot คู่ + ค่า token ที่ควรเป็น",
      "แยก 'build ไม่ตรง spec' ออกจาก 'อยากเปลี่ยน design' อย่างซื่อสัตย์",
    ],
    deliverables: ["Design QA report: issue × severity × screenshot คู่ × token ที่ถูก", "Sign-off ใน Definition of Done ก่อน release"],
    goodExample:
      "Designer เปิด staging ไล่ checklist 45 นาที พบ: spacing card 12px (spec 16px), focus state หาย, ชื่อสินค้ายาวดัน price หลุดกรอบ — สาม issue พร้อม screenshot คู่และ token ที่ถูก dev แก้ครึ่งวัน ของที่ release เนี้ยบเท่า Figma",
    badExample:
      "ไม่มีรอบ QA — สองสัปดาห์หลัง release, CMO ส่ง screenshot มาในกรุ๊ปใหญ่: ปุ่มสองหน้าคนละสี, การ์ดเบี้ยวบนมือถือ — ทีมไล่แก้แบบ firefighting พร้อมเสีย trust ว่า 'design ทีมนี้ปล่อยของหลุดๆ'",
    commonMistakes: [
      "QA จาก screenshot ที่ dev เลือกส่งมา แทนการเปิด build เอง",
      "ตรวจแค่ default state ใน viewport เดียว",
      "Feedback คลุมเครือ ('มันดู off') แทนค่าเจาะจง ('gap ควรเป็น --space-4 / 16px')",
      "แอบยัด design change ใหม่เข้ามาในรอบ QA จน dev เข็ดและไม่อยากมีรอบ QA อีก",
      "ไม่จองเวลาแก้ไว้ใน sprint — เจอ issue แล้วได้แต่ขึ้น backlog ไปตาย",
    ],
    relatedSlugs: ["qa-checklist", "design-to-code-review", "component-states", "ui-acceptance-criteria", "design-tokens"],
    tags: ["design-qa", "quality", "staging", "review"],
    prompts: [
      `You are a design QA specialist. I will provide the design spec (tokens, states, breakpoints) and access to/screenshots of the built feature.

Run the QA pass:
1. Visual fidelity: spacing, typography, colors — cite expected token vs actual value for every diff
2. States: default/hover/focus-visible/disabled/loading/error/empty — list missing or wrong
3. Responsive: 375/768/1280 — layout breaks, overflow, hidden content
4. Real content: longest names, big numbers, Thai/English mix — what breaks
5. Motion + basic a11y: durations, reduced-motion, focus order, labels

Classify each issue: BLOCKER (ship-stopper) / SHOULD-FIX (next sprint) / POLISH (backlog). Honest rule: anything that's a new design idea, not a spec mismatch, goes in a separate [CHANGE REQUEST] list.
Output: QA report table + verdict (pass / pass-with-fixes / fail).`,
    ],
    visualDemo: "qa-checklist",
    demoData: {
      title: "Design QA Pass",
      items: [
        "Token ตรง: สี/ฟอนต์/spacing เทียบ spec",
        "States ครบ 8 + empty/overflow",
        "Responsive 375/768/1280 ไม่พัง",
        "Content จริงยาวสุดไม่ทำ layout แตก",
        "Motion duration + reduced-motion ตรง spec",
        "แยก spec-mismatch ออกจาก change request",
      ],
    },
  },
  {
    id: "cross-functional-review",
    slug: "cross-functional-review",
    term: "Cross-Functional Design Review",
    category: "lead-skills",
    icon: "🧑‍🤝‍🧑",
    level: "intermediate",
    shortDescription: "Review ที่ดึง eng/PM/content/QA เข้ามาดู design ก่อน build — จับปัญหา feasibility, edge case และ copy ตอนที่ยังแก้ถูก",
    fullDefinition:
      "Cross-functional review คือ session ที่แต่ละ function ตรวจ design จากเลนส์ตัวเอง: engineer ดู feasibility/effort/state ที่ขาด, PM ดู scope/metric, content ดู copy/terminology, QA ดู edge case ที่จะต้องเทสต์, support ดูว่า user จะถามอะไร — จัดก่อน build เริ่ม เพื่อให้ปัญหาที่แต่ละมุมเห็นถูกพูดตอนแก้ราคาถูก ไม่ใช่โผล่เป็น blocker กลาง sprint",
    whyItMatters:
      "Design ที่ผ่านแค่สายตา designer จะชนกำแพงเป็นชุดตอน build: 'API ไม่มี field นี้', 'state นี้ยังไม่ได้ design', 'copy นี้ legal ไม่ผ่าน' — แต่ละอย่างคือการหยุดงาน ประชุมฉุกเฉิน และ design ที่ถูกแก้หน้างานโดยไม่มี designer — review ข้าม function หนึ่งชั่วโมงถูกกว่า rework สาม sprint เสมอ",
    whenToUse: [
      "Design ใกล้เสร็จแต่ยังแก้ได้ (ก่อน handoff) — จุด sweet spot",
      "Feature ที่แตะระบบหลายส่วน (payment, data model, permission)",
      "เมื่อทีมเคยเจอ 'รู้งี้บอกตั้งแต่แรก' ใน retro — สัญญาณว่าต้องมี review นี้เป็น ritual",
    ],
    whenNotToUse: [
      "การเปลี่ยนแปลงเล็กใน pattern ที่มีอยู่แล้ว — async comment พอ ไม่ต้องเรียกประชุม 6 คน",
      "อย่าใช้แทน design critique — เวทีนี้ตรวจความพร้อม build ไม่ใช่คุณภาพ design craft",
    ],
    howToApply: [
      "ส่ง design + context ล่วงหน้า 1-2 วัน พร้อมคำถามเจาะจงต่อ function ('eng: state matrix ครบไหม / มีจุดไหน effort ระเบิด')",
      "ใน session: เดิน flow ทีละ step ให้แต่ละเลนส์ทัก ไม่ใช่เปิดอิสระ",
      "บังคับคำถามมาตรฐาน: 'state ไหนยังไม่มี design', 'data มาจากไหน มีจริงไหม', 'อะไรเกิดเมื่อ fail', 'copy นี้ final ไหม'",
      "บันทึก: blocker (ต้องแก้ก่อน build), question (ต้องหาคำตอบ), accepted risk (รู้แล้วยอม)",
      "จบด้วยการตัดสิน: พร้อม build / แก้แล้วเริ่มได้ / ยังไม่พร้อม — ชัดๆ ไม่แขวน",
    ],
    checklist: [
      "ทุก function หลักได้เห็น design ก่อน build เริ่ม (eng บังคับ, อื่นๆ ตาม impact)",
      "เดินทีละ flow step ไม่ใช่โชว์ภาพรวมแล้วถามว่า 'โอเคไหม'",
      "ถามครบ: states, data source, failure, copy, edge cases",
      "ผลลัพธ์ชัด: blockers / questions / accepted risks มีเจ้าของ",
      "Designer ได้ list ของที่ต้องเติมก่อน handoff — ไม่ใช่ feedback ลอยๆ",
    ],
    deliverables: ["Review notes: blockers/questions/risks พร้อมเจ้าของ", "Readiness verdict + list ที่ design ต้องเติมก่อน handoff"],
    goodExample:
      "Review หน้า subscription ใหม่: eng ทักว่า plan downgrade กลางรอบบิลยังไม่มี design (จุดที่จะ block แน่นอน), QA ขอ state 'บัตรหมดอายุระหว่าง trial', content แก้คำว่า 'ยกเลิก' ที่กำกวมสองความหมาย — สามปัญหาที่จะเป็นไฟไหม้กลาง sprint ถูกปิดในหนึ่งชั่วโมง",
    badExample:
      "Designer ส่ง Figma ให้ dev ผ่าน ticket โดยไม่มี review — วันที่สามของ sprint dev พบว่า flow ทั้งเส้นอิง data ที่ backend ไม่มี ต้องหยุดรอ API ใหม่สองสัปดาห์ ขณะที่ PM ตัดสินใจตัด state ที่ 'ดูไม่จำเป็น' เองโดย designer มารู้ตอน release",
    commonMistakes: [
      "เชิญแต่คนที่จะเห็นด้วย — review ที่ไม่มี engineer ตัวจริงที่จะ build คือพิธีกรรม",
      "เปิด session โดยไม่ส่งของล่วงหน้า ทุกคนเห็นครั้งแรกในห้อง ได้ reaction ไม่ใช่ review",
      "ปล่อยให้กลายเป็น critique รสนิยม แทนการตรวจความพร้อม build",
      "ไม่บันทึก accepted risks — ตอนปัญหาเกิดจริง ทุกคนลืมว่าเคยตกลงยอมรับมัน",
    ],
    relatedSlugs: ["developer-handoff", "design-critique", "edge-cases", "state-specification", "design-qa"],
    tags: ["collaboration", "review", "feasibility", "alignment"],
    prompts: [
      `You are facilitating a cross-functional design review. I will paste the design/flow description.

Act as four reviewers in sequence and surface what each would catch:
1. ENGINEER: missing states, data requirements (does this data exist?), API implications, effort hotspots, performance risks
2. QA: edge cases to test, failure modes, concurrent/timing issues, content extremes
3. CONTENT: ambiguous copy, terminology inconsistencies, untranslatable strings, legal-sensitive wording
4. SUPPORT/PM: what users will ask, metric instrumentation missing, scope creep risks

For each finding: classify BLOCKER (must fix before build) / QUESTION (needs answer) / ACCEPTED RISK (note and proceed).
Output: findings by lens + readiness verdict (ready / ready-after-fixes / not ready) + the list designer must complete before handoff.`,
    ],
    visualDemo: "checklist",
  },
  {
    id: "ux-debt",
    slug: "ux-debt",
    term: "UX Debt",
    category: "lead-skills",
    icon: "🏚️",
    level: "intermediate",
    shortDescription: "ปัญหา UX ที่รู้อยู่แล้วแต่ยังไม่แก้ สะสมดอกเบี้ยเป็น support cost, churn และความช้าของทีม — ต้องมีทะเบียนและงบจ่ายคืน",
    fullDefinition:
      "UX debt คือ shortcut ที่เคยตัดสินใจ (หรือเกิดเอง) แล้วยังค้าง: flow ชั่วคราวที่อยู่มาสองปี, component นอกระบบ 5 เวอร์ชัน, error message ที่เขียนไว้ 'ก่อน launch', inconsistency ที่สะสมจาก 10 ทีมที่ตัดสินใจเอง — เหมือน tech debt มันมีดอกเบี้ย: user เรียนรู้ช้าลง, support ตอบคำถามเดิมซ้ำ, ทีม design/dev ทำงานช้าลงเพราะไม่มีอะไรเป็นมาตรฐาน — จัดการด้วยทะเบียน (registry) + งบประจำ sprint",
    whyItMatters:
      "UX debt ไม่เคยถูกจัดงบเพราะมันไม่ใช่ feature ใหม่และไม่ใช่ bug ที่ระบบพัง — มันแค่ทำให้ทุกอย่างแย่ลง 2% ต่อจุด คูณร้อยจุด — ทีมที่ไม่มีทะเบียน debt จะรู้สึกว่า product 'หนืดขึ้นเรื่อยๆ' โดยชี้ไม่ได้ว่าตรงไหน และ debt ที่มองไม่เห็นจะไม่มีวันถูกจ่ายคืน",
    whenToUse: [
      "ทุกครั้งที่ตัดสินใจ ship shortcut — บันทึกเข้าทะเบียนทันทีพร้อมต้นทุนที่รู้",
      "ตอน audit ประจำ quarter: inconsistency, pattern แตกแถว, copy ชั่วคราว",
      "ตอนวางแผน sprint: จองงบ debt 10-20% ของ capacity เป็นกติกาถาวร",
    ],
    whenNotToUse: [
      "อย่าเรียกทุกอย่างที่อยากเปลี่ยนว่า debt — design ที่แค่ 'ไม่ใช่แบบที่ฉันจะทำ' ไม่ใช่หนี้ ต้องมีต้นทุนที่ระบุได้",
      "Debt ใน flow ที่กำลังจะถูก rewrite ทั้งเส้นอยู่แล้ว — จ่ายคืนของที่กำลังจะทิ้งคือการเผางบ",
    ],
    howToApply: [
      "สร้าง debt registry: รายการ × ดอกเบี้ย (ticket/สัปดาห์, drop-off, เวลาที่ทีมเสีย) × ต้นทุนจ่ายคืน × วันที่เกิด",
      "ทุก shortcut ใหม่ต้องลงทะเบียนเป็นเงื่อนไขของการอนุมัติ ship — 'ship ได้ แต่ลง debt พร้อม revisit date'",
      "วัดดอกเบี้ยเป็นตัวเลขที่ stakeholder เข้าใจ: 'debt ตัวนี้ = 40 ticket/เดือน = X บาท support cost'",
      "จองงบถาวร 10-20% ต่อ sprint — ไม่ใช่ 'ไว้ว่างแล้วค่อยทำ' (ไม่มีวันว่าง)",
      "จ่ายคืนเรียงตามดอกเบี้ยสูงสุด ไม่ใช่ตัวที่ง่ายสุด",
    ],
    checklist: [
      "มี debt registry ที่มีเจ้าของและถูก update จริง",
      "ทุกรายการมีดอกเบี้ยที่ประเมินเป็นตัวเลข",
      "Shortcut ใหม่ลงทะเบียนทันทีตอน ship ไม่ใช่ตอนนึกได้",
      "มีงบจ่ายคืนถาวรใน sprint plan (10-20%)",
      "ลำดับจ่ายคืนเรียงตามดอกเบี้ย ไม่ใช่ความง่าย",
      "Debt ที่จ่ายแล้ววัดผลได้ (ticket ลด, drop-off ลด) เพื่อ justify งบรอบหน้า",
    ],
    deliverables: ["UX debt registry (รายการ × ดอกเบี้ย × ต้นทุนแก้ × ลำดับ)", "Quarterly debt report ต่อ stakeholder (จ่ายอะไร ได้อะไรคืน)"],
    goodExample:
      "ทีมพบ date picker 4 แบบใน 4 flow — ลงทะเบียน: ดอกเบี้ย = ticket 'กรอกวันที่ไม่ได้' 25/เดือน + dev เสียเวลา maintain 4 ชุด, ต้นทุนแก้ = 1 สัปดาห์รวมเป็นตัวเดียว — จ่ายคืนใน sprint งบ debt, ticket หมวดนั้นลด 80% เอาตัวเลขไปต่องบ quarter ถัดไป",
    badExample:
      "ทุก retro มีคนพูดว่า 'เราควรกลับไปแก้ flow ชั่วคราวอันนั้นนะ' ติดกัน 8 ไตรมาส — ไม่มีทะเบียน ไม่มีตัวเลขดอกเบี้ย ไม่มีงบ — มันเลยแพ้ feature ใหม่ทุกครั้งในการแย่ง capacity และจะแพ้ตลอดไป",
    commonMistakes: [
      "ไม่บันทึก debt ตอนสร้าง — มารู้ตัวอีกทีตอนมันเป็นปัญหาวัฒนธรรม ('ที่นี่ของชั่วคราวคือของถาวร')",
      "วัดดอกเบี้ยไม่ได้ เลยแพ้การแย่งงบให้ feature เสมอ",
      "รอ 'sprint ว่างๆ' ที่ไม่มีอยู่จริง แทนการจองงบถาวร",
      "จ่ายคืนตัวที่ง่าย/สนุก แทนตัวที่ดอกเบี้ยแพงสุด",
    ],
    relatedSlugs: ["prioritization-matrix", "design-system-governance", "pain-point-analysis", "design-decision-log"],
    tags: ["ux-debt", "maintenance", "registry"],
    prompts: [
      `You are a UX debt auditor. I will describe known shortcuts, inconsistencies, and "temporary" solutions in our product (plus any support/analytics data).

Tasks:
1. Build the debt registry: item / when created / why (original tradeoff) / interest (quantify: tickets per month, drop-off %, team hours wasted) / payoff cost (person-days)
2. Flag items where interest can't be quantified yet — and say what data would quantify it
3. Rank by interest-to-payoff ratio (highest interest, lowest cost first)
4. Mark items NOT worth paying (flow scheduled for rewrite, near-zero interest)
5. Draft the stakeholder pitch for the top 3: "this debt costs us [number] per month; paying it costs [days]; payback in [time]"

Output: registry table + ranked payoff plan + pitch lines.`,
    ],
    visualDemo: "priority-matrix",
    demoData: {
      title: "Debt Payoff Order",
      matrix: {
        xLabel: "ต้นทุนจ่ายคืน",
        yLabel: "ดอกเบี้ย/เดือน",
        quadrants: ["จ่ายคืนทันที", "วางแผนจ่าย", "ปล่อยได้", "อย่าเพิ่งจ่าย"],
        items: [
          { name: "Date picker 4 แบบ (25 ticket/ด.)", quadrant: 0 },
          { name: "Onboarding ชั่วคราวอายุ 2 ปี", quadrant: 1 },
          { name: "Icon เก่าบางหน้า", quadrant: 2 },
          { name: "Flow ที่จะ rewrite Q3 อยู่แล้ว", quadrant: 3 },
        ],
      },
    },
  },
  {
    id: "design-system-governance",
    slug: "design-system-governance",
    term: "Design System Governance",
    category: "lead-skills",
    icon: "🏛️",
    level: "advanced",
    shortDescription: "กติกาว่าใครเพิ่ม/แก้/เลิกใช้อะไรใน design system ได้อย่างไร — ระบบที่ไม่มี governance จะตายด้วย drift หรือความเกร็ง",
    fullDefinition:
      "Governance ตอบ 4 คำถาม: (1) contribution — ทีม product เจอ pattern ใหม่ เสนอเข้าระบบยังไง ใคร review (2) exception — เมื่อไหร่หลุดจากระบบได้ และต้องบันทึกยังไง (3) versioning — breaking change สื่อสาร/migrate ยังไง (4) deprecation — เลิกใช้ component เก่ายังไงโดยไม่ทิ้งซาก — โดยมี model ความเป็นเจ้าของชัด (ทีมกลาง, federated หรือผสม) ที่สมดุลระหว่าง ความเร็วของทีม product กับความ consistent ของระบบ",
    whyItMatters:
      "Design system ที่ไม่มี governance ตาย 2 แบบ: แบบแรก — ทุกทีม fork/แก้เองจนระบบกลายเป็นคำแนะนำที่ไม่มีใครฟัง (drift), แบบสอง — ทีมกลางคุมเข้มจนของใหม่เข้าระบบช้ากว่าที่ product ต้องการ ทีมเลยสร้างของเถื่อนข้างนอก (ตายแบบมีพิธีกรรม) — governance ที่ดีคือเส้นทางที่ชัดและเร็วพอให้ การทำตามระบบง่ายกว่าการแหกระบบ",
    whenToUse: [
      "ตั้งแต่ design system มีผู้ใช้เกิน 1 ทีม — ก่อนเกิด fork แรก",
      "เมื่อเริ่มเห็น component เถื่อน/token นอกระบบโผล่ใน audit",
      "ก่อนทำ breaking change ใหญ่ (rebrand, token v2) — ต้องมี versioning process ก่อน",
    ],
    whenNotToUse: [
      "ทีมเดียว product เดียว — กติกาหนักๆ คือ overhead ใช้ convention + review ปกติพอ",
      "อย่าใช้ governance เป็นเครื่องมือปฏิเสธทุกอย่าง — ถ้าคำตอบของระบบคือ 'ไม่' ตลอด ทีมจะเลิกถาม",
    ],
    howToApply: [
      "ประกาศ ownership model: ใครคือ maintainer, SLA ของการ review contribution (เช่น 5 วันทำการ)",
      "Contribution path เบาๆ: เสนอ pattern → review กับ maintainer → ทดลองใน 1 ทีม → ผ่านแล้ว promote เข้าระบบ",
      "Exception protocol: หลุดระบบได้เมื่อมีเหตุผล + บันทึกใน exception log + มี expiry (ไม่ใช่หลุดถาวร)",
      "Versioning: semver, changelog ที่อ่านรู้เรื่อง, migration guide + codemod สำหรับ breaking change",
      "Deprecation: ประกาศล่วงหน้า, ติด warning ใน component เก่า, ตามวัด adoption จนศูนย์แล้วลบจริง",
      "วัดสุขภาพระบบ: adoption rate, จำนวน exception, อายุเฉลี่ยของ contribution ใน queue",
    ],
    checklist: [
      "มี maintainer ที่ระบุชื่อได้ + SLA review ที่ประกาศไว้",
      "Contribution path เขียนเป็นเอกสารและเคยถูกใช้จริง",
      "Exception ต้องลงทะเบียน + มีวันหมดอายุ",
      "Breaking change มี migration guide ก่อน release เสมอ",
      "Component เก่ามี deprecation timeline ไม่ใช่อยู่คู่ตัวใหม่ตลอดกาล",
      "วัด adoption/exception เป็นตัวเลขทุก quarter",
    ],
    deliverables: ["Governance doc: ownership, contribution, exception, versioning, deprecation", "System health dashboard (adoption, exceptions, queue age)"],
    goodExample:
      "ทีม checkout ต้องการ split-button ที่ระบบไม่มี — ยื่น proposal, maintainer review ใน 3 วัน, ตกลงทดลองใน checkout ก่อน, สอง sprint ต่อมาผ่านเกณฑ์ถูก promote เข้าระบบพร้อม states ครบ — ทีมได้ของเร็ว ระบบได้ component ที่ผ่านการใช้จริง ไม่มีใครต้องสร้างของเถื่อน",
    badExample:
      "ทีมกลางใช้เวลา review 6 สัปดาห์ต่อ component และตอบ 'ไม่เข้าเกณฑ์' บ่อย — ภายในปีเดียว ทีม product สามทีมมี button ของตัวเอง, ระบบกลางถูกใช้แค่ 40% และกลายเป็น 'ของทีม design' ที่ product ไม่รู้สึกเป็นเจ้าของร่วม",
    commonMistakes: [
      "ไม่มี contribution path — ระบบโตได้แค่เท่าที่ทีมกลางมีเวลา และทีม product รอไม่ได้",
      "Exception ไม่ถูกบันทึก — หกเดือนต่อมาไม่มีใครรู้ว่าอะไรคือระบบ อะไรคือข้อยกเว้น",
      "Breaking change แบบไม่มี migration guide — ทีมที่อัปเดตแล้วพังจะ pin เวอร์ชันเก่าตลอดกาล",
      "วัดความสำเร็จด้วยจำนวน component ในระบบ แทน adoption จริงในการใช้งาน",
    ],
    relatedSlugs: ["design-tokens", "component-anatomy", "ux-debt", "design-decision-log"],
    tags: ["governance", "design-system", "contribution", "versioning"],
    prompts: [
      `You are a design system lead. Draft the governance model for our system.

Context: [number of teams, current pain: drift or bottleneck?, maintainer capacity]

Define:
1. Ownership model (central / federated / hybrid) with rationale for our size — name the maintainer role and review SLA
2. Contribution path: stages from "team needs a pattern" to "promoted into system" — keep it under 4 steps, with criteria per stage
3. Exception protocol: when deviation is allowed, registration format, expiry rule
4. Versioning & breaking changes: semver policy, changelog format, migration guide + codemod requirement
5. Deprecation playbook: announce → warn → measure adoption → remove
6. Health metrics: adoption %, open exceptions, contribution queue age — with healthy thresholds

Output: governance doc in markdown, short enough that teams actually read it (≤2 pages).`,
    ],
    visualDemo: "user-flow",
    demoData: {
      title: "Contribution Path",
      steps: [
        { name: "ทีมเจอ pattern ใหม่", detail: "เช็คก่อนว่าระบบมีของใกล้เคียงไหม" },
        { name: "ยื่น proposal", detail: "Use case + anatomy + ทำไมของเดิมไม่พอ" },
        { name: "Review (SLA 5 วัน)", detail: "Maintainer ตัดสิน: รับ / ทดลอง / ปฏิเสธพร้อมเหตุผล", risk: "Review ช้า = ทีมสร้างของเถื่อน" },
        { name: "ทดลองใน 1 ทีม", detail: "ใช้จริง 1-2 sprint เก็บ feedback" },
        { name: "Promote เข้าระบบ", detail: "เติม states/doc ครบ + ประกาศทุกทีม" },
      ],
    },
  },
];
