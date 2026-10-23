import type { Metadata } from "next";
import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { packageProcessSteps, packagesPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Packages | Evermore Events by Duvi",
  description:
    "Full wedding planning, partial planning and wedding day coordination from Evermore Events by Duvi.",
};

export default function PackagesPage() {
  const { bespoke, process } = packagesPage;
  return (
    <SiteShell>
      <PageHeader id="packages-page-heading" intro={packagesPage.intro} />
      <PackagesSection packages={packagesPage.packages} />

      <section
        aria-labelledby="bespoke-heading"
        className="relative z-10 px-[calc(var(--grid-gutter)+16px)] py-[clamp(3.5rem,8vw,115px)]"
      >
        <SectionHeading
          id="bespoke-heading"
          eyebrow={bespoke.eyebrow}
          title={bespoke.title}
          widthClass="max-w-[760px]"
        />
        <Reveal delay={0.1} className="t-body mx-auto mt-[clamp(1.5rem,3.2vw,2.75rem)] max-w-[620px] text-center">
          <p>{bespoke.body}</p>
        </Reveal>
      </section>
      <HorizontalRule />

      <ProcessSection
        intro={{ eyebrow: process.eyebrow, heading: process.heading }}
        steps={packageProcessSteps}
        closingNote={process.closingNote}
      />
      <HorizontalRule />

      <CtaSection />
      <HorizontalRule />
    </SiteShell>
  );
}
