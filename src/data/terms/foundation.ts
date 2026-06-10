import type { UXTerm } from "@/types/playbook";

export const FOUNDATION_TERMS: UXTerm[] = [
  {
    id: "user-problem",
    slug: "user-problem",
    term: "User Problem",
    category: "ux-foundation",
    icon: "🎯",
    level: "basic",
    shortDescription: "ปัญหาจริงของ user ที่ product ต้องแก้ — ไม่ใช่ feature ที่ stakeholder อยากได้",
    fullDefinition:
      "User problem คือ gap ระหว่างสิ่งที่ user พยายามทำกับสิ่งที่ทำได้จริงตอนนี้ เขียนเป็นประโยคที่มี persona + situation + struggle + impact เช่น 'แม่ค้าออนไลน์ตอบแชทลูกค้าไม่ทันช่วงแคมเปญ ทำให้เสียออเดอร์' ถ้า statement ไม่มี struggle ที่วัดได้ แปลว่ายังไม่ใช่ problem statement",
    whyItMatters:
      "ทีมที่เริ่มจาก solution ('ทำ dashboard ใหม่') แทน problem มักได้ feature ที่ไม่มีคนใช้ — เปลือง sprint, เพิ่ม UI ที่ต้อง maintain และทำให้ product ซับซ้อนขึ้นโดยไม่เพิ่ม retention",
    whenToUse: [
      "เปิด kickoff ทุก feature — ให้ทีมเขียน problem statement ก่อนเปิด Figma",
      "ตอน stakeholder ขอ feature มาเป็น solution สำเร็จรูป ให้แปลงกลับเป็น problem ก่อน",
      "ใช้ filter backlog: item ไหนตอบ problem ไหนไม่ได้ ให้ตั้งคำถามว่าควรอยู่ใน backlog ไหม",
    ],
    whenNotToUse: [
      "งาน compliance/กฎหมายที่ต้องทำไม่ว่า user จะรู้สึกอย่างไร — บังคับ frame เป็น user problem จะเสียเวลา",
      "Bug fix ตรงไปตรงมา — ไม่ต้องเขียน problem statement ใหม่ทุกครั้ง",
    ],
    howToApply: [
      "เก็บ evidence: support ticket, session recording, interview note ที่ชี้ struggle เดียวกัน",
      "เขียน statement รูปแบบ: [persona] พยายาม [goal] แต่ [obstacle] ทำให้ [impact ที่วัดได้]",
      "ตรวจว่า statement ไม่มีชื่อ solution ฝังอยู่ (ถ้ามีคำว่า 'dashboard', 'AI', 'app' = เขียนใหม่)",
      "ให้คะแนน severity × frequency × reach เพื่อเทียบกับ problem อื่นใน backlog",
      "ติด problem statement ไว้บนหัว design file และ PRD — ทุก review อ้างกลับมาที่นี่",
    ],
    checklist: [
      "Statement ระบุ persona เฉพาะเจาะจง ไม่ใช่ 'users'",
      "มี struggle ที่สังเกตหรือวัดได้ ไม่ใช่ความเห็น",
      "มี impact ต่อ user หรือ business (เวลา, เงิน, ออเดอร์ที่เสีย)",
      "ไม่มี solution ฝังอยู่ใน statement",
      "มี evidence อย่างน้อย 2 แหล่งรองรับ",
      "ทีม dev/PM/design อ่านแล้วเข้าใจตรงกัน",
    ],
    deliverables: ["Problem statement 1 ย่อหน้าพร้อม evidence links", "Problem prioritization sheet (severity × frequency × reach)"],
    goodExample:
      "'เจ้าของร้านที่ใช้มือถือเป็นหลัก เช็คยอดขายรายวันไม่ได้ระหว่างเดินทาง เพราะ report ออกแบบมาสำหรับ desktop ทำให้ตัดสินใจสั่ง stock ช้าไป 1 วัน' — มี persona, situation, obstacle, impact ครบ",
    badExample:
      "'User อยากได้ mobile app ที่ใช้ง่ายขึ้น' — ไม่มี struggle, ไม่มี impact, ฝัง solution (mobile app) มาแล้ว และ 'ใช้ง่าย' วัดไม่ได้",
    commonMistakes: [
      "เขียน solution ปลอมตัวเป็น problem ('user ต้องการ dark mode')",
      "ใช้คำว่า 'users ทุกคน' แทน persona เฉพาะ ทำให้ design ไม่มีจุดยืน",
      "อ้าง evidence จากความเห็นใน meeting แทนข้อมูล user จริง",
      "เขียนครั้งเดียวตอน kickoff แล้วไม่เคยอ้างถึงอีกเลยตอน review",
    ],
    relatedSlugs: ["user-goal", "jobs-to-be-done", "pain-point-analysis", "user-interview"],
    tags: ["problem-framing", "discovery", "strategy"],
    prompts: [
      `You are a senior product designer. I will paste raw evidence (support tickets, interview quotes, analytics notes).

Task: Extract distinct user problems.
For each problem return:
1. Problem statement: [persona] tries to [goal] but [obstacle] causing [measurable impact]
2. Evidence lines that support it (quote the source)
3. Severity (1-4), estimated frequency, affected segment
4. What we still need to validate before designing

Constraints: No solutions allowed in statements. Flag any "problem" that is actually a feature request in disguise. Output as a markdown table sorted by severity × frequency.`,
    ],
    visualDemo: "priority-matrix",
    demoData: {
      title: "Problem Prioritization",
      matrix: {
        xLabel: "Frequency",
        yLabel: "Severity",
        quadrants: ["Fix next sprint", "Fix now", "Backlog", "Monitor"],
        items: [
          { name: "ตอบแชทไม่ทันช่วงแคมเปญ", quadrant: 1 },
          { name: "หา report ยอดขายบนมือถือไม่เจอ", quadrant: 0 },
          { name: "Export CSV เพี้ยนบางคอลัมน์", quadrant: 3 },
          { name: "อยากได้ theme สีใหม่", quadrant: 2 },
        ],
      },
      note: "Problem ที่ severity และ frequency สูงเท่านั้นที่ควรได้ design effort ก่อน",
    },
  },
  {
    id: "user-goal",
    slug: "user-goal",
    term: "User Goal",
    category: "ux-foundation",
    icon: "🏁",
    level: "basic",
    shortDescription: "ผลลัพธ์ที่ user ต้องการได้จากการใช้ product — ใช้เป็นเกณฑ์วัดว่า flow สำเร็จหรือไม่",
    fullDefinition:
      "User goal คือสิ่งที่ user ถือว่า 'เสร็จ' ในมุมของเขา ไม่ใช่ในมุมระบบ เช่น goal ของคนจ่ายบิลคือ 'มั่นใจว่าจ่ายแล้วไม่โดนปรับ' ไม่ใช่ 'กดปุ่ม submit สำเร็จ' — goal แบ่งเป็น end goal (ผลลัพธ์), experience goal (ความรู้สึกระหว่างทาง) และ life goal (ภาพใหญ่)",
    whyItMatters:
      "ถ้าทีมนิยาม 'สำเร็จ' ในมุมระบบ (form submitted) แทนมุม user (ได้ใบยืนยัน, รู้ว่าต้องทำอะไรต่อ) จะได้ flow ที่จบแบบห้วน user ไม่มั่นใจ ติด support ticket ตามมา และ conversion ครั้งถัดไปตก",
    whenToUse: [
      "ก่อนวาด user flow — ระบุ goal ปลายทางและสิ่งที่ user ใช้ยืนยันว่าสำเร็จ",
      "ตอนเขียน success criteria ของ usability test task",
      "ตอนออกแบบ confirmation/success screen ว่าต้องบอกอะไร user",
    ],
    whenNotToUse: [
      "อย่าใช้ goal กว้างๆ ('อยากสะดวก') มา justify ทุก design — goal ต้องผูกกับ task ที่เจาะจง",
      "อย่าเอา business goal (เพิ่ม upsell) มาเขียนทับเป็น user goal — สองอย่างนี้ต้อง balance ไม่ใช่แทนกัน",
    ],
    howToApply: [
      "ถาม 'user จะรู้ได้อย่างไรว่าทำสำเร็จแล้ว?' — คำตอบคือสิ่งที่ success state ต้องแสดง",
      "แยก end goal กับ experience goal (เร็ว/ไม่ต้องคิดเยอะ/ไม่กลัวพลาด) แล้ว design รองรับทั้งคู่",
      "Map goal ลงแต่ละ step ของ flow: step ไหนไม่ contribute ต่อ goal = candidate ตัดทิ้ง",
      "เขียน task scenario ใน usability test จาก goal ไม่ใช่จาก UI ('จ่ายบิลให้ทันก่อนโดนปรับ' ไม่ใช่ 'กดปุ่มจ่าย')",
    ],
    checklist: [
      "ทุก key flow มี user goal เขียนชัดเป็นประโยค",
      "Success screen ตอบ goal โดยตรง (ยืนยันผล + next step)",
      "Business goal กับ user goal ถูกแยกและ balance อย่างตั้งใจ",
      "Test task เขียนจาก goal ไม่ leak ชื่อปุ่ม/เมนู",
      "Metric ของ flow วัดจาก goal completion ไม่ใช่แค่ click",
    ],
    deliverables: ["Goal statement ต่อ flow ใน design doc", "Success criteria สำหรับ usability test"],
    goodExample:
      "Flow โอนเงิน: end goal = 'ปลายทางได้รับเงินและฉันมีหลักฐาน' → success screen แสดงสลิป, ปุ่ม share, และยอดคงเหลือใหม่ทันที",
    badExample:
      "Success screen เขียนแค่ 'Transaction completed (TXN-88172)' — ระบบสำเร็จแต่ user ยังไม่รู้ว่าเงินถึงไหม ต้อง capture หน้าจอเองและโทรถาม call center",
    commonMistakes: [
      "นิยาม success ในมุมระบบ ไม่ใช่มุม user",
      "ยัด business goal (สมัคร newsletter) แทรกกลาง flow จน user หลุดจาก goal ตัวเอง",
      "เขียน goal กว้างจนใช้ตัดสินใจอะไรไม่ได้ ('ใช้งานง่าย')",
      "ไม่เคยถาม user จริงว่าเขาถือว่าอะไรคือ 'เสร็จ'",
    ],
    relatedSlugs: ["user-problem", "user-flow", "jobs-to-be-done", "usability-testing"],
    tags: ["goals", "success-criteria", "flow-design"],
    prompts: [
      `You are a UX lead reviewing a flow. I will describe the flow and paste its screens.

Task:
1. Infer the user's end goal and experience goals for this flow.
2. For each step, state whether it advances the goal, is neutral, or blocks it.
3. Review the success state: does it confirm the goal in the user's terms (proof, next step, what changed)?
4. Propose the minimal flow that still reaches the goal.

Output: a step-by-step table (step / purpose / verdict / fix) plus a rewritten success-screen spec with exact copy.`,
    ],
    visualDemo: "user-flow",
    demoData: {
      title: "Goal-Driven Flow Check",
      steps: [
        { name: "เลือกบิล", detail: "เห็นยอดและกำหนดจ่ายชัด", risk: undefined },
        { name: "ยืนยันยอด", detail: "สรุปค่าธรรมเนียมก่อนจ่าย" },
        { name: "จ่ายเงิน", detail: "OTP ครั้งเดียว ไม่เด้งออกจาก flow" },
        { name: "Success", detail: "สลิป + แชร์ + ยอดคงเหลือใหม่", risk: "ถ้าแสดงแค่ transaction ID = goal ยังไม่จบ" },
      ],
    },
  },
  {
    id: "user-flow",
    slug: "user-flow",
    term: "User Flow",
    category: "ux-foundation",
    icon: "🛤️",
    level: "basic",
    shortDescription: "เส้นทางที่ user เดินจาก entry point ถึง goal รวมทางแยก, error และทางออก",
    fullDefinition:
      "User flow คือ diagram ของทุก step ที่ user ผ่านเพื่อบรรลุ goal หนึ่ง — รวม decision point, branch (สำเร็จ/พลาด/ยกเลิก), entry หลายทาง (deeplink, search, ads) และ state พิเศษ (ยังไม่ login, ข้อมูลไม่ครบ) Flow ที่ดีออกแบบที่ระดับ 'การตัดสินใจของ user' ไม่ใช่ระดับหน้าจอ",
    whyItMatters:
      "Drop-off ส่วนใหญ่ไม่ได้เกิดจากหน้าจอสวยไม่สวย แต่เกิดจาก flow ที่บังคับ step เกินจำเป็น, ทางแยกที่ confusing หรือ dead end ตอน error — แก้ที่ระดับ flow ถูกกว่าแก้ทีละหน้าเสมอ",
    whenToUse: [
      "ก่อนเริ่ม hi-fi design ทุก feature ที่มีมากกว่า 2 หน้าจอ",
      "ตอน analytics ชี้ drop-off สูงผิดปกติที่ step ใดใน funnel",
      "ตอน review ว่า edge case (ไม่ login, ของหมด, จ่ายไม่ผ่าน) มีทางไปต่อครบไหม",
    ],
    whenNotToUse: [
      "หน้า static เดี่ยวๆ ที่ไม่มี decision — เขียน flow ก็ไม่ได้ insight เพิ่ม",
      "อย่าใช้ user flow แทน service blueprint เมื่อปัญหาอยู่ที่ backend/operations ไม่ใช่ UI",
    ],
    howToApply: [
      "เริ่มจาก goal และ entry points ทั้งหมด (organic, ads, deeplink, push) ไม่ใช่แค่ home",
      "วาด happy path ก่อน แล้วเติม branch: error, ยกเลิก, ย้อนกลับ, timeout, ไม่มีสิทธิ์",
      "ทุก node ถามว่า 'user รู้ไหมว่าอยู่ไหน ทำอะไรได้ และจะเกิดอะไรต่อ'",
      "นับ step และ decision ใน happy path — ทุก step ต้อง justify ตัวเองได้",
      "ตรวจว่าไม่มี dead end: ทุก error/empty ต้องมี action ไปต่อหรือทางกลับ",
      "Validate flow กับ data จริง (funnel analytics) หลัง launch",
    ],
    checklist: [
      "ครอบคลุม entry point มากกว่า 1 ทาง",
      "มี branch สำหรับ error / cancel / back ครบทุก step สำคัญ",
      "ไม่มี dead end — ทุก state มีทางไปต่อ",
      "Step ใน happy path ถูกตั้งคำถามว่าตัดได้ไหมทุกอัน",
      "ระบุ state ที่ต้อง login / ต้องมีข้อมูลก่อนถึงจะเข้าได้",
      "ตรงกับ funnel analytics ที่วัดอยู่จริง (event ครบทุก node)",
    ],
    deliverables: ["Flow diagram (FigJam/Whimsical) ที่มี branch ครบ", "Step audit table: step / purpose / ตัดได้ไหม / risk"],
    goodExample:
      "Checkout flow ที่รองรับ guest, แยก branch 'บัตรถูกปฏิเสธ' ไปหน้าแก้ไขพร้อมเหตุผล และเก็บของในตะกร้าไว้เมื่อ user หลุด session — ทุกทางแยกมีทางกลับ",
    badExample:
      "Flow สมัครสมาชิกที่บังคับ verify email ก่อนเห็นสินค้า, ถ้า OTP หมดอายุต้องเริ่มกรอกใหม่ทั้งฟอร์ม และปุ่ม back ทำข้อมูลหาย — สาม dead end ใน flow เดียว",
    commonMistakes: [
      "วาดแต่ happy path — error path ถูกออกแบบตอน dev ถามเอาหน้างาน",
      "ออกแบบ flow ที่ระดับหน้าจอแทนระดับการตัดสินใจ ทำให้พลาด state ที่ไม่มี UI",
      "ลืม entry จาก deeplink/ads ที่ข้าม context หน้าแรกไป",
      "ไม่ผูก flow node กับ analytics event เลยวัด drop-off ต่อ step ไม่ได้",
    ],
    relatedSlugs: ["user-goal", "task-analysis", "navigation-review", "onboarding-flow", "error-handling"],
    tags: ["flow", "journey", "funnel"],
    prompts: [
      `You are a senior UX architect. I will describe a feature and paste its current screens/flow.

Task: Map the complete user flow.
1. List all realistic entry points.
2. Draw the happy path as numbered steps (user intent per step, not screen names).
3. For each step add branches: error, cancel, back, timeout, unauthorized, empty data.
4. Flag every dead end and every step that can be removed or merged.
5. Propose the optimized flow and list which analytics events to attach to each node.

Output: numbered flow in text form + a table of issues (step, problem, severity, fix). Do not redesign visual style — flow logic only.`,
    ],
    visualDemo: "user-flow",
  },
  {
    id: "information-architecture",
    slug: "information-architecture",
    term: "Information Architecture (IA)",
    category: "ux-foundation",
    icon: "🗂️",
    level: "intermediate",
    aliases: ["IA"],
    shortDescription: "โครงสร้างการจัดกลุ่มและตั้งชื่อ content/feature ให้ user หาเจอโดยไม่ต้องเรียนรู้",
    fullDefinition:
      "IA คือการตัดสินใจว่าอะไรอยู่กลุ่มไหน เรียกชื่อว่าอะไร ลึกกี่ชั้น และเข้าถึงจากตรงไหนได้บ้าง — ครอบคลุม navigation, hierarchy ของหน้า, labeling และ search IA ที่ดีตรงกับ mental model ของ user ไม่ใช่ org chart ของบริษัท",
    whyItMatters:
      "IA ที่จัดตาม structure ภายในองค์กร ('Products', 'Solutions', 'Resources') ทำให้ user หาไม่เจอแม้ feature จะมีอยู่ — ผลคือ support ticket ประเภท 'ทำ X ได้ที่ไหน' เพิ่ม, adoption ของ feature ต่ำ และ redesign ภายหลังแพงมากเพราะกระทบทุกหน้า",
    whenToUse: [
      "ก่อน redesign navigation หรือเพิ่ม section ใหญ่ใหม่",
      "เมื่อ search log เต็มไปด้วยคำที่มีหน้าอยู่แล้ว (user หาเจอจาก search แต่ browse ไม่เจอ)",
      "เมื่อ menu เริ่มมี item เกิน 7±2 หรือมีหมวด 'Other/More' ที่โตขึ้นเรื่อยๆ",
    ],
    whenNotToUse: [
      "App ที่มี 3-4 หน้าจอ — จัด IA หรูหราไปก็ไม่มีอะไรให้หลง",
      "อย่ารื้อ IA ทั้งระบบเพื่อแก้ปัญหา feature เดียวหาไม่เจอ — ลองแก้ label หรือ cross-link ก่อน",
    ],
    howToApply: [
      "Inventory content/feature ทั้งหมดลง spreadsheet ก่อน (มีอะไรอยู่บ้างจริงๆ)",
      "ทำ card sorting (open/closed) กับ user 8-12 คน เพื่อดูว่าเขาจัดกลุ่มอย่างไร",
      "ตั้ง label ด้วยคำของ user (ดูจาก search log) ไม่ใช่ศัพท์ภายใน",
      "จำกัดความลึก ≤3 ชั้นสำหรับ task หลัก และทำ tree test validate ก่อน build",
      "เพิ่ม cross-link สำหรับ item ที่ user คาดว่าจะอยู่ได้ 2 ที่",
    ],
    checklist: [
      "Label ใช้คำที่ user ใช้ (ตรวจกับ search log แล้ว)",
      "Task หลักเข้าถึงได้ใน ≤3 คลิกจาก home",
      "ไม่มีหมวด 'Other' ที่กลายเป็นถังขยะ",
      "Item ที่กำกวมมี cross-link หรือ alias ใน search",
      "Tree test success rate ≥70% สำหรับ top task ก่อน build จริง",
      "โครงสร้างสะท้อน mental model ของ user ไม่ใช่ org chart",
    ],
    deliverables: ["Sitemap พร้อม labeling rationale", "Card sorting / tree testing result summary"],
    goodExample:
      "E-commerce จัดหมวดตามวิธีที่ลูกค้าคิด ('เสื้อผ้าผู้ชาย > เสื้อยืด') พร้อม cross-link 'เสื้อยืด' จากหมวด 'New Arrivals' และ search synonym 'tshirt = เสื้อยืด'",
    badExample:
      "SaaS ที่ซ่อน billing ไว้ใต้ 'Organization Settings > Workspace > Plans' เพราะทีม billing อยู่ใต้ทีม workspace ใน org chart — user พิมพ์ 'invoice' ใน search 400 ครั้ง/เดือน",
    commonMistakes: [
      "จัดหมวดตามทีมภายใน ไม่ใช่ตาม task ของ user",
      "ตั้ง label เป็นศัพท์ marketing ('Solutions', 'Empower') ที่ไม่บอกว่าข้างในมีอะไร",
      "ลึกเกิน 3 ชั้นเพราะกลัว menu รก เลยซ่อนของที่ใช้บ่อย",
      "ข้าม validation (tree test) แล้วไปรู้ว่าพังตอน launch",
    ],
    relatedSlugs: ["mental-model", "navigation-review", "content-design", "user-flow"],
    tags: ["ia", "navigation", "structure", "labeling"],
    prompts: [
      `You are an information architect. I will paste: (1) full list of pages/features, (2) top 20 search queries from our search log, (3) current navigation tree.

Task:
1. Identify mismatches between user vocabulary (search log) and current labels.
2. Propose a revised tree: max depth 3 for primary tasks, groups based on user tasks not internal teams.
3. List items that need cross-links because they plausibly belong in two places.
4. Write 8 tree-testing tasks to validate the new structure before build.

Output: before/after tree in indented text + rationale per change. Keep total top-level items ≤7.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "IA: Org Chart vs Mental Model",
      before: { label: "จัดตามทีมภายใน", points: ["Products / Solutions / Resources", "Billing ซ่อนใต้ Workspace 3 ชั้น", "หมวด 'Other' มี 14 items"] },
      after: { label: "จัดตาม task ของ user", points: ["ขายของ / สต็อก / รายงาน / ตั้งค่า", "'ใบแจ้งหนี้' อยู่ระดับ 1 ตาม search log", "Cross-link ของที่อยู่ได้ 2 ที่"] },
    },
  },
  {
    id: "mental-model",
    slug: "mental-model",
    term: "Mental Model",
    category: "ux-foundation",
    icon: "🧩",
    level: "intermediate",
    shortDescription: "ภาพในหัวของ user ว่าระบบ 'น่าจะ' ทำงานอย่างไร — design ที่ฝืนภาพนี้คือ design ที่ต้องสอน",
    fullDefinition:
      "Mental model คือความเชื่อที่ user สร้างจากประสบการณ์เดิม (app อื่น, โลกจริง) ว่าอะไรกดได้ อะไรจะเกิดขึ้น และของอยู่ที่ไหน เช่น 'ถังขยะ = ลบแล้วกู้คืนได้', 'ปัดซ้าย = ลบ' — design ที่ match model ใช้ได้ทันที design ที่ฝืนต้องมี onboarding มาชดเชย",
    whyItMatters:
      "ทุกจุดที่ product ฝืน mental model คือ friction ที่ต้องจ่ายด้วย onboarding, tooltip, support ticket หรือ user เลิกใช้ — และ innovation ที่ผิดที่ (เช่น เปลี่ยน gesture มาตรฐาน) ทำให้ feature ดีๆ ถูกมองว่า 'ใช้ยาก'",
    whenToUse: [
      "ก่อน deviate จาก pattern มาตรฐาน (icon, gesture, ตำแหน่ง element) — ถามว่าคุ้มไหม",
      "ตอนตีความผล usability test: user 'ใช้ผิด' มักแปลว่า design ฝืน model ไม่ใช่ user โง่",
      "ตอนออกแบบ feature ใหม่ที่ไม่มีแบบแผนเดิม — หา analogy จากโลกจริงที่ user รู้จัก",
    ],
    whenNotToUse: [
      "อย่าใช้ 'ตรง mental model' เป็นข้ออ้าง copy คู่แข่งทุกอย่าง — model เปลี่ยนได้ถ้า value ใหม่ชัดพอ",
      "Power-user tool ที่ user ยอมเรียนรู้ (IDE, trading) trade-off ความ familiar กับประสิทธิภาพได้มากกว่า consumer app",
    ],
    howToApply: [
      "ถาม user ใน interview ว่า 'คุณคิดว่ามันทำงานยังไง' แล้วฟัง analogy ที่เขาใช้",
      "ใช้ convention เดิมเมื่อไม่มีเหตุผลแรงพอจะเปลี่ยน (Jakob's Law — user ใช้เวลาส่วนใหญ่ใน app อื่น)",
      "ถ้าต้องฝืน model: ทำ first-use hint จุดเดียว ไม่ใช่ tutorial 5 หน้า",
      "ตรวจ signifier ว่าสื่อ affordance ตรง model ไหม (ของกดได้ต้องดูกดได้)",
      "ดู misclick heatmap — จุดที่คนกดแต่กดไม่ได้ คือจุดที่ model กับ design ไม่ตรงกัน",
    ],
    checklist: [
      "Pattern หลัก (nav, search, cart, back) ตรง convention ของ platform",
      "การ deviate ทุกจุดมีเหตุผลและมี hint ชดเชย",
      "ผล usability test ถูกอ่านเป็น model mismatch ไม่ใช่ 'user error'",
      "Icon ที่ใช้มีความหมายมาตรฐาน (ไม่ invent icon ใหม่ให้ของเดิม)",
      "Feature ใหม่มี analogy ที่อธิบายได้ในประโยคเดียว",
    ],
    deliverables: ["Model-mismatch list จาก usability test", "Convention decision log (จุดที่เลือกตาม/ฝืน convention พร้อมเหตุผล)"],
    goodExample:
      "App ลงทุนใหม่ใช้ analogy 'พอร์ต = ตะกร้า' ที่คนไทยคุ้นจาก e-commerce: เพิ่มกองทุนเข้าตะกร้าก่อนแล้วค่อยยืนยันครั้งเดียว — user ใหม่เข้าใจโดยไม่ต้องอ่าน tutorial",
    badExample:
      "App ธนาคารย้ายปุ่ม back ไปขวาบนและใช้ icon บ้านแทน 'ยกเลิกรายการ' — ตรวจ heatmap พบ user กด icon บ้านกลาง flow โอนเงินแล้วคิดว่ารายการถูกยกเลิก ทั้งที่ระบบโอนต่อ",
    commonMistakes: [
      "เรียกพฤติกรรม user ว่า 'ใช้ผิด' แทนที่จะมองเป็น design ฝืน model",
      "Invent interaction ใหม่เพื่อความ unique ใน flow ที่ user แค่อยากเสร็จเร็ว",
      "ใช้ศัพท์ภายในองค์กรบน UI แล้วคาดว่า user จะเรียนรู้เอง",
      "แก้ปัญหา model mismatch ด้วย tooltip ซ้อนๆ แทนการแก้ design",
    ],
    relatedSlugs: ["information-architecture", "interaction-design", "usability", "heuristic-evaluation"],
    tags: ["psychology", "convention", "jakobs-law"],
    prompts: [
      `You are a UX researcher analyzing mental model fit. I will paste screenshots/description of a flow plus any usability test notes.

Task:
1. List every interaction pattern used (navigation, gestures, icons, terminology).
2. For each, state the dominant convention users likely carry from other products, and whether we match or deviate.
3. For each deviation: judge if the value justifies the learning cost, and propose either (a) revert to convention or (b) the single cheapest hint that teaches it.
4. Rewrite any internal jargon into user vocabulary.

Output: table (pattern / convention / our design / verdict / fix). Be specific — name the exact icon, label, or gesture.`,
    ],
    visualDemo: "audit-report",
    demoData: {
      title: "Model Mismatch Findings",
      findings: [
        { severity: "high", issue: "Icon บ้านถูกใช้แทน 'ยกเลิกรายการ' — user เข้าใจว่ากลับ home", fix: "ใช้ปุ่ม text 'ยกเลิก' + confirm dialog" },
        { severity: "medium", issue: "คำว่า 'Workspace Entity' เป็นศัพท์ภายใน", fix: "เปลี่ยนเป็น 'ร้านค้า' ตามคำที่ user ใช้" },
        { severity: "low", issue: "ปัดขวาเพื่อลบ (สวน convention ปัดซ้าย)", fix: "กลับมาใช้ปัดซ้าย + ปุ่มลบสำรอง" },
      ],
    },
  },
  {
    id: "usability",
    slug: "usability",
    term: "Usability",
    category: "ux-foundation",
    icon: "⚙️",
    level: "basic",
    shortDescription: "คุณภาพ 5 ด้านที่วัดได้ของ interface: learnability, efficiency, memorability, errors, satisfaction",
    fullDefinition:
      "Usability ไม่ใช่ความรู้สึก 'ใช้ง่าย' แต่เป็นคุณสมบัติที่วัดได้ 5 ด้าน: เรียนรู้ครั้งแรกเร็วไหม (learnability), ใช้คล่องแล้วเร็วแค่ไหน (efficiency), เว้นไปนานกลับมาใช้เป็นไหม (memorability), พลาดง่ายไหมและกู้คืนได้ไหม (errors), และพอใจไหม (satisfaction) — แต่ละด้าน trade-off กันได้และวัดด้วย metric ต่างกัน",
    whyItMatters:
      "ทีมที่เถียงกันว่า 'ง่าย/ไม่ง่าย' โดยไม่แยกมิติ จะแก้ผิดจุด เช่น เพิ่ม tutorial (แก้ learnability) ทั้งที่ปัญหาจริงคือ error recovery — การแยกมิติทำให้เลือก fix ที่ตรง และวัดผลก่อน-หลังได้จริง",
    whenToUse: [
      "ตอนแปลง feedback คลุมเครือ ('ใช้ยาก') ให้เป็นปัญหาที่ระบุมิติและวัดได้",
      "ตอนตั้ง metric ให้ flow ใหม่: task success rate, time on task, error rate",
      "ตอนตัดสิน trade-off เช่น keyboard shortcut (efficiency) vs UI ที่อธิบายตัวเอง (learnability)",
    ],
    whenNotToUse: [
      "อย่าวัดทุกมิติกับทุก feature — เลือกมิติที่ critical กับ context (app ใช้ทุกวัน = efficiency, app ใช้ปีละครั้ง = memorability)",
      "Usability สูงไม่ช่วยถ้า product ไม่ตอบ user problem — อย่าใช้ polish กลบ value ที่ไม่มี",
    ],
    howToApply: [
      "เลือกมิติหลักของ product: ใช้ทุกวัน → efficiency, ใช้นานๆ ครั้ง → memorability/learnability",
      "ตั้ง baseline: task success rate, time on task, error rate จาก usability test หรือ analytics",
      "Audit จุด error-prone: ฟอร์ม, การลบ, การจ่ายเงิน — มี prevention และ recovery ไหม",
      "วัด satisfaction ด้วย SUS หรือ SEQ หลัง test task",
      "ทุก redesign เทียบ metric ก่อน-หลัง ไม่ใช่เทียบความสวย",
    ],
    checklist: [
      "Flow หลักมี task success rate ที่วัดแล้ว (target ≥80%)",
      "Action ที่ทำลายข้อมูลมี undo หรือ confirmation",
      "Error message บอกวิธีแก้ ไม่ใช่แค่บอกว่าพลาด",
      "Function ที่ใช้บ่อยเข้าถึงได้เร็ว (shortcut, recent, default ฉลาด)",
      "มี baseline metric ก่อน redesign เพื่อเทียบหลัง launch",
    ],
    deliverables: ["Usability scorecard ต่อ flow (5 มิติ + metric)", "Prioritized fix list จากมิติที่ต่ำสุด"],
    goodExample:
      "ทีม POS พบว่าพนักงานใหม่เรียนรู้เร็ว (learnability ดี) แต่พนักงานเก่าบ่นช้า → เพิ่ม shortcut กดเลขโต๊ะตรงๆ แทนการ scroll เลือก ลด time on task ลง 40% โดยไม่แตะ UI มือใหม่",
    badExample:
      "ทีมได้ feedback 'ใช้ยาก' เลยเพิ่ม onboarding tour 6 หน้า — ปัญหาจริงคือปุ่มลบอยู่ติดปุ่มบันทึกและไม่มี undo (error dimension) tour ไม่ช่วยและ skip rate 92%",
    commonMistakes: [
      "ปฏิบัติกับ usability เป็นความเห็น ไม่ตั้ง metric",
      "แก้มิติผิด เช่น เพิ่ม tutorial ทั้งที่ปัญหาคือ error recovery",
      "Optimize ให้ first-time user จน power user ทำงานช้า (หรือกลับกัน) โดยไม่ได้เลือกอย่างตั้งใจ",
      "ทดสอบกับทีมตัวเองที่รู้ระบบดีอยู่แล้ว แล้วสรุปว่า 'ง่าย'",
    ],
    relatedSlugs: ["usability-testing", "heuristic-evaluation", "mental-model", "error-handling"],
    tags: ["usability", "metrics", "nielsen"],
    prompts: [
      `You are a UX analyst. I will describe a product flow and paste available data (test notes, analytics, complaints).

Task: Score this flow on the 5 usability dimensions (learnability, efficiency, memorability, errors, satisfaction).
For each dimension:
- Evidence found (or "no data — needs measurement")
- Score 1-5 with one-line rationale
- The single highest-impact fix

Then identify which ONE dimension matters most for this product's usage pattern (daily tool vs occasional use) and whether current design priorities match it.

Output: scorecard table + top-3 fixes ranked by impact/effort.`,
    ],
    visualDemo: "checklist",
  },
  {
    id: "accessibility",
    slug: "accessibility",
    term: "Accessibility (a11y)",
    category: "ux-foundation",
    icon: "♿",
    level: "intermediate",
    aliases: ["a11y", "WCAG"],
    shortDescription: "การออกแบบให้คนใช้ได้จริงทุกความสามารถ — มีมาตรฐานวัดคือ WCAG 2.1 AA",
    fullDefinition:
      "Accessibility คือการทำให้ product ใช้ได้ด้วยตา หู มือ และ cognition ที่หลากหลาย: คนตาบอดใช้ screen reader, คนสายตาเลือนต้องการ contrast, คนใช้คีย์บอร์ดอย่างเดียว, คนมือสั่นต้องการ target ใหญ่ — มาตรฐานที่ใช้ตรวจรับคือ WCAG 2.1 ระดับ AA ครอบคลุม contrast, keyboard, ARIA, structure และ motion",
    whyItMatters:
      "นอกจากตัดผู้ใช้ ~15% ของประชากรทิ้ง ยังเป็น risk ทาง compliance (ลูกค้า enterprise/ภาครัฐต้องการ WCAG) และสิ่งที่มักลืม: a11y ที่ดีช่วยทุกคน — captions ช่วยคนดูในที่เสียงดัง, contrast ช่วยคนใช้มือถือกลางแดด, keyboard nav ช่วย power user",
    whenToUse: [
      "ตั้งแต่ design ไม่ใช่ตอน QA — เลือกสี, ขนาด target, focus order ตั้งแต่ใน Figma",
      "ตอนเขียน acceptance criteria ทุก component (keyboard, label, contrast เป็น requirement ไม่ใช่ nice-to-have)",
      "ก่อนปิดดีล enterprise ที่ขอ VPAT/conformance",
    ],
    whenNotToUse: [
      "อย่าเริ่มจาก 'ทำ AAA ทั้งระบบ' — AA คือเป้าที่เหมาะกับ product ทั่วไป, AAA ใช้เฉพาะจุด (เช่น content สำหรับกลุ่มเปราะบาง)",
      "อย่าใช้ accessibility overlay widget แปะทับแทนการแก้โค้ดจริง — ไม่ผ่าน audit และมักทำให้แย่ลง",
    ],
    howToApply: [
      "กำหนด contrast ขั้นต่ำใน design token: text ปกติ ≥4.5:1, text ใหญ่ ≥3:1",
      "ทุก interactive element ต้องเป็น semantic element จริง (button, a) มี label และ focus state ชัด",
      "Tab ผ่านทั้งหน้าด้วยคีย์บอร์ด: ลำดับ logical, ไม่มี trap, มี skip link",
      "ทดสอบกับ screen reader (VoiceOver/NVDA) อย่างน้อย flow หลัก",
      "ใส่ a11y criteria ใน Definition of Done และ run axe ใน CI",
    ],
    checklist: [
      "Contrast ผ่าน AA ทุก text และ UI component สำคัญ",
      "ใช้คีย์บอร์ดทำ task หลักได้ครบโดยไม่ติด trap",
      "Focus indicator เห็นชัดทุก interactive element",
      "ทุก input มี label จริง, ทุก icon-button มี aria-label",
      "Heading structure เป็นลำดับ (h1→h2→h3) ไม่ข้ามเพื่อความสวย",
      "ไม่ใช้สีเป็นสัญญาณเดียว (error มี icon/text เสมอ)",
      "Animation respect prefers-reduced-motion",
    ],
    deliverables: ["A11y acceptance criteria ใน component spec", "Audit report ที่ map ทุก issue เข้า WCAG criterion พร้อม severity"],
    goodExample:
      "Design system กำหนด token คู่สีที่ผ่าน AA แล้วเท่านั้น + Button component บังคับ prop aria-label เมื่อเป็น icon-only — ทำให้ทุก feature ใหม่ผ่าน contrast/label โดย default",
    badExample:
      "Form ที่ใช้ placeholder แทน label, error บอกด้วยขอบสีแดงอย่างเดียว และ submit ด้วย div onClick — screen reader อ่านไม่ได้, คีย์บอร์ดกดไม่ได้, คนตาบอดสีไม่เห็น error",
    commonMistakes: [
      "เก็บ a11y ไว้ทำ 'หลัง launch' ซึ่งแพงกว่าทำแต่แรกหลายเท่า",
      "Run automated tool แล้วคิดว่าจบ — automated จับได้ ~30% ของ issue เท่านั้น",
      "ใส่ ARIA มั่วๆ จนแย่กว่าไม่ใส่ (no ARIA is better than bad ARIA)",
      "ทำ focus outline: none เพื่อความสวยโดยไม่มี replacement",
    ],
    relatedSlugs: ["accessibility-audit", "accessibility-requirements", "color-system", "form-ux-review", "component-states"],
    tags: ["a11y", "wcag", "inclusive-design", "compliance"],
    prompts: [
      `You are an accessibility specialist (WCAG 2.1 AA). I will paste a component's code or a screen description.

Audit it for:
1. Semantic structure (real buttons/links, heading order, landmarks)
2. Keyboard: tab order, focus visible, no traps, ESC/arrow behavior
3. Labels: inputs, icon buttons, images, dynamic announcements (aria-live)
4. Contrast: flag any token pair likely below 4.5:1 (or 3:1 large text/UI)
5. Color-only signals, motion without prefers-reduced-motion

For each issue: WCAG criterion number, severity (blocker/major/minor), user impact, and the exact code-level fix.
Output: markdown table sorted by severity. End with the 3 fixes that unblock the most users.`,
    ],
    visualDemo: "audit-report",
    demoData: {
      title: "A11y Audit Sample",
      findings: [
        { severity: "critical", issue: "Submit เป็น <div onClick> — คีย์บอร์ด/screen reader ใช้ไม่ได้ (WCAG 2.1.1)", fix: "เปลี่ยนเป็น <button type='submit'>" },
        { severity: "high", issue: "Error บอกด้วยขอบแดงอย่างเดียว (WCAG 1.4.1)", fix: "เพิ่ม error text + aria-describedby" },
        { severity: "high", issue: "Contrast ปุ่ม secondary 2.8:1 (WCAG 1.4.3)", fix: "ใช้ token text-secondary บนพื้น surface (5.2:1)" },
        { severity: "medium", issue: "ไม่มี focus indicator หลัง reset CSS (WCAG 2.4.7)", fix: "เพิ่ม focus-visible ring 2px ทุก interactive" },
      ],
    },
  },
  {
    id: "interaction-design",
    slug: "interaction-design",
    term: "Interaction Design (IxD)",
    category: "ux-foundation",
    icon: "👆",
    level: "intermediate",
    aliases: ["IxD"],
    shortDescription: "การออกแบบ 'บทสนทนา' ระหว่าง user กับระบบ: trigger, feedback, state และจังหวะตอบสนอง",
    fullDefinition:
      "Interaction design คือการกำหนดว่าเมื่อ user ทำ action แล้วระบบตอบอย่างไร เร็วแค่ไหน และบอกสถานะอย่างไร — ครอบคลุม affordance (อะไรดูกดได้), feedback (กดแล้วรู้ว่าเกิดอะไร), state transition (loading/success/error) และ forgiveness (undo, confirm) หน่วยที่ออกแบบคือ 'event' ไม่ใช่ 'หน้าจอ'",
    whyItMatters:
      "หน้าจอสวยแต่ interaction แย่ = กดปุ่มแล้วไม่มี feedback จน user กดซ้ำ (สั่งของ 2 ครั้ง), ไม่มี loading state จนคิดว่าค้าง, ลบแล้วกู้ไม่ได้ — สิ่งเหล่านี้สร้าง support ticket และความไม่ไว้ใจมากกว่าความสวยช่วยไว้",
    whenToUse: [
      "ทุก action ที่มี latency: กำหนด loading state และ optimistic update ตั้งแต่ design",
      "ทุก destructive action: เลือกว่าจะ confirm ก่อน หรือทำเลยแล้วให้ undo",
      "ตอน spec component ให้ dev: ระบุ hover/active/focus/disabled/loading ครบ",
    ],
    whenNotToUse: [
      "อย่าใส่ animation/transition เพื่อความ wow ใน flow ที่ user ทำซ้ำวันละหลายรอบ — ทุก 200ms ที่เกินมาคือต้นทุนสะสม",
      "อย่า invent gesture ใหม่เมื่อปุ่มธรรมดาตอบโจทย์ได้",
    ],
    howToApply: [
      "ทุก action ตอบภายใน 100ms (instant feedback) — ถ้างานจริงช้ากว่า ให้แสดง state ทันทีแล้วทำงานเบื้องหลัง",
      "งาน >1s ต้องมี loading indicator, งาน >10s ต้องมี progress + ทำอย่างอื่นต่อได้",
      "Destructive action: ใช้ undo (Gmail-style) สำหรับงานกู้ได้, ใช้ confirm เฉพาะงานกู้ไม่ได้จริง",
      "ระบุ state ครบใน spec: default, hover, active, focus, disabled, loading, error, success",
      "ใช้ motion สื่อความหมาย (ของใหม่ slide เข้า, ของถูกลบ fade ออก) ไม่ใช่ตกแต่ง",
    ],
    checklist: [
      "ทุกปุ่มมี pressed/loading state — กดแล้วรู้ทันทีว่าระบบรับแล้ว",
      "ปุ่ม submit ถูก disable หรือกันกดซ้ำระหว่างรอ",
      "Destructive action มี undo หรือ confirmation ตามความ recoverable",
      "Transition duration 150-300ms และ respect reduced-motion",
      "Touch target ≥44×44px บน mobile",
      "ทุก state ใน spec มี design ไม่ใช่ให้ dev เดา",
    ],
    deliverables: ["Interaction spec ต่อ component (state × behavior × timing)", "Motion guideline (duration/easing per ประเภท transition)"],
    goodExample:
      "ปุ่ม 'สั่งซื้อ' ที่กดแล้วเปลี่ยนเป็น spinner ทันที พร้อม disable, สำเร็จแล้ว morph เป็น checkmark 400ms ก่อนนำทาง — user ไม่มีจังหวะสงสัยว่ากดติดไหม และกดซ้ำไม่ได้",
    badExample:
      "ปุ่มจ่ายเงินที่กดแล้วนิ่ง 3 วินาทีก่อนเปลี่ยนหน้า — user กดซ้ำ 2-3 ครั้ง เกิด double charge แล้วทีมไปแก้ที่ backend dedup แทนที่จะแก้ feedback ที่ปุ่ม",
    commonMistakes: [
      "Design แค่ default state แล้วปล่อย dev เดาอีก 6 states",
      "ใส่ confirm dialog ทุก action จน user กด confirm อัตโนมัติโดยไม่อ่าน (ทำให้ confirm ที่สำคัญจริงไร้ผล)",
      "Animation นาน/เยอะใน flow ที่ทำซ้ำบ่อย",
      "ไม่มี optimistic update ทั้งที่ action สำเร็จ 99% (เช่น like, bookmark)",
    ],
    relatedSlugs: ["component-states", "motion-guidelines", "error-handling", "mental-model", "usability"],
    tags: ["interaction", "feedback", "states", "motion"],
    prompts: [
      `You are an interaction designer. I will paste a screen or component spec.

For every user action on this screen, define the full interaction contract:
1. Trigger (click/tap/key/gesture) and affordance (how users know it's actionable)
2. Immediate feedback within 100ms (what changes instantly)
3. States: loading (if >1s), success, error — with exact visual/copy for each
4. Forgiveness: undo vs confirm decision with rationale
5. Timing: animation duration + easing, and reduced-motion fallback

Output: interaction spec table (action / trigger / feedback / states / forgiveness / timing) ready to hand to a developer. Flag any action currently missing feedback or states.`,
    ],
    visualDemo: "component-state",
    demoData: {
      title: "Interaction Contract: ปุ่มสั่งซื้อ",
      states: [
        { name: "Default", spec: "bg-primary, label 'สั่งซื้อ', cursor pointer" },
        { name: "Pressed", spec: "scale 0.98 + darken ภายใน 100ms" },
        { name: "Loading", spec: "spinner แทน label, disabled, aria-busy" },
        { name: "Success", spec: "checkmark 400ms แล้วค่อย navigate" },
        { name: "Error", spec: "คืน default + toast บอกสาเหตุและวิธีแก้" },
      ],
    },
  },
  {
    id: "content-design",
    slug: "content-design",
    term: "Content Design",
    category: "ux-foundation",
    icon: "📝",
    level: "intermediate",
    shortDescription: "การออกแบบว่า 'ข้อมูลอะไร อยู่ตรงไหน ลำดับไหน' ก่อนจะถึงเรื่องคำพูด",
    fullDefinition:
      "Content design คือการตัดสินใจระดับโครงสร้าง: หน้านี้ต้องตอบคำถามอะไรของ user, ข้อมูลไหนต้องมาก่อน, อะไรซ่อนใน progressive disclosure ได้, อะไรไม่ต้องมี — ต่างจาก UX writing ที่เป็นการเกลาคำในระดับประโยค content design มาก่อนและกำหนดกรอบให้ writing",
    whyItMatters:
      "หน้าที่ content จัดลำดับผิด (สิ่งที่ user ต้องรู้ก่อนตัดสินใจอยู่ล่างสุด, คำถามที่ทุกคนมีไม่ถูกตอบ) ทำให้ user เด้งไปถาม support หรือออกไปหาคำตอบที่อื่นแล้วไม่กลับมา — copy สวยแค่ไหนก็ช่วยไม่ได้ถ้าโครงสร้างผิด",
    whenToUse: [
      "ก่อนวาด layout: list คำถามที่ user มี ณ จุดนั้นแล้วเรียงตามลำดับการตัดสินใจ",
      "ตอน review หน้าที่ bounce สูง: ตรวจว่าคำถามหลักถูกตอบ above the fold ไหม",
      "ตอนหน้าเริ่มแน่น: ตัดสินใจว่าอะไรย้ายไป progressive disclosure (accordion, tooltip, หน้าแยก)",
    ],
    whenNotToUse: [
      "อย่าใช้ progressive disclosure ซ่อนข้อมูลที่จำเป็นต่อการตัดสินใจ (ราคา, ค่าธรรมเนียม, เงื่อนไขยกเลิก)",
      "อย่าทำ content audit ใหญ่เมื่อปัญหาคือ copy ประโยคเดียวที่กำกวม — แก้จุดได้เลย",
    ],
    howToApply: [
      "เขียน 'คำถามของ user' ณ แต่ละจุดของ journey (เช่น หน้า pricing: ราคาเท่าไหร่ → รวมอะไร → ยกเลิกได้ไหม)",
      "เรียง content ตามลำดับคำถาม ไม่ใช่ตามที่ทีมอยากเล่า",
      "ใช้ inverted pyramid: คำตอบก่อน รายละเอียดทีหลัง",
      "กำหนด 1 ประเด็นหลักต่อ 1 section — ถ้า section ตอบ 3 คำถาม แตกเป็น 3",
      "ตัดทุกอย่างที่ไม่ช่วย user ตัดสินใจหรือทำงานให้เสร็จ",
    ],
    checklist: [
      "ทุกหน้ามี 'คำถามหลักที่ต้องตอบ' เขียนไว้ชัด",
      "คำตอบของคำถามหลักอยู่ above the fold",
      "ข้อมูลที่ต้องใช้ตัดสินใจ (ราคา/เงื่อนไข) ไม่ถูกซ่อน",
      "แต่ละ section ตอบประเด็นเดียว",
      "Heading อ่านแล้วรู้เนื้อหาโดยไม่ต้องอ่าน body (scannable)",
      "ไม่มี section ที่อยู่เพราะ 'ทีมอยากใส่' โดยไม่ตอบคำถาม user",
    ],
    deliverables: ["Content outline ต่อหน้า (คำถาม → ลำดับ → ที่อยู่ของแต่ละ block)", "Content audit: keep / rewrite / merge / delete"],
    goodExample:
      "หน้า pricing เรียงตามลำดับตัดสินใจ: ราคา + สิ่งที่ได้ (ตอบ 'เท่าไหร่') → ตารางเทียบ plan ('ต่างกันยังไง') → FAQ ยกเลิก/ขอคืนเงิน ('เสี่ยงไหม') → CTA — แต่ละ block ตอบคำถามถัดไปพอดี",
    badExample:
      "หน้า product ที่เปิดด้วย vision statement 3 ย่อหน้า, ราคาอยู่หลัง scroll 4 จอ, เงื่อนไขยกเลิกอยู่ใน PDF แยก — user ออกไป google 'ราคา + ชื่อแบรนด์' แทน",
    commonMistakes: [
      "เรียง content ตาม structure ภายใน (เรื่องที่ทีมภูมิใจมาก่อน) แทนลำดับการตัดสินใจของ user",
      "เริ่มจาก layout/lorem ipsum แล้วค่อยยัด content จริงทีหลัง",
      "ซ่อนข้อมูล critical ใน accordion เพื่อให้หน้าดู clean",
      "ตอบคำถามเดียวกันกระจาย 3 ที่ด้วยข้อความไม่ตรงกัน",
    ],
    relatedSlugs: ["ux-writing", "information-architecture", "offer-clarity", "landing-page-review"],
    tags: ["content", "structure", "progressive-disclosure"],
    prompts: [
      `You are a content designer. I will paste a page's current content (or screenshot description) and tell you the page's job.

Task:
1. List the questions a user has at this point in their journey, in decision order.
2. Map current content blocks to those questions — flag unanswered questions and blocks answering nothing.
3. Propose a new content outline: order, what's above the fold, what moves to progressive disclosure, what gets deleted.
4. Mark any decision-critical info (price, terms, limits) currently hidden.

Output: (a) question list, (b) gap table, (c) new outline with one-line rationale per block. Do not write final copy — structure only.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Content Order: Pricing Page",
      before: { label: "เรียงตามที่ทีมอยากเล่า", points: ["Vision statement 3 ย่อหน้า", "Feature ทั้งหมด 24 ข้อ", "ราคาอยู่หลัง scroll 4 จอ", "เงื่อนไขยกเลิกใน PDF"] },
      after: { label: "เรียงตามการตัดสินใจ", points: ["ราคา + สิ่งที่ได้ (จอแรก)", "ตารางเทียบ plan", "FAQ: ยกเลิก/คืนเงิน", "CTA + trust signals"] },
    },
  },
  {
    id: "ux-writing",
    slug: "ux-writing",
    term: "UX Writing",
    category: "ux-foundation",
    icon: "✍️",
    level: "basic",
    aliases: ["microcopy"],
    shortDescription: "การเขียนข้อความบน UI ให้ user รู้ว่าอยู่ไหน ทำอะไรได้ และเกิดอะไรขึ้น — ด้วยคำน้อยที่สุด",
    fullDefinition:
      "UX writing คือ microcopy ทั้งหมดบน interface: ปุ่ม, label, error, empty state, confirmation — เกณฑ์คือ ชัด (clear) > กระชับ (concise) > มีบุคลิก (personality) ตามลำดับ ห้ามสลับ ปุ่มที่ดีบอก outcome ของการกด ('บันทึกและเผยแพร่') ไม่ใช่ generic ('ตกลง')",
    whyItMatters:
      "Copy คือ interface ที่ user อ่านตอนตัดสินใจ — ปุ่ม 'OK/Cancel' ใน dialog ลบข้อมูลที่ถามกำกวม ทำให้คนลบผิด, error 'เกิดข้อผิดพลาด' สร้าง ticket ที่ support ตอบไม่ได้, microcopy ขอ permission ที่กำกวมทำ opt-in ตก 30-50%",
    whenToUse: [
      "ทุกปุ่ม/CTA: ตรวจว่า label บอก outcome ไม่ใช่ generic verb",
      "ทุก error state: บอกว่าเกิดอะไร เพราะอะไร แก้ยังไง",
      "ทุก dialog ยืนยัน: คำตอบต้องตอบคำถามตรงๆ ('ลบโน้ต' ไม่ใช่ 'ตกลง')",
    ],
    whenNotToUse: [
      "อย่าใส่ personality/มุกในจุด stress สูง (error การจ่ายเงิน, ข้อมูลหาย) — user อยากได้ทางแก้ ไม่ใช่ความน่ารัก",
      "อย่าเกลาคำเมื่อปัญหาคือโครงสร้าง content (ลำดับผิด/ข้อมูลขาด) — นั่นคืองาน content design",
    ],
    howToApply: [
      "เขียนปุ่นด้วยกริยา + outcome: 'บันทึกฉบับร่าง', 'จ่าย ฿590', 'ส่งให้ 3 คน'",
      "Error format: เกิดอะไร + เพราะอะไร (ถ้ารู้) + ทำอะไรต่อ — 'อัปโหลดไม่สำเร็จ ไฟล์เกิน 10MB — ลองบีบอัดหรือเลือกไฟล์เล็กลง'",
      "Dialog ยืนยัน: หัวข้อเป็นคำถามเจาะจง ปุ่มเป็นคำตอบของคำถามนั้น",
      "Empty state: บอกว่าทำไมว่าง + ทำอะไรได้ + ปุ่มเริ่ม",
      "อ่านออกเสียง — ถ้าพูดกับลูกค้าต่อหน้าไม่ได้แบบนี้ ให้เขียนใหม่",
      "ทำ terminology sheet: ของสิ่งเดียวเรียกชื่อเดียวทั้ง app",
    ],
    checklist: [
      "ไม่มีปุ่ม 'OK/ตกลง/Submit' ลอยๆ ใน dialog สำคัญ",
      "Error ทุกตัวบอกวิธีแก้ ไม่ใช่แค่รหัส/คำว่าผิดพลาด",
      "ศัพท์เรียก concept เดียวกันตรงกันทุกหน้า (ไม่สลับ 'ร้าน/ช็อป/สโตร์')",
      "ไม่มีศัพท์ภายใน/technical ที่ user ไม่รู้จัก",
      "Copy จุด stress สูงตรงไปตรงมา ไม่มีมุก",
      "ทุก empty state มี next action",
    ],
    deliverables: ["Copy spec ใน design file (ทุก state มี copy จริง ไม่ใช่ lorem)", "Terminology sheet + voice & tone guide ฉบับย่อ"],
    goodExample:
      "Dialog: 'ลบโน้ต \"ประชุมทีม 12 มิ.ย.\" ไหม? กู้คืนไม่ได้' ปุ่ม: [ลบโน้ต] [เก็บไว้] — user รู้ว่ากำลังลบอะไร ผลถาวรไหม และปุ่มตอบคำถามตรงๆ",
    badExample:
      "Dialog: 'คุณแน่ใจหรือไม่?' ปุ่ม: [ตกลง] [ยกเลิก] — ไม่รู้ว่าลบอะไร 'ยกเลิก' แปลว่ายกเลิกการลบหรือยกเลิกรายการ? คนกดผิดแล้วโทษตัวเอง",
    commonMistakes: [
      "เอา personality นำความชัด ('อุ๊ปส์! มีบางอย่างผิดพลาด~')",
      "ปุ่ม generic (OK, Submit, ตกลง) ที่ไม่บอก outcome",
      "Error message เขียนจากมุมระบบ ('Error 422: validation failed')",
      "Copy เป็นของ dev เขียนเอาหน้างานตอน implement เพราะ design file ใส่ lorem ipsum",
    ],
    relatedSlugs: ["content-design", "copy-behavior", "error-state-review", "empty-state-review", "cta-hierarchy"],
    tags: ["microcopy", "writing", "error-messages", "labels"],
    prompts: [
      `You are a UX writer. I will paste UI copy (buttons, errors, dialogs, empty states) with context about where each appears.

Rewrite each item following:
- Buttons: verb + outcome, no generic "OK/Submit"
- Errors: what happened + why (if known) + how to fix, written from user's perspective
- Confirm dialogs: specific question as title, buttons that answer the question
- Empty states: why empty + what to do + action
- Clear > concise > personality, in that order. No jokes in high-stress moments.

Output: table (location / current copy / rewritten copy / rationale in one line). Then list terminology inconsistencies found across the set.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Microcopy Rewrite",
      before: { label: "Generic", points: ["'คุณแน่ใจหรือไม่?' [ตกลง][ยกเลิก]", "'เกิดข้อผิดพลาด ลองใหม่อีกครั้ง'", "'No data found'"] },
      after: { label: "Outcome-driven", points: ["'ลบโน้ตนี้ไหม? กู้คืนไม่ได้' [ลบโน้ต][เก็บไว้]", "'อัปโหลดไม่สำเร็จ ไฟล์เกิน 10MB — เลือกไฟล์เล็กลง'", "'ยังไม่มีใบแจ้งหนี้ — จะแสดงที่นี่หลังขายครั้งแรก'"] },
    },
  },
];
