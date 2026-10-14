import type { Audience } from "@/lib/content";

export function AudienceCards({ audiences }: { audiences: Audience[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {audiences.map((a) => (
        <div key={a.title} className="glass-card p-6">
          <h3 className="text-[1.05rem]">{a.title}</h3>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-[var(--norah-text-subtle)]">{a.body}</p>
        </div>
      ))}
    </div>
  );
}
