import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { navLinks, hero, site } from "@/lib/content";
import { withBasePath } from "@/lib/base-path";

const legalLinks = [
  { href: "/accessibility", label: "Accessibility statement" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="!py-14" style={{ background: "var(--norah-brand)", color: "color-mix(in oklab, white 70%, transparent)" }}>
      <Container>
        <div className="mb-9 flex flex-wrap justify-between gap-8">
          <div className="max-w-[34ch]">
            <div className="inline-flex rounded-[14px] bg-white px-5 py-3.5">
              <Image src={withBasePath("/logos/norah-logo-hr.webp")} alt="NORAH" width={246} height={120} className="h-16 w-auto" />
            </div>
            <p className="mt-4 text-[0.88rem] leading-relaxed" style={{ color: "color-mix(in oklab, white 55%, transparent)" }}>
              {hero.lede}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-[0.95rem] font-semibold" style={{ color: "var(--norah-teal)" }}>
              Site
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/" className="text-[0.9rem] hover:text-white">
                Home
              </Link>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-[0.9rem] hover:text-white">
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="text-[0.9rem] hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-3 text-[0.95rem] font-semibold" style={{ color: "var(--norah-teal)" }}>
              Legal
            </h4>
            <nav className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-[0.9rem] hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-between gap-2.5 border-t pt-5 text-[0.82rem]"
          style={{ borderColor: "color-mix(in oklab, white 15%, transparent)", color: "color-mix(in oklab, white 50%, transparent)" }}
        >
          <span>
            © {new Date().getFullYear()} {site.name} · {site.fullName}.
          </span>
          <span>Funded through {site.fundingProgramme}.</span>
        </div>
      </Container>
    </footer>
  );
}
