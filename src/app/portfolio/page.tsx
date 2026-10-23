import type { Metadata } from "next";
import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { SiteShell } from "@/components/layout/SiteShell";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { ProseSection } from "@/components/sections/ProseSection";
import { portfolioPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Portfolio | Evermore Events by Duvi",
  description:
    "A collection of weddings, celebrations and surprise proposals from the journey of Evermore Events by Duvi.",
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <PageHeader id="portfolio-page-heading" intro={portfolioPage.intro} />
      <ProseSection paragraphs={portfolioPage.paragraphs} />
      <HorizontalRule />

      <PhotoGallery photos={portfolioPage.gallery} />
      <HorizontalRule />

      <CtaSection />
      <HorizontalRule />
    </SiteShell>
  );
}
