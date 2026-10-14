import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How NORAH handles personal data collected through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy" />
      <section className="band-tint">
        <Container className="max-w-2xl">
          <p className="glass-card p-5 text-[0.9rem] leading-relaxed">
            Draft. This page is a placeholder for the first version of the site. A full privacy notice, reviewed
            against UK GDPR requirements, will replace it before the site collects personal data in production.
          </p>

          <h2 className="mt-8 text-[1.2rem]">Data residency</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--norah-text-subtle)]">
            NORAH works with public-sector and university partners, so any personal data this site collects, such
            as enquiries sent to the hub inbox, is intended to be hosted in a UK/EU region and handled under a
            data processing agreement with any third-party provider involved.
          </p>

          <h2 className="mt-8 text-[1.2rem]">Contact</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--norah-text-subtle)]">
            Questions about this notice can be raised via the{" "}
            <a href="/contact" className="font-medium" style={{ color: "var(--norah-primary)" }}>
              contact page
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
