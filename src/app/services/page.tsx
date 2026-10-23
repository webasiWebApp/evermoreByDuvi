import type { Metadata } from "next";
import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { SiteShell } from "@/components/layout/SiteShell";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceShowcase } from "@/components/sections/ServiceShowcase";
import { servicesPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Services | Evermore Events by Duvi",
  description:
    "Wedding planning, coordination, destination weddings, surprise proposals and special events.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHeader id="services-page-heading" intro={servicesPage.intro} />
      <HorizontalRule />

      <ServiceShowcase
        id="wedding-services"
        intro={servicesPage.weddings.intro}
        services={servicesPage.weddings.items}
      />
      <HorizontalRule />

      <ServiceShowcase
        id="beyond-weddings"
        intro={servicesPage.beyond.intro}
        services={servicesPage.beyond.items}
      />
      <HorizontalRule />

      <CtaSection />
      <HorizontalRule />
    </SiteShell>
  );
}
