import { glanceStats } from "@/lib/content";

export function HeroGlance() {
  return (
    <div className="hero-stats">
      {glanceStats.map((s) => (
        <div key={s.label} className="hero-stat-cell">
          <div className="hero-stat-value">{s.value}</div>
          <div className="hero-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
