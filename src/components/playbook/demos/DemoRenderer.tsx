import type { ReactNode } from "react";
import type { AuditSeverity, DemoData, VisualDemoType } from "@/types/playbook";
import { Badge } from "../workspace";

type DemoProps = { data?: DemoData };

export function DemoRenderer({ type, data }: { type: VisualDemoType; data?: DemoData }) {
  switch (type) {
    case "checklist":
      return <ChecklistDemo data={data} />;
    case "before-after":
      return <BeforeAfterDemo data={data} />;
    case "audit-report":
      return <AuditReportDemo data={data} />;
    case "acceptance-criteria":
      return <AcceptanceCriteriaDemo data={data} />;
    case "component-state":
      return <ComponentStateDemo data={data} />;
    case "handoff-spec":
      return <HandoffSpecDemo data={data} />;
    case "user-flow":
      return <UserFlowDemo data={data} />;
    case "priority-matrix":
      return <PriorityMatrixDemo data={data} />;
    case "prompt-card":
      return <PromptCardDemo data={data} />;
    case "qa-checklist":
      return <QaChecklistDemo data={data} />;
  }
}

const DemoFrame = ({ title, children, note }: { title: string; children: ReactNode; note?: string }) => (
  <div className="overflow-hidden rounded-md border border-border bg-bg-main">
    <div className="flex items-center justify-between border-b border-border bg-bg-surface px-3 py-2">
      <p className="mono text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted">{title}</p>
      <Badge>demo</Badge>
    </div>
    <div className="p-3">{children}</div>
    {note && <p className="border-t border-border bg-bg-surface px-3 py-2 text-xs leading-relaxed text-text-muted">{note}</p>}
  </div>
);

function ChecklistDemo({ data }: DemoProps) {
  const items = data?.items ?? [
    "ระบุ user goal ของหน้านี้ชัดเจน",
    "Primary action เดียวต่อ viewport",
    "States ครบ: loading / empty / error",
    "ตรวจบน 375px — ไม่มี horizontal overflow",
    "Keyboard ทำ action หลักได้ครบ",
  ];
  return (
    <DemoFrame title={data?.title ?? "Checklist"} note={data?.note}>
      <ul className="grid gap-1.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 rounded-md border border-border bg-bg-surface px-2.5 py-2 text-xs leading-relaxed text-text-secondary">
            <span className="mono mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded border border-success/40 bg-success-soft text-[9px] font-black text-success">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </DemoFrame>
  );
}

