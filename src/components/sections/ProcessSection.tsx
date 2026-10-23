import Image from "next/image";
import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processIntro, processSteps, type ProcessStep } from "@/data/process";

function ProcessCard({ step }: { step: ProcessStep }) {
  return (
    <article className="group relative mx-auto aspect-[234/334] w-full max-w-none overflow-hidden sm:max-w-[234px] text-center text-white transition-[transform,box-shadow] duration-[var(--motion-standard)] ease-out hover:-translate-y-2 hover:shadow-[0_18px_36px_-12px_rgba(0,0,0,0.35)]">
      <Image
        src={step.image}
        alt={step.alt}
        fill
        sizes="(min-width: 1024px) 234px, (min-width: 640px) 234px, 100vw"
        className="object-cover transition-transform duration-[var(--motion-cinematic)] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/10 transition-colors duration-[var(--motion-standard)] group-hover:bg-black/40" />
      <div className="relative flex h-full flex-col items-center px-3 pb-5 pt-[13%]">
        <span
          aria-hidden
          className="font-display text-[20px] leading-none line-through transition-transform duration-[var(--motion-standard)] ease-out group-hover:scale-125"
        >
          {step.numeral}
        </span>
        <div className="mt-auto transition-transform duration-[var(--motion-standard)] ease-out group-hover:-translate-y-1">
          <h3 className="t-process-title">
            <span className="sr-only">Step {step.numeral}: </span>
            {step.title}
          </h3>
          <p className="t-process-body mt-2">{step.description}</p>
        </div>
      </div>
    </article>
  );
}

type ProcessSectionProps = {
  intro?: { eyebrow: string; heading: string; subtitle?: string };
  steps?: readonly ProcessStep[];
  /** Optional line set beneath the steps. */
  closingNote?: string;
};

export function ProcessSection({
  intro = processIntro,
  steps = processSteps,
  closingNote,
}: ProcessSectionProps) {
  const five = steps.length === 5;
  return (
    <section id="process" aria-labelledby="process-heading" className="relative z-10">
      <div className="px-[calc(var(--grid-gutter)+16px)] pb-[clamp(3.5rem,7.4vw,106px)] pt-[clamp(3.5rem,8vw,115px)]">
        <SectionHeading
          id="process-heading"
          eyebrow={intro.eyebrow}
          title={intro.heading}
          subtitle={intro.subtitle}
          widthClass="max-w-[800px]"
        />
      </div>

      <HorizontalRule />

      <div className="relative py-[clamp(2rem,4.2vw,61px)]">
        <ul
          className={`mx-auto grid grid-cols-1 gap-8 px-[var(--grid-gutter)] sm:grid-cols-2 sm:px-6 md:px-0 lg:gap-0 ${
            five ? "max-w-[1170px] lg:grid-cols-5" : "max-w-[1040px] lg:grid-cols-4"
          }`}
        >
          {steps.map((step, i) => (
            <li key={step.id} className="relative lg:px-3">
              {i > 0 ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-[calc(-1*clamp(2rem,4.2vw,61px))] left-0 hidden w-px bg-line lg:block"
                />
              ) : null}
              <Reveal delay={i * 0.14} distance={48} duration={1.1}>
                <ProcessCard step={step} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <HorizontalRule />

      {closingNote ? (
        <p className="t-body px-[calc(var(--grid-gutter)+16px)] py-[clamp(2rem,4vw,58px)] text-center">
          {closingNote}
        </p>
      ) : null}
    </section>
  );
}
