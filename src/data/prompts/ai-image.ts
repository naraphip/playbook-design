import type { PromptItem } from "@/types/playbook";

export const AI_IMAGE_PROMPTS: PromptItem[] = [
  {
    id: "ai-image-saas-hero",
    title: "SaaS Hero Illustration",
    audience: "ai-image",
    level: "basic",
    useCase: "สร้างภาพ hero สำหรับ landing page SaaS ที่เข้ากับ brand — ไม่ใช่ภาพ generic ม่วงๆ ที่เหมือนทุกเว็บ",
    inputRequired: ["Product ทำอะไร", "Brand colors (hex)", "โทนของแบรนด์ (จริงจัง/เป็นมิตร/technical)", "ขนาด/สัดส่วนที่ต้องใช้"],
    promptText: `A clean, modern hero illustration for a SaaS landing page. The product: [WHAT IT DOES, e.g. "accounting software for small restaurants"].

Style: flat vector illustration with subtle depth, minimal detail, generous negative space on the [LEFT/RIGHT — where headline text will sit]. Composition: abstract representation of [THE CORE VALUE, e.g. "financial documents transforming into a clear summary"], not literal screenshots, no readable fake UI text.

Color: strictly limited palette — primary [HEX], accent [HEX], neutral background [HEX or "very light warm gray"]. No purple-blue gradient defaults, no neon glows.

Mood: [e.g. calm, competent, trustworthy — not playful]. People: [none / one or two simplified figures, diverse, no faces detailed enough to read expressions].

Avoid: glassmorphism panels, floating 3D blobs, rocket ships, generic charts going up, lorem-ipsum-style fake text, watermark-style noise, drop shadows in all directions.

Format: [16:9 / 4:3 / custom], composition keeps the focal element within the [safe zone description] so it survives responsive cropping.`,
    outputFormat: "ภาพ hero 1 ภาพ (gen หลาย variation แล้วเลือก) + เว้นพื้นที่ headline ตามที่ระบุ",
    constraints: ["จำกัด palette ตาม hex ที่ให้", "ห้าม fake UI text ที่อ่านออก", "เว้น negative space ฝั่ง headline", "ห้าม cliché: rocket, gradient ม่วง, 3D blobs"],
    bestUsedWith: ["Midjourney", "DALL-E", "Ideogram"],
    tags: ["hero", "illustration", "saas"],
    exampleInput: "โปรแกรมบัญชีร้านอาหาร / primary #0F766E / โทนอุ่นเชื่อถือได้ / 16:9 text ซ้าย",
    expectedOutputPreview: "ภาพ flat vector ใบเสร็จ/บิลค่อยๆ เรียงตัวเป็นกราฟสรุปสีเขียว teal บนพื้นเทาอุ่น พื้นที่ว่างซ้าย 40% สำหรับ headline",
  },
  {
    id: "ai-image-isometric-workspace",
    title: "Isometric Design Workspace",
    audience: "ai-image",
    level: "basic",
    useCase: "ภาพ isometric workspace สำหรับ about/blog/feature section — สื่อความเป็นทีม design/dev อย่างมีรสนิยม",
    inputRequired: ["ใช้ที่ไหน (about? blog header?)", "Brand colors", "องค์ประกอบที่อยากให้มี (จอ, sketch, ของบนโต๊ะ)"],
    promptText: `An isometric illustration of a designer's workspace, viewed at the classic 30-degree isometric angle.

Scene contents: [PICK: a desk with a large monitor showing abstract wireframe shapes, a tablet with a stylus, scattered paper sketches with rough rectangles (not readable text), a small plant, coffee cup]. Keep object count low — 5-7 objects maximum, arranged with breathing room, not a cluttered flat-lay.

Style: clean isometric vector, consistent 30° angles throughout, soft single-direction lighting, subtle shadows on one side only. Surfaces flat-colored with at most 2 shades per surface (base + shadow tone).

Color: brand palette only — [HEX LIST]; let one accent color carry the focal object (the screen), neutrals for everything else.

The screen shows: abstract UI blocks — rectangles and lines suggesting a layout, absolutely no readable or pseudo-readable text (gibberish text looks broken at any size).

Avoid: photorealism, mixed perspective angles (the common isometric failure), more than one light source, characters/people unless requested, brand logos on objects.

Format: [SIZE/RATIO], background [transparent-friendly solid color / very light neutral] so it drops onto the page cleanly.`,
    outputFormat: "ภาพ isometric 1 ภาพ พื้นหลังเรียบพร้อมวางบนเว็บ",
    constraints: ["มุม isometric สม่ำเสมอ 30° ทั้งภาพ", "วัตถุไม่เกิน 5-7 ชิ้น", "จอแสดง abstract blocks ห้าม text อ่านออก", "แสงทิศเดียว"],
    bestUsedWith: ["Midjourney", "DALL-E", "Ideogram"],
    tags: ["isometric", "illustration", "workspace"],
    exampleInput: "Header blog design team / #4F46E5 + neutrals / มีจอใหญ่ + sketch กระดาษ",
    expectedOutputPreview: "โต๊ะ isometric มีจอแสดง wireframe blocks สี indigo, กระดาษ sketch 2 แผ่น, ต้นไม้เล็ก — พื้นหลังขาวนวล",
  },
  {
    id: "ai-image-product-mockup",
    title: "Product Mockup Scene",
    audience: "ai-image",
    level: "intermediate",
    useCase: "สร้างฉาก mockup (device ในสภาพแวดล้อมจริง) ไว้วาง screenshot จริงของ product ทีหลัง — สำหรับ marketing/store",
    inputRequired: ["Device ที่ต้องการ (laptop/phone/tablet)", "บรรยากาศฉาก (office/cafe/บ้าน)", "มุมกล้อง + พื้นที่จอที่ต้องตรงเพื่อวาง screenshot", "โทนสี/แสง"],
    promptText: `A photorealistic product mockup scene: a [DEVICE — e.g. modern laptop / smartphone held in hand / tablet on desk] in [SETTING — e.g. a bright minimal home office / warm cafe table near a window].

CRITICAL — the screen: facing the camera as flat and frontal as possible at [ANGLE — straight-on / slight 10° angle], displaying a SOLID UNIFORM [LIGHT GRAY #F5F5F5 / GREEN #00FF00 for keying] BLANK SCREEN with no content, no reflections cutting across it, no glare hotspots — a real product screenshot will be composited onto it later, so the screen must be a clean, evenly-lit, undistorted rectangle.

Scene: shallow depth of field — the device sharp, background softly blurred; supporting props minimal and off to the sides ([coffee, notebook, plant — 2-3 max]); natural [warm/cool] light from [DIRECTION], soft shadows.

Color grading: [TONE — warm and inviting / clean and corporate], muted background tones so the (future) screen content becomes the most colorful element.

Avoid: fingers covering screen edges, stickers/logos on the device, recognizable brand devices ([or: generic device without logos]), busy backgrounds competing with the screen, dramatic angles that would distort the screenshot perspective.

Format: [RATIO], device screen occupying roughly [X%] of frame, centered [or per layout need].`,
    outputFormat: "ภาพฉาก device จอเปล่าสีพื้น พร้อม composite screenshot จริงทีหลัง",
    constraints: ["จอต้องเปล่า สีพื้นเรียบ ไม่มีแสงตัด", "มุมจอบิดน้อยที่สุดเพื่อวาง screenshot ง่าย", "ไม่มีโลโก้แบรนด์บน device", "ฉากรองห้ามแย่งความเด่นจากจอ"],
    bestUsedWith: ["Midjourney", "DALL-E", "Firefly"],
    tags: ["mockup", "device", "marketing"],
    exampleInput: "Laptop ใน home office สว่าง / มุมตรง / จอเทา #F5F5F5 / โทนอุ่น",
    expectedOutputPreview: "Laptop จอเปล่าสีเทาเรียบหันตรงกล้อง บนโต๊ะไม้อ่อน แสงเช้าจากซ้าย พื้นหลังเบลอ — พร้อมวาง screenshot",
  },
  {
    id: "ai-image-research-dashboard",
    title: "UX Research Dashboard",
    audience: "ai-image",
    level: "intermediate",
    useCase: "ภาพประกอบธีม research/data สำหรับบทความ, slide, หรือ feature section — สื่อ 'insight จากข้อมูล' โดยไม่โกหกว่าเป็น UI จริง",
    inputRequired: ["ใช้ที่ไหน (บทความ? slide?)", "Brand colors", "Concept ที่สื่อ (สัมภาษณ์ user? วิเคราะห์ data? testing?)"],
    promptText: `An editorial-style illustration representing UX research and data insights — clearly an ILLUSTRATION, not a fake screenshot (fake UI passed off as real product imagery erodes trust).

Concept: [PICK ONE — "user interview insights being organized into themes" / "usability test observations becoming chart patterns" / "scattered data points forming a clear path"]. Visualize it abstractly: floating cards with simple shapes (no readable text), loose chart forms (bars, dots, flowing lines), sticky-note-like rectangles clustering into groups.

Style: modern flat illustration with light texture, hand-crafted feel — slightly imperfect alignment is good (it signals "illustration" honestly, vs pixel-perfect fake UI which signals "screenshot" dishonestly). Line + fill combination.

Color: background [HEX/light neutral], data elements in [2-3 BRAND HEX], one warm accent for the "insight" focal moment — the visual should have one clear focal point where the chaos resolves into clarity.

People: [optional — one simplified researcher figure observing, no detailed face].

Avoid: readable or pseudo-readable text anywhere, realistic browser/app chrome (no fake screenshots), pie charts (cliché), magnifying glasses over charts (double cliché), matrix-style raining data.

Format: [RATIO for the placement], focal point positioned [center / rule-of-thirds] for the layout.`,
    outputFormat: "ภาพ illustration ธีม research 1 ภาพ มี focal point ชัด",
    constraints: ["ต้องดูเป็น illustration ชัดๆ ไม่ใช่ fake screenshot", "ห้าม text อ่านออกทุกจุด", "ห้าม cliché: แว่นขยาย, pie chart", "Focal point เดียวที่ความวุ่นวายกลายเป็นความชัด"],
    bestUsedWith: ["Midjourney", "DALL-E", "Ideogram"],
    tags: ["research", "data", "editorial"],
    exampleInput: "Header บทความ 'จาก interview สู่ insight' / #0EA5E9 + #F59E0B accent",
    expectedOutputPreview: "การ์ดโน้ตกระจัดกระจายฝั่งซ้ายค่อยๆ จัดกลุ่มเป็น 3 cluster ฝั่งขวา จุด insight สีส้มอุ่นเด่นตรง cluster กลาง",
  },
  {
    id: "ai-image-app-screenshot-mockup",
    title: "Clean App Screenshot Mockup",
    audience: "ai-image",
    level: "basic",
    useCase: "ภาพ mockup มือถือลอยแบบ minimal สำหรับ App Store, เว็บ, หรือ social — เน้นจอเด่น พื้นหลังสะอาด",
    inputRequired: ["Device + จำนวน (1 เครื่อง? 3 เครื่องเรียง?)", "สีพื้นหลัง", "มุม (ตรง/เอียง float)", "จะวาง screenshot จริงทีหลังหรือให้วาด abstract UI"],
    promptText: `A minimal floating smartphone mockup for [USE — app store visuals / website feature section / social post].

Composition: [ONE phone centered / THREE phones in a row, center one larger and forward] floating with a subtle soft shadow below (shadow only — no reflective floor), at [straight-on / gentle 5-10° tilt].

The screen: [OPTION A: solid uniform light gray #F0F0F0 blank — real screenshot composited later, so flat frontal screen, zero glare. / OPTION B: abstract minimal UI suggestion — soft colored blocks and rounded rectangles implying an app layout, NO readable text, NO real-looking fake content].

Background: solid [HEX] or a very subtle two-tone gradient of [HEX → HEX], completely clean — no props, no confetti, no floating geometric decoration. The phone(s) and screen are the only subjects.

Device: modern generic smartphone, thin uniform bezels, no brand logo, no notch detail emphasis, matte [dark gray / silver] frame.

Lighting: soft, even, single ambient source; the subtle shadow grounds the float without drama.

Format: [RATIO — e.g. 4:5 for social, 16:9 for web], phone(s) occupying [60-75%] of frame height, centered with equal margins.`,
    outputFormat: "ภาพ mockup มือถือลอยพื้นหลังสะอาด พร้อมใช้หรือพร้อม composite",
    constraints: ["พื้นหลังเรียบไม่มี decoration ลอย", "Device generic ไม่มีโลโก้", "ถ้าจอ abstract ห้าม text อ่านออก", "เงา soft ใต้เครื่องเท่านั้น"],
    bestUsedWith: ["Midjourney", "DALL-E", "Ideogram"],
    tags: ["mockup", "mobile", "minimal"],
    exampleInput: "3 เครื่องเรียง กลางใหญ่ / พื้น #FAFAF9 / จอเทาเปล่ารอ composite / 16:9",
    expectedOutputPreview: "มือถือ 3 เครื่องลอย เครื่องกลางใหญ่กว่าเล็กน้อย จอเทาเรียบทั้งหมด เงานุ่มใต้เครื่อง พื้นหลังขาวอุ่นล้วน",
  },
  {
    id: "ai-image-glassmorphism-ui",
    title: "Glassmorphism UI Scene",
    audience: "ai-image",
    level: "intermediate",
    useCase: "ภาพ abstract UI สไตล์ glassmorphism สำหรับ background, banner, หรือ section ที่ต้องการความ futuristic แบบมีรสนิยม",
    inputRequired: ["ใช้ที่ไหน (background? banner?)", "โทนสี (อุ่น/เย็น + hex หลัก)", "ความหนาแน่น (โล่ง/แน่น)", "ต้องวาง text ทับไหม"],
    promptText: `An abstract glassmorphism composition for [USE — website section background / banner / decorative panel].

Elements: [3-5] frosted glass panels of varying sizes floating at different depths — rounded rectangles with heavy background blur (frosted, not clear glass), thin 1px light borders catching an edge highlight, very subtle inner translucency showing color from behind.

Behind the glass: soft large color-field gradients in [HEX PALETTE — 2-3 colors], blurred into smooth organic blobs — the glass panels sample and frost these colors. One small sharp accent element (a dot, a thin line) for focal contrast against all the softness.

Depth: panels overlap with believable layering — closer panels slightly larger with softer drop shadows, further ones smaller and dimmer. Maximum 3 depth layers (more becomes noise).

Restraint rules — what separates tasteful from 2021-trend-soup: NO floating spheres/orbs, NO neon glow edges, NO readable or fake text on panels, NO more than [3] background colors, panels mostly empty (suggestion of UI via 1-2 soft shapes per panel at most).

[IF TEXT OVERLAY NEEDED: keep the [REGION — left third / center] visually calm and lower-contrast so [light/dark] text remains readable at WCAG-passing contrast over it.]

Lighting: one consistent light direction for all edge highlights. Format: [RATIO], composition weighted [direction] per layout.`,
    outputFormat: "ภาพ glassmorphism abstract พร้อมโซนวาง text ถ้าระบุ",
    constraints: ["Panel แก้วไม่เกิน 3-5 ชิ้น 3 ชั้นความลึก", "ห้าม orbs ลอย/neon glow/fake text", "แสง edge ทิศเดียวกันทุกชิ้น", "โซน text ต้องสงบพอให้อ่านได้"],
    bestUsedWith: ["Midjourney", "DALL-E"],
    tags: ["glassmorphism", "abstract", "background"],
    exampleInput: "Background section CTA / โทนเย็น #1E3A8A + #0EA5E9 / โล่ง / text ขาวซ้าย",
    expectedOutputPreview: "แผ่นแก้วฝ้า 4 ชิ้นลอยขวาบนพื้น gradient น้ำเงินลึก ฝั่งซ้ายโล่งมืดพอสำหรับ text ขาว",
  },
  {
    id: "ai-image-dark-dashboard",
    title: "Dark SaaS Dashboard",
    audience: "ai-image",
    level: "advanced",
    useCase: "ภาพ dashboard โหมดมืดแบบ abstract สำหรับ marketing — สื่อความ powerful/technical โดยไม่หลอกว่าเป็น product จริง",
    inputRequired: ["ใช้ที่ไหน (hero? feature section?)", "Accent color ของแบรนด์", "Mood (technical/elegant/intense)", "มุมมอง (ตรง/perspective)"],
    promptText: `A dark-mode SaaS dashboard visualization for [USE — marketing hero / feature section], rendered as a polished ABSTRACT representation (stylized marketing visual, not a fake screenshot of real features).

Canvas: deep dark background [#0B0F19 or BRAND DARK] — true dark UI tone, not pure black. The dashboard: a clean layout suggestion — sidebar hinted by a slim dark column, top bar by a subtle divider, content area with [3-5] abstract data modules.

Data modules: glowing line charts with smooth curves, soft-gradient area fills fading to transparent, dot-grid sparklines, rounded stat blocks — all using SHAPE language only, no readable text, no pseudo-text squiggles (clean empty label areas instead).

Color discipline: monochrome dark surface palette (2-3 elevation tones of the dark base) + ONE brand accent [HEX] carrying all the data glow + optionally one secondary [HEX] at 20% the accent's presence. The restraint IS the premium feel.

Glow: subtle outer glow on data lines only (the charts feel alive), nothing else glows — no neon borders, no cyberpunk grid floors, no HUD circles.

Angle: [straight-on flat / gentle 15° perspective tilt with slight depth-of-field on far edge]. Lighting: screen-lit ambiance, soft vignette toward edges.

Avoid: sci-fi clichés (radar circles, world maps with arcs, matrix rain), rainbow data colors, visible cursor, browser chrome.

Format: [RATIO], content area focal point at [POSITION] for layout pairing.`,
    outputFormat: "ภาพ dark dashboard abstract คุมโทน 1 accent",
    constraints: ["Accent เดียวแบกการ glow ทั้งภาพ", "ห้าม text/pseudo-text ทุกจุด", "ห้าม sci-fi cliché: radar, world map arcs", "พื้นมืด 2-3 elevation tones ไม่ใช่ดำสนิท"],
    bestUsedWith: ["Midjourney", "DALL-E"],
    tags: ["dark-mode", "dashboard", "marketing"],
    exampleInput: "Hero ของ analytics tool / accent #22D3EE / mood: technical สงบ / เอียง 15°",
    expectedOutputPreview: "Dashboard มืดเอียงเล็กน้อย เส้นกราฟ cyan เรืองนุ่มบน surface 3 ระดับความเข้ม โมดูล stat มุมมนไร้ตัวอักษร",
  },
  {
    id: "ai-image-minimal-banner",
    title: "Minimal Product Banner",
    audience: "ai-image",
    level: "basic",
    useCase: "Banner สินค้า/feature แบบ minimal สำหรับ social, ads, email header — พื้นที่ text ชัด องค์ประกอบน้อยแต่จัดวางแม่น",
    inputRequired: ["สินค้า/สิ่งที่โปรโมท", "ขนาด banner ที่ต้องใช้", "Brand colors + โทน", "ฝั่งที่จะวาง text/logo ทับ"],
    promptText: `A minimal product banner background for [PRODUCT/CAMPAIGN], sized for [PLACEMENT — e.g. 1200×628 social / 728×90 / email header 600×200].

Composition: ONE focal element — [the product photo cutout / a single abstract shape representing THE BENEFIT / a simple geometric arrangement] — positioned on the [LEFT/RIGHT] third, with the opposite [TWO-THIRDS] kept as calm, uncluttered space where text and logo will be overlaid later.

Background: solid [HEX] or an extremely subtle gradient ([HEX → slightly lighter]) — flat enough that overlaid [WHITE/DARK] text passes contrast comfortably across the entire text zone. No texture, no pattern, no noise in the text zone; a faint texture on the focal side only is acceptable.

The focal element: clean edges, soft single shadow if floated, scaled to occupy no more than [30-35%] of the canvas — minimal means the element breathes, not that it's tiny.

Color: strict brand palette [HEX LIST] — the focal element carries the accent; background stays neutral-quiet.

Avoid: text of any kind (overlaid later in design tools — AI text renders break brand fonts), badges/starbursts, more than one focal element, centered compositions that leave no text zone, drop shadows on the background itself.

Mood: [premium-quiet / fresh-energetic / warm-trustworthy]. The banner should look intentionally sparse — confident space, not emptiness.`,
    outputFormat: "ภาพ banner พื้นหลัง + focal เดียว เว้นโซน text ชัดเจน",
    constraints: ["ห้ามมี text ในภาพเด็ดขาด (วางทีหลัง)", "Focal เดียว ≤35% ของภาพ", "โซน text ต้องเรียบพอผ่าน contrast", "Palette ตาม hex เท่านั้น"],
    bestUsedWith: ["Midjourney", "DALL-E", "Ideogram", "Firefly"],
    tags: ["banner", "minimal", "marketing"],
    exampleInput: "โปรโมทฟีเจอร์รายงานใหม่ / 1200×628 / #0F766E บนครีม / text ซ้าย",
    expectedOutputPreview: "พื้นครีมเรียบ ฝั่งขวามีแผ่นกระดาษรายงาน abstract สี teal ลอยเงานุ่ม ฝั่งซ้าย 2/3 ว่างพร้อมวาง headline",
  },
];
