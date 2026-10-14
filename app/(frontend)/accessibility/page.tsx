import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description: "NORAH's accessibility commitment, target standard and known limitations.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Accessibility statement" />
      <section className="band-tint">
        <Container className="max-w-2xl">
          <p className="glass-card p-5 text-[0.9rem] leading-relaxed">
            Draft. This page is a placeholder for the first version of the site and hasn&apos;t been through a
            formal accessibility audit or legal review yet.
          </p>

          <h2 className="mt-8 text-[1.2rem]">Our commitment</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--norah-text-subtle)]">
            NORAH is committed to making this website accessible, in line with WCAG 2.2 AA, as expected of a
            publicly funded UK project working with university and public-sector partners. A full accessibility
            audit is scheduled as part of the site&apos;s build programme.
          </p>

          <h2 className="mt-8 text-[1.2rem]">Known limitations</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--norah-text-subtle)]">
            This is an early version of the site. Some pages have not yet been tested with assistive technology,
            and content such as news updates will be added as the programme progresses.
          </p>

          <h2 className="mt-8 text-[1.2rem]">Feedback</h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--norah-text-subtle)]">
            If you encounter an accessibility barrier on this site, please let us know via the{" "}
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
