import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioIntro } from "@/data/portfolio";
import { PortfolioCarousel } from "./PortfolioCarousel";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(2.5rem,5.5vw,5rem)] pt-[clamp(4rem,11.8vw,170px)]"
    >
      <SectionHeading
        id="portfolio-heading"
        eyebrow={portfolioIntro.eyebrow}
        title={
          <>
            A Collection{" "}
            <span className="font-script text-[0.8em] text-muted">of</span> Moments &amp; Memories
          </>
        }
        subtitle={portfolioIntro.subtitle}
        widthClass="max-w-[760px]"
      />

      <div className="mt-[clamp(1.5rem,3.3vw,3rem)]">
        <PortfolioCarousel />
      </div>

      <div className="mt-[clamp(1.5rem,3.5vw,3.25rem)] text-center">
        <LinkButton href={portfolioIntro.cta.href} className="!font-normal">
          {portfolioIntro.cta.label}
        </LinkButton>
      </div>
    </section>
  );
}
