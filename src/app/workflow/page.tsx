import type { Metadata } from "next";
import { WorkflowClient } from "@/components/playbook/WorkflowClient";

export const metadata: Metadata = {
  title: "UX/UI Lead Workflow",
  description: "เส้นทางทำงานครบ loop ของ UX/UI Lead: intake → research → structure → design → review → handoff → QA → measure",
};

export default function WorkflowPage() {
  return <WorkflowClient />;
}
