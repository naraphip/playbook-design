import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full bg-bg-main text-text-primary">{children}</body>
    </html>
  );
}
