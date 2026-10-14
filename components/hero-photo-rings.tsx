import { withBasePath } from "@/lib/base-path";

/**
 * Homepage-hero-only backdrop: two slowly counter-rotating rings (echoing a
 * circular skylight) plus the NORAH facility photograph, held to the right
 * edge and masked out before it reaches the headline column. Purely
 * decorative — hidden from assistive tech.
 */
export function HeroPhotoRings() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="hero-photo-wash"
        style={{ "--hero-photo-url": `url(${withBasePath("/brand-photo.webp")})` } as React.CSSProperties}
      />
      <div className="hero-photo-tint" />
      <div className="hero-rings">
        <div className="hero-ring hero-ring-outer" />
        <div className="hero-ring hero-ring-inner" />
      </div>
    </div>
  );
}
