import type { Stat } from "@/lib/content";

export function StatGrid({ stats, columns = 3 }: { stats: Stat[]; columns?: 3 | 4 }) {
  return (
    <div className={`grid gap-4 ${columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="glass-card p-6">
          <p className="text-[2rem] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            {stat.value}
          </p>
          <p className="mt-2 text-[0.95rem] font-medium">{stat.label}</p>
          {stat.detail && <p className="mt-1 text-[0.85rem] text-[var(--norah-text-subtle)]">{stat.detail}</p>}
        </div>
      ))}
    </div>
  );
}
