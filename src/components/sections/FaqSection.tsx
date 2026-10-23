import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqIntro } from "@/data/faq";
import { FaqAccordion } from "./FaqAccordion";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(3rem,6.5vw,95px)] pt-[clamp(3.5rem,9.2vw,132px)]"
    >
      <SectionHeading
        id="faq-heading"
        eyebrow={faqIntro.eyebrow}
        title={faqIntro.heading}
        subtitle={faqIntro.subtitle}
        widthClass="max-w-[780px]"
      />
      <div className="mx-auto mt-[clamp(2rem,4.5vw,64px)] max-w-[803px]">
        <FaqAccordion />
      </div>
    </section>
  );
}
