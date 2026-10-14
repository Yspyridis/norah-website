import { Container } from "./container";
import { HeroBackground } from "./hero-background";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="band-hero relative isolate overflow-hidden !py-14 sm:!py-16">
      <HeroBackground size={360} top={-90} right={-80} opacity={0.05} />
      <Container>
        <span className="eyebrow enter-fade">{eyebrow}</span>
        <h1 className="enter-fade mt-2.5 max-w-2xl text-[2.25rem] sm:text-[2.75rem]">{title}</h1>
        {lead && (
          <p className="enter-fade mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-[var(--norah-text-subtle)]">
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
