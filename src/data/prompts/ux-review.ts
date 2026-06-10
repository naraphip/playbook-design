import type { PromptItem } from "@/types/playbook";

export const UX_REVIEW_PROMPTS: PromptItem[] = [
  {
    id: "ux-review-user-flow",
    title: "User Flow Review",
    audience: "ux-review",
    level: "intermediate",
    useCase: "ตรวจ flow ทั้งเส้น (สมัคร, สั่งซื้อ, ตั้งค่า) หาจุดหลุด จุดวน และ step ที่ไม่จำเป็น",
    inputRequired: ["Flow ทุก step (screenshots เรียงลำดับ หรือคำบรรยายละเอียด)", "User เริ่มจากไหน มาทำอะไร", "Data จุด drop-off ถ้ามี"],
    promptText: `You are a senior UX reviewer auditing a complete user flow end-to-end.

Flow: [NAME] — steps in order: [SCREENSHOTS/DESCRIPTIONS PER STEP]. User: [WHO], entering from [ENTRY POINT], trying to: [GOAL]. Known drop-off data: [IF ANY].

Walk the flow as that user and review:
1. STEP NECESSITY: per step — what does it accomplish for the USER (not the business)? Steps that only serve internal needs: flag for removal/deferral. Could any two steps merge? Could any step be skipped with a smart default?
2. MOMENTUM: where does the user lose certainty — unclear what to do next, unclear how much remains (progress indication), unclear if the last action worked (feedback)? Where might they want to go back, and does back work without data loss?
3. EFFORT MAP: per step, what the user must produce (typing, choices, finding documents) — flag the highest-effort step; is it as late as possible (commitment escalation) or does heavy effort come before value is shown?
4. EXIT POINTS: where users most plausibly abandon and the trigger at that point (cross-check against my drop-off data if provided — explain or challenge the data's story)
5. ERROR PATHS: what happens at each step when things go wrong (validation, timeout, interruption — close tab and return?) — is progress preserved?

Output: flow table (step / purpose / friction found / severity / fix) → the 3 changes with highest expected impact, with reasoning → questions the flow can't answer without testing real users.`,
    outputFormat: "ตาราง step/friction/severity/fix + top 3 changes + คำถามที่ต้อง test กับ user จริง",
    constraints: ["เดินตาม user จริง ไม่ใช่ตามแผนผังของทีม", "ทุก step ต้อง justify จากฝั่ง user", "เทียบกับ drop-off data ถ้ามี", "แยกสิ่งที่ AI ตอบไม่ได้ → ต้อง test จริง"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["user-flow", "review", "friction"],
    exampleInput: "Flow สมัครบัญชีร้านค้า 6 steps + screenshots / drop หนักที่ step 4 (อัปโหลดเอกสาร)",
    expectedOutputPreview: "Step 4 อัปโหลดเอกสาร: effort สูงสุดแต่อยู่ก่อน user เห็น dashboard — เลื่อนไปหลัง first value ได้... Top 1: ย้าย step 4 ไปเป็น activation gate แทน signup gate...",
  },
  {
    id: "ux-review-conversion",
    title: "Conversion UX Review",
    audience: "ux-review",
    level: "intermediate",
    useCase: "ตรวจหน้า/funnel ที่ conversion ต่ำ — หาว่าอะไรกั้นระหว่าง intent กับ action",
    inputRequired: ["หน้า/funnel ที่จะตรวจ (screenshot/URL)", "Conversion ปัจจุบัน + benchmark ถ้ารู้", "Traffic มาจากไหน intent ระดับไหน", "Action ที่นับเป็น conversion"],
    promptText: `You are a CRO specialist reviewing for conversion blockers — what stands between a user's intent and the action.

Page/funnel: [SCREENSHOTS/URL]. Conversion event: [ACTION]. Current rate: [X% if known] vs expectation: [BENCHMARK]. Traffic: [SOURCE + INTENT LEVEL — cold ad click? warm referral? returning user?].

Review through the conversion lens only:
1. VALUE CLARITY: within 5 seconds — what's offered, what do I get, what does it cost (money/time/data)? Quote what the page actually says vs what it should establish for THIS traffic temperature
2. FRICTION INVENTORY: every action between arrival and conversion (clicks, fields, choices, reading) — which are necessary vs removable/deferrable? Count them; propose the shorter path
3. ANXIETY POINTS: moments asking commitment before giving confidence — payment before total is clear, signup before value shown, personal data without reason; what reassurance exists AT each point (not in a footer)?
4. DISTRACTION: competing CTAs, exit paths, links leading away near the conversion point — what can leave?
5. MOTIVATION GAPS: where interest plausibly dies — weak proof, unanswered objections (price? trust? effort?), benefit stated as features
6. MOBILE: all of the above at 375px where most paid traffic lands — CTA reachability, form usability

Output: blocker table (location / blocker / type: friction-anxiety-distraction-motivation / severity / fix) → top 3 by expected impact with reasoning → A/B test plan for the #1 (hypothesis, variant, metric, success threshold). Separate clearly: defects (something broken/missing) vs hypotheses (needs testing).`,
    outputFormat: "ตาราง blocker แยก type + top 3 + A/B plan ของข้อแรก + แยก defect/hypothesis",
    constraints: ["เลนส์ conversion เท่านั้น ไม่วิจารณ์ความสวย", "นับ friction เป็นตัวเลข", "Reassurance ต้องอยู่ ณ จุด anxiety ไม่ใช่ footer", "แยก defect กับ hypothesis ชัด"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["conversion", "cro", "funnel"],
    exampleInput: "หน้า signup SaaS / conversion 1.2% จาก ads / นับ: สร้างบัญชีสำเร็จ",
    expectedOutputPreview: "Anxiety: ขอเบอร์โทรโดยไม่บอกเหตุผล (field นี้ลดได้)... Friction: 9 fields → เหลือ 3 ได้... Top 1: ตัด field + ย้าย social proof ขึ้น — A/B: hypothesis...",
  },
  {
    id: "ux-review-cognitive-load",
    title: "Cognitive Load Review",
    audience: "ux-review",
    level: "advanced",
    useCase: "หน้าที่ user บอกว่า 'ดูยาก ใช้ยาก' แต่ชี้ไม่ถูกว่าตรงไหน — ตรวจภาระการคิดอย่างเป็นระบบ",
    inputRequired: ["Screenshot หน้าที่จะตรวจ", "Task หลักของ user บนหน้านี้", "User เป็นใคร ใช้บ่อยแค่ไหน (daily expert vs first-timer)"],
    promptText: `You are a UX reviewer specializing in cognitive load — measuring how much thinking a screen demands vs how much the task actually requires.

Screen: [SCREENSHOT]. User's task here: [TASK]. User profile: [first-timer vs daily expert — load tolerance differs radically].

Audit the thinking burden:
1. DECISION COUNT: every decision the user must make to complete the task (what to read first, which of N similar actions, what a label means, whether settings matter now) — count them; per decision: necessary for the task, or created by the design?
2. WORKING MEMORY: what must the user HOLD in their head while moving through the task (codes to remember across screens, comparisons without side-by-side view, meanings of unlabeled icons)? Each item is load — can the interface hold it instead?
3. READING TAX: text the user must read vs text that helps — walls of copy guarding simple actions, labels that need interpretation ("Manage preferences" meaning what?), jargon requiring translation
4. VISUAL SEARCH: for the main task, how findable is each needed element — competing emphasis, weak grouping (related things apart, unrelated things together), inconsistent patterns that break learned expectations
5. AMBIENT NOISE: elements irrelevant to the task that still demand processing (badges, promos, decorative variety) — attention is the budget
6. EXPERT VS NOVICE CHECK: against my stated user — first-timers need guidance, daily users need density and shortcuts; flag mismatches in either direction (over-explained for experts is also load)

Output: load inventory (item / type: decision-memory-reading-search-noise / necessary? / fix) → the 3 highest-load items with simplification proposals → what the simplified screen sacrifices (be honest about tradeoffs).`,
    outputFormat: "Load inventory แยกประเภท + top 3 พร้อมข้อเสนอ + tradeoff ที่ต้องแลก",
    constraints: ["นับ decision เป็นตัวเลขจริง", "แยก load ที่จำเป็นกับที่ design สร้างเอง", "Calibrate กับ user profile ที่ให้", "บอก tradeoff ของการ simplify ตรงๆ"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["cognitive-load", "simplicity", "review"],
    exampleInput: "หน้าตั้งค่าการแจ้งเตือน 24 toggle / task: ปิดอีเมลโปรโมชัน / user ใช้ครั้งแรก",
    expectedOutputPreview: "Decisions: 24 toggles ไม่จัดกลุ่ม = scan ทุกตัว... Fix: จัด 4 กลุ่ม + กลุ่ม 'การตลาด' มี master toggle... Tradeoff: power user เสีย 1 คลิกเพิ่มต่อการตั้งละเอียด...",
  },
  {
    id: "ux-review-onboarding",
    title: "Onboarding Review",
    audience: "ux-review",
    level: "intermediate",
    useCase: "ตรวจ onboarding ที่ activation ต่ำ — หาว่า user ใหม่หลุดตรงไหนก่อนถึง first value",
    inputRequired: ["Onboarding ทุก step (screenshots)", "Aha moment ของ product", "Activation data ถ้ามี (% ผ่านแต่ละ step)"],
    promptText: `You are a product designer specializing in activation, reviewing an onboarding flow.

Onboarding steps: [SCREENSHOTS IN ORDER]. The product's aha moment — first real value a new user experiences: [DESCRIBE]. Activation funnel data: [PER-STEP % IF AVAILABLE].

Review against one question: how fast does this get a new user to real value?
1. PATH AUDIT: per step — does it move the user toward first value (collects something REQUIRED for it) or delay it (feature tour, survey, preferences that could default)? Tag each: value-critical / deferrable / cut
2. EFFORT-BEFORE-VALUE: total user effort (fields, decisions, integrations) demanded BEFORE anything valuable happens — the core metric of onboarding debt; where's the first moment a user could think "oh, this is useful"? Can anything pull that moment earlier (sample data, templates, instant preview)?
3. MOTIVATION FRAMING: does each ask explain WHY in value terms ("connect your bank so we can build your P&L" vs "connect your bank")? Quote the actual copy and rewrite the weak ones
4. ESCAPE HATCHES: per step — skippable? What happens after skip (sensible default vs broken empty product)? Forced steps need justification
5. EMPTY-PRODUCT LANDING: where does onboarding END — into a usable populated state, or an empty dashboard that restarts the cold-start problem? The post-onboarding screen is part of onboarding.
6. DATA CROSS-CHECK: my funnel numbers vs your analysis — does the big drop match your predicted worst step? If not, what would explain it?

Output: step table (step / tag / effort / fix) → revised flow proposal (steps to first value: current N → proposed M) → copy rewrites → instrumentation gaps if data was missing.`,
    outputFormat: "ตาราง step/tag/effort/fix + flow ใหม่ (เทียบจำนวน step) + copy rewrites",
    constraints: ["ทุก step ต้อง tag: value-critical/deferrable/cut", "หา first value moment ให้เร็วขึ้นเสมอ", "Quote copy จริงก่อน rewrite", "เทียบ funnel data ถ้ามี"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["onboarding", "activation", "review"],
    exampleInput: "Onboarding 7 steps ของแอปจัดการโปรเจกต์ / aha: เห็น board พร้อม task จริง / step 5 (เชิญทีม) drop 40%",
    expectedOutputPreview: "Step 5 เชิญทีม: tag=deferrable — บังคับเชิญก่อนเห็น board เลยหลุด... Flow ใหม่: 7 → 3 steps, board พร้อม template ใน step 3, เชิญทีมย้ายไป prompt หลังสร้าง task ที่ 3...",
  },
  {
    id: "ux-review-landing-page",
    title: "Landing Page Review",
    audience: "ux-review",
    level: "basic",
    useCase: "ตรวจ landing page ก่อนเปิดแคมเปญ หรือเมื่อ bounce สูง — message match, จอแรก, ลำดับ objection, CTA",
    inputRequired: ["Screenshot เต็มหน้า (desktop + mobile)", "Ad/source ที่พา traffic มา + ข้อความ ad", "CTA ที่ต้องการ", "Proof ที่มีจริง"],
    promptText: `You are a landing page CRO reviewer. Audit this page as a stranger arriving from the ad.

Page: [FULL-PAGE SCREENSHOT, DESKTOP + MOBILE]. Visitor came from: [SOURCE + EXACT AD COPY]. Conversion action: [CTA]. Proof that exists: [LIST].

Walk top-to-bottom as that stranger:
1. FIRST VIEWPORT (judge 375px first): in 5 seconds — what is sold? what do I get? what do I do next? Quote the actual headline; does it CONTINUE the ad's promise or start a new conversation (message match — the #1 killer)? Is the primary CTA visible without scrolling?
2. SECTION-BY-SECTION: per section — which buyer objection does it answer (is this real? does it work for someone like me? what does it cost? how hard is it to start? can I trust you?)? Sections answering no objection: cut candidates. Objections nothing answers: gaps.
3. PROOF QUALITY: is evidence specific (numbers, names, recognizable logos) or decorative ("trusted by thousands")? Is it placed BEFORE the commitment ask?
4. CTA AUDIT: count distinct action types — competing CTAs (trial vs demo vs download) split conversions; judge label (outcome-driven vs generic); mobile: first CTA position + sticky behavior
5. LEAKS: links/menus leading away before conversion — what can go?
6. SPEED READ TEST: read only headlines + bold text + CTA labels (how real visitors read) — does the page still make its case?

Output: scorecard per area (viewport / message match / sections / proof / CTA / leaks — pass/fix per item) → rewritten hero (headline + subhead + CTA) → section verdicts (keep/fix/cut + which objection) → top 3 changes ranked by expected impact.`,
    outputFormat: "Scorecard + hero ที่เขียนใหม่ + verdict ต่อ section + top 3 changes",
    constraints: ["ตัดสินจาก 375px ก่อน", "Headline ต้องเทียบกับ ad copy คำต่อคำ", "ทุก section ต้อง map กับ objection", "ห้ามแต่ง proof ใหม่ — ใช้ที่มีจริง"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["landing-page", "conversion", "review"],
    exampleInput: "Landing คอร์สออนไลน์ + ad: 'เขียนโค้ดเป็นใน 30 วัน' / CTA: ลงทะเบียน / proof: นักเรียน 3,200 คน",
    expectedOutputPreview: "Viewport fail: headline 'ปลดล็อกศักยภาพ' ไม่ match ad '30 วัน'... Section 2 (ประวัติสถาบัน) ไม่ตอบ objection ไหน → cut... Hero ใหม่: 'เขียนโค้ดเป็นใน 30 วัน — เรียนวันละ 1 ชม.'...",
  },
  {
    id: "ux-review-saas-dashboard",
    title: "SaaS Dashboard Review",
    audience: "ux-review",
    level: "advanced",
    useCase: "ตรวจ dashboard ที่มีอยู่: widget ไหนตอบคำถามจริง อันไหนเป็นเฟอร์นิเจอร์ — และ hierarchy ตรง priority ไหม",
    inputRequired: ["Screenshot dashboard", "Role ของ user + คำถามที่เขาเปิดมาตอบ", "Usage data ถ้ามี (widget ไหนถูกคลิก/ignore)"],
    promptText: `You are a product designer reviewing a SaaS dashboard against the only standard that matters: does it answer the user's real questions?

Dashboard: [SCREENSHOT]. User: [ROLE], opens it [FREQUENCY] to answer: 1) [Q1] 2) [Q2] 3) [Q3]. Usage data: [CLICKS/IGNORES IF KNOWN].

Audit:
1. WIDGET-TO-QUESTION MAP: per widget — which stated question does it answer? Widgets answering none (vanity metrics, data-because-we-have-it) → furniture, flag for removal; questions NO widget answers → gaps
2. DISPLAY FITNESS: per surviving widget — does its display type fit its question? (status questions need a number + threshold, not a 30-day chart; "which items need action" needs an actionable list, not an aggregate count; part-of-whole is the only donut justification)
3. HIERARCHY VS PRIORITY: does visual prominence (size, position) match question priority? Q1 should dominate top-left; equal-card-grid = abdicated hierarchy
4. ACTIONABILITY: per widget — when it shows something needing attention, what does the user DO from there? Dead-end widgets (see problem, hunt elsewhere to act) get drill-down fixes
5. ATTENTION HONESTY: can the user tell normal from needs-attention at a glance (thresholds, alert states)? Or does everything look equally calm/urgent?
6. FIRST-GLANCE TEST: describe what the eye hits in the first 3 seconds — is that the most important thing?
7. DENSITY CHECK: for a [FREQUENCY] user — too sparse (marketing whitespace wasting a power tool) or too dense (first-week user lost)?

Output: widget verdict table (widget / question answered / display fit / action / verdict: keep-fix-cut) → gap list (unanswered questions + proposed widget) → layout rework (what moves where and why) → before/after widget count.`,
    outputFormat: "ตาราง verdict ต่อ widget + gap list + layout ใหม่ + จำนวน widget ก่อน/หลัง",
    constraints: ["ทุก widget ต้อง map กับคำถามหรือโดน flag", "Display type ต้อง justify กับชนิดคำถาม", "เทียบ usage data ถ้ามี", "Hierarchy ต้องตรง priority ของคำถาม"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["dashboard", "saas", "review"],
    exampleInput: "Dashboard ผู้จัดการคลังสินค้า 9 widgets / คำถาม: ของค้างส่ง? สต็อกวิกฤต? ทีมงานพอไหม / data: donut ถูก ignore 100%",
    expectedOutputPreview: "Furniture: donut สัดส่วน supplier (ไม่ตอบคำถามไหน, usage 0)... Gap: 'ทีมงานพอไหม' ไม่มี widget... Layout: ของค้างส่ง (Q1) ย้ายจากแถวล่างขึ้น hero...",
  },
  {
    id: "ux-review-mobile",
    title: "Mobile UX Review",
    audience: "ux-review",
    level: "intermediate",
    useCase: "ตรวจประสบการณ์มือถือทั้งหน้า/flow: thumb reach, touch target, จอแรก, keyboard, สถานการณ์ใช้จริง",
    inputRequired: ["Screenshots หน้าจอมือถือ (375px)", "Task หลักบนมือถือ", "Context การใช้ (เดิน? รีบ? เน็ตช้า?)"],
    promptText: `You are a mobile UX specialist reviewing screens as they're actually used — one thumb, on the move, imperfect connection.

Screens: [375px SCREENSHOTS]. Primary mobile task: [TASK]. Usage context: [e.g. "commuting, one-handed, in a hurry"].

Review:
1. THUMB GEOGRAPHY: where are the primary actions vs the one-handed reach zone (bottom two-thirds)? Critical actions in top corners = stretch or grip-shift; destructive actions adjacent to frequent ones = misfire risk. Map each key action to its zone.
2. TARGET AUDIT: interactive elements below ~44px or packed without spacing — list each with location; text links in body copy are usual offenders
3. FIRST VIEWPORT: does the top task start without scrolling? What's consuming the viewport instead (oversized hero, stacked banners, cookie+notification+install prompts — count the layers of junk before content)?
4. INPUT BURDEN: per text field — could it be a picker/toggle/default instead? Correct keyboard type per field? Autofill wired? Typing on mobile is 3x the cost of desktop.
5. INTERACTION HONESTY: hover-dependent anything (tooltips, reveals)? Gestures without visible alternatives? Horizontal scroll regions without affordance?
6. INTERRUPTION RESILIENCE: per my context — mid-task interruption (app switch, lock screen): is state preserved on return? Slow connection: what does the user see (skeleton vs blank vs spinner-forever)?
7. READING CONDITIONS: text size/contrast for outdoor glance-reading if context demands it

Output: findings table (issue / location / context-severity / fix) — severity judged against MY stated context, not generic rules → thumb-zone remap of key actions → the 3 changes that matter most for the stated task.`,
    outputFormat: "ตาราง findings + thumb-zone remap + top 3 สำหรับ task ที่ระบุ",
    constraints: ["Severity ตัดสินจาก context ที่ให้ ไม่ใช่กฎกลางๆ", "Map ทุก action หลักกับ reach zone", "นับ junk layers ก่อนถึง content", "ทุก gesture ต้องมีทางเลือกที่มองเห็น"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["mobile", "touch", "review"],
    exampleInput: "แอปสั่งอาหาร 4 จอ / task: สั่งเมนูเดิมซ้ำ / context: พักเที่ยง รีบ มือเดียว",
    expectedOutputPreview: "ปุ่ม 'สั่งอีกครั้ง' อยู่ใน overflow menu มุมบนขวา — task หลักของ user รีบกลับซ่อนลึกสุด... Top 1: ปุ่มสั่งซ้ำขึ้น card แรก ล่างขวาใน thumb zone...",
  },
  {
    id: "ux-review-navigation",
    title: "Navigation Review",
    audience: "ux-review",
    level: "intermediate",
    useCase: "ตรวจโครง navigation: label งง, ของหายาก, เมนูจัดตามผังองค์กรไม่ใช่ตามหัว user",
    inputRequired: ["โครง nav ทั้งหมด (ทุกระดับ)", "Top tasks 5 อันดับของ user", "Search log / 'หาไม่เจอ' feedback ถ้ามี"],
    promptText: `You are an information architecture reviewer auditing navigation.

Navigation structure: [PASTE FULL NAV TREE, ALL LEVELS]. Users' top 5 tasks: [LIST]. Evidence of confusion: [SEARCH LOGS / SUPPORT "WHERE IS X" / IF ANY].

Audit:
1. TASK WALKTHROUGH: per top task — walk the nav as a user: which label would they click first (would they?), how many levels to the destination, where would they plausibly go WRONG (two labels that could both hold it = guaranteed misclicks)? Score each task: direct / findable-with-effort / lost
2. LABEL AUDIT: per nav item — does the label predict its contents in user language? Flag: internal jargon (org-chart names, feature codenames), vague buckets ("Resources", "More", "Tools"), overlapping pairs (Settings vs Preferences vs Account — what's the rule?)
3. STRUCTURE LOGIC: is the grouping by user mental model or by org structure/database schema? Items grouped by which TEAM built them = org-chart navigation; flag it
4. DEPTH VS BREADTH: items buried 3+ levels that serve top tasks; first-level crowding (>7 items = scanning cost); single-child branches (a menu opening to one item)
5. CURRENT-LOCATION CLARITY: from a deep page — does the user know where they are (highlighted nav state, breadcrumb) and how to get back/up?
6. CROSS-CHECK: my confusion evidence vs your analysis — do the "where is X" complaints match your predicted lost-tasks?

Output: task walkthrough scores → label verdict table (label / problem / rename proposal) → restructure proposal (move list: item / from / to / why) → what to validate with tree-testing before committing (this is hypothesis, not fact).`,
    outputFormat: "คะแนนต่อ task + ตาราง label + ข้อเสนอย้ายโครง + รายการที่ควร tree-test ก่อน",
    constraints: ["เดินตาม top tasks จริง ไม่ใช่ดูสวยงามของ tree", "Label ต้องทายเนื้อในได้", "Flag org-chart navigation", "ข้อเสนอ = hypothesis ต้อง tree-test"],
    bestUsedWith: ["Claude", "ChatGPT"],
    tags: ["navigation", "ia", "labels"],
    exampleInput: "Nav SaaS 3 ระดับ 32 รายการ / top task: ออกใบแจ้งหนี้ / support ถาม 'ใบเสร็จอยู่ไหน' บ่อย",
    expectedOutputPreview: "Task 'ออกใบแจ้งหนี้': lost — อยู่ใต้ 'เครื่องมือ > เอกสาร' แต่ user หาใน 'การเงิน'... Rename: 'เครื่องมือ' → แตกเข้า 'การเงิน'... Tree-test: 2 โครงเทียบกัน 15 คน...",
  },
  {
    id: "ux-review-form",
    title: "Form UX Review",
    audience: "ux-review",
    level: "basic",
    useCase: "ตรวจฟอร์มที่ completion ต่ำ: field เกินจำเป็น, ลำดับผิด, validation ทำร้าย user, error ไม่ช่วยแก้",
    inputRequired: ["Screenshot ฟอร์ม + ทุก field", "Business ใช้ field ไหนจริงบ้าง", "Drop-off / error data ถ้ามี", "Context (มือถือ? เร่งด่วน?)"],
    promptText: `You are a form UX reviewer. Audit this form for completion blockers.

Form: [SCREENSHOT + FIELD LIST]. Purpose: [WHAT SUBMITTING ACHIEVES]. Which fields the business actually uses: [BREAKDOWN IF KNOWN]. Data: [DROP-OFF / ERROR RATES IF ANY]. Context: [DEVICE/SITUATION].

Audit:
1. FIELD JUSTIFICATION: per field — required for THIS transaction, deferrable to later, derivable automatically, or never-used collection? Every unnecessary field is measurable completion loss; produce the verdict column
2. ORDER & GROUPING: easy-to-hard? Sensitive/personal asks placed after commitment builds? Related fields grouped with visible logic? Single column (multi-column = skipped fields)?
3. LABELS & GUIDANCE: labels persistent (not placeholder-as-label that vanishes on focus)? Format expectations shown BEFORE typing (example or mask)? Required/optional marked on the minority? Help text where real questions exist — quote any label a user could misread
4. VALIDATION BEHAVIOR: when does it fire (keystroke = punishing typists mid-word; blur = correct)? Error messages — quote each: does it say what's wrong AND how to fix ("รหัสผ่านต้องมี 8 ตัวอักษร" vs "invalid")? Errors adjacent to fields or pooled at top?
5. FAILURE SAFETY: submit fails (server/network) — does entered data survive? THE cardinal sin check
6. MOBILE: keyboard types per field, target sizes, autofill support
7. EFFORT TALLY: total keystrokes + decisions for an average completion — then the same tally for your proposed version

Output: field verdict table → issue list (issue / severity / fix with rewritten copy where relevant) → proposed form (field order + types) → effort tally before/after.`,
    outputFormat: "ตาราง verdict ต่อ field + issues พร้อม copy ใหม่ + ฟอร์มใหม่ + effort เทียบ",
    constraints: ["ทุก field ต้องมี verdict", "Quote error message จริงก่อนตัดสิน", "เช็ค data survival ตอน fail เสมอ", "นับ effort เป็นตัวเลข"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["form", "validation", "review"],
    exampleInput: "ฟอร์มขอใบเสนอราคา 11 fields / ใช้จริง: ชื่อ อีเมล ความต้องการ / กรอกจากมือถือ 65%",
    expectedOutputPreview: "Verdict: ที่อยู่บริษัท = never-used → cut, งบประมาณ = defer ไปตอน sales คุย... Error 'ข้อมูลไม่ถูกต้อง' → 'กรุณาใส่อีเมลในรูปแบบ name@company.com'... Effort: 96 → 31 keystrokes",
  },
  {
    id: "ux-review-trust",
    title: "Trust & Credibility Review",
    audience: "ux-review",
    level: "intermediate",
    useCase: "ตรวจว่าหน้า/flow ดูน่าเชื่อพอให้คนกล้ากรอกข้อมูล/จ่ายเงินไหม — โดยเฉพาะ brand ที่คนยังไม่รู้จัก",
    inputRequired: ["Screenshots หน้า/flow ที่ขอ commitment", "Brand เป็นที่รู้จักแค่ไหน", "Trust assets ที่มีจริง (ลูกค้า, รีวิว, มาตรฐาน, นโยบาย)"],
    promptText: `You are a trust & credibility reviewer — auditing whether this product earns enough confidence at each commitment point for a skeptical stranger to proceed.

Screens: [SCREENSHOTS, ESPECIALLY WHERE USERS COMMIT — signup, payment, data entry]. Brand recognition: [unknown startup / known brand]. Real trust assets available: [client names, review counts, certifications, policies, team info].

Audit as a skeptical first-time visitor:
1. COMMITMENT MAP: every point asking for something (email, personal data, card, money) — at each: what reassurance exists AT that exact moment (not on an About page)? The ask-to-reassurance gap is the metric
2. PROOF SPECIFICITY: per trust signal — specific & verifiable (real client names, "4.6★ จาก 218 รีวิว", linked case study) vs decorative ("ลูกค้ากว่าพันราย", unattributed quotes, award badges that link nowhere)? Decorative proof can REDUCE trust for skeptical users; flag it
3. RISK REVERSAL: at the payment/commitment point — is the riskiest question answered (ยกเลิกได้ไหม? เงินคืนไหม? ข้อมูลเอาไปทำอะไร?)? Are policies findable AT the decision, in human language?
4. PROFESSIONAL SIGNAL SWEEP: broken images, lorem ipsum remnants, outdated copyright year, dead links, inconsistent styling, typos — each is small; together they read "abandoned"; list every instance
5. CONTACT REALITY: can the visitor see real humans are behind this (address, real support channel with response expectation, team)? Anonymous products asking for money face a steep penalty
6. DARK-PATTERN SCAN: countdown timers that reset, fake scarcity, pre-checked add-ons, hidden costs revealed late — short-term conversion, permanent trust damage; flag any
7. ASSET GAP: trust assets I listed that exist but DON'T appear where they'd work hardest

Output: commitment-point table (ask / reassurance present / gap / fix) → proof verdicts (signal / specific-or-decorative / action) → professionalism fix list → asset placement proposals.`,
    outputFormat: "ตาราง commitment-point + verdict ต่อ proof + fix list + ข้อเสนอวาง asset",
    constraints: ["Reassurance ต้องอยู่ ณ จุด ask", "แยก proof จริงกับ proof ประดับ", "เก็บ professional defect ทุกจุด", "Flag dark pattern ตรงๆ"],
    bestUsedWith: ["Claude", "ChatGPT (vision)"],
    tags: ["trust", "credibility", "conversion"],
    exampleInput: "Checkout ของแบรนด์ใหม่ + มีจริง: รีวิว 4.7 (89), คืนเงิน 30 วัน, ที่อยู่บริษัท",
    expectedOutputPreview: "จุดกรอกบัตร: ไม่มี reassurance ใดๆ — นโยบายคืนเงิน 30 วันมีจริงแต่อยู่ใน footer... ย้าย 'คืนเงินใน 30 วัน' + รีวิว 4.7 มาข้างปุ่มจ่าย... Dark pattern: ประกันสินค้า pre-checked — เอาออก",
  },
];
