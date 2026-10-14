/**
 * Very low-opacity decorative motif: a circular arrangement of three arcs
 * and connector nodes, reading equally as a recycling loop and a robotics /
 * network diagram. Purely decorative — hidden from assistive tech. Scales
 * via `size` so it can sit behind the homepage hero (large) or an inner
 * page's header band (smaller).
 */
export function HeroBackground({
  size = 560,
  top = -64,
  right = -128,
  opacity = 0.06,
  className = "",
}: {
  size?: number;
  top?: number;
  right?: number;
  opacity?: number;
  className?: string;
}) {
  const arc = (
    <>
      <path
        d="M 408.56 126.79 A 200 200 0 0 1 408.56 433.21"
        fill="none"
        stroke="var(--norah-brand)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="408.56" cy="126.79" r="6" fill="var(--norah-brand)" />
      <circle cx="408.56" cy="433.21" r="6" fill="var(--norah-brand)" />
      <circle cx="480" cy="280" r="3.5" fill="var(--norah-teal)" />
    </>
  );

  return (
    <svg
      viewBox="0 0 560 560"
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 hidden lg:block ${className}`}
      style={{ width: size, height: size, top, right, opacity }}
    >
      <circle cx="280" cy="280" r="9" fill="var(--norah-brand)" />
      <g>{arc}</g>
      <g transform="rotate(120 280 280)">{arc}</g>
      <g transform="rotate(240 280 280)">{arc}</g>
    </svg>
  );
}
