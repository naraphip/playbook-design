import type { UXTerm } from "@/types/playbook";

export const CONVERSION_TERMS: UXTerm[] = [
  {
    id: "landing-page-review",
    slug: "landing-page-review",
    term: "Landing Page Review",
    category: "conversion",
    icon: "🛬",
    level: "intermediate",
    shortDescription: "Audit landing page ตามลำดับที่ visitor อ่านจริง: hero ตอบ 3 คำถาม → proof → objection → CTA",
    fullDefinition:
      "Landing page review ไล่ตรวจตามเส้นทางสายตาของ visitor ที่มาจาก ads/search: จอแรกต้องตอบ 3 คำถามใน 5 วินาที (ขายอะไร / ฉันได้อะไร / ทำอะไรต่อ), ลำดับ section ต้องไล่ตาม objection ของคนแปลกหน้า (มันช่วยจริงไหม → ใครใช้แล้วบ้าง → ราคา/เงื่อนไข → เริ่มยังไง), message ต้อง match กับ ads ที่พามา (message match) และทุก section ต้องมีเหตุผลว่าทำไมอยู่ตรงนั้น",
    whyItMatters:
      "Landing page คือจุดที่เงินค่า ads แปลงเป็นรายได้หรือระเหย — หน้าที่ value prop ไม่ชัดใน 5 วินาทีเผา budget ทุกคลิก และ message ที่ไม่ match กับ ads (โฆษณาพูดอย่าง หน้า landing พูดอีกอย่าง) ทำให้ bounce ทันทีแม้ product จะตรงความต้องการก็ตาม",
    whenToUse: [
      "ก่อนเปิดแคมเปญ ads ทุกครั้ง — review ให้จบก่อนจ่ายค่าคลิกแรก",
      "เมื่อ conversion ของ landing ต่ำกว่า 1-2% ใน B2C หรือต่ำกว่า benchmark อุตสาหกรรม",
      "เมื่อ bounce rate สูงแต่ ads CTR ดี — สัญญาณ message mismatch",
    ],
    whenNotToUse: [
      "Homepage ของ product ที่มี user ประจำ — เกณฑ์ต่างจาก landing สำหรับคนแปลกหน้า",
      "อย่า review โดยไม่รู้ traffic source — หน้าเดียวกันอาจถูกสำหรับ search แต่ผิดสำหรับ social ads",
    ],
    howToApply: [
      "เริ่มจาก ads/keyword ที่พาคนมา: headline ของ landing ต้องสานต่อ message นั้น ไม่ใช่เริ่มเรื่องใหม่",
      "ตรวจจอแรก (375px ด้วย): ขายอะไร-ได้อะไร-ทำอะไรต่อ ครบไหม โดยไม่ต้อง scroll",
      "ไล่ section ตาม objection: หลัง hero ต้องตอบ 'จริงไหม' (proof) ก่อนถึง 'ราคา' และ 'เริ่มยังไง'",
      "นับ CTA: primary เดียวซ้ำได้หลายจุด — แต่ห้ามมี action แข่ง (สมัคร vs โหลด vs จองเดโม่ ในหน้าเดียว)",
      "ตัด section ที่ไม่ตอบ objection ใคร (about us ยาวๆ, ฟีเจอร์ที่คนยังไม่แคร์)",
      "เทียบ findings กับ scroll map/funnel ถ้ามี — section ที่คนไปไม่ถึงคือ section ที่ยังไม่มีตัวตน",
    ],
    checklist: [
      "Headline สานต่อ message จาก ads ที่พามา",
      "จอแรกตอบครบ: ขายอะไร / ได้อะไร / ทำอะไรต่อ",
      "Proof (ตัวเลข, ลูกค้า, รีวิว) มาก่อนการขอ commitment",
      "Primary action เดียวทั้งหน้า (ซ้ำได้ แต่ไม่มีคู่แข่ง)",
      "ราคา/เงื่อนไขหลักหาเจอโดยไม่ต้องออกจากหน้า",
      "Mobile: CTA แรกอยู่ในจอแรกหรือ sticky",
    ],
    deliverables: ["Section-by-section review: หน้าที่ของ section × ตัดสิน keep/fix/cut", "Hypothesis list สำหรับ A/B test เรียงตาม impact"],
    goodExample:
      "Ads พูด 'ลดเวลาทำบัญชีเหลือ 1 ชม./สัปดาห์' → landing เปิดด้วย headline เดียวกัน + ภาพ dashboard จริง + ปุ่ม 'ลองฟรี 14 วัน' จากนั้น proof ('ร้านค้า 3,200 รายใช้อยู่') ก่อนค่อยลงรายละเอียดราคา — ทุก section ตอบ objection ถัดไปพอดี",
    badExample:
      "Ads ขาย 'โปรแกรมบัญชีสำหรับร้านอาหาร' แต่ landing เปิดด้วย 'Empowering Business Transformation' + ภาพ stock คนจับมือ — visitor หาคำว่า 'ร้านอาหาร' ไม่เจอสักคำในจอแรก กด back ภายใน 4 วินาที พร้อมค่าคลิก 35 บาทที่จ่ายไปแล้ว",
    commonMistakes: [
      "Headline เป็นสโลแกนกว้างๆ แทนการบอกว่าขายอะไรให้ใคร",
      "ลำดับ section ตามที่ทีมอยากเล่า (วิสัยทัศน์ก่อน) ไม่ใช่ตาม objection ของคนซื้อ",
      "CTA หลายชนิดแข่งกันเอง (ทดลองฟรี + จองเดโม่ + โหลด whitepaper)",
      "Review เฉพาะ desktop ทั้งที่ traffic ads 80% เป็นมือถือ",
    ],
    relatedSlugs: ["offer-clarity", "cta-hierarchy", "trust-signals", "conversion-review", "five-second-test"],
    tags: ["landing-page", "ads", "message-match"],
    prompts: [
      `You are a landing page CRO specialist. Review this landing page for a visitor coming from [TRAFFIC SOURCE + AD MESSAGE].

Walk the page top-to-bottom as that stranger:
1. FIRST VIEWPORT (check 375px too): does it answer — what is sold / what do I get / what do I do next? Does the headline continue the ad's message? Quote and judge.
2. SECTION ORDER: map each section to the objection it answers (is it real? who uses it? what does it cost? how do I start?). Flag sections answering nothing and objections left unanswered.
3. CTA: count actions; flag competing CTAs; judge label (outcome vs generic).
4. PROOF: is evidence specific and placed before commitment asks?

Output: section table (section / objection answered / verdict keep-fix-cut / fix) + rewritten hero copy (headline, subhead, CTA) + top 3 A/B hypotheses.`,
    ],
    visualDemo: "audit-report",
    demoData: {
      title: "Landing Review",
      findings: [
        { severity: "critical", issue: "Headline ไม่ match ads ('Empowering...' vs 'บัญชีร้านอาหาร')", fix: "ใช้ message เดียวกับ ad group" },
        { severity: "high", issue: "Proof อยู่ใต้ราคา — คนยังไม่เชื่อก็เจอตัวเลขแล้ว", fix: "ย้าย social proof ขึ้นก่อน pricing" },
        { severity: "medium", issue: "CTA 3 ชนิดแข่งกัน (trial/demo/whitepaper)", fix: "เหลือ trial เดียว, demo เป็น text link" },
      ],
    },
  },
  {
    id: "cta-hierarchy",
    slug: "cta-hierarchy",
    term: "CTA Hierarchy",
    category: "conversion",
    icon: "🎯",
    level: "basic",
    shortDescription: "ลำดับชั้นของ action ในหนึ่ง view: primary เดียวที่เด่นสุด, secondary ถอยลงมา, ที่เหลือเป็น link",
    fullDefinition:
      "CTA hierarchy คือกติกาว่าในหนึ่ง decision zone (viewport/section/dialog) มี action หลักได้เดียว — ปุ่ม filled สีเด่น label บอก outcome — secondary เป็น outline/ghost และ action อื่นเป็น text link — เพราะเมื่อทุกปุ่มตะโกนเท่ากัน user ต้องอ่านทุกปุ่มเพื่อตัดสินใจ (เพิ่ม load) หรือแย่กว่า: กดผิดปุ่มใน flow สำคัญ — hierarchy ที่ดีทำให้ 'ทางที่ควรไป' มองเห็นได้โดยไม่ต้องอ่าน",
    whyItMatters:
      "ปุ่ม primary สองปุ่มเคียงกันคือการบังคับ user ตัดสินใจเพิ่มหนึ่งครั้งทุกหน้าจอ — และในจุดเงิน ('ยืนยันการจ่าย' กับ 'บันทึกร่าง' เด่นเท่ากัน) การกดผิดมีต้นทุนจริง — ขณะเดียวกัน CTA ที่จมหายไปกับพื้น (ghost ทั้งหน้า) ทำให้คนพร้อมซื้อหาปุ่มไม่เจอ ทั้งสองขั้วคือ conversion ที่หายไป",
    whenToUse: [
      "ทุก viewport/section/dialog — ถามเสมอว่า 'action ที่อยากให้กดที่สุดคืออะไร'",
      "ตอน review: นับปุ่ม filled ต่อ view เกิน 1 = ต้องอธิบายเหตุผลได้",
      "Dialog ยืนยัน: action อันตราย (ลบ) ไม่ควรเป็นปุ่มเด่นที่นิ้วจะกดอัตโนมัติ",
    ],
    whenNotToUse: [
      "List ที่ทุก item มี action เดียวกัน (ปุ่ม 'ดูรายละเอียด' 20 ใบ) — นั่นไม่ใช่ hierarchy ชนกัน ใช้ระดับ secondary ทั้งชุดได้",
      "อย่า demote action ที่ user ต้องการบ่อยสุดเพียงเพราะ business อยากดันอีกอัน — hierarchy ที่สวน intent คือ dark pattern อ่อนๆ",
    ],
    howToApply: [
      "ต่อ view ระบุ primary action เดียวจาก user intent + business goal",
      "ใช้ 3 ระดับ: filled (primary) / outline (secondary) / text link (ที่เหลือ) — ห้ามมี filled สองสีแข่งกัน",
      "Label เป็น กริยา+outcome: 'เริ่มทดลองฟรี', 'จ่าย ฿590' ไม่ใช่ 'Submit', 'OK'",
      "Destructive ใน dialog: ปุ่มยืนยันใช้สี danger และไม่อยู่ตำแหน่ง default focus",
      "ใน flow หลายขั้น: ปุ่มไปต่อเด่น ปุ่มย้อนกลับเป็น ghost/link เสมอ",
    ],
    checklist: [
      "หนึ่ง view มี filled button เดียว (หรืออธิบายข้อยกเว้นได้)",
      "Label ทุกปุ่มบอก outcome ไม่ใช่ generic",
      "Secondary/tertiary ลดหลั่นชัด (outline → link)",
      "Destructive action ไม่ใช่ปุ่มที่เด่น/focus default ใน dialog",
      "Primary บน mobile อยู่ในจอแรกหรือ sticky bottom",
      "ไม่มี hierarchy ที่สวน intent ของ user เพื่อดัน business agenda",
    ],
    deliverables: ["CTA map ต่อหน้า: action × ระดับ × label", "Button hierarchy rule ใน design system (3 ระดับ + ตัวอย่าง)"],
    goodExample:
      "หน้า pricing: 'เริ่มทดลองฟรี' เป็น filled เดียวบนการ์ดแผนแนะนำ, แผนอื่นใช้ outline, 'คุยกับฝ่ายขาย' เป็น text link — สายตาตกที่ทางหลักทันที แต่ทางเลือกอื่นยังครบ",
    badExample:
      "Dialog ลบโปรเจกต์ที่ปุ่ม 'ลบ' เป็น filled สีแดงสด อยู่ขวา (ตำแหน่งที่นิ้วเคยชิน) ส่วน 'ยกเลิก' เป็น ghost จางๆ — ระบบออกแบบให้กดลบง่ายกว่ายกเลิก แล้วทีมก็งงว่าทำไม ticket 'กู้คืนโปรเจกต์' เยอะ",
    commonMistakes: [
      "ทุก stakeholder อยากให้ปุ่มตัวเองเด่น สุดท้าย filled 4 ปุ่มเรียงกัน",
      "ใช้สี primary กับปุ่มที่ไม่ใช่ primary action เพราะ 'ให้สวยเข้าชุด'",
      "ปุ่มย้อนกลับ/ยกเลิกเด่นเท่าปุ่มไปต่อ ใน checkout",
      "Label generic (Submit/OK/ตกลง) ที่บอกอะไรไม่ได้ว่ากดแล้วเกิดอะไร",
    ],
    relatedSlugs: ["landing-page-review", "ux-writing", "color-system", "interaction-design", "checkout-ux"],
    tags: ["cta", "buttons", "hierarchy"],
    prompts: [
      `You are a UI reviewer focused on CTA hierarchy. For each screen I provide:

1. List every actionable element (buttons, links) with its current visual weight (filled/outline/ghost/link) and label
2. Identify the single primary action this view should drive (state your reasoning from user intent + business goal)
3. Flag violations: multiple filled buttons, competing colors, destructive actions with default prominence, generic labels
4. Propose the corrected hierarchy: each action → level (primary/secondary/tertiary) + rewritten outcome-driven label
5. Mobile check: is the primary action in the first viewport or sticky?

Output: per-screen table (element / current / should-be / new label) + the design-system rule to prevent recurrence.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "CTA Hierarchy",
      before: { label: "ทุกปุ่มตะโกน", points: ["Filled 4 ปุ่มเรียงกัน", "'Submit' / 'OK' ไม่บอก outcome", "ปุ่มลบเด่นกว่ายกเลิกใน dialog"] },
      after: { label: "ทางหลักเห็นโดยไม่ต้องอ่าน", points: ["Filled เดียว: 'เริ่มทดลองฟรี'", "Secondary = outline, ที่เหลือ = link", "Destructive ไม่ใช่ default focus"] },
    },
  },
  {
    id: "pricing-page-ux",
    slug: "pricing-page-ux",
    term: "Pricing Page UX",
    category: "conversion",
    icon: "💰",
    level: "advanced",
    shortDescription: "ออกแบบหน้าราคาให้เลือกได้ใน 1 นาที: tier ต่างกันชัด, แผนแนะนำเด่น, คำถามเรื่องเงินถูกตอบครบ",
    fullDefinition:
      "Pricing page ที่ดีลดงานเปรียบเทียบ: 3-4 tiers ที่ต่างกันด้วยเกณฑ์เดียวที่เข้าใจง่าย (ขนาดทีม/ปริมาณ/ฟีเจอร์ขั้น), highlight แผนที่เหมาะกับคนส่วนใหญ่, ตาราง feature ที่เทียบเฉพาะตัวตัดสินใจ (ไม่ใช่ 60 แถวเท่ากันหมด), ตอบคำถามเงินครบ ณ ที่นั่น: ภาษี? ยกเลิกได้ไหม? เปลี่ยนแผนกลางทางคิดยังไง? — และ CTA ต่อ tier บอกขั้นต่อไปตรงๆ (ทดลองฟรี vs คุยกับฝ่ายขาย)",
    whyItMatters:
      "หน้า pricing คือหน้าที่ intent สูงสุดในเว็บ — คนที่มาถึงคือคนพร้อมจ่าย ความสับสนที่นี่แพงที่สุด: tier ที่ต่างกันไม่ชัดทำให้เลื่อนการตัดสินใจ ('ไว้ค่อยกลับมาดู' = หายไปเลย), ค่าใช้จ่ายซ่อน (billed annually ตัวเล็กๆ) ทำลาย trust ตอนจ่ายจริง และคำถามเรื่องเงินที่ไม่ถูกตอบสร้าง sales call ที่ไม่จำเป็นหรือ churn ที่ไม่ต้องเกิด",
    whenToUse: [
      "ออกแบบ/รื้อหน้า pricing — และทุกครั้งที่เพิ่ม tier หรือเปลี่ยนโครงราคา",
      "เมื่อ analytics เห็นคนเข้า pricing สูงแต่ conversion ต่ำ หรือเด้งไปมาระหว่าง pricing กับหน้าอื่น",
      "เมื่อ sales/support ได้คำถามเรื่องราคาซ้ำๆ ที่หน้าเว็บควรตอบเองได้",
    ],
    whenNotToUse: [
      "Enterprise ที่ราคา custom จริงๆ ทุกดีล — หน้าควรขายการคุย ไม่ใช่แสร้งโชว์ราคา",
      "อย่า redesign หน้า pricing เพื่อแก้ปัญหาที่จริงๆ คือ 'ราคาแพงกว่าคุณค่าที่สื่อ' — นั่นคือปัญหา offer ไม่ใช่ UX",
    ],
    howToApply: [
      "จำกัด 3-4 tiers ต่างกันด้วยแกนเดียว (ทีม 1 คน / สูงสุด 10 / unlimited) ตั้งชื่อตามคนใช้ ไม่ใช่ Silver/Gold",
      "Highlight แผนแนะนำด้วย anchor จริง (เหมาะกับใคร) ไม่ใช่แค่ป้าย 'Popular' ลอยๆ",
      "ตารางเทียบ: เอาเฉพาะ feature ตัดสินใจ 8-12 แถว, ที่เหลือพับใน 'ดูทั้งหมด'",
      "ราคาแสดงตรงเงื่อนไขจริง: ถ้า toggle รายปี ต้องเห็นยอดที่จะจ่ายจริงทั้งก้อน ไม่ใช่ราคาหารเดือนตัวใหญ่",
      "FAQ เรื่องเงินใต้ตาราง: ยกเลิก/เปลี่ยนแผน/ภาษี/วิธีจ่าย — ดึงจากคำถามจริงของ sales",
      "CTA ต่อ tier ตรง intent: tier เล็ก 'เริ่มฟรี', enterprise 'คุยกับทีมขาย'",
    ],
    checklist: [
      "Tiers ≤4 และต่างกันด้วยเกณฑ์เดียวที่อธิบายได้ในประโยคเดียว",
      "แผนแนะนำมีเหตุผลกำกับ ('เหมาะกับทีม 2-10 คน')",
      "ยอดจ่ายจริง (รวม billed annually) เห็นชัดไม่ต้องคำนวณเอง",
      "ตารางเทียบมีเฉพาะแถวตัดสินใจ ที่เหลือพับ",
      "FAQ ตอบ: ยกเลิก, เปลี่ยนแผน, ภาษี, ใบกำกับ",
      "Mobile: เทียบแผนได้จริง (card สลับ/sticky header) ไม่ใช่ตาราง 4 คอลัมน์บีบ",
    ],
    deliverables: ["Pricing page spec: tiers × เกณฑ์ × CTA × FAQ", "Comparison table (แถวตัดสินใจ vs แถวพับ) พร้อมเหตุผล"],
    goodExample:
      "Pricing 3 แผนตามขนาดร้าน: 'เริ่มขาย' (คนเดียว), 'ร้านโต' แนะนำ-เหมาะกับ 2-10 คน, 'หลายสาขา' — toggle รายปีโชว์ '฿4,788/ปี (เฉลี่ย ฿399/เดือน)' ตรงๆ, FAQ ตอบเรื่องใบกำกับภาษีที่ sales โดนถามทุกวัน — ลูกค้าตัดสินใจได้โดยไม่ต้องแชทมาถาม",
    badExample:
      "5 แผนชื่อ Starter/Silver/Gold/Platinum/Ultimate ที่ต่างกันแบบสุ่มในตาราง 58 แถว, ราคาตัวใหญ่ '฿299/เดือน' พร้อม 'billed annually' ตัวจิ๋ว — ลูกค้าเพิ่งรู้ตอนหน้าจ่ายว่าต้องจ่าย ฿3,588 ก้อนเดียว ทิ้งตะกร้าพร้อมความรู้สึกโดนหลอก",
    commonMistakes: [
      "Tier เยอะและต่างกันหลายแกนพร้อมกันจนเทียบไม่ได้",
      "ซ่อนเงื่อนไข billed annually — ได้ conversion หน้านี้ เสีย trust ตอนจ่าย",
      "ตารางเทียบทุก feature เท่ากันหมด 60 แถว — ของตัดสินใจจมหาย",
      "ป้าย 'Most Popular' โดยไม่มีบริบทว่าเหมาะกับใคร",
      "ลืม mobile จนตารางเทียบใช้ไม่ได้บนจอเล็ก",
    ],
    relatedSlugs: ["offer-clarity", "trust-signals", "cta-hierarchy", "checkout-ux", "trust-credibility-review"],
    tags: ["pricing", "saas", "tiers", "comparison"],
    prompts: [
      `You are a pricing page UX specialist. Review/redesign this pricing page.

Input: [tiers + prices + current page or screenshot + top money questions sales/support receive]

Tasks:
1. Tier structure: are tiers ≤4 and differentiated on ONE understandable axis? Propose renaming/merging if not (names by user type, not metals)
2. Recommended plan: does the highlight carry a reason ("best for teams of 2-10")? Write it
3. Price honesty: flag any place the real charge differs from the displayed number (annual billing, taxes, seats) — rewrite the display
4. Comparison table: pick the 8-12 decision rows, fold the rest; justify each pick
5. Money FAQ: write answers for cancel / plan change / tax invoice / payment methods from the real questions provided
6. CTA per tier matched to intent (self-serve trial vs talk to sales) + mobile comparison pattern

Output: full page spec section-by-section with copy.`,
    ],
    visualDemo: "checklist",
  },
  {
    id: "checkout-ux",
    slug: "checkout-ux",
    term: "Checkout UX",
    category: "conversion",
    icon: "🛒",
    level: "advanced",
    shortDescription: "ออกแบบขั้นจ่ายเงินให้เหลือเฉพาะที่จำเป็น: guest ได้, ค่าใช้จ่ายไม่มี surprise, error ไม่ทำของหาย",
    fullDefinition:
      "Checkout ที่ดีมีหลักตายตัว: ให้จ่ายแบบ guest ได้ (บังคับสมัครคือ drop อันดับต้น), แสดงยอดรวมสุทธิ+ค่าส่งก่อนขอข้อมูลจ่ายเงิน (surprise cost = สาเหตุทิ้งตะกร้าอันดับ 1), ขอข้อมูลน้อยสุดที่ทำ transaction สำเร็จ, วิธีจ่ายตรงพฤติกรรมตลาด (พร้อมเพย์/wallet ในไทย), progress ชัดว่าเหลือกี่ขั้น, และ error การจ่ายที่บอกสถานะเงิน + เก็บข้อมูลครบ — วัดด้วย funnel ราย step เสมอ",
    whyItMatters:
      "Cart abandonment เฉลี่ย ~70% และส่วนใหญ่เกิดจากสิ่งที่แก้ได้: ค่าส่งโผล่ตอนท้าย, บังคับสมัครสมาชิก, ฟอร์มยาว, ไม่มีวิธีจ่ายที่ใช้ประจำ — ทุก 1% ที่กู้คืนได้ที่ขั้นนี้คือรายได้ตรงๆ เพราะคนที่มาถึง checkout คือคนที่ตัดสินใจซื้อแล้ว เหลือแค่อย่าทำให้เขาเปลี่ยนใจ",
    whenToUse: [
      "ทุก e-commerce/subscription ที่มีขั้นจ่ายเงิน — audit เป็นรอบประจำ",
      "เมื่อ funnel ชี้ drop ผิดปกติที่ขั้นใดขั้นหนึ่งของ checkout",
      "ก่อน high season — checkout พังช่วงแคมเปญคือเงินหายเป็นชั่วโมง",
    ],
    whenNotToUse: [
      "อย่าลดขั้นตอนจนตัดข้อมูลที่กฎหมาย/ป้องกัน fraud ต้องการ — แต่ต้องอธิบาย user ว่าทำไมขอ",
      "B2B ที่จ่ายผ่าน PO/invoice — โครง checkout consumer ใช้ไม่ได้ตรงๆ",
    ],
    howToApply: [
      "เปิด guest checkout — ขอสร้างบัญชีหลังจ่ายสำเร็จ (ตอนนั้นเขายินดีแล้ว)",
      "โชว์ยอดสุทธิ + ค่าส่ง + ภาษี ตั้งแต่หน้า cart ก่อนเริ่มกรอกอะไร",
      "ฟอร์ม: autocomplete ครบ, ที่อยู่ใช้ตัวช่วยค้นหา, inputmode ถูกชนิด, บันทึกค่าทุก step (refresh ไม่หาย)",
      "วิธีจ่ายเรียงตามที่ตลาดใช้จริง (พร้อมเพย์/บัตร/COD/wallet) ไม่ใช่ตามค่า fee ที่บริษัทชอบ",
      "Error การจ่าย: บอกสถานะเงินชัด, ข้อมูลครบ, สลับวิธีจ่ายได้ตรงนั้น",
      "ติด event ทุก step ของ funnel — ไม่งั้น audit ครั้งหน้าตาบอด",
    ],
    checklist: [
      "Guest checkout ได้ — สมัครสมาชิกเป็น option หลังจ่าย",
      "ยอดจ่ายจริงทั้งหมดเห็นก่อนกรอกข้อมูลจ่ายเงิน",
      "จำนวน field น้อยสุดที่ transaction สำเร็จ (นับแล้ว justify ทุกช่อง)",
      "วิธีจ่ายหลักของตลาดครบ และจำวิธีล่าสุดของ user เดิม",
      "Refresh/หลุด session แล้วข้อมูลและตะกร้ายังอยู่",
      "Error จ่ายเงินบอกสถานะเงิน + เปลี่ยนวิธีจ่ายได้ทันที",
      "Funnel event ครบทุก step",
    ],
    deliverables: ["Checkout audit: funnel ราย step × friction × fix", "Field justification table + error state spec"],
    goodExample:
      "ร้านที่ให้จ่ายแบบ guest ด้วยพร้อมเพย์ใน 2 ขั้น: ยืนยันที่อยู่ (autocomplete) → จ่าย โดยยอดรวมส่งเห็นตั้งแต่ cart — เพิ่ม mobile conversion 23% หลังตัดขั้น 'สร้างบัญชี' ที่เคยเป็นจุด drop 40%",
    badExample:
      "Checkout 5 ขั้นที่บังคับสมัคร+ยืนยัน OTP ก่อน, ค่าส่ง ฿120 โผล่ขั้นสุดท้าย, บัตรถูกปฏิเสธแล้วฟอร์มล้างทุกช่องกลับไปขั้น 1 — ลูกค้าที่ตั้งใจซื้อต้องพยายาม 3 รอบถึงจะจ่ายสำเร็จ ส่วนใหญ่ไม่พยายามถึงรอบสอง",
    commonMistakes: [
      "บังคับสร้างบัญชีก่อนจ่าย",
      "ค่าส่ง/ค่าธรรมเนียมโผล่หลังกรอกข้อมูลเสร็จ",
      "ฟอร์มยาวเพราะขอข้อมูล marketing ('รู้จักเราจากไหน') กลางทางจ่ายเงิน",
      "ไม่มีวิธีจ่ายที่ตลาดใช้จริง (ไม่มีพร้อมเพย์ในไทย)",
      "Error แล้วข้อมูลหาย/ไม่บอกว่าเงินถูกตัดไหม",
    ],
    relatedSlugs: ["form-conversion", "trust-signals", "error-state-review", "friction-reduction", "mobile-first-review"],
    tags: ["checkout", "ecommerce", "payment", "cart-abandonment"],
    prompts: [
      `You are a checkout optimization specialist. Audit this checkout flow.

Input: [steps + screenshots + funnel data per step + market (e.g., Thailand)]

Tasks:
1. Map the funnel: drop-off per step — identify the worst leak
2. Guest path: is account creation forced? Where should it move?
3. Cost transparency: at which step does the user first see the FULL amount (shipping, tax, fees)? Flag every later surprise
4. Field audit: justify every field for completing THIS transaction; mark removable/deferable
5. Payment methods vs market behavior: what's missing for [MARKET]?
6. Failure paths: card declined, timeout, back button — is money status stated? data preserved? alternate method offered inline?
7. Mobile: keyboard types, autocomplete, sticky order summary

Output: step-by-step findings table + prioritized fixes with expected funnel impact + error copy rewrite.`,
    ],
    visualDemo: "user-flow",
    demoData: {
      title: "Checkout Funnel",
      steps: [
        { name: "Cart", detail: "ยอดรวม+ค่าส่งเห็นครบตั้งแต่ตรงนี้", risk: "Drop 12%" },
        { name: "ข้อมูลจัดส่ง", detail: "Guest ได้ + address autocomplete", risk: "Drop 18% — ฟอร์มยาวคือผู้ต้องสงสัย" },
        { name: "วิธีจ่ายเงิน", detail: "พร้อมเพย์/บัตร/COD เรียงตามการใช้จริง", risk: "Drop 9%" },
        { name: "ยืนยัน", detail: "ไม่มีตัวเลขใหม่โผล่ที่นี่", risk: "Surprise cost = ทิ้งตะกร้าทันที" },
        { name: "Success", detail: "เลขออเดอร์ + ติดตาม + สร้างบัญชี (option)" },
      ],
    },
  },
  {
    id: "onboarding-flow",
    slug: "onboarding-flow",
    term: "Onboarding Flow",
    category: "conversion",
    icon: "🚀",
    level: "intermediate",
    shortDescription: "พา user ใหม่ไปถึง 'ครั้งแรกที่ได้คุณค่าจริง' (aha moment) ให้เร็วสุด — ทุกอย่างที่ขวางทางนั้นคือ friction",
    fullDefinition:
      "Onboarding ที่ดีเริ่มจากนิยาม activation event — การกระทำแรกที่ user ได้คุณค่าจริง (ส่งใบแจ้งหนี้ใบแรก, ได้ report แรก) แล้วออกแบบเส้นทางสั้นสุดไปถึงจุดนั้น: ขอข้อมูลเฉพาะที่จำเป็นต่อ first value (ที่เหลือถามทีหลังตอน context ถึง), ใช้ smart defaults/sample data แทนบังคับ setup, แสดง progress ถ้ามีหลายขั้น และไม่ใช่ feature tour 8 หน้าที่คนกด skip — วัดด้วย activation rate และ time-to-value",
    whyItMatters:
      "User ใหม่ส่วนใหญ่หายไปก่อนเคยได้คุณค่าแรก — ทุกคำถาม/ขั้นตอนก่อน aha moment คือกำแพงที่กรองคนออก และคนที่ผ่าน onboarding โดยยังไม่เจอคุณค่าจะกลับมาน้อยมาก — D7 retention ถูกตัดสินที่ session แรกนี่เอง ไม่ใช่ที่ feature ที่จะทำเดือนหน้า",
    whenToUse: [
      "หลังนิยาม activation metric ได้ — ออกแบบ onboarding คือออกแบบเส้นทางสู่ metric นั้น",
      "เมื่อ signup เยอะแต่ D1/D7 retention ต่ำ — ปัญหาคลาสสิกของ onboarding",
      "ทุกครั้งที่เพิ่มคำถาม/ขั้นตอนใน onboarding — ต้อง justify ว่าจำเป็นต่อ first value",
    ],
    whenNotToUse: [
      "อย่าใช้ product tour ทดแทน UI ที่อธิบายตัวเองไม่ได้ — ถ้าต้องสอน 8 หน้า ปัญหาอยู่ที่ design ไม่ใช่ onboarding",
      "Power tool ที่ user ตั้งใจมาเรียน (IDE, เครื่องมือเทรด) — interactive tutorial เหมาะกว่า minimal onboarding",
    ],
    howToApply: [
      "นิยาม activation event จาก data: การกระทำไหนที่คนทำแล้ว retain ต่างจากคนไม่ทำชัดๆ",
      "ไล่ทุกขั้นจาก signup → activation: ขั้นไหนตัด/เลื่อน/ทำแทนได้ (defaults, sample data, import)",
      "ขอข้อมูลแบบ just-in-time: ถามตอนที่คำตอบให้ประโยชน์ทันที ไม่ใช่กองหน้าแรก",
      "ทำ checklist เริ่มต้น 3-5 ข้อที่จบได้จริงใน session แรก (อย่าใส่ 12 ข้อ)",
      "Empty state ทุกหน้าช่วงแรกต้องพาไปสู่ activation ไม่ใช่ 'No data'",
      "วัด funnel: signup → แต่ละขั้น → activation → D7 แล้ว iterate จุด drop จริง",
    ],
    checklist: [
      "Activation event นิยามแล้วและวัดอยู่จริง",
      "ทุกขั้นก่อน activation ถูก justify (ตัด/เลื่อนไม่ได้เพราะอะไร)",
      "มี sample data หรือ import ให้เห็นคุณค่าโดยไม่ต้องสร้างเองจากศูนย์",
      "คำถาม preference ถูกเลื่อนไปถามตอนใช้จริง",
      "Progress ชัดถ้ามีหลายขั้น และ skip ได้ทุกอย่างที่ไม่ critical",
      "Time-to-value วัดเป็นนาที และมี target",
    ],
    deliverables: ["Onboarding funnel map: ขั้น × drop × verdict", "Activation definition + dashboard ที่ track จริง"],
    goodExample:
      "เครื่องมือทำใบแจ้งหนี้: หลัง signup ถามแค่ชื่อร้าน (1 คำถาม) แล้วเปิดฟอร์มสร้างใบแรกพร้อมข้อมูลตัวอย่าง prefill — user ส่งใบแรกได้ใน 3 นาที ที่เหลือ (โลโก้, เลขภาษี, ทีม) ระบบถามทีละอย่างตอนเกี่ยวข้อง — activation 58%",
    badExample:
      "Signup แล้วเจอ: แบบสอบถาม 7 ข้อ ('คุณรู้จักเราจากไหน'), บังคับเชิญทีม, tour 8 หน้า, แล้วถึงปล่อยลง dashboard ว่างเปล่าที่เขียน 'No data' — activation 11% และทีมสรุปว่า 'ตลาดไม่พร้อม'",
    commonMistakes: [
      "เก็บข้อมูล marketing/segment ก่อนให้คุณค่า (ลำดับกลับด้าน)",
      "Feature tour แทนการให้ลงมือทำของจริง",
      "Checklist เริ่มต้นยาวจนดูเป็นการบ้าน",
      "ไม่มี sample data — user ต้อง setup ครึ่งชั่วโมงก่อนเห็นอะไรสักอย่าง",
      "ไม่เคยวัด time-to-value เลยไม่รู้ว่ากำแพงอยู่ตรงไหน",
    ],
    relatedSlugs: ["empty-state-review", "user-goal", "friction-reduction", "cognitive-load-review", "jobs-to-be-done"],
    tags: ["onboarding", "activation", "time-to-value", "retention"],
    prompts: [
      `You are an onboarding/activation specialist. Audit this onboarding flow.

Input: [flow steps + what the product does + activation definition if any + funnel data if any]

Tasks:
1. Define (or critique) the activation event: the first action where the user receives real value — be specific and measurable
2. Map every step from signup to activation; for each: does it advance activation, or serve the company? Verdict: keep / defer (when exactly?) / replace-with-default / cut
3. Identify where sample data, imports, or templates could replace manual setup
4. Redesign: the shortest realistic path to first value, with just-in-time data collection points
5. Define the measurement plan: funnel events + time-to-value target + D7 split by activated/not

Output: step audit table + redesigned flow + measurement spec.`,
    ],
    visualDemo: "user-flow",
    demoData: {
      title: "เส้นทางสู่ Aha Moment",
      steps: [
        { name: "Signup", detail: "Email/Google เท่านั้น — ไม่มีแบบสอบถาม" },
        { name: "1 คำถาม", detail: "ชื่อร้าน (ใช้ใน first value ทันที)", risk: "ทุกคำถามเพิ่ม = drop เพิ่ม" },
        { name: "สร้างของจริงชิ้นแรก", detail: "ฟอร์ม prefill ตัวอย่าง — แก้แล้วส่งได้เลย" },
        { name: "Aha: ส่งใบแรกสำเร็จ", detail: "เห็นผลจริงใน 3 นาที = activation event" },
        { name: "เก็บเพิ่มทีหลัง", detail: "โลโก้/ภาษี/ทีม ถามตอน context ถึง" },
      ],
    },
  },
  {
    id: "trust-signals",
    slug: "trust-signals",
    term: "Trust Signals",
    category: "conversion",
    icon: "✅",
    level: "basic",
    shortDescription: "หลักฐานที่ทำให้คนกล้าตัดสินใจ: social proof, ความปลอดภัย, การันตี — วาง 'ติดจุดลังเล' ไม่ใช่โปรยทั่วหน้า",
    fullDefinition:
      "Trust signals มี 4 ตระกูล: social proof (รีวิวจริง, ตัวเลขผู้ใช้, โลโก้ลูกค้า), authority (รางวัล, มาตรฐาน, สื่อที่พูดถึง), security (ช่องทางจ่ายที่คุ้นเคย, SOC2/PCI, นโยบายข้อมูล), risk reversal (ทดลองฟรี, ยกเลิกได้, การันตีคืนเงิน) — หลักการสำคัญกว่าชนิดคือ ตำแหน่ง: signal ต้องอยู่ติดจุดที่ความลังเลเกิด (ข้างฟอร์ม, ใต้ปุ่มจ่าย) และต้อง เจาะจง+ตรวจสอบได้ — proof ลอยๆ สมัยนี้คนอ่านออกและให้ผลตรงข้าม",
    whyItMatters:
      "ที่จุดตัดสินใจ user กำลังถามในใจ: โดนหลอกไหม / ติดสัญญาไหม / ของจริงไหม — ถ้าไม่มีอะไรตอบ ณ ตรงนั้น เขา 'ไว้ก่อน' ซึ่งหมายถึงหายไปเลย — ขณะที่ signal ปลอม (รีวิวไม่มีชื่อ, badge ประดิษฐ์เอง) แย่กว่าไม่มี เพราะคนที่จับได้จะไม่เชื่ออะไรในหน้านั้นอีก",
    whenToUse: [
      "ติดทุกจุด commitment: ฟอร์มสมัคร, ปุ่มจ่าย, หน้าให้ permission",
      "Brand ใหม่/สินค้าราคาสูง — ภาระพิสูจน์สูงกว่าปกติ",
      "เมื่อ funnel รั่วที่ขั้น 'กรอกข้อมูลจริง' มากกว่าขั้น browse",
    ],
    whenNotToUse: [
      "อย่าใช้ urgency ปลอม (นับถอยหลัง reset, 'อีก 2 ชิ้นสุดท้าย' ถาวร) — เป็น dark pattern ที่ทำลาย trust ถาวร",
      "อย่าโปรย badge จนรก — signal ที่ไม่ตอบความกังวลเฉพาะจุดคือ noise",
    ],
    howToApply: [
      "ระบุความกังวลต่อจุด: หน้า pricing (คุ้มไหม) ใช้รีวิวผลลัพธ์, หน้าจ่าย (ปลอดภัยไหม) ใช้ payment logos + คืนเงิน, ฟอร์ม (spam ไหม) ใช้นโยบายสั้นๆ",
      "ทำ proof ให้เจาะจง: 'ลด no-show 34% — คลินิกหมอฟัน 40 สาขา' ไม่ใช่ 'ดีมากครับ'",
      "ตัวเลขต้องจริงและ update ได้ ('ผู้ใช้ 12,400 ราย' ที่ค้างปีก็โกหก)",
      "Risk reversal เขียนใต้ CTA ตรงๆ: 'ยกเลิกได้ทุกเมื่อ ไม่ผูกสัญญา'",
      "ทดสอบ: ลองอ่านหน้าโดยสมมติว่าไม่เชื่ออะไรเลย — ทุก claim มีหลักฐานรองรับไหม",
    ],
    checklist: [
      "ทุกจุด commitment มี signal ที่ตอบความกังวลเฉพาะของจุดนั้น",
      "Social proof มีชื่อ/บริษัท/ตัวเลขที่ตรวจสอบได้",
      "Risk reversal (ยกเลิก/คืนเงิน) เขียนติด CTA ไม่ใช่ซ่อนใน ToS",
      "ไม่มี urgency/scarcity ปลอม",
      "ตัวเลข proof เป็นปัจจุบันจริง",
      "Security signal ที่หน้าจ่ายเงิน (วิธีจ่ายคุ้นเคย, มาตรฐาน)",
    ],
    deliverables: ["Trust placement map: จุดลังเล × ความกังวล × signal", "Proof inventory ที่ตรวจสอบได้ พร้อมกำหนด update"],
    goodExample:
      "ใต้ปุ่ม 'เริ่มทดลองฟรี': 'ไม่ต้องใส่บัตร · ยกเลิกได้ทุกเมื่อ' + ข้างฟอร์ม: รีวิว 1 อันจากเจ้าของร้านระบุชื่อร้านและผลลัพธ์ตัวเลข — สองบรรทัดที่ตอบความกลัวสองอย่างพอดี ดีกว่า badge 10 อันที่ footer",
    badExample:
      "หน้าแรกมี badge 'No.1 Trusted Brand' ที่ออกแบบเอง, รีวิว 5 ดาวจาก 'คุณ A***' สามอัน copy เดียวกัน, และนาฬิกานับถอยหลัง 'โปรหมดใน 00:59' ที่ refresh แล้วเริ่มใหม่ — ลูกค้าที่สังเกตเห็นอันใดอันหนึ่ง เลิกเชื่อทั้งเว็บ",
    commonMistakes: [
      "Proof กระจุกที่ homepage แต่หน้า checkout ที่ความกลัวสูงสุดกลับโล่ง",
      "รีวิวปลอม/ไม่มีตัวตน — เสี่ยงทั้ง trust และกฎหมาย",
      "Badge มาตรฐานที่ไม่ได้รับจริง",
      "ใช้ scarcity ปลอมจน repeat customer จับได้",
      "Claim ใหญ่ ('อันดับ 1') โดยไม่มีแหล่งอ้างอิง",
    ],
    relatedSlugs: ["trust-credibility-review", "checkout-ux", "landing-page-review", "offer-clarity"],
    tags: ["trust", "social-proof", "risk-reversal"],
    prompts: [
      `You are a conversion trust specialist. Map and fix trust signals in this flow.

Input: [pages/screens of the conversion path + available real proof assets (reviews, numbers, certifications)]

Tasks:
1. Identify every hesitation point (form, payment, permission) and the specific fear at each
2. Audit current signals: position (is it AT the hesitation point?), specificity (verifiable?), honesty (any fake urgency/badges? flag hard)
3. Match available proof assets to fears: which review/number/guarantee answers which fear — placement plan
4. Rewrite weak proof into specific form: [result number] — [named customer type/company]
5. Write the risk-reversal microcopy to sit under each CTA

Output: placement map (point / fear / signal / copy) + list of trust-breakers to remove immediately.`,
    ],
    visualDemo: "checklist",
  },
  {
    id: "friction-reduction",
    slug: "friction-reduction",
    term: "Friction Reduction",
    category: "conversion",
    icon: "🧈",
    level: "intermediate",
    shortDescription: "ลดแรงต้านใน flow อย่างเป็นระบบ: ตัดขั้นตอน, ทำแทน, เลื่อนออกไป, ทำให้กู้คืนได้ — โดยไม่ตัด friction ที่จำเป็น",
    fullDefinition:
      "Friction คือทุกอย่างที่ทำให้ user ต้องออกแรงเกิน task: ขั้นตอนเกิน, ฟอร์มยาว, รอโหลด, ตัดสินใจเยอะ, สลับอุปกรณ์/แอป, ความไม่มั่นใจ — เครื่องมือลดเรียงตามแรง: eliminate (ตัดทิ้ง) > automate (ระบบทำแทน) > default (เลือกให้ก่อน) > defer (เลื่อนไปทีหลัง) > simplify (ทำให้ง่ายขึ้น) — แต่ friction บางอย่างมีหน้าที่ (confirm ก่อนลบ, ตรวจ fraud) — งานคือแยก friction ขยะออกจาก friction ที่ปกป้อง user",
    whyItMatters:
      "Conversion ไม่ได้แพ้ที่การตัดสินใจใหญ่ แต่แพ้ที่แรงต้านเล็กๆ สะสม: ฟอร์มเกิน 1 ช่อง, โหลดช้า 1 วินาที, OTP 1 รอบเกิน — แต่ละอันดูจิ๋วแต่คูณกันทบเป็น drop หลายสิบเปอร์เซ็นต์ — และการลด friction ผิดจุด (ตัด confirm ออกจากการลบ) สร้างหายนะอีกแบบ",
    whenToUse: [
      "Flow ที่มี business value สูง: signup, checkout, การสร้างชิ้นงานแรก",
      "เมื่อ funnel รั่วกระจายทีละนิดทุกขั้น (ไม่มีจุดพังใหญ่จุดเดียว) — ลายเซ็นของ friction สะสม",
      "หลังเพิ่ม requirement ใหม่ (KYC, consent) — หาทางจ่าย friction ที่ถูกลง",
    ],
    whenNotToUse: [
      "อย่าตัด friction ที่ป้องกันความเสียหาย: confirm destructive action, ตรวจสอบการจ่ายเงินผิดปกติ",
      "อย่า optimize flow ที่คนใช้ปีละครั้งจน flow รายวันยังห่วย — เรียงตาม frequency × value ก่อน",
    ],
    howToApply: [
      "เดิน flow จริงจับเวลา + นับ: ขั้นตอน, field, การตัดสินใจ, การรอ, การสลับ context",
      "ไล่แต่ละจุดด้วยลำดับเครื่องมือ: ตัดได้ไหม → ระบบทำแทนได้ไหม → default ได้ไหม → เลื่อนได้ไหม → ค่อยทำให้ง่ายขึ้น",
      "แยก friction ป้องกัน (ติดป้าย 'keep — protective') ออกก่อนตัดอะไร",
      "หา friction ซ่อน: การรอที่ไม่มี feedback, การต้องไปหาข้อมูลจากที่อื่น (เลขบัญชี, รหัสสาขา)",
      "วัดก่อน-หลังด้วย completion rate + time-to-complete ของ flow นั้น",
    ],
    checklist: [
      "นับ baseline: ขั้น/field/decision/เวลา ก่อนแก้",
      "ทุกขั้นผ่านลำดับ eliminate→automate→default→defer→simplify",
      "Friction ป้องกันถูกระบุและคงไว้อย่างตั้งใจ",
      "ไม่มีจุดที่ user ต้องไปหาข้อมูลนอกระบบ (หรือมีตัวช่วย ณ จุดนั้น)",
      "ทุกการรอ >1s มี feedback",
      "Completion rate วัดก่อน-หลังเป็นตัวเลข",
    ],
    deliverables: ["Friction audit: จุด × ชนิด × เครื่องมือลด × verdict", "Before/after metrics (steps, fields, time, completion)"],
    goodExample:
      "Flow เปิดบัญชี: ตัดอาชีพ/รายได้ไปถามหลังเปิดสำเร็จ (defer), สแกนบัตรประชาชนแทนพิมพ์ 13 หลัก (automate), ที่อยู่ default ตามบัตร (default) — เหลือ 4 นาทีจาก 12, completion +31% — โดย OTP ยังอยู่เพราะเป็น friction ป้องกัน",
    badExample:
      "ทีมไล่ลบ confirmation dialog ทั้งแอปเพื่อ 'ลด friction' รวมถึงตอนลบใบแจ้งหนี้ — สองสัปดาห์ต่อมา ticket 'กู้คืนเอกสาร' พุ่ง และต้อง hotfix กลับมาพร้อม undo ที่ควรเป็นคำตอบตั้งแต่แรก",
    commonMistakes: [
      "ตัด friction ป้องกันเพราะนับแต่จำนวนขั้น ไม่ดูหน้าที่ของขั้น",
      "Simplify ก่อนถาม eliminate — เสียแรงทำ stepper สวยให้ขั้นที่ควรตัดทิ้ง",
      "มองข้าม friction ความรู้สึก (ไม่มั่นใจ/กลัวผิด) ที่แก้ด้วยข้อมูล ไม่ใช่ลดขั้น",
      "Optimize เฉพาะ flow แรกใช้ จน flow ที่ใช้ทุกวันไม่เคยถูกแตะ",
    ],
    relatedSlugs: ["cognitive-load-review", "task-analysis", "checkout-ux", "form-conversion", "onboarding-flow"],
    tags: ["friction", "streamlining", "completion-rate"],
    prompts: [
      `You are a flow optimization specialist. Reduce friction in this flow without removing protective friction.

Input: [flow walkthrough with steps, fields, waits + completion data if any]

Tasks:
1. Inventory friction: every step, field, decision, wait, context-switch (incl. info user must fetch from elsewhere), and uncertainty moment
2. Tag protective friction (confirmations, fraud checks, legal) as KEEP with reason
3. For everything else apply in order: eliminate → automate → default → defer → simplify — choose ONE per item with the concrete change
4. Identify hidden friction: waits without feedback, data the user must hunt for
5. Output before/after counts (steps, fields, decisions, est. time) and the measurement plan (completion rate, time-to-complete)

Rule: never trade away error prevention or cost transparency for speed.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "เปิดบัญชี: ลด Friction",
      before: { label: "12 นาที / 23 fields", points: ["พิมพ์เลขบัตร 13 หลักเอง", "ถามอาชีพ/รายได้ก่อนเปิดเสร็จ", "ที่อยู่กรอกเองทุกช่อง"] },
      after: { label: "4 นาที / 9 fields", points: ["สแกนบัตร (automate)", "อาชีพ/รายได้ถามทีหลัง (defer)", "ที่อยู่ตามบัตรเป็น default — OTP คงไว้ (protective)"] },
    },
  },
  {
    id: "form-conversion",
    slug: "form-conversion",
    term: "Form Conversion",
    category: "conversion",
    icon: "🧾",
    level: "intermediate",
    shortDescription: "Optimize ฟอร์มในเส้น conversion ด้วย field analytics: ลดช่อง, แตกขั้น, ลดความกลัว — วัดผลราย field",
    fullDefinition:
      "Form conversion คือการมองฟอร์มเป็น funnel ย่อย: วัด field-level analytics (ช่องไหนคนลังเลนาน, แก้ซ้ำ, abandon) แล้ว optimize — เครื่องมือหลัก: ตัด field (ทุกช่องที่หายไป conversion ขึ้นแบบวัดได้), แตกฟอร์มยาวเป็นหลายขั้นที่เริ่มจากง่าย (commitment ทีละนิด), เริ่มจากคำถามที่ user ตอบได้ทันที, ขอของ sensitive ทีหลังสุดพร้อมเหตุผล, และ microcopy ลดความกลัว ณ จุดที่กลัว — ต่างจาก Form UX Review ตรงที่โฟกัส 'แปลงให้จบ' บนฟอร์มที่เป็นด่าน conversion โดยเฉพาะ",
    whyItMatters:
      "ฟอร์มคือกำแพงสุดท้ายระหว่าง interest กับ revenue — lead form ที่ลดจาก 11 เหลือ 4 ช่องเพิ่ม conversion 30-50% เป็นเรื่องปกติ และข้อมูลที่เสียไปมักไม่เคยถูกใช้จริงอยู่แล้ว — ขณะที่การถามของ sensitive เร็วเกิน (เลขบัตร, รายได้) ก่อนสร้าง trust ทำคน abandon ทั้งที่ตั้งใจมาสมัคร",
    whenToUse: [
      "ฟอร์มที่เป็นด่าน conversion ตรง: lead, signup, สมัครสินเชื่อ, จองคิว",
      "เมื่อ form analytics มี (หรือติดได้) — optimize แบบมีตาดีกว่าเดาเสมอ",
      "เมื่อ marketing ขอเพิ่ม field — ใช้ data ต่อรองว่าช่องนั้นแลก conversion เท่าไหร่",
    ],
    whenNotToUse: [
      "ฟอร์ม internal/admin ที่ผู้กรอกถูกจ้างให้กรอก — ความครบถูกต้องสำคัญกว่า conversion",
      "อย่าลดช่องจน lead ไร้คุณภาพ — ถ้า sales ใช้ข้อมูล 6 ช่องคัดจริง การตัดเหลือ 2 แค่ย้ายต้นทุนไป sales",
    ],
    howToApply: [
      "ติด field-level analytics: time per field, แก้ซ้ำ, จุด abandon (หรือ session recording)",
      "Audit ทุกช่องกับคนใช้ข้อมูลจริง: ใครใช้ ใช้ทำอะไร — ช่องที่ไม่มีคำตอบ = ตัด",
      "ฟอร์ม >6-7 ช่อง: แตกเป็นขั้น เริ่มจากคำถามง่าย/น่าตอบ (ชื่อ, ความต้องการ) จบที่ sensitive (เบอร์, งบ)",
      "ของ sensitive ใส่เหตุผลสั้นๆ ติดช่อง: 'ใช้เบอร์เพื่อยืนยันสิทธิ์ ไม่โทรขาย'",
      "Progress + บันทึกค่าระหว่างขั้น (ย้อนกลับไม่หาย)",
      "วัด A/B เมื่อ traffic พอ — สมมติฐานจาก field data ไม่ใช่ความเชื่อ",
    ],
    checklist: [
      "มี field-level data ก่อน optimize (ไม่เดา)",
      "ทุกช่องมีผู้ใช้ข้อมูลปลายทางระบุได้",
      "ลำดับ: ง่าย/engage ก่อน, sensitive ท้ายพร้อมเหตุผล",
      "ฟอร์มยาวถูกแตกขั้น มี progress และค่าไม่หาย",
      "Microcopy ลดความกลัว ณ ช่องที่ data ชี้ว่าคนลังเล",
      "วัด conversion ก่อน-หลังราย field ที่แก้",
    ],
    deliverables: ["Field audit + analytics: ช่อง × เวลา × abandon × verdict", "ฟอร์มเวอร์ชันใหม่ + ผล A/B หรือ before/after"],
    goodExample:
      "Field analytics ชี้ว่า 40% abandon ที่ช่อง 'งบประมาณ' (ขั้น 2 จาก 3) — ทีมย้ายไปท้ายสุด เปลี่ยนเป็นช่วงให้เลือกแทนพิมพ์เลข พร้อม copy 'เพื่อแนะนำแพ็กเกจที่เหมาะ' — abandonment ช่องนั้นเหลือ 12%, lead รวม +27% โดย sales ยังได้ข้อมูลครบ",
    badExample:
      "ทีมเดาว่าฟอร์มยาวไปเลยตัดช่องแบบสุ่ม 4 ช่อง — ปรากฏ 2 ใน 4 คือช่องที่ sales ใช้คัด lead — conversion ขึ้น 8% แต่ sales เสียเวลาโทรหา lead ขยะเพิ่มเท่าตัว สุทธิแย่ลง เพราะไม่มีใครดู data ก่อนตัด",
    commonMistakes: [
      "Optimize โดยไม่มี field data — ตัดผิดช่อง แก้ผิดจุด",
      "เปิดฟอร์มด้วยของ sensitive (เบอร์โทร) ก่อนสร้างเหตุผลให้อยากตอบ",
      "แตกขั้นแต่ไม่บันทึกค่า — ย้อนกลับทีเดียวหายหมด ยิ่งแย่กว่าฟอร์มเดียวยาว",
      "นับแต่ conversion ของฟอร์ม ไม่ตามคุณภาพ lead ปลายทาง",
    ],
    relatedSlugs: ["form-ux-review", "friction-reduction", "checkout-ux", "trust-signals", "ab-test-design"],
    tags: ["forms", "lead-gen", "field-analytics", "multi-step"],
    prompts: [
      `You are a form conversion specialist. Optimize this conversion-critical form.

Input: [form fields in order + who uses each field's data + field analytics if any (time, corrections, abandon point)]

Tasks:
1. Field audit: for each field — downstream consumer, evidence it's used, verdict (keep / move / make-optional / cut). Flag fields with no identifiable consumer
2. Reorder: easy/engaging first, sensitive last with a one-line reason next to each sensitive field (write the copy)
3. Multi-step decision: if >6-7 fields, propose the step split (what's in each step, why this grouping), progress indicator, value persistence
4. Fear-reduction microcopy at the fields analytics flag as hesitation points
5. Measurement: which field-level metrics to track post-launch + the A/B hypothesis

Output: redesigned form spec with copy + expected impact per change. Warn if any cut risks lead quality (name the tradeoff).`,
    ],
    visualDemo: "audit-report",
  },
  {
    id: "offer-clarity",
    slug: "offer-clarity",
    term: "Offer Clarity",
    category: "conversion",
    icon: "💬",
    level: "intermediate",
    shortDescription: "ความชัดของข้อเสนอ: ขายอะไร ให้ใคร ได้ผลลัพธ์อะไร ราคาเท่าไหร่ — ก่อนคิดถึงความสวยทุกชนิด",
    fullDefinition:
      "Offer clarity คือการสื่อ 4 อย่างให้คนแปลกหน้าเก็ทเร็วที่สุด: (1) นี่คืออะไร — หมวดที่สมองจัดได้ทันที (2) สำหรับใคร — คนอ่านรู้ว่า 'ใช่ฉัน' ไหม (3) ได้ผลลัพธ์อะไร — outcome ที่จับต้องได้ ไม่ใช่ feature list (4) แลกกับอะไร — ราคา/เวลา/ความเสี่ยง — เขียนด้วยภาษาที่ลูกค้าใช้เอง (จาก interview/review) ไม่ใช่ศัพท์ที่บริษัทอยากฟัง — ทดสอบได้จริงด้วย 5-second test",
    whyItMatters:
      "ไม่มีดีไซน์ไหนกู้ headline ที่อ่านแล้วไม่รู้ว่าขายอะไรได้ — 'Empowering Digital Transformation' บนเว็บที่จริงๆ ขายระบบจองคิวร้านทำผม คือการซ่อนสินค้าจากคนที่กำลังหามันอยู่พอดี — และความคลุมเครือมีต้นทุนเงียบ: คนที่ 'ไม่แน่ใจว่าใช่' จะไม่ถาม เขาแค่ไป",
    whenToUse: [
      "ก่อน optimize อะไรก็ตามบนหน้า conversion — clarity คือชั้นแรกเสมอ",
      "เมื่อ 5-second test ตก หรือ bounce สูงทั้งที่ traffic ตรงกลุ่ม",
      "ตอน positioning ใหม่/เข้า segment ใหม่ — ภาษาต้อง re-derive จากลูกค้ากลุ่มนั้น",
    ],
    whenNotToUse: [
      "Brand campaign ที่จงใจสร้าง intrigue — คนละเกมกับ conversion page (อย่าปนกันในหน้าเดียว)",
      "อย่าไล่ clarity จนแบน — 'ระบบจองคิว' ที่ชัดแต่เหมือนคู่แข่งทุกราย ต้องชัด และ ต่าง",
    ],
    howToApply: [
      "ดึงภาษาจริงจากลูกค้า: คำที่ใช้ใน interview, รีวิว, search query — headline ที่ดีมักเป็นประโยคที่ลูกค้าพูดเอง",
      "เขียนสูตร: [ผลลัพธ์ที่ต้องการ] สำหรับ [ใคร] โดยไม่ต้อง [ความเจ็บที่ตัดทิ้ง] เช่น 'ปิดงบรายเดือนใน 1 วัน สำหรับร้านค้าออนไลน์ ไม่ต้องจ้างนักบัญชี'",
      "แทน feature ด้วย outcome: 'AI-powered OCR' → 'ถ่ายรูปบิล ระบบลงบัญชีให้เอง'",
      "บอกราคา/เงื่อนไขเร็ว — การซ่อนราคาไม่ได้เพิ่ม lead มันแค่ย้ายความผิดหวังไปอยู่ท้าย funnel",
      "ทดสอบ 5-second test: คนแปลกหน้าตอบ 4 คำถาม (อะไร/ใคร/ได้อะไร/เท่าไหร่) ได้ ≥3 ข้อ = ผ่าน",
    ],
    checklist: [
      "Headline บอกหมวด + ผลลัพธ์ ไม่ใช่สโลแกน",
      "Target ระบุชัดพอที่คนอ่านรู้ว่า 'ใช่/ไม่ใช่ฉัน'",
      "Outcome จับต้องได้ (ตัวเลข, เวลา, สิ่งที่หายไป) แทน feature",
      "ราคา/โมเดลราคาหาเจอเร็ว",
      "ใช้คำของลูกค้า (เทียบ search log/รีวิวแล้ว)",
      "ผ่าน 5-second test กับคนนอก ≥60%",
    ],
    deliverables: ["Message hierarchy: headline / subhead / proof / CTA พร้อมเหตุผล", "ผล 5-second test ก่อน-หลัง"],
    goodExample:
      "'โปรแกรมบัญชีสำหรับร้านค้าออนไลน์ — ปิดงบรายเดือนใน 1 วัน ไม่ต้องจ้างนักบัญชี เริ่ม ฿299/เดือน' — สี่คำตอบ (อะไร/ใคร/ได้อะไร/เท่าไหร่) ในสองบรรทัด คนที่ใช่รู้ตัวทันที คนที่ไม่ใช่ไม่เสียเวลาใคร",
    badExample:
      "'Unlock Your Business Potential with Next-Gen Solutions' — ศูนย์คำตอบจากสี่คำถาม ใช้ได้กับทั้งบริษัทบัญชี ยิม และเหมืองคริปโต — visitor อ่านจบยังไม่รู้กระทั่งหมวดสินค้า",
    commonMistakes: [
      "Headline เป็นวิสัยทัศน์/สโลแกนที่บอกหมวดสินค้าไม่ได้",
      "พูดภาษา feature ภายใน ('omnichannel', 'AI-powered') แทน outcome ที่ลูกค้าเข้าใจ",
      "กลัวระบุ target ชัดเพราะ 'เดี๋ยวตัดกลุ่มอื่น' — เลยไม่โดนใครเลย",
      "ซ่อนราคาแล้วเรียกมันว่า lead strategy",
    ],
    relatedSlugs: ["five-second-test", "landing-page-review", "content-design", "jobs-to-be-done", "pricing-page-ux"],
    tags: ["messaging", "value-proposition", "clarity"],
    prompts: [
      `You are a messaging strategist. Fix offer clarity for this page.

Input: [current headline/subhead/hero + what the product actually does + customer language samples (reviews, interview quotes, search queries)]

Tasks:
1. Score current copy on the 4 questions a stranger asks: what is it / who is it for / what outcome / what does it cost — quote and judge each
2. Extract customer vocabulary from the samples: list exact phrases customers use for the problem and outcome
3. Write 3 headline options using the formula [desired outcome] for [specific who] without [pain removed] — using customer phrases, not internal jargon
4. Convert every feature mentioned into its outcome ("AI OCR" → "snap a receipt, books update themselves")
5. Design the 5-second test to validate: questions + pass criteria

Output: scorecard + 3 headline/subhead/CTA sets + feature→outcome table.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Offer Clarity",
      before: { label: "สโลแกน", points: ["'Unlock Your Business Potential'", "ไม่รู้หมวดสินค้า / ไม่รู้ว่าเพื่อใคร", "ราคาต้อง 'ติดต่อฝ่ายขาย'"] },
      after: { label: "4 คำตอบใน 2 บรรทัด", points: ["'โปรแกรมบัญชีสำหรับร้านค้าออนไลน์'", "'ปิดงบใน 1 วัน ไม่ต้องจ้างนักบัญชี'", "'เริ่ม ฿299/เดือน — ทดลองฟรี'"] },
    },
  },
  {
    id: "ab-test-design",
    slug: "ab-test-design",
    term: "A/B Test Design",
    category: "conversion",
    icon: "🧪",
    level: "advanced",
    shortDescription: "ออกแบบการทดลองให้ผลเชื่อถือได้: hypothesis ชัด, ตัวแปรเดียว, sample size คำนวณก่อน, ไม่แอบดูผลกลางทาง",
    fullDefinition:
      "A/B test ที่ valid ต้องมี: hypothesis จาก evidence ('จาก field data ที่คนลังเลช่องงบประมาณ — ถ้าเปลี่ยนเป็นตัวเลือกช่วง conversion จะขึ้น เพราะลดความกลัวตอบผิด'), ตัวแปรเดียวต่อ test, primary metric เดียว + guardrail metrics (วัดผลข้างเคียง), sample size คำนวณก่อนเริ่ม (power 80%), ระยะ run ครบ business cycle (≥2 สัปดาห์) และห้าม stop ตอนเห็นผลสวย (peeking ทำ false positive พุ่ง) — traffic ไม่พอ = อย่า test ใช้ qualitative แทน",
    whyItMatters:
      "A/B test ที่ออกแบบผิดอันตรายกว่าไม่ test เพราะให้ 'หลักฐานวิทยาศาสตร์ปลอม' มาประทับการตัดสินใจผิด — ทีมที่ stop test วันที่ 3 เพราะ +15% กำลังอ่าน noise, ทีมที่เปลี่ยน 5 อย่างพร้อมกันแล้วชนะ ไม่รู้ว่าอะไรชนะ และทีมที่ test ทุกอย่างโดยไม่มี hypothesis กำลังเล่นหวยที่มีค่า traffic เป็นเดิมพัน",
    whenToUse: [
      "Decision ที่กลับยาก/มูลค่าสูง บนหน้าที่ traffic พอ (โดยทั่วไปต้องการ ~ร้อย conversion ต่อ variant)",
      "เมื่อ review/research สร้าง hypothesis ที่หนักแน่นแล้ว — test คือตัวตัดสิน ไม่ใช่ตัวหา idea",
      "Claim ภายในที่เถียงไม่จบ — ให้ data จบแทน",
    ],
    whenNotToUse: [
      "Traffic ไม่พอ — test ที่ run 4 เดือนไม่จบคือต้นทุนจม ใช้ usability test + ship แล้ววัด before/after แทน",
      "การแก้ที่ถูกอยู่แล้วชัดเจน (bug, contrast ไม่ผ่าน, ข้อมูลโกหก) — แก้เลย ไม่ต้องขอหลักฐาน",
    ],
    howToApply: [
      "เขียน hypothesis เต็มรูป: เพราะ [evidence] เราเชื่อว่า [การเปลี่ยนแปลง] จะทำให้ [metric] เปลี่ยน เพราะ [กลไก]",
      "เลือก primary metric เดียว + guardrails (เช่น test เพิ่ม signup ต้องไม่ทำ activation ตก)",
      "คำนวณ sample size จาก baseline + minimum detectable effect ก่อนเริ่ม — รู้วันจบตั้งแต่วันแรก",
      "Run ครบ cycle ≥2 สัปดาห์เต็ม ไม่ stop กลางทางแม้ผลจะสวย",
      "อ่านผล: significance + effect size + segment ใหญ่ๆ (mobile/desktop) — ระวัง segment fishing ย่อยยิบ",
      "บันทึกทุก test (รวมที่แพ้/เสมอ) ใน experiment log — ความรู้สะสมอยู่ตรงนั้น",
    ],
    checklist: [
      "Hypothesis อ้าง evidence และระบุกลไก ไม่ใช่ 'ลองดู'",
      "ตัวแปรเดียวต่อ test",
      "Primary metric เดียว + guardrail metrics ประกาศก่อนเริ่ม",
      "Sample size + วันจบคำนวณก่อน run",
      "ไม่ peek/stop ก่อนครบกำหนด",
      "ผลถูกบันทึกใน log แม้แพ้หรือเสมอ",
    ],
    deliverables: ["Test spec: hypothesis / variants / metrics / sample / duration", "Experiment log entry พร้อมผลและ decision"],
    goodExample:
      "'จาก session recording ที่ 40% ลังเลช่องงบประมาณ — เปลี่ยนเป็นตัวเลือก 4 ช่วง คาดว่า form completion ขึ้น ≥10% (กลไก: ลดความกลัวตอบผิด) — ต้องการ 8,400 sessions/variant, run 3 สัปดาห์, guardrail: คุณภาพ lead จาก sales rating' — ชนะ +14% และคุณภาพ lead ไม่ตก จึง ship",
    badExample:
      "ทีมเปลี่ยน headline + รูป + สีปุ่ม + ลำดับ section พร้อมกันใน variant เดียว เห็น +12% วันที่ 3 เลย stop ประกาศชัยชนะ — เดือนถัดมา conversion กลับเท่าเดิม (noise + novelty) และไม่มีใครรู้ว่าใน 4 อย่างนั้นมีอะไรช่วยจริงบ้างไหม",
    commonMistakes: [
      "หลายตัวแปรพร้อมกันแล้วสรุปไม่ได้ว่าอะไร work",
      "Peeking — stop ตอนผลสวย ทำ false positive rate พุ่งหลายเท่า",
      "ไม่มี guardrail — ชนะ metric หลักแต่ฆ่า metric อื่นเงียบๆ",
      "Test เรื่องจิ๋ว (เฉดสี) บนหน้า traffic ต่ำ ที่ต่อให้ชนะก็วัดไม่ได้",
      "ทิ้งผล test ที่แพ้โดยไม่บันทึก — องค์กรเรียนรู้ศูนย์",
    ],
    relatedSlugs: ["conversion-review", "survey-design", "form-conversion", "research-synthesis"],
    tags: ["ab-testing", "experimentation", "statistics"],
    prompts: [
      `You are an experimentation specialist. Design a rigorous A/B test.

Input: [the evidence/observation + proposed change + baseline metric + weekly traffic/conversions]

Tasks:
1. Write the full hypothesis: Because [evidence], we believe [single change] will move [primary metric] because [mechanism]. Reject the test if evidence is missing — say what to gather instead
2. Define: ONE primary metric + guardrail metrics (what must not get worse)
3. Sample size: calculate per variant from baseline + minimum detectable effect (state your MDE choice); give the run duration in weeks. If duration >8 weeks, recommend NOT testing and give the alternative (qual + before/after)
4. Pre-register the analysis: significance threshold, segments allowed (max 2-3 big ones), stopping rule (no peeking)
5. Draft the experiment log entry template

Output: complete test spec ready to implement.`,
    ],
    visualDemo: "acceptance-criteria",
    demoData: {
      title: "Test Spec Gate",
      criteria: [
        { given: "มี evidence จาก field data/recording", when: "เขียน hypothesis", then: "ระบุกลไก + metric + ขนาด effect ที่คาด" },
        { given: "Baseline 4.2% / traffic 6k sessions/สัปดาห์", when: "คำนวณ sample size (MDE 10%, power 80%)", then: "รู้วันจบก่อนเริ่ม — ถ้าเกิน 8 สัปดาห์ = อย่า test" },
        { given: "Test กำลัง run และผลดูดี", when: "ยังไม่ถึงวันจบ", then: "ห้าม stop/ประกาศผล (peeking)" },
      ],
    },
  },
];
