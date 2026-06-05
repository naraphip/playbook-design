import type { UXTerm } from "@/types/playbook";
import { EXTRA_TERMS } from "./terms-extra";

const BASE_TERMS: UXTerm[] = [
  // ─── UI COMPONENTS ───────────────────────────────────────────────
  {
    id: "cta",
    slug: "cta",
    category: "ui",
    icon: "👆",
    term: "CTA (Call to Action)",
    pronunciation: "ซี-ที-เอ",
    level: "basic",
    shortDefinition: "ปุ่มหรือ element ที่ชวนให้ user ทำ action หลัก เช่น Sign Up, Buy Now, Get Started",
    fullDefinition:
      "CTA คือ element ที่บอก user ว่าต้องทำอะไรต่อไป มักเป็นปุ่มที่โดดเด่นที่สุดในหน้า ออกแบบให้ดึงดูดสายตาและสื่อความหมายชัดเจน",
    whyItMatters:
      "CTA ที่ดีเพิ่ม conversion โดยตรง การมี primary CTA มากกว่า 1 จุดใน section เดียวทำให้ user สับสนและ click rate ลด",
    examples: [
      "ปุ่ม 'Start Free Trial' บน pricing page",
      "ปุ่ม 'Add to Cart' บน product card",
      "Link 'Learn More' ใน hero section",
    ],
    prompts: [
      "ออกแบบ CTA ให้เป็น primary action เดียวของ section นี้ สีต้อง contrast สูง เห็นภายใน 3 วินาที และไม่ให้ secondary button แย่ง attention",
      "สร้าง Button component ที่รองรับ variant: primary/secondary/destructive, size: sm/md/lg, state: hover/focus/disabled/loading",
      "Refactor ทุก CTA ในหน้าให้ใช้ shared Button component เดียวกัน ตรวจ accessible label และ focus-visible state",
    ],
    tags: ["button", "conversion", "action", "ux-writing"],
    visualType: "cta",
    relatedSlugs: ["conversion-rate", "cta-hierarchy", "hero-section"],
  },
  {
    id: "navbar",
    slug: "navbar",
    category: "ui",
    icon: "🧭",
    term: "Navbar (Navigation Bar)",
    pronunciation: "แนฟ-บาร์",
    level: "basic",
    shortDefinition: "แถบนำทางหลักของเว็บ มักอยู่ด้านบน ช่วยให้ user รู้ว่าตัวเองอยู่ที่ไหนและไปที่อื่นได้",
    fullDefinition:
      "Navbar คือ navigation component หลักที่ประกอบด้วย logo, menu links, และ action buttons เช่น login/signup มักออกแบบให้ sticky เพื่อให้เข้าถึงได้ตลอด",
    whyItMatters:
      "Navbar ที่ดีลด time-to-navigate และป้องกัน user หลงทาง การมี active state ชัดเจนทำให้รู้ว่า section ไหนถูก select อยู่",
    examples: [
      "Top navbar ของ SaaS dashboard ที่มี logo ซ้าย, menu กลาง, user avatar ขวา",
      "Sticky navbar ที่ shrink เมื่อ scroll ลง",
      "Mobile hamburger menu ที่ขยายเป็น drawer",
    ],
    prompts: [
      "สร้าง sticky navbar ที่มี logo ซ้าย, nav links กลาง, และ CTA ขวา รองรับ mobile hamburger menu ที่ accessible และมี keyboard navigation",
      "เพิ่ม active state ให้ navbar links โดยใช้ current pathname และทำให้ focus-visible state เห็นชัด",
    ],
    tags: ["navigation", "header", "sticky", "menu"],
    visualType: "navbar",
    relatedSlugs: ["sidebar", "breadcrumb"],
  },
  {
    id: "sidebar",
    slug: "sidebar",
    category: "ui",
    icon: "📋",
    term: "Sidebar / Drawer",
    pronunciation: "ไซด์-บาร์ / ดรอ-เวอร์",
    level: "basic",
    shortDefinition: "Panel นำทางด้านข้าง — Sidebar อยู่ถาวร, Drawer ซ่อนแล้ว slide ออกมาเมื่อ trigger",
    fullDefinition:
      "Sidebar คือ navigation panel ด้านซ้ายหรือขวาที่ใช้ใน dashboard/app Drawer คือ panel เดียวกันแต่ซ่อนอยู่และ slide เข้ามาเมื่อกดปุ่ม เหมาะกับ mobile และ secondary navigation",
    whyItMatters:
      "Sidebar เหมาะกับ app ที่มี section เยอะ เพราะเห็น structure ทั้งหมดพร้อมกัน Drawer เหมาะกับ mobile เพราะประหยัดพื้นที่",
    examples: [
      "Left sidebar ของ Figma ที่แสดง layers panel",
      "Settings sidebar ที่มี categories ซ้ายและ content ขวา",
      "Mobile drawer ที่ออกมาเมื่อกด hamburger",
    ],
    prompts: [
      "สร้าง collapsible sidebar ที่แสดงหมวดหมู่ navigation ด้วย icon + label, highlight active item, และ collapse เป็น icon-only บน narrow desktop",
      "ทำ mobile drawer ที่ accessible โดยมี focus trap, ESC close, backdrop click close, และ aria-modal",
    ],
    tags: ["navigation", "panel", "drawer", "mobile"],
    visualType: "sidebar",
    relatedSlugs: ["navbar", "modal"],
  },
  {
    id: "modal",
    slug: "modal",
    category: "ui",
    icon: "🪟",
    term: "Modal / Dialog",
    pronunciation: "โม-ดอล / ไดอะ-ล็อก",
    level: "basic",
    shortDefinition: "หน้าต่างป๊อปอัปที่บล็อก interaction กับ content ด้านหลังจนกว่าจะปิด",
    fullDefinition:
      "Modal คือ overlay component ที่แสดง content สำคัญหรือขอ confirmation โดยป้องกันการ interact กับ page ด้านหลัง ใช้สำหรับ form, confirmation dialog, image lightbox",
    whyItMatters:
      "Modal ที่ไม่มี focus trap ทำให้ keyboard user navigate หนีออกไปได้ ต้องมี ESC close, backdrop click close, และ aria-modal เสมอ",
    examples: [
      "Delete confirmation dialog ที่ถามก่อนลบ",
      "Login modal ที่ pop up แทนการ redirect",
      "Image lightbox ที่ขยาย photo",
    ],
    prompts: [
      "สร้าง Modal component ที่มี: focus trap, ESC key close, backdrop click close, aria-labelledby, aria-modal, และ smooth animation ที่ respect prefers-reduced-motion",
      "ทำ confirm delete dialog ที่ปุ่ม danger แดงอยู่ขวา และ cancel อยู่ซ้าย เพื่อป้องกัน accidental click",
    ],
    tags: ["overlay", "dialog", "popup", "accessibility"],
    visualType: "modal",
    relatedSlugs: ["toast", "focus-trap"],
  },
  {
    id: "toast",
    slug: "toast",
    category: "ui",
    icon: "🔔",
    term: "Toast / Snackbar",
    pronunciation: "โทสต์ / สแนค-บาร์",
    level: "basic",
    shortDefinition: "การแจ้งเตือนชั่วคราวที่ pop ขึ้นมุมหน้าจอแล้วหายไปเอง",
    fullDefinition:
      "Toast คือ non-intrusive notification ที่แสดง feedback หลัง user ทำ action เช่น 'Saved successfully' หรือ 'Error: Failed to upload' มักอยู่มุมบนขวาและหายไปใน 3-5 วินาที",
    whyItMatters:
      "Toast ที่ดีให้ feedback ทันทีโดยไม่ block workflow Toast ที่แย่คือ auto-dismiss เร็วเกินไปจน screen reader ไม่ทัน อ่านหรือหายไปก่อนที่ user จะเห็น",
    examples: [
      "Toast สีเขียว 'Profile updated' หลัง save settings",
      "Toast สีแดง 'Upload failed. Try again.' พร้อม retry button",
      "Toast พร้อม undo action",
    ],
    prompts: [
      "สร้าง Toast system ที่รองรับ type: success/error/warning/info, มี auto-dismiss พร้อม progress bar, accessible role='status', และกด close ได้ด้วย keyboard",
      "ทำ toast stack ที่ queue notification ได้หลายอัน โดยใหม่มาบนสุด และ limit ไม่เกิน 3 อัน",
    ],
    tags: ["notification", "feedback", "alert", "accessibility"],
    visualType: "toast",
    relatedSlugs: ["modal", "error-state", "success-state"],
  },
  {
    id: "hero-section",
    slug: "hero-section",
    category: "ui",
    icon: "🦸",
    term: "Hero Section / Above the Fold",
    pronunciation: "ฮี-โร เซค-ชัน",
    level: "basic",
    shortDefinition: "ส่วนบนสุดของหน้าที่เห็นก่อน scroll — มี headline, sub-headline, และ primary CTA",
    fullDefinition:
      "Hero section คือ first impression ของเว็บ มักมี headline ที่บอก value proposition, supporting text, CTA หลัก และ visual ประกอบ Above the fold คือทุกสิ่งที่เห็นได้โดยไม่ต้อง scroll",
    whyItMatters:
      "User ตัดสิน site ใน 5 วินาทีแรก Hero ที่ดีต้องตอบคำถาม 'นี่คืออะไร ทำไมต้องสนใจ ทำอะไรได้เลย' ให้ครบ",
    examples: [
      "Hero ของ SaaS ที่มี headline, product screenshot, และปุ่ม Start Free Trial",
      "Landing page hero ที่มี video background และ CTA กลางหน้า",
    ],
    prompts: [
      "ออกแบบ hero section ที่ตอบ 3 คำถาม: What is it? Why should I care? What do I do next? ใน above-the-fold space ของ 375px/768px/1280px",
      "ปรับ hero headline ให้เป็น benefit-focused ไม่ใช่ feature-focused และ CTA label ต้องเป็น action verb ที่บอก outcome",
    ],
    tags: ["landing", "headline", "above-the-fold", "conversion"],
    visualType: "hero",
    relatedSlugs: ["cta", "conversion-rate", "value-proposition"],
  },
  {
    id: "empty-state",
    slug: "empty-state",
    category: "ui",
    icon: "🫙",
    term: "Empty State",
    pronunciation: "เอ็ม-ตี สเตท",
    level: "basic",
    shortDefinition: "หน้าจอที่แสดงเมื่อไม่มีข้อมูล — ควรมี illustration, คำอธิบาย และ action ให้ทำต่อ",
    fullDefinition:
      "Empty state คือ UI สำหรับ scenario ที่ list/table/dashboard ว่างเปล่า ไม่ว่าจะเป็นครั้งแรก (first-time empty), หลังลบข้อมูล หรือ search ไม่เจอผล",
    whyItMatters:
      "Empty state ที่ไม่ดีทำให้ user สับสนว่าเว็บพัง หรือตัวเองทำผิดอะไร Empty state ที่ดีให้ทิศทางและ motivation ให้ทำ action ต่อ",
    examples: [
      "Inbox ว่างเปล่าพร้อม illustration และ 'No messages yet. Start a conversation.'",
      "Search results ว่างพร้อมคำแนะนำให้ลองคำค้นอื่น",
    ],
    prompts: [
      "ทำ empty state ของหน้านี้ให้ action-oriented มี illustration เล็ก ๆ, คำอธิบาย 1-2 ประโยค, และ primary CTA ให้ user ทำ action ถัดไป",
      "สร้าง EmptyState component ที่รับ icon, title, description, และ optional action button",
    ],
    tags: ["state", "ux-writing", "illustration", "onboarding"],
    visualType: "cta",
    relatedSlugs: ["loading-state", "error-state", "onboarding-flow"],
  },
  {
    id: "loading-state",
    slug: "loading-state",
    category: "ui",
    icon: "⏳",
    term: "Loading State / Skeleton",
    pronunciation: "โหลด-ดิ้ง สเตท",
    level: "basic",
    shortDefinition: "UI ที่แสดงขณะรอข้อมูล — Skeleton loader ดีกว่า spinner เพราะ reduce perceived wait time",
    fullDefinition:
      "Loading state คือ feedback ว่าระบบกำลังทำงาน Skeleton loader แสดง placeholder ที่มีรูปร่างเหมือน content จริง ทำให้รู้สึกว่าเร็วกว่า spinner ธรรมดา",
    whyItMatters:
      "ไม่มี loading state = user คิดว่าเว็บค้าง Skeleton loading ลด perceived load time ได้มากกว่า spinner เพราะ user เห็น layout ก่อนที่ข้อมูลจะมา",
    examples: [
      "Skeleton card ที่ shimmer ขณะ fetch data",
      "Progress bar บน top ของหน้าขณะ navigate",
      "Skeleton table rows ขณะ load dashboard data",
    ],
    prompts: [
      "สร้าง SkeletonCard component ที่ match layout ของ TermCard จริง ใช้ CSS animation shimmer บน bg ไม่ใช่ spinner",
      "เพิ่ม loading state ให้ทุก async operation โดยใช้ Suspense boundary และ skeleton fallback",
    ],
    tags: ["loading", "skeleton", "performance", "ux"],
    visualType: "cta",
    relatedSlugs: ["empty-state", "error-state"],
  },
  {
    id: "error-state",
    slug: "error-state",
    category: "ui",
    icon: "⚠️",
    term: "Error State",
    pronunciation: "เอ็ร์-เรอร์ สเตท",
    level: "basic",
    shortDefinition: "UI ที่แสดงเมื่อเกิดข้อผิดพลาด — ต้องบอก ทำไม และ ทำอะไรต่อ เสมอ",
    fullDefinition:
      "Error state ครอบคลุม form validation errors, API errors, network errors, และ 404/500 pages ข้อความ error ที่ดีบอก: อะไรผิด, ทำไมผิด, และทำอะไรได้เพื่อแก้",
    whyItMatters:
      "Error message แบบ 'Something went wrong' ทำให้ user หงุดหน่ย และไม่รู้จะทำอะไร ต้องเขียน error ให้ human-readable และ actionable เสมอ",
    examples: [
      "Form field ที่ border เปลี่ยนสีแดงและแสดง 'Email address is invalid'",
      "Full page error 404 ที่มีปุ่ม Go Home",
      "API error toast พร้อม retry button",
    ],
    prompts: [
      "ปรับ error messages ทั้งหมดในหน้านี้ให้ human-readable: บอกสิ่งที่ผิด, สาเหตุ, และ action ที่ user ทำได้",
      "สร้าง ErrorBoundary component ที่ catch React errors และแสดง fallback UI ที่ friendly พร้อม retry",
    ],
    tags: ["error", "validation", "ux-writing", "feedback"],
    visualType: "cta",
    relatedSlugs: ["empty-state", "toast", "loading-state"],
  },
  {
    id: "card",
    slug: "card",
    category: "ui",
    icon: "🃏",
    term: "Card",
    pronunciation: "การ์ด",
    level: "basic",
    shortDefinition: "Container ที่จัดกลุ่ม related content เป็นหน่วยเดียว มักมี image, title, description, และ action",
    fullDefinition:
      "Card เป็น versatile component ที่ใช้แสดงข้อมูลเป็น unit-based layout เช่น product cards, profile cards, article cards Card grid ทำให้ scan content ได้เร็วกว่า list",
    whyItMatters:
      "Card layout เหมาะกับ content ที่ parallel กัน เช่น product listing แต่ถ้า card มีข้อมูลต่างกันมาก อาจใช้ table แทน",
    examples: [
      "Product card ที่มี image, name, price, และ Add to Cart",
      "Blog article card ที่มี thumbnail, title, excerpt, และ date",
      "User profile card ที่มี avatar, name, role, และ actions",
    ],
    prompts: [
      "สร้าง Card component ที่รองรับ variant: default/elevated/outlined, และมี optional image, badge, actions slot",
      "ออกแบบ card grid ที่ responsive: 1 column mobile, 2 column tablet, 3 column desktop โดยใช้ CSS Grid และ gap ที่สม่ำเสมอ",
    ],
    tags: ["layout", "grid", "component", "content"],
    visualType: "cta",
    relatedSlugs: ["table", "filter-bar"],
  },
  {
    id: "table",
    slug: "table",
    category: "ui",
    icon: "📊",
    term: "Table / Data Grid",
    pronunciation: "เท-เบิล / เด-ตา กริด",
    level: "intermediate",
    shortDefinition: "การแสดงข้อมูลแบบ row/column ที่ sort, filter, และ paginate ได้",
    fullDefinition:
      "Table เหมาะกับข้อมูลที่ต้องเปรียบเทียบหลาย column Data Grid คือ advanced table ที่รองรับ inline editing, virtual scroll สำหรับข้อมูลจำนวนมาก และ column resize",
    whyItMatters:
      "Table ที่ดีต้องรองรับ keyboard navigation ด้วย arrow keys, ต้องมี caption สำหรับ screen reader, และต้อง responsive บน mobile",
    examples: [
      "User management table ที่ sort by column ได้",
      "Transaction history table พร้อม date filter",
      "Analytics dashboard data grid",
    ],
    prompts: [
      "สร้าง sortable table ที่ accessible: มี scope='col' บน th, keyboard navigation ด้วย arrow keys, และ caption อธิบาย table",
      "ทำ responsive table บน mobile โดย stack column เป็น key-value pairs แทนการ scroll horizontal",
    ],
    tags: ["data", "table", "sorting", "pagination"],
    visualType: "grid",
    relatedSlugs: ["pagination", "filter-bar", "card"],
  },
  {
    id: "form-field",
    slug: "form-field",
    category: "ui",
    icon: "📝",
    term: "Form Field / Input",
    pronunciation: "ฟอร์ม ฟีลด์",
    level: "basic",
    shortDefinition: "ช่องกรอกข้อมูลในฟอร์ม มี label, input, helper text, และ error state",
    fullDefinition:
      "Form field ประกอบด้วย label (ต้องมีเสมอ), input element, optional placeholder, helper text, และ validation error ทุก input ต้องมี associated label ที่ accessible",
    whyItMatters:
      "Form UX ที่แย่คือ label อยู่ข้างในช่อง (placeholder ไม่ใช่ label), error ไม่บอกวิธีแก้, และ tab order ผิด ทำให้ form completion rate ต่ำ",
    examples: [
      "Email input ที่มี label 'Email address' และ error 'Please enter a valid email'",
      "Password field ที่มี show/hide toggle",
      "Credit card input ที่ auto-format ตัวเลข",
    ],
    prompts: [
      "ตรวจสอบ form นี้ว่าทุก input มี label จริง (ไม่ใช่แค่ placeholder), error message อธิบายวิธีแก้ และ tab order เป็นไปตาม visual order",
      "สร้าง FormField component ที่รับ label, type, placeholder, helperText, error, required และ forward ref",
    ],
    tags: ["form", "input", "validation", "accessibility"],
    visualType: "cta",
    relatedSlugs: ["error-state", "keyboard-navigation", "wcag"],
  },
  {
    id: "tooltip",
    slug: "tooltip",
    category: "ui",
    icon: "💬",
    term: "Tooltip / Popover",
    pronunciation: "ทูล-ทิป / โพ-โอ-เวอร์",
    level: "intermediate",
    shortDefinition: "Tooltip: ข้อความสั้นๆ เมื่อ hover — Popover: popup ขนาดใหญ่กว่า มี rich content",
    fullDefinition:
      "Tooltip แสดงข้อความสั้นเมื่อ hover/focus เพื่ออธิบาย icon หรือ action Popover เปิดเมื่อ click และสามารถมี interactive content เช่น dropdown menu หรือ mini form",
    whyItMatters:
      "Tooltip ต้องทำงานบน keyboard (focus trigger) ไม่ใช่แค่ hover เพราะ mobile user ไม่มี hover state และ keyboard user ต้องการ feedback",
    examples: [
      "Tooltip บน icon button ที่บอกว่า 'Delete item'",
      "Popover สำหรับ user profile dropdown",
    ],
    prompts: [
      "สร้าง Tooltip component ที่ trigger บน focus และ hover, accessible ด้วย role='tooltip' และ aria-describedby",
    ],
    tags: ["tooltip", "popover", "accessibility", "hover"],
    visualType: "cta",
    relatedSlugs: ["modal", "form-field"],
  },
  {
    id: "pagination",
    slug: "pagination",
    category: "ui",
    icon: "📄",
    term: "Pagination",
    pronunciation: "เพ-จิ-เน-ชัน",
    level: "basic",
    shortDefinition: "การแบ่งข้อมูลจำนวนมากออกเป็นหน้าๆ หรือ load เพิ่มด้วย infinite scroll",
    fullDefinition:
      "Pagination แบ่งเป็น 2 แบบหลัก: page-based (มีหมายเลขหน้า) และ infinite scroll / load more (load เพิ่มเมื่อ scroll ถึงล่าง) แต่ละแบบเหมาะกับ use case ต่างกัน",
    whyItMatters:
      "Page-based เหมาะกับ content ที่ต้องกลับมาหา (เช่น search results) Infinite scroll เหมาะกับ feed แต่ทำให้ footer ไม่ accessible และ back button ใช้งานยาก",
    examples: [
      "Search results พร้อม numbered pagination",
      "Social media feed แบบ infinite scroll",
      "Product listing พร้อม 'Load more' button",
    ],
    prompts: [
      "เพิ่ม accessible pagination ที่มี aria-label='Pagination', current page highlighted พร้อม aria-current='page', และ keyboard navigation",
    ],
    tags: ["pagination", "list", "data", "navigation"],
    visualType: "cta",
    relatedSlugs: ["table", "filter-bar"],
  },

  // ─── STYLE ────────────────────────────────────────────────────────
  {
    id: "cozy-style",
    slug: "cozy-style",
    category: "style",
    icon: "🛋️",
    term: "Cozy Style",
    pronunciation: "โค-ซี สไตล์",
    level: "basic",
    shortDefinition: "UI ที่ให้ความรู้สึกอบอุ่น เป็นกันเอง มี spacing เยอะ typography ใหญ่ สีนุ่ม",
    fullDefinition:
      "Cozy style ใช้ whitespace เยอะ, font size ที่อ่านสบาย, สีโทนอบอุ่น, border radius ใหญ่ และ illustration style แบบ friendly เหมาะกับ consumer app, blog, journaling app",
    whyItMatters:
      "Cozy style สร้าง emotional safety ให้ user รู้สึกสบายใจในการ interact ตรงกันข้ามกับ enterprise UI ที่เน้น efficiency",
    examples: [
      "Notion-style editor ที่มีพื้นที่ breathing เยอะ",
      "Recipe app ที่ใช้ warm beige และ round fonts",
      "Journaling app ที่มี card แบบ soft shadow",
    ],
    prompts: [
      "ปรับ UI นี้ให้เป็น cozy style: เพิ่ม padding, ใช้ border-radius ใหญ่, สีโทนอบอุ่น, และ typography ที่อ่านสบาย ลด information density ลง",
      "ออกแบบ landing page แบบ cozy สำหรับ wellness app: soft gradient, round corners, friendly illustration, และ CTA ที่ไม่ aggressive",
    ],
    tags: ["style", "mood", "spacing", "warm"],
    visualType: "cozy",
    relatedSlugs: ["minimalism", "premium-ui"],
  },
  {
    id: "compact-ui",
    slug: "compact-ui",
    category: "style",
    icon: "📦",
    term: "Compact / High-Density UI",
    pronunciation: "คอม-แพ็ค ยูไอ",
    level: "intermediate",
    shortDefinition: "UI ที่ packed ข้อมูลเยอะในพื้นที่จำกัด — ใช้ใน dashboard, admin panel, dev tools",
    fullDefinition:
      "Compact UI ลด padding, ใช้ font ขนาดเล็ก, และ pack ข้อมูลให้มากที่สุดในพื้นที่เดียว เหมาะกับ power users ที่ต้องการเห็นข้อมูลเยอะพร้อมกัน",
    whyItMatters:
      "Power user เช่น trader, analyst, developer ต้องการ data density สูง ถ้าทำ UI แบบ consumer app จะรู้สึกว่าเสียเวลา scroll",
    examples: [
      "Bloomberg terminal ที่มีข้อมูลเยอะมากในหน้าเดียว",
      "VS Code editor ที่ compact มาก",
      "Jira board ที่แสดง issue เยอะในพื้นที่เดียว",
    ],
    prompts: [
      "ปรับ dashboard นี้ให้เป็น high-density UI: ลด padding, ใช้ font size เล็กลงแต่ยังอ่านได้, เพิ่ม data per screen, และ spacing เป็นระบบ",
      "สร้าง density toggle ที่ user เลือกได้ระหว่าง comfortable/compact/dense mode โดย switch CSS custom property",
    ],
    tags: ["density", "data", "admin", "power-user"],
    visualType: "compact",
    relatedSlugs: ["cozy-style", "enterprise-ui"],
  },
  {
    id: "dark-mode",
    slug: "dark-mode",
    category: "style",
    icon: "🌙",
    term: "Dark Mode / Light Mode",
    pronunciation: "ดาร์ค โหมด",
    level: "basic",
    shortDefinition: "สองธีมหลักของ UI — dark เหมาะกับ dev tools/content-heavy app, light เหมาะกับ reading/forms",
    fullDefinition:
      "Dark mode ไม่ใช่แค่เปลี่ยนสีดำขาว ต้องคำนึงถึง contrast ratio ของทุก element, elevation system (ใน dark mode ใช้ lighter surface แทน shadow), และ color saturation",
    whyItMatters:
      "ปัญหาที่พบบ่อยคือ dark mode ที่มีแค่ background ดำแต่ contrast ต่ำ และ image ที่ไม่ได้ปรับจะดู glaring มากบน dark background",
    examples: [
      "GitHub dark mode ที่ใช้ layered dark surfaces แทน shadow",
      "VS Code dark theme ที่มี syntax highlighting ชัดเจน",
    ],
    prompts: [
      "Implement dark mode โดยใช้ CSS custom properties และ prefers-color-scheme media query ตรวจว่า contrast ratio ผ่าน WCAG AA ทั้งสอง mode",
      "สร้าง theme switcher ที่ persist ใน localStorage และ sync กับ system preference โดย default",
    ],
    tags: ["theme", "dark", "light", "css-variables"],
    visualType: "darkmode",
    relatedSlugs: ["css-variables", "contrast-ratio"],
  },
  {
    id: "glassmorphism",
    slug: "glassmorphism",
    category: "style",
    icon: "🪞",
    term: "Glassmorphism",
    pronunciation: "กลาส-มอร์-ฟิซึม",
    level: "intermediate",
    shortDefinition: "Style ที่ใช้ frosted glass effect ด้วย backdrop-filter: blur() สร้าง translucent UI panels",
    fullDefinition:
      "Glassmorphism ใช้ background: rgba() + backdrop-filter: blur() + border ใส สร้าง panel ที่ดูเหมือนกระจกฝ้าอยู่บน gradient background เป็นที่นิยมใน hero section และ card overlay",
    whyItMatters:
      "Glassmorphism ดูดีบน gradient background แต่ performance cost สูงกว่า solid background และต้องระวัง contrast ของ text บน glass panel",
    examples: [
      "macOS Big Sur widget ที่ใช้ frosted glass",
      "App card ที่ float บน gradient background",
    ],
    prompts: [
      "ใช้ glassmorphism effect บน hero card โดย backdrop-filter: blur(12px), background: rgba(255,255,255,0.05), border: 1px solid rgba(255,255,255,0.1) และ check contrast ของ text",
    ],
    tags: ["glass", "blur", "css", "visual-effect"],
    visualType: "styles",
    relatedSlugs: ["dark-mode", "hero-section"],
  },
  {
    id: "minimalism",
    slug: "minimalism",
    category: "style",
    icon: "⬜",
    term: "Minimalism",
    pronunciation: "มิน-นิ-มอ-ลิซึม",
    level: "basic",
    shortDefinition: "ลด element ให้เหลือแค่สิ่งที่จำเป็น ทุก element ต้องมี purpose",
    fullDefinition:
      "Minimalism ไม่ใช่แค่ 'UI ว่าง' แต่คือการ prioritize อย่างระมัดระวัง ทุก element ที่อยู่บนหน้าจอต้องตอบโจทย์ function ที่ชัดเจน ลด cognitive load และทำให้ focus ไปที่ content",
    whyItMatters:
      "Minimalism ที่ทำผิดคือ sparse แต่ confusing ต้องแยกแยะระหว่าง minimal ที่ purposeful กับ minimal ที่ขาดข้อมูลสำคัญ",
    examples: [
      "Apple website ที่ใช้ whitespace เยอะแต่ hierarchy ชัดมาก",
      "Google search ที่มีแค่ search box",
    ],
    prompts: [
      "Review หน้านี้แบบ minimalism audit: ระบุทุก element ที่ไม่มี clear purpose และ propose ว่าควร remove หรือ consolidate อะไรบ้าง",
    ],
    tags: ["minimalism", "whitespace", "focus", "clean"],
    visualType: "styles",
    relatedSlugs: ["cozy-style", "visual-hierarchy"],
  },

  // ─── UX CONCEPTS ──────────────────────────────────────────────────
  {
    id: "responsive-design",
    slug: "responsive-design",
    category: "ux",
    icon: "📱",
    term: "Responsive Design",
    pronunciation: "เรส-พอน-ซิฟ ดี-ไซน์",
    level: "basic",
    shortDefinition: "ออกแบบให้ UI ปรับตัวได้กับทุก screen size โดยไม่ต้องทำหน้าแยก",
    fullDefinition:
      "Responsive design ใช้ fluid grid, flexible images, และ CSS media queries ทำให้ layout ปรับ breakpoint ตาม viewport width ต่างจาก adaptive design ที่ serve หน้าแยกตาม device",
    whyItMatters:
      "กว่า 60% ของ web traffic มาจาก mobile ถ้า mobile experience แย่ user จะ bounce และ Google ก็ rank ต่ำกว่า desktop-only site",
    examples: [
      "Card grid ที่เป็น 3 column บน desktop, 2 column บน tablet, 1 column บน mobile",
      "Sidebar ที่ซ่อนและกลายเป็น drawer บน mobile",
    ],
    prompts: [
      "ตรวจ responsive ของหน้านี้ที่ 375px/768px/1280px/1920px: ดู text overflow, image scaling, touch target size (min 44px), และ horizontal scroll",
      "แก้ layout นี้โดยใช้ CSS Grid พร้อม minmax() และ auto-fill แทน hardcoded breakpoints เพื่อให้ fluid ขึ้น",
    ],
    tags: ["responsive", "mobile", "breakpoints", "layout"],
    visualType: "responsive",
    relatedSlugs: ["mobile-first", "breakpoints", "flexbox"],
  },
  {
    id: "mobile-first",
    slug: "mobile-first",
    category: "ux",
    icon: "📲",
    term: "Mobile-First Design",
    pronunciation: "โมบาย เฟิร์ส",
    level: "basic",
    shortDefinition: "ออกแบบ mobile ก่อน แล้วค่อย enhance ขึ้น desktop — ไม่ใช่ shrink desktop ลงมา",
    fullDefinition:
      "Mobile-first approach เริ่มจาก constraints ที่แคบที่สุดก่อน ทำให้ต้องตัดสิน priority ของ content อย่างระมัดระวัง ผลคือ experience ที่ focused กว่าบน desktop ด้วย",
    whyItMatters:
      "ถ้า design desktop ก่อนแล้วย่อลง mobile มักจะ hide ของเยอะหรือ layout แตก Mobile-first บังคับให้ตัดสินใจ priority ก่อน",
    examples: [
      "CSS ที่เริ่มจาก base style สำหรับ mobile แล้วใช้ min-width breakpoint ขยาย",
      "Navigation ที่เริ่มจาก hamburger menu แล้ว enhance เป็น horizontal nav บน desktop",
    ],
    prompts: [
      "Redesign หน้านี้ด้วย mobile-first approach: เริ่มจาก 375px, ระบุ content priority, แล้ว enhance layout ขึ้นสู่ desktop ทีละ breakpoint",
    ],
    tags: ["mobile", "progressive-enhancement", "responsive"],
    visualType: "responsive",
    relatedSlugs: ["responsive-design", "breakpoints"],
  },
  {
    id: "user-flow",
    slug: "user-flow",
    category: "ux",
    icon: "🗺️",
    term: "User Flow / Task Flow",
    pronunciation: "ยูเซอร์ โฟลว์",
    level: "intermediate",
    shortDefinition: "ลำดับขั้นตอนที่ user ต้องผ่านเพื่อทำ task ให้สำเร็จ — เห็น drop-off point และ friction",
    fullDefinition:
      "User flow map ทุก decision point, action, และ screen ที่ user ต้องผ่าน Task flow เน้นที่ single task โดย abstract ออกจาก specific UI User flow เห็น happy path และ edge cases ครบ",
    whyItMatters:
      "การ design UI โดยไม่มี user flow ก่อนมักทำให้ miss edge cases และ create dead ends User flow บังคับให้คิดถึง error states และ back navigation",
    examples: [
      "Signup flow: Landing → Register Form → Email Verify → Onboarding → Dashboard",
      "Checkout flow: Cart → Shipping → Payment → Confirmation",
    ],
    prompts: [
      "วาด user flow สำหรับ feature นี้ โดยระบุ: entry points, happy path, error paths, edge cases, และ exit points ในแต่ละ step",
      "ก่อน implement ให้เขียน user flow ของ happy path และ edge cases และระบุจุด drop-off ที่เป็นไปได้",
    ],
    tags: ["flow", "ux", "planning", "architecture"],
    visualType: "flow",
    relatedSlugs: ["wireframe", "information-architecture", "onboarding-flow"],
  },
  {
    id: "wireframe",
    slug: "wireframe",
    category: "ux",
    icon: "🖼️",
    term: "Wireframe / Mockup / Prototype",
    pronunciation: "ไวร์-เฟรม",
    level: "basic",
    shortDefinition: "3 ระดับของ design fidelity: Wireframe=โครง, Mockup=สวยแล้ว, Prototype=คลิกได้",
    fullDefinition:
      "Wireframe คือ low-fidelity layout ที่ไม่มีสีหรือ font จริง Mockup คือ high-fidelity design ที่มีสีและ typography จริง Prototype คือ clickable version ที่ simulate interaction",
    whyItMatters:
      "ใช้ให้ถูก fidelity กับ stage ที่ถูก Wireframe สำหรับ structure review, Mockup สำหรับ visual review, Prototype สำหรับ usability testing",
    examples: [
      "Balsamiq wireframe เพื่อ layout approval ก่อน design",
      "Figma mockup สำหรับ stakeholder review",
      "Figma prototype สำหรับ usability test",
    ],
    prompts: [
      "สร้าง wireframe ของหน้านี้โดย focus ที่ layout, hierarchy, และ content placement ก่อน ยังไม่ต้องสน color หรือ font",
    ],
    tags: ["fidelity", "design-process", "figma", "planning"],
    visualType: "wireframe",
    relatedSlugs: ["user-flow", "prototype", "design-handoff"],
  },
  {
    id: "information-architecture",
    slug: "information-architecture",
    category: "ux",
    icon: "🏛️",
    term: "Information Architecture (IA)",
    pronunciation: "อิน-ฟอร์-เม-ชัน อาร์-คิ-เทค-เชอร์",
    level: "intermediate",
    shortDefinition: "การจัดโครงสร้างและจัดกลุ่ม content ให้ user หาสิ่งที่ต้องการได้ง่าย",
    fullDefinition:
      "IA ครอบคลุม navigation structure, labeling, search, và taxonomy IA ที่ดีทำให้ user ค้นหาข้อมูลได้โดย intuitive โดยไม่ต้องอ่าน manual",
    whyItMatters:
      "IA ที่แย่ทำให้ user navigate แบบ trial-and-error ไม่รู้ว่า feature อยู่ที่ไหน ต้องทำ card sorting และ tree testing เพื่อ validate",
    examples: [
      "Website navigation ที่จัดหมวดหมู่ product ตามที่ user think ไม่ใช่ตาม internal team structure",
    ],
    prompts: [
      "Audit IA ของ navigation นี้: ทุก label ชัดเจนไหม? grouping ตรงกับ mental model ของ user ไหม? มี dead end ไหม?",
    ],
    tags: ["ia", "navigation", "structure", "taxonomy"],
    visualType: "flow",
    relatedSlugs: ["user-flow", "card-sorting", "tree-testing"],
  },
  {
    id: "cognitive-load",
    slug: "cognitive-load",
    category: "ux",
    icon: "🧠",
    term: "Cognitive Load",
    pronunciation: "ค็อก-นิ-ทิฟ โหลด",
    level: "intermediate",
    shortDefinition: "ปริมาณความพยายามทางจิตใจที่ต้องใช้เพื่อ process ข้อมูลบนหน้าจอ",
    fullDefinition:
      "Cognitive load แบ่งเป็น intrinsic (ความซับซ้อนของ task), extraneous (ความซับซ้อนจาก UI ที่แย่), และ germane (การเรียนรู้ที่เกิดขึ้น) เป้าหมายคือลด extraneous load",
    whyItMatters:
      "UI ที่มี cognitive load สูงทำให้ user ทำผิด, ช้า, หรือ abandon task ลด cognitive load ด้วย progressive disclosure, chunking และ clear hierarchy",
    examples: [
      "Form ที่แยกเป็น multi-step แทน single long form ลด cognitive load",
      "Dashboard ที่ highlight KPI สำคัญแทนแสดงทุก metric",
    ],
    prompts: [
      "ลด cognitive load ของหน้านี้: จัด group ข้อมูลที่เกี่ยวข้อง, ซ่อน advanced options ด้วย progressive disclosure, และลด decision points ต่อ screen",
    ],
    tags: ["cognitive", "complexity", "ux-principles", "simplicity"],
    visualType: "flow",
    relatedSlugs: ["progressive-disclosure", "visual-hierarchy", "information-architecture"],
  },
  {
    id: "progressive-disclosure",
    slug: "progressive-disclosure",
    category: "ux",
    icon: "📖",
    term: "Progressive Disclosure",
    pronunciation: "โพร-เกรส-ซิฟ ดิส-โคลเชอร์",
    level: "intermediate",
    shortDefinition: "แสดงข้อมูลที่จำเป็นก่อน ซ่อน advanced options ไว้ให้ user ค้นหาเองเมื่อพร้อม",
    fullDefinition:
      "Progressive disclosure ลด initial complexity โดยแสดงแค่ essential options ก่อน และซ่อน advanced settings ไว้หลัง expandable section, tooltip, หรือ secondary screen",
    whyItMatters:
      "การแสดงทุก option พร้อมกันทำให้ new user ท้อและ power user frustrated ที่ต้องผ่าน basic options Progressive disclosure serve ทั้งคู่",
    examples: [
      "'Show advanced settings' accordion ใน form",
      "Simple search ที่มี 'Advanced search' link",
      "Onboarding ที่แสดง feature ทีละอัน",
    ],
    prompts: [
      "ปรับ settings page นี้ด้วย progressive disclosure: แสดงแค่ common settings ก่อน และซ่อน advanced options ไว้หลัง 'Advanced' section",
    ],
    tags: ["ux-principles", "simplicity", "information", "disclosure"],
    visualType: "flow",
    relatedSlugs: ["cognitive-load", "onboarding-flow"],
  },
  {
    id: "visual-hierarchy",
    slug: "visual-hierarchy",
    category: "ux",
    icon: "🏔️",
    term: "Visual Hierarchy",
    pronunciation: "วิ-ชวล ไฮ-เออ-ราร์-คี",
    level: "basic",
    shortDefinition: "การจัดลำดับความสำคัญของ element บนหน้าจอผ่าน size, weight, color, และ spacing",
    fullDefinition:
      "Visual hierarchy ชี้นำสายตา user ให้ process information ตามลำดับที่ต้องการ ใช้ contrast, scale, color, whitespace และ positioning เพื่อแสดงว่า element ไหนสำคัญกว่า",
    whyItMatters:
      "หน้าที่ไม่มี hierarchy ทำให้ user สแกนไม่ออกว่า action หลักคืออะไร ทุกอย่างดูสำคัญเท่ากันหมด = ไม่มีอะไรสำคัญเลย",
    examples: [
      "Headline H1 ใหญ่, H2 เล็กกว่า, body text เล็กสุด",
      "Primary button เด่นกว่า secondary button",
      "Pricing card ที่ highlight recommended plan",
    ],
    prompts: [
      "Audit visual hierarchy ของหน้านี้: element ไหนสำคัญที่สุด? สายตา user ไปที่ไหนก่อน? CTA เด่นพอไหม? แก้ให้ hierarchy ชัดขึ้น",
    ],
    tags: ["hierarchy", "typography", "layout", "design"],
    visualType: "flow",
    relatedSlugs: ["cognitive-load", "cta", "minimalism"],
  },
  {
    id: "onboarding-flow",
    slug: "onboarding-flow",
    category: "ux",
    icon: "🚀",
    term: "Onboarding Flow",
    pronunciation: "ออน-บอร์ด-ดิ้ง โฟลว์",
    level: "intermediate",
    shortDefinition: "ลำดับขั้นตอนที่พา new user ให้เข้าใจ product และเริ่มสร้าง value ได้เร็วที่สุด",
    fullDefinition:
      "Onboarding flow ออกแบบเพื่อลด time-to-value — เวลาที่ user ใช้จนได้รับ value แรกจาก product อาจเป็น welcome screen, setup wizard, progress checklist หรือ empty state ที่ guide",
    whyItMatters:
      "Onboarding ที่แย่ทำให้ user ไม่เข้าใจว่า product ทำอะไรได้ ออกไปก่อนที่จะเห็น value ส่งผลต่อ activation rate โดยตรง",
    examples: [
      "Slack ที่ guide user ให้ invite team member และส่ง first message",
      "Profile completion checklist ที่แสดง progress",
    ],
    prompts: [
      "ออกแบบ onboarding flow สำหรับ feature ใหม่นี้ โดย define ว่า 'aha moment' คืออะไร และลำดับขั้นตอนที่พา user ไปสู่ moment นั้นเร็วที่สุด",
    ],
    tags: ["onboarding", "activation", "ux", "conversion"],
    visualType: "flow",
    relatedSlugs: ["user-flow", "empty-state", "progressive-disclosure"],
  },

  // ─── CSS / DEV TERMS ──────────────────────────────────────────────
  {
    id: "box-model",
    slug: "box-model",
    category: "css",
    icon: "📦",
    term: "Box Model: Padding vs Margin",
    pronunciation: "บ็อกซ์ โมเดล",
    level: "basic",
    shortDefinition: "Content + Padding + Border + Margin = กล่องทุกอย่างใน CSS — padding คือด้านใน, margin คือด้านนอก",
    fullDefinition:
      "CSS box model กำหนดพื้นที่ของทุก element: content area, padding (ระยะห่างภายใน), border, และ margin (ระยะห่างภายนอก) box-sizing: border-box ทำให้ padding ไม่บวกเพิ่ม width",
    whyItMatters:
      "ความเข้าใจผิดระหว่าง padding กับ margin ทำให้ layout แปลกๆ margin collapse ใน vertical สร้าง spacing ที่ไม่คาดคิด ต้องใช้ box-sizing: border-box เสมอ",
    examples: [
      "padding: 16px เพิ่มพื้นที่ภายใน card",
      "margin: auto ทำให้ block element อยู่กลางหน้า",
      "box-sizing: border-box ทำให้ padding ไม่ขยาย width",
    ],
    prompts: [
      "ตรวจ spacing system ของ codebase นี้: มี magic numbers ไหม? ควร refactor ให้ใช้ spacing scale เช่น 4px, 8px, 16px, 24px, 32px, 48px แทน",
      "อธิบายให้ designer ว่าทำไมใส่ padding ใน component ดีกว่าใส่ margin ใน parent เพื่อ composability",
    ],
    tags: ["css", "spacing", "layout", "box-model"],
    visualType: "boxmodel",
    relatedSlugs: ["flexbox", "css-grid", "breakpoints"],
  },
  {
    id: "flexbox",
    slug: "flexbox",
    category: "css",
    icon: "↔️",
    term: "Flexbox",
    pronunciation: "เฟล็กซ์-บ็อกซ์",
    level: "basic",
    shortDefinition: "CSS layout ที่จัด element เป็น row หรือ column แบบ flexible — เหมาะกับ 1 dimension",
    fullDefinition:
      "Flexbox (CSS Flexible Box) ช่วยจัด element ใน container ตาม main axis (row/column) และ cross axis โดย properties หลักคือ display: flex, justify-content, align-items, flex-wrap, gap",
    whyItMatters:
      "Flexbox เหมาะกับ navbar, button groups, form rows — layout 1 dimension Grid เหมาะกับ 2 dimension เช่น card grid ถ้าใช้ผิดก็ทำให้โค้ดซับซ้อนโดยไม่จำเป็น",
    examples: [
      "Navbar ที่ใช้ flex justify-content: space-between",
      "Button group ที่ใช้ flex gap-2",
      "Centered content ที่ใช้ flex items-center justify-center",
    ],
    prompts: [
      "แก้ layout นี้ให้ไม่มี magic number: ใช้ flexbox พร้อม gap แทน margin, จัด alignment ด้วย align-items/justify-content",
    ],
    tags: ["css", "layout", "flexbox", "alignment"],
    visualType: "grid",
    relatedSlugs: ["css-grid", "box-model", "responsive-design"],
  },
  {
    id: "css-grid",
    slug: "css-grid",
    category: "css",
    icon: "⊞",
    term: "CSS Grid",
    pronunciation: "ซีเอสเอส กริด",
    level: "intermediate",
    shortDefinition: "CSS layout ที่จัด element ใน 2 dimensions (row + column) พร้อมกัน — เหมาะกับ card grids และ page layout",
    fullDefinition:
      "CSS Grid ใช้ display: grid และกำหนด rows/columns ด้วย grid-template-columns/rows Items วางตามได้โดย auto-placement หรือกำหนด grid-column/row เองได้",
    whyItMatters:
      "Grid ทำ complex layout ที่ flexbox ทำยาก เช่น masonry, asymmetric layout และ named grid areas ทำให้ layout อ่านง่ายมาก",
    examples: [
      "Card grid: grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))",
      "Dashboard layout ที่มี sidebar + main + aside",
      "Magazine layout ที่มี featured article คลุม 2 column",
    ],
    prompts: [
      "แปลง card layout นี้ให้ใช้ CSS Grid แทน flexbox: ใช้ repeat(auto-fill, minmax(280px, 1fr)) เพื่อ responsive โดยไม่ต้องใช้ media query",
    ],
    tags: ["css", "grid", "layout", "responsive"],
    visualType: "grid",
    relatedSlugs: ["flexbox", "responsive-design", "breakpoints"],
  },
  {
    id: "breakpoints",
    slug: "breakpoints",
    category: "css",
    icon: "📐",
    term: "Breakpoints",
    pronunciation: "เบรค-พอยท์ส",
    level: "basic",
    shortDefinition: "จุด viewport width ที่ layout เปลี่ยน — มักใช้ 375px, 768px, 1024px, 1280px",
    fullDefinition:
      "Breakpoints ใช้ใน CSS media queries เพื่อปรับ layout ตาม viewport ขนาด Standard breakpoints ของ Tailwind: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)",
    whyItMatters:
      "breakpoint ที่ดีมาจากที่ content 'แตก' ไม่ใช่ตาม device size หนึ่งๆ ควรทดสอบที่ breakpoint หลักเสมอและดู layout shift ที่เกิดขึ้น",
    examples: [
      "Sidebar ที่ hidden ใต้ md: md:block",
      "Grid columns ที่เปลี่ยนจาก 1 เป็น 2 เป็น 3",
    ],
    prompts: [
      "ตรวจ layout ที่ 375px, 768px, 1280px และแสดง screenshot ของแต่ละ breakpoint พร้อม list ปัญหาที่พบ",
    ],
    tags: ["css", "responsive", "media-query", "layout"],
    visualType: "responsive",
    relatedSlugs: ["responsive-design", "mobile-first", "css-grid"],
  },
  {
    id: "css-variables",
    slug: "css-variables",
    category: "css",
    icon: "🎨",
    term: "CSS Variables (Custom Properties)",
    pronunciation: "ซีเอสเอส แว-ริ-เอ-เบิลส์",
    level: "intermediate",
    shortDefinition: "ตัวแปรใน CSS ที่เขียนว่า --name: value และใช้ว่า var(--name) ช่วย maintain theme ได้ง่าย",
    fullDefinition:
      "CSS Custom Properties ให้เก็บ value ซ้ำๆ เช่น colors, spacing, font sizes ไว้ใน :root แล้วใช้ var(--token) ทั่วไป เปลี่ยนแค่จุดเดียวแล้ว update ทุกที่ รองรับ JavaScript ด้วย",
    whyItMatters:
      "ถ้าไม่ใช้ CSS variables แล้วอยาก rebrand ต้อง find-replace ทั้ง codebase CSS variables ทำให้ theme switching (dark/light) เป็นเรื่องง่าย",
    examples: [
      "--color-primary: #8b5cf6; ใช้ใน button, link, highlight",
      "--spacing-md: 16px; ใช้เป็น standard spacing unit",
    ],
    prompts: [
      "Extract hardcoded color values ทั้งหมดในไฟล์นี้ให้เป็น CSS custom properties ใน :root และ replace ทุก occurrence",
    ],
    tags: ["css", "variables", "theming", "tokens"],
    visualType: "token",
    relatedSlugs: ["design-tokens", "dark-mode", "design-system"],
  },
  {
    id: "z-index",
    slug: "z-index",
    category: "css",
    icon: "🎭",
    term: "Z-index",
    pronunciation: "แซด อิน-เด็กซ์",
    level: "intermediate",
    shortDefinition: "ลำดับชั้นความ 'สูง' ของ element บน stack axis — modal ต้องสูงกว่า navbar ต้องสูงกว่า content",
    fullDefinition:
      "z-index กำหนดลำดับการซ้อนของ positioned elements (relative/absolute/fixed/sticky) Element ที่มี z-index สูงกว่าจะอยู่บน Best practice คือ define z-index scale เช่น 10/20/30/modal/toast",
    whyItMatters:
      "z-index ที่ไม่มี system ทำให้ modal ถูก navbar บัง, tooltip ซ่อนอยู่ใต้ card การมี defined scale ป้องกัน z-index wars ที่ทุกคน set ค่าสูงขึ้นเรื่อยๆ",
    examples: [
      "Sticky header z-index: 100, Dropdown: 200, Modal backdrop: 300, Modal: 400, Toast: 500",
    ],
    prompts: [
      "ตรวจ z-index ทั้ง codebase นี้: มี z-index: 9999 หรือ arbitrary ไหม? Define z-index scale ใน CSS variables แล้ว replace ทั้งหมด",
    ],
    tags: ["css", "stacking", "layout", "overlay"],
    visualType: "boxmodel",
    relatedSlugs: ["modal", "sidebar", "css-variables"],
  },

  // ─── UX/UI LEAD SKILLS ────────────────────────────────────────────
  {
    id: "design-system",
    slug: "design-system",
    category: "lead",
    icon: "🏗️",
    term: "Design System & Component Library",
    pronunciation: "ดี-ไซน์ ซิส-เทม",
    level: "advanced",
    shortDefinition: "ชุด reusable component, token, และ guideline ที่ทำให้ team สร้าง product อย่าง consistent",
    fullDefinition:
      "Design system ประกอบด้วย: design tokens (color, spacing, typography), component library (Button, Input, Modal, etc.), pattern library (form patterns, navigation patterns), และ documentation",
    whyItMatters:
      "ไม่มี design system = ทุกคนออกแบบ button ใหม่ทุกครั้ง ทำให้ visual inconsistency และ development ช้า ใช้เวลา setup แต่ประหยัดเวลา long-term มหาศาล",
    examples: [
      "Material Design, Carbon Design System, Atlassian Design System",
      "Company internal design system ที่มี Figma library + code components",
    ],
    prompts: [
      "Audit design system ของ codebase นี้: component ใดที่ duplicate? สีและ spacing ที่ inconsistent? เสนอ action plan เพื่อ consolidate",
      "สร้าง Button component ที่เป็น foundation ของ design system: variant, size, state, icon support, loading state, accessible",
    ],
    tags: ["design-system", "components", "tokens", "governance"],
    visualType: "design-system",
    relatedSlugs: ["design-tokens", "component-library", "design-handoff"],
  },
  {
    id: "design-tokens",
    slug: "design-tokens",
    category: "lead",
    icon: "🎟️",
    term: "Design Token",
    pronunciation: "ดี-ไซน์ โท-เค็น",
    level: "advanced",
    shortDefinition: "ค่า design ที่ตั้งชื่อไว้เพื่อแชร์ระหว่าง design tool และ code เช่น color-primary, spacing-md",
    fullDefinition:
      "Design token คือ named values ที่เป็น single source of truth ระหว่าง designer (Figma) และ developer (CSS/TypeScript) แบ่งเป็น primitive tokens (สี hex) และ semantic tokens (color-background-button-primary)",
    whyItMatters:
      "ถ้าเปลี่ยนสี brand ต้องการแก้แค่ token เดียวแล้ว update ทุกที่ Design token ลด disconnect ระหว่าง Figma กับ code และทำให้ rebrand ง่ายขึ้นมาก",
    examples: [
      "--color-brand-primary: #8b5cf6",
      "--spacing-component-gap: 16px",
      "--radius-card: 8px",
    ],
    prompts: [
      "สร้าง design token file ที่แยก primitive tokens (raw colors, sizes) และ semantic tokens (color-text-primary, color-bg-card) โดยชั้น semantic ใช้ primitive token เป็น value",
    ],
    tags: ["tokens", "design-system", "css-variables", "naming"],
    visualType: "token",
    relatedSlugs: ["design-system", "css-variables", "component-library"],
  },
  {
    id: "design-handoff",
    slug: "design-handoff",
    category: "lead",
    icon: "🤝",
    term: "Design Handoff & Dev Communication",
    pronunciation: "ดี-ไซน์ แฮนด์-ออฟ",
    level: "advanced",
    shortDefinition: "กระบวนการส่งมอบ design spec ให้ developer implement ได้ถูกต้องโดยไม่ต้องถามซ้ำ",
    fullDefinition:
      "Design handoff ที่ดีมี: component spec ที่ชัด, interaction notes, responsive rules, edge cases, state documentation, และ acceptance criteria ที่ developer ใช้ตรวจงานได้",
    whyItMatters:
      "Handoff ที่แย่ทำให้ developer ต้องเดา implement ผิด และต้องทำซ้ำหลายรอบ Handoff ที่ดีช่วยประหยัดเวลา review cycle มากที่สุด",
    examples: [
      "Figma spec ที่มี annotation บอก state, breakpoint, spacing ครบ",
      "Acceptance criteria เขียนว่า 'Button แสดง loading spinner เมื่อ click และ disable ระหว่าง request'",
    ],
    prompts: [
      "เขียน acceptance criteria สำหรับ component นี้ให้ developer ใช้ตรวจงานได้: state ครบ, responsive rules, edge cases, accessibility requirements",
      "สร้าง handoff checklist: responsive spec, interaction notes, component states, error cases, accessibility notes",
    ],
    tags: ["handoff", "developer", "communication", "spec"],
    visualType: "handoff",
    relatedSlugs: ["design-system", "acceptance-criteria", "ux-metrics"],
  },
  {
    id: "ux-metrics",
    slug: "ux-metrics",
    category: "lead",
    icon: "📊",
    term: "UX Metrics & Success KPI",
    pronunciation: "ยูเอกซ์ เมท-ริกซ์",
    level: "advanced",
    shortDefinition: "ตัวเลขที่บอกว่า UX ดีหรือไม่ — Task completion rate, Time on task, Error rate, NPS, SUS score",
    fullDefinition:
      "UX metrics แบ่งเป็น behavioral (task completion, time on task, error rate, click heatmap) และ attitudinal (NPS, CSAT, SUS score) ควรใช้ทั้งสองแบบเพื่อเห็นภาพครบ",
    whyItMatters:
      "ไม่มี metrics = ไม่รู้ว่า UX improvement จริงหรือแค่ assumption Design decision ที่มี data support เชื่อถือได้กว่าและ pitch stakeholder ง่ายกว่ามาก",
    examples: [
      "Task completion rate ของ checkout flow: 72% → target 85%",
      "SUS score หลัง redesign: 68 → 82",
    ],
    prompts: [
      "Define UX success metrics สำหรับ feature นี้: primary metric, secondary metrics, baseline, target, และวิธี measure แต่ละตัว",
      "ออกแบบ UX metrics dashboard ที่ track task completion rate, error rate, time on task, และ NPS แยกตาม user segment",
    ],
    tags: ["metrics", "kpi", "data", "measurement"],
    visualType: "metrics",
    relatedSlugs: ["usability-testing", "ab-testing", "nps"],
  },
  {
    id: "design-critique",
    slug: "design-critique",
    category: "lead",
    icon: "🔍",
    term: "Design Critique & Review Process",
    pronunciation: "ดี-ไซน์ คริ-ทีก",
    level: "advanced",
    shortDefinition: "กระบวนการ review design อย่างมีโครงสร้าง เพื่อพัฒนางานไม่ใช่แค่ชม/ติ",
    fullDefinition:
      "Design critique ที่ดีใช้ structure: Context (อะไร, ทำไม), Goals (เป้าหมายของ design), Observations (สิ่งที่เห็น), Questions (คำถามเพื่อ clarify), Suggestions (ข้อเสนอ) ไม่ใช่แค่ 'ชอบ/ไม่ชอบ'",
    whyItMatters:
      "Critique ที่ไม่มีโครงสร้างมักกลายเป็น personal opinion battle ทำให้ designer defend แทน improve โครงสร้างที่ดีทำให้ feedback actionable",
    examples: [
      "Presentation: Context → Goals → Demo → Structured Q&A",
      "Async feedback comment ที่เชื่อมกับ specific design goal",
    ],
    prompts: [
      "Review design นี้ด้วย critique framework: บอก what works, what questions ที่อยากถาม, และ specific suggestions พร้อม rationale — ไม่ใช่แค่ 'ไม่ชอบ'",
    ],
    tags: ["critique", "review", "process", "communication"],
    visualType: "critique",
    relatedSlugs: ["design-handoff", "ux-metrics", "stakeholder-review"],
  },

  // ─── AI IMAGE PROMPTING ───────────────────────────────────────────
  {
    id: "isometric-illustration",
    slug: "isometric-illustration",
    category: "ai-prompting",
    icon: "🏙️",
    term: "Isometric Illustration Style",
    pronunciation: "ไอ-โซ-เมท-ริก",
    level: "intermediate",
    shortDefinition: "Style ภาพ 3D ที่มองจากมุม 45° สร้าง depth แบบ flat ไม่มี perspective distortion",
    fullDefinition:
      "Isometric illustration ใช้ 3 axes ที่เท่ากัน 120° ทำให้ object มี depth แต่ proportions ไม่บิดเบือน นิยมใช้ใน hero image, feature illustration, SaaS landing page เพราะดูทันสมัยและ tech-savvy",
    whyItMatters:
      "Isometric style บอก brand positioning แบบ tech/SaaS ได้ดี เหมาะกับ AI, developer tool, fintech AI tools เช่น Midjourney สร้าง isometric ได้ดีเมื่อ prompt ถูก",
    examples: [
      "isometric illustration of a developer workspace with floating code blocks",
      "isometric 3D city with technology buildings",
    ],
    prompts: [
      "isometric 3D vector illustration of a UX design system workspace, floating UI components, mini designer and developer characters collaborating, dark navy background, purple cyan accents, clean SaaS style, no text, no watermark, 16:9",
      "isometric flat vector illustration of a dashboard analytics room, data charts floating, small character analyzing metrics, teal and purple color scheme, white background, no text",
    ],
    tags: ["isometric", "illustration", "ai-image", "saas"],
    visualType: "isometric",
    relatedSlugs: ["ai-prompt-formula", "hero-section"],
  },
  {
    id: "ai-prompt-formula",
    slug: "ai-prompt-formula",
    category: "ai-prompting",
    icon: "📐",
    term: "AI Image Prompt Formula",
    pronunciation: "เอไอ พรอม-พต ฟอร์-มิว-ลา",
    level: "basic",
    shortDefinition: "โครงสร้างของ prompt ที่ดีสำหรับ AI image: Subject + Style + Mood + Color + Technical Specs",
    fullDefinition:
      "Prompt formula ที่ได้ผลดี: [Subject description] + [Art style] + [Mood/Atmosphere] + [Color palette] + [Technical specs: aspect ratio, quality flags] + [Negative prompt ถ้าจำเป็น]",
    whyItMatters:
      "Prompt ที่ดีลด iteration เยอะมาก การเพิ่ม technical specs เช่น 'no text, no watermark, sharp details' ป้องกัน output ที่ unusable",
    examples: [
      "[flat vector illustration] + [SaaS onboarding scene] + [friendly, professional] + [blue and white] + [no text, no watermark, 16:9]",
    ],
    prompts: [
      "ใช้ formula นี้สร้าง hero illustration สำหรับ [product]: Subject + Art Style + Mood + Color Palette + No text + No watermark + Aspect ratio",
      "flat vector illustration for a UX research dashboard, user interview notes, funnel chart, heatmap screen, clean white background, blue and teal palette, no text, no watermark",
    ],
    tags: ["ai-image", "prompt", "formula", "midjourney"],
    visualType: "formula",
    relatedSlugs: ["negative-prompt", "isometric-illustration"],
  },
  {
    id: "negative-prompt",
    slug: "negative-prompt",
    category: "ai-prompting",
    icon: "🚫",
    term: "Negative Prompt",
    pronunciation: "เนก-กา-ทิฟ พรอม-พต",
    level: "intermediate",
    shortDefinition: "ส่วนของ prompt ที่บอก AI ว่าไม่ต้องการอะไร เพื่อหลีกเลี่ยง element ที่ไม่ต้องการ",
    fullDefinition:
      "Negative prompt ใช้ใน Stable Diffusion, Midjourney (--no flag), DALL-E เพื่อบอกว่าห้ามมี element ใดในภาพ เช่น no text, no watermark, no extra limbs, no blurry",
    whyItMatters:
      "AI มักใส่ text หรือ watermark โดย default การใส่ negative prompt ลด revision ได้มาก โดยเฉพาะสำหรับ marketing material ที่ต้องการ clean image",
    examples: [
      "--no text, watermark, signature, low quality, blurry",
      "Negative: ugly, deformed, low quality, text, logo",
    ],
    prompts: [
      "เพิ่ม negative prompt ที่ครอบคลุม: no text, no watermark, no signature, no low quality, no blurry background, no extra limbs, no distorted faces",
    ],
    tags: ["ai-image", "negative-prompt", "midjourney", "stable-diffusion"],
    visualType: "tips",
    relatedSlugs: ["ai-prompt-formula", "isometric-illustration"],
  },
  {
    id: "aspect-ratio-prompting",
    slug: "aspect-ratio-prompting",
    category: "ai-prompting",
    icon: "📏",
    term: "Aspect Ratio Prompting",
    pronunciation: "แอส-เป็กต์ เร-ชิ-โอ",
    level: "basic",
    shortDefinition: "การระบุ ratio ของภาพใน prompt เช่น 16:9 สำหรับ hero, 1:1 สำหรับ profile, 9:16 สำหรับ story",
    fullDefinition:
      "Aspect ratio กำหนด composition ของภาพ สำคัญมากสำหรับ UI: hero section ต้องการ 16:9 หรือ 21:9, product feature ใช้ 4:3 หรือ 1:1, social media post ใช้ 1:1 หรือ 4:5",
    whyItMatters:
      "ถ้าไม่ระบุ ratio AI จะ default ไป 1:1 ซึ่งอาจไม่เหมาะกับ use case นั้น การระบุ ratio ตั้งแต่แรกประหยัด crop และ recompose ทีหลัง",
    examples: [
      "Midjourney: --ar 16:9 สำหรับ hero banner",
      "DALL-E: 'landscape 16:9 aspect ratio'",
      "Instagram post: --ar 1:1",
    ],
    prompts: [
      "ระบุ aspect ratio ใน prompt ตาม use case: hero banner → 16:9, feature card image → 4:3, social media → 1:1, mobile story → 9:16",
    ],
    tags: ["ai-image", "aspect-ratio", "composition", "layout"],
    visualType: "tips",
    relatedSlugs: ["ai-prompt-formula", "negative-prompt"],
  },

  // ─── UX RESEARCH ──────────────────────────────────────────────────
  {
    id: "user-interview",
    slug: "user-interview",
    category: "research",
    icon: "🎤",
    term: "User Interview",
    pronunciation: "ยูเซอร์ อิน-เทอร์-วิว",
    level: "intermediate",
    shortDefinition: "การสัมภาษณ์ผู้ใช้แบบ 1:1 เพื่อเข้าใจ mental model, pain points, และ behavior จริง",
    fullDefinition:
      "User interview เป็น qualitative research ที่ใช้ open-ended questions เพื่อ explore ประสบการณ์และความคิดของ user ไม่ใช่แค่ test usability แต่เพื่อเข้าใจ why",
    whyItMatters:
      "Survey บอก 'อะไร' Interview บอก 'ทำไม' — เข้าใจ underlying motivation ที่ survey ไม่สามารถ capture ได้ ต้องทำก่อน design decision ใหญ่",
    examples: [
      "5-7 user interviews ก่อน redesign major feature",
      "Jobs-to-be-done interview เพื่อเข้าใจ motivation การซื้อ",
    ],
    prompts: [
      "เขียน discussion guide สำหรับ user interview เกี่ยวกับ [topic]: warm-up questions, core questions เกี่ยวกับ behavior จริง, และ wrap-up — ห้ามถาม leading questions",
      "สรุป insights จาก user interview 5 คนโดย cluster themes และ identify top 3 pain points ที่ควร address ก่อน",
    ],
    tags: ["research", "qualitative", "interview", "user"],
    visualType: "research",
    relatedSlugs: ["usability-testing", "survey", "ux-metrics"],
  },
  {
    id: "usability-testing",
    slug: "usability-testing",
    category: "research",
    icon: "🧪",
    term: "Usability Testing",
    pronunciation: "ยูส-อะ-บิล-ลิ-ตี เทส-ติ้ง",
    level: "intermediate",
    shortDefinition: "การให้ user จริงทำ task บน product และ observe ว่า stuck หรือ confused ที่จุดไหน",
    fullDefinition:
      "Usability testing ให้ user ทำ realistic tasks บน prototype หรือ live product ขณะ think-aloud ค้นหา usability issues ที่ designer/developer ไม่เห็น 5 users เจอปัญหาหลักได้ถึง 85%",
    whyItMatters:
      "Designer อยู่กับ design นานเกินไปจนมองไม่เห็น obvious problems User testing เปิดเผย 'curse of knowledge' — สิ่งที่เราคิดว่าชัดแจ้งแต่ user งงมาก",
    examples: [
      "Moderated usability test 5 คน พร้อม task scenario และ observation notes",
      "Unmoderated test ด้วย Maze/UserTesting ที่ users ทำเองที่บ้าน",
    ],
    prompts: [
      "ออกแบบ usability test สำหรับ onboarding flow นี้: task scenario, success criteria, observation checklist, และ post-test questions",
      "สรุปผล usability test: cluster issues ตาม severity (critical/major/minor) และ frequency พร้อม recommendation",
    ],
    tags: ["research", "testing", "usability", "ux"],
    visualType: "research",
    relatedSlugs: ["user-interview", "ab-testing", "ux-metrics"],
  },
  {
    id: "ab-testing",
    slug: "ab-testing",
    category: "research",
    icon: "⚡",
    term: "A/B Testing",
    pronunciation: "เอ-บี เทส-ติ้ง",
    level: "advanced",
    shortDefinition: "ทดสอบ design 2 version พร้อมกันกับ real users เพื่อ measure ว่า version ไหน perform ดีกว่า",
    fullDefinition:
      "A/B testing แบ่ง traffic เป็นสองกลุ่ม แต่ละกลุ่มเห็น version ต่างกัน และ measure metric ที่กำหนด (conversion, click rate, etc.) ต้องมี statistical significance ก่อน conclude",
    whyItMatters:
      "A/B test ป้องกันการ rollout feature ที่ 'ดูดี' แต่ลด conversion จริง ต้องระวัง: test ครั้งเดียวกันทีเดียวได้แค่ 1 variable ไม่อย่างนั้นไม่รู้ว่าอะไรส่งผล",
    examples: [
      "Test CTA copy 'Start Free Trial' vs 'Get Started Free' เพื่อ measure click rate",
      "Test hero headline 2 version เพื่อ measure bounce rate",
    ],
    prompts: [
      "ออกแบบ A/B test สำหรับ hypothesis นี้: define control, variant, metric ที่ measure, sample size ที่ต้องการ, และ duration ที่เหมาะสม",
    ],
    tags: ["testing", "experiment", "data", "conversion"],
    visualType: "metrics",
    relatedSlugs: ["usability-testing", "conversion-rate", "ux-metrics"],
  },

  // ─── ACCESSIBILITY ────────────────────────────────────────────────
  {
    id: "wcag",
    slug: "wcag",
    category: "accessibility",
    icon: "♿",
    term: "WCAG 2.1 AA",
    pronunciation: "ดับเบิ้ลยู-แคก",
    level: "advanced",
    shortDefinition: "มาตรฐาน accessibility ระดับ AA ที่ require contrast ratio 4.5:1 สำหรับ normal text",
    fullDefinition:
      "WCAG (Web Content Accessibility Guidelines) 2.1 Level AA เป็น standard ที่ government และ enterprise ใช้เป็น legal requirement มี 4 หลักการ: Perceivable, Operable, Understandable, Robust (POUR)",
    whyItMatters:
      "WCAG compliance ไม่ใช่แค่ ethical เป็น legal requirement ในหลายประเทศ และ accessibility ที่ดีมักทำให้ UX ดีขึ้นสำหรับทุกคน ไม่ใช่แค่ คนพิการ",
    examples: [
      "Contrast ratio ≥ 4.5:1 สำหรับ normal text",
      "Keyboard navigation ทุก interactive element",
      "Alt text บนทุก meaningful image",
    ],
    prompts: [
      "Audit accessibility ของหน้านี้ตาม WCAG 2.1 AA: contrast ratio, keyboard navigation, focus state, aria-label, heading order, form labels, alt text, และ reduced motion",
      "Fix accessibility issues ที่พบ: เพิ่ม aria-label ที่ขาด, แก้ contrast, เพิ่ม focus-visible state, และ semantic HTML",
    ],
    tags: ["wcag", "accessibility", "compliance", "standard"],
    visualType: "accessibility",
    relatedSlugs: ["contrast-ratio", "keyboard-navigation", "screen-reader"],
  },
  {
    id: "contrast-ratio",
    slug: "contrast-ratio",
    category: "accessibility",
    icon: "🎯",
    term: "Contrast Ratio",
    pronunciation: "คอน-ทราสต์ เร-ชิ-โอ",
    level: "basic",
    shortDefinition: "อัตราส่วนความแตกต่างของสีระหว่าง text กับ background — WCAG AA ต้องการ 4.5:1",
    fullDefinition:
      "Contrast ratio คำนวณจาก relative luminance ของสองสี Normal text ต้องการ 4.5:1, large text (18pt+) ต้องการ 3:1 เพื่อผ่าน WCAG AA ใช้ tools เช่น WebAIM Contrast Checker",
    whyItMatters:
      "Text ที่ contrast ต่ำอ่านยากสำหรับคนตาไม่ดีหรืออยู่กลางแดด ปัญหาบ่อยคือ gray text บน white background หรือ colored text บน colored background",
    examples: [
      "#ffffff on #8b5cf6 = 5.74:1 (Pass AA)",
      "#6e7681 on #0d1117 = 4.8:1 (Pass AA)",
    ],
    prompts: [
      "ตรวจ contrast ratio ของทุก text element ในหน้านี้ด้วย WebAIM contrast checker แล้ว list ทุกที่ที่ fail WCAG AA และ propose การแก้",
    ],
    tags: ["contrast", "accessibility", "color", "wcag"],
    visualType: "accessibility",
    relatedSlugs: ["wcag", "dark-mode", "color-token"],
  },
  {
    id: "keyboard-navigation",
    slug: "keyboard-navigation",
    category: "accessibility",
    icon: "⌨️",
    term: "Keyboard Navigation",
    pronunciation: "คีย์-บอร์ด เนฟ-วิ-เก-ชัน",
    level: "intermediate",
    shortDefinition: "ทุก interactive element ต้องใช้งานได้ด้วย keyboard — Tab, Enter, Space, Arrow keys",
    fullDefinition:
      "Keyboard accessibility กำหนดว่า user ต้องสามารถ navigate และ interact กับทุก function โดยไม่ต้องใช้ mouse Tab order ต้องสมเหตุสมผล focus ต้องเห็นชัด modal ต้องมี focus trap",
    whyItMatters:
      "Keyboard navigation ไม่ใช่แค่สำหรับ screen reader user — คนที่มีปัญหา motor ไม่สามารถใช้ mouse ได้ Power user ก็ prefer keyboard สำหรับ speed",
    examples: [
      "Tab ไปที่ button แล้วกด Enter เพื่อ click",
      "Arrow keys ใน dropdown เพื่อเลือก option",
      "ESC ปิด modal",
    ],
    prompts: [
      "ทดสอบ keyboard navigation ของหน้านี้: tab order ถูกต้องไหม? ทุก interactive element มี focus state ไหม? modal มี focus trap ไหม?",
    ],
    tags: ["keyboard", "accessibility", "navigation", "focus"],
    visualType: "accessibility",
    relatedSlugs: ["wcag", "focus-trap", "screen-reader"],
  },
  {
    id: "screen-reader",
    slug: "screen-reader",
    category: "accessibility",
    icon: "🔊",
    term: "Screen Reader",
    pronunciation: "สกรีน รีด-เดอร์",
    level: "advanced",
    shortDefinition: "Software ที่อ่าน content บนหน้าจอออกเสียงให้คนตาพิการ — NVDA, VoiceOver, JAWS",
    fullDefinition:
      "Screen reader ใช้ HTML semantics และ ARIA attributes เพื่อ understand และอ่าน content ต้องใช้ heading hierarchy ที่ถูกต้อง, aria-label สำหรับ icon buttons, role สำหรับ custom components",
    whyItMatters:
      "เว็บที่ไม่ใช้ semantic HTML จะอ่านเป็น 'div div div' ไม่มีความหมาย การทดสอบด้วย VoiceOver/NVDA เปิดเผยปัญหาที่ visual check ไม่เจอ",
    examples: [
      "<button aria-label='Close modal'>✕</button> แทน <div onclick>✕</div>",
      "aria-live='polite' บน toast container เพื่อ announce ได้เมื่อ update",
    ],
    prompts: [
      "Test หน้านี้ด้วย VoiceOver (Mac) หรือ NVDA (Windows): อ่าน heading structure ชัดไหม? icon buttons มี label ไหม? dynamic content มี aria-live ไหม?",
    ],
    tags: ["screen-reader", "accessibility", "aria", "semantic-html"],
    visualType: "accessibility",
    relatedSlugs: ["wcag", "keyboard-navigation", "alt-text"],
  },
  {
    id: "alt-text",
    slug: "alt-text",
    category: "accessibility",
    icon: "🖼️",
    term: "Alt Text",
    pronunciation: "อัลต์ เท็กซ์ต์",
    level: "basic",
    shortDefinition: "ข้อความอธิบาย image สำหรับ screen reader — decorative image ใช้ alt='' แทนการเว้นไว้",
    fullDefinition:
      "alt attribute บน <img> tag อธิบาย content ของ image ให้ screen reader และ search engine Alt text ที่ดี describe สิ่งที่ image conveying ใน context ของ page ไม่ใช่แค่บรรยาย pixel",
    whyItMatters:
      "Alt text ว่างหรือ alt='image' ทำให้ screen reader อ่านชื่อไฟล์แทน Image ที่เป็น content ต้องมี descriptive alt text ทุกอัน",
    examples: [
      "alt='User growth chart showing 50% increase in Q2 2025'",
      "alt='' สำหรับ decorative divider image",
    ],
    prompts: [
      "ตรวจ alt text ของทุก image ในหน้านี้: decorative image ใช้ alt='' ถูกไหม? content image มี descriptive alt text ไหม?",
    ],
    tags: ["alt-text", "accessibility", "image", "seo"],
    visualType: "accessibility",
    relatedSlugs: ["screen-reader", "wcag", "semantic-html"],
  },

  // ─── CONVERSION UX ────────────────────────────────────────────────
  {
    id: "conversion-rate",
    slug: "conversion-rate",
    category: "conversion",
    icon: "📈",
    term: "Conversion Rate",
    pronunciation: "คอน-เวอร์-ชัน เรท",
    level: "basic",
    shortDefinition: "% ของ visitor ที่ทำ desired action — signup, purchase, subscribe, download",
    fullDefinition:
      "Conversion rate = (Conversions / Total visitors) × 100 ควร define conversion ให้ชัดก่อน: macro conversion (purchase/signup) หรือ micro conversion (newsletter, trial, click CTA)",
    whyItMatters:
      "เพิ่ม conversion rate 1% บน traffic เยอะอาจ worth มากกว่าเพิ่ม traffic 2x Design decision ทุกอย่างควรมองผ่านเลนส์ของ impact ต่อ conversion",
    examples: [
      "Landing page conversion rate: 3.2% (industry average 2-5%)",
      "Checkout completion rate: 65% (target 75%)",
    ],
    prompts: [
      "Review landing page นี้จากมุม conversion: headline clarity, CTA hierarchy, trust signals, social proof, objection handling, และ friction ก่อน signup",
    ],
    tags: ["conversion", "metric", "business", "ux"],
    visualType: "metrics",
    relatedSlugs: ["cta", "bounce-rate", "trust-signals"],
  },
  {
    id: "bounce-rate",
    slug: "bounce-rate",
    category: "conversion",
    icon: "↩️",
    term: "Bounce Rate",
    pronunciation: "เบาน์ส เรท",
    level: "basic",
    shortDefinition: "% ของ user ที่เข้าหน้าแล้วออกไปโดยไม่ interact — สูงอาจหมายถึง intent mismatch หรือ UX แย่",
    fullDefinition:
      "Bounce rate ไม่ได้แย่เสมอ — single-page content เช่น blog อาจมี bounce rate 70-90% แต่ยังถือว่าสำเร็จถ้า user อ่านจบ ควร interpret ร่วมกับ time on page และ scroll depth",
    whyItMatters:
      "Bounce rate สูงบน landing page มักหมายถึง headline ไม่ตรง intent, load เร็วเกินไป หรือ UX ทำให้ confused ต้อง diagnose ก่อน fix",
    examples: [
      "Landing page bounce rate 78% → investigate hero message alignment กับ ad copy",
      "Dashboard bounce rate 20% → users engaged มาก",
    ],
    prompts: [
      "Diagnose สาเหตุ bounce rate สูงบนหน้านี้โดยดู: headline–ad copy alignment, page load time, mobile experience, และ above-the-fold clarity",
    ],
    tags: ["bounce-rate", "conversion", "analytics", "ux"],
    visualType: "metrics",
    relatedSlugs: ["conversion-rate", "hero-section", "cta"],
  },
  {
    id: "trust-signals",
    slug: "trust-signals",
    category: "conversion",
    icon: "🛡️",
    term: "Trust Signals",
    pronunciation: "ทรัสต์ ซิก-นัลส์",
    level: "intermediate",
    shortDefinition: "Element ที่ build credibility เช่น testimonials, logos, certifications, review stars, guarantee",
    fullDefinition:
      "Trust signals ลด anxiety และ risk perception ของ user ก่อน conversion แบ่งเป็น: social proof (testimonials, user count, logos), authority (media mentions, awards), security (SSL badge, payment icons)",
    whyItMatters:
      "User ไม่ซื้อ/ไม่ signup เพราะไม่แน่ใจว่า product นี้ real หรือ worth it Trust signals ตอบ objection เหล่านี้โดยปริยาย",
    examples: [
      "'Join 50,000+ teams' social proof counter",
      "Customer logos ของ well-known companies",
      "'Money-back guarantee' badge",
    ],
    prompts: [
      "เพิ่ม trust signals บน landing page นี้: ระบุ objection ที่ user น่าจะมี แล้ว map trust signal ที่เหมาะกับแต่ละ objection",
    ],
    tags: ["trust", "social-proof", "conversion", "credibility"],
    visualType: "cta",
    relatedSlugs: ["conversion-rate", "cta-hierarchy", "hero-section"],
  },
  {
    id: "cta-hierarchy",
    slug: "cta-hierarchy",
    category: "conversion",
    icon: "🏆",
    term: "CTA Hierarchy",
    pronunciation: "ซี-ที-เอ ไฮ-เออ-ราร์-คี",
    level: "intermediate",
    shortDefinition: "ลำดับความสำคัญของ action บนหน้า — primary (1 ปุ่มเท่านั้น), secondary, tertiary",
    fullDefinition:
      "CTA hierarchy กำหนดว่า action ใดสำคัญที่สุดในหน้านั้น Primary CTA ต้องโดดเด่นที่สุด Secondary CTA ต้องไม่แย่ง attention กฎ: มี primary CTA เดียวต่อ viewport",
    whyItMatters:
      "หน้าที่มี CTA เยอะเท่ากันหมดทำให้ user เลือกไม่ถูกและ conversion ต่ำ Hierarchy ที่ชัดทำให้ user รู้ทันทีว่า next action คืออะไร",
    examples: [
      "Primary: 'Start Free Trial' (filled, purple), Secondary: 'See Demo' (outlined), Tertiary: 'Learn more' (text link)",
    ],
    prompts: [
      "Review CTA hierarchy ของหน้านี้: มี primary CTA เดียวต่อ section ไหม? secondary ไม่แย่ง attention primary ไหม? label ทุกตัว action-oriented ไหม?",
    ],
    tags: ["cta", "conversion", "hierarchy", "button"],
    visualType: "cta",
    relatedSlugs: ["cta", "conversion-rate", "visual-hierarchy"],
  },

  // ─── DESIGN SYSTEM ────────────────────────────────────────────────
  {
    id: "color-token",
    slug: "color-token",
    category: "design-system",
    icon: "🎨",
    term: "Color Token",
    pronunciation: "คัล-เลอร์ โท-เค็น",
    level: "advanced",
    shortDefinition: "ชื่อ semantic ของสีที่บอก role ไม่ใช่ hex value — color-text-primary แทน #e6edf3",
    fullDefinition:
      "Color tokens แบ่งเป็น primitive tokens (raw colors: purple-500 = #8b5cf6) และ semantic tokens (color-bg-card = purple-500) Semantic layer ทำให้ rebrand ง่าย และ dark/light mode swap สะดวก",
    whyItMatters:
      "ถ้าใช้ hex value ตรง rebrand หมายความว่า find-replace ทั้ง codebase Color token ทำให้ change 1 value แล้ว update ทุกที่ที่ใช้ token นั้น",
    examples: [
      "--color-brand-primary → used by buttons, links, highlights",
      "--color-text-muted → used by timestamps, captions, metadata",
    ],
    prompts: [
      "สร้าง color token structure แบบ 2 ชั้น: primitive (raw palette) และ semantic (role-based) tokens สำหรับ dark theme ของ project นี้",
    ],
    tags: ["tokens", "color", "design-system", "theming"],
    visualType: "token",
    relatedSlugs: ["design-tokens", "css-variables", "dark-mode"],
  },
  {
    id: "typography-scale",
    slug: "typography-scale",
    category: "design-system",
    icon: "Aa",
    term: "Typography Scale",
    pronunciation: "ไท-พอก-กรา-ฟี สเกล",
    level: "intermediate",
    shortDefinition: "ชุด font sizes ที่มีความสัมพันธ์กันเป็นระบบ เช่น 12/14/16/20/24/32/48px",
    fullDefinition:
      "Typography scale กำหนด font sizes, line heights, font weights ที่ใช้ใน product เพื่อ visual harmony สร้างได้จาก modular scale (ratio เช่น 1.25) หรือ manual steps",
    whyItMatters:
      "ไม่มี scale = designer/developer ใช้ font size random ทำให้ inconsistent Typography scale บังคับให้เลือกจาก defined set เท่านั้น",
    examples: [
      "xs: 12px, sm: 14px, base: 16px, lg: 18px, xl: 20px, 2xl: 24px, 3xl: 30px, 4xl: 36px",
    ],
    prompts: [
      "Audit typography ของ codebase นี้: มี font size ที่ไม่อยู่ใน scale ไหม? สร้าง typography scale ที่ consistent แล้ว refactor ทั้งหมด",
    ],
    tags: ["typography", "scale", "design-system", "fonts"],
    visualType: "design-system",
    relatedSlugs: ["design-tokens", "color-token", "design-system"],
  },
  {
    id: "component-library",
    slug: "component-library",
    category: "design-system",
    icon: "📚",
    term: "Component Library",
    pronunciation: "คอม-โพ-เน็นต์ ไลบ์-รา-รี",
    level: "advanced",
    shortDefinition: "ชุด reusable UI components ที่ document ด้วย Storybook หรือ similar tool",
    fullDefinition:
      "Component library คือ implementation layer ของ design system มี components ที่ reusable ข้าม project, documented, tested, และ versioned อาจ publish เป็น npm package",
    whyItMatters:
      "ไม่มี component library = developer สร้าง button ใหม่ทุก project และทุกคนทำต่างกัน Component library ทำให้ velocity เร็วขึ้นและ consistency สูงขึ้น",
    examples: [
      "shadcn/ui, Radix UI, MUI, Ant Design",
      "Internal company component library ที่ built บน Radix + Tailwind",
    ],
    prompts: [
      "Audit component ทั้งหมดใน codebase นี้: component ใดที่ duplicate หรือ inconsistent? สร้าง roadmap consolidation ที่ start จาก highest-use components",
    ],
    tags: ["components", "library", "storybook", "design-system"],
    visualType: "design-system",
    relatedSlugs: ["design-system", "design-tokens", "design-handoff"],
  },
];

export const TERMS: UXTerm[] = [...BASE_TERMS, ...EXTRA_TERMS];
