import type { UXTerm } from "@/types/playbook";

export const EXTRA_TERMS: UXTerm[] = [
  // ─── UI COMPONENTS ───────────────────────────────────────────────
  {
    id: "primary-button",
    slug: "primary-button",
    category: "ui",
    icon: "🔵",
    term: "Primary Button",
    level: "basic",
    shortDefinition: "ปุ่มหลักที่เด่นที่สุดในหน้า — ใช้สีเต็ม, weight สูง, และต้องมีแค่ 1 จุดต่อ section",
    fullDefinition:
      "Primary button คือ highest-emphasis action ใน UI ออกแบบให้โดดเด่นที่สุดด้วยสีพื้นหลังเต็ม (filled), font weight สูง, และ shadow ทำให้ user รู้ทันทีว่า action หลักคืออะไร ควรมีแค่ 1 primary button ต่อ section หรือ screen zone",
    whyItMatters:
      "การมี primary button หลายอันใน section เดียวทำให้ user สับสนว่าควร click อะไร — ทุก primary CTA แย่ง attention กัน เหลือแค่ primary 1 อัน, secondary 1 อัน ก็พอ",
    examples: [
      "'Start Free Trial' บน pricing page",
      "'Create Project' บน dashboard empty state",
      "'Save Changes' ใน settings form",
    ],
    prompts: [
      "ตรวจ section นี้: มี primary button มากกว่า 1 อันไหม? ถ้ามี ให้ลด secondary actions เป็น secondary button หรือ text link แทน",
      "สร้าง Button component ที่มี variant: primary | secondary | destructive | ghost, size: sm | md | lg, state: default | hover | focus | disabled | loading",
    ],
    tags: ["button", "cta", "ui-component", "hierarchy"],
    visualType: "button-variants",
    relatedSlugs: ["cta", "visual-hierarchy", "cta-hierarchy"],
  },
  {
    id: "input-field",
    slug: "input-field",
    category: "ui",
    icon: "📝",
    term: "Input Field",
    level: "basic",
    shortDefinition: "ช่องรับข้อมูลจาก user — ต้องมีครบ: label, placeholder, focus state, error state, และ helper text",
    fullDefinition:
      "Input field คือ form control พื้นฐานที่รับ text input State ที่ต้องออกแบบ: default, focused (border เปลี่ยน, ring), filled (มีค่าแล้ว), error (border แดง + error message), disabled (gray + cursor-not-allowed) และ read-only",
    whyItMatters:
      "Input ที่ไม่มี label จะพัง screen reader ทันที Input ที่ไม่มี error state ที่ชัดจะทำให้ user ไม่รู้ว่าพิมพ์ผิดตรงไหน ต้องออกแบบทุก state ก่อน implement",
    examples: [
      "Email input ที่แสดง 'Enter a valid email address' เมื่อพิมพ์ผิดรูปแบบ",
      "Password input ที่มี show/hide toggle",
      "Search input ที่มี clear button เมื่อมีค่า",
    ],
    prompts: [
      "ออกแบบ Input component ที่รองรับ: label, placeholder, helper text, error message, prefix/suffix icon, และทุก state — accessible ด้วย aria-describedby เชื่อม error message",
      "Audit ทุก input field ในหน้านี้: มี label ทุกอัน? error state ชัดพอไหม? focus ring เห็นไหม? keyboard navigable ไหม?",
    ],
    tags: ["form", "input", "ui-component", "accessibility"],
    visualType: "form-fields",
    relatedSlugs: ["form-section", "error-state", "aria-label", "focus-state"],
  },
  {
    id: "select-dropdown",
    slug: "select-dropdown",
    category: "ui",
    icon: "🔽",
    term: "Select / Dropdown",
    level: "basic",
    shortDefinition: "Component สำหรับเลือก option จาก list — ใช้เมื่อมี 4+ options และต้องประหยัดพื้นที่",
    fullDefinition:
      "Select dropdown ใช้เมื่อมี options หลายอันที่ต้องเลือกได้แค่ 1 อัน ถ้ามี 2-3 options ควรใช้ Radio Group แทนเพราะเห็น options ทันทีโดยไม่ต้อง click Native <select> accessible กว่า custom dropdown แต่ style ได้น้อยกว่า",
    whyItMatters:
      "Custom dropdown ที่ไม่ implement keyboard navigation ทำให้ keyboard user ใช้ไม่ได้ Native <select> รองรับ keyboard, screen reader, และ mobile automatically ควรใช้ native ก่อน custom",
    examples: [
      "Country selector ใน checkout form",
      "Role selector ใน team member invite",
      "Language picker ใน settings page",
    ],
    prompts: [
      "ตรวจ dropdown นี้: keyboard navigable ไหม? ถ้าเป็น custom dropdown ต้องมี role='listbox', aria-expanded, และ keyboard support (Arrow keys, Enter, Escape)",
    ],
    tags: ["form", "dropdown", "select", "ui-component"],
    visualType: "form-fields",
    relatedSlugs: ["input-field", "radio-group", "form-section"],
  },
  {
    id: "checkbox",
    slug: "checkbox",
    category: "ui",
    icon: "☑️",
    term: "Checkbox",
    level: "basic",
    shortDefinition: "Control สำหรับ toggle on/off หรือเลือกหลาย option พร้อมกัน — ต้องมี label ที่ clickable เสมอ",
    fullDefinition:
      "Checkbox ใช้สำหรับ boolean toggle (agree/disagree) หรือ multi-select จาก list ต่างจาก Radio ที่เลือกได้ทีละอัน Checkbox ที่ดีต้องมี label ที่ clickable, visible focus state, indeterminate state สำหรับ select-all, และ accessible ด้วย aria-checked",
    whyItMatters:
      "Checkbox ที่ label ไม่ clickable ทำให้ user ต้อง click ตรงกล่องเล็ก ๆ ยากมากบน mobile และทำ accessibility แย่ ต้อง wrap ด้วย <label> เสมอ",
    examples: [
      "'I agree to Terms of Service' checkbox ใน signup form",
      "Multi-select table rows ด้วย checkbox ในแต่ละแถว",
      "Filter checkboxes: แสดงเฉพาะ 'Active', 'Archived', 'Draft'",
    ],
    prompts: [
      "สร้าง Checkbox component ที่ label clickable ทั้งหมด, มี indeterminate state, focus-visible ring, และ accessible ด้วย role='checkbox' และ aria-checked",
    ],
    tags: ["form", "checkbox", "ui-component", "accessibility"],
    visualType: "form-fields",
    relatedSlugs: ["radio-group", "toggle-switch", "input-field"],
  },
  {
    id: "radio-group",
    slug: "radio-group",
    category: "ui",
    icon: "🔘",
    term: "Radio Group",
    level: "basic",
    shortDefinition: "Control สำหรับเลือก 1 option จากหลาย option ที่เห็นพร้อมกัน — เหมาะกับ 2-5 options",
    fullDefinition:
      "Radio Group ต้องออกแบบเป็น group เสมอ ไม่ใช่ radio เดี่ยว ๆ เพราะ keyboard navigation ต้องใช้ Arrow keys เพื่อเลื่อนระหว่าง option ในกลุ่ม role='radiogroup' ครอบทั้ง group และ role='radio' แต่ละ option",
    whyItMatters:
      "Radio ที่ไม่ grouped ทำให้ keyboard user กด Tab ค้าง เพราะต้อง Tab ผ่านแต่ละ radio ทีละอัน Radio group ที่ถูกต้อง user กด Tab เข้า group แล้วใช้ Arrow เลือก ออก Tab ทีเดียว",
    examples: [
      "Payment method: Credit Card | Bank Transfer | Wallet",
      "Notification frequency: Immediately | Daily Digest | Weekly",
      "Plan tier: Free | Pro | Enterprise",
    ],
    prompts: [
      "แปลง radio buttons นี้ให้เป็น proper radio group ที่มี role='radiogroup', aria-labelledby, keyboard Arrow navigation, และ label clickable ทั้งหมด",
    ],
    tags: ["form", "radio", "ui-component", "accessibility"],
    visualType: "form-fields",
    relatedSlugs: ["checkbox", "select-dropdown", "form-section"],
  },
  {
    id: "toggle-switch",
    slug: "toggle-switch",
    category: "ui",
    icon: "🔀",
    term: "Toggle Switch",
    level: "basic",
    shortDefinition: "Binary on/off control ที่ apply ทันทีโดยไม่ต้อง submit — ใช้สำหรับ settings และ feature toggles",
    fullDefinition:
      "Toggle switch เหมาะกับ settings ที่มีผลทันทีเมื่อ toggle ต่างจาก Checkbox ที่ใช้ใน form ที่ต้อง submit Toggle ต้องมี label ชัดเจนบอกว่า on คืออะไร accessible ด้วย role='switch' และ aria-checked",
    whyItMatters:
      "Toggle ที่ไม่มี label ชัดทำให้ user ไม่รู้ว่า 'on' แปลว่าอะไร เช่น toggle 'Notifications' — เปิดอยู่หรือปิดอยู่? ต้องมี label บอก state ปัจจุบัน",
    examples: [
      "Dark mode toggle ใน settings",
      "Email notification on/off per notification type",
      "Feature flag toggle ใน admin panel",
    ],
    prompts: [
      "สร้าง Toggle component ที่มี role='switch', aria-checked, label บอก state ปัจจุบัน, transition animation, และ focus-visible ring ที่เห็นชัด",
    ],
    tags: ["form", "toggle", "settings", "ui-component"],
    visualType: "form-fields",
    relatedSlugs: ["checkbox", "form-section"],
  },
  {
    id: "tabs",
    slug: "tabs",
    category: "ui",
    icon: "🗂️",
    term: "Tabs / Tab Navigation",
    level: "basic",
    shortDefinition: "Pattern สำหรับแบ่ง content หน้าเดียวออกเป็นหลาย section ที่ switch ได้โดยไม่ navigate ออก",
    fullDefinition:
      "Tabs แบ่งเป็น 2 แบบหลัก: (1) Line tabs — แถบที่ active มี underline, เหมาะกับ content tabs บนหน้า (2) Segmented/Pill tabs — ปุ่มกลุ่มที่ active ดูเหมือน pressed, เหมาะกับ filter toggle Accessible ต้องมี role='tablist', role='tab', role='tabpanel' และ keyboard: Arrow keys + Enter",
    whyItMatters:
      "Tabs ที่ไม่มี keyboard navigation ทำให้ keyboard user ไม่สามารถ switch tab ได้ Tabs ควรใช้สำหรับ related parallel content ไม่ใช่ sequential steps (ใช้ Stepper แทน)",
    examples: [
      "Product page tabs: Overview | Specs | Reviews | FAQ",
      "Dashboard tabs: Summary | Transactions | Reports",
      "Settings tabs: Profile | Password | Notifications | Billing",
    ],
    prompts: [
      "สร้าง Tabs component ที่ accessible: role='tablist', role='tab' แต่ละ tab, aria-selected, aria-controls เชื่อม tabpanel, keyboard Arrow left/right ระหว่าง tabs",
    ],
    tags: ["navigation", "tabs", "ui-component", "layout"],
    visualType: "tab-nav",
    relatedSlugs: ["navbar", "sidebar", "breadcrumb"],
  },
  {
    id: "breadcrumb",
    slug: "breadcrumb",
    category: "ui",
    icon: "🍞",
    term: "Breadcrumb",
    level: "basic",
    shortDefinition: "Navigation trail ที่แสดง path จาก root ถึง page ปัจจุบัน — ช่วย user navigate ขึ้นไปยัง parent level",
    fullDefinition:
      "Breadcrumb แสดง hierarchical path เช่น Home > Products > Electronics > Cameras มักวางไว้ใต้ navbar Accessible ด้วย <nav aria-label='Breadcrumb'> และ <ol> สำหรับ list ของ links ส่วน current page ต้องมี aria-current='page'",
    whyItMatters:
      "Breadcrumb ช่วย user ที่ deep navigate รู้ว่า 'ตัวเองอยู่ที่ไหน' และ navigate ขึ้นได้ง่าย โดยเฉพาะ e-commerce และ documentation sites ที่มี deep hierarchy",
    examples: [
      "Home > Settings > Team > Members",
      "Docs > API Reference > Authentication > OAuth",
      "Shop > Electronics > Laptops > Gaming",
    ],
    prompts: [
      "เพิ่ม breadcrumb ให้ page นี้ โดยใช้ <nav aria-label='Breadcrumb'><ol> structure และ aria-current='page' สำหรับ current page ขอให้ responsive (ซ่อน middle items บน mobile)",
    ],
    tags: ["navigation", "breadcrumb", "ui-component", "accessibility"],
    visualType: "flow",
    relatedSlugs: ["navbar", "tabs", "information-architecture"],
  },
  {
    id: "data-table",
    slug: "data-table",
    category: "ui",
    icon: "📊",
    term: "Data Table",
    level: "intermediate",
    shortDefinition: "Component สำหรับแสดง structured data แบบ row/column — ต้องมี sorting, filtering, และ bulk actions",
    fullDefinition:
      "Data table ที่ดีมี: column sorting (click header), inline search/filter, selectable rows ด้วย checkbox, bulk actions (delete selected), sticky header เมื่อ scroll, responsive (horizontal scroll หรือ card view บน mobile), และ pagination หรือ infinite scroll",
    whyItMatters:
      "Data table ที่ไม่ responsive พัง mobile ทันที ต้องออกแบบ mobile view แยก เช่น เปลี่ยนเป็น card view หรือ allow horizontal scroll พร้อม froze first column",
    examples: [
      "User management table: Name | Email | Role | Status | Last Login | Actions",
      "Orders table: Order ID | Customer | Amount | Status | Date",
      "Analytics table ที่ sort ตาม metric ใด ๆ ได้",
    ],
    prompts: [
      "สร้าง DataTable component ที่มี: sortable columns, row selection ด้วย checkbox, bulk delete action, inline search filter, pagination, และ responsive (card view บน mobile width < 640px)",
    ],
    tags: ["table", "data", "ui-component", "admin"],
    visualType: "data-table",
    relatedSlugs: ["pagination", "filter-bar", "stat-card"],
  },
  {
    id: "filter-bar",
    slug: "filter-bar",
    category: "ui",
    icon: "🔧",
    term: "Filter Bar",
    level: "intermediate",
    shortDefinition: "แถว controls ที่ใช้ filter และ sort data — ประกอบด้วย search input, filter dropdowns, และ active filter chips",
    fullDefinition:
      "Filter bar ช่วย user ลดข้อมูลให้เหลือเฉพาะที่เกี่ยวข้อง ดีที่สุดเมื่อ filter ที่ active แสดงเป็น chips ให้ user เห็นและ remove ทีละอันได้ รวมถึงมีปุ่ม 'Clear all filters' เมื่อมี filter active อยู่",
    whyItMatters:
      "Filter ที่ไม่แสดง active state ทำให้ user ไม่รู้ว่า data ที่เห็นถูก filter อยู่หรือเปล่า — อาจตัดสินใจผิดพลาดจากข้อมูลที่ไม่ครบ ต้องแสดง filter chips เสมอ",
    examples: [
      "Job board filter: Role | Location | Experience | Salary Range",
      "Product catalog filter: Category | Price | Brand | Rating | In Stock",
      "Dashboard filter: Date range | Team | Status",
    ],
    prompts: [
      "สร้าง FilterBar ที่แสดง active filters เป็น removable chips, มีปุ่ม 'Clear all' เมื่อมี filter active, URL sync เพื่อ shareable, และ accessible keyboard navigation",
    ],
    tags: ["filter", "search", "ui-component", "data"],
    visualType: "form-fields",
    relatedSlugs: ["data-table", "pagination", "search"],
  },
  {
    id: "stat-card",
    slug: "stat-card",
    category: "ui",
    icon: "📈",
    term: "Stat Card / KPI Card",
    level: "basic",
    shortDefinition: "Card แสดง metric เดียวพร้อม trend indicator — หน่วย building block ของ dashboard",
    fullDefinition:
      "Stat card ประกอบด้วย: metric label, current value (ใหญ่), trend percentage (↑12% vs last month), และ mini chart หรือ sparkline แบบที่ดีต้องบอกบริบทเสมอ — ตัวเลขเปล่า ๆ โดยไม่มี comparison ไม่มีความหมาย",
    whyItMatters:
      "Dashboard ที่แสดงแต่ตัวเลขโดยไม่มี context (เพิ่มหรือลด? เทียบกับอะไร?) ทำให้ decision-maker ตีความผิด Stat card ที่ดีต้องมี benchmark เสมอ",
    examples: [
      "Monthly Revenue: $48,291 ↑12% vs last month",
      "Active Users: 12,043 ↓3% vs last week",
      "Conversion Rate: 3.8% → 4.2% (↑ 0.4pp)",
    ],
    prompts: [
      "สร้าง StatCard component ที่รับ: label, value, change (percentage), trend direction, และ optional sparkline เพื่อแสดงใน dashboard grid",
    ],
    tags: ["dashboard", "metrics", "kpi", "ui-component"],
    visualType: "metrics",
    relatedSlugs: ["data-table", "information-architecture", "conversion-rate"],
  },
  {
    id: "success-state",
    slug: "success-state",
    category: "ui",
    icon: "✅",
    term: "Success State",
    level: "basic",
    shortDefinition: "UI ที่แสดงเมื่อ action สำเร็จ — ต้องชัด, brief, และ tell user what's next",
    fullDefinition:
      "Success state เกิดหลัง user ทำ action หลักสำเร็จ เช่น submit form, complete purchase, send message อาจแสดงเป็น toast สั้น ๆ, inline ใน form, หรือ full-page confirmation ต้องบอก: อะไรสำเร็จ, ขั้นตอนถัดไปคืออะไร",
    whyItMatters:
      "Success state ที่ไม่ชัดทำให้ user กด submit ซ้ำหลายรอบ เพราะไม่รู้ว่า action สำเร็จหรือยัง ต้องมี visual confirmation ที่ชัดเจนและ immediate",
    examples: [
      "'Payment successful! Order #1234 confirmed. Check your email.' หลัง checkout",
      "Form field เปลี่ยนเป็นสีเขียวหลัง validate สำเร็จ",
      "Full-page success ที่มี checkmark animation และ next steps",
    ],
    prompts: [
      "เพิ่ม success state ให้ form นี้: หลัง submit ให้แสดง confirmation ชัดเจนว่า action สำเร็จ บอก next step, และ disable submit button เพื่อป้องกัน double-submit",
    ],
    tags: ["state", "feedback", "form", "ux"],
    visualType: "cta",
    relatedSlugs: ["error-state", "toast", "empty-state"],
  },
  {
    id: "card-layout",
    slug: "card-layout",
    category: "ui",
    icon: "🃏",
    term: "Card Layout",
    level: "basic",
    shortDefinition: "Pattern สำหรับแสดง content เป็น repeating units — เหมาะกับ content ที่ scan ได้และ compare ได้",
    fullDefinition:
      "Card layout ดีสำหรับ content ที่มี similar structure เช่น product list, article grid, team directory แต่ไม่ดีสำหรับ content ที่ length ต่างกันมาก เพราะ card สูงไม่เท่ากันทำให้ layout เสีย ควรออกแบบ card ให้มี fixed height หรือใช้ masonry layout",
    whyItMatters:
      "Card grid ที่ content length ต่างกันมาก (เช่น expandable card) จะทำให้ layout เบี้ยว ควรเลือก master-detail หรือ list layout แทนสำหรับ content ที่ expandable",
    examples: [
      "Product card grid: image, name, price, rating, add to cart",
      "Article grid: thumbnail, category, title, date, read time",
      "Team directory: avatar, name, role, contact",
    ],
    prompts: [
      "ออกแบบ card layout ที่ consistent: กำหนด card height, image aspect ratio, และ truncate text ที่เกินด้วย line-clamp ไม่ให้ card สูงต่างกัน",
    ],
    tags: ["card", "grid", "layout", "ui-component"],
    visualType: "grid",
    relatedSlugs: ["data-table", "stat-card", "css-grid"],
  },
  {
    id: "form-section",
    slug: "form-section",
    category: "ui",
    icon: "📋",
    term: "Form Section",
    level: "intermediate",
    shortDefinition: "การจัด form fields เป็นกลุ่มที่มี heading และ description — ลด cognitive load ใน long form",
    fullDefinition:
      "Form section ช่วยจัด complex form ที่มี fields เยอะให้อ่านง่ายขึ้น โดยแบ่งเป็น logical groups เช่น 'Personal Info', 'Contact Details', 'Preferences' แต่ละ section มี heading, optional description, และ border/separator ที่ชัด",
    whyItMatters:
      "Long form ที่ไม่มี section ทำให้ user overwhelmed ทันที — เห็น 20 fields พร้อมกันและไม่รู้ว่าต้องเริ่มจากไหน Form section ลด cognitive load และทำให้ error ง่ายขึ้นในการ locate",
    examples: [
      "Checkout form: Shipping Address | Payment | Order Summary",
      "Profile settings: Basic Info | Contact | Preferences | Security",
      "Project creation: Details | Team | Permissions | Notifications",
    ],
    prompts: [
      "จัด form นี้ให้เป็น sections โดยแบ่ง fields เป็น logical groups ที่มี heading ชัด เพิ่ม visual separator และ optional description ต่อ section เพื่อลด cognitive load",
    ],
    tags: ["form", "layout", "ux", "cognitive-load"],
    visualType: "form-fields",
    relatedSlugs: ["input-field", "cognitive-load", "progressive-disclosure"],
  },

  // ─── UX CONCEPTS ────────────────────────────────────────────────
  {
    id: "hicks-law",
    slug: "hicks-law",
    category: "ux",
    icon: "⏱️",
    term: "Hick's Law",
    pronunciation: "ฮิคส์ ลอว์",
    level: "intermediate",
    shortDefinition: "เวลาที่ใช้ตัดสินใจเพิ่มขึ้นตาม log ของจำนวน choices — ยิ่งตัวเลือกเยอะ ยิ่งเลือกนาน",
    fullDefinition:
      "Hick's Law: T = b × log₂(n+1) — เวลาตัดสินใจ (T) เพิ่มตามจำนวน choices (n) แบบ logarithmic ไม่ใช่ linear ใช้หลักนี้เพื่อลด options ที่ user เห็นพร้อมกัน โดยใช้ progressive disclosure, categorization, หรือ recommendation",
    whyItMatters:
      "Navigation menu ที่มี 20 items ทำให้ user ใช้เวลาเลือกนานกว่า menu 7 items อย่างมีนัยสำคัญ ลด decision paralysis ด้วย grouping และ recommendation (เช่น 'Most Popular' badge)",
    examples: [
      "Netflix ที่แนะนำ 'Continue Watching' แทนแสดงทั้ง catalog",
      "Signup form ที่ขอแค่ email ก่อน ไม่ต้องกรอกทุกอย่างพร้อมกัน",
      "Pricing page ที่ highlight tier ที่ recommend เพื่อลด decision time",
    ],
    prompts: [
      "Audit navigation นี้ด้วย Hick's Law: ลด items ให้เหลือ core actions สูงสุด 7 อัน group ที่คล้ายกัน และ highlight recommended action",
    ],
    tags: ["ux-principles", "cognitive", "decision", "navigation"],
    visualType: "hierarchy",
    relatedSlugs: ["cognitive-load", "visual-hierarchy", "progressive-disclosure"],
  },
  {
    id: "fitts-law",
    slug: "fitts-law",
    category: "ux",
    icon: "🎯",
    term: "Fitts's Law",
    pronunciation: "ฟิตส์ ลอว์",
    level: "intermediate",
    shortDefinition: "เวลาที่ใช้เคลื่อนไปยัง target ขึ้นกับ ระยะทาง และ ขนาด target — ใหญ่และใกล้กว่า = เร็วกว่า",
    fullDefinition:
      "Fitts's Law: T = a + b × log₂(D/W + 1) — ยิ่ง target ใกล้และใหญ่ ยิ่ง interact ได้เร็ว นำมาใช้ใน UI: ปุ่ม CTA ต้องใหญ่พอ, corner/edge ของ screen เป็น 'infinite target' (Fitts's target), และ touch target ต้องไม่เล็กกว่า 44×44px",
    whyItMatters:
      "Icon button ขนาด 16×16px บน mobile ทำให้ miss tap บ่อย Touch target ต้องมีขนาดอย่างน้อย 44×44px (Apple HIG) หรือ 48×48dp (Material) แม้ visual element จะเล็กกว่า",
    examples: [
      "FAB (Floating Action Button) วางที่มุมล่างขวาเพราะเป็น thumb zone ของ mobile",
      "Primary CTA button ขนาดใหญ่และอยู่ใกล้ content ที่ user กำลังอ่าน",
      "Hamburger menu ที่ขยาย touch area ด้วย padding",
    ],
    prompts: [
      "ตรวจ touch targets ในหน้านี้: ปุ่มทุกอันต้องมี min touch area 44×44px ถ้า icon button ให้เพิ่ม padding ขยาย clickable area และเพิ่ม aria-label",
    ],
    tags: ["ux-principles", "touch", "mobile", "accessibility"],
    visualType: "button-variants",
    relatedSlugs: ["touch-target", "primary-button", "cognitive-load"],
  },
  {
    id: "affordance",
    slug: "affordance",
    category: "ux",
    icon: "🚪",
    term: "Affordance",
    pronunciation: "แอฟ-ฟอร์-เดินส์",
    level: "intermediate",
    shortDefinition: "คุณสมบัติของ object ที่บอกว่า 'ทำอะไรกับมันได้บ้าง' โดยไม่ต้องอ่าน instruction",
    fullDefinition:
      "Affordance ใน UX หมายถึง perceived affordance — user มองแล้วรู้ทันทีว่าจะทำอะไรได้ เช่น ปุ่มที่ดูกด-ได้, link ที่ดู clickable, slider ที่ดูลากได้ Good affordance = ไม่ต้องมี instruction ทำให้ interface เรียนรู้ได้โดย exploration",
    whyItMatters:
      "Flat design ที่ไม่มี visual cue (shadow, underline, hover state) ทำให้ user ไม่รู้ว่าอะไร clickable ต้องมี affordance cues เช่น cursor change, hover effect, underline บน link",
    examples: [
      "ปุ่มที่มี shadow, border radius, และเปลี่ยน color เมื่อ hover — ดูกด-ได้ทันที",
      "Text underline บน link — บอกว่า clickable",
      "Drag handle icon บน sortable list item — บอกว่า draggable",
    ],
    prompts: [
      "Audit affordance ใน UI นี้: element ที่ interactive ทุกอันต้องมี visual cue ที่บอกว่ากด-ได้ drag-ได้ หรือ click-ได้ เพิ่ม hover state, cursor change, หรือ visual weight ตามความเหมาะสม",
    ],
    tags: ["ux-principles", "interaction", "perception", "usability"],
    visualType: "form-fields",
    relatedSlugs: ["signifier", "feedback-loop", "error-prevention"],
  },
  {
    id: "signifier",
    slug: "signifier",
    category: "ux",
    icon: "💡",
    term: "Signifier",
    pronunciation: "ซิก-นิ-ไฟ-เออร์",
    level: "intermediate",
    shortDefinition: "เครื่องหมายหรือ cue ที่บอก user ว่าต้องทำอะไรและที่ไหน — ต่างจาก Affordance ที่เป็นความสามารถจริง",
    fullDefinition:
      "Signifier คือ visual หรือ auditory signal ที่บอก action ที่ควรทำ เช่น magnifying glass icon บอกว่า 'search ที่นี่', down arrow บน select บอกว่า 'คลิกเพื่อ expand', placeholder text บอกว่า 'พิมพ์ข้อความที่นี่' Donald Norman แยก affordance (ทำได้) กับ signifier (บอกว่าต้องทำ)",
    whyItMatters:
      "Invisible affordance ที่ไม่มี signifier ทำให้ user ค้นพบ feature โดยบังเอิญเท่านั้น Signifier ที่ดีทำให้ discoverability สูง — user เห็นแล้วรู้ว่าต้องทำอะไร",
    examples: [
      "Hamburger icon (≡) บนมุมบนซ้าย — signify menu ที่ซ่อนอยู่",
      "Dotted border รอบ drag zone — signify ว่า drag-and-drop ได้ที่นี่",
      "Placeholder text 'Search anything…' — signify ว่า field นี้ searchable",
    ],
    prompts: [
      "ตรวจว่า interactive elements ทุกอันใน UI นี้มี signifier ที่ชัดเจน: icon สำหรับ action, placeholder text สำหรับ input, hover state สำหรับ clickable element",
    ],
    tags: ["ux-principles", "perception", "design", "usability"],
    visualType: "form-fields",
    relatedSlugs: ["affordance", "feedback-loop", "visual-hierarchy"],
  },
  {
    id: "error-prevention",
    slug: "error-prevention",
    category: "ux",
    icon: "🛡️",
    term: "Error Prevention",
    pronunciation: "เอ็ร์-เรอร์ พรี-เวน-ชัน",
    level: "intermediate",
    shortDefinition: "Nielsen Heuristic #5: ออกแบบให้ error ไม่เกิดขึ้น ดีกว่าแค่แสดง error message ที่ดี",
    fullDefinition:
      "Error prevention มาก่อน error recovery ได้แก่: confirmation dialog ก่อน destructive action, format hint ใน input (เช่น DD/MM/YYYY), disable button จนกว่าจะกรอกครบ, auto-correct ง่าย ๆ, constraint ที่ป้องกัน invalid input (เช่น date picker แทน text input)",
    whyItMatters:
      "Error message ที่ดีแก้ไขความเสียหายหลังจากเกิดแล้ว Error prevention ป้องกันไม่ให้เกิดตั้งแต่แรก ลด frustration ได้มากกว่า โดยเฉพาะ destructive actions เช่น delete, send, และ publish",
    examples: [
      "Confirm dialog 'Are you sure you want to delete this project? This cannot be undone.'",
      "Date input ที่ใช้ date picker แทน free text เพื่อป้องกัน format error",
      "Submit button ที่ disable จนกว่าทุก required field จะกรอกครบ",
    ],
    prompts: [
      "Audit ทุก destructive action ใน UI นี้: มี confirmation step ก่อน delete/publish/send? มี undo option ไหม? required fields validate real-time เพื่อ prevent submit กับ invalid data?",
    ],
    tags: ["ux-principles", "error", "heuristics", "form"],
    visualType: "form-fields",
    relatedSlugs: ["error-state", "feedback-loop", "input-field"],
  },
  {
    id: "recognition-over-recall",
    slug: "recognition-over-recall",
    category: "ux",
    icon: "🧩",
    term: "Recognition over Recall",
    pronunciation: "เรค-อ็อก-นิ-ชัน โอเวอร์ รี-คอล",
    level: "intermediate",
    shortDefinition: "Nielsen Heuristic #6: ช่วย user 'จำ' โดยแสดง options แทนให้พิมพ์เองจาก memory",
    fullDefinition:
      "Recognition (เห็นแล้วรู้จัก) ง่ายกว่า Recall (นึกเองจาก memory) มาก Design ที่ดีต้องให้ user recognize ไม่ใช่ recall เช่น dropdown แทน free text input, visible navigation แทนต้องจำ URL, search with suggestions แทน exact keyword match",
    whyItMatters:
      "Command-line interface ต้องใช้ recall สูง — ต้องจำ command ทุกอัน GUI ใช้ recognition — เห็นแล้วเลือก ลด memory load ด้วย tooltips, autocomplete, visible options, และ context menus",
    examples: [
      "Search autocomplete ที่แสดง suggestions ขณะพิมพ์ — ไม่ต้องจำชื่อ exact",
      "Color picker UI แทน hex code input — เห็นสีแล้วเลือก",
      "Breadcrumb navigation แสดง path ปัจจุบัน — ไม่ต้องจำว่ามาจากไหน",
    ],
    prompts: [
      "ตรวจ form fields และ inputs ทั้งหมดนี้: มีอะไรที่ต้องให้ user recall information เอง? เพิ่ม autocomplete, suggestions, หรือ format hint เพื่อลด memory load",
    ],
    tags: ["ux-principles", "heuristics", "memory", "usability"],
    visualType: "sidebar",
    relatedSlugs: ["cognitive-load", "affordance", "information-architecture"],
  },
  {
    id: "mental-model",
    slug: "mental-model",
    category: "ux",
    icon: "🗺️",
    term: "Mental Model",
    pronunciation: "เมน-ทัล โมเดล",
    level: "intermediate",
    shortDefinition: "ความเข้าใจของ user ว่าระบบทำงานอย่างไร — Interface ที่ดีต้องตรงกับ mental model ของ user ไม่ใช่ mental model ของ developer",
    fullDefinition:
      "Mental model คือ representation ใน head ของ user ว่า 'ระบบทำงานแบบนี้' เช่น user ที่เคยใช้ Gmail คิดว่า email ทุก app ทำงานแบบเดิม ถ้า UI ของเราไม่ match mental model ที่ user มี จะเกิด confusion และ error",
    whyItMatters:
      "ทดสอบ mental model ด้วย card sorting และ user interview ก่อนออกแบบ navigation ถ้า navigation structure ตาม internal organization chart ไม่ใช่วิธีที่ user คิดถึง product — ต้องแก้ structure",
    examples: [
      "User คาดหวังว่า 'Trash' จะยังเก็บไฟล์ไว้ 30 วัน (mental model จาก Windows/Mac)",
      "Shopping cart icon = 'สิ่งที่จะซื้อ' — universal mental model ที่ไม่ควรเปลี่ยน",
      "User ที่ใช้ spreadsheet คุ้นเคยกับ row/column ใน data table",
    ],
    prompts: [
      "ก่อน redesign navigation นี้: ทำ card sorting กับ user 5-8 คนเพื่อ validate ว่า grouping ที่เราคิดตรงกับ mental model จริง ไม่ใช่แค่ตาม internal team structure",
    ],
    tags: ["ux-research", "cognition", "design", "usability"],
    visualType: "flow",
    relatedSlugs: ["information-architecture", "card-sorting", "cognitive-load"],
  },
  {
    id: "friction",
    slug: "friction",
    category: "ux",
    icon: "🔩",
    term: "Friction",
    pronunciation: "ฟริก-ชัน",
    level: "intermediate",
    shortDefinition: "อุปสรรคในการทำ task ที่ทำให้ slow down, frustrated, หรือ abandon — บางครั้ง friction ตั้งใจ (เช่น confirm delete)",
    fullDefinition:
      "Friction ใน UX แบ่งเป็น unintentional (ควรลด) กับ intentional friction (ควรรักษาไว้) Unintentional friction: form ที่ยาวเกิน, navigation ที่ซับซ้อน, error message ที่ไม่ชัด Intentional friction: confirm ก่อน delete, captcha สำหรับ bot prevention, cooling period ก่อน irreversible action",
    whyItMatters:
      "Checkout friction ทุก field ที่ไม่จำเป็นลด conversion ทันที 1 field = ~X% drop ในบาง study ต้องตรวจว่า friction ทุกอันใน flow มีเหตุผลจริง ไม่ใช่แค่ legacy requirement",
    examples: [
      "Unintentional: ต้องสร้าง account ก่อน checkout — guest checkout ลด friction",
      "Intentional: 'Type DELETE to confirm' ก่อนลบ account ถาวร",
      "Intentional: 2FA ก่อน sign in จาก new device — security friction",
    ],
    prompts: [
      "Map ทุก friction point ใน user flow นี้: อันไหน unintentional ที่ควรลด? อันไหน intentional friction ที่ protect user หรือ system? ลบเฉพาะ unintentional",
    ],
    tags: ["ux", "conversion", "flow", "usability"],
    visualType: "flow",
    relatedSlugs: ["conversion-rate", "onboarding-flow", "error-prevention"],
  },

  // ─── UX/UI LEAD SKILLS ────────────────────────────────────────────
  {
    id: "design-qa",
    slug: "design-qa",
    category: "lead",
    icon: "🔍",
    term: "Design QA",
    level: "intermediate",
    shortDefinition: "กระบวนการตรวจสอบว่า implementation ตรงกับ design spec — ก่อน ship feature ทุกครั้ง",
    fullDefinition:
      "Design QA คือการเปรียบเทียบ shipped UI กับ design spec อย่างเป็นระบบ ตรวจ: spacing, color, typography, component state, responsive behavior, และ micro-interaction ทำ QA checklist ต่อ component และ screen resolution",
    whyItMatters:
      "ไม่มี design QA = developer implement ตาม interpretation ตัวเอง ซึ่งมักเบี่ยงเบนจาก spec 20-40% มีผลต่อ brand consistency และ usability โดยตรง",
    examples: [
      "ตรวจ spacing ด้วย browser DevTools โดยเช็ค padding/margin ทุก element เทียบกับ Figma",
      "ตรวจ hover/focus state ทุก interactive element ว่าทำงานถูกต้อง",
      "ตรวจ responsive ที่ breakpoints หลัก: 375, 768, 1024, 1440px",
    ],
    prompts: [
      "Conduct design QA บนหน้านี้: list ทุก deviation จาก design spec เรียงตาม severity (visual / functional / accessibility) พร้อม screenshot และ fix recommendation",
      "สร้าง Design QA checklist สำหรับ component library นี้ ครอบคลุม: visual fidelity, spacing, typography, color, state, responsive, accessibility",
    ],
    tags: ["lead", "quality", "process", "review"],
    visualType: "critique",
    relatedSlugs: ["design-handoff", "component-audit", "accessibility"],
  },
  {
    id: "component-audit",
    slug: "component-audit",
    category: "lead",
    icon: "🔎",
    term: "Component Audit",
    level: "advanced",
    shortDefinition: "การ inventory และ evaluate component ทั้งหมดใน product เพื่อหา duplication, inconsistency, และ gap",
    fullDefinition:
      "Component audit เป็น first step ก่อนสร้าง design system สำรวจทุก component ที่ใช้อยู่ใน product screenshots, catalog ด้วย Figma หรือ spreadsheet จัดกลุ่มตาม type, วัด frequency of use, และ identify ว่าอันไหน consolidate ได้",
    whyItMatters:
      "ทีมที่ไม่เคย audit มักไม่รู้ว่ามี button design 12 แบบใน codebase Component audit ทำให้เห็นภาพรวมว่าต้อง standardize อะไรก่อน",
    examples: [
      "พบว่ามี button component 7 variants แต่มี use case จริงแค่ 4 ควร merge",
      "Modal ที่ implement 4 ครั้งใน 4 teams แต่ design ต่างกัน ควร consolidate",
    ],
    prompts: [
      "Audit components ทั้งหมดใน codebase นี้: list ทุก component, นับ usage frequency, หา duplicates ที่ควร merge, และ identify gaps ที่ design system ต้องเพิ่ม",
    ],
    tags: ["lead", "design-system", "audit", "process"],
    visualType: "design-system",
    relatedSlugs: ["design-system", "design-qa", "ux-debt"],
  },
  {
    id: "ux-debt",
    slug: "ux-debt",
    category: "lead",
    icon: "💳",
    term: "UX Debt",
    level: "advanced",
    shortDefinition: "การสะสมของ UX problems ที่รู้อยู่แต่ไม่ได้แก้ — เหมือน technical debt แต่เป็น user experience",
    fullDefinition:
      "UX debt เกิดจาก: shipping fast without proper UX, workaround ที่สะสม, legacy patterns ที่ไม่ update, และ inconsistency ที่เพิ่มขึ้นเรื่อย ๆ ต้อง track ด้วย backlog item ที่มี severity, impact, และ effort estimate",
    whyItMatters:
      "UX debt ที่ไม่ track จะถูก deprioritize ตลอด จนกระทั่ง user complain หนักพอ การ document และ quantify impact (เช่น 'ทำให้ completion rate ลด 15%') ทำให้ stakeholder เห็นความสำคัญ",
    examples: [
      "Form ที่ user ต้อง re-enter data ซ้ำในหลาย steps — UX debt",
      "Mobile layout ที่ patch แล้ว patch เล่าจน code ซับซ้อนและ UI พัง",
      "Error messages ที่ยังเป็น technical code ภาษา developer ไม่ใช่ user-friendly text",
    ],
    prompts: [
      "สร้าง UX Debt log สำหรับ product นี้: list ทุก known UX problem พร้อม severity (P1-P3), estimated user impact, และ effort to fix เพื่อ prioritize ใน next sprint",
    ],
    tags: ["lead", "process", "debt", "prioritization"],
    visualType: "metrics",
    relatedSlugs: ["component-audit", "prioritization-matrix", "design-qa"],
  },
  {
    id: "stakeholder-review",
    slug: "stakeholder-review",
    category: "lead",
    icon: "🤝",
    term: "Stakeholder Review",
    level: "advanced",
    shortDefinition: "การนำเสนอ design ให้ stakeholder ที่ไม่ใช่ designer review — ต้องเตรียม context และ framing อย่างถูกวิธี",
    fullDefinition:
      "Stakeholder review ต่างจาก design critique — stakeholder มักตัดสินจาก preference ไม่ใช่ user data ต้องเตรียม: business context, user data ที่ support decision, option ที่ evaluated (ไม่ใช่แค่ final), และ trade-off ที่ชัดเจน เพื่อ guide discussion ไม่ให้วน loop",
    whyItMatters:
      "Designer ที่ present design โดยไม่มี framing มักเจอ 'Can we make it more colorful?' หรือ 'I prefer this style' ต้อง shift conversation จาก preference ไปหา user goal และ business metric",
    examples: [
      "Present checkout redesign ด้วย user research data และ A/B test estimate ก่อนเริ่มถาม feedback",
      "Show 3 design directions พร้อม trade-off แต่ละอันแทนแสดงแค่ final design",
    ],
    prompts: [
      "เตรียม stakeholder presentation สำหรับ design นี้: เริ่มด้วย user problem, user data, design decisions, options ที่ rejected, และ next steps — ไม่ใช่แค่ show design",
    ],
    tags: ["lead", "presentation", "communication", "process"],
    visualType: "handoff",
    relatedSlugs: ["design-critique", "decision-log", "design-handoff"],
  },
  {
    id: "decision-log",
    slug: "decision-log",
    category: "lead",
    icon: "📓",
    term: "Design Decision Log",
    level: "intermediate",
    shortDefinition: "การ document ว่าทำไมถึงตัดสินใจอย่างนั้น — ป้องกันการตั้งคำถามซ้ำในอนาคต",
    fullDefinition:
      "Decision log record: decision ที่ทำ, options ที่ considered, เหตุผลที่เลือก, trade-off, และใครมีส่วนร่วม ช่วย onboard team member ใหม่, ป้องกัน 'Why did we do this?', และ reference เมื่อต้อง revisit decision เดิม",
    whyItMatters:
      "ทีมที่ไม่มี decision log มักตั้งคำถามซ้ำทุก 6 เดือน และได้ decision เดิม — waste time มาก Decision log ทำให้ team velocity สูงขึ้นและ reduce politics",
    examples: [
      "Design token naming convention: ทำไมใช้ semantic names (--color-primary) แทน value names (--purple-600)",
      "Chose tabs over accordion: เพราะ user testing พบว่า tabs ทำให้ scanability สูงกว่า",
    ],
    prompts: [
      "สร้าง decision log สำหรับ design decision หลัก 5 อันใน project นี้: decision, options considered, rationale, trade-offs, และ stakeholders involved",
    ],
    tags: ["lead", "process", "documentation", "communication"],
    visualType: "handoff",
    relatedSlugs: ["design-handoff", "stakeholder-review", "ux-debt"],
  },
  {
    id: "prioritization-matrix",
    slug: "prioritization-matrix",
    category: "lead",
    icon: "🎯",
    term: "Prioritization Matrix",
    level: "advanced",
    shortDefinition: "Framework สำหรับเรียงลำดับ design tasks ด้วย 2 dimension: impact กับ effort",
    fullDefinition:
      "Impact/Effort matrix แบ่ง backlog เป็น 4 quadrant: Quick Wins (high impact, low effort) → ทำก่อน, Major Projects (high impact, high effort) → plan carefully, Fill-ins (low impact, low effort) → ทำเมื่อมีเวลา, Waste (low impact, high effort) → skip ใช้ร่วมกับ user data เพื่อ estimate impact ไม่ใช่แค่ assumption",
    whyItMatters:
      "ทีมที่ไม่มี prioritization framework มักทำ task ที่ interesting ไม่ใช่ task ที่ impact สูงสุด Matrix บังคับให้ explicit เรื่อง trade-off และทำให้ stakeholder align กันได้ง่ายขึ้น",
    examples: [
      "Quick Win: เพิ่ม empty state ให้ 3 หน้า ใช้เวลา 2 วัน impact สูงมาก",
      "Major Project: Redesign checkout flow — 6 weeks แต่ estimated +15% conversion",
    ],
    prompts: [
      "สร้าง impact/effort matrix สำหรับ UX backlog นี้: ใส่ทุก item ใน 4 quadrant พร้อม rationale และ identify top 3 Quick Wins ที่ควรทำ sprint นี้",
    ],
    tags: ["lead", "process", "strategy", "prioritization"],
    visualType: "metrics",
    relatedSlugs: ["ux-debt", "decision-log", "design-qa"],
  },
  {
    id: "design-system-governance",
    slug: "design-system-governance",
    category: "lead",
    icon: "⚖️",
    term: "Design System Governance",
    level: "advanced",
    shortDefinition: "กระบวนการ contribute, review, และ maintain design system ให้ทีมหลายทีมใช้ร่วมกันได้โดยไม่ chaos",
    fullDefinition:
      "Design system governance กำหนด: ใครเป็น owner, process ในการ contribute component ใหม่, review criteria, versioning strategy, deprecation process, และ communication plan ให้ consumers ทราบเมื่อมี breaking change",
    whyItMatters:
      "Design system ที่ไม่มี governance จะ fork หรือ abandoned ทีมต่างๆ จะ override หรือ duplicate components เพราะ process ขอเพิ่มช้าเกิน ต้องหา balance ระหว่าง consistency กับ flexibility",
    examples: [
      "RFC process สำหรับ propose component ใหม่: เสนอ → review → approve → implement → document",
      "Semantic versioning สำหรับ design tokens และ components",
    ],
    prompts: [
      "ออกแบบ governance model สำหรับ design system นี้: contribution process, review criteria, owner responsibilities, versioning, และ how to communicate breaking changes",
    ],
    tags: ["design-system", "governance", "lead", "process"],
    visualType: "design-system",
    relatedSlugs: ["design-system", "component-audit", "decision-log"],
  },

  // ─── ACCESSIBILITY ─────────────────────────────────────────────
  {
    id: "focus-state",
    slug: "focus-state",
    category: "accessibility",
    icon: "⭕",
    term: "Focus State",
    level: "basic",
    shortDefinition: "Visual indicator ที่แสดงว่า element ไหนกำลัง focused ด้วย keyboard — ห้ามซ่อน, ต้องเห็นชัด",
    fullDefinition:
      "Focus state แสดงผ่าน CSS :focus-visible pseudo-class ให้กับ keyboard users ที่ navigate โดยไม่ใช้ mouse WCAG 2.4.7 กำหนดว่า focus indicator ต้องเห็นได้ชัด (visible) การ set outline: none โดยไม่มี replacement ทำให้ keyboard accessibility พัง",
    whyItMatters:
      "Designer มักซ่อน focus ring เพราะดู 'ไม่สวย' แต่ทำให้ keyboard users, คนที่ใช้ switch access, และ screen reader users ไม่สามารถรู้ว่า cursor อยู่ที่ไหน Focus state เป็น hard requirement, ไม่ใช่ optional",
    examples: [
      "outline: 2px solid #5B4BFF; outline-offset: 2px — visible, minimal, ไม่ทำลาย design",
      "Focus ring สีขาวบน dark background เพื่อ contrast",
      "ใช้ :focus-visible แทน :focus เพื่อแสดงเฉพาะ keyboard navigation ไม่ใช่ mouse click",
    ],
    prompts: [
      "Audit focus states ทั้งหมดในหน้านี้: Tab ผ่านทุก interactive element — แต่ละอันต้องมี visible focus indicator ที่ contrast ratio อย่างน้อย 3:1 กับ background",
    ],
    tags: ["accessibility", "keyboard", "focus", "wcag"],
    visualType: "color-contrast",
    relatedSlugs: ["keyboard-navigation", "color-contrast", "aria-label"],
  },
  {
    id: "color-contrast",
    slug: "color-contrast",
    category: "accessibility",
    icon: "🎨",
    term: "Color Contrast",
    level: "basic",
    shortDefinition: "อัตราส่วนความต่างระหว่างสี text และ background — WCAG AA ต้องการ 4.5:1 สำหรับ normal text",
    fullDefinition:
      "WCAG กำหนด contrast ratio: AA level ต้องการ 4.5:1 (normal text), 3:1 (large text ≥18pt หรือ bold ≥14pt) และ AAA ต้องการ 7:1 ตรวจด้วย browser DevTools, axe extension, หรือ Figma plugins เช่น Contrast",
    whyItMatters:
      "สีที่ดูเข้ากันบนจอ designer ที่ calibrated อาจ fail contrast บนจอ budget ทั่วไป หรือเมื่อ user เพิ่ม browser zoom คนที่มีสายตาเลือนราง color blindness หรืออยู่ใน bright sunlight จะอ่านไม่ได้",
    examples: [
      "#5B4BFF บน white = ratio 8.3:1 → AAA ✓",
      "Gray text #8B95A1 บน white = ratio 3.4:1 → FAIL สำหรับ normal text",
      "White text บน yellow background = ratio 1.1:1 → FAIL ทุก level",
    ],
    prompts: [
      "Audit color contrast ทั้งหมดในหน้านี้ โดยใช้ browser Accessibility panel หรือ axe extension: list ทุก element ที่ fail WCAG AA และ propose สีที่ pass",
    ],
    tags: ["accessibility", "color", "wcag", "contrast"],
    visualType: "color-contrast",
    relatedSlugs: ["focus-state", "aria-label", "design-tokens"],
  },
  {
    id: "aria-label",
    slug: "aria-label",
    category: "accessibility",
    icon: "🏷️",
    term: "ARIA Label",
    level: "intermediate",
    shortDefinition: "Attribute ที่เพิ่ม accessible name ให้ element ที่ไม่มี visible text — จำเป็นสำหรับ icon buttons",
    fullDefinition:
      "ARIA (Accessible Rich Internet Applications) attributes เพิ่ม semantic information ให้ screen reader: aria-label เพิ่ม text label โดยตรง, aria-labelledby อ้างอิง element อื่น, aria-describedby เพิ่ม description เพิ่มเติม ใช้สำหรับ icon buttons, search inputs, landmarks, complex widgets",
    whyItMatters:
      "Icon button ที่ไม่มี aria-label จะถูก screen reader อ่านว่า 'button' เท่านั้น user ไม่รู้ว่าปุ่มทำอะไร ทุก interactive element ที่ไม่มี visible text ต้องมี aria-label",
    examples: [
      "<button aria-label='Close dialog'>✕</button>",
      "<input type='search' aria-label='Search products'>",
      "<nav aria-label='Main navigation'>",
    ],
    prompts: [
      "Audit ทุก icon button และ interactive element ที่ไม่มี visible text ในหน้านี้: เพิ่ม aria-label ที่ descriptive และ action-oriented เช่น 'Close dialog' ไม่ใช่แค่ 'Close'",
    ],
    tags: ["accessibility", "aria", "screen-reader", "wcag"],
    visualType: "accessibility",
    relatedSlugs: ["keyboard-navigation", "focus-state", "semantic-html"],
  },
  {
    id: "touch-target",
    slug: "touch-target",
    category: "accessibility",
    icon: "👆",
    term: "Touch Target Size",
    level: "basic",
    shortDefinition: "พื้นที่ที่กด-ได้บน touchscreen — ต้องไม่เล็กกว่า 44×44px (Apple) หรือ 48×48dp (Material)",
    fullDefinition:
      "Touch target คือ tappable area ที่อาจใหญ่กว่า visual element ด้วย padding WCAG 2.5.5 (Level AAA) กำหนด 44×44 CSS pixels Apple HIG: 44×44pt Material: 48×48dp ขนาดเล็กกว่านี้ทำให้ miss tap บ่อย โดยเฉพาะ fine motor difficulties",
    whyItMatters:
      "Icon ขนาด 16px ที่ไม่มี padding พิเศษ = miss tap บน mobile ทุก 3 ครั้ง ต้องเพิ่ม padding invisible หรือ min-height/min-width เพื่อขยาย touch area โดยไม่เปลี่ยน visual",
    examples: [
      "Close button ขนาด 16px icon แต่มี 44×44px clickable area ด้วย padding",
      "Table row action buttons ที่ขยาย touch target ด้วย p-3",
      "Navigation links ที่มี py-3 เพื่อ touchable บน mobile",
    ],
    prompts: [
      "ตรวจ touch targets บน mobile (375px) ใน UI นี้: highlight element ทุกอันที่เล็กกว่า 44×44px และ suggest วิธีขยาย touch area ด้วย padding โดยไม่เปลี่ยน visual design",
    ],
    tags: ["accessibility", "mobile", "touch", "wcag"],
    visualType: "button-variants",
    relatedSlugs: ["fitts-law", "keyboard-navigation", "focus-state"],
  },
  {
    id: "reduced-motion",
    slug: "reduced-motion",
    category: "accessibility",
    icon: "⏸️",
    term: "Reduced Motion",
    level: "intermediate",
    shortDefinition: "CSS media query ที่ detect ว่า user ต้องการลด animation — สำคัญสำหรับ vestibular disorders",
    fullDefinition:
      "prefers-reduced-motion media query detect ว่า user เปิด 'Reduce Motion' ใน OS settings คนที่มี vestibular disorders อาจ feel sick หรือ dizzy จาก parallax, เมื่อ element sliding เร็ว, หรือ infinite animation ควร: ลด distance ของ motion, เปลี่ยน slide เป็น fade, หรือ disable animation",
    whyItMatters:
      "Animation ที่สวยงามสำหรับ most users อาจทำให้คนที่มี motion sensitivity รู้สึกไม่สบาย WCAG 2.3.3 (Level AAA) กำหนดให้รองรับ user preference นี้",
    examples: [
      "@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; } }",
      "Parallax scroll effect ที่ disable เมื่อ prefers-reduced-motion: reduce",
      "Carousel animation ที่เปลี่ยนเป็น instant slide แทน animated",
    ],
    prompts: [
      "เพิ่ม prefers-reduced-motion support ให้ animation ทั้งหมดใน component นี้: เปลี่ยน transition/animation ให้ลดลงหรือ disable เมื่อ user prefer reduced motion",
    ],
    tags: ["accessibility", "animation", "motion", "wcag"],
    visualType: "accessibility",
    relatedSlugs: ["keyboard-navigation", "focus-state", "color-contrast"],
  },
  {
    id: "semantic-html",
    slug: "semantic-html",
    category: "accessibility",
    icon: "🏗️",
    term: "Semantic HTML",
    level: "basic",
    shortDefinition: "การใช้ HTML elements ที่มีความหมาย (<button>, <nav>, <main>) แทน <div> ทุกอย่าง — foundation ของ accessibility",
    fullDefinition:
      "Semantic HTML elements ให้ browser และ assistive technology เข้าใจ structure โดยอัตโนมัติ: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer> เป็น landmarks, <button> มี keyboard accessibility ในตัว, <a href> มี link semantics, heading hierarchy (<h1>-<h6>) สร้าง document structure",
    whyItMatters:
      "Screen reader ใช้ HTML semantics ในการ navigate: users กด H เพื่อ jump ระหว่าง headings, กด L เพื่อ lists, B เพื่อ buttons <div onClick> ที่ไม่ใช่ button ทำให้ keyboard users activate ไม่ได้",
    examples: [
      "<nav aria-label='Main'> แทน <div class='navigation'>",
      "<button> แทน <div class='btn' onClick>",
      "<h1>, <h2>, <h3> เรียงตาม hierarchy — ไม่ข้ามระดับ",
    ],
    prompts: [
      "Audit HTML structure ของหน้านี้: เปลี่ยน <div> ที่ทำหน้าที่เป็น interactive element เป็น semantic element ที่ถูกต้อง เพิ่ม landmark roles และ heading hierarchy ที่ถูกต้อง",
    ],
    tags: ["accessibility", "html", "semantic", "screen-reader"],
    visualType: "accessibility",
    relatedSlugs: ["aria-label", "keyboard-navigation", "focus-state"],
  },

  // ─── CONVERSION UX ────────────────────────────────────────────
  {
    id: "pricing-page-ux",
    slug: "pricing-page-ux",
    category: "conversion",
    icon: "💰",
    term: "Pricing Page UX",
    level: "intermediate",
    shortDefinition: "Pattern ออกแบบ pricing page เพื่อ maximize conversion — anchoring, highlighting, และ reducing friction",
    fullDefinition:
      "Pricing page UX ที่ดีใช้: anchoring (เริ่ม show expensive plan ก่อน), highlighting recommended tier (most popular/best value), feature comparison ที่ clear, pricing toggle monthly/annual (annual ลด friction), และ FAQ ที่ address objections โดยตรง",
    whyItMatters:
      "Pricing page ที่ไม่มี highlighted recommendation ทำให้ decision paralysis สูง ทำให้ user ออกโดยไม่เลือก Research พบว่า highlighting 1 plan ช่วย conversion ได้ 15-25%",
    examples: [
      "Saas pricing: Free | Pro (⭐ Most Popular) | Enterprise — Pro ถูก highlight สีเข้ม",
      "Annual/Monthly toggle ที่แสดงส่วนลด '%' ชัดเจน เพื่อ nudge ไปหา annual",
      "FAQ ที่ตอบ 'What happens after trial?' และ 'Can I cancel anytime?'",
    ],
    prompts: [
      "Redesign pricing page นี้ด้วย: highlight recommended tier, pricing anchor (เริ่มจาก high), feature comparison table, objection FAQ, และ social proof — วัดผลด้วย A/B test",
    ],
    tags: ["conversion", "pricing", "saas", "landing-page"],
    visualType: "pricing",
    relatedSlugs: ["social-proof", "trust-signals", "cta-hierarchy", "feature-comparison"],
  },
  {
    id: "social-proof",
    slug: "social-proof",
    category: "conversion",
    icon: "⭐",
    term: "Social Proof",
    level: "basic",
    shortDefinition: "Evidence ที่แสดงว่า user อื่นเชื่อถือและใช้งาน product — รีวิว, user count, testimonials, logos",
    fullDefinition:
      "Social proof ลด perceived risk ของ conversion decision ประเภท: testimonials (ชื่อ + photo + quote), review ratings (star + count), user/customer count ('10,000+ teams'), trusted brand logos ('Used by Netflix, Stripe, Figma'), social media mentions, case studies, certifications",
    whyItMatters:
      "User ที่เจอ product ใหม่จะหา evidence ว่า 'คนอื่นใช้แล้วดีจริงไหม' ก่อน convert Social proof ที่ specific (ชื่อจริง, company จริง, metric จริง) แรงกว่า generic testimonials มาก",
    examples: [
      "'Join 50,000+ designers who use Figma' บน sign up page",
      "G2 rating badge: 4.8/5 ★ from 2,400 reviews",
      "Testimonial: 'Reduced design time 60%' — Sarah, Head of Design, Acme Corp",
    ],
    prompts: [
      "เพิ่ม social proof ให้ landing page นี้: customer logos ที่ recognizable, testimonials ที่มีชื่อ-บริษัท-metric จริง, review count จาก third-party, และ user count ที่ specific",
    ],
    tags: ["conversion", "social-proof", "trust", "landing-page"],
    visualType: "trust-signals",
    relatedSlugs: ["trust-signals", "pricing-page-ux", "cta-hierarchy"],
  },
  {
    id: "checkout-friction",
    slug: "checkout-friction",
    category: "conversion",
    icon: "🛒",
    term: "Checkout Friction",
    level: "intermediate",
    shortDefinition: "ทุก obstacle ใน checkout flow ที่ทำให้ user abandon — form fields ที่เยอะเกิน, forced registration, confusing UX",
    fullDefinition:
      "Checkout friction คือ friction ที่ส่งผลโดยตรงต่อ revenue ที่สำคัญที่สุด: (1) Forced account creation — ให้ guest checkout เสมอ (2) Form fields ที่ไม่จำเป็น (3) มีขั้นตอนเยอะเกิน (4) ไม่มี progress indicator (5) Error messages ที่ไม่ชัด (6) ไม่รองรับ payment ที่ user ต้องการ",
    whyItMatters:
      "Baymard Institute พบว่า average cart abandonment rate คือ 70% ปัญหา #1 คือ forced account creation ก่อน checkout การลด friction ใน checkout โดยตรงเพิ่ม revenue โดยไม่ต้องเพิ่ม traffic",
    examples: [
      "Amazon's 1-click checkout — ลด friction สูงสุด",
      "Guest checkout ที่ offer account creation หลัง purchase สำเร็จ",
      "Progress bar: Cart → Shipping → Payment → Review — ลด anxiety",
    ],
    prompts: [
      "Audit checkout flow นี้และ list ทุก friction point: forced registration, unnecessary fields, confusing labels, missing trust signals, unclear errors — prioritize ด้วย impact ต่อ conversion rate",
    ],
    tags: ["conversion", "checkout", "friction", "ecommerce"],
    visualType: "flow",
    relatedSlugs: ["trust-signals", "form-conversion", "friction", "onboarding-flow"],
  },
  {
    id: "form-conversion",
    slug: "form-conversion",
    category: "conversion",
    icon: "📝",
    term: "Form Conversion Optimization",
    level: "intermediate",
    shortDefinition: "การลด friction ใน forms เพื่อเพิ่ม completion rate — ลด fields, inline validation, progress indicator",
    fullDefinition:
      "Form conversion optimization ได้แก่: (1) ลด fields ให้เหลือแค่ที่จำเป็น — ทุก field เพิ่มทำให้ completion rate ลด (2) Inline validation แบบ real-time (3) Smart defaults — pre-fill ที่ทำได้ (4) ชัดเจนว่า required vs optional (5) Error recovery ง่าย (6) Single column layout บน mobile",
    whyItMatters:
      "HubSpot พบว่า form ที่มี 3 fields convert ดีกว่า form ที่มี 7 fields ถึง 160% ทุก field ที่ถามต้องมีเหตุผลที่ดีพอ ถ้าไม่ใช้ข้อมูลจริง ๆ ให้ตัดออก",
    examples: [
      "Signup form: Email + Password เท่านั้น (ถามชื่อจริงทีหลังใน onboarding)",
      "Inline validation: 'Password must be at least 8 characters' ขณะ typing ไม่ใช่หลัง submit",
      "Progressive form: step 1 ถามน้อย, step 2-3 ถามเพิ่มตามลำดับ",
    ],
    prompts: [
      "Audit form นี้: list ทุก field ว่า 'จำเป็นต้องถามตอนนี้ไหม?' ลด optional fields, เพิ่ม inline validation, และทดสอบว่า completion rate เพิ่มขึ้นไหม",
    ],
    tags: ["conversion", "form", "ux", "optimization"],
    visualType: "form-fields",
    relatedSlugs: ["checkout-friction", "friction", "input-field", "progressive-disclosure"],
  },
  {
    id: "feature-comparison",
    slug: "feature-comparison",
    category: "conversion",
    icon: "📊",
    term: "Feature Comparison Table",
    level: "intermediate",
    shortDefinition: "ตารางเปรียบเทียบ feature ระหว่าง plan หรือ competitor — ช่วย user ตัดสินใจและ highlight value ของ tier สูง",
    fullDefinition:
      "Feature comparison table ช่วย user เข้าใจ difference ระหว่าง plans อย่างรวดเร็ว ออกแบบให้: tier ที่ recommend ถูก highlight, features ที่สำคัญอยู่บน, ใช้ checkmark/X แทนข้อความยาว, และมี tooltip ถ้า feature ต้องอธิบายเพิ่ม",
    whyItMatters:
      "Comparison table ที่ไม่ถูก design ทำให้ user อ่านจากซ้ายไปขวาและเหนื่อยเร็ว ควรออกแบบให้ตาสแกนจากบนลงล่างในแต่ละ column เพื่อดูว่า plan ใดคุ้มค่าที่สุด",
    examples: [
      "Pricing table: ✓ Unlimited projects, ✓ Custom domain, ✗ SSO — ต่อ tier",
      "Competitor comparison: เรา vs Competitor A vs Competitor B",
    ],
    prompts: [
      "สร้าง feature comparison table สำหรับ pricing plans นี้: highlight recommended plan, group features เป็น categories, และเพิ่ม tooltip สำหรับ features ที่ technical",
    ],
    tags: ["conversion", "pricing", "comparison", "saas"],
    visualType: "pricing",
    relatedSlugs: ["pricing-page-ux", "social-proof", "cta-hierarchy"],
  },

  // ─── DEV / CSS TERMS ─────────────────────────────────────────
  {
    id: "container-query",
    slug: "container-query",
    category: "css",
    icon: "📦",
    term: "Container Query",
    pronunciation: "คอน-เทน-เนอร์ เคว-รี",
    level: "intermediate",
    shortDefinition: "CSS ที่ style component ตามขนาดของ parent container ไม่ใช่ viewport — ทำ truly responsive components",
    fullDefinition:
      "Container queries (@container) ให้ component style ตัวเองตาม size ของ container แทน media query ที่ดู viewport width ทำให้ component เดียวกันแสดงผลต่างกันใน sidebar (200px) กับ main content (800px) โดยอัตโนมัติ",
    whyItMatters:
      "Media queries ตรวจ viewport ทำให้ component ที่อยู่ใน sidebar ต้องมี media queries แยกจาก component เดียวกันที่อยู่ใน main content Container queries แก้ปัญหานี้ทำให้ component reusable จริง ๆ",
    examples: [
      "Card component ที่แสดงเป็น horizontal layout ใน main grid แต่ vertical layout ใน sidebar",
      "@container card (min-width: 400px) { .card { flex-direction: row; } }",
    ],
    prompts: [
      "แปลง media queries ของ Card component นี้ให้ใช้ container queries แทน: เพิ่ม container-type: inline-size บน wrapper และ @container rule แทน @media",
    ],
    tags: ["css", "responsive", "container", "layout"],
    visualType: "responsive",
    relatedSlugs: ["responsive-design", "breakpoints", "css-grid"],
  },
  {
    id: "spacing-scale",
    slug: "spacing-scale",
    category: "css",
    icon: "📏",
    term: "Spacing Scale",
    pronunciation: "สเปส-ซิ้ง สเกล",
    level: "intermediate",
    shortDefinition: "ระบบ spacing ที่มีขั้นที่ชัดเจน (4, 8, 12, 16, 24, 32, 48, 64px) ป้องกัน magic numbers",
    fullDefinition:
      "Spacing scale เป็น design token สำหรับ margin, padding, gap โดยทั่วไปใช้ 4px base unit (Tailwind ใช้ 4px) ทำให้ design consistent เพราะทุก space ที่ใช้มาจาก scale เดียวกัน ไม่ใช่ arbitrary number",
    whyItMatters:
      "Without spacing scale: developer ใช้ margin-top: 13px หรือ padding: 7px ที่ไม่ consistent คน ๆ เดียวกันยังใช้ต่างกันในไฟล์ต่าง ๆ Spacing scale บังคับให้ทุกคนใช้ค่าเดิมทำให้ UI consistent โดยอัตโนมัติ",
    examples: [
      "Tailwind spacing: space-1=4px, space-2=8px, space-4=16px, space-6=24px, space-8=32px",
      "Component ที่ใช้ p-4 (16px) ทุกอัน ไม่ใช่ p-[15px] บาง p-[17px] บางอัน",
    ],
    prompts: [
      "Audit spacing ใน codebase นี้: หา arbitrary pixel values ทั้งหมด (margin: 13px, padding: 7px ฯลฯ) และ refactor ให้ใช้ spacing scale ที่กำหนดไว้ใน design tokens",
    ],
    tags: ["css", "spacing", "design-tokens", "consistency"],
    visualType: "density",
    relatedSlugs: ["density-scale", "design-tokens", "css-variables"],
  },
  {
    id: "density-scale",
    slug: "density-scale",
    category: "css",
    icon: "🔲",
    term: "Density Scale",
    pronunciation: "เดน-ซิ-ตี สเกล",
    level: "intermediate",
    shortDefinition: "ระบบ preset ความหนาแน่นของ UI — Comfortable, Compact, Dense — ให้ user หรือ context เลือกได้",
    fullDefinition:
      "Density scale กำหนด spacing preset ที่ต่างกันสำหรับ use context ต่างกัน: Comfortable (consumer app, editorial) ใช้ padding เยอะ, Compact (SaaS dashboard) ใช้ spacing กลาง, Dense (data-heavy admin, IDE) ใช้ spacing น้อยที่สุด ทำได้ด้วย CSS variables ที่ override ตาม class",
    whyItMatters:
      "Consumer app ที่ใช้ density เดียวกับ data table admin จะดู cramped หรือ spacious เกินไป Density scale ให้ flexibility ปรับ context โดยไม่ต้อง redesign component",
    examples: [
      ".density-comfortable { --spacing-row: 16px; } .density-compact { --spacing-row: 10px; } .density-dense { --spacing-row: 6px; }",
      "Google Workspace มี Comfortable/Cozy/Compact density setting",
    ],
    prompts: [
      "เพิ่ม density toggle ให้ dashboard นี้: สร้าง CSS variable --density-row-padding ที่เปลี่ยนตาม data-density attribute บน html element",
    ],
    tags: ["css", "density", "spacing", "ux"],
    visualType: "density",
    relatedSlugs: ["spacing-scale", "design-tokens", "data-table"],
  },
  {
    id: "component-variants",
    slug: "component-variants",
    category: "css",
    icon: "🎨",
    term: "Component Variants",
    pronunciation: "คอม-โพ-เน็นต์ แว-ริ-เอ็นตส์",
    level: "intermediate",
    shortDefinition: "ระบบออกแบบ component ที่ variant ต่างกัน (size, color, style) แต่ใช้ code base เดียวกัน",
    fullDefinition:
      "Component variants ใช้ props/class variants เพื่อ generate UI ที่ต่างกันจาก component เดียว Libraries เช่น Class Variance Authority (CVA) หรือ Tailwind Variants ช่วย define variants อย่างเป็นระบบ Design token mapping ทำให้ variant สอดคล้องกับ design system",
    whyItMatters:
      "ถ้าไม่มี variant system developer จะ copy-paste component แล้ว modify เอง ทำให้มี button ที่ 'เกือบเหมือนกัน' 10 แบบใน codebase Component variants บังคับให้ทุกอัน come from same source",
    examples: [
      "Button: variant (primary|secondary|ghost), size (sm|md|lg), loading (boolean)",
      "Badge: variant (default|success|warning|danger), size (sm|md)",
      "Card: variant (default|elevated|outlined|ghost), padding (sm|md|lg)",
    ],
    prompts: [
      "Refactor Button component นี้ให้ใช้ CVA (Class Variance Authority): define variant (primary/secondary/ghost/destructive) และ size (sm/md/lg) อย่างเป็น type-safe",
    ],
    tags: ["css", "components", "variants", "design-system"],
    visualType: "button-variants",
    relatedSlugs: ["design-tokens", "css-variables", "design-system"],
  },
  {
    id: "stacking-context",
    slug: "stacking-context",
    category: "css",
    icon: "🎭",
    term: "Stacking Context",
    pronunciation: "สแตค-กิ้ง คอน-เท็กซ์ท์",
    level: "advanced",
    shortDefinition: "กลุ่มของ elements ที่ stack เป็น unit — สร้างโดย transform, opacity, will-change, position+z-index",
    fullDefinition:
      "Stacking context เกิดเมื่อ element มี: position + z-index, opacity < 1, transform, filter, will-change, isolation: isolate Elements ภายใน stacking context ถูก stack เทียบกัน ไม่ใช่เทียบกับ parent context ทำให้ z-index สูงแค่ไหนก็ไม่สามารถอยู่เหนือ sibling stacking context",
    whyItMatters:
      "Modal ที่ไม่โผล่เหนือ navbar แม้ z-index: 9999 มักเกิดจาก stacking context ที่ parent element สร้างไว้ โดยมี opacity หรือ transform การ debug ต้องเข้าใจ stacking context ไม่ใช่แค่เพิ่ม z-index",
    examples: [
      "Parent ที่มี transform: translateZ(0) สร้าง stacking context ทำให้ child modal ไม่โผล่เหนือ sibling",
      "isolation: isolate ใช้ intentionally สร้าง stacking context เพื่อ contain z-index",
    ],
    prompts: [
      "Debug z-index issue นี้: ตรวจว่า element ใดสร้าง stacking context ที่ไม่ตั้งใจ (transform, opacity, filter, will-change) และแก้ให้ modal/tooltip แสดงถูกต้อง",
    ],
    tags: ["css", "z-index", "stacking", "debug"],
    visualType: "boxmodel",
    relatedSlugs: ["z-index", "modal", "css-variables"],
  },

  // ─── AI PROMPTING ────────────────────────────────────────────────
  {
    id: "screenshot-audit",
    slug: "screenshot-audit",
    category: "ai-prompting",
    icon: "📸",
    term: "UI Screenshot Audit Prompt",
    level: "intermediate",
    shortDefinition: "Prompt template สำหรับให้ AI วิเคราะห์ UI จาก screenshot — ตรวจ hierarchy, spacing, accessibility, และ conversion",
    fullDefinition:
      "Screenshot audit prompt ให้ AI critique UI อย่างมีระบบ ต้องระบุ: context (product type, target user), focus area (specific concern หรือ general), output format (issues list / priority matrix / actionable fix), และ severity threshold",
    whyItMatters:
      "Prompt ที่ไม่มี structure จะได้ feedback แบบ 'looks good' หรือ 'could improve colors' ที่ vague เกิน Structured prompt จะได้ specific issues พร้อม severity และ fix suggestion ที่เอาไปทำงานได้จริง",
    examples: [
      "Audit landing page hero: check hierarchy, CTA visibility, trust signals, mobile responsiveness",
      "Review checkout form: identify friction points, missing validation states, accessibility issues",
    ],
    prompts: [
      "You are a senior UX reviewer. Analyze this UI screenshot for [context]. Identify: 1) Critical issues (block conversion or break accessibility) 2) Improvements (would improve UX/conversion) 3) Minor polish items. For each issue: describe the problem, why it matters, and the specific fix. Format as a prioritized list.",
      "Audit this [page type] for a [target user] using [device]. Focus on: visual hierarchy, CTA effectiveness, trust signals, form usability, and mobile responsiveness. Rate severity: P1 (fix now) / P2 (fix this sprint) / P3 (nice to have).",
    ],
    tags: ["ai-prompting", "audit", "critique", "review"],
    visualType: "tips",
    relatedSlugs: ["design-critique", "design-qa", "ux-audit"],
  },
  {
    id: "landing-page-prompt",
    slug: "landing-page-prompt",
    category: "ai-prompting",
    icon: "🚀",
    term: "Landing Page Redesign Prompt",
    level: "intermediate",
    shortDefinition: "Prompt สำหรับให้ AI ช่วย redesign หรือ critique landing page เพื่อ improve conversion",
    fullDefinition:
      "Landing page redesign prompt ต้องระบุ: current goal, target audience, main conversion action, current problems (if known), inspiration/style direction, และ constraints (brand, tech stack, timeline) ยิ่งระบุ context มากยิ่ง output ตรงกว่า",
    whyItMatters:
      "Prompt ที่บอกแค่ 'redesign this landing page' จะได้ generic suggestion Landing page prompt ที่ดีระบุ audience, goal, metric ที่ต้องการ improve ทำให้ AI propose changes ที่ evidence-based ไม่ใช่แค่ aesthetic",
    examples: [
      "Context: B2B SaaS, target = VP of Engineering, goal = book demo, current bounce rate 80%, main objection = 'too complex'",
      "Redesign hero section ที่ตอบ: What is it? Who is it for? Why now? ใน above-the-fold 1280px",
    ],
    prompts: [
      "Redesign this landing page to improve demo booking rate. Target: [role] at [company size] companies. Main value prop: [X]. Top 3 user objections: [list]. Current conversion rate: [X]%. Keep brand colors but improve: hero clarity, social proof placement, CTA hierarchy, and mobile layout. Output: section-by-section improvement notes + revised copy suggestions.",
      "You are a conversion copywriter and UX designer. Analyze this landing page hero. The target user is [persona]. Rewrite the headline to be benefit-focused, adjust the subheadline to address the top objection, and suggest a CTA label that implies lower friction.",
    ],
    tags: ["ai-prompting", "landing-page", "conversion", "copywriting"],
    visualType: "hero",
    relatedSlugs: ["hero-section", "cta-hierarchy", "social-proof"],
  },
  {
    id: "component-refactor-prompt",
    slug: "component-refactor-prompt",
    category: "ai-prompting",
    icon: "♻️",
    term: "Component Refactor Prompt",
    level: "intermediate",
    shortDefinition: "Prompt สำหรับสั่ง AI refactor component ให้ accessible, consistent, และ reusable",
    fullDefinition:
      "Component refactor prompt ต้องระบุ: current problems, target standard (design system, accessibility level), framework/library, type system, และ test requirements ยิ่งบอก constraints ชัด AI จะ refactor โดยไม่ break existing behavior",
    whyItMatters:
      "Prompt ที่บอกแค่ 'make this better' จะได้การเปลี่ยนที่อาจ break API หรือ remove props ที่ consumer ใช้อยู่ ต้องระบุ 'maintain backward compatibility' หรือ 'migration path required'",
    examples: [
      "Refactor Button component: add variant/size prop, type-safe with TypeScript, accessible (ARIA), maintain existing className prop",
      "Refactor Form component: add Zod validation, React Hook Form, inline error display, accessible error messages",
    ],
    prompts: [
      "Refactor this [Component] in [framework] to: 1) Add proper TypeScript types 2) Support variants: [list] 3) Be fully accessible (WCAG AA) with aria-*, focus-visible, keyboard nav 4) Use design tokens instead of hardcoded values 5) Maintain backward-compatible API. Show migration path for breaking changes.",
      "This component has [X problems]. Refactor it to use [design system]. Requirements: type-safe props, accessible, supports dark mode via CSS variables, tree-shakable, and documented with JSDoc. Do not change the external API unless necessary.",
    ],
    tags: ["ai-prompting", "component", "refactor", "accessibility"],
    visualType: "tips",
    relatedSlugs: ["component-variants", "design-system", "aria-label"],
  },
  {
    id: "accessibility-review-prompt",
    slug: "accessibility-review-prompt",
    category: "ai-prompting",
    icon: "♿",
    term: "Accessibility Review Prompt",
    level: "intermediate",
    shortDefinition: "Prompt สำหรับให้ AI ตรวจ accessibility ของ code หรือ design อย่างมีระบบ",
    fullDefinition:
      "Accessibility review prompt ต้องระบุ: target WCAG level (A/AA/AAA), component type (form, navigation, modal, etc.), current implementation, และ assistive technology context (screen reader, keyboard only, etc.) เพื่อให้ AI focus ตรงจุดและ suggest fixes ที่ implementable",
    whyItMatters:
      "Generic 'check accessibility' prompt มักได้ checklist ทั่วไป Component-specific prompt ระบุ type ของ issue และ fix ที่เป็น production-ready code",
    examples: [
      "Review modal component for WCAG 2.1 AA: focus trap, ESC close, aria-modal, aria-labelledby, backdrop behavior",
      "Audit form fields: labels, error association, required indication, keyboard navigation, live region for errors",
    ],
    prompts: [
      "Perform a WCAG 2.1 AA accessibility audit on this [component/page]. Check: 1) Keyboard navigation (Tab, Enter, Space, Escape, Arrow keys) 2) Screen reader semantics (role, aria-*, label, description) 3) Color contrast (4.5:1 AA) 4) Focus management 5) Motion/animation. Output: issue, WCAG criterion violated, severity, and code fix.",
      "Review this form for accessibility: label-input association, error announcements, required field indicators, focus order, and autocomplete attributes. Provide corrected HTML/JSX.",
    ],
    tags: ["ai-prompting", "accessibility", "wcag", "review"],
    visualType: "tips",
    relatedSlugs: ["aria-label", "keyboard-navigation", "focus-state", "semantic-html"],
  },
  {
    id: "style-direction-prompt",
    slug: "style-direction-prompt",
    category: "ai-prompting",
    icon: "🎨",
    term: "Image Style Direction Prompt",
    level: "basic",
    shortDefinition: "Prompt template สำหรับกำหนด visual style direction ให้ AI image generator — ระบุ mood, medium, lighting, color",
    fullDefinition:
      "Style direction prompt สำหรับ Midjourney, DALL-E, Ideogram ต้องระบุ: subject, style (flat vector / 3D render / isometric / photography), mood (professional / playful / premium / minimal), lighting, color palette, aspect ratio, negative prompts สำคัญมาก (no text, no watermark, no extra hands)",
    whyItMatters:
      "Prompt ที่บอกแค่ 'make a SaaS illustration' จะได้ generic result ที่ไม่ match brand Prompt ที่ระบุ style, mood, และ color palette จะได้ output ที่ consistent และ on-brand",
    examples: [
      "Flat vector UI illustration, SaaS dashboard, warm neutral colors #F7F3EC, sans-serif, no text, 16:9, Dribbble style",
      "3D isometric office scene, team collaboration, vibrant but professional, white background, no shadows harsh, product mockup style",
    ],
    prompts: [
      "Create a [subject] illustration for [context]. Style: [flat vector / 3D render / isometric / photorealistic]. Mood: [professional / playful / premium / minimalist]. Color palette: [hex codes or description]. Lighting: [soft studio / natural daylight / dramatic]. Aspect ratio: [16:9 / 1:1 / 4:3]. Negative prompt: no text, no watermark, no extra limbs, no blurry faces.",
      "Generate a SaaS product hero image for [product type]. Target: [audience]. Brand feeling: [warm/professional/trustworthy]. Show [specific feature being illustrated]. Use [color 1] and [color 2] from brand palette. Style: clean 3D render, minimal props, white background with subtle gradient. --ar 16:9 --v 6",
    ],
    tags: ["ai-prompting", "image", "midjourney", "illustration"],
    visualType: "styles",
    relatedSlugs: ["cozy-style", "minimalism", "landing-page-prompt"],
  },
  {
    id: "product-mockup-prompt",
    slug: "product-mockup-prompt",
    category: "ai-prompting",
    icon: "📱",
    term: "Product Mockup Prompt",
    level: "basic",
    shortDefinition: "Prompt สำหรับ generate product mockup images ที่ใส่ UI ของตัวเองได้ — สำหรับ landing page, presentations",
    fullDefinition:
      "Product mockup prompt สำหรับ generate device mockup ที่สวยงาม เพื่อนำ screenshot ของ product ไปวาง ต้องระบุ: device type, orientation, environment/background, lighting, style, และ color scheme ที่ match brand",
    whyItMatters:
      "Hero image ที่เป็น product mockup คุณภาพสูงเพิ่ม perceived product quality ทันที Landing page ที่มี mockup ที่ดีทำให้ visitor เชื่อถือ product มากขึ้นก่อนที่จะ sign up",
    examples: [
      "MacBook mockup บน minimalist desk, natural daylight, warm wood tones, product screen placeholder center",
      "iPhone stack mockup, 3 devices angled, white/cream background, premium Apple-style photography",
    ],
    prompts: [
      "Product mockup photo: [device type] showing UI placeholder screen. Background: [minimalist desk / gradient / abstract / solid white]. Lighting: [soft natural / studio / morning window]. Style: [Apple keynote / Dribbble hero / product hunt]. Color temperature: [warm/cool/neutral]. Shot angle: [front-facing / 3/4 angle / flat lay]. --ar 16:9",
    ],
    tags: ["ai-prompting", "mockup", "image", "landing-page"],
    visualType: "tips",
    relatedSlugs: ["landing-page-prompt", "hero-section", "style-direction-prompt"],
  },
];
