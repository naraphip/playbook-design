import type { PromptItem } from "@/types/playbook";

export const CLAUDE_CODE_PROMPTS: PromptItem[] = [
  {
    id: "claude-code-audit-repo",
    title: "Audit Repo Before Editing",
    audience: "claude-code",
    level: "basic",
    useCase: "ให้ Claude Code สำรวจ codebase ให้เข้าใจก่อนแก้ — ป้องกันการแก้ที่พังของเดิมเพราะไม่รู้โครงสร้าง",
    inputRequired: ["เป้าหมายของงานที่จะทำหลัง audit", "ขอบเขตที่สนใจ (UI components? data layer? ทั้ง repo?)"],
    promptText: `Before making any edits, audit this repository and report back. Do not change any files yet.

My goal after this audit: [WHAT I PLAN TO CHANGE].

Investigate and report:
1. STRUCTURE: framework + version (check package.json AND lock file), routing approach, where pages/components/data/styles live — the actual organization, not assumptions
2. CONVENTIONS: how existing code does things I'll touch — component patterns (composition style, props conventions), styling approach (tokens? utility classes? CSS modules?), state management, naming patterns. Quote 2-3 representative examples.
3. RELEVANT SURFACE: files my goal will touch — list them with one line each on their role and what imports them (blast radius)
4. LANDMINES: anything that makes my goal riskier than it looks — duplicated logic that must change together, implicit couplings, generated files, version-specific APIs that differ from common docs (check local docs in node_modules if the project warns about this)
5. QUALITY GATES: what verification exists — typecheck/lint/test/build commands from package.json, CI config — and confirm they currently PASS (run them) so we know the baseline before I change anything
6. RECOMMENDATION: given all this, the safest implementation order for my goal, smallest reviewable steps first

Output: the 6 sections above, concise. Flag anything that contradicts my goal's assumptions explicitly — I'd rather rescope now than mid-edit.`,
    outputFormat: "รายงาน 6 หัวข้อ: structure / conventions / surface / landmines / gates / แผนลำดับการแก้",
    constraints: ["ห้ามแก้ไฟล์ใดๆ ในขั้นนี้", "รัน quality gates เพื่อรู้ baseline จริง", "Quote ตัวอย่าง convention จาก code จริง", "Flag ข้อขัดแย้งกับเป้าหมายทันที"],
    bestUsedWith: ["Claude Code"],
    tags: ["audit", "exploration", "workflow"],
    exampleInput: "เป้าหมาย: เพิ่มหน้า /reports + ปรับ data layer / สนใจ: app router + src/data",
    expectedOutputPreview: "Next.js 16 App Router (มี breaking changes จาก docs ทั่วไป — อ่าน node_modules/next/dist/docs)... Convention: ทุก data file export const ARRAY + type จาก @/types... Baseline: tsc ผ่าน, lint มี warning 2 จุดที่มีอยู่เดิม...",
  },
  {
    id: "claude-code-refactor-architecture",
    title: "Refactor Component Architecture",
    audience: "claude-code",
    level: "advanced",
    useCase: "รื้อโครง component ที่โตจนพันกัน (พันบรรทัด, prop drilling, logic ปน render) แบบเป็นขั้นตอนปลอดภัย",
    inputRequired: ["Component/บริเวณที่จะ refactor", "ปัญหาที่รู้สึก (แก้อะไรนิดเดียวก็พังที่อื่น?)", "Test ที่มีอยู่"],
    promptText: `Refactor the component architecture at [PATH/COMPONENT] safely and incrementally.

Current pain: [WHAT'S HARD — e.g. 900-line component, prop drilling 5 levels, can't add a feature without breaking others]. Existing tests: [STATE].

Process — strictly in this order:
1. MAP FIRST: read the component(s) and produce the dependency picture — what state lives where, what flows down as props, what's duplicated, where render and logic tangle. Identify the 2-3 structural problems causing my pain (not cosmetic issues).
2. SAFETY NET: if test coverage on current behavior is thin, write characterization tests FIRST that pin down what it does today (key flows, edge behavior) — these must pass before and after every step
3. PLAN: propose the target structure (component split, where state moves, what becomes a hook/util) — with the refactor broken into independently-mergeable steps, each leaving the app working. Wait for my approval on the plan before editing.
4. EXECUTE step by step: one structural change per step (extract hook ≠ also renaming props ≠ also moving files — separate steps); after each, run typecheck + tests + build; show me the diff per step, not one mega-diff
5. BEHAVIOR FREEZE: zero behavior/visual changes in this task — anything you notice that SHOULD change behaviorally goes in a FOLLOW-UPS list, never mixed in
6. FINISH: final structure summary (before/after diagram), what got deleted, the follow-ups list

Constraints: each step's diff reviewable in <10 min; no new dependencies without asking; public component APIs that other files import stay stable unless the plan explicitly includes migrating call sites (then show those too).`,
    outputFormat: "Map + plan (รออนุมัติ) → diff ทีละ step + ผล verify → สรุป before/after + follow-ups",
    constraints: ["เขียน characterization tests ก่อนถ้า coverage บาง", "หยุดรออนุมัติ plan ก่อนแก้", "หนึ่ง structural change ต่อ step", "ห้ามเปลี่ยน behavior — แยกไป follow-ups", "Verify ทุก step"],
    bestUsedWith: ["Claude Code"],
    tags: ["refactor", "architecture", "testing"],
    exampleInput: "Dashboard.tsx 1,100 บรรทัด — เพิ่ม widget ใหม่ทีไรพัง filter ทุกที / ไม่มี test",
    expectedOutputPreview: "Map: filter state + data fetching + 6 widgets render ปนใน component เดียว, filter ถูก mutate จาก 3 ที่... Plan: step 1 เขียน test 4 flows, step 2 แยก useDashboardFilters...",
  },
  {
    id: "claude-code-extract-tokens",
    title: "Extract Design Tokens",
    audience: "claude-code",
    level: "intermediate",
    useCase: "ไล่หา hardcoded values ทั้ง codebase แล้วสกัดเป็น design tokens — งานที่คนทำเองสามสัปดาห์ AI ทำเป็นระบบได้",
    inputRequired: ["Token system ที่มีอยู่ (ถ้ามี) หรือ format ที่ต้องการ", "ขอบเขต (สี? spacing? ทั้งหมด?)", "ใครเป็นคนอนุมัติ mapping"],
    promptText: `Extract hardcoded design values across this codebase into design tokens — as a systematic, reviewable process.

Existing token system: [PATH TO TOKENS/THEME, or "none — propose structure"]. Scope this pass: [colors / spacing / typography / radii / shadows / all]. Mapping approval: I review before mass replacement.

Process:
1. INVENTORY: scan the codebase for hardcoded values in scope (hex/rgb/hsl, px/rem values in styles, inline styles, magic numbers in style props) — output a frequency table: value / occurrences / sample locations. Group near-duplicates (#6B7280 vs #6b7280 vs rgb equivalent; 15px next to 16px scale).
2. MAPPING PROPOSAL: map each value-group to an existing token (exact or nearest — show the delta) or propose a new token if a cluster has no home. Near-miss values (16.5px, #6A7280) are almost always drift from an intended token — propose snapping with the diff noted. STOP HERE for my approval.
3. REPLACE in batches after approval: one value-group per commit-sized batch, mechanical replacement, showing the diff; values I marked "snap" change appearance microscopically — list every visual-delta location for spot-checking
4. EDGE HANDLING: values in third-party overrides, generated files, or genuinely one-off contexts (e.g. a marketing page's intentional unique color) → SKIP list with reasons, don't force-tokenize
5. GUARD: add the lint rule / stylelint config that flags new hardcoded values in scope going forward — with the legitimate-exception escape hatch documented
6. VERIFY: typecheck + build after each batch; final report — tokens before/after count, values eliminated, skip list, the guard rule

Constraints: no behavior/layout changes; no new token without a clustered need (≥3 occurrences); batches small enough to review; I approve the mapping before any replacement.`,
    outputFormat: "Inventory table → mapping proposal (รออนุมัติ) → batch diffs + visual-delta list → skip list → lint guard → final report",
    constraints: ["หยุดรออนุมัติ mapping ก่อนแทนที่", "Token ใหม่ต้องมี ≥3 occurrences", "Snap values ต้อง list จุดที่ภาพเปลี่ยน", "เพิ่ม lint guard กัน drift ใหม่"],
    bestUsedWith: ["Claude Code"],
    tags: ["tokens", "design-system", "refactor"],
    exampleInput: "มี tailwind.config theme อยู่แล้ว / scope: สีก่อน / เจอ hardcode น่าจะ ~200 จุด",
    expectedOutputPreview: "Inventory: #6B7280 ×47 (= theme.gray.500), #6A7280 ×3 (drift — snap?), #FF6B35 ×12 (ไม่มี token — เสนอ accent-orange)... รออนุมัติก่อนแทน...",
  },
  {
    id: "claude-code-fix-types",
    title: "Fix TypeScript Types",
    audience: "claude-code",
    level: "intermediate",
    useCase: "ไล่แก้ type errors / any ที่สะสม — แก้ที่ต้นทาง type ไม่ใช่ปะ as / @ts-ignore เพิ่ม",
    inputRequired: ["ผล tsc --noEmit ปัจจุบัน หรือบริเวณที่ type หลวม", "ห้ามแตะอะไร (generated types? API contracts?)"],
    promptText: `Fix TypeScript type issues in this codebase properly — strengthening types at the source, never silencing errors.

Current state: [PASTE tsc --noEmit OUTPUT, or "no errors but lots of any/as — tighten scope: PATH"]. Off-limits: [generated files, API contract types, etc.].

Rules of engagement:
1. DIAGNOSE BY GROUP: cluster errors by root cause, not by file — 30 errors often trace to one wrong source type; fix the source, the cluster collapses. Show the cluster table first.
2. FIX DIRECTION: always strengthen, never suppress —
   - NO new "as" casts, @ts-ignore/@ts-expect-error, or any (existing ones you encounter: fix if in scope, list if not)
   - Fix the TYPE if it misdescribes reality (data shape changed, type didn't)
   - Fix the CODE if the type is right and code is wrong — flag these specially, they're potential runtime bugs the types just caught
3. UNKNOWN over any at genuine boundaries (JSON.parse, external data) — with proper narrowing/validation after
4. INFERENCE FIRST: prefer letting types flow (return-type inference, satisfies, const assertions) over annotating everything; derived types (Pick/Omit/typeof) over parallel hand-written shapes that will drift
5. ANY-DEBT REPORT: existing any/as/ts-ignore in touched files — fixed ones, plus a ranked list of remaining ones with what each would take to fix
6. VERIFY: tsc --noEmit clean after each cluster fix; tests/build still pass; no behavior changes — if a fix requires a behavior change (type caught a real bug), STOP and report it for my decision, don't silently change runtime behavior

Output: cluster table → fixes per cluster (diff + which direction: type-fix or code-fix) → potential-runtime-bugs flagged → any-debt report.`,
    outputFormat: "Cluster table + diff ต่อ cluster + bug จริงที่ type จับได้ (แยก flag) + any-debt report",
    constraints: ["ห้ามเพิ่ม as / @ts-ignore / any ใหม่", "แก้ที่ source type ไม่ใช่ปลายทาง", "Type จับ bug จริง → หยุดถามก่อนเปลี่ยน behavior", "tsc ต้อง clean ขึ้นทุก cluster"],
    bestUsedWith: ["Claude Code"],
    tags: ["typescript", "types", "quality"],
    exampleInput: "tsc เจอ 23 errors หลังอัปเดต data schema / ห้ามแตะ src/generated",
    expectedOutputPreview: "Cluster 1 (18 errors): UXTerm เปลี่ยน field แต่ component ยังอ่านชื่อเก่า → แก้ component 5 ไฟล์... Cluster 2 (1 error): โค้ดอ่าน field ที่ไม่เคยมีจริง — bug จริง, รอการตัดสินใจ...",
  },
  {
    id: "claude-code-improve-a11y",
    title: "Improve Accessibility",
    audience: "claude-code",
    level: "intermediate",
    useCase: "ให้ Claude Code ไล่ตรวจ + แก้ a11y ทั้งบริเวณ: semantic, keyboard, ARIA, focus — จาก code จริงที่มันอ่านได้ทั้งหมด",
    inputRequired: ["ขอบเขต (หน้า/flow/component ไหน)", "เป้าหมาย (WCAG AA?)", "แก้ component กลางได้ไหม"],
    promptText: `Audit and fix accessibility in [SCOPE: pages/components] to WCAG 2.2 AA. You can read every line of markup — use that advantage systematically.

Permissions: shared components [CAN / CANNOT] be modified. Design token changes: flag, don't apply.

Phase 1 — AUDIT (no edits): sweep the scope for:
1. SEMANTICS: div/span doing interactive work (onClick without role/tabindex/keyboard), heading-level jumps, fake lists, missing landmarks, images without alt decisions
2. NAMES: every interactive element's computed accessible name — icon buttons are the usual suspects; inputs without associated labels
3. KEYBOARD: custom widgets vs their ARIA APG pattern (name the pattern per widget); focus management in overlays (trap, restore, initial); focus-visible styling existence; tab order vs visual order
4. DYNAMIC: state changes that need announcements (aria-live), loading states (aria-busy), expanded/selected states reflected in ARIA
5. STRUCTURE: forms (fieldset/legend, error binding via aria-describedby), tables (th/scope/caption)
Output the findings table: issue / location / severity (blocker: keyboard-unusable or unnamed; major: wrong semantics, missing announcements; minor: polish) / root cause (shared component vs page code).

Phase 2 — FIX after I confirm: root-cause order (shared components first — one fix kills N instances), diffs per fix, no behavior/visual changes beyond focus styling. API changes that make violations impossible (required label props) preferred over call-site patches — show the call-site compile errors they surface as a TODO list.

Phase 3 — GUARD + HANDOFF: eslint-plugin-jsx-a11y rules this codebase should enable (only ones that would have caught today's findings); the manual test script (keyboard walk + screen reader checks) for what code analysis cannot verify.`,
    outputFormat: "Findings table (รอ confirm) → diffs เรียง root-cause → lint rules + manual test script",
    constraints: ["Audit ก่อน หยุดรอ confirm แล้วค่อยแก้", "แก้ shared component ก่อน page", "Token เปลี่ยน = flag ไม่ apply เอง", "ลงท้ายด้วยสิ่งที่ code analysis ตรวจไม่ได้"],
    bestUsedWith: ["Claude Code"],
    tags: ["accessibility", "audit", "wcag"],
    exampleInput: "ขอบเขต: checkout flow 3 หน้า / เป้า AA / แก้ component กลางได้",
    expectedOutputPreview: "Blockers: ปุ่มลบใน cart เป็น div ×8 (root: CartRow), modal ที่อยู่ไม่ trap focus... Fix 1: CartRow → button + aria-label จากชื่อสินค้า...",
  },
  {
    id: "claude-code-improve-performance",
    title: "Improve Performance",
    audience: "claude-code",
    level: "advanced",
    useCase: "หา + แก้ปัญหา performance จริงด้วยการวัดก่อนแก้ — ไม่ใช่ใส่ memo ทั่ว codebase ตามความเชื่อ",
    inputRequired: ["อาการที่รู้สึก (หน้าไหนช้า ตอนไหน)", "Metrics ถ้ามี (Lighthouse, Web Vitals)", "งบความเสี่ยง (แตะ data layer ได้ไหม)"],
    promptText: `Improve performance in [SCOPE] — measurement-driven, no cargo-cult optimization.

Symptoms: [WHAT FEELS SLOW, WHEN — e.g. "list page janks while typing in search"]. Existing metrics: [LIGHTHOUSE/VITALS IF ANY]. Risk budget: [what layers I can touch].

Process:
1. MEASURE FIRST: establish the baseline for the symptom — add timing instrumentation or use the build analyzer / React profiler patterns appropriate to this stack; identify the ACTUAL bottleneck with evidence (bundle size? render count? blocking data fetch? layout thrash?). Report findings with numbers before proposing anything.
2. DIAGNOSE: for the measured bottleneck, the root cause chain — e.g. "search input re-renders 400-row list because filter runs inline and list items aren't memoized AND each row creates new handler props." Distinguish architecture problems (data fetched too early/late, no pagination) from micro problems (missing memo) — architecture wins usually dwarf micro wins.
3. PROPOSE ranked by measured-impact ÷ risk: each item with expected improvement, risk, effort. STOP for approval if anything touches data flow or has behavior risk.
4. IMPLEMENT approved items one at a time — RE-MEASURE after each (same metric as baseline); an optimization that doesn't move the number gets REVERTED, not kept "because it can't hurt" (it costs complexity)
5. THE USUAL SUSPECTS to check for this stack, IF measurement points there: oversized client bundles / missing code-splitting on heavy routes, images without dimensions/lazy-loading, render storms from context/inline objects, missing list virtualization at scale, fetch waterfalls
6. GUARD: bundle-size budget or perf assertion in CI for the thing we just fixed

Constraints: no optimization without a baseline number; revert non-movers; no behavior changes; memo/useCallback only where profiling shows the win.

Output: baseline numbers → diagnosis → ranked proposals (approval gate) → per-fix before/after numbers → CI guard.`,
    outputFormat: "Baseline → diagnosis → proposals (รออนุมัติ) → ตัวเลข before/after ต่อ fix → CI guard",
    constraints: ["วัดก่อนแก้เสมอ มีตัวเลข baseline", "Optimization ที่ตัวเลขไม่ขยับ = revert", "หยุดขออนุมัติถ้าแตะ data flow", "ห้าม memo หว่านโดยไม่มี profiling"],
    bestUsedWith: ["Claude Code"],
    tags: ["performance", "profiling", "optimization"],
    exampleInput: "หน้า orders พิมพ์ search แล้วกระตุก / Lighthouse mobile 61 / แตะ data layer ได้",
    expectedOutputPreview: "Baseline: input ทุก keystroke re-render 380 แถว (~95ms)... Diagnosis: filter inline + ไม่มี virtualization... Fix 1: useDeferredValue + virtualize → 95ms เหลือ 8ms...",
  },
  {
    id: "claude-code-reusable-components",
    title: "Create Reusable Components",
    audience: "claude-code",
    level: "intermediate",
    useCase: "สกัด UI pattern ที่ถูก copy-paste หลายที่ให้เป็น component กลาง — เลือกสกัดเฉพาะที่ duplicate จริง ไม่ over-abstract",
    inputRequired: ["Pattern ที่เห็นว่าซ้ำ (หรือให้สแกนหา)", "โฟลเดอร์ component กลางอยู่ไหน", "Convention ของ component ที่มีอยู่"],
    promptText: `Extract duplicated UI patterns into shared components — judiciously, not aggressively.

Target pattern: [DESCRIBE, or "scan SCOPE for duplication candidates"]. Shared components live in: [PATH]. Follow conventions from: [EXAMPLE COMPONENT PATHS].

Process:
1. FIND THE REAL DUPLICATES: locate every instance of the pattern; build the variation table — what's identical, what differs per instance (content? behavior? styling?). This table decides everything.
2. EXTRACT-OR-NOT VERDICT per pattern, honestly:
   - 3+ instances, variations expressible as a few clear props → extract
   - 2 instances or variations need 8 boolean props to cover → DON'T extract (premature abstraction costs more than duplication); put it on a watch list instead
   - Similar-looking but semantically different things (a product card vs a user card that happen to look alike today) → DON'T merge; they'll diverge
3. API DESIGN before code: props interface driven by the variation table — composition (children/slots) over config-prop explosions; show 2-3 call-site examples FIRST so we see the API in use; match existing component conventions exactly
4. MIGRATE: build the shared component, migrate call sites one at a time (diff each), verify visual output unchanged per site — instances with slight differences from the canonical version: list each delta and whether it was intentional (keep via prop) or drift (normalize — flag the visual change)
5. DELETE the originals fully — no orphaned old copies left behind
6. Output: variation table + verdicts → API + example usage → migration diffs → drift-normalization list → watch list of not-yet-extracted patterns.

Constraints: no extraction below 3 real instances; composition over boolean-prop soup; every visual normalization flagged; existing conventions over personal preference.`,
    outputFormat: "ตาราง variation + verdict → API + ตัวอย่างใช้ → migration diffs → drift list → watch list",
    constraints: ["ต่ำกว่า 3 instances ไม่สกัด", "ของที่หน้าตาเหมือนแต่ความหมายต่าง ห้ามรวม", "ดู API จาก call site ก่อนเขียน implementation", "ลบของเดิมให้หมด"],
    bestUsedWith: ["Claude Code"],
    tags: ["component", "refactor", "dry"],
    exampleInput: "เห็น stat card คล้ายกันใน dashboard, reports, settings / กลางอยู่ src/components/ui",
    expectedOutputPreview: "เจอ 4 instances: เหมือนกัน 90% ต่างที่ icon+trend... Verdict: extract — StatCard{label,value,icon,trend?}... instance ใน settings ไม่มี trend และ padding แคบกว่า 4px — drift หรือตั้งใจ?...",
  },
  {
    id: "claude-code-clean-duplicate-logic",
    title: "Clean Duplicate UI Logic",
    audience: "claude-code",
    level: "intermediate",
    useCase: "รวม logic ที่ซ้ำกันหลายที่ (format วันที่ 3 เวอร์ชัน, filter เขียนใหม่ทุกหน้า) ให้เหลือแหล่งเดียว",
    inputRequired: ["Logic ที่สงสัยว่าซ้ำ (หรือให้สแกน)", "ที่อยู่ของ utils/hooks กลาง", "พฤติกรรมที่ต่างกันระหว่างที่ — อันไหนคือที่ถูก"],
    promptText: `Find and consolidate duplicated UI logic — the formatting, filtering, and state patterns rewritten slightly differently across pages.

Suspected duplication: [DESCRIBE, or "scan SCOPE"]. Shared utils/hooks live: [PATHS]. Known behavior differences: [e.g. "dates show differently on two pages — page A's format is correct"].

Process:
1. HUNT: find duplicated logic across the scope — same-purpose code with different implementations: formatters (dates/currency/truncation), validation rules, filter/sort logic, derived-state computations, fetch-and-transform patterns. For each: every location + implementation differences, however small.
2. THE DIFFERENCES ARE THE WORK: per duplicate group, classify each variation — BUG (two date formats where one is wrong: consolidation FIXES visible behavior — flag loudly, this changes the UI for users of the wrong version), INTENTIONAL (different contexts genuinely need different behavior — parameterize), ACCIDENT (drift nobody chose — normalize to the canonical version, flag visual/behavior delta)
3. CANONICAL DESIGN: one source of truth per group — pure util or hook per its nature; API covers legitimate variations via parameters, not copies; place per codebase convention; unit tests pinning the canonical behavior INCLUDING the edge cases the variants disagreed on
4. MIGRATE call sites one group at a time, diff per site; behavior-change sites (the BUG and ACCIDENT fixes) listed separately for explicit sign-off — these are user-visible
5. DELETE originals; add the import-path or lint guidance that points future code at the canonical version

Constraints: behavior changes only via the flagged BUG/ACCIDENT list with my sign-off; tests on the canonical version before migration; one group per reviewable batch.

Output: duplicate groups + variation classification → canonical implementation + tests → migration diffs → sign-off list of behavior changes.`,
    outputFormat: "กลุ่ม duplicate + classification → canonical + tests → diffs → รายการ behavior change รอ sign-off",
    constraints: ["จำแนกทุกความต่าง: bug / intentional / accident", "Behavior change ต้องผ่าน sign-off", "เขียน test ก่อน migrate", "ลบของเดิมหมด"],
    bestUsedWith: ["Claude Code"],
    tags: ["refactor", "dry", "utils"],
    exampleInput: "วันที่ format ต่างกัน 3 หน้า / utils อยู่ src/lib / หน้า orders คือ format ที่ถูก",
    expectedOutputPreview: "Group 1: formatDate ×3 — orders: 'd MMM yyyy', invoice: 'dd/MM/yy' (accident?), report: ไม่ handle null (bug — โชว์ 'Invalid Date')... canonical: formatDate(date, {style}) + test เคส null...",
  },
  {
    id: "claude-code-implement-ac",
    title: "Implement UI Acceptance Criteria",
    audience: "claude-code",
    level: "intermediate",
    useCase: "ส่ง AC (Given/When/Then) ให้ Claude Code implement ตรงตามเงื่อนไขครบทุกข้อ พร้อมหลักฐานว่าข้อไหนผ่านยังไง",
    inputRequired: ["AC ทั้งชุดของ story", "Design/spec ที่เกี่ยวข้อง", "บริเวณ code ที่เกี่ยวข้อง"],
    promptText: `Implement this UI story to satisfy every acceptance criterion exactly — and prove it.

Acceptance criteria:
[PASTE FULL AC LIST — Given/When/Then format]

Design/spec: [LINKS/PASTE — tokens, states, responsive rules]. Relevant code area: [PATHS].

Process:
1. AC ANALYSIS first: restate each criterion as you understand it + the implementation it implies; AMBIGUITIES — any criterion you could implement two ways, any state/case the AC doesn't cover that you'll hit while building (e.g. AC covers empty + error but not loading) — ask me NOW, list as numbered questions. Do not start coding with open questions on criteria you'll touch.
2. IMPLEMENT against the criteria — not just the happy path mockup: every Given/When/Then becomes working behavior; states the AC requires (loading/empty/error/responsive/keyboard) built, not deferred; follow existing codebase conventions and reuse shared components (flag if a needed component doesn't exist rather than silently cloning)
3. SELF-VERIFY before reporting — the AC table: criterion / status (pass/fail/partial) / HOW VERIFIED (what you ran, rendered, or tested — "implemented" is not verification) / evidence (test name, behavior description). Criteria you cannot verify in this environment (real device, screen reader): mark explicitly UNVERIFIED with what a human must check.
4. TESTS: where the project has a test setup, AC make natural test cases — write them (each test names its criterion); where it doesn't, the manual verification script per criterion
5. GAPS HONESTY: anything partial or failed stays in the table as partial/failed with what remains — do not round up to done.

Output: questions (if any — wait for answers) → implementation diffs → AC verification table → tests or manual script.`,
    outputFormat: "คำถามจุดกำกวม (รอตอบ) → diffs → ตาราง AC: ข้อ/สถานะ/วิธี verify/หลักฐาน → tests",
    constraints: ["ถามจุดกำกวมก่อนเริ่ม ไม่เดา", "ทุก AC ต้องมีวิธี verify ไม่ใช่แค่ 'ทำแล้ว'", "Verify ไม่ได้ในเครื่อง = mark UNVERIFIED ชัดๆ", "ห้าม round up เป็นเสร็จ"],
    bestUsedWith: ["Claude Code"],
    tags: ["acceptance-criteria", "implementation", "verification"],
    exampleInput: "AC 8 ข้อของหน้า order search (จาก ticket) + Figma link + src/app/orders",
    expectedOutputPreview: "คำถาม: AC#3 'แสดง skeleton' — กี่แถว? ใช้ OrderRowSkeleton ที่มีหรือสร้างใหม่?... ตาราง: AC#1 PASS — test 'shows empty state with clear button', AC#7 UNVERIFIED — ต้องทดสอบ VoiceOver จริง...",
  },
  {
    id: "claude-code-qa-after-changes",
    title: "Run QA After Changes",
    audience: "claude-code",
    level: "basic",
    useCase: "หลังแก้งานเสร็จ ให้ Claude Code ไล่ QA ทั้งชุด: gates, blast radius, states, integrity — ก่อนประกาศว่าเสร็จ",
    inputRequired: ["สิ่งที่เพิ่งเปลี่ยน (หรือให้อ่านจาก git diff)", "บริเวณเสี่ยงที่กังวลเป็นพิเศษ"],
    promptText: `Run full QA on the changes just made before we call this done. Changes: [SUMMARY, or "read git diff/status"]. Extra-worried about: [AREAS].

QA sequence:
1. GATES: run typecheck, lint, build, and tests (whatever this project has) — full output, not just exit codes; FIX what my changes broke; failures that PRE-DATE my changes: report, don't fix silently (separate concern)
2. BLAST RADIUS: from the diff, list everything that imports/uses what changed — then VERIFY each affected surface actually still works (render it, run its tests, trace the data flow — pick the strongest verification available here), not just "it compiles"
3. CHANGE-TYPE CHECKS, as applicable:
   - Data/schema changed → integrity: no duplicate ids, references resolve, required fields present (write a quick check script if none exists)
   - UI changed → states: loading/empty/error of affected components still render; responsive at key widths; keyboard path intact
   - Shared component changed → check call sites beyond the one I was working on (the classic regression)
   - Routes changed → all routes still build/render, old URLs handled
4. LEFTOVERS SCAN: debug artifacts in the diff (console.log, commented-out code, TODO I added but didn't resolve, unused imports/files from the old approach) — clean them
5. HONEST REPORT: what was verified and HOW / what passed / what I could NOT verify in this environment (visual fidelity, real devices, real data volume) as an explicit human-check list with steps — not silence
6. VERDICT: ready-to-ship, or the blocker list. Don't say done if 5 has critical unverified items — say "done pending: X".

Output: gate results → blast-radius verification table → leftovers cleaned → human-check list → verdict.`,
    outputFormat: "ผล gates → ตาราง blast-radius + วิธี verify → leftovers ที่ลบ → human-check list → verdict",
    constraints: ["รัน gates จริง แสดงผลจริง", "Failure ที่มีอยู่ก่อน = รายงาน ไม่แก้เงียบๆ", "ทุก affected surface ต้อง verify ไม่ใช่แค่ compile ผ่าน", "บอกชัดว่าอะไร verify ไม่ได้ในเครื่อง"],
    bestUsedWith: ["Claude Code"],
    tags: ["qa", "verification", "workflow"],
    exampleInput: "เพิ่งแก้ schema UXTerm + อัปเดต 5 components / กังวล: search กับหน้า detail",
    expectedOutputPreview: "Gates: tsc ✓, lint ✓, build ✓ (14 routes)... Blast radius: TERMS ถูก import 5 ที่ — search: รัน query ทดสอบ 3 คำ ✓... Human-check: ดู 375px จริงบนเครื่อง, demo แต่ละ type ในเบราว์เซอร์...",
  },
];
