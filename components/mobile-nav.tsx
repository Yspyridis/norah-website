"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-full text-white"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {open ? (
            <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path
              d="M3 5.5H17M3 10H17M3 14.5H17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {open && (
        <div
          className="absolute inset-x-0 top-full px-5 py-4"
          style={{
            background: "color-mix(in oklab, var(--norah-ink) 97%, transparent)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        >
          <nav className="flex flex-col gap-1" aria-label="Primary">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-[16px] font-medium text-white/80 hover:bg-white/10 hover:text-white"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-[16px] font-medium text-white/80 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg px-2 py-3 text-[16px] font-semibold"
              style={{ color: "var(--norah-teal)" }}
            >
              Enquire
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
