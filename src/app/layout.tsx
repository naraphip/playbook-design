import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const notoThai = Noto_Sans_Thai({ variable: "--font-noto-thai", subsets: ["thai"], weight: ["400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "UX/UI Lead Playbook", template: "%s | UX/UI Lead Playbook" },
  description:
    "คลังคำศัพท์ + Prompt สำหรับสั่งงาน UX/UI ให้ Designer, Developer และ AI เข้าใจตรงกัน",
  openGraph: {
    title: "UX/UI Lead Playbook",
    description:
      "Practical UX/UI glossary, prompts, and design communication guide for founders, developers, PMs, and UX/UI leads.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoThai.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full bg-bg-main text-text-primary">{children}</body>
    </html>
  );
}
