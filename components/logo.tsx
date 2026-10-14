import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
};

const LOCKUP_ASPECT = 814 / 236;

/** The real NORAH lockup (leaf-and-arm mark worked into the "O", plus wordmark and underline). */
export function Logo({ className = "", height = 30 }: LogoProps) {
  return (
    <Image
      src="/logos/norah-logo-compact.png"
      alt="NORAH"
      width={Math.round(height * LOCKUP_ASPECT)}
      height={height}
      priority
      className={`w-auto shrink-0 ${className}`}
      style={{ height }}
    />
  );
}
