import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { HeroGlance } from "@/components/hero-glance";
import { Pathway } from "@/components/pathway";
import { ServiceCards } from "@/components/service-cards";
import { PartnerMarquee } from "@/components/partner-marquee";
import { HeroPhotoRings } from "@/components/hero-photo-rings";
import { hero, pathwayIntro, services, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="band-hero relative isolate overflow-hidden !pb-16 !pt-14 sm:!pt-20">
        <HeroPhotoRings />
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <span className="hero-badge-dark enter-fade mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.82rem] font-medium">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--norah-teal)" }} />
                {site.heroBadge}
              </span>
              <h1 className="hero-title enter-fade">{hero.title}</h1>
              <p className="enter-fade mt-5 max-w-[52ch] text-[1.1rem] leading-relaxed text-[var(--norah-text-subtle)]">
                {hero.lede}
              </p>
              <div className="enter-fade mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="hero-btn-primary">
                  Explore the pathway
                  <span className="hero-btn-chip">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17 17 7M17 7H9M17 7v8" />
                    </svg>
                  </span>
                </Link>
                <Link href="/about" className="hero-btn-secondary">
                  About the hub
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <HeroGlance />
            </div>
          </div>
        </Container>
      </section>

      <section className="band-tint !py-28">
        <Container>
          <span className="eyebrow">The adoption pathway</span>
          <h2 className="mt-2.5 max-w-2xl text-[1.875rem]">Five stages from first assessment to national scale.</h2>
          <div className="mt-10">
            <Pathway />
          </div>
          <p className="mt-8 max-w-2xl text-[1rem] leading-relaxed" style={{ color: "var(--norah-teal)" }}>
            {pathwayIntro}
          </p>
        </Container>
      </section>

      <section className="band-paper">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-[1.875rem]">Services across the adoption journey</h2>
              <p className="mt-3 text-[1rem] leading-relaxed text-[var(--norah-text-subtle)]">
                Practical, hands-on support for councils, operators and robotics vendors working together.
              </p>
              <Link href="/aims-objectives" className="mt-4 inline-block font-medium" style={{ color: "var(--norah-primary)" }}>
                See aims &amp; objectives →
              </Link>
            </div>
            <div className="lg:col-span-8">
              <ServiceCards services={services.slice(0, 4)} />
            </div>
          </div>
        </Container>
      </section>

      <section className="band-tint">
        <Container>
          <span className="eyebrow">Consortium &amp; partners</span>
          <h2 className="mt-2.5 max-w-xl text-[1.875rem]">A national network across academia, industry and local government.</h2>
        </Container>
        <div className="mt-8">
          <PartnerMarquee />
        </div>
        <Container>
          <Link href="/partners" className="mt-6 inline-block font-medium" style={{ color: "var(--norah-primary)" }}>
            See all partners →
          </Link>
        </Container>
      </section>

      <section className="band-paper">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-[1.6rem]">Ready to find your stage on the pathway?</h2>
              <p className="mt-2 max-w-[46ch] text-[0.98rem] text-[var(--norah-text-subtle)]">
                Tell the hub team about your facility or your system, and we&apos;ll point you to the right service.
              </p>
            </div>
            <Button href="/contact">Enquire now</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
