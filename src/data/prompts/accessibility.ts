import type { PromptItem } from "@/types/playbook";

export const ACCESSIBILITY_PROMPTS: PromptItem[] = [
  {
    id: "a11y-wcag-full-audit",
    title: "WCAG 2.1 AA Full Audit",
    audience: "accessibility",
    level: "advanced",
    useCase: "ตรวจ accessibility ทั้งหน้า/flow แบบครบทุกหมวด WCAG AA — ได้ report จัดลำดับที่เอาไปวางแผนแก้ได้จริง",
    inputRequired: ["Code/markup ของหน้า (แม่นกว่า screenshot มาก)", "ค่าสีจาก palette", "Flow สำคัญที่ user ต้องทำได้", "ผล axe/Lighthouse ถ้ามี"],
    promptText: `You are an accessibility auditor performing a WCAG 2.1 AA audit.

Inputs: page markup/components: [PASTE CODE — far more accurate than screenshots]. Color values in use: [HEX PAIRS + WHERE USED]. Critical user flows that must work: [LIST]. Automated scan results if any: [AXE/LIGHTHOUSE OUTPUT].

Audit by WCAG principle, each finding mapped to its success criterion:
1. PERCEIVABLE: text alternatives (img alt decisions — meaningful vs decorative), heading structure (levels, jumps), contrast computed from provided values (1.4.3: 4.5:1 text, 3:1 large text; 1.4.11: 3:1 UI components), color-only information (1.4.1), reflow at 320px (1.4.10), text spacing survival (1.4.12)
2. OPERABLE: full keyboard path per critical flow (2.1.1) + no traps (2.1.2), focus visible (2.4.7) + logical order (2.4.3), skip link (2.4.1), target sizes, page titles + link purpose (2.4.4)
3. UNDERSTANDABLE: lang attribute (3.1.1), labels/instructions on inputs (3.3.2), error identification + suggestions (3.3.1, 3.3.3), consistent navigation (3.2.3), no context-change on focus/input (3.2.1/3.2.2)
4. ROBUST: valid ARIA (4.1.2 name-role-value for every interactive element — list each element with its computed name), status messages (4.1.3 aria-live where dynamic content changes)

Per finding: WCAG criterion / location / what's wrong / user impact (who's blocked, how badly) / fix (code-level where possible) / severity: BLOCKER (flow impossible for some users) / MAJOR / MINOR.

End with: (a) findings I could NOT assess from code alone — real screen reader behavior, actual zoom rendering — as a manual test script, (b) the remediation order: blockers by flow, then root-cause clusters (one shared-component fix > 20 page patches).

Constraints: every finding cites its criterion; no severity inflation — minor is minor; compute contrast, never eyeball it.`,
    outputFormat: "Findings ตาม 4 principles + criterion/severity/fix ทุกข้อ + manual test script + ลำดับการแก้",
    constraints: ["ทุก finding อ้าง WCAG criterion", "Contrast คำนวณจากค่าจริง", "แยกสิ่งที่ตรวจจาก code ไม่ได้เป็น manual script", "เรียงการแก้แบบ root-cause cluster"],
    bestUsedWith: ["Claude", "Claude Code"],
    tags: ["wcag", "audit", "accessibility"],
    exampleInput: "Markup หน้า checkout + palette 12 สี + flow: จ่ายเงินให้สำเร็จด้วย keyboard",
    expectedOutputPreview: "BLOCKER 2.1.1: ปุ่มเลือกวิธีจ่ายเป็น div ไม่รับ keyboard — flow จ่ายเงินเป็นไปไม่ได้... 1.4.3: text-secondary บน surface = 3.9:1 FAIL... Manual: VoiceOver อ่านลำดับ summary...",
  },
  {
    id: "a11y-color-contrast",
    title: "Color Contrast Check",
    audience: "accessibility",
    level: "basic",
    useCase: "ตรวจ contrast ทั้ง palette อย่างเป็นระบบ — ทุกคู่สีที่ใช้จริง พร้อมสีทดแทนสำหรับคู่ที่ตก",
    inputRequired: ["Palette ทั้งหมด (hex + ชื่อ token)", "คู่การใช้งานจริง (สีไหนวางบนสีไหน)", "ขนาด text ที่ใช้กับแต่ละคู่"],
    promptText: `You are an accessibility specialist auditing color contrast across a palette systematically.

Palette: [HEX + TOKEN NAMES]. Actual usage pairs: [FG-ON-BG COMBINATIONS AS USED — text-secondary on bg-surface, primary button label on primary bg, etc.]. Text sizes per pair: [WHICH PAIRS ARE LARGE TEXT ≥24px or ≥19px bold].

Task:
1. COMPUTE every provided pair: contrast ratio to 2 decimals → verdict against the correct threshold (normal text 4.5:1, large text 3:1, UI components & graphical objects 3:1, disabled elements exempt but note them)
2. STATE COVERAGE: the pairs people forget — hover/active variants, focus rings against adjacent backgrounds, placeholder text, error text on error backgrounds, text over images/gradients (worst-case sample point), selected-state text, dark mode equivalents if provided
3. FOR EACH FAILURE: the nearest PASSING color — adjust the failing color's lightness while preserving hue (give the exact hex), or pick the closest existing palette token that passes; show the before/after ratio; flag where the fix changes brand-prominent colors (needs design sign-off)
4. SYSTEMIC READ: failures clustering around one base color = scale problem (e.g. the gray ramp's middle steps are unusable on white) — say so and propose the scale fix, not 12 spot fixes
5. GUARDRAIL: the forbidden-combinations list (pairs that exist in the palette but must never be used together) for the design system docs

Constraints: compute, never estimate; respect hue (no "just use black"); every replacement must come with its ratio; separate AA from AAA — we target AA, note AAA as bonus only.

Output: full pair table (fg / bg / ratio / threshold / verdict) → failure fixes with hexes → systemic findings → forbidden-pairs list.`,
    outputFormat: "ตารางทุกคู่ + fix รายตัวพร้อม hex ใหม่ + ปัญหาเชิงระบบ + forbidden pairs",
    constraints: ["คำนวณทศนิยม 2 ตำแหน่ง ไม่กะด้วยตา", "Threshold ถูกต้องตามขนาด text", "Fix รักษา hue เดิม", "มองหา pattern เชิงระบบไม่ใช่แก้รายจุด"],
    bestUsedWith: ["Claude", "ChatGPT"],
    tags: ["contrast", "color", "wcag"],
    exampleInput: "Palette 14 สี + 22 คู่การใช้จริง รวม hover states และ dark mode",
    expectedOutputPreview: "gray-400 บน white = 3.02:1 FAIL (ใช้เป็น body text 6 ที่) → gray-500 #6B7280 = 4.83:1 PASS... Systemic: gray ramp ช่วง 300-400 ใช้กับ text บนพื้นขาวไม่ได้เลย — ปรับ scale...",
  },
  {
    id: "a11y-keyboard-audit",
    title: "Keyboard Navigation Audit",
    audience: "accessibility",
    level: "intermediate",
    useCase: "ตรวจว่าทุก flow สำคัญทำได้ด้วย keyboard ล้วน — หา interactive ที่เข้าไม่ถึง, trap, ลำดับ Tab เพี้ยน",
    inputRequired: ["Markup/component code ของหน้า/flow", "Flow ที่ user ต้องทำให้สำเร็จ", "รายการ custom widgets (dropdown/modal/tabs ทำเอง)"],
    promptText: `You are an accessibility engineer auditing keyboard operability from code.

Inputs: markup/components: [PASTE]. Flows that must be fully keyboard-operable: [LIST]. Custom widgets in scope: [DROPDOWNS/MODALS/TABS/ETC].

Audit:
1. REACHABILITY SWEEP: every interactive element — is it in the tab order? Hunt the classics: div/span with onClick and no tabindex/role/keydown, click handlers on non-interactive elements, positive tabindex values (order hijacking), interactive elements hidden from keyboard but visible to mouse (hover-only reveals)
2. FLOW WALKTHROUGH: per critical flow — the literal key sequence from entry to completion; where the sequence breaks (unreachable step, action needing a pointer event like drag or hover-menu), the flow FAILS — that's a blocker, not a finding
3. CUSTOM WIDGET CONTRACTS: per widget — name its ARIA APG pattern, then diff: which required keys are handled (arrows, Home/End, Esc, Enter/Space, type-ahead) vs missing; roving tabindex vs everything-tabbable (a 20-item menu as 20 tab stops is a failure of the pattern)
4. TRAPS & ESCAPES: anything focus enters but can't leave by keyboard; overlays — focus moves in on open? trapped while open? RETURNS to trigger on close? Esc works?
5. ORDER SANITY: DOM order vs visual order — does Tab jump around the screen? Skip link present and functional? Focus lost to body after dynamic content changes (deleted item, route change)?
6. KEYBOARD-ONLY ADDITIONS: shortcuts that conflict with browser/AT keys; keyboard shortcuts without a disable/remap if they intercept typing

Per finding: location / problem / which flow it blocks / fix with the corrected code. Severity: BLOCKER (flow impossible) / MAJOR (painful workaround exists) / MINOR.

Output: reachability findings → per-flow walkthrough verdict (key sequence or break point) → widget vs APG diff table → fixes as code → the 10-minute manual Tab-walk script to confirm in browser.`,
    outputFormat: "Findings + walkthrough ต่อ flow + ตาราง widget เทียบ APG + code fixes + manual script",
    constraints: ["Flow ที่ทำไม่จบ = BLOCKER เสมอ", "Custom widget ต้องเทียบ APG pattern ตรงๆ", "Fix เป็น code ไม่ใช่คำแนะนำ", "ปิดท้ายด้วย manual script ยืนยันในเบราว์เซอร์"],
    bestUsedWith: ["Claude", "Claude Code"],
    tags: ["keyboard", "focus", "accessibility"],
    exampleInput: "Code หน้า settings + flow: เปลี่ยนรหัสผ่าน / custom: dropdown เลือกภาษา, modal ยืนยัน",
    expectedOutputPreview: "BLOCKER: dropdown ภาษาเป็น div+onClick — keyboard เข้าไม่ถึง flow ตั้งค่าภาษาตาย... Modal: focus เข้าแต่ไม่ trap, Tab หลุดไป background... APG diff: combobox ขาด ArrowDown, Esc, type-ahead...",
  },
  {
    id: "a11y-screen-reader",
    title: "Screen Reader Review",
    audience: "accessibility",
    level: "advanced",
    useCase: "ตรวจจาก markup ว่า screen reader จะ 'ได้ยิน' หน้านี้อย่างไร — ชื่อ, โครงสร้าง, การประกาศ dynamic content",
    inputRequired: ["Markup/component code", "Flow สำคัญ", "จุดที่ content เปลี่ยนแบบ dynamic (toast, live update, validation)"],
    promptText: `You are an accessibility engineer reviewing what a screen reader user will actually experience, derived from markup.

Inputs: markup/components: [PASTE]. Critical flows: [LIST]. Dynamic content moments: [TOASTS / LIVE UPDATES / ASYNC RESULTS / VALIDATION].

Review:
1. ACCESSIBLE NAME COMPUTATION: every interactive element — compute its name per the accname algorithm (content → aria-label → aria-labelledby → title); list elements whose name is empty ("button"), wrong (aria-label overriding visible text — breaks voice control), or meaningless out of context ("คลิกที่นี่" ×5, "ดูเพิ่ม" ที่ไม่บอกของอะไร — screen reader users navigate by element lists where context vanishes)
2. STRUCTURE AS HEARD: the page as a heading outline + landmark map — can a user grasp the page from headings alone and jump to regions? Flag: heading levels skipped, visual-only headings (big bold text that isn't an h-element), missing main/nav landmarks, multiple unlabeled landmarks of the same type
3. THE SILENT MOMENTS — dynamic changes with no announcement: form errors appearing (linked via aria-describedby + does focus/announcement bring attention?), async results loading in (aria-live polite), toasts (role=status vs alert — and do they outlive their auto-dismiss for AT users?), cart/counter updates, route changes in SPAs (focus + title management). For each dynamic moment I listed: what gets announced today (likely nothing) and the fix
4. HIDDEN VS EXPOSED: aria-hidden on things that should be heard; decorative noise exposed (icon fonts read as gibberish, redundant alt duplicating adjacent text = heard twice); off-screen content (closed menus) properly hidden or polluting the reading order?
5. CONTROL STATE: expanded/collapsed, selected, checked, current-page, disabled, busy — does ARIA state match visual state everywhere? Stale state is worse than missing state.
6. FORMS AS HEARD: per field — what's announced on focus (label + type + required + format hint + current error)? Reconstruct it; gaps become findings

Per finding: what's heard today (literally) / what should be heard / the markup fix.
End with: the NVDA/VoiceOver manual script for what markup analysis cannot confirm (actual announcement timing, double-speaking quirks) — code review predicts, real AT confirms.

Output: name table → heading/landmark outline → silent-moments fixes → state mismatches → forms-as-heard → manual AT script.`,
    outputFormat: "ตารางชื่อทุก element + outline โครงสร้าง + fix จุดเงียบ + manual AT script",
    constraints: ["Compute ชื่อตาม accname จริงๆ", "เขียนสิ่งที่ 'ได้ยินวันนี้' ตรงตามจริง", "ทุก dynamic moment ต้องมีคำตอบว่าประกาศยังไง", "ย้ำว่า markup analysis ≠ การทดสอบ AT จริง"],
    bestUsedWith: ["Claude", "Claude Code"],
    tags: ["screen-reader", "aria", "accessibility"],
    exampleInput: "Markup หน้า search results + dynamic: ผลโหลดแบบ async, filter อัปเดตจำนวน",
    expectedOutputPreview: "ได้ยินวันนี้: 'button, button, button' (icon buttons 3 ตัวไม่มีชื่อ)... ผล search โหลดเสร็จ: เงียบสนิท — user ไม่รู้ว่ามาแล้ว → aria-live='polite' ประกาศ 'พบ 23 รายการ'...",
  },
  {
    id: "a11y-focus-state",
    title: "Focus State Review",
    audience: "accessibility",
    level: "basic",
    useCase: "ตรวจ focus-visible ทั้งระบบ: มองเห็นไหม, contrast พอไหม, โดน outline:none ลบไปกี่ที่ — และวางกติกากลาง",
    inputRequired: ["CSS/component styles ทั้งหมดที่เกี่ยวกับ focus", "Palette + พื้นหลังที่ focus ring ต้องวางบน", "Interactive components ทั้งหมดในระบบ"],
    promptText: `You are an accessibility specialist auditing focus visibility across a design system.

Inputs: styles related to focus: [PASTE CSS/COMPONENT STYLES — or the whole stylesheet, I'll hunt]. Palette + backgrounds focus indicators sit on: [LIST]. Interactive component inventory: [BUTTONS/LINKS/INPUTS/CARDS/CUSTOM WIDGETS].

Audit:
1. THE KILL LIST: every outline:none / outline:0 in the codebase — each one either has an equal-or-better replacement visible on :focus-visible, or it's a violation; table them: location / replacement present? / verdict
2. VISIBILITY MATH: per focus indicator style — does it meet the bar: ≥3:1 contrast between the indicator and the background it sits on (check EVERY background it can appear on — a blue ring works on white, vanishes on the blue header), ≥2px effective thickness or equivalent area? Indicators relying on subtle shadow or slight color shift: compute and usually fail
3. FOCUS-VISIBLE VS FOCUS: mouse clicks shouldn't paint rings everywhere (that's why teams delete outlines) — is :focus-visible used so keyboard gets rings and mouse doesn't? This is THE fix for ring-hate; specify the migration
4. COVERAGE SWEEP: per component in the inventory — does it have a visible focus state in EVERY visual context (default bg, card bg, dark header, inside tables)? Custom widgets with roving tabindex — does the focused ITEM show focus, not just the container?
5. SPECIAL CASES: focus on elements with border-radius (ring follows the radius or looks broken?), overflow:hidden parents clipping rings (the silent killer — list every clipped instance), sticky/fixed elements overlapping focused items, inputs (ring + border interplay)
6. THE SYSTEM RULE: one focus style token/utility for the whole system (offset, width, color per background tier) — write it, replacing the per-component improvisation

Output: kill-list table → contrast results per indicator-on-background → coverage gaps per component → clipping/radius bugs → the system-wide focus rule as code + migration notes.`,
    outputFormat: "Kill list + ผล contrast ต่อพื้นหลัง + ช่องโหว่ราย component + focus rule กลางเป็น code",
    constraints: ["ทุก outline:none ต้องมีคำตัดสิน", "Indicator ≥3:1 บนทุกพื้นหลังที่เป็นไปได้", "ใช้ :focus-visible แก้ปัญหา ring-hate", "จบด้วยกติกากลางอันเดียว ไม่ใช่แก้รายตัว"],
    bestUsedWith: ["Claude", "Claude Code"],
    tags: ["focus", "css", "accessibility"],
    exampleInput: "Tailwind config + global CSS + 18 components / พื้นหลัง: ขาว, เทาอ่อน, navy header",
    expectedOutputPreview: "Kill list: outline-none 11 จุด — 7 ไม่มี replacement (violation)... Ring brand-500 บน navy = 1.8:1 มองไม่เห็น → ใช้ ring ขาว + offset บน dark tier... Rule: focus-visible:ring-2 ring-offset-2...",
  },
  {
    id: "a11y-form-audit",
    title: "Form Accessibility Audit",
    audience: "accessibility",
    level: "intermediate",
    useCase: "ตรวจฟอร์มเชิงลึก: label ผูกจริงไหม, error ประกาศยังไง, required/format สื่อสารครบไหม — ฟอร์มคือจุดที่ a11y พังแล้วเจ็บสุด",
    inputRequired: ["Markup ของฟอร์ม", "Validation behavior (เกิดเมื่อไร แสดงยังไง)", "Error messages ทั้งหมด"],
    promptText: `You are an accessibility engineer auditing a form — where a11y failures cost users the most (they're trying to GIVE you something).

Inputs: form markup: [PASTE]. Validation behavior: [WHEN IT FIRES, HOW ERRORS RENDER]. All error messages: [LIST].

Audit:
1. LABEL BINDING: per field — a real <label for>/wrapping label (clicking it focuses the field — the test), not placeholder-as-label (vanishes on input, fails memory and AT), not a nearby <div> that looks like a label; aria-label acceptable only where visible labels genuinely can't exist; per field: what does AT announce on focus — reconstruct it (label + role + required + hint + error)
2. REQUIRED & FORMAT: required communicated programmatically (required/aria-required) AND visually (not color-alone asterisk); format expectations (date format, password rules) linked via aria-describedby BEFORE the user fails, not revealed by the error after
3. ERROR EXPERIENCE: errors bound to fields via aria-describedby + aria-invalid (not floating text AT can't associate); on failed submit — focus moves to first invalid field? Error summary for multi-error (with links)? Are messages actionable (quote each: does it say how to fix)? Do errors announce when they appear (the describedby linkage handles re-focus reading; live region for async validation)?
4. GROUPING: radio/checkbox groups in fieldset+legend (the question "จัดส่งแบบไหน" must be heard WITH the options) — flag every visually-grouped-but-not-fieldset cluster
5. STRUCTURE & FLOW: tab order matches visual order; autocomplete attributes (1.3.5 — also helps everyone); inputmode/type per field; no keyboard-hostile widgets (custom selects that should be native, date pickers without typed input)
6. SUBMIT SAFETY: double-submit prevented accessibly (button disabled + aria-busy, not silence); success confirmed in a way AT hears (focus to confirmation / live region)

Per finding: field / what AT experiences today / fix as corrected markup.
Output: field-by-field table (label / required / format / error binding / verdict) → corrected markup for failures → the reconstructed "what each field announces" before/after → manual AT pass script.`,
    outputFormat: "ตารางราย field + markup ที่แก้แล้ว + สิ่งที่ field ประกาศ ก่อน/หลัง + manual script",
    constraints: ["ทดสอบ label ด้วยกฎ 'คลิกแล้ว focus ไหม'", "Format hint ต้องมาก่อน fail ไม่ใช่หลัง", "ทุก radio/checkbox group ต้องมี fieldset/legend", "Reconstruct เสียงประกาศจริงของทุก field"],
    bestUsedWith: ["Claude", "Claude Code"],
    tags: ["form", "aria", "accessibility"],
    exampleInput: "Markup ฟอร์มสมัคร 8 fields + validation ตอน submit + error 6 ข้อความ",
    expectedOutputPreview: "Field 'เบอร์โทร': placeholder-as-label — AT ได้ยินแค่ 'edit text'... แก้: <label for> + aria-describedby ชี้ hint รูปแบบ... Submit fail: focus ไปที่ field แรกที่ผิด + summary 3 errors มี link...",
  },
  {
    id: "a11y-modal-audit",
    title: "Modal Accessibility Audit",
    audience: "accessibility",
    level: "intermediate",
    useCase: "ตรวจ modal/dialog/drawer ที่มีอยู่เทียบกับ ARIA dialog pattern — focus trap, restore, Esc, การประกาศ — จุดที่ custom modal พังบ่อยสุด",
    inputRequired: ["Code ของ modal ทุกตัวในระบบ", "ประเภทการใช้ (confirm/form/fullscreen)", "Trigger ที่เปิด modal"],
    promptText: `You are an accessibility engineer auditing every modal/dialog/drawer in a codebase against the ARIA dialog pattern.

Inputs: modal component code: [PASTE ALL VARIANTS]. Usage types: [confirm / form / drawer / fullscreen]. How they're triggered: [BUTTONS/LINKS/AUTO].

Audit each modal against the full dialog contract:
1. SEMANTICS: role="dialog" + aria-modal="true" (or native <dialog> + showModal — preferred where targets allow); aria-labelledby → the actual title element; aria-describedby for confirm bodies; NOT just a positioned div
2. FOCUS LIFECYCLE — the big four, verify each in code:
   (a) on open: focus MOVES INTO the dialog (to what? first focusable vs the safest button for destructive confirms — destructive action must never be initial focus)
   (b) while open: Tab/Shift+Tab TRAPPED inside (test the edges: first and last element wrap)
   (c) background: inert/aria-hidden so AT can't wander into it (scroll lock alone isn't enough — virtual cursors ignore it)
   (d) on close: focus RETURNS to the trigger (and the fallback when the trigger unmounted — deleted-item confirms)
3. KEYBOARD: Esc closes (exceptions documented — mid-payment?); Enter doesn't accidentally fire destructive defaults; drawer-specific: does it match its pattern too?
4. ANNOUNCEMENT: what does AT hear at open — role + accessible name (title)? Auto-opening modals (session timeout): announced or silently appeared?
5. STACKING REALITY: nested modals (confirm inside form-modal) — focus trap layers correctly? Closing inner restores to outer, not to page?
6. DISMISS SAFETY: backdrop-click closing a half-filled FORM modal = data loss via twitch — confirm-before-discard for dirty forms; backdrop-close fine for info dialogs; per modal type: the right behavior, the current behavior
7. MOBILE/ZOOM: fullscreen-at-small-viewport behavior; content scrollable INSIDE the dialog at 200% zoom (not clipped)

Output: per-modal scorecard (the big four + keyboard + announcement + dismiss, pass/fail each) → fixes as code diffs, shared-component level → the nested-modal policy if missing → manual script (the exact open-Tab-Tab-Esc walk per modal).`,
    outputFormat: "Scorecard ต่อ modal + diffs ระดับ shared component + นโยบาย nested + manual script",
    constraints: ["ตรวจ big four ของ focus lifecycle ครบทุก modal", "Background ต้อง inert ไม่ใช่แค่ scroll lock", "Destructive ห้ามเป็น initial focus", "Dirty form + backdrop close = ต้องมี confirm"],
    bestUsedWith: ["Claude", "Claude Code"],
    tags: ["modal", "dialog", "focus", "accessibility"],
    exampleInput: "Modal component กลาง + drawer + confirm ลบ / เปิดจากปุ่มในตาราง",
    expectedOutputPreview: "Confirm ลบ: focus เปิดมาอยู่ที่ปุ่ม 'ลบ' (destructive เป็น initial focus — สลับเป็น 'ยกเลิก')... Background ไม่ inert: VoiceOver เดินเข้าตารางข้างหลังได้... Trigger unmount หลังลบแถว → focus fallback ไปหัวตาราง...",
  },
  {
    id: "a11y-table-audit",
    title: "Table Accessibility Audit",
    audience: "accessibility",
    level: "intermediate",
    useCase: "ตรวจ data table: โครงสร้าง th/scope, sort ที่ประกาศได้, responsive ที่ไม่ทำลายความเป็นตาราง, การกระทำต่อแถว",
    inputRequired: ["Markup ของตาราง", "ความสามารถ (sort? filter? เลือกแถว? action ต่อแถว?)", "พฤติกรรม responsive ปัจจุบัน"],
    promptText: `You are an accessibility engineer auditing data tables — where structure IS the meaning.

Inputs: table markup: [PASTE]. Capabilities: [SORT / FILTER / ROW SELECTION / ROW ACTIONS / PAGINATION]. Responsive behavior: [WHAT HAPPENS ON SMALL SCREENS].

Audit:
1. BONES: real <table> with <th> headers carrying scope="col"/"row" (AT announces the header with each cell — the entire point of table semantics) — or a div-grid that LOOKS like a table and reads as soup? CSS-display overrides that destroy table semantics (display:block on rows for responsive — silently removes table roles in most browsers — the classic invisible breakage)? Caption or accessible name on the table?
2. HEADER INTEGRITY: complex headers (grouped/two-tier) — do header associations still compute? Empty header cells (the checkbox column with no label)? Headers that are buttons (sort) — still th, with the button inside?
3. SORT STATE: sortable columns — aria-sort on the th (ascending/descending/none, updated on change); the sort control's accessible name (does "Name" button say what it does?); sort change announced (live region: "ตารางเรียงตามชื่อ ก-ฮ") or silent?
4. ROW INTERACTIONS: row actions (edit/delete per row) — does each button's name include the ROW context ("ลบ" ×20 in the element list vs "ลบ ใบแจ้งหนี้ #1042")? Whole-row click targets — keyboard equivalent exists? Row selection checkboxes — labeled per row, select-all relationship clear, selection count announced?
5. RESPONSIVE TRUTH: the small-screen treatment — horizontal scroll (fine: keyboard-scrollable? tabindex=0 + role + label on the scroll container), column hiding (which? does priority match user needs?), or transform-to-cards (do the cards retain label-value pairing so data isn't orphaned numbers)? The display:block check from #1 applies here.
6. SCALE: pagination/virtual scroll — total count communicated; loading new rows announced (aria-busy / live region); focus stable when rows re-render under the user

Output: structure verdict + corrected markup → per-capability findings (sort/actions/selection) with fixes → responsive recommendation with its a11y mechanics → the AT script (announce-headers spot check, sort walk, row-action naming).`,
    outputFormat: "Verdict โครงสร้าง + markup แก้แล้ว + findings ต่อ capability + แนวทาง responsive + AT script",
    constraints: ["เช็ค display override ที่ลบ table semantics เสมอ", "Action ต่อแถวต้องมีชื่อระบุแถว", "aria-sort ต้องอัปเดตจริง", "Responsive ต้องไม่ทำให้ data หลุดจาก label"],
    bestUsedWith: ["Claude", "Claude Code"],
    tags: ["table", "data", "accessibility"],
    exampleInput: "ตาราง invoice 8 คอลัมน์ sort ได้ + ปุ่มลบต่อแถว / มือถือ: display:block เป็น card",
    expectedOutputPreview: "display:block ฆ่า table semantics — AT อ่านเป็นข้อความเรียงยาว ไม่มี header pairing... ปุ่มลบ 20 ปุ่มชื่อ 'ลบ' เหมือนกันหมด → aria-label='ลบ ใบแจ้งหนี้ #1042'... aria-sort ไม่มี — sort เงียบสนิท...",
  },
];
