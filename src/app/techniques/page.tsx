import type { Metadata } from "next";
import { TechniquesClient } from "@/components/playbook/TechniquesClient";

export const metadata: Metadata = {
  title: "UX/UI Techniques",
  description: "เทคนิค UX/UI ที่ใช้งานได้จริง พร้อม prompt สำหรับแต่ละ technique",
};

export default function TechniquesPage() {
  return <TechniquesClient />;
}
