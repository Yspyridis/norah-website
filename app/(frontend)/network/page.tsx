import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { NetworkWall } from "@/components/network-wall";
import { getNetwork } from "@/lib/network";

export const metadata: Metadata = {
  title: "Network",
  description: "The operators, technology firms, industry bodies, public sector organisations and researchers working with NORAH.",
};

export default function NetworkPage() {
  const { members, categories } = getNetwork();

  return (
    <>
      <PageHeader
        eyebrow="Collaborators & supporters"
        title="Our network"
        lead="Organisations we work with on pilots, introductions, data and expertise, helping move robotics from the lab into real recycling and waste operations."
      />

      <section className="band-paper">
        <Container>
          {members.length === 0 ? (
            <p className="max-w-[56ch] text-[0.98rem] text-[var(--norah-text-subtle)]">
              Our network is growing. Organisations will be listed here soon.
            </p>
          ) : (
            <>
              <p className="mb-6 text-[0.95rem] text-[var(--norah-text-subtle)]">
                <span className="text-[1.6rem] font-semibold text-[var(--norah-brand)]">{members.length}</span>{" "}
                organisations across {categories.length} {categories.length === 1 ? "sector" : "sectors"}
              </p>
              <NetworkWall members={members} categories={categories} />
            </>
          )}
        </Container>
      </section>

      <section className="band-tint">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-[1.6rem]">Want to work with the hub?</h2>
              <p className="mt-2 max-w-[46ch] text-[0.98rem] text-[var(--norah-text-subtle)]">
                Whether you run a site, build robotics or represent your sector, we&apos;d like to hear from you.
              </p>
            </div>
            <Button href="/contact">Get in touch</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
