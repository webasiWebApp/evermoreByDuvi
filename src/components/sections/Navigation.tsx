"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { logo, navLinks, type NavLink } from "@/data/navigation";

const DELTA = 6;

function NavList({ links, className }: { links: readonly NavLink[]; className?: string }) {
  return (
    <ul className={`items-center gap-[clamp(24px,3.75vw,54px)] ${className ?? ""}`}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="t-nav inline-block py-3 transition-opacity duration-[var(--motion-fast)] hover:opacity-60"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Navigation() {
  const [scrolledAway, setScrolledAway] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) < DELTA) return;
      setScrolledAway(delta > 0 && y > 120);
      lastY = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const hidden = scrolledAway && !menuOpen;
  const left = navLinks.slice(0, 3);
  const right = navLinks.slice(3);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-paper transition-transform duration-[var(--motion-standard)] ease-out focus-within:translate-y-0 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ height: "var(--nav-h)" }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-px bg-line"
        style={{ left: "var(--grid-gutter)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-px bg-line"
        style={{ right: "var(--grid-gutter)" }}
      />

      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-full max-w-[var(--content-max)] items-center justify-between px-[calc(var(--grid-gutter)+16px)] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-0"
      >
        <NavList links={left} className="hidden lg:flex lg:justify-end lg:pr-[4.7vw]" />

        <Link href="/" aria-label="Evermore Events, back to top" className="block shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="h-auto w-[112px] lg:w-[165px]"
          />
        </Link>

        <NavList links={right} className="hidden lg:flex lg:justify-start lg:pl-[3.6vw]" />

        <button
          type="button"
          className="t-nav -mr-2 inline-flex h-11 min-w-11 items-center justify-center px-2 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full border-b border-line bg-paper lg:hidden"
      >
        <ul className="flex flex-col px-[calc(var(--grid-gutter)+16px)] py-3">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-line last:border-b-0">
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="t-nav block py-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
