import type { Metadata } from "next";
import { PromptLibraryClient } from "@/components/playbook/PromptLibraryClient";

export const metadata: Metadata = {
  title: "Prompt Library",
  description: "คลัง prompt สำหรับสั่งงาน designer, developer, Claude Code และ AI image tools",
};

export default function PromptsPage() {
  return <PromptLibraryClient />;
}
