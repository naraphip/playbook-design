import type { Technique } from "@/types/playbook";

export const CONVERSION_TECHNIQUES: Technique[] = [
  {
    id: "tech-landing-conversion-review",
    slug: "landing-page-conversion-review",
    title: "Landing Page Conversion Review",
    category: "Conversion",
    useCase: "ตรวจ landing page ก่อนเปิดแคมเปญหรือเมื่อ conversion ต่ำ — ไล่ตามเส้นทางสายตาของคนแปลกหน้าที่มาจาก ad",
    difficulty: "intermediate",
    timeRequired: "0.5-1 วัน ต่อหน้า",
    participants: "ผู้ตรวจ 1-2 คน (อย่างน้อยหนึ่งคนไม่เคยเห็นหน้านี้)",
    inputNeeded: [
      "หน้าเต็ม (desktop + 375px)",
      "Ad/keyword ที่พา traffic มา + ข้อความ ad จริง",
      "Conversion ปัจจุบัน + proof ที่มีจริงทั้งหมด",
    ],
    steps: [
      "เริ่มจาก ad: อ่านข้อความ ad ก่อน แล้วเปิดหน้าด้วยตาคนที่เพิ่งคลิก — headline สานต่อสัญญาของ ad หรือเริ่มเรื่องใหม่",
      "จับเวลา 5 วินาทีที่จอแรก (375px ก่อน): ขายอะไร / ฉันได้อะไร / ทำอะไรต่อ — ครบไหม",
      "ไล่ section ทีละอัน: section นี้ตอบ objection ข้อไหนของคนซื้อ (จริงไหม? เหมาะกับฉันไหม? ราคา? เริ่มยังไง? เชื่อได้ไหม?) — ตอบไม่ได้ = candidate ตัด",
      "ตรวจ proof: เจาะจงไหม (ตัวเลข ชื่อ ลิงก์) อยู่ก่อนจุดขอ commitment ไหม",
      "นับ CTA: action กี่ชนิดแข่งกัน, label บอก outcome ไหม, มือถือถึงปุ่มแรกโดยไม่ scroll ไหม",
      "Speed-read test: อ่านแค่ headline + ตัวหนา + ปุ่ม (วิธีอ่านจริงของคน) — เรื่องยังครบไหม",
      "สรุปเป็น keep/fix/cut ต่อ section + hero ที่เขียนใหม่ + สมมุติฐาน A/B 3 อันดับ",
    ],
    output: "Section verdict (keep/fix/cut × objection ที่ตอบ) + hero rewrite + top 3 A/B hypotheses เรียงตาม impact",
    decisionCriteria: [
      "Headline ไม่ match ad = แก้ก่อนทุกอย่าง — ราคาถูกสุด ผลแรงสุด",
      "Section ที่ไม่ตอบ objection ใคร = ตัด (ทุก scroll มีต้นทุน)",
      "Defect (ลิงก์เสีย ข้อมูลขาด) แก้เลย / ความเชื่อ (สี ลำดับ) ต้อง A/B",
    ],
    exampleScenario:
      "Ads ขาย 'ปิดงบใน 3 วัน' แต่ landing เปิดด้วย 'Empowering Business' — bounce 81% — review ชี้ message mismatch เป็นข้อแรก แก้ headline ให้สานต่อ ad + ย้าย proof ขึ้นก่อน pricing — conversion จาก 1.1% เป็น 2.4% โดยไม่แตะ design อื่นเลย",
    commonMistakes: [
      "Review โดยไม่ดู ad ที่พาคนมา — ประเมิน message match ไม่ได้เลย",
      "ตรวจ desktop ทั้งที่ traffic ads 80% เป็นมือถือ",
      "ตัดสินทุกอย่างเป็น 'ต้องแก้' โดยไม่แยก defect จาก hypothesis — ทีมไม่รู้จะเริ่มไหน",
      "เพิ่ม section ใหม่เพื่อตอบทุก objection — หน้า 12 จอที่ไม่มีใคร scroll ถึง",
    ],
    template: `LANDING CONVERSION REVIEW
Ad/source: '___' (ข้อความจริง) → Headline หน้า: '___' MATCH? [Y/N]
จอแรก 375px (5 วิ): ขายอะไร [Y/N] ได้อะไร [Y/N] ทำอะไรต่อ [Y/N]
ต่อ section: [ชื่อ] ตอบ objection: ___ → [keep/fix/cut]
Objection ที่ไม่มีใครตอบ: ___
Proof: เจาะจง? ก่อน commitment?  CTA: ___ ชนิด (ควร 1)
Speed-read: เรื่องครบ? [Y/N]
Output: hero ใหม่ + A/B top 3: H1 ___ H2 ___ H3 ___`,
    prompt: `You are a CRO reviewer. Landing page: [SCREENSHOTS desktop + 375px]. Traffic: [SOURCE + EXACT AD COPY]. Conversion: [X%]. Real proof: [LIST].

Review in walk order:
1. Message match: page headline vs ad promise, word-level comparison — verdict
2. First viewport at 375px: the three answers (what's sold / what I get / what next) — quote what it actually says
3. Section-by-section: objection answered (or none → cut candidate); unanswered objections list
4. Proof: specificity + placement vs commitment asks
5. CTA: competing-action count, label quality, mobile reach
6. Speed-read pass: headlines + bold + buttons only — does the page still sell?
Output: section verdict table → rewritten hero (headline/subhead/CTA, no fabricated proof) → defects-fix-now list vs top 3 A/B hypotheses (hypothesis/variant/metric).`,
    relatedSlugs: ["landing-page-review", "offer-clarity", "cta-hierarchy", "trust-signals"],
    tags: ["landing-page", "cro", "message-match"],
  },
  {
    id: "tech-cta-hierarchy-review",
    slug: "cta-hierarchy-review",
    title: "CTA Hierarchy Review",
    category: "Conversion",
    useCase: "ไล่ตรวจทุก viewport ของ flow ว่า action hierarchy ถูกต้อง: primary เดียวเด่น, label บอก outcome, destructive ปลอดภัย",
    difficulty: "basic",
    timeRequired: "2-4 ชม. ต่อ flow",
    participants: "ผู้ตรวจ 1 คน",
    inputNeeded: ["ทุกหน้า/จอของ flow", "Action ที่ business ต้องการต่อหน้า (ถ้าทีมตอบไม่ได้ — นั่นแหละปัญหาแรก)"],
    steps: [
      "ต่อ viewport ถามก่อน: action เดียวที่อยากให้ user ทำที่สุดคืออะไร — เขียนลงก่อนดู UI",
      "นับปุ่มทุกระดับใน viewport: filled / outline / ghost / link — filled เกิน 1 = ต้องมีเหตุผลหรือแก้",
      "เทียบความเด่นกับความตั้งใจ: ปุ่มที่เด่นสุดคือ action ที่ต้องการสุดจริงไหม (บ่อยครั้งปุ่มเด่นสุดคือของที่ stakeholder เสียงดังสุด)",
      "ตรวจ label ทุกปุ่ม: กริยา+outcome ('เริ่มทดลองฟรี') หรือ generic ('Submit', 'ตกลง') — เขียนใหม่ทุกตัวที่ generic",
      "ตรวจ destructive: ปุ่มลบ/ยกเลิกถาวร เด่นกว่าหรือเท่า safe action ไหม, อยู่ตำแหน่งที่นิ้วกดพลาดไหม, เป็น default focus ใน dialog ไหม",
      "ตรวจความสม่ำเสมอข้าม flow: action เดียวกัน label เดียวกันทุกจอไหม, ปุ่มย้อนกลับ demote สม่ำเสมอไหม",
    ],
    output: "CTA map ต่อ viewport (action × ระดับปัจจุบัน × ระดับที่ควร × label ใหม่) + กติกา hierarchy ให้ design system",
    decisionCriteria: [
      "หนึ่ง viewport หนึ่ง filled primary — ข้อยกเว้นต้องอธิบายได้",
      "ปุ่มเด่นสุด ≠ action ที่ต้องการสุด = แก้ทันที",
      "Destructive เป็น default focus หรือเด่นใน dialog = แก้ทันที (ความเสียหายจริง)",
    ],
    exampleScenario:
      "หน้า pricing มี filled 4 ปุ่ม (ทุกแผน + 'คุยกับเซลส์') — user ตาลาย ไม่มีทางหลัก — แก้: filled เฉพาะแผนแนะนำ, แผนอื่น outline, เซลส์เป็น link — คลิกแผนแนะนำขึ้น 31% โดย total signup ไม่ลด",
    commonMistakes: [
      "ตัดสินจากความสวย ไม่ได้เริ่มจาก 'action ที่ต้องการคืออะไร'",
      "ยอมให้ทุก stakeholder ได้ปุ่มเด่น — สุดท้ายไม่มีอะไรเด่น",
      "แก้ hierarchy แต่ปล่อย label generic ไว้ — ปุ่มเด่นที่เขียนว่า 'Submit' ยังไม่บอกอะไร",
      "ลืมตรวจ dialog — จุดที่ destructive prominence ทำความเสียหายจริงที่สุด",
    ],
    template: `CTA HIERARCHY REVIEW
ต่อ viewport:
  Action ที่ต้องการสุด (เขียนก่อนดู UI): ___
  นับ: filled ___ / outline ___ / ghost ___ / link ___
  เด่นสุดตอนนี้: ___ ตรงกับที่ต้องการ? [Y/N]
  Labels generic: [ลิสต์] → เขียนใหม่: ___
  Destructive: เด่นเกิน? ใกล้ปุ่มบ่อย? default focus? [Y/N]
ข้าม flow: label สม่ำเสมอ? ย้อนกลับ demote เสมอ?
กติกาให้ระบบ: filled=primary เดียว / outline=secondary / link=ที่เหลือ`,
    prompt: `You are a UI reviewer focused on CTA hierarchy. Screens: [SCREENSHOTS PER VIEWPORT]. Desired action per screen: [LIST — or tell me to derive from user intent + business goal].

Per viewport:
1. List every actionable element: current weight (filled/outline/ghost/link) + label
2. State the single action this viewport should drive (reasoning)
3. Violations: multiple filleds, dominance-intent mismatch, destructive prominence/default-focus, generic labels
4. Corrected map: element → level → rewritten outcome label (Thai)
Cross-flow: same action labeled differently across screens; back-button treatment consistency.
Output: per-viewport table + the design-system button rule that prevents recurrence.`,
    relatedSlugs: ["cta-hierarchy", "interaction-design", "ux-writing", "landing-page-review"],
    tags: ["cta", "buttons", "hierarchy"],
  },
  {
    id: "tech-pricing-page-review",
    slug: "pricing-page-review",
    title: "Pricing Page Review",
    category: "Conversion",
    useCase: "ตรวจหน้า pricing ด้วยเกณฑ์ 'เลือกได้ใน 1 นาที' — tier ต่างชัด, ราคาจริงไม่ซ่อน, คำถามเงินถูกตอบบนหน้า",
    difficulty: "intermediate",
    timeRequired: "0.5 วัน",
    participants: "ผู้ตรวจ 1 + คนจาก sales/support (แหล่งคำถามเงินจริง)",
    inputNeeded: [
      "หน้า pricing ปัจจุบัน", "Tier + ราคา + สิ่งที่แยกแต่ละ tier จริงๆ",
      "คำถามเรื่องเงินที่ sales/support เจอบ่อย (ขุมทรัพย์ของ review นี้)",
      "Data: เข้า pricing แล้วไปไหนต่อ (ถ้ามี)",
    ],
    steps: [
      "One-minute test: ให้คนที่ fit profile ลูกค้าลองเลือกแผน จับเวลา — เกิน 1 นาทีหรือเลือกไม่ได้ = มีปัญหา จดว่าติดตรงไหน",
      "ตรวจเกณฑ์แยก tier: ต่างกันด้วยมิติเดียวที่เข้าใจง่ายไหม (จำนวนคน/ปริมาณ/ขั้นฟีเจอร์) หรือต้องไล่ diff ตาราง 40 แถวเอง",
      "ตรวจแผนแนะนำ: มี highlight ไหม มีเหตุผล fit ไหม ('เหมาะกับทีม 5-20 คน') หรือแค่ป้าย 'แนะนำ' ลอยๆ",
      "ตรวจความซื่อสัตย์ราคา: billed annually ตัวเล็ก? ราคาที่โชว์คือที่จ่ายจริงไหม? VAT? per-seat ที่คูณแล้วช็อก?",
      "เอาคำถามจาก sales/support มาไล่: แต่ละข้อตอบบนหน้านี้ได้ไหม — เขียน microcopy ตอบทุกข้อที่ขาด",
      "ตรวจตาราง feature: แถวไหนต่างจริงระหว่าง tier (เก็บ) แถวไหนทุก tier มี (ยุบเป็น 'ทุกแผนรวม') แถวไหนไม่มีใครใช้ตัดสิน (ย้ายไป docs)",
      "ตรวจ CTA ต่อ tier: กดแล้วเกิดอะไรชัดไหม (trial ต้องใส่บัตร? demo คุยกับใคร?)",
    ],
    output: "Blocker list เรียงตามผลต่อการตัดสินใจ + ตาราง feature ใหม่ (≤8 แถว) + microcopy ตอบคำถามเงิน + CTA rewrite",
    decisionCriteria: [
      "เลือกไม่ได้ใน 1 นาที = โครงสร้าง tier มีปัญหา ไม่ใช่แค่ UI",
      "คำถามเงินที่ sales ตอบซ้ำทุกวัน = ต้องอยู่บนหน้า ไม่มีข้อแก้ตัว",
      "ราคาที่ user เห็นครั้งแรก ≠ ที่จ่ายจริง = แก้ก่อนทุกอย่าง (trust)",
    ],
    exampleScenario:
      "หน้า pricing 4 แผน ตาราง 43 แถว — sales บอกลูกค้าถาม 'ต่างกันยังไง' ทุกสาย — review: ยุบเหลือ 7 แถวที่ต่างจริง + เพิ่มบรรทัด 'เหมาะกับ...' ต่อแผน + ตอบ VAT/ยกเลิก/อัปเกรดบนหน้า — สาย sales ถามเรื่องพื้นฐานลดลงครึ่ง คลิกแผนขึ้น",
    commonMistakes: [
      "ตาราง feature ยาวเพื่อให้ดูคุ้ม — ยิ่งยาวยิ่งเลือกยาก ยิ่งเลื่อนการตัดสินใจ",
      "ไม่คุยกับ sales/support ก่อน review — พลาดรายการคำถามเงินจริงที่หน้าต้องตอบ",
      "แนะนำแผนโดยไม่บอกเหตุผล fit — อ่านเป็น 'แผนที่อยากขาย' ทันที",
      "เลี่ยงเรื่อง VAT/ราคาจริงเพราะ 'เดี๋ยวค่อยเห็นตอน checkout' — ความช็อกตอนจ่ายคือ churn ก่อนเริ่ม",
    ],
    template: `PRICING PAGE REVIEW
One-minute test: เลือกได้ใน ___ วิ ติดที่: ___
Tier แยกด้วย: ___ (มิติเดียว? [Y/N])
แผนแนะนำ: highlight? เหตุผล fit? [Y/N]
ราคาซื่อสัตย์: โชว์ = จ่ายจริง? annual ชัด? VAT? [Y/N]
คำถามเงินจาก sales/support: [ข้อ × ตอบบนหน้า? → microcopy]
ตาราง: ___ แถว → ต่างจริง ___ / 'ทุกแผนรวม' ___ / ย้าย docs ___
CTA ต่อ tier: กดแล้วเกิดอะไร ชัด? [Y/N]`,
    prompt: `You are a pricing page CRO reviewer. Page: [SCREENSHOT]. Tiers: [DETAILS]. Recurring money questions from sales/support: [LIST]. Behavior data: [IF ANY].

Audit:
1. One-minute decision test: what blocks a fitting buyer from choosing fast — single-dimension tier differentiation or feature-soup?
2. Recommended plan: highlighted WITH a fit reason, or salesy badge?
3. Price honesty: shown price vs actually-charged (annual games, per-seat math, VAT) — flag every gap
4. Money questions: each one answered on-page? Write the missing Thai microcopy
5. Feature table diet: per row — differs-across-tiers (keep) / identical (collapse to "ทุกแผนรวม") / nobody-decides-on-this (move to docs); target ≤8 rows
6. Per-tier CTA: what literally happens next — rewrite vague ones
Output: blockers ranked by decision impact + new table spec + microcopy + CTA rewrites.`,
    relatedSlugs: ["pricing-page-ux", "offer-clarity", "trust-signals", "checkout-ux"],
    tags: ["pricing", "saas", "decision"],
  },
  {
    id: "tech-checkout-friction-audit",
    slug: "checkout-friction-audit",
    title: "Checkout Friction Audit",
    category: "Conversion",
    useCase: "ไล่หา friction ตั้งแต่ตะกร้าถึงจ่ายสำเร็จ ตามลำดับสาเหตุ abandonment จริง: ค่าซ่อน → บังคับสมัคร → ฟอร์ม → ความกังวล",
    difficulty: "advanced",
    timeRequired: "1-2 วัน",
    participants: "ผู้ตรวจ 1-2 + dev (จำลอง payment fail) + ซื้อจริง 1 รอบเป็นอย่างน้อย",
    inputNeeded: [
      "Checkout ที่ซื้อจริงได้ (staging ที่จ่ายปลอมได้ หรือซื้อจริงแล้ว refund)",
      "Abandonment data ต่อ step", "นโยบายจริง: ค่าส่ง คืนสินค้า",
    ],
    steps: [
      "ซื้อจริงหนึ่งรอบบนมือถือ จับเวลา จด friction ทุกจุด — ทีมที่ไม่เคยซื้อของตัวเองคือทีมที่ไม่รู้จัก checkout ตัวเอง",
      "ทำ price-truth timeline: ราคาที่ user เห็น ณ ตะกร้า → address → payment — ค่าใช้จ่ายโผล่เพิ่มตรงไหน (สาเหตุ abandonment อันดับ 1)",
      "ตรวจ guest checkout: คนแปลกหน้าซื้อได้โดยไม่สร้างบัญชีไหม — ถ้าบังคับ อยู่ตรงไหน อ้างเหตุผลอะไร",
      "Field audit ต่อ step: ช่องไหนจำเป็นกับ 'การซื้อครั้งนี้' ช่องไหนคือความอยากได้ data ของทีม",
      "ตรวจจุดจ่าย: reassurance ในสายตา ณ ช่องกรอกบัตร (ยอดรวม ตรา security นโยบายคืน) + จำลอง payment fail: บอกสถานะเงินไหม ข้อมูลรอดไหม กดซ้ำกันไหม",
      "ตรวจการแก้ไข: ย้อนไปแก้ตะกร้า/ที่อยู่ได้โดยไม่เริ่มใหม่ไหม",
      "เทียบ abandonment data: drop ใหญ่สุดตรงกับ friction ที่เจอไหม — ถ้าไม่ตรง หาต่อ",
    ],
    output: "Friction inventory ต่อ step × ชนิด × severity + price-truth timeline + field diet + top 3 fixes ตาม expected recovery",
    decisionCriteria: [
      "ค่าใช้จ่ายโผล่หลังตะกร้า = แก้อันดับ 1 เสมอ (สาเหตุ abandonment ที่ใหญ่ที่สุดในทุก survey)",
      "ไม่มี guest checkout = อันดับ 2 — บังคับสมัครก่อนจ่ายคือกำแพงที่แพงที่สุด",
      "Payment fail ที่สถานะเงินกำกวม = blocker เรื่อง trust แก้ทันที",
    ],
    exampleScenario:
      "Checkout 4 steps drop หนัก step 3 — audit พบค่าส่ง 60 บาทโผล่ครั้งแรกพร้อมช่องกรอกบัตร (surprise + anxiety จุดเดียวกัน) — แก้: ค่าส่งโชว์ตั้งแต่ตะกร้า + คืนเงิน 30 วันย้ายมาข้างปุ่มจ่าย — abandonment step 3 ลด 19%",
    commonMistakes: [
      "Audit จาก screenshot ไม่ซื้อจริง — ไม่เจอ validation, timing, payment fail behavior",
      "ไล่ friction ทุกชนิดน้ำหนักเท่ากัน — ค่าซ่อนกับสีปุ่มไม่ใช่ระดับเดียวกัน",
      "ไม่จำลอง payment fail — เคสที่ทำลาย trust แรงสุดไม่เคยถูกดู",
      "แก้ด้วยการเพิ่ม progress bar สวยๆ โดยไม่ลด step/field จริง",
    ],
    template: `CHECKOUT FRICTION AUDIT
ซื้อจริง: [วันที่/อุปกรณ์/เวลาที่ใช้] friction ที่รู้สึกเอง: ___
PRICE-TRUTH TIMELINE: ตะกร้า ฿___ → address ฿___ → payment ฿___ (โผล่เพิ่ม: ___)
Guest checkout: [Y/N] บังคับสมัครที่: ___
FIELDS ต่อ step: จำเป็นกับการซื้อ ___ / CRM อยากได้ ___ → ตัด/เลื่อน
จุดจ่าย: reassurance ในสายตา: ___ / payment fail: เงิน? ข้อมูล? กดซ้ำ?
แก้ไขย้อน: ตะกร้า [Y/N] ที่อยู่ [Y/N]
เทียบ data: drop ใหญ่ที่ ___ ตรงกับ friction: ___`,
    prompt: `You are a checkout optimization specialist. Steps: [SCREENSHOTS IN ORDER]. Abandonment per step: [DATA]. Policies: [SHIPPING/RETURNS]. Guest checkout: [Y/N]. Real-purchase notes: [PASTE IF DONE].

Audit in damage order:
1. SURPRISE COSTS: price-truth timeline — where the full price first appears; anything post-cart is a finding
2. FORCED ACCOUNT: can a stranger buy without registering — where's the wall, what's the claimed reason
3. FORM BURDEN: per step field counts — purchase-necessary vs CRM appetite; address/payment input UX
4. PAYMENT ANXIETY: reassurance in view at card entry; payment-failure behavior (money state explicit? data preserved? double-submit blocked?)
5. EDIT PATHS: changing cart/address without restarting
6. Cross-check abandonment data vs findings — explain or challenge the data's story
Output: friction inventory (step/type/severity/fix) + timeline + field diet + top 3 by expected recovery.`,
    relatedSlugs: ["checkout-ux", "friction-reduction", "trust-signals", "error-handling"],
    tags: ["checkout", "abandonment", "e-commerce"],
  },
  {
    id: "tech-onboarding-flow-review",
    slug: "onboarding-flow-review",
    title: "Onboarding Flow Review",
    category: "Conversion",
    useCase: "ตรวจ onboarding ด้วยคำถามเดียว: user ใหม่ถึง first value เร็วแค่ไหน — ตัด/เลื่อนทุกอย่างที่ขวาง",
    difficulty: "intermediate",
    timeRequired: "1 วัน",
    participants: "ผู้ตรวจ 1 + PM (ตัดสินว่าอะไรเลื่อนได้) + บัญชีใหม่จริง",
    inputNeeded: [
      "Onboarding จริงเดินด้วยบัญชีใหม่", "นิยาม aha moment ของ product",
      "Funnel data ต่อ step (ถ้ามี)",
    ],
    steps: [
      "นิยาม aha moment ให้ชัดก่อน: user เห็นคุณค่าจริงครั้งแรกตอนไหน — ถ้าทีมตอบไม่ตรงกัน หยุดตรงนี้ก่อน (ปัญหาใหญ่กว่า onboarding)",
      "เดินด้วยบัญชีใหม่ จับเวลา + นับทุก field/decision จาก signup ถึง aha",
      "Tag ทุก step: value-critical (จำเป็นต่อ first value) / deferrable (ถามทีหลังได้) / cut (ไม่มีเหตุผล)",
      "หา 'จุดที่ effort มาก่อน value': อัปโหลดเอกสาร, เชื่อม integration, เชิญทีม — ก่อนที่ user เห็นว่าได้อะไร — จุดเหล่านี้คือที่ funnel ตาย",
      "ตรวจ copy ทุก step ที่ขอข้อมูล: บอกไหมว่าให้แล้วได้อะไร ('เชื่อมบัญชีเพื่อเห็นกำไรจริง' vs 'เชื่อมบัญชี')",
      "ตรวจปลายทาง: จบ onboarding ลงที่ไหน — workspace ที่ใช้ได้จริง หรือหน้าเปล่าที่เริ่มปัญหา cold start ใหม่",
      "เสนอ flow ใหม่: step น้อยลง + sample data/template ที่ทำให้เห็น value ก่อนลงแรง + รายการสิ่งที่เลื่อนพร้อมจังหวะใหม่ที่จะถาม",
    ],
    output: "Step audit (tag + effort + เวลา) + flow ใหม่ (เทียบจำนวน step และ time-to-value) + defer list พร้อมจังหวะถามใหม่ + copy rewrites",
    decisionCriteria: [
      "Step ที่ไม่ value-critical และอยู่ก่อน aha = เลื่อนหรือตัด — เกือบทุกอย่างเลื่อนได้",
      "ถ้า first value ต้องรอ data จริงของ user = ต้องมีเส้นทาง sample/template เสมอ",
      "Funnel drop ใหญ่สุดควรตรงกับจุด effort-before-value — ถ้าไม่ตรง สืบต่อ",
    ],
    exampleScenario:
      "Onboarding 7 steps, activation 22% — เดินเองพบ step 4 บังคับเชิญทีมก่อนเห็นอะไรเลย (drop 40% ตรงนี้พอดี) — flow ใหม่: 3 steps ถึง board พร้อม template, เชิญทีมเลื่อนไป prompt หลังสร้าง task ที่สาม — activation ขึ้น 22% → 41%",
    commonMistakes: [
      "ทีมไม่เคยเดินด้วยบัญชีใหม่จริง — เห็นแต่ demo account ที่ข้อมูลสวย",
      "นิยาม activation เป็น 'จบ onboarding' — จบทัวร์ไม่ได้แปลว่าเห็นคุณค่า",
      "ขอทุกอย่างตอนสมัครเพราะ 'เดี๋ยวไม่มีโอกาสถาม' — มีโอกาสเสมอถ้า product มีค่า",
      "แก้ด้วย progress bar/animation โดยไม่ลด effort จริง",
    ],
    template: `ONBOARDING REVIEW
Aha moment (ทีมเห็นตรงกัน): ____________
เดินจริง: เวลา signup→aha: ___ นาที fields: ___ decisions: ___
ต่อ step: [ชื่อ] tag: [value-critical/deferrable/cut] effort: [สูง/กลาง/ต่ำ]
  copy ขอข้อมูล: บอก value ไหม → rewrite: ___
Effort-before-value จุดใหญ่: ___ (ตรง funnel drop? [Y/N])
ปลายทาง: [workspace ใช้ได้ / หน้าเปล่า]
Flow ใหม่: ___ → ___ steps / sample data path: ___
Defer list: [สิ่ง × จังหวะใหม่ที่ถาม]`,
    prompt: `You are an activation-focused product designer reviewing onboarding. Steps: [SCREENSHOTS/DESCRIPTIONS]. Aha moment: [DEFINITION]. Funnel: [PER-STEP % IF ANY]. Fresh-account walkthrough notes: [TIME, FIELDS, DECISIONS].

Review:
1. Per step: tag value-critical / deferrable / cut — with reasoning; effort level
2. Effort-before-value spikes: where heavy asks precede any delivered value — match against funnel drops
3. Copy audit: every data-ask framed in value terms? Quote and rewrite weak ones (Thai)
4. Landing check: does onboarding end in a usable populated state or an empty product?
5. Redesigned flow: steps to first value (N → M), the sample-data/template bridge if real data is needed, defer list with the new moment each ask moves to
6. Instrumentation: the activation event + per-step events to track
Challenge the aha definition itself if it looks like vanity.`,
    relatedSlugs: ["onboarding-flow", "empty-state-review", "form-conversion", "user-goal"],
    tags: ["onboarding", "activation", "first-value"],
  },
  {
    id: "tech-ab-test-design",
    slug: "ab-test-design",
    title: "A/B Test Design",
    category: "Conversion",
    useCase: "แปลงไอเดีย/ข้อถกเถียงให้เป็นการทดลองที่ถูกหลัก: hypothesis มีหลักฐาน, ตัวแปรเดียว, sample พอ, กติกาหยุดชัด",
    difficulty: "advanced",
    timeRequired: "วางแผน 1-2 วัน + รัน 2-6 สัปดาห์ตาม traffic",
    participants: "เจ้าของ test 1 + คนเช็ค stat (หรือเครื่องมือ) + dev ติดตั้ง",
    inputNeeded: [
      "ไอเดียที่จะ test + หลักฐานเบื้องหลัง (data/research ที่ชี้ทางนี้)",
      "Traffic ต่อเดือนของหน้านั้น + conversion ปัจจุบัน",
      "เครื่องมือ test ที่มี",
    ],
    steps: [
      "เขียน hypothesis เต็มรูป: 'เพราะ [หลักฐาน] ถ้าเรา [เปลี่ยน X] แล้ว [metric Y] จะ [ขึ้น/ลง] เพราะ [กลไก]' — ช่องหลักฐานว่าง = ยังไม่พร้อม test ไปหาหลักฐานก่อน",
      "ออกแบบ variant ที่เปลี่ยน 'กลไกเดียว' — เปลี่ยน headline + layout + CTA พร้อมกัน = ชนะแล้วไม่รู้เพราะอะไร",
      "คำนวณ sample ก่อนเริ่ม: ด้วย traffic และ base rate นี้ ตรวจจับ effect ขั้นต่ำเท่าไรได้ในกี่สัปดาห์ — ถ้าต้องรอ 6 เดือน = เปลี่ยนเป็น variant ที่ bold ขึ้นหรือใช้วิธีอื่น (user test)",
      "ตั้ง guardrail metrics: อะไรห้ามแย่ลง (เช่น test ทำให้ signup ง่ายขึ้น → ดู activation downstream ด้วย ไม่ใช่แค่ signup)",
      "เขียนกติกาหยุดก่อนเริ่ม: รันถึงวันที่/sample ที่กำหนด ห้าม peek แล้วหยุดตอนชนะ (false positive โรงงาน)",
      "Pre-commit decision tree: ชนะ → ทำอะไร / แพ้ → ทำอะไร / เสมอ → ทำอะไร (ไม่ใช่ 'รันต่อจนชนะ')",
      "หลังจบ: อ่านผลตาม segment หลักด้วย (mobile/desktop) แต่ระวัง multiple comparison — segment ที่ไม่ได้ตั้งใจดูล่วงหน้าเป็นแค่ hypothesis ใหม่",
    ],
    output: "Test spec: hypothesis + variant + power calc + guardrails + stop rules + decision tree — หนึ่งหน้า ทุกคน sign-off ก่อนรัน",
    decisionCriteria: [
      "Traffic ไม่พอตรวจ effect ที่สมจริง = อย่ารัน — ใช้ qualitative แทน (ผล underpowered แย่กว่าไม่มีผล)",
      "ผลเสมอ = hypothesis ผิดหรือ effect เล็กกว่าที่วัดได้ — กลับไปดูหลักฐาน ไม่ใช่รันต่อ",
      "ชนะแต่ guardrail แย่ลง = ไม่ ship — อ่านผลรวมเสมอ",
    ],
    exampleScenario:
      "ทีมเถียงกันเรื่องย้าย social proof ขึ้นเหนือ pricing — แปลงเป็น test: hypothesis อิง heatmap (68% ไม่ scroll ถึง proof), power calc บอกตรวจ effect ≥25% ได้ใน 5 สัปดาห์ — ผล: +18% สถิติไม่ถึง (underpowered สำหรับ effect นี้) — ตาม decision tree ที่ตกลงไว้: ship เพราะไม่มี downside + หลักฐานทิศทางสนับสนุน — ไม่มีดราม่าเพราะกติกาเขียนไว้ก่อน",
    commonMistakes: [
      "Test โดยไม่มีหลักฐานเบื้องหลัง — A/B test คือเครื่องยืนยัน hypothesis ไม่ใช่เครื่องผลิตไอเดีย",
      "เปลี่ยนหลายอย่างใน variant เดียว — ผลตีความไม่ได้",
      "Peek ทุกวันแล้วหยุดตอนเขียว — false positive เกือบการันตี",
      "ไม่ดู guardrail — ฉลอง signup ขึ้นโดยไม่เห็นว่า activation พัง",
      "รัน test เล็กจิ๋วบน traffic น้อย — เสีย 2 เดือนกับผลที่ไม่มีทาง significant",
    ],
    template: `A/B TEST SPEC (sign-off ก่อนรัน)
HYPOTHESIS: เพราะ [หลักฐาน: ___] ถ้าเรา [___] แล้ว [metric: ___]
  จะ [ขึ้น/ลง ___%] เพราะ [กลไก: ___]
VARIANT: [เปลี่ยนอะไร — กลไกเดียว]
POWER: traffic ___/เดือน base ___% → MDE ___% ที่ ___ สัปดาห์
GUARDRAILS: ___ ห้ามแย่ลงเกิน ___%
STOP RULE: รันถึง [วันที่/n=___] ห้าม peek-stop
DECISION TREE: ชนะ→___ / แพ้→___ / เสมอ→___
ผู้ sign-off: ___`,
    prompt: `You are an experimentation specialist. Test idea: [CHANGE + THE EVIDENCE BEHIND IT]. Metric: [PRIMARY]. Traffic: [SESSIONS/MONTH]. Base rate: [X%]. Tool: [PLATFORM].

Design the test:
1. Hypothesis in full form: because [evidence] / if we [change] / then [metric] moves [direction] / because [mechanism] — if the evidence slot is weak, say so and suggest cheaper validation first
2. Variant: minimal change testing ONE mechanism — flag bundling in my idea
3. Power: MDE at 80% power / 95% significance with my numbers + run time; verdict on feasibility — if underpowered, recommend bolder variant or qualitative route
4. Guardrails: downstream metrics that must not degrade for THIS change
5. Stop rules + peeking policy, written to pre-commit
6. Decision tree: win / lose / flat → action each, agreed before launch
Output: a one-page test spec ready for sign-off.`,
    relatedSlugs: ["ab-test-design", "conversion-review", "landing-page-review"],
    tags: ["ab-test", "experiment", "statistics"],
  },
  {
    id: "tech-offer-clarity-review",
    slug: "offer-clarity-review",
    title: "Offer Clarity Review",
    category: "Conversion",
    useCase: "ตรวจว่า 'ข้อเสนอ' ชัดไหมก่อนไปแตะ design — ขายอะไร ให้ใคร ได้อะไร ราคาเท่าไร ต่างจากเจ้าอื่นยังไง — ปัญหา conversion จำนวนมากจบที่นี่",
    difficulty: "basic",
    timeRequired: "0.5 วัน",
    participants: "ผู้ตรวจ 1 + คนนอกทีม 2-3 คน (ทดสอบความเข้าใจ)",
    inputNeeded: [
      "หน้า/copy ที่สื่อข้อเสนอ (landing, pricing, ad)",
      "คำตอบจริงจากทีม: ขายอะไร ให้ใคร แก้ปัญหาอะไร ต่างยังไง (ถ้าทีมตอบไม่ตรงกัน — เจอปัญหาแล้ว)",
    ],
    steps: [
      "ทดสอบภายในก่อน: ให้คนในทีม 3 คนเขียนคำตอบแยกกัน — ขายอะไร/ให้ใคร/ต่างยังไง — ถ้าไม่ตรงกัน offer ไม่ชัดที่ต้นทาง ไม่ใช่ที่ copy",
      "ทดสอบคนนอก: ให้อ่านหน้า 30 วินาที แล้วถามให้เล่าข้อเสนอด้วยคำตัวเอง — จดที่เพี้ยนไป",
      "ไล่ 5 องค์ประกอบบนหน้า: ขายอะไร (เห็นใน 5 วิ?) / ให้ใคร (คนตรง segment รู้ว่า 'นี่ของฉัน'?) / ได้อะไร (outcome ไม่ใช่ feature?) / ราคา-เงื่อนไข (หาเจอ?) / ทำไมต้องเจ้านี้ (ต่างที่ตรวจสอบได้?)",
      "ตรวจภาษา: ศัพท์ภายใน, slogan กว้าง ('โซลูชันครบวงจร'), claim ที่ไม่มีหลักฐาน — แทนด้วยภาษาที่ลูกค้าใช้เอง (จาก sales call/รีวิว)",
      "ตรวจความเฉพาะ: 'ช่วยประหยัดเวลา' → 'ปิดงบจาก 3 วันเหลือ 4 ชั่วโมง' — ตัวเลขเฉพาะที่กล้าพูดคือความชัด",
      "เขียน offer statement ใหม่หนึ่งย่อหน้า แล้วทดสอบซ้ำกับคนนอกชุดใหม่",
    ],
    output: "ผลทดสอบความเข้าใจ (ทีม + คนนอก) + ช่องว่าง 5 องค์ประกอบ + offer statement ใหม่ + copy หลักที่เขียนใหม่",
    decisionCriteria: [
      "ทีมเองเล่า offer ไม่ตรงกัน = หยุดแก้ copy ไปทำ alignment ก่อน",
      "คนนอกเล่าข้อเสนอเพี้ยน ≥ครึ่ง = headline/จอแรกล้มเหลว ไม่ใช่ปัญหา design",
      "Claim ที่ไม่มีหลักฐานรองรับ = ตัดหรือหาหลักฐาน — อย่าปล่อยให้ถูกจับโป๊ะ",
    ],
    exampleScenario:
      "Conversion ต่ำทั้ง funnel ทีมจะรื้อ design — review พบทีม 3 คนตอบ 'เราขายอะไร' มา 3 แบบ และคนนอก 3 คนอ่านหน้าแล้วเข้าใจว่าเป็น product คนละชนิดกัน — รื้อ offer statement ก่อน (ไม่แตะ design เลย) headline ใหม่จากภาษาที่ลูกค้าจริงใช้ใน sales call — conversion ขึ้นก่อนเริ่มโปรเจกต์ redesign เสียอีก",
    commonMistakes: [
      "แก้ design/สี/layout ทั้งที่ปัญหาคือไม่มีใครเข้าใจว่าขายอะไร",
      "ใช้ภาษาภายในบริษัท ('แพลตฟอร์ม optimization ครบวงจร') ที่ลูกค้าไม่เคยพูด",
      "กลัวเฉพาะเจาะจงเพราะ 'จะแคบไป' — ข้อเสนอที่พูดกับทุกคนคือข้อเสนอที่ไม่มีใครรู้สึกว่าพูดกับตน",
      "ทดสอบกับคนในทีม/เพื่อนที่รู้บริบท — ต้องเป็นคนนอกจริง",
    ],
    template: `OFFER CLARITY REVIEW
ทดสอบทีม (เขียนแยก 3 คน): ขายอะไร/ให้ใคร/ต่างยังไง → ตรงกัน? [Y/N]
ทดสอบคนนอก (อ่าน 30 วิ เล่าด้วยคำตัวเอง): [จดคำเล่า × เพี้ยนตรงไหน]
5 องค์ประกอบบนหน้า:
  ขายอะไร: เห็นใน 5 วิ? ___ | ให้ใคร: segment รู้ว่าของฉัน? ___
  ได้อะไร: outcome (ไม่ใช่ feature)? ___ | ราคา: หาเจอ? ___
  ทำไมเจ้านี้: ต่างที่ตรวจได้? ___
ภาษา: ศัพท์ใน [ลิสต์] / slogan กว้าง [ลิสต์] / claim ไร้หลักฐาน [ลิสต์]
OFFER STATEMENT ใหม่: ____________ (ทดสอบซ้ำ: ___)`,
    prompt: `You are a positioning + conversion copy specialist reviewing offer clarity. Page/copy: [PASTE/SCREENSHOT]. The team's own answers (collected separately): [WHAT WE SELL / FOR WHOM / WHY US — per person]. Outsider retellings: [WHAT 30-SECOND READERS SAID, IF TESTED].

Review:
1. Alignment check: do the team's answers agree? If not, that's the root finding — name the divergence
2. Five-element audit on the page: what's sold (5-sec visible?) / for whom (does the segment self-identify?) / outcome (or feature-speak?) / price findable / differentiation (verifiable?)
3. Language audit: internal jargon, empty slogans, unevidenced claims — quote each + replace with customer language [PASTE SALES-CALL/REVIEW PHRASES IF AVAILABLE]
4. Specificity pass: every vague benefit → the concrete number/outcome it's hiding
5. Rewrite: one-paragraph offer statement + new headline/subhead (Thai, key terms English)
Order findings by how badly they distort an outsider's understanding.`,
    relatedSlugs: ["offer-clarity", "landing-page-review", "ux-writing", "jobs-to-be-done"],
    tags: ["offer", "positioning", "copy"],
  },
];
