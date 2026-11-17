"use client";

import { useState } from "react";
import type { NetworkCategoryView, NetworkMemberView } from "@/lib/network";

function domainOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function NetworkWall({
  members,
  categories,
}: {
  members: NetworkMemberView[];
  categories: NetworkCategoryView[];
}) {
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? members : members.filter((m) => m.category === active);

  const filters = [{ slug: "all", title: "All", count: members.length }, ...categories];

  return (
    <div>
      <div role="group" aria-label="Filter by sector" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f.slug;
          return (
            <button
              key={f.slug}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(f.slug)}
              className="network-filter"
            >
              {f.title}
              <span className="network-filter-count">{f.count}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((m, i) => (
          <li key={m.name} className="network-tile-wrap" style={{ animationDelay: `${Math.min(i, 12) * 35}ms` }}>
            <a
              href={m.website}
              target="_blank"
              rel="noopener noreferrer"
              className="network-tile group"
              aria-label={`${m.name} (opens their website in a new tab)`}
            >
              <div className="network-tile-logo">
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, images unoptimised */}
                <img src={m.logo} alt="" loading="lazy" />
              </div>
              <div className="network-tile-meta">
                <div className="min-w-0">
                  <p className="line-clamp-2 text-[15px] font-semibold leading-snug text-[var(--norah-ink)]">{m.name}</p>
                  <p className="mt-0.5 truncate text-[13px] text-[var(--norah-text-faint)]">{domainOf(m.website)}</p>
                </div>
                <span className="network-tile-arrow" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 11 11 5M6 5h5v5" />
                  </svg>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
