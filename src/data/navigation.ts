export type NavLink = { label: string; href: string };

export const logo = {
  src: "/images/logo.png",
  alt: "Evermore Events",
  width: 165,
  height: 70,
} as const;

/** Six links, split 3 / 3 around the centred logo on desktop. */
export const navLinks: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Service", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];
