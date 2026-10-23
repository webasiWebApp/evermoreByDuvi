import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { PageGrid } from "@/components/layout/PageGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { EditorialStatement } from "@/components/sections/EditorialStatement";
import { FaqSection } from "@/components/sections/FaqSection";
import { FullImageSection } from "@/components/sections/FullImageSection";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { LetsBeginSection } from "@/components/sections/LetsBeginSection";
import { Navigation } from "@/components/sections/Navigation";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ScatteredGallery } from "@/components/sections/ScatteredGallery";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { statementOne, statementTwo } from "@/data/statements";

/*
 * Section order follows DESIGN.md §7. The reference (Home.png) shows no
 * full-width black section between Portfolio and About, so none is rendered;
 * the black area at the foot of the page is the "Let's begin" section.
 */
export default function Home() {
  return (
    <>
      <Navigation />
      <main id="top" className="relative flex-1 pt-[var(--nav-h)]">
        <PageGrid />

        <HeroCarousel />
        <HorizontalRule />

        <EditorialStatement
          text={statementOne}
          widthClass="max-w-[1100px]"
          paddingClass="py-[clamp(3.5rem,6.3vw,90px)]"
        />
        <HorizontalRule />

        <PortfolioSection />
        <HorizontalRule />

        <AboutSection />
        <HorizontalRule />

        <div className="relative z-10 py-[clamp(1.25rem,2.1vw,30px)]">
          <FullImageSection
            src="/images/full-1.webp"
            alt="A bride and groom embracing beside a wall of framed prints"
            position="70% 50%"
          />
        </div>
        <HorizontalRule />

        <ServicesSection />
        <HorizontalRule />

        <ScatteredGallery />
        <HorizontalRule />

        <EditorialStatement
          text={statementTwo}
          uppercase
          widthClass="max-w-[820px]"
          paddingClass="py-[clamp(3.5rem,10.4vw,150px)]"
        />
        <HorizontalRule />

        <div className="relative z-10 py-[clamp(1.25rem,2.8vw,40px)]">
          <FullImageSection
            src="/images/full-2.webp"
            alt="A couple walking hand in hand beside an infinity pool with a pavilion and misty mountains"
            position="30% 55%"
          />
        </div>
        <HorizontalRule />

        <ProcessSection />
        <WhyUsSection />
        <HorizontalRule />

        <FaqSection />
        <HorizontalRule />

        <CtaSection />
        <HorizontalRule />
      </main>

      <LetsBeginSection />
      <SiteFooter />
    </>
  );
}
