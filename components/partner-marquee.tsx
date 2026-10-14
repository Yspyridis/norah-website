import Image from "next/image";
import { getPartnersWithLogos } from "@/lib/partners";

function LogoRow({
  partners,
  hidden = false,
}: {
  partners: { name: string; logo?: string }[];
  hidden?: boolean;
}) {
  return (
    <div className={`flex shrink-0 items-center gap-4 ${hidden ? "marquee-dup" : ""}`} aria-hidden={hidden || undefined}>
      {partners.map((p, i) => (
        <div
          key={`${p.name}-${i}`}
          className="glass-card flex h-[74px] w-[176px] shrink-0 items-center justify-center px-5"
        >
          <Image
            src={p.logo!}
            alt={hidden ? "" : `${p.name} logo`}
            width={130}
            height={40}
            className="max-h-9 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export async function PartnerMarquee() {
  const partners = await getPartnersWithLogos();

  if (partners.length === 0) return null;

  return (
    <div className="marquee-wrap relative overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-4">
        <LogoRow partners={partners} />
        <LogoRow partners={partners} hidden />
      </div>
    </div>
  );
}
