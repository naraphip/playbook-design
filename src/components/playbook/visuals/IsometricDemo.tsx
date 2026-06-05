export function IsometricDemo() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-primary-soft to-accent-soft border border-border p-4">
      <p className="text-xs font-semibold text-text-muted mb-3">Isometric Style Reference</p>
      <div className="flex justify-center">
        <svg viewBox="0 0 200 140" className="w-full max-w-xs" role="img" aria-label="Isometric illustration example">
          {/* Floor */}
          <polygon points="100,100 40,70 100,40 160,70" fill="#EEE9FF" stroke="#C4B5FD" strokeWidth="1.5" />
          {/* Left face */}
          <polygon points="40,70 100,100 100,120 40,90" fill="#DDD6FE" stroke="#C4B5FD" strokeWidth="1.5" />
          {/* Right face */}
          <polygon points="160,70 100,100 100,120 160,90" fill="#C4B5FD" stroke="#A78BFA" strokeWidth="1.5" />
          {/* Small cube top */}
          <polygon points="100,55 80,65 100,75 120,65" fill="#7C5CFF" stroke="#5B3EE8" strokeWidth="1" />
          <polygon points="80,65 100,75 100,90 80,80" fill="#5B3EE8" stroke="#4C1D95" strokeWidth="1" />
          <polygon points="120,65 100,75 100,90 120,80" fill="#4C1D95" stroke="#3B1B77" strokeWidth="1" />
          {/* Decorative accents */}
          <circle cx="70" cy="72" r="2.5" fill="#D97745" />
          <circle cx="130" cy="72" r="2.5" fill="#D97745" />
          <circle cx="100" cy="42" r="2.5" fill="#2F855A" />
        </svg>
      </div>
      <p className="text-center text-xs text-text-muted mt-1">3 equal axes — no perspective distortion</p>
    </div>
  );
}
