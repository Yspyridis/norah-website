import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { StatGrid } from "@/components/stat-grid";
import { DarkPanel } from "@/components/dark-panel";
import { Button } from "@/components/button";
import { outcomeStats, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Outcomes",
  description: "NORAH's targets for organisations engaged, robotics deployments, and measured productivity and material recovery gains.",
};

export default function OutcomesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Targets"
        title="Measured, conservative targets by 2030"
        lead={`By ${site.targetDate}, the hub will engage more than 150 organisations across the UK waste ecosystem through training, testbeds and advisory services.`}
      />

      <section className="band-tint">
        <Container>
          <StatGrid stats={outcomeStats} columns={3} />
        </Container>
      </section>

      <section className="band-paper">
        <Container>
          <SectionHeading
            eyebrow="How targets are set"
            title="60 to 80 operators progressing, 30 to 40% converting to deployment"
            lead="Direct funded support goes to 20 to 30 end-user organisations, progressing a subset through demonstration and integration, including multiple deployments per operator site, to deliver 40 or more operational robotics deployments."
          />
          <p className="mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-[var(--norah-text-subtle)]">
            Each deployment targets a 20 to 30% productivity uplift, a 5 to 15% improvement in material recovery,
            and a payback period under 24 months. These figures come from independent, vendor-neutral benchmarking
            rather than vendor-supplied claims, creating a scalable model for adoption across the UK&apos;s 3,500
            waste management facilities.
          </p>
          <p className="glass-card mt-8 p-5 text-[0.88rem] leading-relaxed text-[var(--norah-text-subtle)]">
            Results are updated here as deployments complete. No live outcome data has been published yet. These
            are the project&apos;s funded targets, not achieved results.
          </p>
        </Container>
      </section>

      <section className="band-tint !py-0">
        <div className="full-bleed">
          <DarkPanel className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-[1.5rem]" style={{ color: "var(--norah-teal)" }}>
                See how your deployment could perform
              </h2>
              <p className="mt-2 max-w-[42ch] text-[0.95rem]" style={{ color: "color-mix(in oklab, white 80%, transparent)" }}>
                Start an assessment to get a facility-specific investment case.
              </p>
            </div>
            <Button href="/contact">Get in touch</Button>
          </DarkPanel>
        </div>
      </section>
    </>
  );
}
