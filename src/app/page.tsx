import type { Metadata } from "next";
import { PlaybookClient } from "@/components/playbook/PlaybookClient";

export const metadata: Metadata = {
  title: "UX/UI Lead Playbook",
  description: "คลังคำศัพท์ + Prompt สำหรับสั่งงาน UX/UI ให้ Designer, Developer และ AI เข้าใจตรงกัน",
};

export default function HomePage() {
  return <PlaybookClient />;
}
