export function BoxModelDemo() {
  return (
    <div className="rounded-xl bg-bg-soft border border-border p-4 flex justify-center">
      <div className="relative">
        {/* Margin */}
        <div className="border-2 border-dashed border-warning/50 bg-warning-soft p-3 rounded-xl">
          <p className="text-center text-xs font-semibold text-warning mb-2">margin</p>
          {/* Border */}
          <div className="border-2 border-accent bg-accent-soft p-2 rounded-xl">
            <p className="text-center text-xs font-semibold text-accent mb-1.5">border</p>
            {/* Padding */}
            <div className="border-2 border-dashed border-primary/40 bg-primary-soft p-2 rounded-xl">
              <p className="text-center text-xs font-semibold text-primary mb-1.5">padding</p>
              {/* Content */}
              <div className="bg-primary rounded-lg px-3 py-2 text-center shadow-sm">
                <span className="text-xs font-bold text-white">content</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