function BeforeAfterDemo({ data }: DemoProps) {
  const before = data?.before ?? {
    label: "Before",
    points: ["ปุ่ม filled 4 ตัวแข่งกัน", "Label generic: 'Submit'", "ไม่มี proof ใกล้จุดตัดสินใจ"],
  };
  const after = data?.after ?? {
    label: "After",
    points: ["Primary เดียว เด่นชัด", "Label บอก outcome: 'เริ่มทดลองฟรี'", "Proof วางก่อนจุดขอ commitment"],
  };
  return (
    <DemoFrame title={data?.title ?? "Before / After"} note={data?.note}>
      <div className="grid gap-2 sm:grid-cols-2">
        {[{ side: before, danger: true }, { side: after, danger: false }].map(({ side, danger }) => (
          <div key={side.label} className="rounded-md border border-border bg-bg-surface p-3">
            <div className="mb-2 flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${danger ? "bg-danger" : "bg-success"}`} />
              <p className="text-[10px] font-bold uppercase tracking-wide text-text-muted">{side.label}</p>
            </div>
            <ul className="grid gap-1.5">
              {side.points.map((point, index) => (
                <li key={index} className="flex gap-2 text-xs leading-relaxed text-text-secondary">
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${danger ? "bg-danger/60" : "bg-success/60"}`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

const SEVERITY_STYLES: Record<AuditSeverity, { badge: string; label: string }> = {
  critical: { badge: "border-danger/30 bg-danger-soft text-danger", label: "CRIT" },
  high: { badge: "border-danger/25 bg-danger-soft text-danger", label: "HIGH" },
  medium: { badge: "border-warning/30 bg-bg-soft text-warning", label: "MED" },
  low: { badge: "border-border bg-bg-soft text-text-muted", label: "LOW" },
};

function AuditReportDemo({ data }: DemoProps) {
  const findings = data?.findings ?? [
    { severity: "critical" as const, issue: "ปุ่มจ่ายเงินเข้าไม่ถึงด้วย keyboard", fix: "เปลี่ยน div เป็น button + focus state" },
    { severity: "high" as const, issue: "ค่าส่งโผล่ครั้งแรกตอนกรอกบัตร", fix: "แสดงค่าส่งตั้งแต่ตะกร้า" },
    { severity: "medium" as const, issue: "Error message ไม่บอกวิธีแก้", fix: "เขียนใหม่: เกิดอะไร + แก้ยังไง" },
  ];
  return (
    <DemoFrame title={data?.title ?? "Audit Report"} note={data?.note}>
      <div className="grid gap-1.5">
        {findings.map((finding, index) => {
          const style = SEVERITY_STYLES[finding.severity];
          return (
            <div key={index} className="rounded-md border border-border bg-bg-surface p-2.5">
              <div className="flex items-start gap-2">
                <span className={`mono mt-px shrink-0 rounded border px-1.5 py-0.5 text-[9px] font-black ${style.badge}`}>{style.label}</span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold leading-relaxed text-text-primary">{finding.issue}</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-text-muted">
                    <span className="font-bold text-success">Fix:</span> {finding.fix}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DemoFrame>
  );
}

function AcceptanceCriteriaDemo({ data }: DemoProps) {
  const criteria = data?.criteria ?? [
    { given: "อยู่หน้า search", when: "พิมพ์คำที่ไม่มีผลลัพธ์", then: "แสดง empty state + ปุ่มล้างคำค้น" },
    { given: "โหลดเกิน 300ms", when: "รอ response", then: "แสดง skeleton ตรง layout จริง" },
    { given: "จอ <768px", when: "เปิดรายการ", then: "ตารางเปลี่ยนเป็น card list" },
  ];
  return (
    <DemoFrame title={data?.title ?? "Acceptance Criteria"} note={data?.note}>
      <div className="grid gap-1.5">
        {criteria.map((criterion, index) => (
          <div key={index} className="rounded-md border border-border bg-bg-surface p-2.5">
            <div className="grid gap-1 text-[11px] leading-relaxed">
              <p><span className="mono mr-1.5 rounded bg-bg-soft px-1 py-0.5 text-[9px] font-black uppercase text-text-muted">Given</span><span className="text-text-secondary">{criterion.given}</span></p>
              <p><span className="mono mr-1.5 rounded bg-bg-soft px-1 py-0.5 text-[9px] font-black uppercase text-text-muted">When</span><span className="text-text-secondary">{criterion.when}</span></p>
              <p><span className="mono mr-1.5 rounded bg-accent-soft px-1 py-0.5 text-[9px] font-black uppercase text-accent">Then</span><span className="font-semibold text-text-primary">{criterion.then}</span></p>
            </div>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function ComponentStateDemo({ data }: DemoProps) {
  const states = data?.states ?? [
    { name: "Default", spec: "bg: surface, border: border, text: primary" },
    { name: "Hover", spec: "bg: soft — transition 150ms ease-out" },
    { name: "Focus-visible", spec: "ring 2px accent, offset 2px — ห้ามลบ outline" },
    { name: "Disabled", spec: "opacity ลด, cursor: not-allowed, ไม่รับ pointer" },
    { name: "Loading", spec: "spinner แทน label, คงความกว้าง, aria-busy" },
  ];
  return (
    <DemoFrame title={data?.title ?? "Component States"} note={data?.note}>
      <div className="grid gap-1.5">
        {states.map((state, index) => (
          <div key={index} className="flex items-start gap-2.5 rounded-md border border-border bg-bg-surface px-2.5 py-2">
            <span className="mono w-24 shrink-0 text-[10px] font-black uppercase tracking-wide text-accent">{state.name}</span>
            <span className="mono min-w-0 text-[11px] leading-relaxed text-text-secondary">{state.spec}</span>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function HandoffSpecDemo({ data }: DemoProps) {
  const specs = data?.specs ?? [
    { label: "Tokens", value: "ทุกค่าอ้าง design token — ไม่มี hardcode" },
    { label: "States", value: "Matrix 6 states แนบใน ticket" },
    { label: "Responsive", value: "<768px: ตาราง → card list" },
    { label: "A11y", value: "Keyboard path + aria-label ระบุครบ" },
  ];
  return (
    <DemoFrame title={data?.title ?? "Handoff Spec"} note={data?.note}>
      <div className="overflow-hidden rounded-md border border-border bg-bg-surface">
        {specs.map((spec, index) => (
          <div key={index} className={`grid grid-cols-[100px_1fr] gap-2 px-3 py-2 text-[11px] leading-relaxed ${index > 0 ? "border-t border-border" : ""}`}>
            <span className="mono font-black uppercase tracking-wide text-text-muted">{spec.label}</span>
            <span className="text-text-secondary">{spec.value}</span>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function UserFlowDemo({ data }: DemoProps) {
  const steps = data?.steps ?? [
    { name: "เห็น value ชัด", detail: "จอแรกตอบ: ขายอะไร / ได้อะไร / ทำอะไรต่อ" },
    { name: "เริ่มลงมือ", detail: "CTA เดียว บอก outcome", risk: "ปุ่มแข่งกัน = ลังเล" },
    { name: "ผ่าน friction ต่ำสุด", detail: "ขอเฉพาะข้อมูลที่จำเป็นตอนนี้" },
    { name: "ถึง first value", detail: "เห็นผลลัพธ์จริงก่อนถูกขออะไรเพิ่ม" },
  ];
  return (
    <DemoFrame title={data?.title ?? "User Flow"} note={data?.note}>
      <ol className="grid gap-1.5">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-2.5 rounded-md border border-border bg-bg-surface px-2.5 py-2">
            <span className="mono mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent-soft text-[10px] font-black text-accent">{index + 1}</span>
            <div className="min-w-0">
              <p className="text-xs font-bold text-text-primary">{step.name}</p>
              <p className="text-[11px] leading-relaxed text-text-secondary">{step.detail}</p>
              {step.risk && <p className="mt-0.5 text-[10px] font-semibold text-danger">⚠ {step.risk}</p>}
            </div>
          </li>
        ))}
      </ol>
    </DemoFrame>
  );
}

function PriorityMatrixDemo({ data }: DemoProps) {
  const matrix = data?.matrix ?? {
    xLabel: "Effort",
    yLabel: "Impact",
    quadrants: ["ทำทันที", "วางแผนทำ", "ทำเมื่อว่าง", "ตัดทิ้ง"] as [string, string, string, string],
    items: [
      { name: "แก้ error message จุดจ่ายเงิน", quadrant: 0 as const },
      { name: "รื้อ onboarding flow", quadrant: 1 as const },
      { name: "ปรับ icon ให้สม่ำเสมอ", quadrant: 2 as const },
      { name: "เพิ่ม animation ตกแต่ง", quadrant: 3 as const },
    ],
  };
  const quadrantTones = [
    "border-success/30 bg-success-soft",
    "border-accent/25 bg-accent-soft",
    "border-border bg-bg-surface",
    "border-border bg-bg-soft",
  ];
  return (
    <DemoFrame title={data?.title ?? "Priority Matrix"} note={data?.note ?? `แกนนอน: ${matrix.xLabel} · แกนตั้ง: ${matrix.yLabel}`}>
      <div className="grid grid-cols-2 gap-1.5">
        {matrix.quadrants.map((quadrant, qIndex) => (
          <div key={qIndex} className={`rounded-md border p-2 ${quadrantTones[qIndex]}`}>
            <p className="mono mb-1 text-[9px] font-black uppercase tracking-wide text-text-muted">{quadrant}</p>
            <div className="grid gap-1">
              {matrix.items.filter((item) => item.quadrant === qIndex).map((item) => (
                <p key={item.name} className="rounded border border-border bg-bg-main px-1.5 py-1 text-[10px] font-semibold leading-snug text-text-secondary">{item.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

function PromptCardDemo({ data }: DemoProps) {
  const prompt = data?.prompt ?? {
    title: "UX Review Prompt",
    audience: "ux-review",
    excerpt: "You are a senior UX reviewer. Review the attached screen strictly through ONE lens... Report the TOP 5 findings only, ordered by impact on the user's task...",
  };
  return (
    <DemoFrame title={data?.title ?? "Prompt Card"} note={data?.note}>
      <div className="rounded-md border border-border bg-bg-surface p-3 shadow-card">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm font-bold text-text-primary">{prompt.title}</p>
            <p className="mono mt-1 text-[10px] uppercase tracking-wide text-text-muted">{prompt.audience}</p>
          </div>
          <span className="mono shrink-0 rounded-md border border-border px-2 py-1 text-[10px] font-bold text-text-secondary">Copy</span>
        </div>
        <p className="mono mt-3 line-clamp-4 rounded-md border border-border bg-bg-main p-2 text-[11px] leading-relaxed text-text-secondary">{prompt.excerpt}</p>
      </div>
    </DemoFrame>
  );
}

function QaChecklistDemo({ data }: DemoProps) {
  const items = data?.items ?? [
    "Spacing/typography ตรง token",
    "States ครบ: hover, focus-visible, disabled, loading",
    "375px: ไม่มี horizontal overflow",
    "Text ยาวตัดตามกติกา (ellipsis + tooltip)",
    "Keyboard ทำ action หลักครบ",
  ];
  return (
    <DemoFrame title={data?.title ?? "QA Checklist"} note={data?.note ?? "ตรวจบน staging + เครื่องจริง — ทุก fail ต้องอ้าง spec/AC"}>
      <div className="overflow-hidden rounded-md border border-border bg-bg-surface">
        {items.map((item, index) => (
          <div key={index} className={`flex items-center gap-2.5 px-3 py-2 ${index > 0 ? "border-t border-border" : ""}`}>
            <span className="mono flex h-4 w-9 shrink-0 items-center justify-center rounded border border-success/40 bg-success-soft text-[8px] font-black uppercase text-success">pass</span>
            <span className="min-w-0 text-[11px] leading-relaxed text-text-secondary">{item}</span>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}
