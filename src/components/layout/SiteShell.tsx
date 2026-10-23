import type { ReactNode } from "react";
import { PageGrid } from "@/components/layout/PageGrid";
import { LetsBeginSection } from "@/components/sections/LetsBeginSection";
import { Navigation } from "@/components/sections/Navigation";
import { SiteFooter } from "@/components/sections/SiteFooter";

/** Shared frame for inner pages: nav, page grid, closing inquiry form and footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main id="top" className="relative flex-1 pt-[var(--nav-h)]">
        <PageGrid />
        {children}
      </main>
      <LetsBeginSection />
      <SiteFooter />
    </>
  );
}
