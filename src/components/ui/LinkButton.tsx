import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Underlined text link-button (Montserrat Semibold, uppercase). */
export function LinkButton({ href, children, className = "" }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`t-button inline-block py-3 transition-opacity duration-[var(--motion-fast)] hover:opacity-70 ${className}`}
    >
      {children}
    </Link>
  );
}
