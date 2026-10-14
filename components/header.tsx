"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { Button } from "./button";
import { navLinks } from "@/lib/content";
import { MobileNav } from "./mobile-nav";
import { withBasePath } from "@/lib/base-path";

const allLinks = [{ href: "/", label: "Home" }, ...navLinks];

export function Header() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 flex justify-center pt-4 pb-6">
      <Container className="!px-0 lg:!px-6">
        <header
          className="mx-4 flex items-center gap-5 rounded-full py-2.5 pl-4 pr-2.5 lg:mx-0"
          style={{
            background: "color-mix(in oklab, var(--norah-brand) 94%, transparent)",
            backdropFilter: "blur(18px) saturate(1.4)",
            WebkitBackdropFilter: "blur(18px) saturate(1.4)",
            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.14), inset 0 0 0 1px rgba(8,58,71,0.1), 0 16px 34px -16px rgba(8,58,71,0.55)",
          }}
        >
          <Link href="/" aria-label="NORAH home" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white">
              <Image
                src={withBasePath("/logos/norah-mark.webp")}
                alt=""
                width={172}
                height={170}
                className="h-[21px] w-[21px] object-contain"
              />
            </span>
            <span className="text-[1rem] font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
              NORAH
            </span>
          </Link>

          <div className="flex flex-1 items-center justify-between gap-4">
            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
              {allLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative pb-[5px] text-[0.88rem] font-medium"
                    style={{ color: isActive ? "var(--norah-white)" : "rgba(255,255,255,0.72)" }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute inset-x-0 bottom-0 h-[2px] rounded-full"
                        style={{ background: "var(--norah-teal)" }}
                      />
                    )}
                  </Link>
                );
              })}
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
