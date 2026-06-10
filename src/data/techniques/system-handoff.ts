import type { Technique } from "@/types/playbook";

export const SYSTEM_HANDOFF_TECHNIQUES: Technique[] = [
  {
    id: "tech-component-audit",
    slug: "component-audit",
    title: "Component Audit",
    category: "Design System & Handoff",
    useCase: "สำรวจว่า UI จริงในโปรดักชันมี component กี่เวอร์ชัน ซ้ำตรงไหน หลุด system ตรงไหน — จุดเริ่มของการทำ/รื้อ design system",
    difficulty: "intermediate",
    timeRequired: "2-4 วัน ตามขนาด product",
    participants: "Designer 1 + dev 1 (ต้องเห็นทั้ง Figma และ code)",
    inputNeeded: [
      "สิทธิ์เข้าถึง production UI ทุกหน้า + codebase + Figma",
      "ขอบเขต: component ชนิดไหนก่อน (ปุ่ม/ฟอร์ม/การ์ด มักคุ้มสุด)",
      "เครื่องมือ capture (screenshot ทุก instance)",
    ],
    steps: [
      "เลือก component ชนิดเดียวต่อรอบ (เช่น ปุ่มทั้งหมด) — audit ทุกชนิดพร้อมกันจะจมและไม่จบ",
      "เก็บ instance จากของจริง: เดิน production ทุกหน้า capture ทุกปุ่ม + dev grep หา implementation ใน code",
      "จัดเรียงทั้งหมดบนบอร์ดเดียว (ภาพ inventory ที่เห็นปุ่ม 23 เวอร์ชันเรียงกันคือเครื่องมือโน้มน้าวที่ดีที่สุดที่มี)",
      "จัดกลุ่ม: เหมือนกันเป๊ะ / ต่างโดยตั้งใจ (variant จริง) / ต่างโดยอุบัติเหตุ (drift — สี ขยับ 1 ระดับ, radius ต่าง 2px)",
      "ต่อกลุ่ม drift: ตามหาต้นเหตุ — clone แล้วแก้? token ไม่มีให้ใช้? ไม่รู้ว่ามีของกลาง?",
      "ตัดสิน canonical ต่อชนิด: เวอร์ชันไหนเป็นมาตรฐาน (อิงการใช้มากสุด + ถูกหลักสุด ไม่ใช่อันที่ทีมชอบ)",
      "ทำแผน consolidation: เรียงตาม จำนวน instance × ความถี่ที่ผู้ใช้เห็น — ปุ่ม primary มาก่อน tooltip เสมอ",
    ],
    output: "Component inventory board + ตาราง: ชนิด × เวอร์ชันที่พบ × intentional/drift × canonical ที่เลือก + consolidation plan เรียงลำดับ",
    decisionCriteria: [
      "ต่างโดยอุบัติเหตุ = normalize เข้า canonical (ยอมรับ visual เปลี่ยนเล็กน้อย — flag ให้รู้)",
      "ต่างโดยตั้งใจที่มีเหตุผล = กลายเป็น variant ที่มีชื่อใน system",
      "Drift ที่เกิดจาก token ไม่มีให้ใช้ = ปัญหาของ system ไม่ใช่ของ dev — แก้ที่ token",
    ],
    exampleScenario:
      "ก่อนเริ่ม design system ทีม audit ปุ่มอย่างเดียว — พบ 23 เวอร์ชันใน production: ตั้งใจจริง 4 (primary/secondary/ghost/danger), ที่เหลือ 19 คือ drift จากการ clone — บอร์ด inventory ถูกฉายในห้องผู้บริหาร ได้งบทำ system ในประชุมเดียว — consolidation 6 สัปดาห์เหลือ 4 variants",
    commonMistakes: [
      "Audit จาก Figma อย่างเดียว — ความจริงอยู่ใน production ซึ่ง drift กว่า Figma เสมอ",
      "Audit ทุก component พร้อมกัน — ไม่จบและทีมหมดแรงก่อนเห็นผล",
      "นับแต่จำนวนไม่หาสาเหตุ drift — แก้ปลายเหตุแล้ว drift กลับมาใหม่",
      "เลือก canonical ตามความชอบ ไม่ใช่ตามการใช้จริง+ความถูกหลัก",
    ],
    template: `COMPONENT AUDIT
ชนิดรอบนี้: ___ (ทีละชนิด!)
เก็บจาก: [ ] production ทุกหน้า  [ ] code grep  [ ] Figma
INVENTORY: พบ ___ เวอร์ชัน [แปะบอร์ด]
จัดกลุ่ม: เหมือนเป๊ะ ___ / ตั้งใจต่าง (variant) ___ / drift ___
สาเหตุ drift: clone-แก้ ___ / token ไม่มี ___ / ไม่รู้ว่ามีของกลาง ___
CANONICAL: ___ (เหตุผล: ใช้มากสุด/ถูกหลัก)
แผน: [กลุ่ม × instances × ใครเห็นบ่อย → ลำดับ]`,
    prompt: `You are a design systems engineer running a component audit. Component type this pass: [TYPE]. Collected instances: [PASTE: screenshots described / code snippets / locations — from production AND code].

Analyze:
1. Group instances: pixel-identical / intentionally-different (legitimate variant candidates — state the legitimate reason) / accidentally-drifted (list the specific deltas: color step, radius, padding)
2. Drift root causes per group: cloned-and-modified / missing token forced improvisation / shared component unknown — the cause determines the fix
3. Canonical recommendation: which version becomes standard (most-used + most spec-correct, with reasoning) + the named variant set
4. Consolidation plan: ordered by instance count × user visibility; per item — normalize (note visual deltas for sign-off) or promote to variant
5. System gaps exposed: tokens/variants that must exist so this drift can't recur
Output: grouping table + root causes + canonical + ordered plan + system gaps.`,
    relatedSlugs: ["component-anatomy", "design-system-governance", "ux-debt", "component-specification"],
    tags: ["audit", "design-system", "consolidation"],
  },
  {
    id: "tech-design-token-audit",
    slug: "design-token-audit",
    title: "Design Token Audit",
    category: "Design System & Handoff",
    useCase: "ตรวจสุขภาพ token: ค่า hardcode หลุดระบบกี่จุด, token ที่มีถูกใช้จริงไหม, scale มีรูตรงไหน — ก่อน rebrand หรือทำ dark mode",
    difficulty: "intermediate",
    timeRequired: "1-2 วัน (เครื่องมือช่วยได้มาก)",
    participants: "Dev 1 (สแกน code) + designer 1 (ตัดสิน mapping)",
    inputNeeded: [
      "Token system ปัจจุบัน (theme file, tailwind config)",
      "Codebase ที่ grep ได้", "Figma styles (เทียบสองโลก)",
    ],
    steps: [
      "สแกน code หาค่า hardcode ในขอบเขต (สี/spacing/font/radius/shadow): regex หา hex, px แปลกๆ, inline style — ได้ตาราง ค่า × จำนวน × ตำแหน่ง",
      "จัดกลุ่มค่าใกล้เคียง: #6B7280 กับ #6A7280 กับ 15px ข้าง 16px — near-miss คือ drift จาก token ที่ตั้งใจ ไม่ใช่การตัดสินใจใหม่",
      "เทียบสองทิศ: ค่า hardcode ที่มี token ตรง (แทนได้เลย) / ค่าที่ไม่มี token รองรับ (รูของ scale — cluster ≥3 = ต้องมี token ใหม่)",
      "ตรวจฝั่ง token: token ไหนไม่ถูกใช้เลย (ตาย — ลบ) / token ไหนถูกใช้ผิดความหมาย (error-red ใช้ทำ badge ตกแต่ง — semantic เสีย)",
      "เทียบ Figma vs code: ชื่อตรงกันไหม ค่าตรงกันไหม — สองโลกที่ drift จากกันคือ handoff ที่ปวดทุกวัน",
      "สรุป mapping table ให้คนอนุมัติ → ทำแผนแทนที่เป็น batch + เพิ่ม lint rule กันค่าใหม่หลุด",
    ],
    output: "Hardcode inventory (ค่า × จำนวน × token ที่ควรใช้) + token health (ตาย/ใช้ผิด) + scale gaps + Figma-code drift + แผนแก้ + lint guard",
    decisionCriteria: [
      "Near-miss values = snap เข้า token (ยอมรับ visual delta จิ๋ว — list จุดให้ตรวจ)",
      "Cluster ≥3 ที่ไม่มี token = สร้าง token ใหม่ / ต่ำกว่านั้น = แทนด้วยตัวใกล้สุด",
      "Token ตายเกิน 6 เดือน = ลบ — token ที่ไม่มีใครใช้คือเสียงรบกวนใน autocomplete",
    ],
    exampleScenario:
      "ก่อน rebrand ทีมสแกนพบสี hardcode 214 จุด — 80% map เข้า token เดิมได้, เจอ cluster ส้ม 12 จุดที่ไม่มี token (ทุกคน improvise สีเตือนกันเอง) → เพิ่ม semantic warning token — rebrand จริงเปลี่ยน token ไฟล์เดียว แทนที่จะ hunt 214 จุด",
    commonMistakes: [
      "Audit แล้วแทนที่มือทั้งหมดโดยไม่เพิ่ม lint guard — หกเดือนกลับมาเหมือนเดิม",
      "Snap ค่า near-miss โดยไม่ list จุดที่ภาพเปลี่ยน — เจอ 'ทำไมหน้านี้ขยับ' ทีหลัง",
      "ลืมตรวจการใช้ token ผิดความหมาย — นับแต่ hardcode ทั้งที่ semantic เสียก็พังเหมือนกัน",
      "ไม่เทียบ Figma — แก้ฝั่ง code เสร็จแต่ designer ยัง spec ด้วยค่าเก่า",
    ],
    template: `TOKEN AUDIT
ขอบเขต: [สี/spacing/type/...] เครื่องมือ: [grep/script]
HARDCODE: [ค่า × จำนวน × ตัวอย่างไฟล์ × token ที่ควรใช้/ไม่มี]
Near-miss: [คู่ × delta × snap?]
SCALE GAPS: cluster ≥3 ไม่มี token: ___ → เสนอ token ใหม่: ___
TOKEN HEALTH: ตาย (0 การใช้): ___ / ใช้ผิด semantic: ___
FIGMA vs CODE: ชื่อ/ค่าที่ไม่ตรง: ___
แผน: batch แทนที่ ___ → lint rule: ___`,
    prompt: `You are a design systems engineer auditing token health. Token system: [PASTE THEME/CONFIG]. Scan results: [PASTE: hardcoded values with counts + locations]. Figma styles: [PASTE IF AVAILABLE].

Analyze:
1. Map each hardcoded value-group: exact token match / near-miss (state delta, recommend snap with visual-change locations listed) / no-home (cluster size — ≥3 proposes a new token, <3 maps to nearest)
2. Token health: dead tokens (zero usage — retire list), semantically-misused tokens (quote the misuse)
3. Figma-code drift: name and value mismatches between the two worlds
4. Remediation plan: batches sized for review, ordered by blast radius; required design sign-offs (snaps + new tokens)
5. The lint/stylelint guard that prevents recurrence + its escape-hatch policy
Never invent tokens for values without a cluster — flag them instead.`,
    relatedSlugs: ["design-tokens", "design-system-governance", "color-system", "design-to-code-review"],
    tags: ["tokens", "audit", "drift"],
  },
  {
    id: "tech-ui-state-matrix",
    slug: "ui-state-matrix",
    title: "UI State Matrix",
    category: "Design System & Handoff",
    useCase: "ทำตาราง variant × state ของ component/หน้า ให้เห็นครบในที่เดียว — หา state ที่ขาดก่อน dev เจอเอง และใช้เป็น spec + เครื่องมือ QA",
    difficulty: "basic",
    timeRequired: "2-4 ชม. ต่อ component / 1 วันต่อหน้า",
    participants: "Designer 1 + dev 1 (รู้ว่า state ไหน technically เกิดได้)",
    inputNeeded: [
      "Component/หน้าที่จะทำ matrix", "Design ปัจจุบัน (Figma)",
      "รายการ state ที่ระบบเกิดได้จริงจาก dev (อย่าเดาเอง)",
    ],
    steps: [
      "ลิสต์แกนตั้ง: variants ทั้งหมด (primary/secondary/..., หรือ section ของหน้า)",
      "ลิสต์แกนนอน: states — interaction (default/hover/focus-visible/active/disabled) + content (empty/loading/error/overflow) — ถาม dev ว่ามีอะไรเกิดได้อีก (offline? permission?)",
      "เติมทุกช่อง: มี design แล้ว (ลิงก์) / ยังไม่มี (ช่องแดง) / เกิดไม่ได้จริง (ขีดทิ้ง พร้อมเหตุผลจาก dev)",
      "ช่องที่ขาด: ออกแบบให้ครบ — ช่องว่างทุกช่องคือการตัดสินใจที่จะถูก dev ตัดสินแทนตอนตี 2",
      "ระบุกฎเมื่อ state ชนกัน: disabled+loading ใครชนะ, error+empty แสดงอะไร — เขียนเป็นกติกา",
      "ใช้ matrix สามทาง: แนบ handoff (spec), ให้ dev เช็คตอน build, ให้ QA ไล่ตอนตรวจ — เอกสารเดียวสามหน้าที่",
    ],
    output: "State matrix สมบูรณ์ (ทุกช่องมี design/ขีดทิ้งมีเหตุผล) + กฎ state ชนกัน + ลิงก์เข้า ticket",
    decisionCriteria: [
      "ช่องที่เกิดได้จริงแต่ไม่มี design = ปิดให้หมดก่อน handoff — นี่คือนิยามของ 'design เสร็จ'",
      "focus-visible ขาด = blocker (a11y) ไม่ใช่ nice-to-have",
      "State ที่เกิดไม่ได้ ขีดทิ้งพร้อมเหตุผล — กัน designer รุ่นถัดไปมาออกแบบของที่ไม่มีจริง",
    ],
    exampleScenario:
      "ก่อนส่งมอบ component ตาราง ทีมทำ matrix 4 variants × 9 states — พบช่องว่าง 11 ช่อง รวม 'loading ขณะ sort' กับ 'error เฉพาะบางคอลัมน์' ที่ไม่มีใครเคยคิด — ปิดครบก่อน handoff, dev build รอบเดียวไม่มีคำถามกลางทาง, QA ใช้ matrix เดียวกันไล่ตรวจ",
    commonMistakes: [
      "ทำ matrix จากจินตนาการ designer — ไม่ถาม dev ว่า state ไหนเกิดได้จริง/เพิ่มเติม",
      "ลืมแกน content states (empty/overflow) — จำแต่ interaction states",
      "ไม่กำหนดกฎ state ชนกัน — disabled+loading กลายเป็น improvise",
      "ทำเสร็จเก็บใน Figma ไม่แนบ ticket — dev ไม่เคยเห็น",
    ],
    template: `UI STATE MATRIX
Component/หน้า: ___
แกนตั้ง (variants): ___
แกนนอน (states): default / hover / focus-visible / active / disabled / loading / empty / error / overflow [+จาก dev: ___]
ทุกช่อง: [✓ ลิงก์ design / ✗ ขาด → ออกแบบ / — เกิดไม่ได้ (เหตุผล)]
กฎชนกัน: disabled+loading → ___ / error+empty → ___
ใช้ที่: [ ] แนบ ticket  [ ] dev self-check  [ ] QA checklist`,
    prompt: `You are a design systems engineer building a state matrix. Component/screen: [NAME]. Variants: [LIST]. Existing designs: [WHAT'S DESIGNED]. Engineering input on possible states: [PASTE — or list assumptions to verify].

Build:
1. Full matrix: variants × states (interaction: default/hover/focus-visible/active/disabled + content: loading/empty/error/overflow + system: [offline/permission per input]) — each cell: DESIGNED / MISSING / IMPOSSIBLE (with reason)
2. For every MISSING cell: the spec to fill it — derive from existing design language and tokens, flag cells needing a real design decision vs mechanical derivation
3. Conflict rules: precedence when states combine (disabled+loading, error+empty) — write the rule set
4. The QA checklist version: matrix as yes/no checks a reviewer runs
Order missing cells: focus-visible and error states first (a11y + trust), hover polish last.`,
    relatedSlugs: ["component-states", "state-specification", "ui-acceptance-criteria", "qa-checklist"],
    tags: ["states", "matrix", "spec"],
  },
  {
    id: "tech-responsive-behavior-review",
    slug: "responsive-behavior-review",
    title: "Responsive Behavior Review",
    category: "Design System & Handoff",
    useCase: "ตรวจ/สเปกพฤติกรรม responsive ของหน้า ก่อน handoff หรือเมื่อ bug จอกลาง (iPad) โผล่ซ้ำ — ปิดช่องว่างระหว่าง mockup 2-3 ขนาด",
    difficulty: "intermediate",
    timeRequired: "0.5 วัน ต่อหน้า",
    participants: "Designer 1 + dev 1 (รู้ breakpoint ระบบ)",
    inputNeeded: [
      "หน้า (build แล้วใน staging ดีสุด — ลาก resize ได้จริง)",
      "Breakpoints มาตรฐานของระบบ", "Mockup ที่มี (ขนาดไหนบ้าง)",
    ],
    steps: [
      "ลาก resize จริงจาก 320 → 1440 ช้าๆ — จุดแตกอยู่ 'ระหว่าง' mockup เสมอ จดทุกความผิดปกติพร้อมความกว้างที่เกิด",
      "ต่อ region ของหน้า ระบุพฤติกรรม: เปลี่ยนรูปแบบที่ไหน (table→card ที่กี่ px) / ยืดแบบไหน (fluid ใน max-width หรือ snap)",
      "ตรวจของหายบนจอเล็ก: ทุกอย่างที่ซ่อนต้องมีที่ไป (drawer/accordion/หน้า detail) — หายเฉยๆ = finding",
      "ตรวจ breakpoint แปลกปลอม: หน้านี้ตั้ง breakpoint เองนอกระบบไหม — ทุกค่าแปลกคือหนี้",
      "ตรวจ touch บนจอ touch: target ≥44px, hover-only ต้องมีทางเลือก, horizontal scroll ตั้งใจมี affordance",
      "ตรวจช่วงตกสำรวจ (768-1023 บ่อยสุด): layout ไหนใช้ ใครตัดสิน — ถ้าคำตอบคือ 'CSS มันออกมาเอง' = ต้องสเปก",
      "เขียน spec ต่อ region: ช่วง × layout × กติกายืด — แนบ ticket",
    ],
    output: "Responsive spec ต่อ region (ช่วง × layout × กติกา) + bug list พร้อมความกว้างที่เกิด + รายการ breakpoint แปลกปลอมที่ต้อง migrate",
    decisionCriteria: [
      "ทุกการซ่อนบนจอเล็กต้องตอบได้ว่า 'ไปอยู่ไหน' — ตอบไม่ได้ = แก้",
      "ช่วงกลางที่ไม่มีใครตัดสิน = สเปกให้ชัดก่อน bug iPad ถัดไป",
      "Breakpoint นอกระบบ = migrate เข้ามาตรฐาน เว้นแต่มีเหตุผลเขียนไว้",
    ],
    exampleScenario:
      "Bug 'ตาราง order แตกบน iPad' โผล่รอบที่สาม — review ลาก resize พบที่ 768-1023 ตารางใช้ layout desktop บีบ (ไม่มีใครเคยสเปกช่วงนี้) — สเปกใหม่: ซ่อน 2 คอลัมน์รองที่ <1024 + กติกากลางถูกเขียนลง system doc — bug ช่วงกลางหยุดโผล่",
    commonMistakes: [
      "ตรวจแค่ 3 ขนาดตาม mockup — จุดแตกอยู่ระหว่างเสมอ ต้องลาก resize",
      "ซ่อนของบนมือถือโดยไม่มีทางเข้าถึง — มือถือคือ user หลักไม่ใช่เวอร์ชันตัดทอน",
      "ปล่อย hover-only รอด — เจอตอน user ถือ iPad แล้วเปิด tooltip ไม่ได้",
      "สเปกเป็น pixel ทุกค่าทุกช่วง — over-spec; ระบุจุดเปลี่ยน + กติกายืดพอ",
    ],
    template: `RESPONSIVE REVIEW
หน้า: ___ ระบบ breakpoints: ___
ลาก resize 320→1440: ผิดปกติที่ [px: อาการ]
ต่อ region: [ชื่อ] เปลี่ยนรูปแบบที่: ___ / ยืด: [fluid max-___ / snap]
ของหาย <768: [สิ่ง → ไปอยู่: drawer/accordion/detail/หายเฉยๆ!]
Breakpoint แปลกปลอม: ___ → migrate
Touch: targets <44px: ___ / hover-only: ___
ช่วงตกสำรวจ 768-1023: ใช้ layout: ___ (ตัดสินโดย: ___)`,
    prompt: `You are a UI engineer reviewing responsive behavior. Page: [NAME, staging URL or screenshots at multiple widths]. System breakpoints: [LIST]. Resize-walk findings: [PASTE: anomalies + the widths where they occur].

Produce:
1. Per-region spec: where layout transforms (from→to at which breakpoint) + the in-between rule (fluid within max / snap)
2. Hidden-content accounting: everything removed at small sizes + where it lives — flag anything that simply vanishes
3. Rogue breakpoints: values outside the system → migration list
4. Touch pass: sub-44px targets, hover-only interactions, unaffordanced horizontal scrolls
5. The orphan ranges (esp. 768-1023): current behavior + the decided spec so the next iPad bug can't happen
Output: spec table (range/layout/rule per region) + findings by severity + the doc-ready system rule.`,
    relatedSlugs: ["responsive-behavior", "responsive-rules", "mobile-first-review", "component-specification"],
    tags: ["responsive", "breakpoints", "spec"],
  },
  {
    id: "tech-developer-handoff-checklist",
    slug: "developer-handoff-checklist",
    title: "Developer Handoff Checklist",
    category: "Design System & Handoff",
    useCase: "เช็คความพร้อมของ design ก่อนส่งมอบทุก story — ปิดคำถามที่ dev จะถามกลาง sprint ให้จบก่อนเริ่ม",
    difficulty: "basic",
    timeRequired: "1-2 ชม. ต่อ story (ถูกกว่าคำถามกลาง sprint หลายเท่า)",
    participants: "Designer เจ้าของงาน + dev ที่จะรับ (walkthrough ด้วยกัน)",
    inputNeeded: [
      "Design ที่คิดว่าเสร็จ + ticket", "Checklist กลางของทีม (สร้างจาก gap ที่เคยเกิด)",
      "Token/component list ของระบบ",
    ],
    steps: [
      "ไล่ checklist 6 หมวดกับ design ก่อนเรียก dev: states ครบไหม (loading/empty/error/overflow — ใช้ state matrix), responsive ระบุช่วงเปลี่ยน, content behavior (ยาว/ว่าง/format), a11y พื้นฐาน (focus order, labels, contrast), token mapping (ทุกค่าอ้าง token ได้), edge cases หลักถูกตัดสิน",
      "เขียน AC เป็น Given/When/Then จากของที่ไล่ — ยังเขียนไม่ได้ข้อไหน = ตรงนั้นยังตัดสินใจไม่จบ",
      "Walkthrough กับ dev 15-30 นาที: เดิน flow + states — ให้ dev ถามจนหมด, ทุกคำถามที่ตอบไม่ได้จดเป็น open item",
      "ปิด open items ก่อน sprint เริ่ม — ไม่ใช่ 'เดี๋ยวตอบใน Slack' (ซึ่งแปลว่า dev จะเดาไปก่อน)",
      "แนบทุกอย่างใน ticket เดียว: ลิงก์ design + AC + state matrix + responsive spec — ไม่กระจายใน thread",
      "หลัง story จบ: คำถามที่โผล่กลางทางทั้งหมด → เพิ่มเข้า checklist กลาง (เอกสารโตจากแผลจริง)",
    ],
    output: "Ticket ที่ครบ: design + AC + states + responsive + open items ปิดแล้ว + checklist กลางที่อัปเดต",
    decisionCriteria: [
      "เขียน AC ไม่ได้ = design ยังไม่เสร็จ ไม่ว่า Figma จะสวยแค่ไหน",
      "คำถามจาก dev ใน walkthrough ที่ตอบไม่ได้ = open item ต้องปิดก่อน sprint ไม่ใช่ระหว่าง",
      "คำถามชนิดเดิมโผล่ ≥2 stories = เพิ่ม checklist กลาง",
    ],
    exampleScenario:
      "ทีมที่ dev ถามกลาง sprint เฉลี่ย 6 คำถาม/story เริ่มใช้ handoff checklist + walkthrough 20 นาที — สาม sprint ถัดมาคำถามกลางทางเหลือ ~1/story และ rework จาก 'เดาผิด' หายเกือบหมด — เวลา 2 ชม. ที่ลงทุนต่อ story ได้คืนหลายเท่า",
    commonMistakes: [
      "ส่ง Figma link เปล่าๆ แล้วเรียกว่า handoff — เอกสารไม่เท่ากับการส่งมอบ",
      "ข้าม walkthrough เพราะ 'design ชัดอยู่แล้ว' — ชัดในหัวคนวาดเสมอ",
      "Open items ปิดใน Slack thread ที่หาไม่เจอ — คำตอบต้องกลับเข้า ticket",
      "Checklist นิ่งไม่โตจาก gap จริง — ใช้ template สำเร็จรูปตลอดกาล",
    ],
    template: `HANDOFF CHECKLIST (ต่อ story)
[ ] States ครบ: loading/empty/error/overflow (matrix แนบ)
[ ] Responsive: จุดเปลี่ยน layout + กติกายืด ระบุแล้ว
[ ] Content: ยาวสุด/ว่าง/format กำหนดแล้ว
[ ] A11y: focus order, labels, contrast เช็คแล้ว
[ ] Tokens: ทุกค่า map ได้ (ค่าแปลกปลอม: ___)
[ ] Edge cases หลัก: ตัดสินแล้ว: ___
[ ] AC เขียนเป็น Given/When/Then: ___ ข้อ
[ ] Walkthrough กับ dev: ___ / open items: ___ → ปิดเมื่อ: ___
หลังจบ story: คำถามกลางทาง → เข้า checklist กลาง`,
    prompt: `You are a senior frontend engineer receiving a design handoff. Inputs: [DESIGN LINKS/SCREENSHOTS + TICKET + TOKEN LIST].

Interrogate readiness across 6 areas — output every unanswered item as a direct question:
1. STATES: loading/empty/error/overflow per component — designed or missing?
2. RESPONSIVE: transformation points + stretch rules — specified or guess-territory?
3. CONTENT: max lengths, truncation, empty values, formats — decided?
4. A11Y: focus order, accessible names, contrast — verifiable from the design?
5. TOKENS: every visible value → a token? List orphan values
6. EDGE CASES: the obvious ones for this feature ([suggest 3-5]) — decided?
Then: draft the Given/When/Then AC from what IS specified, and the OPEN QUESTIONS list (what I'd otherwise ask mid-sprint). Verdict: ready / ready-after-answers / not ready.`,
    relatedSlugs: ["ui-acceptance-criteria", "developer-handoff-prompt", "state-specification", "edge-cases"],
    tags: ["handoff", "checklist", "collaboration"],
  },
  {
    id: "tech-ui-ac-writing",
    slug: "ui-acceptance-criteria-writing",
    title: "UI Acceptance Criteria Writing",
    category: "Design System & Handoff",
    useCase: "เขียน AC ของ story ที่มี UI ให้ตรวจ pass/fail ได้จริง — ครอบ states, responsive, a11y ไม่ใช่แค่ happy path",
    difficulty: "intermediate",
    timeRequired: "1-2 ชม. ต่อ story",
    participants: "Designer/PM เขียน + dev รีวิวก่อนเข้า sprint",
    inputNeeded: [
      "Story + user goal", "Design ครบ states (ถ้าไม่ครบ — กลับไปทำให้ครบก่อน)",
      "AC template ของทีม (Given/When/Then)",
    ],
    steps: [
      "เริ่มจาก user goal ของ story: AC ทุกข้อต้องปกป้องการไปถึง goal นั้น — ไม่ใช่ลิสต์ฟีเจอร์",
      "เขียน happy path เป็น Given/When/Then ก่อน: บริบทตั้งต้น / action / ผลที่ 'ตรวจได้' — ห้ามคำว่า 'ถูกต้อง', 'เหมาะสม', 'ใช้งานง่าย' (ตรวจไม่ได้ทั้งหมด)",
      "ไล่ state เพิ่ม: loading (>300ms เห็นอะไร), empty (first-use vs no-results), error (network vs validation — แยกข้อ), edge values",
      "เพิ่ม responsive: ข้อที่ layout/พฤติกรรมเปลี่ยน ('Given จอ <768px, Then ตารางเป็น card list')",
      "เพิ่ม a11y ขั้นต่ำเป็นข้อบังคับ: 'ทำ action หลักจบได้ด้วย keyboard เท่านั้น' + focus/label ที่เกี่ยว",
      "รีวิวกับ dev: ข้อไหน dev ตีความได้สองแบบ = เขียนใหม่ / รวมแล้วเกิน ~12 ข้อ = story ใหญ่ไป แตกก่อน",
    ],
    output: "AC list ใน ticket: Given/When/Then ครอบ happy + states + responsive + a11y — dev อ่านแล้วไม่มี 'แล้วกรณี X ล่ะ'",
    decisionCriteria: [
      "ทุกข้อตรวจ pass/fail ได้โดยไม่ตีความ — มีคำว่า 'เหมาะสม/ถูกต้อง' = เขียนใหม่",
      "เกิน 12 ข้อ = สัญญาณ story ใหญ่เกิน แตก story ไม่ใช่ยัด AC",
      "Dev อ่านแล้วยังถาม 'กรณี X' ได้ = AC ยังมีรู เติมหรือ flag เป็น out-of-scope ชัดๆ",
    ],
    exampleScenario:
      "Story 'ค้นหาออเดอร์' เคยเขียน AC ว่า 'ค้นหาทำงานถูกต้อง' — QA กับ dev เถียงกันว่า empty state อยู่ใน scope ไหม — เขียนใหม่ 8 ข้อ G/W/T รวม no-results, skeleton, จอแคบ, keyboard — รอบ build ถัดมา zero ดราม่า เพราะ 'เสร็จ' มีนิยามเดียว",
    commonMistakes: [
      "AC เป็นความรู้สึก ('ใช้งานง่าย') — ตรวจไม่ได้ เถียงได้ตลอด",
      "มีแต่ happy path — แล้ว states กลายเป็นดินแดน 'แล้วแต่ dev'",
      "เขียนหลัง dev ทำเสร็จเพื่อปิด process — ได้พิธีกรรม ไม่ได้คุณภาพ",
      "ยัดสเปก visual ระดับ pixel ลง AC — นั่นคือหน้าที่ของ handoff spec, AC คือ behavior",
    ],
    template: `AC WRITING (ต่อ story)
User goal: ____________
HAPPY: Given ___ / When ___ / Then [ผลที่ตรวจได้] ___
STATES:
  Loading: Given โหลด >300ms Then ___
  Empty: Given [first-use/no-results] Then ___ (แยกสองเคส)
  Error: Given [network/validation] Then ___ (แยกข้อ)
RESPONSIVE: Given จอ <___px Then ___
A11Y (บังคับ): ทำ [action หลัก] จบด้วย keyboard / focus ไป ___
นับรวม: ___ ข้อ (>12 = แตก story) | Dev รีวิวแล้ว: [วันที่]`,
    prompt: `You are a UX lead writing acceptance criteria. Story: [DESCRIPTION + USER GOAL]. Designs: [LINKS — states available].

Write testable Given/When/Then criteria:
1. Happy path from the user goal
2. States: loading (>300ms), empty (first-use AND no-results separately), errors (network AND validation separately), edge values
3. Responsive: every breakpoint where layout/behavior changes
4. A11y minimum: keyboard-only completion of the primary action, focus behavior, labels
Rules: every criterion pass/fail-verifiable without interpretation — ban "correctly", "appropriately", "user-friendly"; 5-12 criteria (more → propose the story split); flag any criterion the designs can't support yet (missing state design) as a design gap, not an AC.
Output: numbered AC list + design gaps + open questions.`,
    relatedSlugs: ["ui-acceptance-criteria", "state-specification", "design-qa", "qa-checklist"],
    tags: ["acceptance-criteria", "given-when-then", "definition-of-done"],
  },
  {
    id: "tech-design-qa-checklist",
    slug: "design-qa-checklist",
    title: "Design QA Checklist",
    category: "Design System & Handoff",
    useCase: "ตรวจงานที่ build แล้วเทียบ design/AC ด้วย checklist เดิมทุกครั้ง — เกณฑ์โปร่งใส dev เช็คเองได้ bug UI หลุดน้อยลง",
    difficulty: "basic",
    timeRequired: "สร้าง checklist 0.5 วัน / ใช้ 15-30 นาทีต่อ story",
    participants: "Designer ตรวจ + dev ใช้ self-check ก่อนส่ง",
    inputNeeded: [
      "Bug UI ที่เคยหลุดจริงของทีม (วัตถุดิบของ checklist)",
      "Staging + device จริงอย่างน้อย 1 มือถือ", "AC + spec ของ story ที่ตรวจ",
    ],
    steps: [
      "สร้าง checklist จากแผลจริง: ไล่ bug UI ที่หลุดไปโปรดักชัน 6 เดือนหลัง จัดเป็นหมวด — visual / states / responsive / content / interaction / a11y — หมวดละ 3-6 ข้อ yes/no",
      "ถ่วงน้ำหนักไปทาง bug ที่เกิดซ้ำ: ทีมที่ focus state หลุดบ่อยควรมีข้อ focus เจาะจงกว่า template ทั่วไป",
      "แยกชนิดข้อ: BLOCKER (ผิด spec/AC — ต้องแก้ก่อน merge) vs REVIEW (รสนิยม — คุยได้ไม่ block)",
      "กำหนด protocol: ตรวจบน staging + เครื่องจริง ≥1, ทุก fail ต้องมี screenshot + อ้างอิง spec/AC ข้อที่ผิด",
      "ให้ dev ใช้ชุดเดียวกัน self-check ก่อนส่ง — รอบเด้งกลับลดทันที",
      "ทุกครั้งที่ bug ชนิดใหม่หลุด: เพิ่มข้อใหม่ + พิจารณาถอดข้อที่ไม่เคยจับอะไรได้ (checklist ที่ยาวเกินจะไม่ถูกใช้)",
    ],
    output: "Checklist กลางมีเวอร์ชัน (ใน PR template) + QA report ต่อ story: pass/fail + หลักฐาน + อ้าง spec",
    decisionCriteria: [
      "Fail ที่อ้าง spec/AC ได้ = blocker / ความเห็นที่ spec ไม่ได้กำหนด = review comment อย่าปนกัน",
      "ตรวจจาก screenshot อย่างเดียวไม่นับ — interaction/responsive ต้องเครื่องจริง",
      "Checklist เกิน ~30 ข้อ = ตัด — ของที่ไม่มีใครทำจบไม่ปกป้องใคร",
    ],
    exampleScenario:
      "ทีมเคย design QA ตามอารมณ์ — รอบนี้จับสี รอบหน้าเพิ่งเห็น empty state — สร้าง checklist 22 ข้อจาก bug จริง 2 ปี + dev self-check: bug UI หลุดถึงโปรดักชันจาก ~5/release เหลือเกือบศูนย์ และ dev เลิกรู้สึกว่าด่านตรวจย้ายเสาทุกรอบ",
    commonMistakes: [
      "Copy checklist สำเร็จรูปจากเน็ตทั้งดุ้น — ไม่ตรงแผลจริงของทีม",
      "ตรวจตามความรู้สึกวันนั้น — เกณฑ์เปลี่ยนทุกรอบ dev เดาใจ",
      "Fail โดยไม่อ้าง spec — 'มันดูแปลกๆ' แก้ยังไงก็ไม่จบ",
      "ปน blocker กับรสนิยม — dev ไม่รู้อะไรต้องแก้ก่อน merge",
      "Checklist แช่แข็ง — bug ชนิดใหม่หลุดซ้ำเพราะไม่เคยถูกเพิ่ม",
    ],
    template: `DESIGN QA (ต่อ story — ตรวจบน staging + เครื่องจริง)
VISUAL: [ ] spacing/type ตรง token [ ] สีตรง palette [ ] align ตาม grid
STATES: [ ] hover/focus-visible/disabled/loading [ ] empty/error ตาม AC
RESPONSIVE: [ ] จุดเปลี่ยน layout ทำงาน [ ] 375px ไม่ overflow
CONTENT: [ ] text ยาวตัดตามกติกา [ ] format เลข/วันที่ตรง convention
INTERACTION: [ ] keyboard ครบ action หลัก [ ] transition ตาม spec
A11Y: [ ] labels ครบ [ ] contrast ผ่าน
ทุก fail: screenshot + อ้าง [spec/AC ข้อ] + [BLOCKER/REVIEW]
อัปเดต: bug ใหม่หลุด → เพิ่มข้อ (เวอร์ชัน: ___)`,
    prompt: `You are a UX lead building a team design-QA checklist. Our recurring UI bugs from past releases: [LIST TOP 5-10]. Product type: [WEB/MOBILE/BOTH]. Existing review pain: [e.g. "criteria change every round"].

Build:
1. Checklist in 6 sections (visual/states/responsive/content/interaction/a11y), 3-6 yes-no items each — weighted toward OUR recurring bugs (most specific checks there)
2. Each item tagged BLOCKER (violates spec/AC) or REVIEW (judgment — discuss, don't block)
3. Protocol: test on staging + ≥1 real device; fail evidence = screenshot + spec/AC reference
4. The dev self-check subset (same items, run before requesting review)
5. Maintenance rule: when items get added (new escaped bug type) and retired (never catches anything)
Cap at 30 items total. Output: paste-ready markdown for our PR template.`,
    relatedSlugs: ["design-qa", "qa-checklist", "ui-acceptance-criteria", "design-to-code-review"],
    tags: ["qa", "checklist", "review"],
  },
  {
    id: "tech-ux-debt-review",
    slug: "ux-debt-review",
    title: "UX Debt Review",
    category: "Design System & Handoff",
    useCase: "รวบรวม UX debt ที่กระจายอยู่ (ของที่ 'เดี๋ยวค่อยแก้' แล้วไม่เคยแก้) ให้เป็น backlog ที่มีราคา มีลำดับ และถูกจ่ายคืนจริงทุก sprint",
    difficulty: "intermediate",
    timeRequired: "เริ่มต้น 2-3 วัน + ดูแลต่อเนื่อง 1-2 ชม./sprint",
    participants: "Design lead 1 + ตัวแทน dev + input จาก support/QA",
    inputNeeded: [
      "แหล่ง debt: support tickets ซ้ำ, QA bug ที่ถูก downgrade, TODO ใน Figma/code, ผล audit เก่า",
      "เกณฑ์ impact ที่ทีมตกลง (user เจ็บแค่ไหน × เจอบ่อยแค่ไหน)",
      "ข้อตกลงงบจ่ายคืน (เช่น 10-20% ของ sprint)",
    ],
    steps: [
      "กวาดรวมจากทุกแหล่ง: support tickets ที่บ่นซ้ำ, bug UI ที่ถูกกด priority, inconsistency จาก audit, ของที่ทีม 'รู้ๆ กันอยู่' แต่ไม่มีใครจด — เข้า backlog เดียว",
      "ต่อรายการให้ครบ 4 ช่อง: อาการ (user เจออะไร) / หลักฐาน (ticket กี่ใบ, เจอกี่คน) / ต้นทุนที่จ่ายอยู่ (เวลา support, conversion ที่เสีย, ความเร็ว dev ที่ช้าลง) / ราคาแก้ (ประเมินหยาบ S/M/L)",
      "จัดลำดับด้วย impact ÷ effort — debt ที่ user เจอทุกวันราคา S ขึ้นก่อน debt ใหญ่ที่นานๆ เจอ",
      "แยกชนิด: debt ที่จ่ายดอกอยู่ (สร้างต้นทุนรายวัน) vs debt นิ่ง (น่าเกลียดแต่ไม่ลาม) — อย่างแรกก่อนเสมอ",
      "ตกลงงบกับ PM: % คงที่ของทุก sprint จ่ายคืน debt — ไม่ใช่ 'sprint หน้า' ที่ไม่เคยมาถึง",
      "ทุก sprint: หยิบตามลำดับ, อัปเดตรายการ, รายงานสิ่งที่จ่ายคืนแล้ว (ทีมเห็นว่าระบบนี้ทำงานจริง)",
    ],
    output: "UX debt backlog ที่มีราคา (อาการ/หลักฐาน/ต้นทุน/ราคาแก้/ลำดับ) + ข้อตกลงงบต่อ sprint + รายงานจ่ายคืนสะสม",
    decisionCriteria: [
      "Debt ที่มีหลักฐานต้นทุนจริง (tickets, conversion) ชนะ debt ที่ 'designer รำคาญ' เสมอ",
      "จ่ายดอกอยู่ × ราคาแก้ S = หยิบทันที / นิ่ง × ราคา L = อยู่ท้ายจนกว่าจะลาม",
      "รายการที่อยู่ใน backlog เกิน 1 ปีโดยไม่ขึ้นลำดับ = ยอมรับเป็น won't-fix ตรงๆ ดีกว่าหลอกตัวเอง",
    ],
    exampleScenario:
      "ทีมรู้สึกว่า 'product เก่าๆ ขึ้นทุกวัน' แต่ชี้ไม่ได้ — กวาด debt ได้ 47 รายการ ติดราคาพบ 5 อันดับแรกกิน support ~30 ชม./เดือน (มี form วันที่ที่คนกรอกผิด 200 ครั้ง/เดือน, แก้ราคา S) — งบ 15%/sprint จ่ายคืน, หกเดือน debt จ่ายดอกหมดไป 80% และ support load ลดเห็นชัด",
    commonMistakes: [
      "จด debt แล้วไม่ติดราคา — backlog กลายเป็นสุสานความรู้สึกผิด",
      "รอ 'sprint ปรับปรุงใหญ่' ที่ไม่เคยมาถึง — งบคงที่ต่อ sprint เท่านั้นที่ทำงานจริง",
      "เรียงตามความรำคาญของ designer ไม่ใช่ต้นทุนจริงต่อ user/ธุรกิจ",
      "ไม่รายงานสิ่งที่จ่ายคืนแล้ว — ทีมเลิกเชื่อระบบและเลิกจดเพิ่ม",
      "จัด inconsistency ทุกจุดเป็น debt เท่ากัน — ปุ่มเพี้ยนใน settings ลึกๆ ไม่เท่า checkout ที่งง",
    ],
    template: `UX DEBT BACKLOG
ต่อรายการ:
  อาการ (user เจอ): ____________
  หลักฐาน: [tickets ___ ใบ/เดือน | เจอใน flow: ___ | จาก audit: ___]
  ต้นทุนที่จ่ายอยู่: [support ชม. / conversion / dev ช้าลง]
  ราคาแก้: [S/M/L] ชนิด: [จ่ายดอกอยู่ / นิ่ง]
  ลำดับ = impact ÷ effort: ___
งบจ่ายคืน: ___% ต่อ sprint (ตกลงกับ PM: [วันที่])
รายงานสะสม: จ่ายแล้ว ___ รายการ / ผลที่วัดได้: ___`,
    prompt: `You are a UX lead building a costed debt backlog. Raw debt sources: [PASTE: recurring support themes, downgraded UI bugs, audit findings, team known-issues]. Team's impact criteria: [HOW WE WEIGH USER PAIN × FREQUENCY].

Process:
1. Normalize every item: symptom (what users experience) / evidence (ticket counts, affected flows) / ongoing cost (support hours, conversion, dev drag — estimate honestly, mark guesses) / fix size (S/M/L)
2. Classify: interest-bearing (creates daily cost) vs dormant (ugly but contained)
3. Rank by impact ÷ effort — interest-bearing small-fixes float to top; challenge any item ranked high on designer-annoyance but low on user evidence
4. The paydown proposal: what a [X]% per-sprint budget clears in 3 months, in order
5. Honesty pass: items that have sat unprioritized so long they should be declared won't-fix explicitly
Output: costed backlog table + 3-month paydown plan + won't-fix candidates.`,
    relatedSlugs: ["ux-debt", "prioritization-matrix", "design-system-governance", "design-decision-log"],
    tags: ["debt", "backlog", "prioritization"],
  },
];
