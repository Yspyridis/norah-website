import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { Button } from "./button";
import { navLinks } from "@/lib/content";
import { MobileNav } from "./mobile-nav";
import { withBasePath } from "@/lib/base-path";

export function Header() {
  return (
    <div className="sticky top-0 z-40 flex justify-center pt-4 pb-6">
      <Container className="!px-0 lg:!px-6">
        <header
          className="mx-4 flex items-stretch overflow-hidden rounded-full lg:mx-0"
          style={{
            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.14), inset 0 0 0 1px rgba(8,58,71,0.1), 0 16px 34px -16px rgba(8,58,71,0.55)",
          }}
        >
          <Link href="/" aria-label="NORAH home" className="flex shrink-0 items-center bg-white px-3.5">
            <Image src={withBasePath("/logos/norah-mark.webp")} alt="NORAH" width={172} height={170} className="h-10 w-auto" />
          </Link>

          <div
            className="flex items-center justify-between gap-4 py-2.5 pl-5 pr-2.5"
            style={{
              background: "color-mix(in oklab, var(--norah-brand) 94%, transparent)",
              backdropFilter: "blur(18px) saturate(1.4)",
              WebkitBackdropFilter: "blur(18px) saturate(1.4)",
            }}
          >
            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
              <Link href="/" className="text-[0.88rem] font-medium text-white/75 hover:text-white">
                Home
              </Link>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-[0.88rem] font-medium text-white/75 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button
                href="/contact"
                className="!bg-[var(--norah-teal)] !text-[var(--norah-brand-deep)] hover:!bg-white"
              >
                Enquire
              </Button>
            </div>

            <div className="ml-auto lg:ml-0">
              <MobileNav />
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
}
