"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type Props = { text: string; label?: string; className?: string };

export function CopyButton({ text, label, className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? "Copied!" : `Copy ${label ?? "to clipboard"}`}
      className={`inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        copied
          ? "border-success/25 bg-success-soft text-success"
          : "border-border bg-bg-surface text-text-secondary hover:bg-bg-soft hover:text-text-primary"
      } ${className}`}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Copied!" : (label ?? "Copy")}
    </button>
  );
}
