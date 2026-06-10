import type { PromptItem } from "@/types/playbook";

export const CONVERSION_PROMPTS: PromptItem[] = [
  {
    id: "conversion-landing-audit",
    title: "Landing Page Conversion Audit",
    audience: "conversion",
    level: "intermediate",
    useCase: "Audit landing page เชิง conversion ล้วน: message match, objection order, proof, CTA — ได้ hypothesis ที่ test ได้",
    inputRequired: ["Full-page screenshot (desktop + 375px)", "Traffic source + ad message", "Conversion rate ปัจจุบัน + เป้า", "Proof ที่มีจริง"],
    promptText: `You are a CRO consultant auditing a landing page for conversion, producing testable hypotheses — not opinions.

Page: [SCREENSHOTS DESKTOP + 375px]. Traffic: [SOURCE + EXACT AD MESSAGE]. Current conversion: [X%] → target: [Y%]. Real proof available: [LIST].

Audit:
1. MESSAGE MATCH: headline vs the ad's promise, word-for-word comparison — mismatch is the most common and cheapest-to-fix conversion killer
2. 5-SECOND TEST: first viewport (375px first) — what's sold / what do I get / what next; quote what it actually communicates
3. OBJECTION LADDER: map sections to buyer objections in order (real? works for me? price? effort? trust?) — unanswered objections and dead-weight sections both listed
4. PROOF AUDIT: specific-verifiable vs decorative; placement relative to commitment asks
5. CTA: count of competing actions, label quality, mobile reachability, post-click clarity (what happens next stated?)
6. FRICTION & LEAKS: every exit path and effort spike between landing and conversion

For EVERY finding produce a hypothesis card: finding → hypothesis ("ถ้าเปลี่ยน X แล้ว Y จะดีขึ้นเพราะ Z") → variant to test → primary metric → minimum detectable effect worth testing at my traffic ([SESSIONS/MONTH]).

Then rank all hypotheses by ICE (impact × confidence × ease, with your scores) and recommend the top 3 as a test roadmap — what runs first and why, what can ship without testing (clear defects: broken links, missing info — fix, don't test).

Constraints: separate defects (just fix) from hypotheses (test); no fabricated proof in any variant; hypotheses must be testable at my actual traffic volume — flag tests my volume can't power.`,
    outputFormat: "Findings + hypothesis card ทุกข้อ + ICE ranking + test roadmap 3 อันดับ + defect list ที่แก้เลยไม่ต้อง test",
    constraints: ["แยก defect ออกจาก hypothesis", "ทุก hypothesis มี metric และ MDE", "เช็คว่า traffic พอ power การ test ไหม", "ห้ามแต่ง proof"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["landing-page", "cro", "ab-test"],
    exampleInput: "Landing SaaS HR + ads Google 'โปรแกรมเงินเดือน' / conv 1.8% เป้า 3% / 12k sessions/เดือน",
    expectedOutputPreview: "Defect: ลิงก์ pricing เสีย (แก้เลย)... H1: headline ไม่มีคำว่า 'เงินเดือน' ที่ user search มา — เปลี่ยนแล้ว conv ขึ้นเพราะ message match — ICE 8.1 อันดับ 1... H4: ต้องการ 40k sessions — traffic ไม่พอ ข้าม...",
  },
  {
    id: "conversion-checkout-friction",
    title: "Checkout Friction Audit",
    audience: "conversion",
    level: "advanced",
    useCase: "ไล่หา friction ทุกจุดใน checkout ตั้งแต่ตะกร้าถึงจ่ายสำเร็จ — surprise costs, บังคับสมัคร, form เกิน, ความกังวลตอนจ่าย",
    inputRequired: ["Screenshots ทุก step ของ checkout", "Abandonment data ต่อ step ถ้ามี", "นโยบายที่มีจริง (ค่าส่ง คืนเงิน)", "Guest checkout มีไหม"],
    promptText: `You are a checkout optimization specialist auditing cart-to-confirmation friction.

Checkout steps: [SCREENSHOTS IN ORDER]. Abandonment per step: [DATA IF ANY]. Policies that exist: [SHIPPING COSTS / RETURNS / etc.]. Guest checkout: [YES/NO].

Audit against the known abandonment causes, in their real-world order of damage:
1. SURPRISE COSTS (#1 killer): when does the user learn the FULL price (shipping, fees, tax)? Any cost appearing after step 1 is a surprise — map the price-truth timeline; fix = total visible from cart
2. FORCED ACCOUNT (#2): can a stranger buy without creating an account? If registration is forced — where, and what's the stated value? Guest-checkout-with-optional-account-after is the standard answer
3. FORM BURDEN: per step — field count, which are necessary for THIS purchase vs CRM appetite; address entry (autocomplete? Thai address pattern correct?); payment field UX (card formatting, inputmode, autofill)
4. PAYMENT ANXIETY: at the card-entry moment — what reassurance is IN VIEW (security signal, total confirmation, return policy)? What happens on payment failure (money state clear? data preserved? retry path?)
5. PROGRESS & ESCAPE: steps remaining visible? Can the user go BACK to edit (cart, address) without losing everything? Editing the cart from checkout — possible or restart?
6. MOBILE REALITY: the entire flow at 375px — keyboard types, sticky order summary, CTA reachability; most checkouts are completed on phones
7. DATA CROSS-CHECK: my abandonment data vs your findings — does the biggest drop match the worst friction you found?

Output: friction inventory per step (friction / type: cost-account-form-anxiety / severity / fix) → the price-truth timeline → field-count diet (current → proposed per step) → top 3 fixes ranked by expected abandonment recovery, with reasoning → what to instrument if data was missing.`,
    outputFormat: "Friction inventory ต่อ step + price-truth timeline + field diet + top 3 fixes",
    constraints: ["ไล่ตามลำดับ damage จริง: costs → account → form → anxiety", "Map จุดที่ราคาจริงโผล่", "เช็ค guest checkout เสมอ", "เทียบ abandonment data ถ้ามี"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["checkout", "e-commerce", "friction"],
    exampleInput: "Checkout 4 steps / drop หนักสุด step 3 (จ่ายเงิน) / มีนโยบายคืน 30 วันแต่ไม่โชว์",
    expectedOutputPreview: "ค่าส่ง 60 บาทโผล่ครั้งแรก step 3 พร้อมช่องกรอกบัตร — surprise cost + anxiety พร้อมกัน ตรงกับ drop ที่ data บอก... Fix 1: ค่าส่งโชว์ตั้งแต่ตะกร้า... Fix 2: badge คืนเงิน 30 วัน ข้างปุ่มจ่าย...",
  },
  {
    id: "conversion-pricing-page",
    title: "Pricing Page Optimization",
    audience: "conversion",
    level: "intermediate",
    useCase: "ปรับหน้า pricing ที่คนเข้าเยอะแต่ไม่ตัดสินใจ — tier ไม่ต่างชัด, คำถามเงินไม่ถูกตอบ, CTA ไม่บอกขั้นต่อไป",
    inputRequired: ["Screenshot หน้า pricing", "Tiers + ราคา + เกณฑ์ที่แยก", "แผนที่อยากดัน", "คำถามที่ sales/support เจอบ่อย", "พฤติกรรม: เข้าแล้วไปไหนต่อ (data ถ้ามี)"],
    promptText: `You are a pricing page CRO specialist. Visitors here have the highest intent on the site — confusion here is the most expensive confusion you have.

Page: [SCREENSHOT]. Tiers: [NAMES/PRICES/DIFFERENTIATION]. Push plan: [WHICH + WHY]. Recurring money questions from sales/support: [LIST]. Behavior data: [BOUNCE/PING-PONG TO OTHER PAGES IF KNOWN].

Audit:
1. ONE-MINUTE DECISION TEST: can a fitting buyer identify their plan in 60 seconds? What blocks it — tiers differentiated by a clear single dimension (team size/volume/capability tier) or by a 40-row feature soup the buyer must diff themselves?
2. RECOMMENDED PLAN: is one plan visually guided ("แนะนำ") WITH the reason ("เหมาะกับทีม 5-20 คน")? Recommendation without a fit-reason reads as "the one they want to sell me"
3. PRICE HONESTY: billed-annually games (small print, per-seat surprises, the price that's not the charge)? Show the real number a buyer will pay; discount toggle showing both states?
4. FEATURE TABLE DIET: which rows actually differ across tiers (keep) vs identical-everywhere (collapse to "ทุกแผนรวม:")? Which differ but no buyer decides on them (move to docs)? Target ≤8 comparison rows
5. MONEY QUESTIONS ON PAGE: my listed questions — answered ON this page at the decision point, or does the buyer need to contact/hunt? Write the missing microcopy
6. CTA PER TIER: what literally happens next (free trial — card needed? demo call — with whom, how long?) — uncertainty at this click is uncertainty at the highest-intent moment; rewrite vague CTAs
7. PING-PONG DIAGNOSIS: if data shows bouncing between pricing and other pages — what info are they leaving to find? Bring it here.

Output: blockers ranked by decision-impact → tier presentation rework (differentiation line per tier + recommended-plan treatment) → feature table diet (keep/collapse/move per row) → money-question microcopy written in Thai → CTA rewrites with next-step clarity.`,
    outputFormat: "Blockers ranked + tier rework + feature diet + microcopy ไทย + CTA ใหม่",
    constraints: ["ทดสอบด้วยเกณฑ์ 'เลือกได้ใน 1 นาที'", "แผนแนะนำต้องมีเหตุผล fit ไม่ใช่แค่ป้าย", "ตาราง ≤8 แถวเปรียบเทียบ", "ตอบคำถามเงินบนหน้า ไม่ใช่ให้ติดต่อ"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["pricing", "saas", "conversion"],
    exampleInput: "Pricing 4 แผน ตาราง 43 แถว / ดัน Growth / คำถามบ่อย: VAT รวมยัง? เปลี่ยนแผนกลางเดือน?",
    expectedOutputPreview: "Blocker 1: 43 แถว = buyer ต้อง diff เอง → เหลือ 7 แถวตัดสินใจ + 'ทุกแผนรวม' 12 ข้อ... Growth: 'แนะนำ — เหมาะกับทีมที่เริ่มมีลูกค้าประจำ'... Microcopy: 'ราคายังไม่รวม VAT 7% — ใบกำกับภาษีออกได้ทันที'...",
  },
  {
    id: "conversion-cta-copy",
    title: "CTA Copy & Hierarchy Review",
    audience: "conversion",
    level: "basic",
    useCase: "ตรวจ + เขียน CTA ใหม่ทั้ง flow: label บอก outcome, ลดความกลัว ณ จุดคลิก, hierarchy ไม่แข่งกันเอง",
    inputRequired: ["Screenshots ทุกจุดที่มี CTA ใน flow", "Action ที่ business ต้องการต่อหน้า", "ความกังวลหลักของ user ณ จุดคลิก (ถ้ารู้)"],
    promptText: `You are a conversion copywriter + UI reviewer auditing every CTA in a flow — label, anxiety, and hierarchy together (they fail together).

Screens: [SCREENSHOTS WITH EVERY CTA VISIBLE]. Desired action per screen: [LIST]. Known user anxieties at click points: [e.g. "จะโดนตัดเงินเลยไหม", IF KNOWN].

Per CTA, audit three layers:
1. LABEL: does it say the OUTCOME of clicking (verb + what happens: "เริ่มทดลองฟรี 14 วัน") or is it generic ("Submit", "ตกลง", "Next") / system-speak ("ดำเนินการ")? Rewrite every weak one — outcome language, user's words not company's ("รับใบเสนอราคา" not "ส่งข้อมูลให้ฝ่ายขาย")
2. CLICK ANXIETY: at this button, what's the user's last-moment fear (charge? spam? commitment? losing data?) — is it answered AT the button (microcopy under: "ไม่ต้องใส่บัตรเครดิต", "ยกเลิกได้ทุกเมื่อ")? Write the missing anxiety-killer line per CTA where a real fear exists (don't invent reassurance where there's no fear — it CREATES fear)
3. HIERARCHY: per viewport — one visually dominant action? Competing same-weight CTAs (trial vs demo vs contact)? Destructive actions prominent where misclick hurts? Demote list with new treatment per demoted action

Then flow-level:
4. CONSISTENCY: the same action labeled differently across screens ("สมัคร" → "ลงทะเบียน" → "สร้างบัญชี" = three things in the user's head)? One term per action across the flow
5. MOMENTUM: do sequential CTAs tell a coherent story of progress (each label confirms where they're going next)?

Output: CTA inventory table (screen / current label / layer failures / new label / anxiety microcopy / hierarchy treatment) → consistency fixes → the 3 highest-impact rewrites with reasoning. All copy in Thai, key English terms kept where the product uses them.`,
    outputFormat: "ตาราง CTA ทุกตัว: label เดิม/ใหม่ + microcopy + hierarchy + top 3",
    constraints: ["ทุก label ต้องบอก outcome", "Microcopy แก้ความกลัวเฉพาะที่มีจริง", "หนึ่ง action หนึ่งคำตลอด flow", "Filled primary เดียวต่อ viewport"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["cta", "copy", "microcopy"],
    exampleInput: "Flow สมัคร 3 จอ มีปุ่ม 'Submit', 'ตกลง', 'Next' / กังวล: โดนชาร์จเลยไหม",
    expectedOutputPreview: "'Submit' → 'เริ่มทดลองฟรี 14 วัน' + ใต้ปุ่ม: 'ไม่ต้องใส่บัตรเครดิต'... Consistency: 'สมัคร/ลงทะเบียน/สร้างบัญชี' → ใช้ 'สร้างบัญชี' ทุกจุด...",
  },
  {
    id: "conversion-onboarding-activation",
    title: "Onboarding Activation Review",
    audience: "conversion",
    level: "advanced",
    useCase: "วิเคราะห์ activation funnel: signup แล้วหาย — หา step ที่ฆ่า momentum และออกแบบเส้นทางสู่ first value ใหม่",
    inputRequired: ["Onboarding steps ทั้งหมด", "Activation event ที่นับ + funnel data ต่อ step", "Aha moment ของ product", "Cohort ไหน activate ดี/แย่ (ถ้ารู้)"],
    promptText: `You are a growth designer analyzing an activation funnel — from signup to activated user.

Onboarding: [STEPS/SCREENSHOTS]. Activation event: [DEFINITION — and challenge it if it's vanity]. Funnel: [% PER STEP]. Aha moment: [FIRST REAL VALUE]. Cohort patterns: [IF KNOWN — e.g. "invited users activate 3x better"].

Analyze:
1. ACTIVATION DEFINITION CHECK: does the activation event actually predict retention, or is it a vanity checkpoint (completed tour ≠ activated)? If suspect, propose the better event from the product's value logic
2. FUNNEL FORENSICS: per step — drop rate vs the effort/value ratio at that step; the biggest drop is usually where effort spikes BEFORE value appears (document upload, integrations, team invites); diagnose each major drop: effort spike / value doubt / technical friction / wrong moment
3. TIME-TO-VALUE MAP: minutes (and decisions) from signup to aha moment — what's the theoretical minimum path with sample data/templates/smart defaults? Every step between signup and value needs to justify its existence against this minimum
4. MOMENT AUDIT: per ask (connect X, invite team, fill profile) — is it asked at the moment its value is obvious, or front-loaded because the form was already there? Re-sequence: what moves AFTER first value (most things can)
5. COHORT LOGIC: if cohort data exists — what do high-activating cohorts experience differently, and can the product manufacture that experience for everyone (e.g. invited users land in a populated workspace → give solo users a populated template)?
6. RE-ENGAGEMENT REALITY: users who stall mid-onboarding — what brings them back (email with a reason, or nothing)? The funnel includes people who left and could return.

Output: funnel diagnosis table (step / drop / diagnosed cause / evidence) → re-sequenced flow (current N steps → proposed, with what moved where) → time-to-value before/after estimate → top 3 experiments ranked (hypothesis / change / metric) → activation-event recommendation if the current one is vanity.`,
    outputFormat: "ตาราง diagnose ต่อ step + flow ใหม่ + time-to-value เทียบ + top 3 experiments",
    constraints: ["ท้าทาย activation event ถ้าเป็น vanity", "ทุก drop ต้องมี diagnosed cause", "หา minimum path ด้วย sample data/defaults เสมอ", "ทุกข้อเสนอเป็น experiment ที่วัดได้"],
    bestUsedWith: ["Claude", "ChatGPT"],
    tags: ["activation", "onboarding", "growth"],
    exampleInput: "Funnel: signup 100% → setup 64% → เชื่อม data 31% → activated 22% / aha: เห็นรายงานแรก",
    expectedOutputPreview: "Drop ใหญ่ที่เชื่อม data: effort spike ก่อน value — user ยังไม่เคยเห็นรายงานหน้าตาเป็นไง... Re-sequence: โชว์รายงาน demo data ก่อน (aha จำลอง) แล้วค่อยขอเชื่อมจริง... Experiment 1: demo-first flow...",
  },
  {
    id: "conversion-ab-test-design",
    title: "A/B Test Hypothesis Builder",
    audience: "conversion",
    level: "intermediate",
    useCase: "แปลง insight/ความเห็นให้เป็น A/B test ที่ออกแบบถูกหลัก: hypothesis ชัด, metric เดียว, sample พอ, ไม่หลอกตัวเอง",
    inputRequired: ["สิ่งที่อยากเปลี่ยน + เหตุผล/หลักฐานที่มี", "Metric ที่แคร์", "Traffic ต่อเดือนของหน้านั้น", "Conversion rate ปัจจุบัน"],
    promptText: `You are an experimentation specialist turning a change idea into a properly designed A/B test — or honestly saying it shouldn't be one.

The idea: [WHAT TO CHANGE + WHY — the evidence or hunch behind it]. Metric that matters: [METRIC]. Page traffic: [SESSIONS/MONTH]. Current conversion: [X%].

Build the test:
1. HYPOTHESIS DISCIPLINE: rewrite the idea as: "เพราะ [evidence/insight], ถ้าเรา [change] แล้ว [metric] จะ [direction] เพราะ [mechanism]" — if the evidence slot is empty, say so: this is a guess, consider cheaper validation first (5 user tests often beat a 6-week A/B of a hunch)
2. VARIANT DESIGN: the minimal change that tests the mechanism — flag if my proposed change bundles multiple mechanisms (new headline AND new layout AND new CTA = uninterpretable result); split or prioritize
3. POWER MATH: with my traffic and base rate — the minimum detectable effect at 80% power / 95% significance, and the run time to detect a realistic effect; verdict: feasible / needs more traffic / test a bigger change instead (small tweaks need huge samples — at low traffic, test bold variants)
4. GUARDRAILS: metrics that must NOT degrade (revenue per visitor when testing free-trial prominence; downstream activation when testing signup ease — the classic: more signups, worse users); define the secondary metrics watched
5. VALIDITY TRAPS for this specific test: novelty effect window, seasonal contamination, segment dilution (mobile+desktop pooled when the change is mobile-only), peeking — the stop-rules written down BEFORE starting
6. DECISION TREE pre-committed: result scenarios (win / lose / flat) → action per scenario, agreed now so a flat result doesn't become "run it longer until it wins"

Output: hypothesis statement → variant spec → power calculation with run-time → guardrail metrics → stop rules → decision tree. If the idea isn't testable at my traffic, the honest alternative (sequential test, bigger swing, or qualitative validation).`,
    outputFormat: "Hypothesis + variant + power math + guardrails + stop rules + decision tree",
    constraints: ["Hypothesis ต้องมีช่อง evidence จริง", "หนึ่ง test หนึ่ง mechanism", "คำนวณ power ก่อนเริ่มเสมอ", "Pre-commit decision tree กัน 'run ต่อจนชนะ'"],
    bestUsedWith: ["Claude", "ChatGPT"],
    tags: ["ab-test", "experimentation", "statistics"],
    exampleInput: "อยากย้าย social proof ขึ้นเหนือ pricing เพราะ heatmap เห็นคนไม่ scroll ถึง / 8k sessions/เดือน / conv 2.1%",
    expectedOutputPreview: "Hypothesis: เพราะ heatmap แสดง 68% ไม่ถึง social proof ถ้าย้ายขึ้น... Power: 8k/เดือน, base 2.1% → MDE 35% relative ที่ 6 สัปดาห์ — ตรวจจับได้เฉพาะ effect ใหญ่, แนะนำ variant ที่ bold...",
  },
];
