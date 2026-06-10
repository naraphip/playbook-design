import type { PromptItem } from "@/types/playbook";

export const DEVELOPER_PROMPTS: PromptItem[] = [
  {
    id: "developer-accessible-button",
    title: "Build Accessible Button Component",
    audience: "developer",
    level: "basic",
    useCase: "สร้าง Button component กลางที่ accessible ครบ states ตั้งแต่แรก — ไม่ต้องตามแก้ทีหลัง",
    inputRequired: ["Stack (React/Vue/Svelte + CSS approach)", "Design tokens ของปุ่ม", "Variants ที่ต้องมี", "Spec จาก designer ถ้ามี"],
    promptText: `You are a senior frontend engineer building a design-system Button component.

Stack: [FRAMEWORK + CSS APPROACH]. Tokens: [PASTE BUTTON TOKENS]. Required variants: [e.g. primary/secondary/ghost/danger] and sizes: [LIST].

Requirements:
1. Semantic <button> element (never div+onClick); type defaults to "button" not "submit"
2. Full state coverage per variant: default, hover, focus-visible (visible ring, never outline:none without replacement), active, disabled (aria-disabled vs disabled — explain your choice), loading
3. Loading state: spinner replaces label but button KEEPS its width (no layout shift), aria-busy="true", click handler suppressed
4. Icon support: icon-only buttons REQUIRE an accessible name (make the API enforce it — aria-label prop mandatory when no children)
5. All styling through the provided tokens — zero hardcoded colors/sizes
6. TypeScript: strict props interface; variant/size as union types; polymorphic "as" or href→anchor handling if needed (anchor styled as button must keep link semantics)

Output:
- The component code
- A usage example per variant
- A "what I'd test" list: the specific interactions (keyboard activation via Enter+Space, focus ring visibility, loading width stability) for the test suite`,
    outputFormat: "Component code + usage ต่อ variant + test list",
    constraints: ["<button> จริงเท่านั้น", "ทุกค่าผ่าน token", "Icon-only บังคับ accessible name ใน API", "Loading ไม่ layout shift", "TypeScript strict"],
    bestUsedWith: ["Claude Code", "Cursor", "Copilot"],
    tags: ["component", "button", "accessibility"],
    exampleInput: "React + Tailwind / token: btn-primary-bg, btn-primary-fg... / variants: primary, ghost, danger",
    expectedOutputPreview: "type ButtonProps = { variant: 'primary'|'ghost'|'danger' ... } — aria-label required เมื่อไม่มี children ผ่าน discriminated union...",
  },
  {
    id: "developer-responsive-card-grid",
    title: "Build Responsive Card Grid",
    audience: "developer",
    level: "basic",
    useCase: "สร้าง card grid ที่จัดการ content จริง (ชื่อยาว รูปหาย) และ responsive โดยไม่ต้องมี breakpoint ยิบย่อย",
    inputRequired: ["Stack", "ข้อมูลใน card + ตัวอย่างเคสยาก (ชื่อยาว/รูปขาด)", "ช่วงคอลัมน์ที่ต้องการ (เช่น 1-4)"],
    promptText: `You are a frontend engineer building a production card grid.

Stack: [FRAMEWORK + CSS]. Card content: [FIELDS]. Real-world ugly data to survive: [e.g. 70-char titles, missing images, 0 items]. Column range: [e.g. 1 col at 375px → 4 cols wide].

Requirements:
1. GRID: CSS Grid with auto-fill/minmax so columns derive from available space — no breakpoint-per-column-count media queries; gap from spacing tokens
2. EQUAL HEIGHTS: cards in a row align regardless of content length — image fixed aspect-ratio (with object-fit), title line-clamped at [N] lines, footer pinned to bottom (flex column + margin-top auto)
3. CONTENT RESILIENCE: missing image → designed fallback (not broken icon); empty fields → element collapses cleanly, no orphaned labels; long unbroken strings → overflow-wrap
4. STATES: loading skeleton grid matching real card dimensions (no shift on load); empty state slot when 0 items
5. INTERACTION: whole-card click target with proper semantics (one real link, ::after expansion trick or equivalent) WITHOUT nesting interactive elements illegally; in-card buttons must remain separately clickable
6. A11y: card heading hierarchy consistent; image alt handling (meaningful vs decorative)

Output: grid + card components, the skeleton, and a stress-test render using my ugly data examples.`,
    outputFormat: "Grid + Card + Skeleton components + stress-test ด้วยข้อมูลจริง",
    constraints: ["auto-fill/minmax ไม่ใช่ media query ต่อคอลัมน์", "การ์ดสูงเท่ากัน", "รูปหาย/ชื่อยาวต้องรอด", "Whole-card click ไม่ nest interactive ผิดกฎ"],
    bestUsedWith: ["Claude Code", "Cursor"],
    tags: ["grid", "responsive", "card"],
    exampleInput: "React + CSS Modules / card: รูป, ชื่อ, ราคา, ปุ่ม / เคสยาก: ชื่อ 70 ตัวอักษร, บางรายการไม่มีรูป",
    expectedOutputPreview: "grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))... .title { -webkit-line-clamp: 2 }... fallback รูป: gradient + ตัวอักษรแรกของชื่อ...",
  },
  {
    id: "developer-accessible-modal",
    title: "Build Accessible Modal",
    audience: "developer",
    level: "intermediate",
    useCase: "สร้าง modal ที่ focus trap, keyboard, screen reader ถูกต้องตาม ARIA dialog pattern — จุดที่ modal ทำเองพังบ่อยสุด",
    inputRequired: ["Stack", "ประเภท modal ที่ใช้ (confirm/form/fullscreen)", "Design spec (ขนาด, animation)"],
    promptText: `You are a frontend engineer implementing a Modal/Dialog following the ARIA dialog pattern correctly.

Stack: [FRAMEWORK + CSS]. Modal types needed: [confirm / form / fullscreen-mobile]. Design: [SIZE/ANIMATION SPEC].

Requirements — implement the full ARIA APG modal dialog pattern:
1. SEMANTICS: prefer native <dialog> with showModal() if browser targets allow ([STATE TARGETS]) — otherwise role="dialog" + aria-modal="true"; aria-labelledby pointing at the title; aria-describedby for confirm-dialog body text
2. FOCUS: on open, focus moves INTO the dialog (first focusable, or the least-destructive button for confirms); Tab/Shift+Tab trapped inside; on close, focus RETURNS to the trigger element (handle trigger unmounting)
3. KEYBOARD: Esc closes (unless mid-operation — then specify behavior); Enter on confirm dialogs must not accidentally trigger destructive default — destructive action is NEVER the default focused button
4. DISMISS: backdrop click behavior per type (closable for info, blocked for unsaved-changes forms with confirm-before-discard); scroll lock on body WITHOUT layout shift (compensate scrollbar width)
5. STACKING/PORTAL: render strategy, z-index from token scale, nested-modal stance (recommend: don't — flag if API allows it)
6. MOBILE: fullscreen or bottom-sheet treatment below [BREAKPOINT]; safe-area handling
7. ANIMATION: respects prefers-reduced-motion

Output: component code + the confirm-dialog variant wired to show correct focus behavior + a manual test script (exact Tab/Esc/screen-reader checks a reviewer should run).`,
    outputFormat: "Modal component + confirm variant + manual test script",
    constraints: ["ตาม ARIA APG dialog pattern เต็มรูปแบบ", "Focus คืน trigger ตอนปิด", "Destructive ไม่ใช่ default focus", "Scroll lock ไม่ layout shift", "รองรับ prefers-reduced-motion"],
    bestUsedWith: ["Claude Code", "Cursor"],
    tags: ["modal", "dialog", "accessibility", "focus"],
    exampleInput: "React + Tailwind / ใช้ confirm ลบ + form แก้ไข / มือถือเป็น bottom sheet",
    expectedOutputPreview: "ใช้ <dialog> + showModal()... confirm ลบ: focus เริ่มที่ปุ่ม 'ยกเลิก' ไม่ใช่ 'ลบ'... test script: 1) เปิด → focus อยู่ใน dialog 2) Tab วน 3) Esc ปิด → focus กลับปุ่มเดิม...",
  },
  {
    id: "developer-form-validation",
    title: "Build Form with Validation",
    audience: "developer",
    level: "intermediate",
    useCase: "สร้างฟอร์มที่ validation UX ถูกต้อง: validate ตอน blur, error ผูกกับ field, submit fail ข้อมูลไม่หาย",
    inputRequired: ["Stack + form library ถ้ามี", "Fields + validation rules", "Error copy จาก designer (หรือให้ AI ร่าง)", "พฤติกรรมตอน submit (API, error จาก server)"],
    promptText: `You are a frontend engineer building a form with correct validation UX — the part most forms get wrong.

Stack: [FRAMEWORK + FORM LIBRARY IF ANY]. Fields + rules: [LIST: field / type / required / validation]. Error copy: [PASTE FROM DESIGN, OR: draft Thai messages that say what's wrong + how to fix]. Submit: [API BEHAVIOR + POSSIBLE SERVER ERRORS].

Requirements:
1. TIMING: validate on blur, NOT on every keystroke (exception: format-assist like card number spacing is fine live); after first submit attempt, switch invalid fields to validate-on-change so fixes clear errors immediately
2. ERROR BINDING: each error rendered adjacent to its field, programmatically linked via aria-describedby; field gets aria-invalid; first invalid field receives focus on failed submit; error summary at top for >3 errors (links jump to fields)
3. DATA PRESERVATION: failed submit (client OR server error) never clears entered data; network failure keeps everything + shows retry; specify what happens on navigation-away with dirty form
4. SERVER ERRORS: map server validation errors back to their fields (not a generic banner); errors that map to no field get the form-level slot with actionable copy
5. INPUT QUALITY: correct input types/inputmode for mobile keyboards, autocomplete attributes, labels as real <label for> — no placeholder-as-label
6. SUBMIT STATE: button disables + shows progress during submit (prevent double-submit), re-enables on failure
7. A11y: error announcements via the aria-describedby linkage (no aria-live spam per keystroke)

Output: form code + validation logic + the error-copy table (field / rule / message) + a test list covering: blur timing, focus-on-fail, data survival on server 500, double-submit prevention.`,
    outputFormat: "Form code + ตาราง error copy + test list",
    constraints: ["Validate ตอน blur ไม่ใช่ทุก keystroke", "Error ผูก field ด้วย aria-describedby", "Submit fail ข้อมูลไม่หายทุกกรณี", "Server error map กลับ field", "กัน double-submit"],
    bestUsedWith: ["Claude Code", "Cursor"],
    tags: ["form", "validation", "accessibility"],
    exampleInput: "React Hook Form / fields: email, เบอร์โทร, รหัสผ่าน / server เช็ค email ซ้ำ",
    expectedOutputPreview: "mode: 'onBlur', reValidateMode: 'onChange'... server 409 email ซ้ำ → setError('email', {message: 'อีเมลนี้ถูกใช้แล้ว — เข้าสู่ระบบแทน?'})...",
  },
  {
    id: "developer-skeleton-loading",
    title: "Build Skeleton Loading Component",
    audience: "developer",
    level: "basic",
    useCase: "สร้าง skeleton ที่ขนาดตรง layout จริง — โหลดเสร็จไม่กระโดด และไม่กะพริบเมื่อโหลดเร็ว",
    inputRequired: ["Stack", "Component/หน้าที่ต้องมี skeleton", "โครงสร้าง layout จริง (ขนาดรูป, จำนวนบรรทัด)"],
    promptText: `You are a frontend engineer building skeleton loading states that prevent layout shift.

Stack: [FRAMEWORK + CSS]. Components needing skeletons: [LIST, e.g. card grid, table, detail header]. Real layout structure: [DIMENSIONS: image ratios, text line counts, fixed heights].

Requirements:
1. DIMENSION FIDELITY: skeleton blocks match the REAL rendered component's dimensions — same image aspect-ratio, same line heights, same paddings — so content swap causes zero shift (this is the whole point; derive sizes from the same tokens/classes the real component uses, not parallel magic numbers)
2. FLASH PREVENTION: appearance delay (~150-300ms) so fast responses never flash a skeleton; once shown, minimum display (~300-500ms) so it doesn't blink — implement both timers correctly (no skeleton-flash on cached data)
3. STRUCTURE REUSE: skeleton variant lives WITH its component (same file/folder, shares layout primitives) so layout changes can't drift apart — show the pattern
4. ANIMATION: single subtle pulse/shimmer; respects prefers-reduced-motion (static fallback); animate opacity/transform only (no layout-triggering properties)
5. A11y: container aria-busy="true" while loading, skeleton itself aria-hidden (screen readers get a single loading announcement, not 20 fake rows); count announced on completion if list
6. COMPOSITION: skeleton count matches expected content count where known (e.g. page size), sensible default otherwise

Output: skeleton primitives + one full example (skeleton + real component sharing layout) + the show/hide timing hook + test list (shift measurement, flash timing, reduced-motion).`,
    outputFormat: "Skeleton primitives + ตัวอย่างคู่กับ component จริง + timing hook + test list",
    constraints: ["ขนาดตรง component จริง (zero shift)", "มี delay กัน flash + minimum display กัน blink", "Skeleton อยู่คู่ไฟล์ component จริง", "aria-busy + aria-hidden ถูกจุด"],
    bestUsedWith: ["Claude Code", "Cursor"],
    tags: ["loading", "skeleton", "performance"],
    exampleInput: "React + Tailwind / ต้องการ: card grid 6 ใบ + หน้า detail / รูป 16:9, ชื่อ 2 บรรทัด",
    expectedOutputPreview: "useDelayedLoading(isLoading, {delay: 200, minDuration: 400})... CardSkeleton ใช้ class แถวเดียวกับ Card จริง: aspect-video, h-5 สองแถว...",
  },
  {
    id: "developer-keyboard-navigation",
    title: "Implement Keyboard Navigation",
    audience: "developer",
    level: "advanced",
    useCase: "เติม keyboard navigation ให้ widget ที่มีอยู่ (list, menu, tabs) ตาม ARIA pattern ที่ถูกต้อง",
    inputRequired: ["Code ของ widget ปัจจุบัน", "ประเภท widget (menu/listbox/tabs/grid/tree)", "พฤติกรรมที่ต้องการตอนเลือก"],
    promptText: `You are an accessibility engineer adding correct keyboard navigation to an existing widget.

Widget code: [PASTE]. Widget type: [menu / listbox / tabs / combobox / grid / tree]. Selection behavior: [WHAT HAPPENS ON SELECT].

Task:
1. IDENTIFY THE PATTERN: name the matching ARIA APG pattern for this widget type and list its required keys — this is the contract, not your invention
2. ROVING TABINDEX (or aria-activedescendant — choose and justify): the widget is ONE tab stop; Arrow keys move within; Tab exits to the next page element — implement focus management accordingly
3. KEYS per the pattern: Arrows (with correct orientation), Home/End, Enter/Space activation, Esc behavior, type-ahead if the pattern calls for it; document each key → behavior
4. FOCUS VISIBILITY: moving focus must be visible (focus-visible styles on items); scrolling container follows focus (scrollIntoView block:'nearest')
5. STATE SYNC: aria-selected/aria-expanded/aria-checked match visual state; disabled items — skipped or focusable-but-inert per pattern (state which and why)
6. DYNAMIC CONTENT: focus behavior when the focused item is removed/filtered out (nearest neighbor, not document body)
7. DON'T BREAK: existing mouse/touch interaction must keep working; no keydown preventDefault that eats browser shortcuts beyond the pattern's keys

Output: the modified code (diff format) + key-behavior table + the APG pattern divergences if any (with reasons) + manual test script (exact key sequence to verify).`,
    outputFormat: "Diff + ตาราง key→behavior + จุดที่ต่างจาก APG พร้อมเหตุผล + test script",
    constraints: ["อ้าง ARIA APG pattern ตรงๆ ไม่คิดเอง", "Widget เป็น tab stop เดียว (roving tabindex)", "Focus ตามไปเมื่อ item ถูกลบ", "Mouse/touch เดิมต้องไม่พัง"],
    bestUsedWith: ["Claude Code", "Cursor"],
    tags: ["keyboard", "accessibility", "aria"],
    exampleInput: "Dropdown menu ทำเองด้วย div + onClick / ต้องการ: เลือกแล้วปิด menu",
    expectedOutputPreview: "Pattern: APG Menu Button... ArrowDown เปิด + focus item แรก, roving tabindex, Esc ปิด + คืน focus... test: Tab ไป trigger → ArrowDown → ArrowDown → Enter...",
  },
  {
    id: "developer-empty-state",
    title: "Implement Empty State",
    audience: "developer",
    level: "basic",
    useCase: "Implement empty state ให้แยก first-use / no-results / error ถูกต้อง — ไม่ใช่ 'ไม่มีข้อมูล' เดียวครอบทุกเคส",
    inputRequired: ["Component/หน้าที่ต้องมี empty state", "Design/copy ของแต่ละ state (หรือให้ร่าง)", "เงื่อนไขที่ทำให้เกิดแต่ละ state (โค้ดรู้ได้ยังไงว่าเคสไหน)"],
    promptText: `You are a frontend engineer implementing empty states correctly — including the logic that distinguishes them.

Component: [PASTE LIST/PAGE CODE]. Designs/copy per state: [PASTE, OR: draft Thai copy]. Data layer: [HOW DATA + FILTERS + ERRORS ARRIVE].

Requirements:
1. STATE DISCRIMINATION — implement the actual logic, this is where it usually goes wrong:
   - FIRST-USE/TRULY-EMPTY: fetch succeeded, no filters active, zero items → teach + create-first CTA
   - NO-RESULTS: fetch succeeded, filters/search active, zero items → show what was searched + clear-filters action (NOT the first-use message)
   - ERROR: fetch failed → error state with retry (NEVER renders as "no items" — a failed fetch displayed as empty is data-loss-level confusion)
   - LOADING: pending → skeleton, never flashes empty-then-content
2. Each state as a designed component slot (icon/illustration, headline, body, action) — shared EmptyState primitive with variants, not three inline divs
3. ACTIONS WIRED: create-CTA navigates/opens the real creation flow; clear-filters actually resets filter state; retry refetches
4. A11y: state changes announced (aria-live="polite" on the container), headline is a proper heading, action is a real button/link
5. TEST HOOKS: each state addressable in storybook/test (export states or accept forced-state prop in dev)

Output: EmptyState primitive + the discrimination logic integrated into my component + copy table (state / headline / body / action) + the four states demonstrated.`,
    outputFormat: "EmptyState component + logic แยก state + ตาราง copy + ตัวอย่างครบ 4 states",
    constraints: ["Error ห้าม render เป็น 'ไม่มีข้อมูล' เด็ดขาด", "No-results ต้องโชว์ clear-filters", "ทุก action ต่อกับของจริง", "aria-live ตอน state เปลี่ยน"],
    bestUsedWith: ["Claude Code", "Cursor"],
    tags: ["empty-state", "states", "component"],
    exampleInput: "หน้ารายการ invoice + filter สถานะ / React Query / copy: ให้ร่างภาษาไทย",
    expectedOutputPreview: "const state = isError ? 'error' : isLoading ? 'loading' : hasActiveFilters ? 'no-results' : 'first-use'... no-results: 'ไม่พบ invoice ที่ตรงกับตัวกรอง' + ปุ่มล้างตัวกรอง...",
  },
  {
    id: "developer-responsive-sidebar",
    title: "Implement Responsive Sidebar",
    audience: "developer",
    level: "intermediate",
    useCase: "สร้าง sidebar ที่เป็น persistent บน desktop, drawer บนมือถือ — พร้อม focus/scroll/state ที่ถูกต้องทั้งสองโหมด",
    inputRequired: ["Stack", "Breakpoint ที่สลับโหมด", "เนื้อหาใน sidebar (nav? filter?)", "ต้อง persist สถานะเปิด/ปิดไหม"],
    promptText: `You are a frontend engineer building a sidebar that is a persistent panel on desktop and an overlay drawer on mobile — two different interaction modes, one component.

Stack: [FRAMEWORK + CSS]. Mode switch at: [BREAKPOINT]. Sidebar contains: [NAV/FILTERS/...]. Open-state persistence: [yes/no — localStorage?].

Requirements:
1. DESKTOP (≥breakpoint): in-flow panel (not overlay), collapsible to icon rail if specified; content reflows beside it; collapsed state persisted [per requirement]; no focus trap (it's part of the page)
2. MOBILE (<breakpoint): overlay drawer — backdrop, slide-in animation (respects prefers-reduced-motion), body scroll lock without layout shift, Esc + backdrop-click close, FOCUS TRAP while open, focus returns to the hamburger trigger on close
3. MODE SWITCH CORRECTNESS: resizing across the breakpoint while drawer is open must not strand state (drawer open + resize to desktop → becomes panel cleanly, scroll lock released); use matchMedia listener not resize-thrash
4. SEMANTICS: <nav> landmark with aria-label; mobile trigger has aria-expanded + aria-controls; current page link marked aria-current="page"
5. RENDER STRATEGY: avoid hydration flash of wrong mode (SSR consideration — state the approach for [META-FRAMEWORK IF ANY]); avoid double-rendering nav content
6. SCROLLING: sidebar scrolls independently when content exceeds viewport (its own overflow), main content scroll unaffected on desktop

Output: component code + the matchMedia mode hook + test list: resize-while-open, focus trap on mobile only, scroll lock release, aria-expanded sync.`,
    outputFormat: "Sidebar component + mode hook + test list",
    constraints: ["Desktop ไม่มี focus trap, mobile ต้องมี", "Resize ข้าม breakpoint ตอนเปิดต้องไม่ค้าง", "Scroll lock ไม่ layout shift", "ไม่ hydration flash"],
    bestUsedWith: ["Claude Code", "Cursor"],
    tags: ["sidebar", "responsive", "navigation"],
    exampleInput: "Next.js + Tailwind / สลับที่ 1024px / nav 8 รายการ / จำสถานะ collapse ใน localStorage",
    expectedOutputPreview: "useMediaQuery('(min-width: 1024px)')... mobile: <FocusTrap active={isMobile && open}>... resize ตอนเปิด: useEffect cleanup ปลด scroll lock เมื่อ isMobile เปลี่ยน...",
  },
  {
    id: "developer-component-state-matrix",
    title: "Create Component State Matrix",
    audience: "developer",
    level: "intermediate",
    useCase: "สร้าง state matrix ของ component ที่มีอยู่ — เห็นครบทุก variant × state ในที่เดียว หา state ที่ขาด",
    inputRequired: ["Code ของ component", "Variants + states ที่ควรมีตาม spec", "Storybook หรือเครื่องมือ preview ที่ใช้"],
    promptText: `You are a design-system engineer creating a complete state matrix for an existing component — both as documentation and as a gap detector.

Component code: [PASTE]. Spec says it should support — variants: [LIST], states: [default/hover/focus-visible/active/disabled/loading/error/...]. Preview tooling: [Storybook/other].

Task:
1. EXTRACT ACTUAL: read the code and table what ACTUALLY exists — every variant × state combination: implemented / missing / partially implemented (e.g. disabled style exists but loading doesn't suppress clicks)
2. GAP REPORT: missing cells ranked by severity — focus-visible missing is a blocker (a11y), hover missing is minor; flag state combinations that conflict (disabled+loading: which wins? document the rule)
3. BUILD THE MATRIX VIEW: a Storybook story (or equivalent) rendering the FULL grid — every variant row × every state column — forced via props/pseudo-state tooling, so the whole matrix is visible on one screen for design review
4. INTERACTION STATES: hover/focus/active forced via [storybook pseudo-states addon or CSS class toggles] so they're visible without interaction
5. FILL GAPS: implement the missing states using existing tokens (flag any state that has no token to use — that's a design-system gap, not a code gap)
6. REGRESSION GUARD: the matrix story doubles as the visual-regression target — note the snapshot setup

Output: actual-vs-spec matrix table → gap list ranked → the matrix story code → implementations for missing states (diff) → flagged token gaps.`,
    outputFormat: "ตาราง matrix จริง vs spec + gap list + story code + diff เติม state + token gaps",
    constraints: ["อ่านจาก code จริง ไม่ใช่จาก spec อย่างเดียว", "ระบุกฎเมื่อ state ชนกัน (disabled+loading)", "เติม state ด้วย token ที่มี — ไม่มีให้ flag", "Matrix ดูได้ในจอเดียว"],
    bestUsedWith: ["Claude Code", "Cursor"],
    tags: ["states", "storybook", "design-system"],
    exampleInput: "Button 3 variants / spec มี 6 states / ใช้ Storybook + pseudo-states addon",
    expectedOutputPreview: "Matrix: primary×loading = partial (มี spinner แต่ยังคลิกได้!)... Gap #1 (blocker): ghost ไม่มี focus-visible... Story: ตาราง 3×6 ใช้ parameters.pseudo...",
  },
  {
    id: "developer-fix-a11y-issues",
    title: "Fix Accessibility Issues",
    audience: "developer",
    level: "intermediate",
    useCase: "แก้รายการ a11y issues ที่ audit เจอ — แก้ที่ root cause ใน component กลาง ไม่ใช่ปะผุรายจุด",
    inputRequired: ["รายการ issue จาก audit (axe/manual/Lighthouse)", "Code ที่เกี่ยวข้อง", "ขอบเขตที่แก้ได้ (แตะ component กลางได้ไหม)"],
    promptText: `You are an accessibility engineer fixing audit findings properly — at the root cause, not symptom-by-symptom.

Audit findings: [PASTE: tool output or manual findings]. Relevant code: [PASTE COMPONENTS/PAGES]. Scope: [can I modify shared components / design tokens, or page-level only?].

Task:
1. ROOT-CAUSE GROUPING: cluster the findings — 40 instances of "button without accessible name" is ONE fix in the shared IconButton, not 40 fixes; produce the cluster table (finding pattern / instance count / root component / single fix location)
2. FIX PRIORITY: blockers first (keyboard inaccessible, missing names, focus traps) → contrast → structure (headings/landmarks) → polish; within each, shared-component fixes before page fixes
3. IMPLEMENT each cluster fix:
   - Show the diff
   - Fix the CAUSE: if IconButton allows no-label usage, change its API (require label) so the violation becomes impossible, don't just patch current call sites
   - Contrast fixes change TOKENS (flag for design approval) not one-off colors
4. NO REGRESSIONS: each fix notes what it might break (changed DOM structure,新 required props → compile errors at call sites are GOOD, list them)
5. PREVENTION: per cluster, the guard that stops recurrence — eslint-plugin-jsx-a11y rule, type-level enforcement, or CI axe check — be specific
6. VERIFY: per fix, the 1-line manual check (keyboard sequence / screen reader expectation) since automated tools can't confirm everything

Output: cluster table → ordered fixes as diffs → prevention rules → manual verification script. Anything you cannot fix without design decisions (e.g. no passing color exists in palette) goes in a DESIGN DECISIONS NEEDED list, not silently guessed.`,
    outputFormat: "Cluster table + diffs เรียงลำดับ + prevention rules + verification script + รายการที่ต้องให้ design ตัดสิน",
    constraints: ["แก้ที่ root component ไม่ปะผุรายจุด", "เปลี่ยน API ให้ violation เกิดไม่ได้ถ้าทำได้", "Contrast แก้ที่ token + flag ขอ approve", "ทุก fix มี manual check"],
    bestUsedWith: ["Claude Code", "Cursor"],
    tags: ["accessibility", "audit", "refactor"],
    exampleInput: "axe เจอ 47 issues: 31 button-name, 12 contrast, 4 heading-order + code repo",
    expectedOutputPreview: "Cluster 1: button-name ×31 → root: IconButton ไม่บังคับ label → แก้ API: aria-label required... Prevention: eslint jsx-a11y/control-has-associated-label...",
  },
];
