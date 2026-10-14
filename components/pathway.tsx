import { adoptionPathway } from "@/lib/content";

export function Pathway() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {adoptionPathway.map((stage) => (
        <li
          key={stage.step}
          className="pathway-card rounded-[14px] bg-white p-5"
          style={{ boxShadow: "inset 0 0 0 1px var(--norah-border-strong)" }}
        >
          <span className="text-[0.8rem] font-semibold" style={{ color: "var(--norah-brand)" }}>
            {stage.step}
          </span>
          <h3 className="mt-3 text-[1.05rem]">{stage.title}</h3>
          <p className="mt-1.5 text-[0.9rem] leading-relaxed text-[var(--norah-text-subtle)]">{stage.description}</p>
        </li>
      ))}
    </ol>
  );
}
