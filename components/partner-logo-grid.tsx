import Image from "next/image";
import type { PartnerGroupView } from "@/lib/partners";

export function PartnerLogoGrid({ group }: { group: PartnerGroupView }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {group.partners.map((partner) => (
        <div key={partner.name} className="glass-card flex flex-col p-6">
          <div className="flex h-16 items-center">
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={160}
                height={56}
                className="max-h-14 w-auto object-contain"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full text-[15px] font-semibold"
                style={{ background: "color-mix(in oklab, var(--norah-teal) 25%, transparent)", color: "var(--norah-brand-deep)" }}
              >
                {partner.name
                  .split(" ")
                  .filter((w) => w[0] === w[0]?.toUpperCase() && /[A-Za-z]/.test(w[0]))
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </span>
            )}
          </div>
          <h3 className="mt-4 text-[15px] font-semibold">{partner.name}</h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--norah-text-subtle)]">{partner.description}</p>
        </div>
      ))}
    </div>
  );
}
