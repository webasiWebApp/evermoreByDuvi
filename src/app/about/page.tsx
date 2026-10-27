import type { Metadata } from "next";
import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProseSection } from "@/components/sections/ProseSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { PhotoTriptych } from "@/components/ui/PhotoTriptych";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/data/about";
import { aboutPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "About | Evermore Events by Duvi",
  description:
    "Meet Duvini Rupasinghe, the founder behind Evermore Events by Duvi, and the philosophy behind every celebration.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader id="about-page-heading" intro={aboutPage.intro} />
      <HorizontalRule />

      <div className="relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(3rem,7vw,100px)] pt-[clamp(3rem,6vw,86px)]">
        <div className="mx-auto max-w-[1057px]">
          <PhotoTriptych images={about.images} />
        </div>
      </div>

      <ProseSection
        paragraphs={aboutPage.story}
        closing={aboutPage.signOff.line}
        closingClassName="!mt-[2.5em] t-founder"
        className="!pb-[clamp(1.5rem,3vw,2.5rem)]"
      />
      <Reveal className="t-eyebrow relative z-10 pb-[clamp(3rem,7vw,100px)] text-center">
        <p>{aboutPage.signOff.signature}</p>
      </Reveal>
      <HorizontalRule />

      <section
        aria-labelledby="philosophy-heading"
        className="relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(1.5rem,3vw,3rem)] pt-[clamp(3.5rem,8vw,115px)]"
      >
        <SectionHeading
          id="philosophy-heading"
          eyebrow={aboutPage.philosophy.eyebrow}
          title="What We Believe"
          widthClass="max-w-[760px]"
        />
      </section>
      <ProseSection paragraphs={aboutPage.philosophy.paragraphs} />
      <HorizontalRule />

      <WhyUsSection />
      <HorizontalRule />

      <TeamSection />
      <HorizontalRule />

      <CtaSection />
      <HorizontalRule />
    </SiteShell>
  );
}
