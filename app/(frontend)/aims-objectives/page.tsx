import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCards } from "@/components/service-cards";
import { DarkPanel } from "@/components/dark-panel";
import { Button } from "@/components/button";
import { services, scopeDeliverables, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aims & Objectives",
  description: "The services NORAH delivers across the adoption pathway, and how the hub's scope maps to the Robotics Adoption Hub competition.",
};

export default function AimsObjectivesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aims & objectives"
        title="Services across the adoption journey"
        lead="Practical, hands-on support for councils, operators and robotics vendors working together, structured around the five-stage pathway."
      />

      <section className="band-tint">
        <Container>
          <ServiceCards services={services} columns={3} />
        </Container>
      </section>

      <section className="band-paper">
        <Container>
          <SectionHeading eyebrow="Scope" title="In line with the Robotics Adoption Hub competition" />
          <ol className="mt-8 grid gap-3">
            {scopeDeliverables.map((item, i) => (
              <li key={item} className="flex gap-4 border-b border-[var(--norah-border)] pb-4 last:border-0">
                <span className="text-[0.95rem] font-semibold" style={{ color: "var(--norah-primary)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.95rem] leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-[0.9rem] leading-relaxed text-[var(--norah-text-faint)]">
            NORAH operates within the National Robotics Adoption Hub network, working with the Central Convening
            Body to triage enquiries, share lessons learned, co-develop adoption resources and contribute to
            coordinated national activity, funded through {site.fundingProgramme}.
          </p>
        </Container>
      </section>

      <section className="band-tint !py-0">
        <div className="full-bleed">
          <DarkPanel className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-[1.5rem]" style={{ color: "var(--norah-teal)" }}>
                Ready to start your assessment?
              </h2>
              <p className="mt-2 max-w-[42ch] text-[0.95rem]" style={{ color: "color-mix(in oklab, white 80%, transparent)" }}>
                Tell the hub team about your facility or your system, and we&apos;ll place you on the pathway.
              </p>
            </div>
            <Button href="/contact">Get in touch</Button>
          </DarkPanel>
        </div>
      </section>
    </>
  );
}
