import type { UXTerm } from "@/types/playbook";

export const HANDOFF_TERMS: UXTerm[] = [
  {
    id: "ui-acceptance-criteria",
    slug: "ui-acceptance-criteria",
    term: "UI Acceptance Criteria",
    category: "handoff",
    icon: "✅",
    level: "intermediate",
    aliases: ["AC", "Acceptance Criteria"],
    shortDescription: "เงื่อนไขที่ตรวจสอบได้ (testable) ว่า UI ชิ้นนี้ 'เสร็จ' จริง — เขียนเป็น Given/When/Then ก่อน dev เริ่มโค้ด",
    fullDefinition:
      "UI acceptance criteria คือรายการเงื่อนไขที่เขียนก่อนเริ่ม implement ว่า UI ต้องทำอะไรได้บ้างจึงนับว่าเสร็จ — เขียนในรูป Given/When/Then (Given: บริบทตั้งต้น, When: action, Then: ผลที่ตรวจได้) ครอบคลุมทั้ง happy path, state ไม่ปกติ (loading/empty/error), ขอบเขต responsive และ keyboard/screen reader behavior — AC ที่ดีคือสัญญาที่ designer, dev และ QA อ่านแล้วเข้าใจตรงกัน ทดสอบได้โดยไม่ต้องตีความ",
    whyItMatters:
      "ถ้าไม่มี AC คำว่า 'เสร็จ' ของ dev คือ 'หน้าตาเหมือน mockup ใน happy path' ส่วน 'เสร็จ' ของ designer รวม error state, empty state, keyboard ด้วย — ช่องว่างนี้กลายเป็น bug ที่เจอหลัง release, รอบแก้ไม่รู้จบ และความสัมพันธ์ทีมที่เสียเพราะต่างฝ่ายรู้สึกว่าอีกฝ่าย 'เปลี่ยน requirement'",
    whenToUse: [
      "ทุก story/ticket ที่มี UI — เขียน AC ให้จบก่อน sprint planning ไม่ใช่หลัง dev ถาม",
      "Component ใหม่เข้า design system — AC คือสเปกที่ตามไปทุกที่ที่ component ถูกใช้",
      "Flow สำคัญ (checkout, signup, payment) ที่ความผิดพลาดมีต้นทุนสูง",
    ],
    whenNotToUse: [
      "Prototype สำหรับ user test ที่จะถูกทิ้ง — AC ละเอียดบน throwaway code คือ waste",
      "อย่าใช้ AC แทนการคุยกัน — AC เป็น output ของบทสนทนา ไม่ใช่เอกสารปาข้ามกำแพง",
    ],
    howToApply: [
      "เริ่มจาก user goal ของ story: AC ทุกข้อต้องตอบว่าเงื่อนไขนี้ปกป้องอะไร",
      "เขียน happy path เป็น Given/When/Then ก่อน แล้วไล่ state อื่น: loading, empty, error, edge value",
      "ระบุ responsive breakpoint ที่ behavior เปลี่ยน (เช่น table → card ต่ำกว่า 768px)",
      "เพิ่มข้อ accessibility ขั้นต่ำ: focus order, label, keyboard path สำหรับ action หลัก",
      "รีวิว AC กับ dev ก่อนเริ่มโค้ด — ข้อไหน dev ตีความต่างคือข้อที่ต้องเขียนใหม่",
      "ใช้ AC เป็น checklist ตอน design QA — ไม่สร้างเกณฑ์ใหม่ตอนตรวจ",
    ],
    checklist: [
      "ทุกข้อเป็น Given/When/Then ที่ตรวจ pass/fail ได้โดยไม่ต้องตีความ",
      "ครอบคลุม loading / empty / error state ไม่ใช่แค่ happy path",
      "ระบุ breakpoint behavior ที่เปลี่ยนตามขนาดจอ",
      "มีข้อ keyboard/focus สำหรับ action หลัก",
      "Dev อ่านแล้วไม่มีคำถาม 'แล้วกรณี X ล่ะ' ที่ AC ไม่ได้ตอบ",
      "จำนวนข้อสมเหตุผล (5-12 ต่อ story) — เกินนั้นแปลว่า story ใหญ่ไป",
    ],
    deliverables: ["AC list ใน ticket (Given/When/Then + state + responsive + a11y)", "AC template ของทีมสำหรับ story ที่มี UI"],
    goodExample:
      "Story 'ค้นหาออเดอร์': Given อยู่หน้า orders, When พิมพ์คำที่ไม่มีผลลัพธ์, Then แสดง empty state พร้อมปุ่มล้างคำค้น / Given โหลดเกิน 300ms, Then แสดง skeleton ไม่ใช่หน้าขาว / Given จอ <768px, Then ตารางเปลี่ยนเป็น card list — dev อ่านจบรู้ว่าต้อง build อะไรครบ",
    badExample:
      "AC เขียนว่า 'หน้าค้นหาทำงานถูกต้องและใช้งานง่าย' — ตรวจ pass/fail ไม่ได้, dev ส่งงานที่ไม่มี empty state เพราะ 'ก็ทำงานถูกต้องแล้ว', QA เปิด bug, designer บอกว่านี่ requirement เดิม, dev บอกว่าเพิ่ม scope — วนลูปทุก sprint",
    commonMistakes: [
      "เขียน AC เป็นความรู้สึก ('ใช้งานง่าย', 'สวยงาม') แทนเงื่อนไขที่ตรวจได้",
      "มีแต่ happy path — แล้ว error/empty/loading กลายเป็น 'แล้วแต่ dev'",
      "เขียน AC หลัง dev ทำเสร็จเพื่อให้ ticket ผ่าน process — ได้กระดาษ ไม่ได้คุณภาพ",
      "AC ละเอียดระดับ pixel (margin 16px) ปนกับ behavior — สเปก visual ควรอยู่ใน handoff spec ไม่ใช่ AC",
    ],
    relatedSlugs: ["component-specification", "state-specification", "qa-checklist", "design-qa", "edge-cases"],
    tags: ["acceptance-criteria", "given-when-then", "definition-of-done"],
    prompts: [
      `You are a senior UX/UI lead writing UI acceptance criteria. For the feature below, produce testable Given/When/Then criteria.

Feature: [FEATURE DESCRIPTION]
User goal: [WHAT THE USER IS TRYING TO ACHIEVE]
Key screens/components: [LIST]

Rules:
- Every criterion must be verifiable pass/fail without interpretation
- Cover: happy path, loading (>300ms), empty state, error state (network + validation), edge values
- Include responsive behavior at breakpoints where layout/interaction changes
- Include minimum accessibility: focus order, labels, keyboard path for primary actions
- 5-12 criteria; if more are needed, propose how to split the story

Output: a table (ID / Given / When / Then / type: happy|state|responsive|a11y) + a list of open questions the spec does not answer.`,
    ],
    visualDemo: "acceptance-criteria",
    demoData: {
      title: "AC: Order Search",
      criteria: [
        { given: "อยู่หน้า orders", when: "พิมพ์คำที่ไม่มีผลลัพธ์", then: "แสดง empty state + ปุ่มล้างคำค้น" },
        { given: "ผลลัพธ์โหลดเกิน 300ms", when: "รอ response", then: "แสดง skeleton 5 แถว ไม่ใช่หน้าขาว" },
        { given: "จอแคบกว่า 768px", when: "เปิดหน้า orders", then: "ตารางแสดงเป็น card list ไม่มี horizontal scroll" },
        { given: "ใช้ keyboard เท่านั้น", when: "กด Tab จากช่องค้นหา", then: "focus ไปผลลัพธ์แรก, Enter เปิดรายละเอียด" },
      ],
    },
  },
  {
    id: "component-specification",
    slug: "component-specification",
    term: "Component Specification",
    category: "handoff",
    icon: "📐",
    level: "intermediate",
    aliases: ["Component Spec"],
    shortDescription: "เอกสารสเปกของ component หนึ่งตัว: anatomy, props/variants, states, behavior, ขอบเขตการใช้ — ให้ dev build ได้โดยไม่ต้องเดา",
    fullDefinition:
      "Component specification คือสเปกครบวงจรของ component: anatomy (ประกอบจากส่วนอะไร), variants/props (มีแบบไหนบ้าง แต่ละแบบใช้เมื่อไร), states ทั้งหมด (default/hover/focus/active/disabled/loading/error), content rules (ความยาว text สูงสุด, ตัดคำยังไง, รูปขาดทำไง), responsive behavior และ do/don't ของการใช้งาน — เขียนครั้งเดียวต่อ component แล้วใช้ซ้ำทุก feature ที่หยิบ component นั้นไป",
    whyItMatters:
      "Component ที่ไม่มีสเปกจะถูก dev เติมส่วนที่ขาดเอง — แต่ละคนเติมต่างกัน: ปุ่มเดียวกัน disable แล้วหน้าตาไม่เหมือนกันสามที่, text ยาวแล้ว layout พังคนละแบบ — สุดท้าย design system มี component 'ตัวเดียวกัน' หลายเวอร์ชันในโค้ด และทุก inconsistency คือ bug ticket + รอบแก้ที่ไม่ควรเกิด",
    whenToUse: [
      "ทุก component ที่เข้า design system หรือถูกใช้เกิน 1 ที่",
      "Component ที่มี logic ซับซ้อน (combobox, date picker, data table) — สเปกสำคัญกว่า visual",
      "เมื่อรับ design system มาจากทีมอื่น/agency — ตรวจว่ามีสเปกครบไหมก่อนรับงาน",
    ],
    whenNotToUse: [
      "Layout เฉพาะหน้า (one-off section) ที่ไม่ reuse — ใช้ handoff spec ของหน้านั้นพอ",
      "อย่าเขียนสเปกละเอียดให้ component ที่ยังไม่นิ่ง — รอ pattern ชัดก่อนค่อยทำให้เป็นทางการ",
    ],
    howToApply: [
      "เริ่มจาก anatomy: ระบุชื่อทุกส่วน (container, label, icon, helper text) ให้ตรงกับชื่อใน code",
      "ระบุ variants พร้อมเหตุผลการใช้: primary ใช้เมื่อไร, ghost ใช้เมื่อไร — ไม่ใช่แค่หน้าตา",
      "ทำตาราง states ครบ: ทุก variant × ทุก state พร้อม token ที่ใช้ (ไม่ใช่ hex ลอยๆ)",
      "เขียน content rules: max length, truncation, empty value, รูป fallback",
      "กำหนด responsive: component ปรับตัวยังไงเมื่อพื้นที่แคบ (ตัด, ซ่อน, เปลี่ยนรูปแบบ)",
      "ปิดท้ายด้วย do/don't จากการใช้ผิดที่เจอจริง — อัปเดตเมื่อเจอการใช้ผิดใหม่",
    ],
    checklist: [
      "Anatomy ตั้งชื่อทุกส่วนตรงกับ code/Figma layer",
      "ทุก variant มีคำตอบว่า 'ใช้เมื่อไร' ไม่ใช่แค่หน้าตา",
      "ตาราง state ครบทุก variant (รวม focus-visible และ loading)",
      "Content rules: text ยาวสุด, ตัดยังไง, ค่าว่างแสดงอะไร",
      "ระบุ design tokens ที่ใช้ ไม่ hardcode ค่าสี/ระยะ",
      "มี do/don't พร้อมตัวอย่างการใช้ผิดที่เคยเกิดจริง",
    ],
    deliverables: ["Component spec page (anatomy + variants + states + content rules + do/don't)", "State matrix ตาราง variant × state"],
    goodExample:
      "สเปก Button ระบุ: 3 variants × 6 states พร้อม token ทุกช่อง, label ยาวสุด 24 ตัวอักษรแล้วห้าม wrap (ตัด ellipsis), loading state แทน label ด้วย spinner โดยคงความกว้างปุ่ม — dev สามคน build สามหน้าได้ปุ่มเหมือนกันเป๊ะโดยไม่ต้องถามอะไร",
    badExample:
      "Figma มีปุ่ม primary state เดียว — dev เติม hover เอง (คนนึงเข้ม คนนึงจาง), disabled เอง (คนนึง opacity คนนึงเทา), text ยาวเอง (คนนึง wrap คนนึงตัด) — สามเดือนต่อมา audit เจอปุ่ม 'ตัวเดียวกัน' 7 เวอร์ชันในโปรดักชัน",
    commonMistakes: [
      "สเปกมีแค่ default state — hover/focus/disabled/loading ปล่อยให้ dev เดา",
      "บอกแค่หน้าตาของ variant ไม่บอกว่าเมื่อไรใช้ตัวไหน — คนใช้เลือกตามความสวย",
      "ไม่มี content rules — เจอ text ยาว/รูปขาดแล้ว layout พังแบบไม่มีใครเคยตัดสินใจ",
      "เขียนสเปกแล้วไม่อัปเดต — สเปกกับ code ห่างกันเรื่อยๆ จนไม่มีใครเชื่อสเปก",
    ],
    relatedSlugs: ["component-anatomy", "component-states", "state-specification", "design-tokens", "design-system-governance"],
    tags: ["component", "spec", "design-system"],
    prompts: [
      `You are a design systems engineer writing a component specification. Component: [COMPONENT NAME + SCREENSHOT/FIGMA LINK].

Produce:
1. ANATOMY: named parts (match code naming conventions), required vs optional parts
2. VARIANTS: each variant + when to use it (decision rule, not just appearance)
3. STATE MATRIX: table of variant × state (default, hover, focus-visible, active, disabled, loading, error) — each cell references a design token, flag missing tokens
4. CONTENT RULES: max text length, truncation behavior, empty/fallback values, image aspect/fallback
5. RESPONSIVE: how it adapts below [BREAKPOINTS]
6. DO/DON'T: 3 realistic misuse cases and the correct alternative

Output in markdown. Mark every spec decision you had to assume (not visible in the design) with ⚠️ ASSUMPTION so the designer can confirm.`,
    ],
    visualDemo: "component-state",
    demoData: {
      title: "Button Spec",
      states: [
        { name: "Default", spec: "bg: btn-primary-bg, text: btn-primary-fg, radius: radius-md" },
        { name: "Hover", spec: "bg: btn-primary-bg-hover, เปลี่ยนภายใน 150ms ease-out" },
        { name: "Focus-visible", spec: "ring 2px focus-ring, offset 2px — ห้ามลบ outline" },
        { name: "Disabled", spec: "bg: btn-disabled-bg, ไม่รับ pointer, cursor: not-allowed" },
        { name: "Loading", spec: "spinner แทน label, คงความกว้างเดิม, aria-busy=true" },
      ],
    },
  },
  {
    id: "state-specification",
    slug: "state-specification",
    term: "State Specification",
    category: "handoff",
    icon: "🔄",
    level: "intermediate",
    shortDescription: "สเปกครบทุก state ของหน้า/feature: loading, empty, partial, error, success — ก่อนที่ dev จะเจอเองในโปรดักชัน",
    fullDefinition:
      "State specification คือการไล่ระบุทุกสถานะที่หน้า/feature เป็นไปได้ แล้วออกแบบให้ครบก่อน handoff: blank/first-use (ยังไม่มีข้อมูล), loading (รอครั้งแรก vs รีเฟรช), partial (มีข้อมูลบางส่วน), error (network, permission, validation), ideal (happy path) และ done/success — framework ที่ใช้กันคือ five UI states — หน้าจริงใช้เวลาอยู่ใน state ไม่สมบูรณ์มากกว่า ideal state ที่ mockup ชอบโชว์",
    whyItMatters:
      "Mockup 90% โชว์แค่ ideal state แต่ user เจอ loading ทุกครั้งที่เปิด, เจอ empty ตอนเริ่มใช้, เจอ error ตอนเน็ตหลุด — state เหล่านี้ถ้าไม่ออกแบบ dev จะ improvise: spinner กลางจอขาว, หน้า empty โล่งๆ, error 'Something went wrong' — ประสบการณ์ครั้งแรกและตอนพังคือจุดที่ user ตัดสิน product แต่กลับเป็นจุดที่ถูกออกแบบน้อยที่สุด",
    whenToUse: [
      "ทุกหน้าที่มีข้อมูลจาก network — ไล่ 5 states ก่อนปิด design",
      "Feature ใหม่ที่ user เริ่มจากศูนย์ — empty/first-use state คือ onboarding ตัวจริง",
      "ตอน design review: ถาม 'หน้านี้ตอนโหลด/ว่าง/พังหน้าตาเป็นยังไง' ทุกครั้ง",
    ],
    whenNotToUse: [
      "หน้า static content ล้วน (terms of service) — ไม่มี state ให้สเปก",
      "อย่าออกแบบทุก state ละเอียดเท่ากันหมด — error ที่เกิด 0.1% ขอแค่ recover ได้ ไม่ต้อง illustration",
    ],
    howToApply: [
      "ต่อหน้า ไล่ 5 คำถาม: ยังไม่มีข้อมูล? กำลังโหลด? มีบางส่วน? พัง? สมบูรณ์?",
      "Loading: เลือก pattern ตาม layout — skeleton สำหรับ list/card, spinner สำหรับ action, progress สำหรับงานยาว",
      "Empty: แยก first-use (สอน + CTA เริ่มต้น) กับ no-results (บอกเหตุ + ทางออก เช่น ล้าง filter)",
      "Error: แยก network (retry ได้) / permission (ขอสิทธิ์) / validation (แก้ที่ field) — ห้ามรวมเป็น error เดียว",
      "Partial: ข้อมูลโหลดบางส่วน/sync ค้าง แสดงยังไงไม่ให้ user เข้าใจว่าหายหมด",
      "รวมทุก state ลง state matrix แนบ ticket — ใช้เป็นส่วนหนึ่งของ AC",
    ],
    checklist: [
      "ครบ 5 states: blank, loading, partial, error, ideal",
      "Empty แยก first-use กับ no-results — message ต่างกัน",
      "Error แยกประเภทตามสิ่งที่ user ทำได้ (retry/แก้/ขอสิทธิ์)",
      "Loading ไม่ layout shift ตอนข้อมูลมา (skeleton ขนาดตรงจริง)",
      "ทุก state มี next action ให้ user เสมอ — ไม่มีทางตัน",
      "State matrix แนบไปกับ handoff ไม่ใช่อยู่แค่ในหัว designer",
    ],
    deliverables: ["State matrix ต่อหน้า (state × หน้าตา × message × action)", "Design ครบ 5 states ใน Figma ไม่ใช่แค่ ideal"],
    goodExample:
      "หน้า dashboard ออกแบบครบ: skeleton ตรง layout จริงตอนโหลด, first-use มี setup guide 3 ขั้น, no-data ของแต่ละ widget บอกวิธีต่อ data source, error network มีปุ่ม retry + แสดงข้อมูล cache ล่าสุด — user เปิดครั้งแรกเข้าใจทันทีว่าต้องทำอะไร",
    badExample:
      "ส่ง mockup dashboard สวยหรูที่มีข้อมูลเต็มทุก widget — โปรดักชันจริง: user ใหม่เปิดมาเจอ widget ว่าง 8 ช่องไม่มีคำอธิบาย, เน็ตช้าเจอจอขาว 4 วินาที, API พังเจอ 'Error' ลอยกลางจอ — ทุก state ที่ไม่ได้ออกแบบถูก improvise โดยคนที่ไม่ใช่ designer",
    commonMistakes: [
      "ออกแบบแค่ ideal state เพราะ mockup ที่มีข้อมูลเต็มดูดีตอน present",
      "Empty state เป็นแค่ข้อความ 'ไม่มีข้อมูล' — ไม่บอกทำไมและทำอะไรต่อ",
      "Error เดียวครอบจักรวาล 'Something went wrong' — user ไม่รู้ retry ได้ไหมหรือต้องแก้อะไร",
      "Skeleton ขนาดไม่ตรงเนื้อหาจริง — โหลดเสร็จ layout กระโดด",
      "ลืม partial state — ข้อมูล sync ครึ่งเดียวแล้ว user คิดว่าข้อมูลหาย",
    ],
    relatedSlugs: ["empty-state-review", "error-state-review", "component-states", "ui-acceptance-criteria", "edge-cases"],
    tags: ["states", "loading", "empty-state", "error"],
    prompts: [
      `You are a UX designer doing a state audit before handoff. Screen: [SCREEN NAME + DESCRIPTION OF DATA SOURCES].

For this screen, specify all five UI states:
1. BLANK/FIRST-USE: what a brand-new user sees — message, illustration?, primary CTA
2. LOADING: pattern choice (skeleton/spinner/progress) with reasoning; skeleton structure matching real layout; behavior on refresh vs first load
3. PARTIAL: data partially loaded or synced — what shows, what indicates incompleteness
4. ERROR: separate specs for network error (retryable), permission error, and data error — message copy + available action for each
5. IDEAL: reference to main mockup

Rules: every state must leave the user a next action; empty must distinguish first-use vs no-results; error copy must say what happened + what to do, no generic "something went wrong".

Output: state matrix table (state / visual / copy / user action) + list of states missing from the current design.`,
    ],
    visualDemo: "component-state",
    demoData: {
      title: "Dashboard States",
      states: [
        { name: "First-use", spec: "Setup guide 3 ขั้น + ปุ่ม 'ต่อ data source แรก'" },
        { name: "Loading", spec: "Skeleton ตรง layout จริง — ไม่ shift ตอนข้อมูลมา" },
        { name: "Partial", spec: "Widget ที่ sync ค้างแสดง badge 'อัปเดตล่าสุด 2 ชม.ก่อน'" },
        { name: "Error", spec: "Network: ปุ่ม retry + แสดง cache / Permission: ลิงก์ขอสิทธิ์" },
        { name: "Ideal", spec: "ตาม mockup หลัก" },
      ],
    },
  },
  {
    id: "responsive-behavior",
    slug: "responsive-behavior",
    term: "Responsive Behavior Spec",
    category: "handoff",
    icon: "📱",
    level: "intermediate",
    shortDescription: "สเปกว่าหน้า/component ปรับตัวยังไงข้าม breakpoint — ระบุ behavior ที่เปลี่ยน ไม่ใช่แค่วาด 3 ขนาดจอ",
    fullDefinition:
      "Responsive behavior spec ระบุว่าเมื่อพื้นที่เปลี่ยน อะไรเกิดขึ้นบ้าง: layout เปลี่ยนรูปแบบที่ breakpoint ไหน (table → cards, sidebar → drawer), อะไรถูกซ่อน/ยุบ/เรียงใหม่, touch target ขยายเป็นเท่าไร, อะไรกลายเป็น scroll แนวนอน — สิ่งสำคัญคือ 'พฤติกรรมระหว่าง breakpoint' ที่ mockup 3 ขนาด (375/768/1440) ไม่ได้บอก: จอ 900px ใช้ layout ไหน? ค่ากลางยืดยังไง?",
    whyItMatters:
      "Mockup 3 ขนาดจอครอบคลุมแค่ 3 จุดบนสเปกตรัมต่อเนื่อง — dev ต้องตัดสินใจเองว่าที่ 900px ใช้ layout มือถือหรือ desktop, ยืดด้วย fluid หรือ snap — ตัดสินใจต่างกันทุกหน้าได้เว็บที่พฤติกรรมไม่สม่ำเสมอ และ bug 'จอ iPad แตก' ที่เจอหลัง release เพราะไม่มีใครเคยสเปกช่วงนั้น",
    whenToUse: [
      "ทุกหน้าที่ layout เปลี่ยนรูปแบบ (ไม่ใช่แค่ยืด) ระหว่างจอเล็ก-ใหญ่",
      "Component ที่พฤติกรรมเปลี่ยน: navigation → hamburger, table → cards, tabs → accordion",
      "เมื่อทีมมี bug responsive ซ้ำๆ — สัญญาณว่า dev กำลังเดา breakpoint เอง",
    ],
    whenNotToUse: [
      "Layout ที่ fluid ยืดอย่างเดียวไม่เปลี่ยนรูปแบบ — ระบุ min/max width พอ",
      "อย่าสเปกทุก pixel ทุกจอ — ระบุจุดที่ behavior เปลี่ยนกับกติกายืด แล้วปล่อยให้ CSS ทำงาน",
    ],
    howToApply: [
      "ใช้ breakpoint กลางของระบบ (เช่น 640/768/1024/1280) — ห้ามตั้ง breakpoint ใหม่ต่อหน้า",
      "ต่อหน้า ระบุ: ที่ breakpoint ไหน layout เปลี่ยนจากอะไรเป็นอะไร",
      "ระบุกติการะหว่าง breakpoint: fluid (ยืดตาม %) หรือ fixed (snap ขั้นบันได)",
      "ไล่ของที่หาย/ยุบบนจอเล็ก: ซ่อนไปไหน (drawer? accordion?) — ห้ามหายเฉยๆ",
      "Touch: target ≥44px บนจอ touch, hover-only interaction ต้องมีทางเลือกแบบ tap",
      "ทดสอบช่วงเป็น (resize ลากผ่านทุกช่วง) ไม่ใช่แค่ 3 จุด — จุดแตกอยู่ระหว่างเสมอ",
    ],
    checklist: [
      "ใช้ breakpoint ของระบบ ไม่ตั้งใหม่ต่อหน้า",
      "ระบุชัดทุกจุดที่ layout เปลี่ยนรูปแบบ (ไม่ใช่แค่ยืด)",
      "ของที่ซ่อนบนจอเล็กมีที่ไป (drawer/accordion) ไม่ใช่หายจาก DOM",
      "Touch target ≥44×44px และไม่มี interaction ที่พึ่ง hover อย่างเดียว",
      "ไม่มี horizontal scroll ที่ไม่ตั้งใจที่ 375px",
      "ระบุพฤติกรรมช่วงกลาง (768-1024) ไม่ปล่อยให้ dev เดา",
    ],
    deliverables: ["Responsive spec ต่อหน้า: breakpoint × layout × ของที่เปลี่ยน", "กติกากลาง fluid/snap ของโปรเจกต์"],
    goodExample:
      "สเปกหน้า orders: ≥1024px ตาราง 7 คอลัมน์ / 768-1023px ซ่อน 2 คอลัมน์รอง (ดูได้ใน detail) / <768px เปลี่ยนเป็น card list, ช่วงกว้างยืด fluid ภายใน max 1280px, filter bar กลายเป็น bottom sheet ต่ำกว่า 768px — dev ทำครั้งเดียวถูก ไม่มี bug iPad",
    badExample:
      "ส่ง mockup 375px กับ 1440px สองไฟล์ — dev เปิดดูแล้วต้องเดาเองว่า 768px ใช้อันไหน เดาว่า 'desktop ย่อส่วน' ผลคือตาราง 7 คอลัมน์บีบจนอ่านไม่ออกบน iPad, QA เปิด bug, designer บอก 'ก็ต้องเป็น card สิ' — ความรู้ที่ไม่เคยถูกเขียนไว้ที่ไหน",
    commonMistakes: [
      "Mockup 2-3 ขนาดแล้วถือว่าจบ — ช่วงระหว่างนั้นคือดินแดนไร้สเปก",
      "ซ่อน content บนมือถือเฉยๆ โดยไม่มีทางเข้าถึง — มือถือคือ user ส่วนใหญ่ไม่ใช่ชั้นสอง",
      "Interaction พึ่ง hover (tooltip, dropdown เปิดด้วย hover) โดยไม่มีทาง tap",
      "ตั้ง breakpoint ใหม่เฉพาะหน้าตัวเอง — ระบบมี breakpoint 12 ค่าที่ไม่มีใครจำได้",
    ],
    relatedSlugs: ["responsive-rules", "mobile-first-review", "component-specification", "ui-acceptance-criteria"],
    tags: ["responsive", "breakpoints", "mobile"],
    prompts: [
      `You are a UI engineer reviewing responsive behavior before handoff. Page: [PAGE NAME], system breakpoints: [e.g. 640/768/1024/1280].

Produce the responsive spec:
1. LAYOUT CHANGES: for each breakpoint where layout transforms (not just stretches), state: from-what → to-what (e.g. table → card list below 768)
2. IN-BETWEEN RULE: fluid (% based, with max-width) or snap per range — one rule per region
3. HIDDEN/COLLAPSED CONTENT: everything removed on small screens + where it goes (drawer/accordion/detail page) — flag anything that simply disappears
4. TOUCH: list interactive elements; flag targets <44px and hover-only interactions
5. RISK RANGES: which in-between widths (e.g. 768-1023) are most likely to break and why

Output: spec table (range / layout / changes / notes) + a flagged-issues list ordered by severity. If information is missing from the design, list it as questions for the designer instead of guessing.`,
    ],
    visualDemo: "handoff-spec",
    demoData: {
      title: "Orders Page — Responsive",
      specs: [
        { label: "≥1024px", value: "ตาราง 7 คอลัมน์, max-width 1280, ยืด fluid" },
        { label: "768-1023px", value: "ซ่อนคอลัมน์รอง 2 ตัว (ดูได้ใน detail)" },
        { label: "<768px", value: "Card list + filter เป็น bottom sheet" },
        { label: "Touch", value: "ทุก target ≥44px, ไม่มี hover-only" },
      ],
    },
  },
  {
    id: "accessibility-requirements",
    slug: "accessibility-requirements",
    term: "Accessibility Requirements",
    category: "handoff",
    icon: "♿",
    level: "intermediate",
    aliases: ["A11y Requirements"],
    shortDescription: "ข้อกำหนด accessibility ที่แนบไปกับ handoff: contrast, focus, label, keyboard path — เป็น requirement ไม่ใช่ของแถม",
    fullDefinition:
      "Accessibility requirements คือชุดข้อกำหนดที่ระบุใน handoff/AC ว่า UI ต้อง accessible ระดับไหน: contrast ratio ขั้นต่ำ (4.5:1 text ปกติ, 3:1 text ใหญ่/UI component ตาม WCAG AA), focus order และ focus-visible, accessible name ของทุก interactive element, keyboard path ครบทุก action, touch target, และ semantic structure (heading order, landmark, alt text) — เขียนเป็นเงื่อนไขตรวจได้แนบทุก ticket ไม่ใช่ guideline ลอยๆ ที่ไม่มีใครบังคับใช้",
    whyItMatters:
      "Accessibility ที่ไม่อยู่ใน requirement จะไม่ถูก build — ไม่ใช่เพราะ dev ไม่แคร์ แต่เพราะมันไม่อยู่ใน definition of done — แก้ทีหลังแพงกว่าทำแต่แรกหลายเท่า (รื้อ DOM structure, แก้ contrast ทั้ง palette) และความเสี่ยงไม่ใช่แค่จริยธรรม: กฎหมายหลายประเทศ (ADA, EAA) ฟ้องได้จริง และ 15% ของ user มี disability บางรูปแบบ",
    whenToUse: [
      "ทุก ticket ที่มี UI — แนบ a11y requirements เป็นส่วนหนึ่งของ AC เสมอ",
      "ตอนสร้าง component ใหม่ — ระบุ keyboard behavior และ ARIA pattern ตั้งแต่สเปก",
      "เมื่อเลือกสี/typography เข้า design system — ตรวจ contrast ก่อนประกาศใช้",
    ],
    whenNotToUse: [
      "อย่ารอ 'audit ใหญ่ประจำปี' แล้วค่อยแก้ — requirement ต่อ ticket ป้องกันได้ถูกกว่าตรวจย้อนหลัง",
      "อย่าตั้งเป้า AAA ทุกข้อตั้งแต่วันแรกจน paralysis — AA คือเส้นฐานที่เป็นจริงได้",
    ],
    howToApply: [
      "กำหนดเส้นฐานทีม: WCAG 2.2 AA — เขียนเป็น checklist สั้นที่ใช้ได้ต่อ ticket",
      "Design: ตรวจ contrast ทุกคู่สีใน palette ก่อนใช้, ห้ามสื่อความหมายด้วยสีเดี่ยวๆ",
      "ระบุ focus order ใน mockup เมื่อ order ไม่ตรง DOM ปกติ (modal, drawer)",
      "ระบุ accessible name ของ icon button ทุกตัว — ของฟรีที่ลืมบ่อยสุด",
      "ระบุ keyboard interaction ของ component ซับซ้อน อ้าง ARIA APG pattern แทนคิดเอง",
      "ใส่ใน AC: 'ทำ action หลักได้ครบด้วย keyboard เท่านั้น' เป็นข้อบังคับทุก story",
    ],
    checklist: [
      "Text contrast ≥4.5:1, UI component/text ใหญ่ ≥3:1",
      "ทุก interactive element มี accessible name (โดยเฉพาะ icon button)",
      "Focus-visible ชัดและ focus order ตามลำดับการอ่าน",
      "Action หลักทั้งหมดทำได้ด้วย keyboard เท่านั้น",
      "ไม่สื่อสถานะ/ความหมายด้วยสีอย่างเดียว (มี icon/text ประกอบ)",
      "Heading hierarchy ถูกลำดับ, รูปมี alt, form field มี label ผูกจริง",
    ],
    deliverables: ["A11y requirements block ใน ticket template", "Contrast-checked color palette พร้อมคู่สีที่ห้ามใช้"],
    goodExample:
      "Ticket ระบบ filter ระบุ: bottom sheet เปิดแล้ว focus ไป heading, Tab วนใน sheet (focus trap), Esc ปิด, ปุ่ม icon ล้าง filter มี aria-label='ล้างตัวกรอง', chip ที่เลือกมี state ทั้งสีและ icon check — dev build ครั้งเดียวผ่าน ไม่ต้องรื้อ DOM ทีหลัง",
    badExample:
      "ทีมทำ design system เสร็จแล้วค่อยจ้าง audit — ผลตรวจ: สี secondary contrast 2.8:1 ใช้ไป 40 หน้าจอ, icon button 60 จุดไม่มี label, dropdown ใช้ div+onClick ที่ keyboard เข้าไม่ถึงเลย — ใบเสนอราคาแก้: รื้อ palette + เขียน component ใหม่ 3 ตัว แพงกว่าทำถูกแต่แรก 5 เท่า",
    commonMistakes: [
      "มอง a11y เป็น phase 2 / nice-to-have — แล้ว phase 2 ไม่เคยมาถึง",
      "ตรวจแค่ contrast แล้วถือว่าจบ — keyboard กับ screen reader คือครึ่งที่มองไม่เห็น",
      "Icon button ไม่มี accessible name — screen reader อ่านว่า 'button' เฉยๆ ทั้งแอป",
      "Custom component (dropdown/modal ทำเอง) ไม่ implement keyboard pattern — สวยแต่ใช้ไม่ได้ถ้าไม่มีเมาส์",
      "เอา guideline ทั้ง WCAG มาแปะโดยไม่ย่อยเป็น checklist ที่ทีมใช้ได้จริงต่อ ticket",
    ],
    relatedSlugs: ["accessibility", "accessibility-audit", "ui-acceptance-criteria", "component-specification", "color-system"],
    tags: ["accessibility", "wcag", "a11y", "keyboard"],
    prompts: [
      `You are an accessibility specialist writing per-ticket a11y requirements. Feature: [FEATURE + COMPONENTS INVOLVED]. Baseline: WCAG 2.2 AA.

Produce requirements in 4 sections, each as testable pass/fail items:
1. VISUAL: required contrast ratios per text/UI element; any state communicated by color that needs a second cue (icon/text)
2. KEYBOARD: complete keyboard path for every action (key → behavior); focus order; focus trap rules for any overlay; reference the matching ARIA APG pattern for complex widgets
3. SCREEN READER: accessible name for every interactive element (write the actual label text); announcements needed for dynamic changes (aria-live); heading/landmark structure
4. TOUCH/MOTOR: target sizes, gesture alternatives

Then: list the 3 highest-risk items for THIS feature (the ones most likely to ship broken) with a 1-line test each. Keep total under 20 items — prioritize ruthlessly over completeness.`,
    ],
    visualDemo: "qa-checklist",
    demoData: {
      title: "A11y Requirements — Filter Sheet",
      items: [
        "เปิด sheet แล้ว focus ย้ายไป heading, Esc ปิดได้",
        "Tab วนภายใน sheet (focus trap) จนกว่าจะปิด",
        "ปุ่ม icon ทุกตัวมี aria-label ภาษาไทย",
        "Chip ที่เลือก: สี + icon check (ไม่พึ่งสีเดี่ยว)",
        "Contrast ทุกคู่สีใน sheet ≥4.5:1",
        "ผล filter ประกาศผ่าน aria-live='polite'",
      ],
    },
  },
  {
    id: "copy-behavior",
    slug: "copy-behavior",
    term: "Copy & Content Behavior",
    category: "handoff",
    icon: "✍️",
    level: "basic",
    shortDescription: "สเปกว่า text/content จริงประพฤติตัวยังไงใน UI: ยาวเกินตัดยังไง, ค่าว่างแสดงอะไร, ตัวเลข/วันที่ format ไหน",
    fullDefinition:
      "Copy & content behavior คือสเปกของเนื้อหาจริงที่ mockup ไม่เคยโชว์: text ยาวกว่าพื้นที่ตัดยังไง (ellipsis? กี่บรรทัด? wrap?), ชื่อ user ยาว 40 ตัวอักษรทำไง, ค่าว่าง/null แสดงอะไร (— หรือ 'ไม่ระบุ'?), ตัวเลข format ไหน (1,234.56 หรือ 1.2K?), วันที่แบบไหน (relative 'เมื่อวาน' หรือ absolute?), pluralization และ string ที่จะถูกแปลภาษาแล้วยาวขึ้น 30% — กติกาพวกนี้ถ้าไม่สเปก dev ตัดสินใจเองหน้างานคนละแบบ",
    whyItMatters:
      "Mockup ใช้ content ในฝัน ('Somchai J.', 'Project Alpha') แต่โปรดักชันเจอชื่อ 50 ตัวอักษร, email ยาวเกินกล่อง, ราคา 1,250,000.00 — ทุกจุดที่ content จริงชน layout ที่ออกแบบจาก content ปลอมคือ UI พัง และการตัดสินใจหน้างานของ dev แต่ละคน (คนนึง wrap คนนึงตัด) ทำให้ product เดียวกัน format ไม่เหมือนกันสักหน้า",
    whenToUse: [
      "ทุก component ที่แสดง user-generated content (ชื่อ, comment, ที่อยู่) — ยาวจริงเสมอ",
      "ทุกที่ที่แสดงตัวเลข/วันที่/เงิน — format ต้องเป็นกติกากลาง ไม่ใช่ต่อหน้า",
      "Product ที่จะ localize — string ภาษาอื่นยาวกว่า อังกฤษ/ไทย คนละจังหวะตัดคำ",
    ],
    whenNotToUse: [
      "Static copy ที่ทีมคุมเองได้ 100% (heading หน้า landing) — เขียนให้พอดีตั้งแต่แรกดีกว่าสเปก truncation",
      "อย่าทำ format guideline 50 หน้า — กติกา 1 หน้าที่ทีมจำได้ ชนะเอกสารสมบูรณ์ที่ไม่มีใครเปิด",
    ],
    howToApply: [
      "ทดสอบ design ด้วย content ตัวร้าย: ชื่อ 50 ตัวอักษร, email ยาว, ตัวเลข 9 หลัก, ข้อความไม่มีเว้นวรรค",
      "ต่อ text element ระบุ: max กี่บรรทัด, เกินแล้ว truncate (ellipsis) หรือ wrap, full text ดูได้ที่ไหน (tooltip/detail)",
      "ตั้งกติกากลาง: ตัวเลข (คั่นหลักพัน?), เงิน (ทศนิยม? สกุล?), วันที่ (relative ภายใน 7 วัน, absolute หลังนั้น — ตัวอย่าง)",
      "ระบุค่าว่างทุก field: '—', 'ไม่ระบุ', หรือซ่อนทั้งแถว — เลือกหนึ่งแบบใช้ทั้งระบบ",
      "เผื่อ localization: layout ต้องรอด string ยาวขึ้น 30% โดยไม่พัง",
      "รวมเป็น content rules แนบ component spec — ไม่เขียนใหม่ทุก ticket",
    ],
    checklist: [
      "ทุก text element มีกติกา truncation (กี่บรรทัด, ตัดยังไง, ดู full ที่ไหน)",
      "Design ถูกทดสอบด้วย content ยาวจริง ไม่ใช่ชื่อสวยๆ ใน mockup",
      "ตัวเลข/เงิน/วันที่ มี format กลางหนึ่งเดียวทั้ง product",
      "ทุก field มีคำตอบว่าค่าว่างแสดงอะไร",
      "Layout รอด string ยาวขึ้น 30% (เผื่อแปลภาษา)",
      "Pluralization และ 0/1/มากกว่า มี copy แยก ('ไม่มีรายการ' / '1 รายการ' / 'n รายการ')",
    ],
    deliverables: ["Content rules ต่อ component (truncation/empty/format)", "Format convention กลาง 1 หน้า (ตัวเลข เงิน วันที่ เวลา)"],
    goodExample:
      "Card รายชื่อลูกค้าระบุ: ชื่อ max 1 บรรทัด ellipsis + full ใน tooltip, email max 1 บรรทัด ตัดกลาง (a…@domain.com), ยอดซื้อ format ฿1,234,567 ไม่มีทศนิยม, ลูกค้าใหม่ไม่มียอดแสดง '—' — ลูกค้าชื่อยาวสุดในระบบแสดงผลเรียบร้อยตั้งแต่วันแรก",
    badExample:
      "Mockup ใช้ชื่อ 'Anna Lee' ทุกการ์ด — โปรดักชันเจอ 'ห้างหุ้นส่วนจำกัด ทรัพย์เจริญรุ่งเรืองการค้าวัสดุก่อสร้าง' การ์ดสูงไม่เท่ากันทั้ง grid, บางการ์ด text ทะลุกล่อง, dev สามคนแก้สามแบบ (ตัด/wrap/ย่อ font) — สุดท้าย UI เหมือน 3 product ปนกัน",
    commonMistakes: [
      "ออกแบบด้วย content ในฝันแล้วไม่เคยลอง content ตัวร้าย",
      "ไม่กำหนดค่าว่าง — บาง field โชว์ 'null' บาง field โชว์ช่องโหว่งๆ",
      "Format ตัวเลข/วันที่ต่างกันทุกหน้าเพราะ dev แต่ละคนเลือกเอง",
      "ลืม pluralization — '1 รายการส์' หรือ '0 items' ที่ฟังประหลาด",
      "Truncate โดยไม่มีทางดู full text — ข้อมูลสำคัญหายไปเฉยๆ",
    ],
    relatedSlugs: ["ux-writing", "content-design", "component-specification", "edge-cases", "empty-state-review"],
    tags: ["content", "truncation", "format", "copy"],
    prompts: [
      `You are a content designer writing content behavior rules for handoff. Component/screen: [NAME + FIELDS SHOWN].

For every text/content element, specify:
1. LENGTH: realistic max from real data (state your assumption), lines allowed, overflow behavior (ellipsis/middle-truncate/wrap), where full content is accessible
2. EMPTY: exact display for null/empty per field — one consistent convention
3. FORMAT: numbers (thousands separator, decimals), currency, dates (relative vs absolute rule + examples), counts with 0/1/n copy variants
4. STRESS TEST: list 5 adversarial content examples for this screen (longest realistic name, no-space string, 9-digit number, etc.) and what each would currently break

Output: rules table (element / max / overflow / empty / format) + stress-test findings. Flag any rule that needs a product decision rather than a design decision.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Content Behavior",
      before: { label: "Content ในฝัน", points: ["Mockup: 'Anna Lee' ทุกการ์ด", "ค่าว่างโชว์ 'null'", "วันที่ 3 format ใน 3 หน้า"] },
      after: { label: "Content จริงรอด", points: ["ชื่อยาว: 1 บรรทัด + ellipsis + tooltip", "ค่าว่าง = '—' ทั้งระบบ", "วันที่: relative ≤7 วัน, แล้ว absolute"] },
    },
  },
  {
    id: "error-handling",
    slug: "error-handling",
    term: "Error Handling Design",
    category: "handoff",
    icon: "🚨",
    level: "intermediate",
    shortDescription: "ออกแบบและสเปกว่าแต่ละ error เกิดแล้ว user เห็นอะไร ทำอะไรต่อได้ — แยกประเภทตามสิ่งที่ user แก้ได้",
    fullDefinition:
      "Error handling design คือการไล่ทุกจุดที่พังได้ในฟีเจอร์แล้วสเปกการตอบสนอง: validation error (user แก้ได้ — แสดงที่ field พร้อมวิธีแก้), network error (retry ได้ — บอกว่าข้อมูลไม่หาย), permission error (ต้องขอสิทธิ์ — บอกช่องทาง), system error (user ทำอะไรไม่ได้ — ขอโทษ + ทางหนี) — หลักคือทุก error message ตอบ 3 อย่าง: เกิดอะไร, ข้อมูล/เงินฉันเป็นอะไรไหม, ทำอะไรต่อ — และ error ที่ป้องกันได้ควรถูกป้องกัน (constraint, confirm) ก่อนต้องแสดง",
    whyItMatters:
      "Error คือช่วงเวลาที่ trust เปราะที่สุด — 'Something went wrong' ตอนกดจ่ายเงิน ทำให้ user ไม่รู้ว่าเงินถูกตัดไหม กดซ้ำดีไหม — ความกำกวมตรงนี้สร้าง double-charge, ticket support และ user ที่ไม่กลับมา — ขณะที่ error ที่ดี (บอกชัด แก้ได้ ข้อมูลไม่หาย) กลับสร้าง trust มากกว่าตอนไม่มีอะไรพังด้วยซ้ำ",
    whenToUse: [
      "ทุก flow ที่มี form submission, payment, หรือ operation ที่ fail ได้",
      "ตอนเขียน AC — error case ต้องเป็นส่วนหนึ่งของ definition of done",
      "เมื่อ support ticket ประเภท 'ระบบ error แล้วไม่รู้ทำไงต่อ' โผล่ซ้ำ",
    ],
    whenNotToUse: [
      "อย่าออกแบบ error ที่ป้องกันได้ — ปุ่มที่ disabled พร้อมเหตุผล ดีกว่า error หลังกด",
      "อย่าลงทุนเท่ากันทุก error — error ใน payment flow สำคัญกว่า error โหลด avatar ร้อยเท่า",
    ],
    howToApply: [
      "ไล่ flow แล้วลิสต์ทุกจุด fail: validation, network, timeout, permission, conflict, server",
      "จัดกลุ่มตามสิ่งที่ user ทำได้: แก้เอง / ลองใหม่ / ขอสิทธิ์ / ทำอะไรไม่ได้",
      "เขียน message ต่อ error: เกิดอะไร + ข้อมูลเป็นอะไรไหม + ทำอะไรต่อ — ห้าม blame user",
      "Validation: แสดงที่ field, ตอน blur หรือ submit (ไม่ใช่ทุก keystroke), บอกวิธีแก้ไม่ใช่แค่ 'ไม่ถูกต้อง'",
      "Operation สำคัญ: สเปกว่า fail กลางทางแล้ว state เป็นยังไง — ข้อมูลที่กรอกต้องไม่หาย",
      "ป้องกันก่อนแสดง: constraint ที่ตัด error ทิ้งได้ (เช่น disable วันที่ในอดีต) ให้ทำก่อน",
    ],
    checklist: [
      "ทุก error message ตอบครบ: เกิดอะไร / ข้อมูลฉันโอเคไหม / ทำอะไรต่อ",
      "Validation แสดงที่ field พร้อมวิธีแก้ ไม่ใช่ list รวมบนหัวฟอร์ม",
      "Network error มี retry และข้อมูลที่กรอกไว้ไม่หาย",
      "ไม่มี 'Something went wrong' เปล่าๆ ในจุดเงิน/ข้อมูลสำคัญ",
      "Error ที่ป้องกันได้ถูกป้องกันด้วย constraint แทนการแสดง error",
      "Tone ไม่ blame user ('รหัสไม่ถูกต้อง' ไม่ใช่ 'คุณใส่รหัสผิด')",
    ],
    deliverables: ["Error matrix ต่อ flow (จุด fail × ประเภท × message × action)", "Error message copy ที่เขียนจริงทุกตัว ไม่ใช่ placeholder"],
    goodExample:
      "Checkout fail ตอนตัดบัตร: 'การชำระเงินไม่สำเร็จ — ยังไม่มีการตัดเงิน ตะกร้าของคุณยังอยู่ครบ' + ปุ่ม 'ลองอีกครั้ง' กับ 'เปลี่ยนวิธีจ่าย' — user รู้สถานะเงินตัวเอง รู้ว่าของไม่หาย รู้ทางไปต่อ — ไม่มีใครต้องโทรหา support",
    badExample:
      "Form สมัคร 12 ช่อง กด submit แล้วขึ้น 'Error: invalid input' ลอยบนหัวฟอร์ม — ไม่บอกช่องไหน ไม่บอกผิดยังไง และข้อมูลที่กรอกหายหมด — user ลองใหม่สองรอบแล้วปิด tab ไปสมัครของคู่แข่ง",
    commonMistakes: [
      "Error message generic ('Something went wrong') ในจุดที่ user ต้องรู้สถานะเงิน/ข้อมูล",
      "Validation ยิงทุก keystroke — user โดนด่าตั้งแต่ยังพิมพ์ไม่เสร็จ",
      "Submit fail แล้วข้อมูลที่กรอกหาย — บาปหนักสุดของ form UX",
      "Message มีแต่รหัส error (ERR_5021) ที่มีความหมายกับ dev เท่านั้น",
      "ออกแบบ error สวยหรูแทนที่จะป้องกัน error นั้นด้วย constraint ตั้งแต่แรก",
    ],
    relatedSlugs: ["error-state-review", "form-ux-review", "state-specification", "ux-writing", "edge-cases"],
    tags: ["error", "validation", "recovery"],
    prompts: [
      `You are a UX designer specifying error handling for a critical flow. Flow: [FLOW NAME + STEPS, e.g. checkout: cart → address → payment → confirm].

1. FAILURE INVENTORY: list every failure point per step (validation, network, timeout, permission, conflict, third-party)
2. CLASSIFY each by what the user can do: fix-it / retry / request-access / nothing
3. For each failure, write the ACTUAL message copy answering: what happened / is my data-money safe / what to do next — no placeholders, no blame, no bare error codes
4. STATE GUARANTEE: for each mid-flow failure, specify what is preserved (form data, cart, payment state) and how the user is told
5. PREVENTION PASS: which of these errors can be eliminated with constraints (disabled options, input masks, confirms) instead of shown

Output: error matrix table (step / failure / class / message copy / preserved state / action) + prevention list. Order by user impact, money/data-related first.`,
    ],
    visualDemo: "audit-report",
    demoData: {
      title: "Checkout Error Audit",
      findings: [
        { severity: "critical", issue: "Payment fail แสดง 'Error' — user ไม่รู้เงินถูกตัดไหม", fix: "บอกสถานะเงิน + ตะกร้ายังอยู่ + ปุ่มลองใหม่" },
        { severity: "high", issue: "Submit fail แล้วฟอร์ม 12 ช่องหายหมด", fix: "เก็บค่าที่กรอกไว้เสมอ, focus ช่องแรกที่ผิด" },
        { severity: "medium", issue: "Validation ยิงทุก keystroke", fix: "Validate ตอน blur, ยกเว้น format ช่วยพิมพ์" },
      ],
    },
  },
  {
    id: "edge-cases",
    slug: "edge-cases",
    term: "Edge Case Specification",
    category: "handoff",
    icon: "🧩",
    level: "advanced",
    shortDescription: "ไล่หา + สเปกกรณีสุดขอบก่อน dev เจอเอง: ข้อมูลสุดโต่ง, สิทธิ์พิเศษ, ของเกิดพร้อมกัน, ผู้ใช้นอกสูตร",
    fullDefinition:
      "Edge case specification คือวินัยการถามอย่างเป็นระบบว่า 'แล้วถ้า...' ก่อน handoff: ข้อมูลสุดโต่ง (0 รายการ, 10,000 รายการ, ชื่อยาวสุด, วันที่ 29 ก.พ.), สิทธิ์ (admin เห็นอะไรต่างจาก member? คนถูกถอนสิทธิ์กลางคันล่ะ?), เวลา/พร้อมกัน (สองคนแก้ record เดียวกัน, ของหมดระหว่างอยู่ใน checkout), lifecycle (user ถูกลบแต่ comment ยังอยู่?) — เลือกเคสที่เกิดจริงมีผลจริงมาสเปก ไม่ใช่ทุกเคสที่จินตนาการได้",
    whyItMatters:
      "Edge case ที่ไม่ถูกสเปกไม่ได้หายไป — มันถูกตัดสินใจโดย dev ตอนตี 2 ก่อน deadline หรือโดย user ที่เจอหน้าพังในโปรดักชัน — bug ที่แพงที่สุดมักไม่ใช่ logic ผิด แต่คือเคสที่ไม่มีใครเคยคิด: ระบบจองที่สองคนกดจองที่นั่งเดียวกันพร้อมกัน, ส่วนลดที่ติดลบเมื่อใช้คูปองซ้อน — คิดตอนออกแบบถูกกว่าคิดตอน incident",
    whenToUse: [
      "Feature ที่มีเงิน, สิทธิ์, หรือ concurrency เกี่ยวข้อง — เคสขอบมีต้นทุนจริง",
      "ก่อน handoff ทุก flow สำคัญ — ทำ edge case pass 30 นาทีร่วมกับ dev",
      "เมื่อ dev ถาม 'แล้วถ้า...' บ่อย — สัญญาณว่า design ยังสเปกไม่พอ",
    ],
    whenNotToUse: [
      "อย่าไล่ edge case จน paralysis — เคสที่เกิด 1 ในล้านและผลแค่ความสวยงาม ปล่อย default ได้",
      "Prototype ทดลองไอเดีย — ความเร็วของ learning สำคัญกว่าความครบ",
    ],
    howToApply: [
      "ใช้ 5 เลนส์ไล่: ข้อมูล (น้อยสุด/มากสุด/แปลกสุด), สิทธิ์ (ใครเห็น/ทำอะไรได้), เวลา (พร้อมกัน/หมดอายุ/ timezone), lifecycle (สร้าง→ลบ→กู้คืน), อุปกรณ์ (offline, จอเล็กสุด)",
      "ทำร่วมกับ dev — dev รู้ว่าตรงไหนระบบเปราะ, designer รู้ว่าตรงไหน user เจ็บ",
      "ต่อเคส ตัดสิน: ออกแบบ / ใช้ default ที่ประกาศชัด / ยอมรับความเสี่ยง (เขียนไว้)",
      "เคสที่ออกแบบ: เขียนเป็น AC เพิ่มใน ticket — ไม่ใช่ comment ลอยใน Figma",
      "จัดลำดับด้วย โอกาสเกิด × ความเสียหาย — เงินกับข้อมูลหายมาก่อนเสมอ",
      "เก็บ edge case ที่หลุดไปโปรดักชันกลับมาเป็น checklist ของทีม — ความจำองค์กร",
    ],
    checklist: [
      "ไล่ครบ 5 เลนส์: ข้อมูล / สิทธิ์ / เวลา / lifecycle / อุปกรณ์",
      "ทุกเคสมีคำตัดสิน: ออกแบบ, default, หรือยอมรับ (เขียนไว้)",
      "เคสเงิน/ข้อมูลหายถูกออกแบบเสมอ ไม่อยู่ในกลุ่ม 'ยอมรับ'",
      "เคสที่ออกแบบกลายเป็น AC ใน ticket แล้ว",
      "Dev ร่วม session — ไม่ใช่ designer เดาความเปราะของระบบเอง",
      "เคสหลุดในอดีตถูกเก็บเข้า checklist ทีม",
    ],
    deliverables: ["Edge case log ต่อ feature (เคส × ตัดสิน × ที่มา AC)", "Team edge-case checklist สะสมจากของจริง"],
    goodExample:
      "ก่อน handoff ระบบจองห้องประชุม ทีมไล่ 5 เลนส์เจอ: สองคนจองห้องเดียวกันวินาทีเดียวกัน (ออกแบบ: คนหลังเห็น conflict ทันที + ห้องว่างใกล้เคียง), จองข้าม timezone (default: แสดงเวลา local เสมอพร้อม label), ห้องถูกลบระหว่างมีการจองล่วงหน้า (ออกแบบ: แจ้ง + ช่วยย้าย) — สามเคสนี้คือ 80% ของ ticket ที่ระบบเก่าเจอ",
    badExample:
      "ระบบคูปองออกแบบแค่ happy path — โปรดักชันเจอ: ใช้คูปองซ้อนกันได้จนราคาติดลบ, คูปองหมดอายุระหว่างอยู่ในหน้า checkout แล้วระบบเงียบๆ คิดราคาเต็ม, user โดน charge แล้วงงว่าทำไมแพง — incident 3 วัน, refund 200 รายการ, ทั้งหมดป้องกันได้ด้วย edge case pass 30 นาที",
    commonMistakes: [
      "คิดแต่ happy path เพราะ deadline — แล้วจ่ายแพงกว่าตอน incident",
      "ไล่ edge case โดยไม่มี dev — designer ไม่รู้ว่าตรงไหนระบบเปราะจริง",
      "เจอเคสแล้วไม่ตัดสิน — list ยาวใน Figma comment ที่ไม่มีใครปิด",
      "สเปกเคสที่ตื่นเต้นแต่ไม่เกิด (asteroid case) ขณะที่เคสธรรมดา (ชื่อยาว) หลุด",
      "ไม่เก็บเคสที่หลุดกลับเข้า checklist — ทีมเจ็บซ้ำที่เดิมทุกโปรเจกต์",
    ],
    relatedSlugs: ["ui-acceptance-criteria", "state-specification", "error-handling", "copy-behavior", "design-qa"],
    tags: ["edge-case", "risk", "spec"],
    prompts: [
      `You are a senior engineer-designer pair doing an edge case pass before handoff. Feature: [FEATURE + DATA MODEL SUMMARY + USER ROLES].

Sweep these 5 lenses and list realistic edge cases for each:
1. DATA: zero/one/max items, longest realistic strings, extreme numbers, special dates (Feb 29, DST, year boundary)
2. PERMISSION: each role's view; mid-session permission revocation; shared/transferred ownership
3. TIME/CONCURRENCY: two users acting on the same object; resource expiring mid-flow; timezone display
4. LIFECYCLE: deleted-but-referenced objects (deleted user's comments); restore; duplicates
5. DEVICE/CONTEXT: offline mid-action, smallest viewport, slow connection

For each case, recommend a verdict: DESIGN (worth a designed behavior — describe it in 1 line), DEFAULT (state the acceptable default), or ACCEPT (risk acknowledged — state why). Order the DESIGN list by likelihood × damage; money and data-loss cases always rank first. Cap at the top 15 cases — practical, not exhaustive.`,
    ],
    visualDemo: "priority-matrix",
    demoData: {
      title: "Edge Case Triage",
      matrix: {
        xLabel: "โอกาสเกิด",
        yLabel: "ความเสียหาย",
        quadrants: ["ออกแบบทันที", "ออกแบบ + ป้องกัน", "Default พอ", "ยอมรับ (เขียนไว้)"],
        items: [
          { name: "คูปองซ้อนจนติดลบ", quadrant: 0 },
          { name: "จองชนกันวินาทีเดียว", quadrant: 1 },
          { name: "ชื่อยาว 50 ตัวอักษร", quadrant: 1 },
          { name: "เปิดบน smartwatch", quadrant: 3 },
        ],
      },
    },
  },
  {
    id: "qa-checklist",
    slug: "qa-checklist",
    term: "Design QA Checklist",
    category: "handoff",
    icon: "🔍",
    level: "basic",
    shortDescription: "Checklist มาตรฐานที่ใช้ตรวจ UI ที่ build แล้วเทียบกับ design ก่อน release — ตรวจเหมือนกันทุกครั้ง ไม่ใช่ตามอารมณ์",
    fullDefinition:
      "Design QA checklist คือรายการตรวจมาตรฐานที่ designer ใช้ review งานที่ dev build แล้ว: visual (spacing, typography, สี ตรง token ไหม), states (hover/focus/empty/error ครบตามสเปกไหม), responsive (จุดเปลี่ยน layout ทำงานไหม, 375px ไม่ overflow), content (truncation, format ตามกติกา), interaction (transition, keyboard) — ตรวจบน environment จริง (staging) device จริง เทียบกับ AC ที่เขียนไว้ ไม่ใช่ความรู้สึก ณ วันตรวจ",
    whyItMatters:
      "ถ้าไม่มี checklist การ design QA จะขึ้นกับว่าวันนั้น designer นึกถึงอะไร — รอบนี้จับ spacing รอบหน้าลืมดู error state — ผลคือคุณภาพไม่สม่ำเสมอและ feedback ที่ dev รู้สึกว่า 'ด่านเปลี่ยนทุกรอบ' — checklist ทำให้เกณฑ์โปร่งใส dev ตรวจตัวเองก่อนส่งได้ และจำนวน bug ที่หลุดถึง QA round ลดลงจริง",
    whenToUse: [
      "ทุก story ที่มี UI ก่อนปิด — ตรวจบน staging ด้วย checklist เดิมทุกครั้ง",
      "ให้ dev ใช้ checklist เดียวกัน self-check ก่อนส่ง review — ลดรอบเด้งกลับ",
      "ก่อน release ใหญ่ — sweep ทั้ง flow ด้วย checklist บน device จริง",
    ],
    whenNotToUse: [
      "อย่าใช้ checklist แทน AC — checklist คือมาตรฐานกลาง, AC คือเงื่อนไขเฉพาะ story ต้องมีทั้งคู่",
      "Prototype/experiment ที่ยังไม่ release จริง — เกณฑ์โปรดักชันเต็มรูปแบบยังไม่จำเป็น",
    ],
    howToApply: [
      "สร้าง checklist กลางจาก bug ที่เคยหลุดจริงของทีม — ไม่ใช่ copy จากอินเทอร์เน็ตทั้งดุ้น",
      "จัดหมวด: visual / states / responsive / content / interaction / a11y — หมวดละ 3-6 ข้อ",
      "ตรวจบน staging + device จริงอย่างน้อย 1 มือถือ — ไม่ตรวจจาก screenshot",
      "เทียบกับ AC และ spec — สิ่งที่นอกเหนือ spec เป็น suggestion ไม่ใช่ blocker",
      "บันทึกผลเป็น pass/fail ต่อข้อ + screenshot ของ fail — dev แก้ได้โดยไม่ต้องถามกลับ",
      "อัปเดต checklist ทุกครั้งที่ bug ประเภทใหม่หลุด — มันคือเอกสารมีชีวิต",
    ],
    checklist: [
      "Checklist สร้างจาก bug จริงของทีม และอัปเดตเมื่อมี bug ชนิดใหม่",
      "ตรวจครบหมวด: visual / states / responsive / content / interaction / a11y",
      "ตรวจบน staging + device จริง ไม่ใช่ screenshot",
      "Fail ทุกข้อมี screenshot + อ้างอิง spec/AC ที่ผิด",
      "แยก blocker (ผิด spec) กับ suggestion (เกิน spec) ชัดเจน",
      "Dev ได้ checklist เดียวกันไว้ self-check ก่อนส่ง",
    ],
    deliverables: ["Design QA checklist กลางของทีม (มีเวอร์ชัน, มีเจ้าของ)", "QA report ต่อ story: pass/fail + screenshot + อ้างอิง spec"],
    goodExample:
      "ทีมมี checklist 22 ข้อจาก bug จริง 2 ปี — dev รัน self-check ก่อนส่งทุกครั้ง, designer ตรวจ staging บน iPhone จริง 15 นาทีจบเพราะรู้ว่าดูอะไร, fail report มี screenshot + ลิงก์ spec ทุกข้อ — bug UI ที่หลุดถึงโปรดักชันลดจาก ~5 ต่อ release เหลือเกือบศูนย์",
    badExample:
      "Design QA คือ designer เปิด staging แล้ว scroll ดูตามความรู้สึก — รอบนี้ comment เรื่องสี รอบหน้าเพิ่งสังเกต empty state ที่หายไปตั้งแต่สามรอบก่อน — dev รู้สึกโดนย้ายเสาประตูทุกรอบ ส่วน production ก็ยังมี focus state หายทั้งแอปเพราะไม่เคยมีใครตรวจข้อนั้นเลย",
    commonMistakes: [
      "ตรวจตามความรู้สึกวันนั้น — เกณฑ์เปลี่ยนทุกรอบ dev เดาใจไม่ถูก",
      "ตรวจจาก screenshot ใน Slack แทน staging จริง — interaction กับ responsive หลุดหมด",
      "Feedback ไม่อ้าง spec — 'มันดูแปลกๆ' แก้ยังไงก็ไม่จบ",
      "ปน blocker กับความเห็นส่วนตัว — dev ไม่รู้อะไรต้องแก้ก่อน merge",
      "Checklist นิ่งเป็นปี — bug ชนิดใหม่หลุดซ้ำเพราะไม่เคยถูกเพิ่มเข้า list",
    ],
    relatedSlugs: ["design-qa", "ui-acceptance-criteria", "design-to-code-review", "component-states", "mobile-first-review"],
    tags: ["qa", "checklist", "review"],
    prompts: [
      `You are a UX/UI lead building a design QA checklist for your team. Context: [TEAM SIZE, PRODUCT TYPE, TOP 5 RECURRING UI BUGS FROM PAST RELEASES].

1. Build a checklist organized into: visual fidelity / states / responsive / content behavior / interaction / accessibility — 3-6 items per section, each phrased as a yes-no check a developer can self-run
2. Weight it toward our actual recurring bugs (listed above) — these get the most specific checks
3. Mark each item BLOCKER (violates spec/AC) or REVIEW (judgment call, discuss don't block)
4. Define the QA protocol: where to test (staging), minimum devices, what evidence a fail needs (screenshot + spec reference)
5. Add a maintenance rule: when and how items get added/retired

Output: the checklist in markdown (ready to paste into our PR template) + the protocol section. Keep total under 30 items — a checklist nobody finishes protects nobody.`,
    ],
    visualDemo: "qa-checklist",
    demoData: {
      title: "Design QA — Story #482",
      items: [
        "Spacing/typography ตรง token (ไม่มีค่า hardcode แปลกปลอม)",
        "States ครบ: hover, focus-visible, disabled, loading, error",
        "375px: ไม่มี horizontal overflow, CTA อยู่ในจอแรก",
        "Text ยาวตัดตามกติกา (ellipsis + tooltip)",
        "Keyboard: ทำ action หลักครบโดยไม่ใช้เมาส์",
        "Empty/error state ตรงตาม AC ข้อ 4-6",
      ],
    },
  },
  {
    id: "design-to-code-review",
    slug: "design-to-code-review",
    term: "Design-to-Code Review",
    category: "handoff",
    icon: "👀",
    level: "advanced",
    shortDescription: "Designer ร่วม review ผลลัพธ์ของ code (PR preview/staging) ในมุม UI: token ถูกใช้จริงไหม, behavior ตรง spec ไหม — ก่อน merge ไม่ใช่หลัง release",
    fullDefinition:
      "Design-to-code review คือการดึง designer เข้า loop ของ PR: ตรวจ preview deployment ของ PR ว่า UI ที่ build ตรง design จริง — ใช้ design token ไม่ hardcode, ใช้ component กลางไม่ clone ใหม่, behavior/transition ตรง spec, states ครบ — จุดต่างจาก design QA ปกติคือ timing: ตรวจระดับ PR ก่อน merge ตอนที่แก้ถูกที่สุด ไม่ใช่ตรวจ staging รวมตอนที่ทุกอย่าง merge ปนกันแล้วหาต้นตอยาก",
    whyItMatters:
      "ความผิดเพี้ยนที่จับตอน PR แก้ใน 10 นาที — ความผิดเพี้ยนเดียวกันที่หลุดไป merge ปนกับงานอื่น 3 สัปดาห์กลายเป็น 'ทำไม UI เพี้ยนทั้ง section ไม่รู้ตั้งแต่เมื่อไร' — และที่สำคัญกว่า: hardcode สี/clone component ที่หลุดผ่าน PR คือ design debt ที่โตเงียบๆ จน design system กลายเป็นแค่คำแนะนำ ไม่ใช่ความจริงของ codebase",
    whenToUse: [
      "PR ที่แตะ UI สำคัญ (flow หลัก, component กลาง, หน้า conversion)",
      "ทีมที่มี design system — ตรวจการใช้ token/component คือการรักษากฎหมายของระบบ",
      "Dev ใหม่เข้าทีม — review ช่วงแรกถี่หน่อยเพื่อ calibrate มาตรฐานร่วมกัน",
    ],
    whenNotToUse: [
      "อย่าตรวจทุก PR จนเป็นคอขวด — กำหนด trigger ชัด (แตะ UI หลัก/component กลาง) ที่เหลือใช้ self-check",
      "อย่าใช้ review นี้ comment เรื่องโครงสร้าง code — ขอบเขตคือผลลัพธ์ UI ไม่ใช่วิธีเขียน",
    ],
    howToApply: [
      "ตกลงกับทีม dev: PR ประเภทไหน tag designer (เช่น label 'needs-design-review')",
      "ตรวจจาก preview deployment เสมอ — ไม่ตัดสินจาก code หรือ screenshot ใน PR",
      "ไล่ 4 ชั้น: token (สี/ระยะ/font ใช้ token ไหม) → component (ใช้ของกลางหรือ clone?) → behavior (state, transition ตรง spec?) → responsive (จุดเปลี่ยน layout)",
      "Comment ในภาษา fix ได้: อ้าง token/spec ที่ถูก ('ใช้ space-md (16px) แทน 14px ตรงนี้') ไม่ใช่ 'มันดูแน่นๆ'",
      "แยก must-fix (ผิด spec/token) กับ nice-to-have ชัดเจน — เคารพเวลา dev",
      "Pattern ที่เจอซ้ำ ส่งกลับเข้า system: เพิ่ม lint rule, อัปเดต doc, หรือแก้ token ให้ใช้ง่ายขึ้น",
    ],
    checklist: [
      "ตรวจจาก preview deployment ไม่ใช่ screenshot",
      "ไล่ครบ 4 ชั้น: token / component reuse / behavior / responsive",
      "Comment ทุกข้ออ้าง spec หรือ token ที่ถูกต้อง — actionable ทันที",
      "แยก must-fix กับ suggestion ชัด ไม่ block PR ด้วยรสนิยม",
      "มี trigger ชัดว่า PR ไหนต้องผ่าน design review — ไม่ใช่ทุก PR",
      "ปัญหาซ้ำถูกแปลงเป็น lint rule / doc — ไม่ใช่ comment เดิมทุก PR",
    ],
    deliverables: ["Design review comment ใน PR (อ้าง token/spec, แยก must-fix)", "รายการ pattern ซ้ำที่ถูก escalate เป็น lint rule/doc"],
    goodExample:
      "PR หน้า pricing ถูก tag design review — designer เปิด preview เจอ: ราคาใช้ font-size hardcode 22px (token มี text-xl 20px), การ์ดแผนแนะนำ clone Card component มาแก้เอง — comment 2 ข้อพร้อม token ที่ถูก, dev แก้ 15 นาที merge ได้ — อีกสองเดือนต่อมา rebrand เปลี่ยน font ทั้งระบบในที่เดียว หน้า pricing ไม่หลุด",
    badExample:
      "ทีมไม่มี design review ใน PR — หกเดือนผ่านไป audit เจอสี hardcode 200 จุด, ปุ่ม clone 9 เวอร์ชัน — งาน rebrand ที่ควรเปลี่ยน token จุดเดียวกลายเป็น hunt-and-fix สามสัปดาห์ — ทุกจุดเคยผ่านตา reviewer ที่ดูแค่ logic เพราะ 'UI ไม่ใช่หน้าที่ฉัน'",
    commonMistakes: [
      "Review จาก screenshot ใน PR — จับ behavior, transition, responsive ไม่ได้เลย",
      "Comment เป็นความรู้สึก ('ดูแปลกๆ') แทนการอ้าง token/spec ที่ fix ได้ทันที",
      "ตรวจทุก PR จน designer เป็นคอขวด — แล้วทีมก็เลิกรอ เลิก tag",
      "จับ hardcode ได้แต่ comment ซ้ำทุก PR — ไม่เคย escalate เป็น lint rule",
      "เลยเถิดไปรีวิวโครงสร้าง code — เสียขอบเขต เสียความสัมพันธ์กับ dev",
    ],
    relatedSlugs: ["qa-checklist", "design-tokens", "design-system-governance", "cross-functional-review", "component-specification"],
    tags: ["pr-review", "tokens", "design-debt"],
    prompts: [
      `You are a design-literate frontend reviewer checking a PR's UI output against the design system. Inputs: [PREVIEW URL, FIGMA/SPEC LINK, DESIGN TOKEN LIST OR THEME FILE].

Review in 4 layers and report findings per layer:
1. TOKENS: hardcoded colors/spacing/font-sizes that have a matching token (quote the value found → the token to use); values with NO matching token (flag as system gap, not dev error)
2. COMPONENT REUSE: UI that re-implements an existing shared component (name the component it should use)
3. BEHAVIOR: states (hover/focus/disabled/loading/error) present and matching spec; transitions; keyboard path
4. RESPONSIVE: layout at 375px and the breakpoints in spec; unintended overflow

Classify every finding MUST-FIX (violates spec/system) or SUGGESTION. Write each as a ready-to-paste PR comment: file/element, what's wrong, exact fix. End with: recurring patterns worth a lint rule or doc update instead of repeated comments.`,
    ],
    visualDemo: "handoff-spec",
    demoData: {
      title: "PR #318 — Design Review",
      specs: [
        { label: "Token", value: "พบ hardcode #6B7280 → ใช้ text-secondary" },
        { label: "Component", value: "การ์ดแผนแนะนำ clone Card → ใช้ <Card highlighted>" },
        { label: "Behavior", value: "focus-visible หายบนปุ่ม plan — ต้องมี ring ตาม spec" },
        { label: "Responsive", value: "375px ผ่าน, 768px ตาราง feature ไม่ scroll — must-fix" },
      ],
    },
  },
];
