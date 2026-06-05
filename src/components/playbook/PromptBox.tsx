import { CopyButton } from "./CopyButton";

type Props = { prompt: string; index?: number };

export function PromptBox({ prompt, index }: Props) {
  return (
    <div className="group relative rounded-md border border-border bg-bg-main p-3">
      <div className="flex items-start justify-between gap-3">
        <p className="mono min-w-0 flex-1 whitespace-pre-wrap text-[11px] leading-relaxed text-text-secondary">{prompt}</p>
        <div className="shrink-0 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
          <CopyButton text={prompt} label={`prompt ${index != null ? index + 1 : ""}`} />
        </div>
      </div>
    </div>
  );
}
