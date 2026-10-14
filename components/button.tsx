import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function Button({ href, variant = "primary", className = "", children, ...rest }: ButtonProps) {
  return (
    <Link href={href} className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
