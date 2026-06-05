import { CopyButton } from "./CopyButton";

type Props = { prompt: string; index?: number };

export function PromptBox({ prompt, index }: Props) {
  return (
    <div className="group relative rounded-xl border border-border bg-bg-soft p-3.5">
      <div className="flex items-start justify-between gap-3">
        <p className="flex-1 text-sm leading-relaxed text-text-secondary font-mono">{prompt}</p>
        <div className="shrink-0 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
          <CopyButton text={prompt} label={`prompt ${index != null ? index + 1 : ""}`} />
        </div>
      </div>
    </div>
  );
}
