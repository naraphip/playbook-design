import type { UXTerm } from "@/types/playbook";

export const DESIGN_SYSTEM_TERMS: UXTerm[] = [
  {
    id: "design-tokens",
    slug: "design-tokens",
    term: "Design Tokens",
    category: "design-system",
    icon: "🎛️",
    level: "intermediate",
    shortDescription: "ตัวแปรกลางของค่า design ทั้งหมด (สี ระยะ ฟอนต์ เงา) — แหล่งความจริงเดียวที่ design และ code ใช้ร่วมกัน",
    fullDefinition:
      "Design token คือการตั้งชื่อให้ค่า design แทนการ hardcode: #F04E23 กลายเป็น --color-primary, 16px กลายเป็น --space-4 — แบ่งเป็น 2 ชั้นสำคัญ: primitive tokens (ค่าดิบ: orange-500) และ semantic tokens (ความหมาย: color-action-primary ที่ชี้ไป orange-500) — UI ควรเรียกใช้ semantic เท่านั้น เพื่อให้เปลี่ยน theme/rebrand ได้โดยแก้ที่ mapping ชั้นเดียว",
    whyItMatters:
      "ไม่มี token = สีหลัก 7 เฉดที่ต่างกันเล็กน้อยกระจายทั่ว codebase, dark mode ที่ต้องไล่แก้พันจุด, rebrand ที่กลายเป็นโปรเจกต์ 3 เดือน — token เปลี่ยนงานเหล่านี้เป็นการแก้ไฟล์เดียว และทำให้ design review ตรวจ 'ใช้ token ถูกไหม' แทนเถียงเรื่องค่าสีทีละจุด",
    whenToUse: [
      "เริ่มตั้งแต่โปรเจกต์ยังเล็ก — เพิ่ม token ทีหลังแพงกว่ามาก",
      "ก่อนทำ dark mode / multi-brand / white-label ใดๆ",
      "ตอน audit หน้าเก่า: แทนที่ hardcoded value ด้วย token ทีละหมวด",
    ],
    whenNotToUse: [
      "อย่าสร้าง token ให้ค่าที่ใช้จุดเดียวและไม่มีวันแชร์ (one-off illustration)",
      "อย่าทำระบบ 3 ชั้นซับซ้อน (primitive→semantic→component) ตั้งแต่ทีมมี 2 คน — เริ่ม 2 ชั้นพอ",
    ],
    howToApply: [
      "เริ่มจาก inventory: ดึงทุกค่าสี/ระยะ/ฟอนต์ที่ใช้จริงในโค้ดออกมาดูความซ้ำซ้อน",
      "ยุบเหลือ scale ที่ตั้งใจ: สี 1 ชุด, spacing 4/8px scale, type scale 6-8 ขั้น",
      "ตั้งชื่อ semantic ตามหน้าที่ไม่ใช่หน้าตา: color-text-danger ไม่ใช่ color-red",
      "ประกาศเป็น CSS custom properties / Tailwind theme / Figma variables ให้ตรงกันทุกเครื่องมือ",
      "ตั้ง lint/review rule: ห้าม hardcode ค่าที่มี token แล้ว",
    ],
    checklist: [
      "มีชั้น semantic ที่ UI เรียกใช้ ไม่เรียก primitive ตรง",
      "ชื่อ token บอกหน้าที่ (action/surface/text) ไม่ใช่สี (blue/red)",
      "Figma variables กับ code tokens ชื่อตรงกัน 1:1",
      "ทุกคู่สี text/surface ใน token ผ่าน contrast AA แล้ว",
      "มีกติกาว่าใครเพิ่ม token ได้และต้อง review อย่างไร",
    ],
    deliverables: ["Token sheet (ชื่อ/ค่า/ใช้เมื่อไหร่) sync ระหว่าง Figma กับโค้ด", "Lint rule + migration list ของค่า hardcode ที่เหลือ"],
    goodExample:
      "ทีมประกาศ --color-action-primary ชี้ไป orange-500 — ตอน rebrand เปลี่ยน mapping จุดเดียว ทั้งแอปเปลี่ยนตาม รวมถึง dark mode ที่ map ไปอีกชุดโดย component ไม่ต้องแก้สักบรรทัด",
    badExample:
      "Codebase มี #F04E23, #F04F24, #EF4E23 (สามค่าที่ 'ตั้งใจ' เป็นสีเดียวกัน) กระจาย 200 จุด — rebrand ต้อง find-replace ทีละค่าแล้วก็ยังหลุด เพราะบางจุดเขียนเป็น rgb()",
    commonMistakes: [
      "ตั้งชื่อตามหน้าตา (--blue) แล้ววันที่ rebrand เป็นสีเขียว ชื่อก็โกหกทั้งระบบ",
      "มี token แต่ทีมยัง hardcode เพราะไม่มี enforcement",
      "Token ใน Figma กับโค้ดชื่อไม่ตรงกัน ทำให้ handoff ต้องแปลมือ",
      "สร้าง token 400 ตัวที่ไม่มีใครรู้ว่าต่างกันยังไง — scale ที่ไม่มีกติกาคือ chaos ที่มีชื่อเรียก",
    ],
    relatedSlugs: ["color-system", "spacing-system", "typography-system", "dark-mode", "design-system-governance"],
    tags: ["tokens", "variables", "theming"],
    prompts: [
      `You are a design systems engineer. I will paste CSS/Tailwind config or a list of hardcoded values from our codebase.

Tasks:
1. Inventory: group all color/spacing/typography/radius/shadow values; flag near-duplicates (e.g., #F04E23 vs #F04F24)
2. Propose the consolidated scales: color ramps, 4/8px spacing scale, type scale — minimal set covering ≥95% of usage
3. Design the token architecture: primitive layer + semantic layer (color-action-primary, color-surface-raised, text-danger...) with naming convention
4. Output as CSS custom properties + matching Figma variable names
5. List the migration order (which value groups to replace first for most impact) and a lint rule to prevent regression.

Constraint: UI code must only reference semantic tokens. Verify every text/surface pair passes WCAG AA 4.5:1.`,
    ],
    visualDemo: "handoff-spec",
    demoData: {
      title: "Token Architecture",
      specs: [
        { label: "Primitive", value: "orange-500: #F04E23" },
        { label: "Semantic", value: "color-action-primary → orange-500" },
        { label: "Dark mapping", value: "color-action-primary → orange-400" },
        { label: "Component", value: "Button ใช้ semantic เท่านั้น" },
        { label: "Rule", value: "ห้าม hardcode ค่าที่มี token (lint)" },
      ],
    },
  },
  {
    id: "color-system",
    slug: "color-system",
    term: "Color System",
    category: "design-system",
    icon: "🎨",
    level: "intermediate",
    shortDescription: "ชุดสีที่มีบทบาทชัดเจน: brand, semantic (success/warning/danger), neutral scale — ทุกคู่ผ่าน contrast",
    fullDefinition:
      "Color system ที่ใช้งานได้ประกอบด้วย: brand color 1-2 สี (ใช้กับ action หลักอย่างจงใจ), semantic colors (เขียว=สำเร็จ เหลือง=เตือน แดง=อันตราย — ห้ามสลับบทบาท), neutral scale 8-10 ขั้นสำหรับ text/border/surface และกติกาการใช้: สีไหนใช้กับอะไร ห้ามใช้กับอะไร — ทุกคู่ text/background ต้องผ่าน WCAG AA และห้ามใช้สีเป็นสัญญาณเดียว",
    whyItMatters:
      "ไม่มีระบบสี = ปุ่ม primary สีหนึ่ง, ลิงก์อีกสี, focus อีกสี โดยไม่มีใครตอบได้ว่าทำไม — user เรียนรู้ภาษาสีของแอปไม่ได้ และเมื่อสีแดงถูกใช้ทั้ง 'ลบ' และ 'โปรโมชัน' ความหมายของคำเตือนจะจางหายซึ่งอันตรายจริงในจุด destructive",
    whenToUse: [
      "ตั้งระบบก่อนหน้า UI ที่สองจะเกิด — สีคือ token แรกที่ควรล็อก",
      "ตอน audit: นับสีที่ใช้จริงในโค้ด เกิน 20 ค่าเมื่อไหร่แปลว่าไม่มีระบบแล้ว",
      "ก่อนทำ data visualization — ชุดสี chart ต้องแยกจาก UI และ colorblind-safe",
    ],
    whenNotToUse: [
      "งาน marketing/campaign ชั่วคราวที่จงใจหลุด brand — แยก scope ให้ชัดว่าไม่ใช่ระบบหลัก",
      "อย่า force semantic color เข้ากับ brand ที่ชนกัน (brand สีแดง ≠ ทุกปุ่มแปลว่าอันตราย) — ปรับ semantic ให้ห่างจาก brand พอ",
    ],
    howToApply: [
      "กำหนดบทบาทก่อนเลือกเฉด: action / surface / text / border / semantic states",
      "สร้าง neutral scale จากสีเดียว ไล่ 8-10 ขั้น ใช้กับ text 3 ระดับ (primary/secondary/muted) + border + surface",
      "Semantic: เขียว/เหลือง/แดง พร้อมเฉดอ่อน (พื้นหลัง badge) และเข้ม (ตัวอักษร) ที่ผ่าน contrast",
      "ตรวจทุกคู่ที่จะใช้จริงด้วย contrast checker แล้ว encode เป็น token คู่ (text-on-primary)",
      "เขียนกติกา: primary 1 จุดต่อ view, แดงสงวนให้ destructive/error เท่านั้น, ห้ามใช้สีเดี่ยวบอก state",
    ],
    checklist: [
      "ทุกสีมีบทบาทระบุได้ ไม่มีสี 'ลอย' ที่ไม่รู้ที่มา",
      "Text ทุกระดับผ่าน AA บน surface ที่มันถูกใช้",
      "สีแดงสงวนให้ error/destructive — ไม่ใช้กับโปรโมชัน",
      "State ทุกชนิดมี text/icon ประกอบ ไม่ใช้สีเดี่ยว",
      "Chart palette แยกจาก UI palette และ colorblind-safe",
      "Dark mode มี mapping ของทุกบทบาท ไม่ใช่ invert",
    ],
    deliverables: ["Color spec: บทบาท × เฉด × contrast result × ตัวอย่างใช้", "Token mapping (light/dark) พร้อมกติกาการใช้"],
    goodExample:
      "ระบบที่ orange เป็น action เดียว, indigo เป็น selection/focus, แดงสงวนให้ destructive — user เห็นปุ่มส้มที่ไหนรู้ว่านั่นคือ action หลักของหน้า เห็นแดงรู้ว่าต้องระวัง ภาษาสีอ่านออกโดยไม่ต้องสอน",
    badExample:
      "แอปที่ปุ่มสมัครสีแดง โปรโมชันสีแดง และปุ่มลบบัญชีก็สีแดง — วันที่ user จะลบบัญชี สีแดงไม่ได้เตือนอะไรเขาแล้วเพราะมันแปลว่า 'เด่น' มาตลอด ไม่ใช่ 'อันตราย'",
    commonMistakes: [
      "เลือกสีจากความสวยก่อน แล้วค่อยหาที่ใช้ — ระบบสีเริ่มที่บทบาท",
      "Neutral หลายโทนปนกัน (เทาอมฟ้า + เทาอมเหลือง) ทำให้ UI ดู 'เพี้ยนๆ' โดยชี้ไม่ถูกว่าตรงไหน",
      "ผ่าน contrast เฉพาะคู่หลัก แต่ text-muted บน surface-soft ที่ใช้ทั่วแอปไม่ผ่าน",
      "Dark mode ใช้วิธี invert จนเงากลายเป็นขอบสว่างและ brand เพี้ยน",
    ],
    relatedSlugs: ["design-tokens", "dark-mode", "accessibility", "typography-system"],
    tags: ["color", "contrast", "semantic-colors"],
    prompts: [
      `You are a design systems specialist. Build/audit a color system.

Input: [brand colors + current colors in use, or "starting fresh with brand #XXXXXX"]

Tasks:
1. Define roles first: action, surface (3 levels), text (3 levels), border (2), semantic (success/warning/danger/info — each with strong + soft variants)
2. Generate the neutral scale (8-10 steps from one hue family) and assign roles
3. Check every real-world pair (each text level × each surface) against WCAG AA — show the ratio, fix failures
4. Write usage rules: where brand color may/may not appear, red reserved for destructive, no color-only signals
5. Produce the dark-mode mapping per role (not inversion: surfaces lift, text stays high contrast)

Output: token table (name / light / dark / contrast result / usage rule).`,
    ],
    visualDemo: "handoff-spec",
  },
  {
    id: "typography-system",
    slug: "typography-system",
    term: "Typography System",
    category: "design-system",
    icon: "🔤",
    level: "intermediate",
    shortDescription: "Type scale + line height + weight ที่จำกัดเป็นชุด เพื่อ hierarchy ที่อ่านออกและ UI ที่ไม่ต้องเดาขนาด",
    fullDefinition:
      "Typography system คือชุดขั้นขนาดตัวอักษร (type scale) ที่ตั้งใจ — มัก 6-8 ขั้นจาก ratio คงที่ (เช่น 12/14/16/18/24/32/48) — ผูกกับ line-height, weight และหน้าที่: display/heading/body/caption/mono โดยมีกติกา: body ≥16px, line-height ของ body ~1.5, ความยาวบรรทัด 45-75 ตัวอักษร และ hierarchy สร้างจาก size+weight ไม่เกิน 2 ตัวแปรพร้อมกัน",
    whyItMatters:
      "ฟอนต์ 13 ขนาดในแอปเดียวคือสัญญาณว่าทุกหน้าตัดสินใจเอง — ผลคือ hierarchy ที่อ่านไม่ออก (อะไรสำคัญกว่าอะไร), หน้าที่ดู 'ไม่เนี้ยบ' โดยบอกไม่ถูกว่าทำไม และ dev ที่ต้องถามทุกครั้งว่า 'อันนี้กี่ px' — type scale ตัดการตัดสินใจซ้ำๆ เหล่านี้ทิ้งทั้งหมด",
    whenToUse: [
      "ตั้งแต่เริ่มโปรเจกต์ พร้อมๆ กับ color token",
      "ตอน audit: นับ font-size ที่ใช้จริง — เกิน 10 ค่า = ต้องยุบ",
      "เมื่อ content หลายภาษา (ไทย/อังกฤษ) — ไทยต้องการ line-height มากกว่า ตรวจทั้งคู่",
    ],
    whenNotToUse: [
      "งาน editorial/campaign ที่ typography คือ art direction — หลุด scale ได้แต่ต้องรู้ว่ากำลังหลุด",
      "อย่าบังคับ scale เดียวข้าม device โดยไม่ปรับ — display 48px บน desktop อาจต้องเป็น 32px บน mobile",
    ],
    howToApply: [
      "เลือก base 16px แล้วสร้าง scale จาก ratio (1.25 เหมาะ UI ทั่วไป) ปัดเป็นเลขลงตัว",
      "ผูกแต่ละขั้นกับหน้าที่และ line-height: body 16/1.5, heading 24/1.3, display 32-48/1.1-1.2",
      "จำกัด weight: regular + semibold + bold พอ (เพิ่ม weight = เพิ่มทั้งไฟล์ฟอนต์และความสับสน)",
      "ตั้งกติกา hierarchy: ต่างระดับ = ต่างกัน ≥1 ขั้นใน scale, ห้ามใช้ size นอก scale",
      "ทดสอบกับ content ไทยจริง: สระบน/ล่างต้องไม่โดนตัด (line-height ไทย ≥1.6 สำหรับ body)",
    ],
    checklist: [
      "Type scale ≤8 ขั้น และทุก text ในแอปอยู่บน scale",
      "Body ≥16px / line-height ≥1.5 (ไทย ≥1.6)",
      "ความยาวบรรทัด paragraph อยู่ใน 45-75 ตัวอักษร",
      "Weight ที่โหลด ≤3 น้ำหนัก",
      "Heading hierarchy ใช้ semantic tag (h1-h3) ตรงกับ visual hierarchy",
      "ตรวจ render จริงกับภาษาไทย (สระไม่ถูกตัด, ตัวเลขไทย/อารบิกจัด baseline ตรง)",
    ],
    deliverables: ["Type scale spec: ขั้น × หน้าที่ × line-height × weight", "Token (font-size-*, leading-*) sync Figma/โค้ด"],
    goodExample:
      "Scale 12/14/16/20/24/32: caption=12, body-sm=14, body=16/1.6, h3=20, h2=24, h1=32 — designer ไม่ต้องเลือกขนาดอีกเลย เลือกแค่ 'นี่คือ body หรือ h3' แล้วทุกหน้าก็เนี้ยบเท่ากันเอง",
    badExample:
      "แอปที่มี 13px, 13.5px, 14px, 15px ปนกันเพราะแต่ละหน้า 'ปรับนิดเดียวให้พอดี' — รวมกันแล้วไม่มีอะไรพอดีสักหน้า และ heading ขนาดเท่า body แต่หนากว่า ทำให้ scan ไม่ออกว่าอะไรคือหัวข้อ",
    commonMistakes: [
      "เพิ่มขนาดพิเศษ 'แค่จุดเดียว' จน scale มี 14 ขั้นใน 6 เดือน",
      "Line-height เดียวทุกขนาด (display 48px ที่ line-height 1.5 จะห่างโบ๋)",
      "ลืม content ไทย — ฟอนต์ละติน fallback ทำสระลอย/บรรทัดชนกัน",
      "สร้าง hierarchy ด้วยสีอย่างเดียวแทน size/weight ทำให้คน colorblind อ่าน hierarchy ไม่ออก",
    ],
    relatedSlugs: ["design-tokens", "spacing-system", "content-design", "responsive-rules"],
    tags: ["typography", "type-scale", "readability"],
    prompts: [
      `You are a typography systems designer. Build a type scale for this product.

Context: [product type, languages (e.g., Thai + English), platforms]
Current state: [paste font sizes in use, or "fresh start"]

Tasks:
1. Propose a scale (≤8 steps, base 16px, consistent ratio, rounded values) with role per step: caption/body-sm/body/h3/h2/h1/display
2. Pair each step with line-height and allowed weights (max 3 weights total). For Thai body text use line-height ≥1.6 and flag glyph-clipping risks
3. Define hierarchy rules: adjacent levels must differ by ≥1 scale step; max 2 variables (size+weight) per distinction
4. Map to tokens (font-size-*, leading-*, font-*) for CSS + Figma
5. List every current size that falls off-scale and what to migrate it to

Output: spec table + token block + migration list.`,
    ],
    visualDemo: "handoff-spec",
  },
  {
    id: "spacing-system",
    slug: "spacing-system",
    term: "Spacing System",
    category: "design-system",
    icon: "📏",
    level: "basic",
    shortDescription: "Scale ระยะห่างฐาน 4/8px ที่ใช้ทั้ง padding, gap, margin — จังหวะของ UI ที่ทำให้ทุกหน้าดูเป็นระบบเดียว",
    fullDefinition:
      "Spacing system คือชุดระยะที่อนุญาต (เช่น 4, 8, 12, 16, 24, 32, 48, 64) ใช้กับทุกช่องว่างใน UI — กติกาหลัก: ระยะสื่อความสัมพันธ์ (ของที่เกี่ยวกันอยู่ใกล้ ของคนละเรื่องอยู่ห่าง — proximity), ภายใน component แน่นกว่าระหว่าง component, และ section ห่างกันมากกว่า card ภายใน section — ความ consistent ของจังหวะนี้คือสิ่งที่ทำให้ UI ดู 'เนี้ยบ' โดยที่ user บอกไม่ถูกว่าเพราะอะไร",
    whyItMatters:
      "Spacing มั่ว = สายตาจัดกลุ่มผิด: label ที่ห่างจาก field ของตัวเองเท่ากับ field ถัดไป ทำให้ user อ่านฟอร์มผิดคู่ — และในระดับทีม การไม่มี scale แปลว่าทุก margin คือการตัดสินใจใหม่ + ทุก review คือการเถียงเรื่อง 'อีก 2px'",
    whenToUse: [
      "ทุก component และ layout ใหม่ — บังคับใช้ค่าจาก scale เท่านั้น",
      "ตอน review: ถ้าเห็นค่าแปลก (13px, 18px, 22px) ใน inspect แปลว่าหลุดระบบ",
      "ตอนกำหนด density: compact สำหรับ data-heavy, comfortable สำหรับ marketing — ทั้งคู่ดึงจาก scale เดียว",
    ],
    whenNotToUse: [
      "Optical adjustment เฉพาะจุด (icon ที่ดูไม่กึ่งกลางทั้งที่เลขกึ่งกลาง) — แก้ด้วยตาได้ แต่ comment ไว้ว่าทำไม",
      "อย่าใช้ scale เป็นข้ออ้างไม่คิดเรื่อง proximity — ใช้ค่าใน scale แต่จัดกลุ่มผิดก็ยังผิดอยู่",
    ],
    howToApply: [
      "เลือกฐาน 4px แล้วประกาศ scale: 4/8/12/16/24/32/48/64 (เพิ่ม 96/128 สำหรับ section ใหญ่)",
      "ตั้งกติกาความสัมพันธ์: label↔field = 4-8, ระหว่าง field = 16-24, ระหว่าง section = 48-64",
      "กติกา nesting: padding ภายใน ≤ gap ภายนอกเสมอ (ข้างในแน่นกว่าข้างนอก)",
      "ใช้ token (--space-1..8) แทนเลขตรง ทั้ง Figma auto-layout และโค้ด",
      "Review ด้วยการ inspect จริง ไม่ใช่ดูด้วยตาอย่างเดียว — ค่านอก scale คือ bug",
    ],
    checklist: [
      "ทุกระยะใน UI มาจาก scale (ตรวจด้วย inspect ไม่ใช่สายตา)",
      "ของที่เกี่ยวข้องกันใกล้กว่าของที่ไม่เกี่ยว (proximity ถูก)",
      "Label อยู่ใกล้ field ของตัวเองชัดเจนกว่า field อื่น",
      "Padding ภายใน component ≤ ระยะระหว่าง component",
      "Density แต่ละโหมด (compact/comfortable) มี mapping จาก scale ชัดเจน",
    ],
    deliverables: ["Spacing scale + กติกาความสัมพันธ์ใน design system doc", "Audit list จุดที่ใช้ค่านอก scale พร้อมค่าที่ควรเป็น"],
    goodExample:
      "ฟอร์มที่ label ห่าง field 4px แต่ห่าง field ก่อนหน้า 24px — สายตาจับคู่ถูกทันทีโดยไม่ต้องอ่าน และทั้งแอปใช้จังหวะเดียวกันจน UI ใหม่ดู 'เป็นของที่เดียวกัน' อัตโนมัติ",
    badExample:
      "Card ที่ padding บน 12px ล่าง 18px ซ้าย 15px — และ label ที่ลอยอยู่กึ่งกลางระหว่างสอง field พอดี user กรอกฟอร์มผิดคู่ช่องเป็นประจำโดยทีมไม่เคยรู้ว่าต้นเหตุคือ spacing",
    commonMistakes: [
      "ปรับ 'อีกนิดเดียว' หลุด scale แล้วค่าแปลกๆ ก็แพร่ไปทั้งระบบ",
      "ระยะเท่ากันหมดทุกอย่าง (16px ทุกที่) จน proximity ไม่สื่อความสัมพันธ์อะไรเลย",
      "Figma ใช้ auto-layout ค่าหนึ่ง โค้ดใช้อีกค่า เพราะไม่มี token ร่วม",
      "ลืมกำหนด spacing สำหรับ density ต่างๆ ทำให้ตาราง data กับหน้า marketing ใช้ความแน่นเดียวกัน",
    ],
    relatedSlugs: ["design-tokens", "typography-system", "responsive-rules", "component-anatomy"],
    tags: ["spacing", "layout", "proximity", "rhythm"],
    prompts: [
      `You are a UI systems reviewer. Audit spacing in the screens/code I provide.

Tasks:
1. Extract every spacing value in use (padding, margin, gap) — list values and frequency; flag off-scale values (not on a 4px base)
2. Check proximity logic: are related items closer than unrelated ones? Specifically audit label↔field vs field↔field distances in forms
3. Check nesting rule: inner padding ≤ outer gaps — flag violations
4. Propose the canonical scale (4/8/12/16/24/32/48/64) and map every off-scale value to its nearest correct step
5. Define relationship rules for this product: label-field, between-fields, card-internal, between-cards, between-sections

Output: value inventory + violation list (location/current/should-be) + rules block for the design system doc.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Proximity ในฟอร์ม",
      before: { label: "ระยะเท่ากันหมด", points: ["Label ลอยกึ่งกลางระหว่าง 2 fields", "16px ทุกที่ — ไม่สื่อความสัมพันธ์", "Padding card 12/18/15px ตามอารมณ์"] },
      after: { label: "ระยะสื่อความสัมพันธ์", points: ["Label ↔ field: 4px / field ↔ field: 24px", "Section ห่าง 48px, card ภายใน 16px", "ทุกค่ามาจาก scale 4/8/12/16/24/32/48"] },
    },
  },
  {
    id: "component-anatomy",
    slug: "component-anatomy",
    term: "Component Anatomy",
    category: "design-system",
    icon: "🦴",
    level: "intermediate",
    shortDescription: "การชำแหละ component เป็นส่วนประกอบที่มีชื่อ มีกติกาว่าอะไรบังคับ/ทางเลือก/ห้ามแก้ — เป็นภาษากลางตอน spec",
    fullDefinition:
      "Component anatomy คือการระบุส่วนประกอบของ component อย่างเป็นทางการ เช่น Button = container + label + leading icon (optional) + trailing icon (optional); Card = media (optional) + header + body + footer/actions — พร้อมกติกาแต่ละส่วน: บังคับมีไหม, content ยาวสุดเท่าไหร่, อะไรซ่อน/แสดงเมื่อไหร่ — anatomy ที่ชัดทำให้คุยกันด้วยชื่อส่วน ('แก้ trailing icon') แทนการชี้จอ และทำให้รู้ว่า variant ใหม่คือ 'จัดเรียง anatomy เดิม' หรือ 'component ใหม่จริงๆ'",
    whyItMatters:
      "ทีมที่ไม่มี anatomy ตกลงกัน จะมี Card 9 แบบที่จริงๆ คือ component เดียวที่ถูก clone แล้วแก้นิดหน่อย — เพราะไม่มีใครรู้ว่าส่วนไหนยืดหยุ่นได้แค่ไหน dev เลย copy ไปสร้างใหม่ทุกครั้ง และทุก clone คือภาระ maintain ที่งอกถาวร",
    whenToUse: [
      "ตอนสร้าง component ใหม่เข้า design system — ประกาศ anatomy ก่อน implement",
      "ตอน review ว่า design ใหม่ใช้ component เดิมได้ไหม — เทียบกับ anatomy ไม่ใช่หน้าตา",
      "ตอน audit duplicate: component ที่ anatomy เหมือนกันแต่ถูกสร้างซ้ำ = ยุบรวม",
    ],
    whenNotToUse: [
      "Layout เฉพาะหน้า (hero ของ landing หนึ่งหน้า) ไม่ต้องประกาศ anatomy เต็มรูปแบบ — ทำเมื่อจะ reuse",
      "อย่า lock anatomy แน่นจนทุกการเปลี่ยนแปลงต้องผ่าน 3 ที่ประชุม — มี slot ยืดหยุ่นที่ประกาศชัดดีกว่า",
    ],
    howToApply: [
      "วาด diagram ชี้ชื่อทุกส่วนของ component พร้อมป้าย required/optional",
      "กำหนด content rules ต่อส่วน: ความยาวสูงสุด, จำนวนบรรทัด, behavior เมื่อ overflow (truncate/wrap)",
      "กำหนด slot ที่ยืดหยุ่น (children ที่รับอะไรก็ได้) vs ส่วนที่ห้ามแก้ (spacing ภายใน, ลำดับ)",
      "Map anatomy เข้า props ของโค้ดจริง: ทุกส่วน optional = prop ที่มี default",
      "ใช้ชื่อส่วนเดียวกันใน Figma layer, props โค้ด และเอกสาร",
    ],
    checklist: [
      "ทุกส่วนมีชื่อตรงกันใน Figma / โค้ด / เอกสาร",
      "ทุกส่วนติดป้าย required / optional ชัดเจน",
      "มี content rule: ความยาว, บรรทัด, overflow behavior",
      "ระบุชัดว่าส่วนไหนคือ slot ยืดหยุ่น ส่วนไหน lock",
      "Variant ที่มีอยู่ทุกตัวอธิบายได้ด้วย anatomy เดียว (ถ้าไม่ได้ = component ใหม่)",
    ],
    deliverables: ["Anatomy diagram + ตาราง part/required/rules ต่อ component", "Props mapping ระหว่าง anatomy กับโค้ด"],
    goodExample:
      "ProductCard ประกาศ: media (required, ratio 4:3, object-cover) + title (required, max 2 บรรทัด truncate) + price (required) + badge (optional, สูงสุด 2) + action (optional) — designer รู้ทันทีว่าใส่ badge ที่สามไม่ได้ และ dev มี props ตรงกับนี้เป๊ะ",
    badExample:
      "ทีมมี Card, InfoCard, ProductBox, ItemTile ที่ต่างกันแค่มี/ไม่มีรูปกับปุ่ม — เพราะไม่เคยประกาศว่า media กับ action เป็น optional ของ Card เดียว ทุกคนเลยสร้างใหม่ และแก้ radius ทีเดียวต้องไล่ 4 ไฟล์",
    commonMistakes: [
      "สร้าง variant ใหม่ทั้งที่จริงคือ anatomy เดิม + ซ่อนบางส่วน",
      "ไม่กำหนด overflow rule แล้วการ์ดพังเมื่อเจอชื่อสินค้ายาว 3 บรรทัด",
      "ชื่อส่วนใน Figma ('Header') กับ prop ในโค้ด ('title') ไม่ตรงกัน ทำให้สื่อสารพลาด",
      "Lock ทุกอย่างแน่นจนทีม product สร้าง component เถื่อนนอกระบบเพราะของจริงไม่ยืดหยุ่นพอ",
    ],
    relatedSlugs: ["component-states", "component-specification", "design-system-governance", "design-tokens"],
    tags: ["components", "anatomy", "api-design"],
    prompts: [
      `You are a design systems architect. I will paste several similar-looking components (code or screenshots) from our product.

Tasks:
1. Identify whether they are truly different components or one component with anatomy variations — justify per pair
2. For the consolidated component, define the anatomy: named parts, required/optional, order
3. Per part: content rules (max length, line clamp, overflow behavior), and whether it's a flexible slot or locked
4. Map anatomy to a props API (TypeScript interface) with sensible defaults
5. List the migration: which existing instances map to which prop combinations

Output: anatomy table + TS interface + consolidation plan. Rule: a new variant is justified only when anatomy (not styling) differs.`,
    ],
    visualDemo: "handoff-spec",
    demoData: {
      title: "Anatomy: ProductCard",
      specs: [
        { label: "media", value: "required · ratio 4:3 · object-cover" },
        { label: "title", value: "required · max 2 บรรทัด · truncate" },
        { label: "price", value: "required · tabular-nums" },
        { label: "badge", value: "optional · สูงสุด 2 ชิ้น" },
        { label: "action", value: "optional slot · ปุ่มเดียว" },
      ],
    },
  },
  {
    id: "component-states",
    slug: "component-states",
    term: "Component States",
    category: "design-system",
    icon: "🔀",
    level: "basic",
    shortDescription: "ทุก interactive component มีอย่างน้อย 8 states — design ที่ส่งแค่ default คืองานที่เสร็จ 1/8",
    fullDefinition:
      "States มาตรฐานของ interactive component: default, hover, active/pressed, focus-visible, disabled, loading, error, success — บวก state ของ content: empty, overflow (ข้อความยาว), skeleton — ทุก state ต้องถูกออกแบบและ spec ไว้ก่อนถึงมือ dev เพราะ state ที่ไม่ถูก design จะถูก 'เดา' โดย browser default หรือ dev ซึ่งให้ผลไม่เหมือนกันสองที่",
    whyItMatters:
      "ช่องว่างระหว่าง 'design สวยใน Figma' กับ 'ของจริงดูแปลกๆ' ส่วนใหญ่คือ state ที่ไม่ถูกออกแบบ: focus ที่หายไป (a11y พัง), loading ที่ไม่มี (user กดซ้ำ), disabled ที่ contrast ต่ำจนอ่านไม่ออก, error ที่ dev ประดิษฐ์เอง — และทุก state ที่ขาดคือ ticket ไป-กลับ designer↔dev อย่างน้อยหนึ่งรอบ",
    whenToUse: [
      "ทุก component ใหม่: ทำ state matrix (component × states) ให้ครบก่อน handoff",
      "ตอน review PR: เปิด Storybook/หน้าจริงแล้วไล่ trigger ทุก state ไม่ใช่ดูแค่ default",
      "ตอน audit design system เก่า: state ไหนขาด = backlog",
    ],
    whenNotToUse: [
      "Static content (heading, paragraph) ไม่ต้องมี hover/active — อย่าใส่ transition ให้ของที่ไม่ interactive จน user เข้าใจผิดว่ากดได้",
      "บาง state ไม่ apply กับบาง component (toast ไม่มี disabled) — matrix ต้องมีช่อง N/A ที่ตั้งใจ ไม่ใช่ช่องที่ลืม",
    ],
    howToApply: [
      "สร้าง state matrix: แถว = component, คอลัมน์ = 8 states + empty/overflow — ทุกช่องต้องมี design หรือ N/A ที่ตั้งใจ",
      "Focus-visible ต้องชัด (ring 2px contrast ≥3:1) และห้ามลบโดยไม่มี replacement",
      "Loading: ปุ่มเปลี่ยนเป็น spinner + disabled + ขนาดไม่กระโดด (สำรองความกว้าง)",
      "Disabled: ลด opacity แต่ text ยังอ่านได้ + cursor not-allowed + อธิบายได้ว่าทำไม disabled (tooltip)",
      "ทดสอบ overflow ด้วย content จริงที่ยาวสุด: ชื่อยาว, เลขเยอะ, ภาษาไทยผสมอังกฤษ",
    ],
    checklist: [
      "Interactive component ทุกตัวมี design ครบ 8 states หรือ N/A ที่ระบุเหตุผล",
      "Focus-visible เห็นชัดและไม่ถูก reset ทิ้ง",
      "Loading state กันปุ่มกดซ้ำและ layout ไม่กระโดด",
      "Disabled ยังอ่าน label ออก (ไม่ใช่ opacity 0.3 บนพื้นอ่อน)",
      "Error state มาพร้อมข้อความ ไม่ใช่แค่ขอบแดง",
      "ทดสอบกับ content ยาวจริงแล้ว (overflow/truncate ทำงาน)",
    ],
    deliverables: ["State matrix ของทุก interactive component", "Storybook stories ครบทุก state ใช้เป็น acceptance ตอน QA"],
    goodExample:
      "ทีมทำ state matrix ก่อน build: Button 8 states, Input 9 (รวม validating), Select 10 (รวม empty options) — dev เปิด Figma แล้วเจอทุก state เรียงไว้ ไม่ต้องถามสักคำถาม และ QA ใช้ matrix เดียวกันเป็น checklist",
    badExample:
      "Figma มีปุ่มสวยหนึ่งสถานะ ของจริงมี: hover ที่ dev เลือกสีเอง, focus หายเพราะ CSS reset, loading ไม่มี (user กดสั่งซื้อซ้ำ 3 ครั้ง), disabled เทาจาง อ่านไม่ออกว่าเขียนอะไร — สี่ปัญหาจากหนึ่ง component ที่ 'เสร็จแล้ว'",
    commonMistakes: [
      "ส่งมอบแค่ default + hover แล้วถือว่า component เสร็จ",
      "ลบ focus outline เพื่อความสวยโดยไม่มี focus-visible ทดแทน",
      "ลืม loading จน user กดซ้ำใน action ที่มีผลเงิน",
      "ออกแบบกับ content ตัวอย่างสั้นๆ เสมอ เลยไม่เคยเห็น overflow ก่อน production",
    ],
    relatedSlugs: ["component-anatomy", "state-specification", "interaction-design", "edge-cases", "accessibility"],
    tags: ["states", "interactive", "focus", "loading"],
    prompts: [
      `You are a design systems QA. Build a complete state specification for the component I describe/paste.

Cover: default, hover, active/pressed, focus-visible, disabled, loading, error, success, plus content states (empty, overflow/long-content, skeleton if applicable).

For each state:
- Visual spec (tokens only: colors, borders, opacity)
- Behavior (pointer/keyboard interaction, what's blocked)
- Accessibility (aria attributes, announced changes, contrast requirement)
- Mark N/A states explicitly with a reason — no blank cells

Then list test content for overflow: longest realistic Thai/English strings, large numbers.
Output: state matrix table ready for Figma + Storybook story list for QA acceptance.`,
    ],
    visualDemo: "component-state",
    demoData: {
      title: "State Matrix: Button",
      states: [
        { name: "Default", spec: "bg-primary / text-white / token เท่านั้น" },
        { name: "Hover", spec: "darken 8% / transition 150ms" },
        { name: "Focus-visible", spec: "ring 2px accent / ห้ามลบ" },
        { name: "Disabled", spec: "opacity .55 / label ยังอ่านออก / cursor not-allowed" },
        { name: "Loading", spec: "spinner / กว้างเท่าเดิม / aria-busy / กันกดซ้ำ" },
        { name: "Error", spec: "คืน default + แสดงข้อความ ไม่ใช่สีอย่างเดียว" },
      ],
    },
  },
  {
    id: "responsive-rules",
    slug: "responsive-rules",
    term: "Responsive Rules",
    category: "design-system",
    icon: "📐",
    level: "intermediate",
    shortDescription: "กติกาที่ประกาศไว้ว่าทุก layout/component ปรับตัวอย่างไรข้าม breakpoint — ไม่ใช่ปล่อยตัดสินใจหน้างานทีละจุด",
    fullDefinition:
      "Responsive rules คือชุดกติการะดับระบบ: breakpoints มาตรฐาน (เช่น 375/768/1280), พฤติกรรมของ grid (กี่คอลัมน์ที่ไหน), component ตัวไหน 'แปลงร่าง' ที่จุดไหน (table→card, sidebar→drawer, tabs→accordion), อะไรซ่อนได้/ห้ามซ่อนบน mobile — เขียนเป็นกติกากลางครั้งเดียว แทนที่จะให้ทุกหน้าตัดสินใจเองแล้วได้ผลต่างกัน",
    whyItMatters:
      "ไม่มีกติกากลาง = ตารางเดียวกันถูกแก้ปัญหา 3 วิธีใน 3 หน้า (scroll แนวนอน, ตัดคอลัมน์, ย่อ font จนอ่านไม่ออก) — user เรียนรู้พฤติกรรมแอปไม่ได้ และทุก feature ใหม่ต้องเถียงเรื่อง responsive ใหม่ตั้งแต่ศูนย์ ทั้งที่ตัดสินใจครั้งเดียวใช้ได้ทั้งระบบ",
    whenToUse: [
      "ตั้งกติกาตอนวาง design system — ก่อนหน้าแรกจะถูก build",
      "ตอน spec component ใหม่: ระบุพฤติกรรมทุก breakpoint เป็นส่วนหนึ่งของ definition of done",
      "ตอน review: เทียบหน้าใหม่กับกติกากลาง ไม่ใช่ตัดสินเป็นรายหน้า",
    ],
    whenNotToUse: [
      "อย่าบังคับทุก component แปลงร่างแบบเดียวกันถ้า context ต่าง (ตาราง analytics กับตารางเลือกแผนราคา มีทางออกต่างกันได้ — แต่ต้องประกาศทั้งคู่)",
      "หน้า desktop-only ที่มีข้อมูลยืนยันว่าไม่มี mobile usage — ระบุ scope ชัดแทนทำครึ่งๆ",
    ],
    howToApply: [
      "ประกาศ breakpoints มาตรฐาน 3-4 จุดและห้ามเพิ่มเอง (375/768/1280/1536)",
      "กำหนด grid ต่อ breakpoint: mobile 1 คอลัมน์ gap 16, tablet 2, desktop 3-4 gap 24",
      "เขียน transformation map ของ component หลัก: table→card list ที่ <768, sidebar→drawer ที่ <1280, tabs ≥5 อัน→dropdown บน mobile",
      "กติกา content: ห้ามซ่อน action หลัก/ราคา/ข้อมูลตัดสินใจบน mobile — ซ่อนได้เฉพาะ enhancement",
      "ทุก component spec มีช่อง 'พฤติกรรมต่อ breakpoint' บังคับกรอก",
    ],
    checklist: [
      "Breakpoints มาตรฐานประกาศแล้วและไม่มีเลขแปลกใหม่งอกใน code",
      "Component หลักทุกตัวมี transformation rule เขียนไว้",
      "ไม่มีข้อมูล/action สำคัญที่หายไปบน mobile",
      "Grid ทุกหน้าใช้กติกาคอลัมน์เดียวกัน",
      "Touch target และ font ขั้นต่ำกำหนดเป็นกติการะดับระบบ (44px / 16px)",
      "ทุก spec ใหม่กรอกพฤติกรรม 3 breakpoints ครบก่อนถึง dev",
    ],
    deliverables: ["Responsive rulebook: breakpoints + grid + transformation map", "Component spec template ที่มีช่อง per-breakpoint บังคับ"],
    goodExample:
      "ระบบประกาศ: ตารางทุกตัวกลายเป็น card list ใต้ 768px โดยคอลัมน์แรกเป็นหัว card, ค่าอื่นเป็นคู่ label:value — dev เจอตารางใหม่ก็รู้ทันทีว่าทำยังไง ไม่ต้องถาม และ user เห็นพฤติกรรมเดียวกันทั้งแอป",
    badExample:
      "หน้า A ตาราง scroll แนวนอน, หน้า B ตัดเหลือ 2 คอลัมน์ (ลบคอลัมน์ราคาทิ้ง!), หน้า C ย่อ font เหลือ 9px — สามทีมแก้ปัญหาเดียวกันสามแบบ เพราะไม่มีกติกากลางสักบรรทัด",
    commonMistakes: [
      "Design เฉพาะ desktop แล้วเขียนใน ticket ว่า 'mobile: ปรับตามเหมาะสม'",
      "ซ่อน element สำคัญบน mobile เพื่อให้ 'พอดีจอ' (โดยเฉพาะราคา/CTA)",
      "Breakpoint งอกตามอุปกรณ์ที่ใครสักคนทดสอบ (414px, 390px, 360px...) จน media query เป็นป่า",
      "ทดสอบแค่ขอบ breakpoint พอดีเป๊ะ ไม่ทดสอบช่วงกลาง (เช่น 900px) ที่มักพังเงียบๆ",
    ],
    relatedSlugs: ["mobile-first-review", "responsive-behavior", "spacing-system", "component-specification"],
    tags: ["responsive", "breakpoints", "adaptive"],
    prompts: [
      `You are a responsive design systems lead. Create the responsive rulebook for this product.

Input: [main component inventory + current breakpoints if any]

Define:
1. Standard breakpoints (3-4, justify each) — no device-specific additions allowed
2. Grid behavior per breakpoint: columns, gaps, margins
3. Transformation map for each major component: table, sidebar, tabs, filters, modal, multi-column forms — what each becomes at which breakpoint
4. Content rules: what may NEVER be hidden on mobile (primary actions, prices, decision info) vs what may collapse
5. System minimums: touch target 44px, input font 16px, sticky element budget

Then audit the screens I provide against these rules and list violations (screen / element / rule broken / fix).
Output: rulebook + violations table.`,
    ],
    visualDemo: "handoff-spec",
  },
  {
    id: "dark-mode",
    slug: "dark-mode",
    term: "Dark Mode",
    category: "design-system",
    icon: "🌙",
    level: "intermediate",
    shortDescription: "ธีมมืดที่ทำผ่าน semantic token mapping — surface ยกระดับด้วยความสว่าง ไม่ใช่ invert สี",
    fullDefinition:
      "Dark mode ที่ถูกวิธีคือการ map semantic token ชุดเดิมไปค่าชุดใหม่: พื้นหลังมืดแต่ไม่ดำสนิท (#121212-#1a1a1a), ชั้นความลึกสื่อด้วย surface ที่สว่างขึ้นแทนเงา, text ไม่ขาวจัด (ลด contrast ที่แสบตา), สี brand/semantic ปรับ saturation ลงเล็กน้อยเพราะสีสดบนพื้นมืดจะ 'สั่น' — และทุกคู่สีต้องผ่าน AA อีกรอบในโหมดมืด",
    whyItMatters:
      "Dark mode ที่ทำแบบ invert หรือไล่แก้สีรายจุด ให้ผลคือ: เงาที่หายไปทำให้ลำดับชั้นพัง, รูป/illustration พื้นขาวลอยเป็นกล่อง, contrast ที่เคยผ่านกลายเป็นไม่ผ่าน — และที่แพงสุด: ทุก feature ใหม่ต้องทำสองรอบตลอดไปถ้าไม่ได้วางบน token ตั้งแต่แรก",
    whenToUse: [
      "ทำเมื่อ token system พร้อมแล้วเท่านั้น — dark mode คือ payoff ของ token ไม่ใช่โปรเจกต์แยก",
      "Product ที่ใช้กลางคืน/ใช้ยาว (media, dev tools, trading) — คุณค่าจริงสูง",
      "เมื่อ OS-level preference ของ user base ชี้ว่าคนใช้ dark ระบบเยอะ",
    ],
    whenNotToUse: [
      "อย่าทำ dark mode ก่อนมี semantic tokens — จะกลายเป็น hardcode สองชุดที่ drift จากกันตลอดกาล",
      "Content ที่ต้องการความถูกต้องของสี (รูปสินค้า, เครื่องมือเลือกสี) — บังคับ light ในโซนนั้นได้",
    ],
    howToApply: [
      "Map ทุก semantic token เป็นคู่ light/dark — UI code ไม่ต้องรู้ว่าอยู่โหมดไหน",
      "พื้นหลังหลัก #121212-#1a1a1a, ชั้นที่สูงกว่า (card/modal) สว่างขึ้นทีละขั้นแทนการใช้เงา",
      "Text: ขาวลด opacity (87%/60%/38% pattern) แทนขาวบริสุทธิ์",
      "ลด saturation สี brand/semantic ~10-20% ในโหมดมืด แล้วตรวจ AA ใหม่ทุกคู่",
      "เตรียมรูป/illustration เวอร์ชันพื้นโปร่ง หรือใส่กรอบ surface ให้ภาพพื้นขาว",
      "Default ตาม prefers-color-scheme + ให้สลับเองได้ และจำค่าไว้",
    ],
    checklist: [
      "ทำผ่าน token mapping ไม่มีการ if-dark รายจุดใน component",
      "พื้นไม่ดำสนิท / text ไม่ขาวจัด",
      "ลำดับชั้นสื่อด้วยความสว่าง surface (เงาใช้ไม่ได้ผลบนพื้นมืด)",
      "Contrast ผ่าน AA ทุกคู่ ในโหมดมืด (ตรวจแยกจาก light)",
      "รูป/โลโก้/illustration มีเวอร์ชันหรือ treatment สำหรับพื้นมืด",
      "Respect prefers-color-scheme และจำตัวเลือกของ user",
    ],
    deliverables: ["Token mapping table (semantic × light × dark × contrast)", "Image/asset treatment guideline สำหรับโหมดมืด"],
    goodExample:
      "ระบบที่ surface ไล่ #121212 → #1e1e1e → #2a2a2a ตามชั้นความลึก, สี primary ลด saturation ลง 15%, ทุก component อ่าน token เดิม — เปิด dark mode ได้ทั้งแอปโดยแก้ mapping ไฟล์เดียว และ regression แทบเป็นศูนย์",
    badExample:
      "Dark mode ที่ทำโดย filter: invert(1) — รูปทุกรูปกลายเป็นฟิล์มเนกาทีฟ, เงากลายเป็นแสงเรือง, ไอคอนธงชาติสีเพี้ยน และทีมไล่ patch รายจุดอยู่สามเดือนก็ยังเจอหน้าใหม่ที่พัง",
    commonMistakes: [
      "ใช้ดำสนิท #000 + ขาวจัด #FFF จน contrast แสบตาเวลาอ่านยาว",
      "เก็บเงาแบบ light mode ไว้ ซึ่งมองไม่เห็นบนพื้นมืด — ลำดับชั้นหายทั้งแอป",
      "ลืมตรวจ contrast รอบสอง: สีที่ผ่านบนพื้นขาวจำนวนมากไม่ผ่านบนพื้นมืด",
      "Hardcode สี dark รายจุดแทน token — สอง theme เริ่ม drift จากกันตั้งแต่สัปดาห์แรก",
    ],
    relatedSlugs: ["design-tokens", "color-system", "accessibility", "design-system-governance"],
    tags: ["dark-mode", "theming", "tokens"],
    prompts: [
      `You are a theming specialist. Create the dark mode mapping for our token system.

Input: [paste semantic tokens with light values]

Tasks:
1. Map every semantic token to a dark value following: base surface #121212-#1a1a1a; elevation via lighter surfaces (define 3-4 elevation steps); text at 87%/60%/38% white pattern; brand/semantic colors desaturated 10-20%
2. Re-check WCAG AA for every text/surface pair in dark — show ratios, fix failures
3. Flag tokens that cannot simply remap (shadows, overlays, charts) and give their dark strategy
4. Define image/illustration treatment: transparent assets, surface framing for white-background images, logo variants
5. Implementation notes: prefers-color-scheme default, user override persistence, no per-component dark hacks

Output: mapping table (token / light / dark / contrast check) + asset guideline.`,
    ],
    visualDemo: "before-after",
    demoData: {
      title: "Dark Mode: Mapping ไม่ใช่ Invert",
      before: { label: "Invert / patch รายจุด", points: ["พื้น #000 + ตัวอักษรขาวจัด แสบตา", "เงา light mode มองไม่เห็น — ชั้นพัง", "รูปพื้นขาวลอยเป็นกล่อง"] },
      after: { label: "Semantic token mapping", points: ["Surface ไล่ #121212→#2a2a2a ตามชั้น", "Text 87/60/38% white", "Brand ลด saturation 15% + ตรวจ AA ใหม่"] },
    },
  },
  {
    id: "icon-system",
    slug: "icon-system",
    term: "Icon System",
    category: "design-system",
    icon: "🔣",
    level: "basic",
    shortDescription: "ไอคอนชุดเดียว สไตล์เดียว ขนาดมาตรฐาน พร้อมกติกา: เมื่อไหร่ต้องมี label และไอคอนไหนแปลว่าอะไร",
    fullDefinition:
      "Icon system ประกอบด้วย: library เดียว (เลือกชุดเดียว เช่น Lucide แล้วห้ามปนชุดอื่น), ขนาดมาตรฐาน (16/20/24px บน grid เดียวกัน), stroke width สม่ำเสมอ, กติกาความหมาย (ไอคอนหนึ่งตัว = ความหมายเดียวทั้งแอป) และกติกา accessibility: icon-only button ต้องมี aria-label, ไอคอนที่สื่อความหมายต้องมี text ประกอบเว้นแต่เป็น convention สากลจริง (✕, ☰, 🔍)",
    whyItMatters:
      "ไอคอนปนสองชุด (ชุดหนึ่ง stroke 1.5px อีกชุด 2px) ทำ UI ดู 'ไม่เนี้ยบ' แบบที่คนดูบอกไม่ถูกว่าทำไม — และไอคอนที่ทีมคิดว่า 'สื่ออยู่แล้ว' จำนวนมาก user เดาไม่ออก (กล่อง? ลูกศรชี้ลง? จุดสามจุด?) ทุกการเดาผิดคือ task ที่ช้าลงหรือ feature ที่ไม่ถูกค้นพบ",
    whenToUse: [
      "เลือก library และประกาศกติกาตั้งแต่ต้นโปรเจกต์",
      "ตอน review: เจอไอคอนนอกชุดหรือ icon-only ที่ไม่มี label = ตีกลับ",
      "เมื่อจะใช้ไอคอนแทนข้อความเพื่อประหยัดที่ — ตรวจก่อนว่าเป็น convention จริงไหม",
    ],
    whenNotToUse: [
      "อย่าใช้ไอคอนเดี่ยวกับ concept เฉพาะทางของ product (เช่น 'งวดผ่อนชำระ') — ไม่มีไอคอนไหนสื่อได้ ใช้ text",
      "อย่าทำไอคอน custom ทีละตัวตามคำขอ จนชุดหลักกับชุด custom สไตล์แตกกัน",
    ],
    howToApply: [
      "เลือก library เดียว ประกาศขนาดที่ใช้ (16 inline / 20 ปุ่ม / 24 nav) และ stroke เดียว",
      "ทำ meaning registry: ไอคอน → ความหมาย → ใช้ที่ไหน (trash = ลบ เท่านั้น ห้ามแปลว่า 'ล้าง filter')",
      "Icon-only button: บังคับ aria-label + tooltip — ทำเป็น lint/review rule",
      "ไอคอนตกแต่ง (ข้าง text) ใส่ aria-hidden เพื่อไม่ให้ screen reader อ่านซ้ำ",
      "ทดสอบความเข้าใจ: ให้คนนอกทีมเดาความหมายไอคอนที่ใช้เดี่ยวๆ — เดาไม่ออก = ต้องมี label",
    ],
    checklist: [
      "Library เดียว / stroke เดียว / ขนาดจาก scale ที่ประกาศ",
      "ไอคอนหนึ่งตัวมีความหมายเดียวทั้งแอป",
      "Icon-only button ทุกตัวมี aria-label และ tooltip",
      "ไอคอนข้อมูลสำคัญมี text ประกอบ (ไม่พึ่งการเดา)",
      "ไอคอนตกแต่งติด aria-hidden",
      "ไอคอน custom (ถ้าจำเป็น) วาดบน grid + stroke เดียวกับชุดหลัก",
    ],
    deliverables: ["Icon registry: ไอคอน × ความหมาย × ขนาด × ตัวอย่างใช้", "Lint/review rule สำหรับ icon-only + ชุดนอกระบบ"],
    goodExample:
      "ทีมประกาศ Lucide เท่านั้น, trash=ลบ, x=ปิด, filter=กรอง พร้อม registry หน้าเดียว — icon-only ทุกปุ่มมี aria-label เพราะ component บังคับ prop และ designer ใหม่รู้ใน 5 นาทีว่าใช้ไอคอนไหนกับอะไร",
    badExample:
      "แอปที่ปุ่มลบบางหน้าเป็นถังขยะ บางหน้าเป็น ✕ บางหน้าเป็น — (minus) และไอคอน ✕ เองก็แปลว่า 'ปิด' บ้าง 'ลบ' บ้าง 'ยกเลิก' บ้าง — user ต้องลุ้นทุกครั้งว่ากดแล้วของหายไหม",
    commonMistakes: [
      "ปนไอคอนสองชุดเพราะ 'ชุดหลักไม่มีตัวที่ต้องการ' แทนที่จะวาดเพิ่มบน grid เดิม",
      "เชื่อว่าไอคอนสื่อสารได้เองโดยไม่เคยทดสอบกับคนนอกทีม",
      "Icon-only button ไม่มี label — ทั้ง a11y พังและ user ใหม่ต้องเดา",
      "ใช้ไอคอนเดียวกันหลายความหมาย ทำลายการเรียนรู้ของ user",
    ],
    relatedSlugs: ["component-anatomy", "accessibility", "design-tokens", "ux-writing"],
    tags: ["icons", "iconography", "aria-label"],
    prompts: [
      `You are a design systems reviewer auditing icon usage. I will paste screens/code.

Tasks:
1. Inventory all icons: which library each comes from — flag any mixing of sets, stroke widths, or off-scale sizes
2. Build the meaning registry: icon → meaning(s) found — flag any icon used with multiple meanings, and any meaning served by multiple icons
3. Audit icon-only buttons: list every one missing aria-label/tooltip
4. Judge comprehension risk: for each icon used without text, classify as universal convention (✕ ☰ 🔍) vs needs-label — be strict
5. Decorative icons missing aria-hidden

Output: violations table (location / issue / fix) + the canonical registry to adopt + component-level rule (e.g., IconButton requires label prop).`,
    ],
    visualDemo: "checklist",
  },
  {
    id: "motion-guidelines",
    slug: "motion-guidelines",
    term: "Motion Guidelines",
    category: "design-system",
    icon: "🎞️",
    level: "advanced",
    shortDescription: "กติกา animation ของระบบ: duration/easing ต่อประเภท transition, motion ต้องสื่อความหมาย และ respect reduced-motion",
    fullDefinition:
      "Motion guidelines กำหนด: duration scale (เร็ว 100-150ms สำหรับ hover/feedback, กลาง 200-300ms สำหรับ expand/slide, ช้า 300-400ms สำหรับ modal/page — เกิน 400ms ต้องมีเหตุผล), easing มาตรฐาน (ease-out สำหรับของเข้า, ease-in สำหรับของออก), หลัก 'motion สื่อความหมาย' (ของใหม่มาจากไหน ของถูกลบไปไหน) ไม่ใช่ตกแต่ง และข้อบังคับ: ทุก animation ต้องมี fallback เมื่อ prefers-reduced-motion",
    whyItMatters:
      "Motion ที่ไม่มีกติกาจบที่สองขั้ว: แอปที่ทุกอย่างเด้งดึ๋งจนน่ารำคาญใน flow ที่ใช้วันละ 50 รอบ หรือแอปที่ state เปลี่ยนแบบกระตุกจน user ไม่ทันเห็นว่าอะไรเปลี่ยน — และ animation ที่ไม่ respect reduced-motion ทำให้คนที่มี vestibular disorder เวียนหัวจริงๆ (เป็น WCAG violation ด้วย)",
    whenToUse: [
      "State change ที่ user ต้องสังเกต: ของใหม่เพิ่มเข้า list, ของถูกลบ, ตัวเลขเปลี่ยน",
      "Spatial transition ที่ช่วย orientation: drawer slide จากขอบ, modal ขยายจากจุดกด",
      "Loading/skeleton ที่บอกว่าระบบยังทำงาน",
    ],
    whenNotToUse: [
      "Flow ความถี่สูง (พิมพ์, พิมพ์ค้นหา, สลับ tab ที่ใช้ตลอด) — ทุก ms ของ animation คือต้นทุนสะสม",
      "อย่า animate layout ครั้งใหญ่พร้อมกันหลายจุด — สายตาตามได้ทีละเรื่องเดียว",
    ],
    howToApply: [
      "ประกาศ duration token: --motion-fast 150ms / --motion-base 250ms / --motion-slow 350ms — ห้ามเลขลอย",
      "Easing: ease-out ของเข้า (decelerate), ease-in ของออก (accelerate), ease-in-out การย้ายที่",
      "กติกาความหมาย: ทุก animation ตอบได้ว่า 'ช่วย user เข้าใจอะไร' — ตอบไม่ได้ = ตัด",
      "Animate เฉพาะ transform/opacity (GPU) เลี่ยง width/height/top ที่ทำ jank",
      "ทุก animation ห่อด้วย reduced-motion guard: ลดเหลือ fade สั้นหรือตัดทิ้ง",
      "ทดสอบบนเครื่องช้า — animation ที่สวยบน M-series อาจกระตุกบน Android กลางตลาด",
    ],
    checklist: [
      "Duration ทุกตัวมาจาก token ไม่มีเลขลอยในโค้ด",
      "ทุก animation ตอบได้ว่าสื่อความหมายอะไร",
      "ใช้ transform/opacity เท่านั้นใน animation ที่วิ่งบ่อย",
      "prefers-reduced-motion มี fallback ทุกจุด",
      "Flow ความถี่สูงไม่มี animation บังคับรอ",
      "ทดสอบบนอุปกรณ์ระดับกลาง-ล่างแล้ว",
    ],
    deliverables: ["Motion spec: ประเภท transition × duration × easing × reduced-motion fallback", "Token block (--motion-*) + ตัวอย่างโค้ด guard"],
    goodExample:
      "รายการใหม่ใน list: fade+slide เข้า 250ms ease-out ทำให้ตาจับได้ว่าอะไรเพิ่มมา, ลบ: fade ออก 200ms — และเมื่อ user เปิด reduce motion ทั้งคู่เหลือ fade 100ms — สื่อความหมายครบ ไม่หวือหวา ไม่ทำใครเวียนหัว",
    badExample:
      "Dashboard ที่ทุก card เด้ง spring entrance 600ms ทุกครั้งที่เปิดหน้า — วันแรกดู premium วันที่สิบ user รำคาญ และคนที่ตั้ง reduce motion ก็ยังโดนเด้งเต็มๆ เพราะไม่มีใครใส่ guard",
    commonMistakes: [
      "ใช้ animation เป็นเครื่องประดับ ('ให้ดู premium') ใน flow ที่คนรีบ",
      "Duration ตามใจ dev แต่ละคน (200/300/450/700ms ปนกัน) เพราะไม่มี token",
      "Animate คุณสมบัติที่ trigger layout (height/top) จนกระตุกบนมือถือ",
      "ไม่เคยทดสอบ prefers-reduced-motion เลยตั้งแต่ต้นโปรเจกต์",
    ],
    relatedSlugs: ["interaction-design", "component-states", "design-tokens", "accessibility"],
    tags: ["motion", "animation", "easing", "reduced-motion"],
    prompts: [
      `You are a motion design systems engineer. Audit and systematize animation in the code I paste.

Tasks:
1. Inventory every animation/transition: element, property animated, duration, easing, trigger frequency (how often users see it)
2. Judge each: what meaning does it convey? Mark decoration-only animations in high-frequency flows for removal
3. Flag performance risks: anything animating layout properties (width/height/top) instead of transform/opacity
4. Flag every animation lacking a prefers-reduced-motion fallback
5. Propose the motion token scale (fast/base/slow + easings) and map every animation to a token
6. Provide the refactored CSS for the worst 3 offenders including the reduced-motion guard

Output: inventory table with verdicts + token block + refactor snippets.`,
    ],
    visualDemo: "handoff-spec",
    demoData: {
      title: "Motion Spec",
      specs: [
        { label: "--motion-fast 150ms", value: "Hover, feedback, fade" },
        { label: "--motion-base 250ms", value: "Expand, slide, list change (ease-out เข้า)" },
        { label: "--motion-slow 350ms", value: "Modal, page transition" },
        { label: "Properties", value: "transform / opacity เท่านั้น" },
        { label: "Reduced motion", value: "ทุกตัว fallback เป็น fade ≤100ms" },
      ],
    },
  },
];
