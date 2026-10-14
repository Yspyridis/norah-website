import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { PartnerLogoGrid } from "@/components/partner-logo-grid";
import { DarkPanel } from "@/components/dark-panel";
import { Button } from "@/components/button";
import { getGroupedPartners } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partners",
  description: "The universities, robotics developers, national bodies and local authorities delivering NORAH.",
};

export default async function PartnersPage() {
  const partnerGroups = await getGroupedPartners();

  return (
    <>
      <PageHeader
        eyebrow="Consortium & partners"
        title="A national network across academia, industry and local government"
        lead="Universities, robotics developers, waste operators, national bodies and local authorities, brought together to give you immediate access to live deployment environments and established industry networks."
      />

      {partnerGroups.map((group, i) => (
        <section key={group.title} className={i % 2 === 0 ? "band-tint" : "band-paper"}>
          <Container>
            <SectionHeading title={group.title} lead={group.description} />
            <div className="mt-8">
              <PartnerLogoGrid group={group} />
            </div>
          </Container>
        </section>
      ))}

      <section className="band-tint !py-0">
        <div className="full-bleed">
          <DarkPanel className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-[1.5rem]" style={{ color: "var(--norah-teal)" }}>
                Want to join the network?
              </h2>
              <p className="mt-2 max-w-[42ch] text-[0.95rem]" style={{ color: "color-mix(in oklab, white 80%, transparent)" }}>
                Talk to the hub about becoming a delivery, technology or local authority partner.
              </p>
            </div>
            <Button href="/contact">Get in touch</Button>
          </DarkPanel>
        </div>
      </section>
    </>
  );
}
