import type { Metadata } from "next";
import { Container } from "@/components/container";
import { AudienceCards } from "@/components/audience-cards";
import { DarkPanel } from "@/components/dark-panel";
import { HeroBackground } from "@/components/hero-background";
import { audiences, enquiryDetails, hubSites, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with the NORAH hub team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="band-hero relative isolate overflow-hidden !pb-8 !pt-14 sm:!pt-16">
        <HeroBackground size={400} top={-100} right={-100} opacity={0.05} />
        <Container>
          <span className="eyebrow enter-fade">Contact</span>
          <h1 className="enter-fade mt-2.5 max-w-xl text-[2.25rem] sm:text-[2.75rem]">Start a conversation with the hub.</h1>
          <p className="enter-fade mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-[var(--norah-text-subtle)]">
            Whether you&apos;re exploring robotics for the first time or ready to deploy at scale, the hub team can
            help you find the right stage of the pathway.
          </p>
        </Container>
      </section>

      <section className="band-tint">
        <Container>
          <AudienceCards audiences={audiences} />
        </Container>
      </section>

      <section className="band-paper !pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <DarkPanel>
              <h3 className="text-[1.3rem] text-white">Enquiries</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed" style={{ color: "color-mix(in oklab, white 80%, transparent)" }}>
                For pathway assessments, funded support and general enquiries, email the hub team and we&apos;ll
                direct you to the right site and service.
              </p>
              <a
                href={`mailto:${site.contactEmail}`}
                className="btn mt-5 inline-flex"
                style={{ background: "var(--norah-highlight)", color: "var(--norah-brand-deep)" }}
              >
                {site.contactEmail}
              </a>
              <dl className="mt-7 space-y-3 border-t border-white/15 pt-5">
                {enquiryDetails.map((d) => (
                  <div key={d.label} className="flex items-center justify-between border-b border-white/10 pb-3 text-[0.92rem]">
                    <dt style={{ color: "color-mix(in oklab, white 70%, transparent)" }}>{d.label}</dt>
                    <dd className="font-medium text-white">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </DarkPanel>

            <div className="glass-card p-8 sm:p-10">
              <h3 className="text-[1.3rem]">Hub sites</h3>
              <ul className="mt-5 space-y-4">
                {hubSites.map((s) => (
                  <li key={s.name} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--norah-primary)" }} />
                    <span>
                      <span className="block font-medium">{s.name}</span>
                      <span className="text-[0.92rem] text-[var(--norah-text-subtle)]">{s.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
