import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { DarkPanel } from "@/components/dark-panel";
import { Button } from "@/components/button";
import { deliverySites, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "What NORAH is, why it exists and how the hub is structured.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Closing the gap between robotics that works in a lab and robotics that works on your floor"
        lead={`With a project value of ${site.projectCostPrecise}, NORAH is the UK's first dedicated waste and recycling robotics adoption hub, running for ${site.timeline}.`}
      />

      <section className="band-tint">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="Adoption, not invention, is the barrier"
            lead="Rising labour costs and more complex waste streams make robotics a critical way to improve efficiency, recover more material and grow. Yet fewer than 5% of the UK's 3,500 waste management facilities have adopted robotic systems (WRAP, 2023)."
          />
          <p className="mt-6 max-w-3xl text-[1rem] leading-relaxed text-[var(--norah-text-subtle)]">
            That low uptake is not a lack of technology. It is the heterogeneous and contaminated nature of waste
            streams, limited standardisation, and the difficulty of fitting robotics into existing infrastructure.
            Together these create high perceived risk, uncertain return on investment and limited access to real
            testing environments, holding back operators of every size.
          </p>
        </Container>
      </section>

      <section className="band-paper">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="A vendor-neutral, end-to-end route to deployment"
            lead="Unlike centres focused purely on research, the hub works as a vendor-neutral deployment service, combining hands-on testing with standardised benchmarking and real integration support across live waste streams."
          />
        </Container>
      </section>

      <section className="band-tint">
        <Container>
          <SectionHeading eyebrow="Infrastructure" title="Three sites, existing capability" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {deliverySites.map((s) => (
              <div key={s.name} className="glass-card p-6">
                <h3 className="text-[1.05rem]">{s.name}</h3>
                <p className="mt-1 text-[0.88rem] font-medium" style={{ color: "var(--norah-primary)" }}>
                  {s.facility}
                </p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-[var(--norah-text-subtle)]">{s.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="band-paper !py-0">
        <div className="full-bleed">
          <DarkPanel className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-[1.5rem]" style={{ color: "var(--norah-teal)" }}>
                See what the hub delivers
              </h2>
              <p className="mt-2 max-w-[42ch] text-[0.95rem]" style={{ color: "color-mix(in oklab, white 80%, transparent)" }}>
                Read the services and scope that sit within the adoption pathway.
              </p>
            </div>
            <Button href="/aims-objectives">Aims &amp; objectives</Button>
          </DarkPanel>
        </div>
      </section>
    </>
  );
}
