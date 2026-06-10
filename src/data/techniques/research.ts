import type { Technique } from "@/types/playbook";

export const RESEARCH_TECHNIQUES: Technique[] = [
  {
    id: "tech-five-second-test",
    slug: "five-second-test",
    title: "5-Second Test",
    category: "UX Research",
    useCase: "ทดสอบว่าจอแรก/hero สื่อสารสิ่งสำคัญได้ใน 5 วินาทีไหม — ก่อนเปิดแคมเปญหรือ launch หน้าใหม่",
    difficulty: "basic",
    timeRequired: "ครึ่งวัน (เตรียม 1 ชม. + รัน 5-10 คน + สรุป 1-2 ชม.)",
    participants: "ผู้ทดสอบ 5-10 คนที่ใกล้เคียง target user, ผู้ดำเนินการ 1 คน",
    inputNeeded: [
      "ภาพหน้า/hero ที่จะทดสอบ (ขนาดจอจริงที่ traffic เข้า — มือถือถ้า ads)",
      "คำถาม 3-4 ข้อที่หน้านี้ต้องตอบได้ (ขายอะไร? ให้ใคร? ทำอะไรต่อ?)",
      "ผู้ทดสอบที่ไม่เคยเห็นหน้านี้มาก่อน",
    ],
    steps: [
      "กำหนด message ที่หน้าต้องสื่อ แล้วแปลงเป็นคำถาม เช่น 'เว็บนี้ขายอะไร', 'เหมาะกับใคร', 'คุณจะกดอะไรต่อ'",
      "เปิดภาพให้ผู้ทดสอบดู 5 วินาทีเป๊ะ แล้วปิด — ห้ามบอกล่วงหน้าว่าจะถามอะไร",
      "ถามคำถามที่เตรียมไว้ทันที บันทึกคำตอบแบบคำต่อคำ (อย่าสรุปแทนเขา)",
      "ถามปิดท้าย: 'จำอะไรได้อีกบ้าง' — สิ่งที่ถูกจำได้คือสิ่งที่เด่นจริง (อาจไม่ใช่สิ่งที่ทีมตั้งใจ)",
      "รันครบ 5-10 คน แล้วนับ: กี่คนตอบ 'ขายอะไร' ถูก, กี่คนรู้ว่าทำอะไรต่อ",
      "สรุปเป็น scorecard ต่อคำถาม + quote เด็ดที่สะท้อนปัญหา",
    ],
    output: "Scorecard: % ที่ตอบถูกต่อคำถาม + รายการสิ่งที่ถูกจำได้ (เทียบกับที่ตั้งใจสื่อ) + ข้อเสนอแก้ hero",
    decisionCriteria: [
      "≥80% ตอบ 'ขายอะไร' ถูก = ผ่าน / 50-80% = แก้ headline / <50% = รื้อจอแรก",
      "ถ้าสิ่งที่คนจำได้ไม่ใช่ value prop (เช่น จำแต่รูป stock) = visual แย่งซีน message",
      "ถ้าตอบ 'ทำอะไรต่อ' ไม่ได้ = CTA จมหรือไม่ชัด",
    ],
    exampleScenario:
      "ทีมจะเปิด ads ไป landing ใหม่ — รัน 5-second test กับ 8 คน: 7 คนจำรูปคนยิ้มได้แต่มี 2 คนตอบได้ว่าขายโปรแกรมบัญชี — ทีมเปลี่ยน hero เป็น screenshot product + headline บอกตรงๆ รันซ้ำ: 7/8 ตอบถูก ค่อยเปิดแคมเปญ",
    commonMistakes: [
      "ให้ดูเกิน 5 วินาที หรือบอกล่วงหน้าว่าจะถามอะไร — ผลปลอมทันที",
      "ใช้คนในทีม/คนที่รู้จัก product — เขาตอบจากความรู้เดิมไม่ใช่จากภาพ",
      "ทดสอบบน desktop ทั้งที่ traffic จริงเป็นมือถือ",
      "ถามนำ ('เห็นไหมว่าเราขายบัญชี?') แทนคำถามเปิด",
      "เก็บแต่คะแนน ไม่เก็บ quote — เสียหลักฐานที่ใช้โน้มน้าวทีมได้ดีสุด",
    ],
    template: `5-SECOND TEST PLAN
หน้าที่ทดสอบ: ___________  ขนาดจอ: [ ] 375px  [ ] desktop
Message ที่ต้องสื่อ: 1) ___ 2) ___ 3) ___
คำถามหลังดูภาพ:
  Q1 (ขายอะไร): ____________
  Q2 (ให้ใคร): ____________
  Q3 (ทำอะไรต่อ): ____________
  Q4 (จำอะไรได้อีก): เปิดเสมอ
ผู้ทดสอบ: ___ คน (เกณฑ์คัด: ____________)
ผลต่อคน: [ตอบถูก Q1? Q2? Q3?] + quote
เกณฑ์ผ่าน: Q1 ≥80% / Q3 ≥60%`,
    prompt: `You are a UX researcher. I ran a 5-second test on [PAGE] with [N] participants. The page was supposed to communicate: [INTENDED MESSAGES]. Raw answers per participant: [PASTE VERBATIM ANSWERS].

Analyze:
1. Score each intended message: how many participants received it (quote the answers that show it)
2. What was remembered INSTEAD of the intended messages — what's visually winning that shouldn't be
3. Diagnose the gap: headline wording, visual emphasis, or CTA clarity — which is the culprit per missed message
4. Propose hero fixes ranked by severity, including rewritten headline options
Be strict: vague answers ("it's some business thing") count as misses, not partial passes.`,
    relatedSlugs: ["five-second-test", "landing-page-review", "offer-clarity", "usability"],
    tags: ["first-impression", "landing-page", "message"],
  },
  {
    id: "tech-usability-testing",
    slug: "usability-testing",
    title: "Usability Testing",
    category: "UX Research",
    useCase: "ดู user จริงทำ task จริงเพื่อหาจุดที่ design ล้มเหลว — ก่อน launch flow สำคัญหรือเมื่อ metrics บอกว่ามีปัญหาแต่ไม่รู้ตรงไหน",
    difficulty: "intermediate",
    timeRequired: "1-2 สัปดาห์ (เตรียม 2-3 วัน + test 5 คน × 45 นาที + วิเคราะห์ 2-3 วัน)",
    participants: "User จริงหรือใกล้เคียง 5 คน, moderator 1, note-taker 1 (อย่าควบคนเดียวถ้าเลี่ยงได้)",
    inputNeeded: [
      "Prototype หรือ product จริงที่ทำ task ได้จบ",
      "Top tasks 3-5 ที่สำคัญต่อ product (จาก analytics/business)",
      "เกณฑ์คัดผู้ทดสอบ + ช่องทางหา",
    ],
    steps: [
      "เขียน task scenario เป็นสถานการณ์จริง ไม่ใช่คำสั่ง UI — 'คุณอยากได้เสื้อใส่ไปงานวันเสาร์ งบ 1,500' ไม่ใช่ 'กดปุ่ม filter'",
      "Pilot test กับคนในทีม 1 รอบ — แก้ scenario ที่กำกวมก่อนเจอ user จริง",
      "เปิด session: ย้ำว่าทดสอบ design ไม่ใช่ทดสอบเขา, ขอให้คิดดังๆ (think aloud), ทำผิดคือข้อมูลที่เราต้องการ",
      "ระหว่าง task: เงียบให้เป็น — เมื่อ user ติด ถาม 'คุณกำลังมองหาอะไรอยู่' ห้ามช่วย ห้ามใบ้",
      "บันทึกต่อ task: สำเร็จ/สำเร็จแบบติดขัด/ล้มเหลว + จุดที่ติด + quote",
      "หลังครบ 5 คน: รวมปัญหาที่เจอซ้ำ ≥2 คน จัด severity (block task? ทำช้า? แค่บ่น?)",
      "สรุปเป็น findings: ปัญหา × ความถี่ × severity × clip/quote + ข้อเสนอแก้",
    ],
    output: "Findings report: task success rate + ปัญหาเรียงตาม severity พร้อมหลักฐาน (quote/clip) + รายการแก้ที่จัดลำดับแล้ว",
    decisionCriteria: [
      "ปัญหาที่ user ≥2/5 เจอ = ปัญหาจริง ต้องแก้ / เจอ 1 คน = ติดตามดู",
      "Task สำคัญที่ success <80% = block release จนกว่าจะแก้",
      "แยก 'ทำไม่ได้' (severity สูง) จาก 'ทำได้แต่บ่น' (ปรับปรุง) — อย่าให้เสียงบ่นกลบจุด fail",
    ],
    exampleScenario:
      "ก่อน launch checkout ใหม่ ทีม test 5 คน — 4/5 หา 'แก้ที่อยู่จัดส่ง' ไม่เจอเพราะซ่อนใน accordion ที่ดูไม่เหมือนกดได้ — แก้เป็นปุ่ม 'แก้ไข' ชัดๆ ก่อน launch แทนที่จะรู้จาก ticket หลัง launch",
    commonMistakes: [
      "Scenario เป็นคำสั่ง UI ('กดปุ่ม X') — ได้การทดสอบว่า user อ่านออกไหม ไม่ใช่ design ใช้ได้ไหม",
      "Moderator ช่วย/ใบ้เมื่อ user ติด — ทำลายข้อมูลที่แพงที่สุดของ session",
      "ทดสอบกับคนในทีม/เพื่อนที่รู้ product — เจอปัญหาน้อยกว่าจริง",
      "เก็บ 20 ปัญหาแล้วรายงานหมดโดยไม่จัด severity — ทีมแก้เรื่องง่ายแทนเรื่องสำคัญ",
      "รอให้ทุกอย่าง 'พร้อม' ค่อย test — ยิ่งช้า ราคาการแก้ยิ่งแพง",
    ],
    template: `USABILITY TEST PLAN
เป้าหมาย: ____________  Product/prototype: ____________
Tasks (3-5):
  T1: [scenario สถานการณ์จริง] — success = ____________
  T2: ...
ผู้ทดสอบ: 5 คน เกณฑ์: ____________
Session (45 นาที): intro 5 / tasks 30 / debrief 10
บันทึกต่อ task: [สำเร็จ/ติดขัด/ล้มเหลว] จุดติด: ___ quote: ___
สรุป: ปัญหา × เจอกี่คน × severity (blocker/major/minor) × แก้ยังไง`,
    prompt: `You are a UX researcher analyzing usability test results. Tasks tested: [LIST]. Per-participant notes: [PASTE: task outcomes, stuck points, verbatim quotes].

Produce:
1. Task success table (participant × task: success / struggled / failed)
2. Issue list: every problem hit by ≥2 participants — description, frequency, severity (blocker = task impossible / major = significant struggle / minor = friction), supporting quotes
3. Issues hit by only 1 participant — separate watchlist, don't mix with confirmed findings
4. Root-cause hypotheses per top issue (label? placement? mental model mismatch?) and the fix to test
5. Release recommendation: which issues block launch vs ship-and-iterate
Do not soften failures into "opportunities" — report what failed plainly.`,
    relatedSlugs: ["usability-testing", "usability", "task-analysis", "research-synthesis"],
    tags: ["testing", "moderated", "evidence"],
  },
  {
    id: "tech-first-click-test",
    slug: "first-click-test",
    title: "First Click Test",
    category: "UX Research",
    useCase: "ทดสอบว่า user คลิกแรกถูกที่ไหม — คลิกแรกถูกแล้วโอกาสทำ task สำเร็จสูงขึ้นมาก ใช้ตัดสิน navigation/layout ก่อน build จริง",
    difficulty: "basic",
    timeRequired: "2-3 วัน (เตรียม 0.5 วัน + รัน 10-15 คน remote + วิเคราะห์ 0.5 วัน)",
    participants: "ผู้ทดสอบ 10-15 คน (remote ได้ ไม่ต้อง moderate), ผู้วิเคราะห์ 1",
    inputNeeded: [
      "ภาพหน้าจอ (static ก็ได้ — ไม่ต้องมี prototype)",
      "Task คำถามเดียวต่อภาพ: 'ถ้าจะ ___ คุณจะคลิกตรงไหน'",
      "เครื่องมือเก็บจุดคลิก (Maze/UsabilityHub หรือเก็บมือก็ได้)",
    ],
    steps: [
      "เลือก task ที่สำคัญและสงสัยว่าคนจะหลง เช่น 'ขอใบกำกับภาษี' บนหน้า account",
      "เตรียมภาพหน้าจอจริง (ขนาดอุปกรณ์จริง) — หนึ่งภาพต่อหนึ่ง task อย่ายัดหลาย task ในภาพเดียว",
      "ตั้งคำถาม: 'ถ้าคุณต้องการ [task] คุณจะคลิก/แตะตรงไหนเป็นที่แรก' + ขอเหตุผลสั้นๆ หลังคลิก",
      "รัน 10-15 คน เก็บ: จุดที่คลิก, เวลาที่ใช้ตัดสินใจ, เหตุผล",
      "Plot จุดคลิกบนภาพ (heatmap หรือ mark มือ) — ดูการกระจุก/กระจาย",
      "วิเคราะห์: % คลิกถูกเป้า, จุดผิดยอดนิยม (ผิดที่เดียวกัน = label/ตำแหน่งหลอก), เวลาที่ใช้",
    ],
    output: "Click map ต่อ task + % first-click ถูก + จุดผิดยอดนิยมพร้อมเหตุผลจาก user + คำตัดสิน layout/label",
    decisionCriteria: [
      "≥70% คลิกถูก = ผ่าน / 40-70% = ปรับ label หรือตำแหน่ง / <40% = โครงสร้างผิด คิดใหม่",
      "คลิกผิดกระจุกที่เดียวกัน = element นั้น 'หลอก' — เป็น insight ที่ต้องแก้ ไม่ใช่ user โง่",
      "ใช้เวลาตัดสินใจนาน (>10 วิ) ทั้งที่คลิกถูก = ถูกแบบเดาๆ ไม่ใช่ถูกแบบมั่นใจ",
    ],
    exampleScenario:
      "ทีมเถียงกันว่า 'ดาวน์โหลดรายงาน' ควรอยู่เมนูไหน — ทำ first click test 2 layout กับ 12 คน: layout A คลิกถูก 33% (ครึ่งหนึ่งไปคลิก icon printer), layout B ถูก 83% — จบการเถียงด้วยข้อมูล 2 วัน แทนการเดาแล้วแก้หลัง launch",
    commonMistakes: [
      "ถามหลาย task บนภาพเดียวต่อเนื่อง — คลิกหลังๆ ปนเปื้อนจากการเรียนรู้ภาพ",
      "ใช้ภาพ lo-fi เกินไปจน user ตัดสินจากความเดาไม่ใช่ design จริง",
      "นับแค่ถูก/ผิด ไม่ดูว่าผิดไปไหน — จุดผิดยอดนิยมคือ insight หลักของ test นี้",
      "ไม่ถามเหตุผลหลังคลิก — เสียคำอธิบายว่าทำไม element นั้นดึงดูด",
    ],
    template: `FIRST CLICK TEST
Task: 'ถ้าคุณต้องการ ____________ คุณจะคลิกตรงไหนเป็นที่แรก'
ภาพ: [หน้า + ขนาดจอ] เป้าที่ถูก: ____________
ผู้ทดสอบ: ___ คน
เก็บต่อคน: จุดคลิก (x,y หรือ element) / เวลาตัดสินใจ / เหตุผล 1 ประโยค
วิเคราะห์: % ถูก ___ / จุดผิดอันดับ 1: ___ (กี่คน: ___) เหตุผลที่เขาให้: ___
ตัดสิน: [ ] ผ่าน ≥70%  [ ] แก้ label/ตำแหน่ง  [ ] รื้อโครง`,
    prompt: `You are a UX researcher analyzing first-click test results. Task: "[TASK]". Correct target: [ELEMENT]. Results: [PASTE: per participant — what they clicked, decision time, stated reason].

Analyze:
1. Success rate + verdict (≥70% pass / 40-70% fix labels-placement / <40% structural)
2. Wrong-click clusters: which wrong element attracted the most clicks and WHY (use their stated reasons) — what promise does that element seem to make?
3. Confidence read: long decision times even on correct clicks = guessing, not finding
4. Recommendation: specific label rewrites or placement moves, and whether a follow-up test is needed
The popular wrong answer is the headline finding — lead with it.`,
    relatedSlugs: ["navigation-review", "information-architecture", "usability-testing", "cta-hierarchy"],
    tags: ["navigation", "click-test", "unmoderated"],
  },
  {
    id: "tech-user-interview",
    slug: "user-interview",
    title: "User Interview",
    category: "UX Research",
    useCase: "เข้าใจปัญหา บริบท และวิธีคิดของ user จากปากเขาเอง — ก่อนออกแบบ solution หรือเมื่อ data บอก 'อะไร' แต่ไม่บอก 'ทำไม'",
    difficulty: "intermediate",
    timeRequired: "1-2 สัปดาห์ (guide 1 วัน + สัมภาษณ์ 5-8 คน × 45 นาที + สังเคราะห์ 2-3 วัน)",
    participants: "User ตรง segment 5-8 คน, ผู้สัมภาษณ์ 1, note-taker 1 (แนะนำ)",
    inputNeeded: [
      "Research question ใหญ่ 1-2 ข้อที่อยากตอบ (ไม่ใช่ 20 ข้อ)",
      "เกณฑ์คัดผู้ให้สัมภาษณ์ + incentive",
      "Interview guide (หัวข้อ + คำถามเปิด ไม่ใช่ script ตายตัว)",
    ],
    steps: [
      "ตั้ง research question แล้วแปลงเป็นหัวข้อสนทนา — ถามถึง 'พฤติกรรมที่ผ่านมา' ไม่ใช่ 'ความเห็นต่ออนาคต'",
      "เขียนคำถามเปิด: 'เล่าครั้งล่าสุดที่คุณ___ให้ฟังหน่อย' แทน 'คุณชอบ___ไหม' — เรื่องจริง > ความเห็น",
      "เปิดบทสนทนา: สร้างความสบาย ขออัดเสียง บอกว่าไม่มีคำตอบผิด",
      "ฟัง 80% พูด 20% — ใช้ 'แล้วยังไงต่อ?', 'ทำไมถึงทำแบบนั้น?', เงียบรอ (คนจะเติมเอง)",
      "ขุดลึกเมื่อเจอของจริง: workaround ที่เขาสร้างเอง, จังหวะหงุดหงิด, สิ่งที่เขาบอกว่า 'ก็ทนๆ เอา'",
      "จดแยก: สิ่งที่เขา 'ทำ' (ข้อเท็จจริง) vs สิ่งที่เขา 'บอกว่าจะทำ/อยากได้' (เชื่อได้น้อยกว่ามาก)",
      "หลังครบทุกคน: ทำ synthesis (affinity mapping) หา pattern ข้ามคน — ห้ามสรุปจากคนเดียวที่พูดเก่ง",
    ],
    output: "Insight themes พร้อม quote สนับสนุน + pain point ranking + workaround inventory + คำถามใหม่ที่เกิดขึ้น",
    decisionCriteria: [
      "Pattern ที่เจอ ≥3/5 คน = theme จริง / เจอคนเดียว = anecdote เก็บไว้ดู",
      "Workaround ที่ user สร้างเอง = หลักฐาน demand ที่แข็งแรงกว่าคำพูด 'อยากได้' สิบเท่า",
      "ถ้าคำตอบเริ่มซ้ำจนไม่มีอะไรใหม่ (saturation) = พอแล้ว ไม่ต้องเพิ่มคน",
    ],
    exampleScenario:
      "ทีมจะสร้าง feature export รายงาน — สัมภาษณ์ 6 คนพบ 4 คน screenshot หน้าจอส่งไลน์หาเจ้านายทุกเช้า (workaround) เพราะรายงานจริง 'เปิดช้าและเยอะเกิน' — insight: ปัญหาไม่ใช่ไม่มี export แต่คือไม่มี 'สรุปสั้นส่งต่อได้' — เปลี่ยนทิศ feature ก่อนเขียนโค้ดบรรทัดแรก",
    commonMistakes: [
      "ถามความเห็นต่ออนาคต ('ถ้ามี feature นี้จะใช้ไหม') — คำตอบสุภาพไร้ค่า ถามพฤติกรรมที่ผ่านมาแทน",
      "ถามนำ ('ปัญหานี้น่ารำคาญใช่ไหม') — ได้คำตอบที่อยากได้ยิน ไม่ใช่ความจริง",
      "พูดมากกว่าฟัง / รีบเติมความเงียบ — ความเงียบคือเครื่องมือขุดที่ดีที่สุด",
      "Pitch product ระหว่างสัมภาษณ์ — เปลี่ยนโหมดจาก research เป็น sales ข้อมูลเสียทันที",
      "สรุปจาก quote คนเดียวที่พูดตรงใจทีม — confirmation bias ในคราบ research",
    ],
    template: `INTERVIEW GUIDE
Research question: ____________
ผู้ให้สัมภาษณ์: ___ คน เกณฑ์: ____________
เปิด (5 นาที): แนะนำตัว + ขออัดเสียง + 'ไม่มีคำตอบถูกผิด'
บริบท (10): 'เล่าวันทำงานปกติ...' / 'ครั้งล่าสุดที่ [กิจกรรม] เป็นยังไง'
เจาะลึก (25): 'เล่าครั้งที่ [ปัญหา] ล่าสุด' → 'แล้วทำยังไงต่อ' → 'ทำไม'
  สังเกต: workaround / จุดหงุดหงิด / 'ก็ทนเอา'
ปิด (5): 'มีอะไรที่ผมไม่ได้ถามแต่คุณว่าสำคัญไหม'
หลังจบทันที: top 3 สิ่งที่ได้ยิน + สิ่งที่ surprise`,
    prompt: `You are a UX researcher. Help me prepare and then analyze user interviews.

PREP MODE — my research question: [QUESTION]. Target users: [WHO]. Draft an interview guide: opening, context questions, deep-dive questions — all asking about PAST BEHAVIOR ("tell me about the last time...") never future opinions ("would you use..."); include follow-up probes and what signals to dig into (workarounds, resignation, frustration).

ANALYSIS MODE — interview notes: [PASTE PER PARTICIPANT]. Produce: themes appearing in ≥3 participants (with quotes), single-participant anecdotes (separate watchlist), workaround inventory (each = unmet need evidence), what-they-do vs what-they-say contradictions, and the top 3 insights with design implications. Flag where my notes show leading questions so I can discount those answers.`,
    relatedSlugs: ["user-interview", "pain-point-analysis", "jobs-to-be-done", "research-synthesis"],
    tags: ["interview", "qualitative", "discovery"],
  },
  {
    id: "tech-research-synthesis",
    slug: "research-synthesis",
    title: "Research Synthesis",
    category: "UX Research",
    useCase: "แปลงข้อมูลดิบจาก research (interview, test, survey) ให้เป็น insight ที่ทีมตัดสินใจได้ — ขั้นที่ research ส่วนใหญ่ตายเพราะข้ามไป",
    difficulty: "intermediate",
    timeRequired: "2-4 วัน หลังเก็บข้อมูลเสร็จ (อย่าทิ้งช่วงเกิน 1 สัปดาห์ — ความจำ context หาย)",
    participants: "คนที่อยู่ใน session 2-4 คน (designer, PM, researcher) — synthesis คนเดียว = bias คนเดียว",
    inputNeeded: [
      "ข้อมูลดิบครบ: notes, บันทึกเสียง/transcript, ผล task, quotes",
      "Research question เดิมที่ตั้งไว้ (กันหลงประเด็น)",
      "พื้นที่ทำงานร่วม (Miro/FigJam/ผนังจริง + sticky notes)",
    ],
    steps: [
      "แตกข้อมูลเป็นหน่วยเล็ก: 1 observation = 1 note (สิ่งที่เห็น/ได้ยินจริง ไม่ใช่การตีความ) พร้อม tag ว่ามาจากใคร",
      "Affinity mapping: จัดกลุ่ม note ที่พูดเรื่องเดียวกัน — ให้กลุ่มโผล่จากข้อมูล ไม่ใช่ตั้งกล่องรอแล้วยัด",
      "ตั้งชื่อกลุ่มเป็นประโยคที่มีความหมาย ('user ไม่เชื่อราคาจนกว่าจะเห็นรวม VAT') ไม่ใช่หัวข้อกว้าง ('ราคา')",
      "นับน้ำหนัก: theme นี้มาจากกี่คน — แยก pattern (≥3) จาก anecdote (1-2)",
      "เขียน insight ต่อ theme: ข้อค้นพบ + หลักฐาน (quotes/ตัวเลข) + 'แปลว่าอะไรต่อ design' (so what)",
      "จัดลำดับ insight ตาม impact ต่อ user × ความถี่ — แล้วแปลงเป็น recommendation ที่ action ได้",
      "เขียน 1-pager: top insights + หลักฐาน + ข้อเสนอ — ไม่ใช่ slide 40 หน้าที่ไม่มีใครอ่าน",
    ],
    output: "Insight 1-pager: themes พร้อมหลักฐานและน้ำหนัก + recommendations จัดลำดับ + คำถามที่ยังเปิดอยู่",
    decisionCriteria: [
      "Insight ที่ดีต้องมี 3 ส่วนครบ: ข้อค้นพบ + หลักฐาน + design implication — ขาดอันใดอันหนึ่ง = ยังไม่เสร็จ",
      "Theme จาก ≥3 แหล่ง = ใช้ตัดสินใจได้ / 1-2 = ต้องหาหลักฐานเพิ่มก่อน act",
      "ถ้า insight ไม่เปลี่ยนการตัดสินใจอะไรเลย = ตัดออกจาก 1-pager (เก็บใน appendix)",
    ],
    exampleScenario:
      "หลังสัมภาษณ์ 6 คน + usability test 5 คน ทีมเอา note 180 ใบขึ้น FigJam จัดกลุ่มครึ่งวัน — พบ theme ใหญ่ 'ความกลัวกดผิดแล้วแก้ไม่ได้' โผล่จาก 7/11 คนข้ามทั้งสอง study — นำไปสู่การเพิ่ม undo + confirm เฉพาะจุดอันตราย ซึ่งไม่มีใครเคยขอตรงๆ แต่ทุก data ชี้ไปทางนั้น",
    commonMistakes: [
      "ข้าม synthesis — เอา quote ที่จำได้ไปเล่าในห้องประชุม = ตัดสินใจจากความจำเลือกข้าง",
      "ตั้งกล่องหัวข้อก่อนแล้วยัด note ลง — ได้สิ่งที่คาดไว้แล้ว ไม่ได้สิ่งที่ข้อมูลบอก",
      "ปนการตีความกับข้อสังเกต ('เขาสับสน' คือการตีความ — 'เขาคลิกย้อน 3 รอบ' คือข้อสังเกต)",
      "ทำคนเดียว — pattern ที่เห็นคือ bias ของคนคนเดียว",
      "จบที่ findings ไม่แปลงเป็น 'แล้วต้องทำอะไร' — ทีมอ่านแล้ววางลง",
    ],
    template: `SYNTHESIS WORKSHEET
แหล่งข้อมูล: [interviews ___ คน / tests ___ คน / survey n=___]
ขั้น 1: แตก observation (1 note = 1 ข้อสังเกต + tag คน)
ขั้น 2: จัดกลุ่ม → ตั้งชื่อเป็นประโยค
THEME: '____________'
  หลักฐาน: มาจาก ___/___  คน | quotes: ___
  So what (design implication): ____________
  Action: ____________ (owner: ___)
จัดลำดับ: impact × ความถี่
คำถามที่ยังเปิด: ____________ (วิธีหาคำตอบ: ___)`,
    prompt: `You are a UX researcher running synthesis. Raw data: [PASTE: interview notes / test observations / survey verbatims — tagged by participant]. Original research question: [QUESTION].

Process:
1. Break into atomic observations (fact-level, strip interpretations — flag notes that are already interpretations)
2. Cluster into themes emerging from the data; name each theme as a meaningful sentence, not a topic word
3. Weight: participants per theme — separate patterns (≥3) from anecdotes
4. Per theme: insight statement + supporting quotes + design implication (so-what) + recommended action
5. Rank by user impact × frequency; list open questions the data cannot answer
Output: a 1-page brief (themes table + top 3 recommendations) + appendix of anecdotes worth watching. Do not let one articulate participant dominate — check theme sources.`,
    relatedSlugs: ["research-synthesis", "pain-point-analysis", "user-interview", "usability-testing"],
    tags: ["synthesis", "affinity-mapping", "insight"],
  },
  {
    id: "tech-competitive-benchmark",
    slug: "competitive-ux-benchmark",
    title: "Competitive UX Benchmark",
    category: "UX Research",
    useCase: "เทียบ UX ของคู่แข่งบน task เดียวกันอย่างเป็นระบบ — หา pattern ที่ตลาดสอน user ไว้แล้ว และช่องที่เราทำได้ดีกว่า",
    difficulty: "basic",
    timeRequired: "3-5 วัน (เลือก task + เดิน 3-5 คู่แข่ง + สรุป)",
    participants: "Designer/PM 1-2 คน (สองคนเดินแยกแล้วเทียบ ลด bias)",
    inputNeeded: [
      "Task หลัก 2-3 อันที่จะเทียบ (เดียวกันทุกเจ้า)",
      "คู่แข่ง 3-5 ราย (ตรง 2-3 + ต่างอุตสาหกรรมที่ทำ task นี้เก่ง 1-2)",
      "เกณฑ์เทียบที่ตั้งก่อนเริ่ม (จำนวน step, ข้อมูลที่ขอ, จุดเด่น/สะดุด)",
    ],
    steps: [
      "เลือก task ที่ user เทียบเรากับคู่แข่งจริง เช่น 'สมัครจนใช้งานครั้งแรกได้' หรือ 'หาราคาและเงื่อนไข'",
      "ตั้งเกณฑ์ก่อนเดิน: นับ step, นับ field, จุดที่ต้องหยุดคิด, เวลาโดยประมาณ — เกณฑ์เดียวกันทุกเจ้า",
      "เดิน task จริงบนทุกเจ้า (สมัครจริง จ่ายจริงถ้าจำเป็น) — capture ทุกหน้าจอ",
      "จดต่อเจ้า: ทางที่เขาเลือก, สิ่งที่ทำดีจนน่าขโมย, สิ่งที่สะดุด, convention ที่ทุกเจ้าทำเหมือนกัน",
      "ทำตารางเทียบ: เจ้า × เกณฑ์ — ใส่ตัวเลขที่นับได้ ไม่ใช่ความรู้สึก",
      "แยกบทเรียน: convention ที่ควรตาม (user ถูกสอนมาแล้ว) / จุดที่ทุกเจ้าแย่ (โอกาสเรา) / ของดีที่ปรับใช้ได้",
    ],
    output: "ตารางเทียบ task × คู่แข่ง (ตัวเลขนับได้ + screenshots) + บทเรียน 3 กลุ่ม: convention ต้องตาม / ช่องว่างโอกาส / ไอเดียที่ขโมยมาปรับ",
    decisionCriteria: [
      "Pattern ที่ ≥80% ของตลาดใช้ = convention — แหกได้ต่อเมื่อมีเหตุผลแรงจริง (user ถูก train มาแล้ว)",
      "จุดที่ทุกเจ้าทำแย่เหมือนกัน = differentiator ที่เป็นไปได้ของเรา",
      "อย่าลอก feature เพราะคู่แข่งมี — ดูว่ามัน serve task ของ user เราไหมก่อน",
    ],
    exampleScenario:
      "ก่อนรื้อ onboarding ทีมเดิน signup ของคู่แข่ง 4 เจ้า — พบทุกเจ้าให้เริ่มใช้ได้ก่อนยืนยันอีเมล (convention) แต่ทุกเจ้าทิ้ง user ลงหน้า dashboard เปล่า (ช่องว่าง) — ทีมตาม convention เรื่องอีเมล + ทำ guided first task เป็น differentiator",
    commonMistakes: [
      "เทียบ feature list แทนการเดิน task จริง — ได้ checklist ไม่ได้ประสบการณ์",
      "เทียบเฉพาะหน้าตา ('เขาสวยกว่า') โดยไม่นับสิ่งที่นับได้",
      "เลือกคู่แข่งตรงสายอย่างเดียว — เจ้านอกอุตสาหกรรมที่ทำ task เดียวกันเก่งมักให้ไอเดียดีสุด",
      "สรุปว่า 'ต้องมีเหมือนเขา' ทุกอย่าง — copy ทั้ง strengths และ mistakes ของเขามาด้วย",
    ],
    template: `COMPETITIVE BENCHMARK
Task ที่เทียบ: ____________
คู่แข่ง: 1.___ 2.___ 3.___ (+นอกสาย: ___)
เกณฑ์ (ตั้งก่อนเดิน): steps / fields / จุดสะดุด / เวลา / จุดเด่น
ตาราง: [เจ้า × เกณฑ์ ใส่ตัวเลข + screenshot]
บทเรียน:
  Convention (≥80% ทำเหมือนกัน): ___ → เราควรตาม
  ช่องว่าง (ทุกเจ้าแย่): ___ → โอกาสเรา
  ขโมยมาปรับ: ___ (จากเจ้า: ___)`,
    prompt: `You are a UX strategist analyzing a competitive benchmark. Task benchmarked: [TASK]. Per-competitor walkthrough notes: [PASTE: steps counted, fields, friction points, standout moments, screenshots described].

Produce:
1. Comparison table: competitor × measurable criteria (steps, fields, time, friction count)
2. CONVENTIONS: patterns ≥80% share — these trained user expectations; flag any our current design violates
3. SHARED WEAKNESSES: where everyone fails the same way — ranked differentiation opportunities
4. STEAL-AND-ADAPT: specific moments worth adapting (not copying) — with what to change for our context
5. Anti-recommendations: competitor features that look attractive but don't serve OUR users' task
Keep it task-grounded — no feature-list envy.`,
    relatedSlugs: ["competitive-ux-review", "onboarding-flow", "navigation-review"],
    tags: ["benchmark", "competitive", "market"],
  },
  {
    id: "tech-task-flow-analysis",
    slug: "task-flow-analysis",
    title: "Task Flow Analysis",
    category: "UX Research",
    useCase: "แตก task ของ user เป็นขั้นตอน + จุดตัดสินใจ เพื่อเห็นว่า flow จริงซับซ้อนแค่ไหนก่อนออกแบบ/รื้อ UI",
    difficulty: "intermediate",
    timeRequired: "2-4 วัน ต่อ task ใหญ่",
    participants: "Designer 1 + คนที่รู้ระบบจริง (dev/support/user ตัวจริง)",
    inputNeeded: [
      "Task ที่จะวิเคราะห์ + จุดเริ่ม/จุดจบที่ชัด",
      "ข้อมูลการทำจริง: ดู user ทำ, session recordings, หรือถาม support",
      "ระบบปัจจุบัน (ถ้ามี) เพื่อ map ทางเดินจริง",
    ],
    steps: [
      "นิยาม task จากมุม user: เริ่มจาก trigger อะไร (ไม่ใช่จากหน้า login) จบเมื่อ user ได้อะไร",
      "แตกเป็นขั้น: action ที่ทำ / ข้อมูลที่ต้องมีในมือ / การตัดสินใจที่ต้องตัด — ทุก diamond ใน flow คือภาระคิด",
      "Map เส้นทางจริงที่สังเกตได้ ไม่ใช่เส้นทางในอุดมคติของทีม — รวม loop ย้อนกลับและทางหนีที่ user ใช้จริง",
      "ทำเครื่องหมายจุดเสี่ยง: ขั้นที่ต้องสลับไปหาข้อมูลที่อื่น, ขั้นที่รอนาน, ขั้นที่ผิดแล้วย้อนแพง",
      "นับและตั้งคำถามทุกขั้น: ตัดได้ไหม (ระบบทำแทน), รวมได้ไหม, เลื่อนได้ไหม, default ได้ไหม",
      "วาด flow เป้าหมายที่สั้นลง + ระบุว่าแต่ละขั้นที่หายไปหายเพราะอะไร",
    ],
    output: "Task flow diagram ปัจจุบัน (ขั้น + decision + จุดเสี่ยง) + flow เป้าหมาย + ตารางขั้นที่ตัด/รวม/เลื่อนพร้อมเหตุผล",
    decisionCriteria: [
      "ขั้นที่ระบบรู้คำตอบอยู่แล้วแต่ยังถาม user = ตัดทันที (derive/default)",
      "Decision point ที่ user ตัดสินใจผิดบ่อย = จุดออกแบบใหม่อันดับแรก",
      "ขั้นที่ user ต้องออกนอกระบบไปหาข้อมูล = จุดเสี่ยงหลุดสูงสุด — เอาข้อมูลมาให้ในที่",
    ],
    exampleScenario:
      "วิเคราะห์ task 'เบิกค่าใช้จ่าย' พบ 14 ขั้น 5 decision — user ต้องสลับไปดูรหัสโปรเจกต์ในอีเมล (จุดหลุดอันดับ 1 จาก recording) — flow ใหม่: ระบบ suggest โปรเจกต์จากปฏิทิน, ขั้นเหลือ 7, ticket 'เบิกไม่สำเร็จ' ลดครึ่ง",
    commonMistakes: [
      "Map flow ตามที่ทีมออกแบบไว้ ไม่ใช่ตามที่ user เดินจริง — ได้แผนที่เมืองที่ไม่มีอยู่",
      "เริ่ม flow ที่หน้าแรกของแอป ทั้งที่ task จริงเริ่มก่อนหน้านั้น (ในอีเมล, ในกระดาษ)",
      "นับแต่ขั้นกด ไม่นับภาระคิด — 3 ขั้นที่ต้องตัดสินใจยากแย่กว่า 6 ขั้น next-next-next",
      "ทำ diagram สวยแล้วจบ — ไม่แปลงเป็นรายการตัด/รวม/เลื่อนที่ act ได้",
    ],
    template: `TASK FLOW ANALYSIS
Task: ____________ Trigger เริ่ม: ___ จบเมื่อ: ___
ขั้นปัจจุบัน (map จากการสังเกตจริง):
  #: [action] | ข้อมูลที่ต้องมี: ___ | ตัดสินใจ: ___ | เสี่ยง: ___
จุดเสี่ยงรวม: สลับ context: ___ จุด / decision ยาก: ___ / ย้อนแพง: ___
คำถามต่อขั้น: ตัด? รวม? เลื่อน? default?
Flow เป้าหมาย: ___ ขั้น (จาก ___)
ขั้นที่หาย: # ___ เพราะ [ระบบทำแทน/รวมกับ #/เลื่อนไปหลัง value]`,
    prompt: `You are a UX analyst doing task flow analysis. Task: [NAME], starts when [TRIGGER], ends when [USER OUTCOME]. Observed current flow: [PASTE: steps as actually performed, including back-loops, app-switching, waiting].

Analyze:
1. Restate the flow as steps × (action / info needed in hand / decision required) — count each
2. Risk-mark: context switches (user leaves to fetch info), expensive-to-undo decisions, long waits
3. Per step apply the reduction ladder: ELIMINATE (system already knows it) / COMBINE / DEFER (after value) / DEFAULT (smart prefill) — verdict + reasoning each
4. Redesigned flow: new step count, what each removed step's burden became
5. The riskiest remaining decision point and how design can support it (better info at the moment, preview, undo)
Cognitive load counts as steps — flag heavy decisions even where clicks are few.`,
    relatedSlugs: ["task-analysis", "user-flow", "friction-reduction", "user-goal"],
    tags: ["task-flow", "analysis", "simplification"],
  },
  {
    id: "tech-jtbd-interview",
    slug: "jtbd-interview",
    title: "Jobs-to-be-Done Interview",
    category: "UX Research",
    useCase: "ขุดหา 'งาน' ที่ user จ้าง product ทำจริงๆ ผ่านการสัมภาษณ์เจาะการตัดสินใจซื้อ/เปลี่ยนที่เพิ่งเกิด — ใช้ตั้งทิศ product/positioning",
    difficulty: "advanced",
    timeRequired: "2-3 สัปดาห์ (หาคนที่เพิ่งซื้อ/เปลี่ยน + สัมภาษณ์ 5-8 × 60 นาที + สังเคราะห์)",
    participants: "คนที่เพิ่งตัดสินใจซื้อ/เลิก/เปลี่ยนจริงใน 90 วัน 5-8 คน, ผู้สัมภาษณ์ที่ฝึกวิธีนี้มา",
    inputNeeded: [
      "รายชื่อคนที่เพิ่งซื้อ/churn/สลับมาจากคู่แข่งจริงๆ (ไม่ใช่ user ทั่วไป)",
      "Timeline framework: first thought → passive looking → active looking → ตัดสินใจ",
      "Incentive ที่สมน้ำสมเนื้อกับ 60 นาที",
    ],
    steps: [
      "คัดคนที่ 'เพิ่งตัดสินใจจริง' — ความจำการตัดสินใจสดใน 90 วันเท่านั้นที่เชื่อได้",
      "สัมภาษณ์ย้อน timeline เหมือนสืบสวน: 'วันที่กดซื้อ เกิดอะไรขึ้นวันนั้น' แล้วถอยกลับไปหา first thought",
      "ขุดหา 4 แรง: push (อะไรผลักจากของเดิม), pull (อะไรดูดมาของใหม่), anxiety (อะไรทำให้ลังเล), habit (อะไรรั้งไว้กับของเดิม)",
      "เจาะ moment จริง: 'ตอนนั้นอยู่ที่ไหน', 'พูดกับใคร', 'เปิดกี่เจ้าเทียบ' — รายละเอียดบริบทคือทองคำ",
      "หา job statement: เขาจ้าง product ทำงานอะไร ('ช่วยให้ดูพร้อมต่อหน้าลูกค้า' ไม่ใช่ 'ทำ invoice')",
      "ข้ามเคส: หา pattern ของ push/pull/anxiety ที่ซ้ำ — นั่นคือคันโยกของ positioning และ onboarding",
    ],
    output: "Job statements + แผนภาพ 4 แรง (push/pull/anxiety/habit) พร้อมหลักฐาน + implication ต่อ positioning, onboarding, feature priority",
    decisionCriteria: [
      "Job ที่ดีอธิบายได้ว่าทำไมคนจ่าย — ถ้า statement ฟังแล้วเป็น feature ('อยากได้ report') แปลว่ายังขุดไม่ถึง",
      "Push แรงกว่า pull ในเคสส่วนใหญ่ = การตลาดควรพูดถึงปัญหาเดิม ไม่ใช่ feature ใหม่",
      "Anxiety ที่ซ้ำ ≥3 คน = สิ่งที่ onboarding/landing ต้องปลดล็อกอันดับแรก",
    ],
    exampleScenario:
      "สัมภาษณ์ 6 คนที่เพิ่งสมัคร — พบ push เดียวกัน 5 คน: 'โดนเจ้านายทักเรื่องตัวเลขผิดต่อหน้าทีม' (ไม่ใช่ 'อยากได้ระบบบัญชี') — job จริงคือ 'อย่าให้ฉันดูไม่เป็นมืออาชีพ' — ทีมเปลี่ยน landing จาก feature list เป็น 'ตัวเลขถูกทุกครั้งที่เจ้านายถาม' conversion ขึ้นชัด",
    commonMistakes: [
      "สัมภาษณ์ user ทั่วไปแทนคนที่เพิ่งตัดสินใจ — ได้ความเห็น ไม่ได้เรื่องจริงของการซื้อ",
      "ถามอนาคต/สมมุติ ('ถ้ามี X จะซื้อไหม') — JTBD ใช้เฉพาะอดีตที่เกิดจริง",
      "พอใจกับคำตอบ feature-level ('ซื้อเพราะมี report') — ต้องขุดต่อว่า report เอาไปทำอะไรให้ชีวิตเขา",
      "ข้าม anxiety/habit — รู้แต่ทำไมมา ไม่รู้ทำไมคนอื่นที่เหมือนกันไม่มา",
      "ทำโดยไม่ฝึก — การสัมภาษณ์แบบนี้ยากกว่า interview ปกติ ลองกับเคสในทีมก่อน",
    ],
    template: `JTBD INTERVIEW (60 นาที)
ผู้ให้สัมภาษณ์: เพิ่ง [ซื้อ/เลิก/สลับ] เมื่อ: ___ (≤90 วัน)
TIMELINE ย้อนสืบ:
  ตัดสินใจ: 'วันที่ซื้อ เล่าวันนั้นให้ฟัง' ___
  Active looking: 'เทียบกี่เจ้า เทียบยังไง' ___
  Passive: 'เริ่มรู้สึกว่าของเดิมไม่ไหวตอนไหน' ___
  First thought: 'ครั้งแรกสุดที่คิดว่าต้องหาอะไรใหม่' ___
4 แรง: PUSH ___ / PULL ___ / ANXIETY ___ / HABIT ___
Job statement: 'จ้างให้ช่วย ____________ เพื่อให้ฉัน ____________'`,
    prompt: `You are a JTBD researcher analyzing switch interviews. Per-interview timeline notes: [PASTE: first thought → passive → active → decision, with verbatim quotes].

Analyze:
1. Per interview: extract the four forces — push (from old way), pull (toward new), anxiety (hesitation), habit (inertia) — with quotes
2. Across interviews: recurring forces (≥3 people) vs one-offs
3. Job statements: what was each person really hiring the product to do — written as life-outcome, not feature ("look prepared in front of clients", not "generate invoices"); challenge any statement that still sounds like a feature
4. Implications: positioning (lead with the dominant push), onboarding (defuse the top anxiety early), feature priority (serve the job, not the category checklist)
5. What the sample CANNOT tell us (segment coverage gaps)
Quotes are evidence — every force claim needs one.`,
    relatedSlugs: ["jobs-to-be-done", "user-interview", "persona-validation", "offer-clarity"],
    tags: ["jtbd", "interview", "strategy"],
  },
];
