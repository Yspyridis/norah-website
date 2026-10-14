export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-[52ch]">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {/* No inline color here: it inherits from the section it's in (dark
          ink on .band-paper, light green + bold on .band-tint — see
          globals.css). */}
      <h2 className="mt-2.5 text-[1.875rem]">{title}</h2>
      {lead && (
        <p className="mt-3 text-[1.05rem] leading-relaxed" style={{ color: "var(--norah-text-subtle)" }}>
          {lead}
        </p>
      )}
    </div>
  );
}
