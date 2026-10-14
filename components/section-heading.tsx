export function SectionHeading({
  eyebrow,
  title,
  lead,
  light,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-[52ch]">
      {eyebrow && (
        <span className="eyebrow" style={light ? { color: "var(--norah-highlight)" } : undefined}>
          {eyebrow}
        </span>
      )}
      <h2
        className="mt-2.5 text-[1.875rem]"
        style={{ color: light ? "var(--norah-white)" : "var(--norah-foreground)" }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className="mt-3 text-[1.05rem] leading-relaxed"
          style={{ color: light ? "color-mix(in oklab, white 80%, transparent)" : "var(--norah-text-subtle)" }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
