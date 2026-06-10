import type { UXTerm } from "@/types/playbook";

export const RESEARCH_TERMS: UXTerm[] = [
  {
    id: "five-second-test",
    slug: "five-second-test",
    term: "5-Second Test",
    category: "ux-research",
    icon: "⏱️",
    level: "basic",
    shortDescription: "โชว์ design 5 วินาทีแล้วถามว่าจำอะไรได้ — วัดว่า first impression สื่อ message หลักหรือไม่",
    fullDefinition:
      "5-second test คือการแสดงหน้าจอ (มักเป็น hero/landing) ให้ participant ดู 5 วินาทีแล้วซ่อน จากนั้นถาม open-ended ว่าหน้านี้คืออะไร ขายอะไร และจำอะไรได้ — ใช้วัด clarity ของ value proposition และ visual hierarchy ไม่ใช่วัด usability ของ flow",
    whyItMatters:
      "Visitor ตัดสินใจอยู่ต่อหรือเด้งภายในไม่กี่วินาที — ถ้า target user ดู 5 วินาทีแล้วตอบไม่ได้ว่าเพจขายอะไร แปลว่า traffic ที่ซื้อมา (ads) กำลังรั่วทิ้งที่ hero ก่อนถึง CTA ด้วยซ้ำ",
    whenToUse: [
      "ก่อน launch landing page ใหม่หรือ hero ที่ redesign",
      "เปรียบเทียบ 2 concept ว่าอันไหนสื่อ value ชัดกว่า",
      "เช็คว่า headline ใหม่ที่ marketing เขียนยังทำให้คนเข้าใจ product ไหม",
    ],
    whenNotToUse: [
      "หน้า complex ที่ต้องใช้เวลาอ่าน (dashboard, ตารางเทียบ) — 5 วินาทีไม่แฟร์กับหน้าแบบนี้",
      "วัด task completion หรือ navigation — นั่นคืองานของ usability test / first click test",
    ],
    howToApply: [
      "เลือกหน้าและกำหนดว่า message หลักที่ 'ต้องผ่าน' คืออะไร (1-2 ข้อ)",
      "Recruit target user 5-10 คน (ห้ามใช้ทีมตัวเอง)",
      "แสดงภาพ 5 วินาทีพอดี (ใช้ tool เช่น UsabilityHub/Lyssna หรือจับเวลาเอง)",
      "ถาม open-ended: 'หน้านี้เกี่ยวกับอะไร', 'บริษัทนี้ขายอะไร', 'จำอะไรได้บ้าง', 'เหมาะกับใคร'",
      "นับ % ที่ตอบ message หลักถูก — ถ้า <60% ถือว่า hero ยังไม่ผ่าน",
      "Cluster คำตอบผิดเพื่อดูว่าอะไรแย่ง attention (มักเป็นภาพประกอบหรือ badge ที่ไม่เกี่ยว)",
    ],
    checklist: [
      "กำหนด message ที่ต้องผ่านก่อนเริ่ม test",
      "Participant เป็น target user ที่ไม่เคยเห็นเพจ",
      "คำถามเป็น open-ended ไม่ชี้นำ",
      "เวลา 5 วินาทีเท่ากันทุกคน",
      "มีเกณฑ์ผ่านชัด (เช่น ≥60% identify value prop ถูก)",
      "บันทึกคำที่ participant ใช้ — เป็นวัตถุดิบเขียน headline ใหม่",
    ],
    deliverables: ["สรุปผล: % pass ต่อ message + quote คำตอบ", "รายการ element ที่แย่ง attention พร้อมข้อเสนอแก้"],
    goodExample:
      "ทดสอบ hero ของ SaaS บัญชี: 8/10 ตอบว่า 'โปรแกรมบัญชี' แต่มีแค่ 2/10 ที่จับได้ว่า 'สำหรับฟรีแลนซ์' → แก้ headline จาก 'จัดการบัญชีอัจฉริยะ' เป็น 'โปรแกรมบัญชีสำหรับฟรีแลนซ์' โดยไม่ต้องรื้อ design",
    badExample:
      "ถามนำว่า 'เห็นปุ่มสมัครไหม' (participant ตอบ 'เห็น' เพื่อเอาใจ), ทดสอบกับเพื่อนร่วมทีมที่รู้ product อยู่แล้ว, แล้วสรุปว่า hero ผ่าน",
    commonMistakes: [
      "ถามคำถามชี้นำ ('เห็น X ไหม') แทน open-ended",
      "ใช้ colleague แทน target user แล้วได้ false positive",
      "เอาไปทดสอบหน้าที่ตั้งใจให้อ่านนาน แล้วสรุปว่า design แย่",
      "ไม่ตั้งเกณฑ์ pass ล่วงหน้า เลยตีความผลเข้าข้างตัวเอง",
    ],
    relatedSlugs: ["offer-clarity", "landing-page-review", "usability-testing", "research-synthesis"],
    tags: ["first-impression", "landing-page", "quick-test"],
    prompts: [
      `You are a UX researcher. I'm preparing a 5-second test for the attached landing page hero.

Tasks:
1. Identify the messages this page MUST communicate (value prop, audience, action) based on the content.
2. Write 5 unbiased open-ended questions (no leading questions).
3. Define pass criteria per message (e.g., ≥60% unaided recall).
4. Predict which elements will steal attention from the core message and why (visual weight, position, contrast).

Output: test plan in markdown + a results-recording table template (participant / Q1-Q5 answers / messages identified).`,
    ],
    visualDemo: "audit-report",
    demoData: {
      title: "5-Second Test Result",
      findings: [
        { severity: "high", issue: "มีแค่ 2/10 ที่รู้ว่าสำหรับ 'ฟรีแลนซ์' — headline กว้างเกิน", fix: "ใส่ audience ใน headline ตรงๆ" },
        { severity: "medium", issue: "5/10 จำ badge รางวัลได้มากกว่า value prop", fix: "ลด visual weight ของ badge ย้ายลงใต้ fold" },
        { severity: "low", issue: "CTA ถูกจำได้แค่ 3/10", fix: "เพิ่ม contrast และเว้น space รอบ CTA" },
      ],
    },
  },
  {
    id: "usability-testing",
    slug: "usability-testing",
    term: "Usability Testing",
    category: "ux-research",
    icon: "🧪",
    level: "intermediate",
    shortDescription: "ให้ user จริงทำ task จริงบน product แล้วสังเกตจุดที่ติด สับสน หรือเข้าใจผิด",
    fullDefinition:
      "Usability testing คือการนั่งดู (moderated) หรือเก็บ recording (unmoderated) ขณะ target user ทำ task ที่กำหนด โดยขอให้คิดดังๆ (think-aloud) — เป้าหมายคือหา 'จุดที่ design ทำให้คนติด' ไม่ใช่ถามความเห็นว่าชอบไหม 5 คนต่อรอบมักเจอ ~85% ของปัญหาหลัก",
    whyItMatters:
      "ทีมที่ใกล้ product เกินไปมองไม่เห็นปัญหาที่ user ใหม่เจอใน 30 วินาทีแรก — การเทสต์กับ 5 คนก่อน launch ถูกกว่าการรู้จาก 1-star review และ churn หลัง launch หลายเท่า",
    whenToUse: [
      "ก่อน launch feature สำคัญ (เทสต์บน prototype ได้ ไม่ต้องรอ code เสร็จ)",
      "เมื่อ analytics ชี้ drop-off ที่ step ใดแต่ไม่รู้สาเหตุ — test บอก 'ทำไม'",
      "หลัง redesign flow หลัก ก่อน roll out 100%",
    ],
    whenNotToUse: [
      "อยากรู้ว่า 'คนจะใช้/จ่ายไหม' — usability test วัดว่าใช้เป็นไหม ไม่ใช่ demand (ใช้ interview/fake door แทน)",
      "เปรียบเทียบเชิงสถิติว่า version ไหน convert ดีกว่า — ใช้ A/B test",
    ],
    howToApply: [
      "เขียน task scenario จาก goal จริง ไม่ leak ชื่อปุ่ม: 'คุณอยากยกเลิกแพ็กเกจรายเดือน' ไม่ใช่ 'กดปุ่ม cancel ใน settings'",
      "กำหนด success criteria ต่อ task ล่วงหน้า (ทำอะไรสำเร็จถือว่าผ่าน)",
      "Recruit target user 5 คนต่อรอบ — เทสต์หลายรอบเล็กดีกว่ารอบเดียวใหญ่",
      "ขอ think-aloud, ผู้ดำเนินนั่งเงียบ ไม่ช่วย ไม่ขายของ ถาม 'คุณคาดว่าจะเกิดอะไร' เมื่อ user ติด",
      "บันทึกวิดีโอ/หน้าจอ + จด timestamp ของทุก struggle",
      "สรุปเป็น findings: ปัญหา × ความถี่ × severity × clip ประกอบ",
    ],
    checklist: [
      "Task เขียนจาก goal ไม่ leak UI ('ยกเลิกแพ็กเกจ' ไม่ใช่ 'กด Cancel')",
      "Success criteria ต่อ task กำหนดก่อนเทสต์",
      "Participant ตรง target และไม่ใช่คนรู้จัก product",
      "Moderator ไม่ช่วย ไม่อธิบาย ไม่ defend design",
      "ทุก session ถูกอัดและมี note timestamp",
      "Findings จัดอันดับด้วย frequency × severity ไม่ใช่ความรู้สึก",
    ],
    deliverables: ["Test plan (tasks, criteria, script)", "Findings report: ปัญหา/ความถี่/severity/clip/ข้อเสนอแก้"],
    goodExample:
      "เทสต์ checkout 5 คน: 4/5 หา field โค้ดส่วนลดไม่เจอเพราะถูกพับใน accordion → ย้ายขึ้นมาเป็น link ใต้ยอดรวม เทสต์ซ้ำอีก 5 คน ผ่านหมด — สองรอบเล็กตอบโจทย์กว่ารอบใหญ่รอบเดียว",
    badExample:
      "Moderator พูดว่า 'ลองกดที่มุมขวาบนสิครับ' ตอน user ติด แล้วบันทึกว่า task สำเร็จ — ผลเทสต์สวยแต่ launch จริง drop-off ที่จุดเดิมเป๊ะ",
    commonMistakes: [
      "ถามความเห็น ('ชอบไหม') แทนการสังเกตพฤติกรรม",
      "ช่วย user ตอนติดแล้วนับว่าผ่าน",
      "Recruit คนในทีม/เพื่อนที่ bias",
      "เทสต์รอบเดียว 15 คนแทน 3 รอบ รอบละ 5 คนระหว่าง iterate",
      "รายงานเป็น list ความเห็นยาวๆ ไม่มี severity ทำให้ทีมไม่รู้จะแก้อะไรก่อน",
    ],
    relatedSlugs: ["user-goal", "task-analysis", "research-synthesis", "heuristic-evaluation", "five-second-test"],
    tags: ["testing", "moderated", "think-aloud", "qualitative"],
    prompts: [
      `You are a UX researcher. Create a complete usability test plan for the flow I describe below.

Include:
1. 4-5 task scenarios written from user goals — realistic context, no UI words leaked
2. Success criteria + failure definition per task
3. Moderator script: intro (set expectations, "we test the design not you"), think-aloud reminder, neutral probes for when users get stuck ("what do you expect to happen?")
4. 5 debrief questions (behavior-focused, not "did you like it")
5. A findings log template: issue / task / frequency / severity (1-4) / evidence timestamp / recommendation

Flow to test: [PASTE FLOW DESCRIPTION]`,
    ],
    visualDemo: "qa-checklist",
    demoData: {
      title: "Test Session Checklist",
      items: [
        "Task ไม่ leak ชื่อปุ่ม/เมนู",
        "อัดหน้าจอ + เสียงทุก session",
        "Moderator ไม่ช่วยเมื่อ user ติด (ถาม expectation แทน)",
        "จด timestamp ทุก struggle",
        "Debrief ด้วยคำถามพฤติกรรม",
        "สรุป findings ด้วย frequency × severity ภายใน 48 ชม.",
      ],
    },
  },
  {
    id: "user-interview",
    slug: "user-interview",
    term: "User Interview",
    category: "ux-research",
    icon: "🎙️",
    level: "intermediate",
    shortDescription: "บทสนทนาเชิงลึกเพื่อเข้าใจพฤติกรรม บริบท และปัญหาจริง — ฟังอดีต ไม่ใช่ให้ทำนายอนาคต",
    fullDefinition:
      "User interview คือการคุยแบบกึ่งโครงสร้าง (semi-structured) กับ user ทีละคน เพื่อขุดว่าเขาทำงานอย่างไร ติดตรงไหน และแก้ปัญหาด้วยอะไรอยู่ตอนนี้ — หลักสำคัญ: ถามถึงพฤติกรรมในอดีตที่เกิดขึ้นจริง ('ครั้งล่าสุดที่...เล่าให้ฟังหน่อย') ห้ามให้ทำนายอนาคต ('ถ้ามี feature นี้จะใช้ไหม') เพราะคำทำนายเชื่อไม่ได้",
    whyItMatters:
      "Feature ที่ fail จำนวนมากผ่านการ 'ถาม user แล้ว user บอกว่าจะใช้' — คนตอบให้เราพอใจเสมอ การถามพฤติกรรมจริงในอดีต (เขา จ่าย/ลงแรง แก้ปัญหานี้แล้วหรือยัง) คือตัวกรอง demand ปลอมที่ถูกที่สุดก่อนเขียนโค้ด",
    whenToUse: [
      "ช่วง discovery ก่อนตัดสินใจ build อะไรใหญ่",
      "เมื่อ analytics บอก 'อะไร' เกิดขึ้นแต่ไม่รู้ 'ทำไม'",
      "หลัง churn: สัมภาษณ์คนที่เลิกใช้เพื่อหาเหตุจริง",
    ],
    whenNotToUse: [
      "วัดว่า UI ใช้เป็นไหม — ใช้ usability test (interview คือฟัง ไม่ใช่ดูใช้งาน)",
      "หาตัวเลขเชิงปริมาณ (กี่ % ต้องการ X) — sample 5-8 คนตอบเชิงปริมาณไม่ได้ ใช้ survey",
    ],
    howToApply: [
      "เขียน research questions (สิ่งที่ทีมต้องรู้) แยกจาก interview questions (สิ่งที่ถามจริง)",
      "ถามแบบ story-based: 'ครั้งล่าสุดที่เจอปัญหา X เล่าตั้งแต่ต้นจนจบ'",
      "ตามด้วย 'ทำไม' และ 'แล้วยังไงต่อ' 2-3 ชั้นเพื่อลงลึกถึง motivation",
      "ถามหา workaround ปัจจุบัน: เขาจ่ายเงิน/เสียเวลาเท่าไหร่กับมัน (= ตัววัด demand จริง)",
      "เงียบให้เป็น — ความเงียบ 3 วินาทีดึงคำตอบที่ลึกกว่าออกมา",
      "ปิดท้าย: 'มีอะไรที่ผมควรถามแต่ไม่ได้ถามไหม'",
    ],
    checklist: [
      "ทุกคำถามถามถึงอดีต/ปัจจุบัน ไม่ใช่อนาคตสมมติ",
      "ไม่มีคำถามชี้นำหรือ pitch product ระหว่างสัมภาษณ์",
      "ขุด workaround และต้นทุนที่ user จ่ายอยู่จริง",
      "อัดเสียง (ขออนุญาต) — จดอย่างเดียวจะพลาด quote สำคัญ",
      "สัมภาษณ์อย่างน้อย 5 คนต่อ segment ก่อนสรุป pattern",
      "Synthesis ภายใน 48 ชม. ขณะความจำยังสด",
    ],
    deliverables: ["Discussion guide", "Interview notes + key quotes พร้อม insight summary ต่อ segment"],
    goodExample:
      "ถาม 'ครั้งล่าสุดที่ทำรายงานส่งหัวหน้า ใช้เวลาเท่าไหร่ ขั้นไหนนานสุด' → พบว่า user ทุกคน export ไป Excel เพื่อจัด format เอง 2 ชม./สัปดาห์ = demand จริงของ report builder โดยไม่ต้องถามว่า 'อยากได้ report builder ไหม'",
    badExample:
      "ถาม 'ถ้าเรามี AI ช่วยสรุปรายงาน คุณจะใช้ไหม' — 9/10 ตอบ 'ใช้แน่นอน' ทีม build 3 เดือน launch แล้ว adoption 4% เพราะคำทำนายไม่ใช่พฤติกรรม",
    commonMistakes: [
      "ถามอนาคตสมมติ ('จะใช้ไหม/จะจ่ายไหม') แล้วเชื่อคำตอบ",
      "Pitch product ระหว่างสัมภาษณ์จนกลายเป็น demo",
      "ถามปิด (ใช่/ไม่) แทนเล่าเรื่อง",
      "หยุดที่คำตอบแรก ไม่ตามต่อด้วย 'ทำไม'",
      "สัมภาษณ์เสร็จแล้วไม่ synthesize — note ตายอยู่ใน drive",
    ],
    relatedSlugs: ["jobs-to-be-done", "pain-point-analysis", "research-synthesis", "persona-validation", "user-problem"],
    tags: ["interview", "discovery", "qualitative"],
    prompts: [
      `You are a UX research lead. Build a discussion guide for user interviews.

Context: [PRODUCT + WHAT WE NEED TO LEARN]
Target participants: [SEGMENT]

Produce:
1. 3-4 research questions (what the team must learn — internal)
2. 10-12 interview questions mapped to them, ALL about past/current behavior ("tell me about the last time...") — zero hypothetical/future questions, zero leading questions
3. Follow-up probes per question (why / what happened next / what did that cost you)
4. Questions to surface current workarounds and what they cost (time/money) — our real demand signal
5. Red flags list: answers that sound positive but are not evidence (compliments, future promises)

Output: guide in markdown, 45-min structure with timing.`,
    ],
    visualDemo: "checklist",
  },
  {
    id: "survey-design",
    slug: "survey-design",
    term: "Survey Design",
    category: "ux-research",
    icon: "📊",
    level: "intermediate",
    shortDescription: "การออกแบบแบบสอบถามให้ได้ข้อมูลเชิงปริมาณที่เชื่อถือได้ — คำถามแย่ = ข้อมูลขยะจำนวนมาก",
    fullDefinition:
      "Survey ใช้วัด 'เท่าไหร่/กี่ %' จากคนจำนวนมาก หลังจากรู้แล้วว่าต้องถามอะไร (มักรู้จาก interview ก่อน) — หัวใจคือคำถามที่ไม่ชี้นำ, ตัวเลือกครบถ้วนไม่ซ้อนกัน, สเกลสม่ำเสมอ และสั้นพอที่คนตอบจบ (>5 นาที = drop และคุณภาพคำตอบตก)",
    whyItMatters:
      "Survey ที่ออกแบบแย่อันตรายกว่าไม่มีข้อมูล เพราะให้ตัวเลขที่ดูน่าเชื่อถือมา back การตัดสินใจผิดๆ — คำถามชี้นำเพียงคำเดียว ('คุณชอบ feature ใหม่ของเรามากแค่ไหน') ก็ bias ทั้งชุดข้อมูลแล้ว",
    whenToUse: [
      "Quantify สิ่งที่เจอจาก interview: pain ไหนกระทบคนกี่ %",
      "วัด baseline/trend: NPS, CSAT, SUS หลัง usability test",
      "Segment ผู้ใช้ก่อน recruit สัมภาษณ์รอบถัดไป (screener)",
    ],
    whenNotToUse: [
      "ยังไม่รู้ว่าปัญหาคืออะไร — survey สำรวจแบบเปิดกว้างได้คำตอบตื้น ใช้ interview ก่อน",
      "ถามพฤติกรรมซับซ้อนที่คนจำไม่ได้แม่น ('เดือนที่แล้วเปิด app กี่ครั้ง') — ใช้ analytics แทน",
    ],
    howToApply: [
      "เริ่มจาก decision ที่ survey ต้อง inform — คำถามไหนไม่ feed decision ให้ตัด",
      "ถามพฤติกรรม/ข้อเท็จจริงก่อนความเห็น และใส่ช่วงเวลา ('ใน 30 วันที่ผ่านมา')",
      "ใช้สเกลมาตรฐาน 5 จุด สม่ำเสมอทั้งฉบับ ใส่ตัวเลือก 'ไม่เคยใช้/ไม่แน่ใจ'",
      "หลีกเลี่ยง double-barreled ('ใช้ง่ายและสวยไหม' = 2 คำถาม)",
      "Pilot กับ 5 คนก่อนส่งจริง — หาคำถามที่ตีความได้สองแบบ",
      "รายงานพร้อม n และ response rate เสมอ",
    ],
    checklist: [
      "ทุกคำถาม map กับ decision ที่ต้องตัดสินใจ",
      "ไม่มีคำถามชี้นำ/double-barreled",
      "สเกลสม่ำเสมอและมีทางออก ('ไม่แน่ใจ')",
      "ความยาว ≤5 นาที (ทดสอบจับเวลาแล้ว)",
      "Pilot test ก่อนส่งจริง",
      "แผนวิเคราะห์เขียนก่อนเก็บข้อมูล (กัน p-hacking ภายหลัง)",
    ],
    deliverables: ["Survey instrument พร้อม logic/branching", "Result report: ตัวเลข + n + response rate + ข้อจำกัด"],
    goodExample:
      "'ใน 30 วันที่ผ่านมา คุณ export รายงานกี่ครั้ง (0 / 1-2 / 3-5 / มากกว่า 5)' ตามด้วย 'ครั้งล่าสุด export ไปทำอะไรต่อ (เลือกได้ 1)' — วัดพฤติกรรมจริง มีช่วงเวลา ตัวเลือกไม่ซ้อน",
    badExample:
      "'คุณชอบระบบ report ใหม่ที่เราตั้งใจพัฒนามากแค่ไหน (ชอบมาก/ชอบ/เฉยๆ)' — ชี้นำ, สเกลเอียงไปทางบวก 2:1, และไม่มีทางออกสำหรับคนไม่เคยใช้",
    commonMistakes: [
      "ส่ง survey ก่อนรู้ว่าจะตัดสินใจอะไรด้วยผลลัพธ์",
      "สเกลเอียง (ตัวเลือกบวกมากกว่าลบ)",
      "ยาวเกินจน drop กลางทาง — ข้อมูลที่ได้เป็นของคนพิเศษกลุ่มเดียว (bias)",
      "ลืม screener แล้วได้คำตอบจากคนที่ไม่ใช่ target ปนมา",
    ],
    relatedSlugs: ["user-interview", "research-synthesis", "persona-validation", "ab-test-design"],
    tags: ["survey", "quantitative", "nps", "measurement"],
    prompts: [
      `You are a quantitative UX researcher. Design a survey.

Decision this survey must inform: [DECISION]
What we already know from qualitative research: [FINDINGS]
Target audience + how we'll distribute: [AUDIENCE/CHANNEL]

Produce:
1. Screener questions (filter to real target users)
2. 8-12 questions: behavior/fact questions first (with time bounds like "in the past 30 days"), attitude later; standard 5-point scales; include "N/A / not sure" options
3. Flag-check your own draft: list any leading, double-barreled, or recall-heavy question and fix it
4. Analysis plan: which result leads to which decision (decide thresholds now)
5. Estimated completion time (must be ≤5 minutes)

Output: survey in markdown with branching logic noted.`,
    ],
    visualDemo: "checklist",
  },
  {
    id: "competitive-ux-review",
    slug: "competitive-ux-review",
    term: "Competitive UX Review",
    category: "ux-research",
    icon: "🥊",
    level: "intermediate",
    aliases: ["competitive benchmark"],
    shortDescription: "เดิน flow เดียวกันบน product คู่แข่ง 3-5 ราย เพื่อหา pattern มาตรฐาน จุดที่เขาทำดีกว่า และช่องว่าง",
    fullDefinition:
      "Competitive UX review คือการทำ task เดียวกัน (เช่น สมัคร → ซื้อ → ยกเลิก) บน product คู่แข่งอย่างเป็นระบบ บันทึกจำนวน step, ข้อมูลที่ขอ, pattern ที่ใช้ และจุด friction — เป้าหมายคือเข้าใจ 'ความคาดหวังที่ user ถูกฝึกมา' และหาโอกาส ไม่ใช่เพื่อ copy ทั้งดุ้น",
    whyItMatters:
      "User เทียบเรากับประสบการณ์ที่ดีที่สุดที่เขาเคยเจอ ไม่ใช่กับคู่แข่งตรง — ถ้า onboarding เราขอ 12 fields ขณะที่มาตรฐานตลาดคือ 3 เราแพ้ตั้งแต่ยังไม่เห็น feature และทีมจะไม่รู้เลยถ้าไม่เคยเดิน flow ของคนอื่นจริงๆ",
    whenToUse: [
      "ก่อน design flow มาตรฐานที่ตลาดมี convention แล้ว (checkout, onboarding, pricing)",
      "เมื่อ stakeholder อ้าง 'คู่แข่งทำแบบนี้' — ตรวจด้วยข้อมูลจริงว่าเขาทำอะไรกันแน่",
      "ทุก 6-12 เดือนสำหรับ flow หลัก เพื่ออัปเดต expectation ของตลาด",
    ],
    whenNotToUse: [
      "อย่าใช้แทน user research — คู่แข่งบอกว่าตลาดทำอะไร ไม่ได้บอกว่า user ของเราต้องการอะไร",
      "Feature ใหม่ที่ไม่มีใครทำ — benchmark ของที่ไม่มีอยู่จะพาไปเทียบของผิด",
    ],
    howToApply: [
      "เลือก 3-5 ราย: คู่แข่งตรง 2-3 + best-in-class ต่างอุตสาหกรรม 1-2",
      "กำหนด task และเกณฑ์บันทึกล่วงหน้า: จำนวน step, fields ที่ขอ, เวลา, จุดติด, pattern เด่น",
      "เดิน flow จริงด้วยบัญชีจริง (จ่ายเงินจริงถ้าจำเป็น) พร้อม screenshot ทุก step",
      "ทำ matrix เทียบ: แถว = เกณฑ์, คอลัมน์ = ราย",
      "สรุปเป็น 3 กลุ่ม: มาตรฐานที่ต้องมี (table stakes), จุดที่เขาดีกว่า, ช่องว่างที่เราชนะได้",
    ],
    checklist: [
      "มี best-in-class นอกอุตสาหกรรมอย่างน้อย 1 ราย",
      "Task และเกณฑ์กำหนดก่อนเริ่ม ไม่ใช่เลือกเก็บตามใจ",
      "Screenshot ครบทุก step ทุกราย (ใช้ทำ evidence ตอน present)",
      "แยก 'pattern มาตรฐานตลาด' ออกจาก 'จุดต่างที่เป็นโอกาส'",
      "ข้อสรุปโยงกลับ user problem ของเราเอง ไม่ใช่ลอก feature",
    ],
    deliverables: ["Comparison matrix + screenshot library", "สรุป: table stakes / they-do-better / opportunity gaps"],
    goodExample:
      "Benchmark checkout 4 ราย พบทุกรายรองรับ guest checkout และ e-wallet ยกเว้นเรา (table stakes ที่ขาด) แต่ไม่มีรายไหนแสดงเวลาจัดส่งก่อนจ่าย (ช่องว่างที่เราชนะได้) — ได้ทั้ง backlog และ positioning",
    badExample:
      "Capture หน้า home คู่แข่ง 10 รายมาแปะ slide สวยๆ โดยไม่เดิน flow จริง — ไม่เห็นว่าหลังปุ่ม CTA ของเขาคือ form 3 fields ขณะที่เราขอ 12 ซึ่งเป็นปัญหาจริงที่ซ่อนอยู่",
    commonMistakes: [
      "ดูแค่หน้าตา ไม่เดิน flow จริงจนถึงจุดจ่ายเงิน/ยกเลิก",
      "Copy pattern โดยไม่รู้ว่ามันตอบ context ของเขาที่เราไม่มี",
      "เทียบเฉพาะคู่แข่งตรง พลาด expectation ที่ user ติดมาจาก app อื่น",
      "ทำครั้งเดียวแล้วใช้อ้างอิงไป 3 ปี ทั้งที่ตลาดเปลี่ยนแล้ว",
    ],
    relatedSlugs: ["heuristic-evaluation", "mental-model", "checkout-ux", "onboarding-flow"],
    tags: ["benchmark", "competitive", "market-patterns"],
    prompts: [
      `You are a UX strategist running a competitive UX benchmark.

Our product: [PRODUCT]
Flow to benchmark: [e.g., signup → first value]
Competitors: [LIST 3-5, include one best-in-class from another industry]

For each competitor I will paste my walkthrough notes/screenshots. Then:
1. Build a comparison matrix: steps count, fields required, time to value, friction points, notable patterns
2. Classify findings: (a) table stakes we're missing, (b) things they do better + why it works, (c) gaps nobody serves = our opportunity
3. For each opportunity, connect it to our user problem and estimate effort
4. Explicitly flag patterns we should NOT copy because their context differs from ours

Output: matrix + 3-list summary + top 5 recommendations ranked by impact.`,
    ],
    visualDemo: "audit-report",
  },
  {
    id: "task-analysis",
    slug: "task-analysis",
    term: "Task Analysis",
    category: "ux-research",
    icon: "🔬",
    level: "intermediate",
    shortDescription: "แตก task ของ user เป็นขั้นตอนย่อยทุกระดับ เพื่อหา step ที่ตัด รวบ หรือ automate ได้",
    fullDefinition:
      "Task analysis คือการแจกแจงว่า user ทำอะไรบ้างจริงๆ เพื่อบรรลุ goal — ทั้ง action บนหน้าจอ, การตัดสินใจในหัว, และงานนอกระบบ (จดใส่กระดาษ, เปิด app อื่น, ถามเพื่อน) แล้ววิเคราะห์แต่ละ step ว่า จำเป็นไหม / ระบบทำแทนได้ไหม / เป็นจุดพลาดบ่อยไหม — มักทำก่อนออกแบบ flow ใหม่",
    whyItMatters:
      "งานนอกหน้าจอคือ friction ที่ analytics มองไม่เห็น — user ที่ต้องเปิด Excel ข้างๆ เพื่อคำนวณก่อนกรอกฟอร์มเรา คือโอกาส automate ที่ไม่มีทางเจอจาก funnel data และ flow ที่ออกแบบโดยไม่รู้ task จริงมักบังคับลำดับที่สวนกับวิธีทำงานของ user",
    whenToUse: [
      "ก่อน redesign flow ที่ user บ่นว่า 'ขั้นตอนเยอะ' — หาให้เจอว่าขั้นไหนตัดได้จริง",
      "ตอนย้ายงานจาก manual/offline มาเป็น digital — ต้องเห็น task เดิมทั้งหมดก่อน",
      "เมื่อสงสัยว่า user ใช้ workaround นอกระบบ (สังเกตจาก interview/field study)",
    ],
    whenNotToUse: [
      "Task ง่าย 2-3 step ที่ไม่มี decision — แตกละเอียดไปก็ไม่ได้อะไรเพิ่ม",
      "อย่าใช้ task analysis เดี่ยวๆ ตัดสิน 'ควร build ไหม' — มันบอก 'ทำอย่างไร' ไม่ใช่ 'ควรทำไหม'",
    ],
    howToApply: [
      "เลือก task และ observe user ทำจริง (contextual inquiry) หรือให้เล่าละเอียดครั้งล่าสุดที่ทำ",
      "เขียนทุก step รวมงานในหัว (ตัดสินใจ/คำนวณ) และงานนอกระบบ (เปิด app อื่น, จดกระดาษ)",
      "ทำ hierarchical breakdown: task → subtask → action",
      "ติดป้ายแต่ละ step: จำเป็น / ตัดได้ / automate ได้ / จุดพลาดบ่อย / ทำนอกระบบ",
      "ออกแบบ flow ใหม่จาก step ที่เหลือ แล้ว validate กับ user เดิม",
    ],
    checklist: [
      "ข้อมูลมาจากการ observe หรือเล่าเหตุการณ์จริง ไม่ใช่ flow ในอุดมคติของทีม",
      "บันทึกงานนอกระบบและการตัดสินใจในหัว ไม่ใช่แค่ click",
      "ทุก step ถูกตั้งคำถาม ตัด/รวบ/automate ได้ไหม",
      "ระบุจุดที่ user พลาดบ่อยพร้อมสาเหตุ",
      "Flow ใหม่ถูกเทียบจำนวน step/การตัดสินใจ กับ flow เดิม",
    ],
    deliverables: ["Task breakdown diagram พร้อมป้ายวิเคราะห์ต่อ step", "ข้อเสนอ flow ใหม่ + ตาราง step ที่ตัด/automate พร้อมเหตุผล"],
    goodExample:
      "วิเคราะห์งานออกใบแจ้งหนี้: พบ user เปิดไฟล์ Excel เก่าเพื่อ copy เลขที่ล่าสุด +1 ทุกครั้ง (5 นาที/ใบ, พลาดซ้ำเดือนละครั้ง) → ระบบ generate เลขอัตโนมัติ ตัด 1 subtask ทั้งก้อนและ error ทั้งประเภททิ้ง",
    badExample:
      "ทีมวาด flow 'ตามที่ระบบออกแบบไว้' 6 step สวยงาม โดยไม่รู้ว่า user จริงทำ 11 step เพราะต้องสลับไปเช็คราคาในไฟล์อื่นก่อนกรอกทุกครั้ง — redesign แล้ว friction หลักยังอยู่ครบ",
    commonMistakes: [
      "วิเคราะห์จาก flow ในระบบแทนการดู user ทำจริง",
      "มองข้าม cognitive steps (ตัดสินใจ/จำ/คำนวณ) ที่เป็น friction หลัก",
      "ไม่บันทึก workaround นอกระบบ",
      "แตกละเอียดทุก task เท่ากันหมดจนรายงานยาวแต่ไม่มี action",
    ],
    relatedSlugs: ["user-flow", "user-interview", "friction-reduction", "jobs-to-be-done"],
    tags: ["task-analysis", "workflow", "contextual-inquiry"],
    prompts: [
      `You are a UX researcher doing task analysis. I will paste observation notes or a user's detailed account of how they complete a task today.

Tasks:
1. Break the task into a hierarchy: task → subtasks → actions, INCLUDING mental steps (decide, calculate, recall) and off-system steps (other apps, paper, asking someone)
2. Label every step: necessary / removable / automatable / error-prone / off-system
3. Quantify where possible: time per step, error frequency mentioned
4. Propose the redesigned flow: which steps the system absorbs, which disappear, what remains
5. Compare: steps and decisions before vs after

Output: indented task tree with labels + before/after table + top 3 automation opportunities.`,
    ],
    visualDemo: "user-flow",
    demoData: {
      title: "Task: ออกใบแจ้งหนี้ (ปัจจุบัน)",
      steps: [
        { name: "เปิด Excel เก่า", detail: "หาเลขที่ใบล่าสุด +1 เอง", risk: "Off-system · พลาดเดือนละครั้ง → automate ได้" },
        { name: "เช็คราคาในไฟล์อื่น", detail: "สลับ app เพื่อ copy ราคา", risk: "Off-system → ดึงจากระบบได้" },
        { name: "กรอกฟอร์ม 14 ช่อง", detail: "ซ้ำกับข้อมูลลูกค้าเดิม 80%", risk: "Prefill ได้" },
        { name: "ตรวจ + ส่ง", detail: "อ่านทวนเองทั้งใบ", risk: "ระบบ validate แทนได้บางส่วน" },
      ],
    },
  },
  {
    id: "pain-point-analysis",
    slug: "pain-point-analysis",
    term: "Pain Point Analysis",
    category: "ux-research",
    icon: "🩹",
    level: "basic",
    shortDescription: "รวบรวมและจัดอันดับจุดเจ็บของ user จากหลายแหล่ง ให้กลายเป็น backlog ที่เรียงด้วย evidence",
    fullDefinition:
      "Pain point analysis คือการดึงปัญหาจากทุกแหล่ง (support tickets, app reviews, interview, session recordings, sales call notes) มา cluster เป็นกลุ่มปัญหาเดียวกัน แล้วให้คะแนน severity × frequency × reach เพื่อได้ลำดับว่าควรแก้อะไรก่อน — เปลี่ยน 'เสียงบ่นกระจัดกระจาย' เป็นข้อมูลตัดสินใจ",
    whyItMatters:
      "ไม่มี analysis นี้ ทีมจะแก้ปัญหาตามเสียงที่ดังสุด (ลูกค้ารายใหญ่ที่บ่นใส่ CEO) แทนปัญหาที่กระทบคนมากสุด — และ pain เงียบๆ ที่ทำให้คน churn โดยไม่บ่น จะไม่ถูกเห็นเลย",
    whenToUse: [
      "ทุก quarter ก่อนวาง roadmap — refresh ลำดับ pain จาก data ล่าสุด",
      "เมื่อ backlog เต็มไปด้วย 'feature request' ที่ไม่รู้ว่าอันไหนสำคัญจริง",
      "หลังเก็บ research มาหลายชิ้นแต่ยังไม่เคยรวมเป็นภาพเดียว",
    ],
    whenNotToUse: [
      "อย่าใช้กับ data แหล่งเดียว (เช่น ticket อย่างเดียว) แล้วเรียกว่า analysis — คนที่ churn เงียบๆ ไม่เปิด ticket",
      "วิกฤตเร่งด่วน (ระบบล่ม, data รั่ว) — แก้เลย ไม่ต้องรอจัดอันดับ",
    ],
    howToApply: [
      "ดึง data อย่างน้อย 3 แหล่ง: tickets, reviews/NPS verbatim, interview notes, session recordings",
      "Cluster เป็น 'ปัญหาเดียวกัน' โดยดูที่ root cause ไม่ใช่ถ้อยคำ",
      "ให้คะแนน: severity (block งานไหม) × frequency (เกิดบ่อยไหม) × reach (กระทบกี่คน/segment ไหน)",
      "หา silent pain: เทียบ funnel drop-off กับ pain ที่มีคนบ่น — จุดที่ drop สูงแต่ไม่มีใครบ่น = pain เงียบ",
      "ผูกแต่ละ cluster กับ metric ที่จะดีขึ้นถ้าแก้ (ticket volume, churn, conversion)",
    ],
    checklist: [
      "ใช้ data ≥3 แหล่ง รวม source ที่จับ silent pain ได้ (analytics/recordings)",
      "Cluster ตาม root cause ไม่ใช่ตามคำที่ user ใช้",
      "ทุก cluster มีคะแนน severity × frequency × reach",
      "แยก segment — pain ของ user ใหม่กับ power user ไม่เท่ากัน",
      "แต่ละ pain ผูกกับ metric ที่วัดผลหลังแก้ได้",
      "มี evidence link (ticket id, clip, quote) ต่อทุก cluster",
    ],
    deliverables: ["Pain point matrix (cluster × คะแนน × evidence × metric)", "Top-N list ที่เสนอเข้า roadmap พร้อม expected impact"],
    goodExample:
      "รวม 800 tickets + 200 NPS verbatim + 15 interviews → พบ 'หาใบเสร็จย้อนหลังไม่เจอ' โผล่ทั้ง 3 แหล่ง กระทบ segment บัญชี (จ่ายแพงสุด) — ขึ้นอันดับ 1 แซง feature ที่เสียงดังกว่าแต่กระทบคน 2%",
    badExample:
      "เอา feature request ที่ sales ส่งมาเรียงตามขนาดดีลแล้วเรียกว่า pain point analysis — ได้ roadmap ที่ optimize ให้ดีล 3 ราย แต่ churn ของ user ทั่วไปไม่ลดเพราะ pain จริงไม่เคยถูกนับ",
    commonMistakes: [
      "นับเฉพาะเสียงที่บ่น พลาด silent churner",
      "Cluster ตามคำพูดผิวเผิน ทำให้ปัญหาเดียวกันถูกนับแยกแล้วอันดับตก",
      "ไม่แยก segment เลย optimize ให้ค่าเฉลี่ยที่ไม่มีตัวตนจริง",
      "จัดอันดับเสร็จแล้วไม่ผูก metric เลยพิสูจน์ impact หลังแก้ไม่ได้",
    ],
    relatedSlugs: ["user-problem", "research-synthesis", "ux-debt", "prioritization-matrix"],
    tags: ["pain-points", "prioritization", "evidence"],
    prompts: [
      `You are a UX analyst. I will paste raw pain data from multiple sources (support tickets, review verbatims, interview quotes, funnel notes).

Tasks:
1. Cluster items by root cause (not by surface wording) — name each cluster as a problem statement
2. Score each cluster: severity (1-4: annoyance → blocks core task), frequency, reach (which segment, est. %)
3. Flag probable silent pains: clusters implied by behavior data but rarely complained about
4. Attach evidence references per cluster and the metric that should improve if fixed
5. Output a ranked matrix + top 5 recommendations with expected impact

Rule: if two clusters share a root cause, merge them and say so.`,
    ],
    visualDemo: "priority-matrix",
    demoData: {
      title: "Pain Points: Q2",
      matrix: {
        xLabel: "Reach",
        yLabel: "Severity",
        quadrants: ["แก้รอบถัดไป", "แก้ทันที", "เก็บใน backlog", "เฝ้าดู"],
        items: [
          { name: "หาใบเสร็จย้อนหลังไม่เจอ", quadrant: 1 },
          { name: "Export ช้าเกิน 30 วิ", quadrant: 0 },
          { name: "อยากได้ dark mode", quadrant: 2 },
          { name: "Bug เฉพาะ browser เก่า", quadrant: 3 },
        ],
      },
    },
  },
  {
    id: "persona-validation",
    slug: "persona-validation",
    term: "Persona Validation",
    category: "ux-research",
    icon: "👥",
    level: "intermediate",
    shortDescription: "ตรวจว่า persona ที่ทีมใช้ตัดสินใจ ยังตรงกับ user จริงหรือเป็นแค่ตัวละครสมมติ",
    fullDefinition:
      "Persona validation คือการเอา persona ที่มีอยู่มาเทียบกับ data จริง (analytics segments, interview ล่าสุด, survey) ว่า attribute ที่ design ตัดสินใจตาม (ความถี่ใช้งาน, ความเชี่ยวชาญ, อุปกรณ์, goal) ยังจริงไหม — persona ที่ valid ต้องสร้างจากพฤติกรรม ไม่ใช่ demographic และต้อง refresh เมื่อ product/ตลาดเปลี่ยน",
    whyItMatters:
      "Persona ที่สร้างจากจินตนาการใน workshop ('สมชาย อายุ 34 ชอบกาแฟ') ให้ความมั่นใจปลอม — ทีมตัดสินใจหลายล้านบาทตาม 'คน' ที่ไม่มีอยู่จริง ในขณะที่ user จริงอาจมีพฤติกรรมคนละขั้ว",
    whenToUse: [
      "ก่อนใช้ persona ตัดสิน design ครั้งใหญ่ — เช็คอายุของ data ที่อยู่เบื้องหลัง",
      "เมื่อ product เปลี่ยน segment (เพิ่มตลาด SME, ไป mobile-first)",
      "เมื่อทีมเถียงกันโดยอ้าง persona คนละแบบ — สัญญาณว่า persona ไม่ anchor กับ data",
    ],
    whenNotToUse: [
      "ทีมเล็กที่เข้าถึง user จริงได้ทุกสัปดาห์ — คุยกับ user ตรงๆ มีค่ากว่า maintain เอกสาร persona",
      "อย่า validate persona ด้วย workshop ภายในอีกที — นั่นคือการ confirm จินตนาการด้วยจินตนาการ",
    ],
    howToApply: [
      "List การตัดสินใจ design ที่อ้าง persona อยู่ — attribute ไหนถูกใช้จริงบ้าง",
      "เทียบ attribute เหล่านั้นกับ analytics: segment พฤติกรรมจริงตรงกับ persona ไหม",
      "สัมภาษณ์ user 5-8 คนต่อ persona เน้นพฤติกรรม/goal — นับว่ากี่คน match",
      "ตัด attribute ตกแต่ง (ชื่อ อายุ งานอดิเรก) ที่ไม่เคยถูกใช้ตัดสินใจ ออกให้เหลือ behavioral core",
      "อัปเดต/รวม/ฆ่า persona ตาม data แล้วประทับวันที่ + แหล่ง data บนตัว persona",
    ],
    checklist: [
      "ทุก attribute สำคัญมี data source อ้างอิงได้",
      "Persona แบ่งตามพฤติกรรม/goal ไม่ใช่ demographic",
      "มีวันที่ validate ล่าสุดกำกับ (อายุเกิน 1 ปี = ต้อง refresh)",
      "จำนวน persona ≤4 ตัวที่ต่างกันเชิงพฤติกรรมจริง",
      "มี anti-persona (คนที่เราไม่ design ให้) ระบุชัด",
    ],
    deliverables: ["Validation report: attribute ไหน confirmed/แก้/ตัด พร้อม evidence", "Persona ฉบับอัปเดตที่เหลือเฉพาะ attribute ที่ใช้ตัดสินใจ"],
    goodExample:
      "Persona 'แม่ค้ามือใหม่' ถูกเทียบกับ analytics พบ 70% ของ user ใหม่เป็นร้านที่มีหน้าร้านอยู่แล้วมาเพิ่มช่องทาง ไม่ใช่มือใหม่ → แก้ onboarding จากสอนพื้นฐานการขาย เป็น import สินค้าจากระบบเดิม — adoption ขึ้นทันที",
    badExample:
      "ทีมใช้ persona 'น้องฝน วัย 28 ชอบเที่ยวคาเฟ่' ที่สร้างใน workshop 3 ปีก่อน ตัดสินใจ redesign ทั้ง app — ไม่มีใครตอบได้ว่า user จริงกี่ % มีพฤติกรรมแบบน้องฝน",
    commonMistakes: [
      "สร้าง persona จาก demographic แทนพฤติกรรม",
      "ใส่รายละเอียดตกแต่ง (ชื่อ รูป งานอดิเรก) จนทีมจำสิ่งที่ไม่มีผลต่อ design",
      "ไม่เคย refresh ทั้งที่ product เปลี่ยน segment ไปแล้ว",
      "มี persona 7-8 ตัวที่พฤติกรรมแทบไม่ต่างกัน — แยกไว้เพื่อการเมืองภายใน",
    ],
    relatedSlugs: ["user-interview", "survey-design", "jobs-to-be-done", "research-synthesis"],
    tags: ["persona", "segmentation", "validation"],
    prompts: [
      `You are a UX researcher auditing our personas. I will paste: (1) current personas, (2) recent analytics segment data, (3) recent interview/survey findings.

Tasks:
1. List each persona attribute that design decisions actually rely on (ignore decorative details)
2. For each, mark: confirmed / contradicted / no data — with the evidence
3. Identify real behavioral segments in the data that no persona covers
4. Recommend: keep / merge / retire / create — and rewrite surviving personas to behavioral cores only (goals, frequency, expertise, context, top pains)
5. Stamp each with data sources and validation date

Output: validation table + rewritten personas (max 4) + explicit anti-persona.`,
    ],
    visualDemo: "checklist",
  },
  {
    id: "jobs-to-be-done",
    slug: "jobs-to-be-done",
    term: "Jobs-to-be-Done (JTBD)",
    category: "ux-research",
    icon: "🛠️",
    level: "advanced",
    aliases: ["JTBD"],
    shortDescription: "มอง user ว่า 'จ้าง' product มาทำงานอะไร — แข่งกับทุกวิธีที่ทำงานนั้นได้ ไม่ใช่แค่ app หมวดเดียวกัน",
    fullDefinition:
      "JTBD เปลี่ยนคำถามจาก 'user เป็นใคร' เป็น 'user กำลังพยายามทำให้อะไรคืบหน้า ในสถานการณ์ไหน' — job statement: เมื่อ [สถานการณ์] ฉันอยาก [ความคืบหน้า] เพื่อ [ผลลัพธ์] เช่น 'เมื่อปิดงบสิ้นเดือน ฉันอยากรู้ว่าตัวเลขตรงไหม เพื่อส่งเจ้านายโดยไม่โดนตีกลับ' — คู่แข่งของ product คือทุกวิธีที่ user ใช้ทำ job นี้ รวมถึง Excel และการจ้างคน",
    whyItMatters:
      "ทีมที่นิยามคู่แข่งแค่ app หมวดเดียวกัน จะแพ้ให้ Excel, LINE, กระดาษ — ซึ่งครองส่วนแบ่ง job ที่ใหญ่ที่สุดเสมอ JTBD ยังป้องกัน feature ที่ 'ดีแต่ไม่มีใครจ้าง' เพราะบังคับให้ระบุ struggling moment ที่เกิดจริงก่อน",
    whenToUse: [
      "ช่วงหา product/feature ใหม่ — หา job ที่คนทำอยู่แล้วด้วยวิธีแย่ๆ",
      "ตอนสัมภาษณ์ลูกค้าที่เพิ่งซื้อ/เพิ่งเลิกใช้ (switch interview): อะไรผลักให้เปลี่ยน",
      "ตอน positioning: เราถูกจ้างทำ job ไหน แล้วใคร/อะไรคือคู่แข่งของ job นั้นจริงๆ",
    ],
    whenNotToUse: [
      "งานปรับ UI ระดับ component — JTBD เป็นเลนส์ระดับ strategy ไม่ใช่เครื่องมือ review ปุ่ม",
      "อย่าเขียน job statement กว้างจนไร้ขอบ ('ฉันอยากมีความสุข') — job ต้องผูกกับสถานการณ์เจาะจง",
    ],
    howToApply: [
      "สัมภาษณ์คนที่เพิ่ง switch (ซื้อ/เลิก) ภายใน 90 วัน — ไล่ timeline ตั้งแต่ความคิดแรกถึงวันเปลี่ยน",
      "หา 4 แรง: push (ปัญหาเดิมผลัก), pull (ของใหม่ดึง), anxiety (กลัวอะไร), habit (อะไรรั้งไว้)",
      "เขียน job statement: เมื่อ [สถานการณ์] ฉันอยาก [ความคืบหน้า] เพื่อ [ผลลัพธ์]",
      "List ทุกวิธีที่คนใช้ทำ job นี้วันนี้ (รวม Excel/จ้างคน/ไม่ทำ) = competitive set จริง",
      "จัด feature/messaging ให้ตอบ push และลด anxiety ที่เจอ",
    ],
    checklist: [
      "Job statement มีสถานการณ์เจาะจง ไม่ใช่ความต้องการลอยๆ",
      "ข้อมูลมาจากคนที่เพิ่งตัดสินใจจริง (switch) ไม่ใช่คนทั่วไปคาดเดา",
      "ระบุครบ 4 แรง: push / pull / anxiety / habit",
      "Competitive set รวม non-app solutions",
      "Feature ใหม่ map กลับได้ว่ารับใช้ job ไหน",
    ],
    deliverables: ["Job statements + forces diagram ต่อ segment", "Competitive set ของแต่ละ job และ implication ต่อ roadmap/messaging"],
    goodExample:
      "Switch interview พบลูกค้าย้ายจาก Excel มาใช้ระบบบัญชีตอน 'โดนสรรพากรขอเอกสารย้อนหลัง' (push) ไม่ใช่เพราะ feature ใดๆ (pull) → เปลี่ยน messaging จาก 'ครบ จบในที่เดียว' เป็น 'พร้อมเสมอเมื่อสรรพากรขอ' — conversion จาก segment นี้เพิ่มชัดเจน",
    badExample:
      "ทีมเขียน job statement กันเองใน workshop ว่า 'user อยากบริหารการเงินอย่างชาญฉลาด' — ไม่มีสถานการณ์ ไม่มี struggling moment ใช้ตัดสินใจอะไรไม่ได้ และไม่ได้มาจาก switch จริงสักคน",
    commonMistakes: [
      "เขียน job จากในห้องประชุมแทนการสัมภาษณ์คน switch จริง",
      "Job กว้างเกิน ('อยากสะดวกสบาย') จนทุก feature อ้างได้หมด",
      "มองข้าม habit/anxiety แล้วงงว่าทำไมคนไม่ย้ายมาทั้งที่ของเราดีกว่า",
      "ใช้ JTBD แทน persona แบบแข็งตัว — สองเลนส์นี้ตอบคำถามต่างกัน ใช้ร่วมกันได้",
    ],
    relatedSlugs: ["user-interview", "user-problem", "persona-validation", "offer-clarity"],
    tags: ["jtbd", "strategy", "switch-interview"],
    prompts: [
      `You are a JTBD researcher. I will paste a switch-interview transcript (customer who recently adopted or abandoned a product).

Tasks:
1. Reconstruct the timeline: first thought → passive looking → active looking → deciding → consuming
2. Extract the four forces with quotes: push of the situation, pull of the new solution, anxiety of the new, habit of the present
3. Write the job statement: When [situation], I want to [progress], so I can [outcome] — situation must be specific
4. List everything this person used to do the job before (including spreadsheets, manual work, doing nothing)
5. Derive: which message would have reached them earlier, and which anxiety almost killed the switch

Output: timeline, forces table with quotes, job statement, competitive set, 3 actionable implications.`,
    ],
    visualDemo: "user-flow",
    demoData: {
      title: "Switch Timeline (JTBD)",
      steps: [
        { name: "First thought", detail: "ปิดงบช้าไป 3 วัน โดนเจ้านายทวง", risk: "Push เริ่มก่อตัว" },
        { name: "Passive looking", detail: "เห็นโฆษณาแต่ยังเฉยๆ (habit รั้ง)" },
        { name: "Active looking", detail: "สรรพากรขอเอกสารย้อนหลัง — push พุ่ง" },
        { name: "Deciding", detail: "กลัวย้ายข้อมูลไม่ครบ (anxiety)", risk: "จุดที่ messaging ต้องลด anxiety" },
        { name: "Switch", detail: "ทีม support ช่วย import ให้ฟรี = ตัวปิดดีล" },
      ],
    },
  },
  {
    id: "research-synthesis",
    slug: "research-synthesis",
    term: "Research Synthesis",
    category: "ux-research",
    icon: "🧮",
    level: "advanced",
    shortDescription: "กระบวนการแปลง data ดิบจาก research ให้เป็น insight ที่ทีมตัดสินใจตามได้ — ไม่ใช่แค่สรุปย่อ",
    fullDefinition:
      "Synthesis คือขั้นที่เปลี่ยน observation ('user 3 คน export ไป Excel') เป็น insight ('user ไม่เชื่อตัวเลขในระบบ จึงเอาไปตรวจเองข้างนอก — ปัญหาคือ trust ไม่ใช่ feature') ผ่านการ code data, จัด affinity map, หา pattern ข้าม participant และเขียนเป็น insight statement ที่มี evidence กำกับ — งานนี้คือครึ่งหนึ่งของมูลค่า research ที่มักถูกข้าม",
    whyItMatters:
      "Research ที่จบแค่ 'สรุปสิ่งที่แต่ละคนพูด' ทำให้ทีมหยิบ quote ที่ถูกใจไปยืนยันความเชื่อเดิม (cherry-picking) — insight ที่ผ่าน synthesis จริงจะอ่าน 'ทำไม' ที่อยู่ใต้พฤติกรรม และเปลี่ยนการตัดสินใจได้ทั้ง roadmap",
    whenToUse: [
      "หลังเก็บ data ทุก study — จองเวลา synthesis เท่ากับเวลาเก็บ data",
      "เมื่อมี research หลายชิ้นกระจัดกระจาย ไม่เคยถูกรวมเป็นภาพเดียว",
      "ก่อน present ต่อ stakeholder — แปลง observation เป็น so-what ที่ตัดสินใจได้",
    ],
    whenNotToUse: [
      "อย่ารอ synthesis ใหญ่ถ้าเจอ critical bug ระหว่างเทสต์ — ส่งให้ทีมแก้เลย",
      "Data 2-3 ชิ้นจาก quick test — debrief 30 นาทีพอ ไม่ต้องเปิด workshop เต็มรูปแบบ",
    ],
    howToApply: [
      "ทำภายใน 48 ชม. หลังเก็บ data เสร็จ ขณะ context ยังสด",
      "แตก data เป็น atomic notes (1 observation/quote ต่อ 1 note) พร้อม source",
      "Affinity mapping: จัดกลุ่มตามความหมาย ตั้งชื่อกลุ่มเป็นประโยค ไม่ใช่คำเดียว",
      "ยกระดับจาก observation → finding (pattern) → insight (ทำไม + so what)",
      "เขียน insight statement: [พฤติกรรม/pattern] เพราะ [แรงจูงใจ/บริบท] ส่งผลให้ [ความเสี่ยง/โอกาส]",
      "ทุก insight แนบ evidence (กี่คนจากกี่คน, quote, clip) และข้อเสนอ next action",
    ],
    checklist: [
      "ทุก insight มี evidence ระบุได้ว่ามาจากกี่ participant",
      "แยกชั้นชัด: observation / finding / insight / recommendation",
      "มี negative case — สิ่งที่คาดว่าจะเจอแต่ไม่เจอ ถูกรายงานด้วย",
      "Insight ตอบ 'ทำไม' ไม่ใช่แค่ 'อะไร'",
      "ทำร่วมกันอย่างน้อย 2 คนเพื่อกัน bias ของผู้วิเคราะห์เดี่ยว",
      "จบด้วย decision/action ไม่ใช่จบที่ report",
    ],
    deliverables: ["Insight report: insight statement + evidence + recommendation", "Affinity map / research repository ที่ค้นย้อนได้"],
    goodExample:
      "จาก 12 interviews: observation 'หลายคน export ไป Excel' ถูกขุดต่อจนได้ insight 'user ไม่เชื่อตัวเลข real-time เพราะเคยเจอ delay แล้วโดนเจ้านายตำหนิ — ต้องสร้าง trust ด้วย timestamp + audit log ไม่ใช่เพิ่ม chart' — เปลี่ยนทิศ roadmap ทั้ง quarter",
    badExample:
      "ส่ง slide 40 หน้าที่สรุปว่าแต่ละ participant พูดอะไรเรียงคน พร้อม quote เด็ดๆ — ทีม product หยิบ quote ที่ตรงกับสิ่งที่อยากทำอยู่แล้วไปอ้าง ส่วนที่เหลือไม่มีใครเปิดอีกเลย",
    commonMistakes: [
      "สรุปรายคนแทนการหา pattern ข้ามคน",
      "หยุดที่ observation ไม่ขุดถึง 'ทำไม'",
      "Synthesis คนเดียว — bias ไม่มีใครคาน",
      "ทิ้งช่วงหลายสัปดาห์จน context หาย แล้วตีความจาก note แห้งๆ",
      "รายงานยาวแต่ไม่มี recommendation ที่ตัดสินใจได้",
    ],
    relatedSlugs: ["user-interview", "usability-testing", "pain-point-analysis", "user-problem"],
    tags: ["synthesis", "affinity-mapping", "insights"],
    prompts: [
      `You are a senior UX researcher running synthesis. I will paste raw notes/quotes from multiple sessions (tagged by participant).

Tasks:
1. Split into atomic observations (one fact/quote each, keep participant tag)
2. Cluster by meaning; name each cluster as a full sentence
3. Promote: observation → finding (pattern with count, e.g., "7/12 participants...") → insight (the WHY underneath + so-what)
4. Write insight statements: [pattern] because [motivation/context], which means [risk/opportunity]
5. Report negative cases: what we expected but did not find
6. End with recommendations ranked by evidence strength × impact

Rules: every insight must cite participant count + at least one quote. Flag any cluster with evidence from only one participant as "weak — needs validation".`,
    ],
    visualDemo: "audit-report",
    demoData: {
      title: "Synthesis Layers",
      findings: [
        { severity: "high", issue: "Insight: user ไม่เชื่อตัวเลข real-time (7/12) เพราะเคยเจอ delay แล้วโดนตำหนิ", fix: "เพิ่ม timestamp + audit log ก่อนคิดเพิ่ม chart" },
        { severity: "medium", issue: "Finding: 5/12 ใช้มือถือทำงานหลักช่วงเย็น", fix: "จัด mobile review ให้ flow อนุมัติ" },
        { severity: "low", issue: "Negative case: ไม่มีใครใช้ feature เปรียบเทียบรายปี", fix: "ตั้งคำถามก่อนลงทุนต่อ" },
      ],
    },
  },
];
