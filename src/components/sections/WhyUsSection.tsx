import Image from "next/image";
import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasonImages, reasons, reasonsIntro, type Reason, type ReasonImage } from "@/data/reasons";

type ReasonCellProps = { reason: Reason; delay: number; className?: string };

function ReasonCell({ reason, delay, className = "" }: ReasonCellProps) {
  const titleId = `${reason.id}-title`;
  return (
    <article
      aria-labelledby={titleId}
      className={`flex items-center justify-center bg-paper px-6 py-[clamp(2rem,3.3vw,3rem)] text-center transition-colors duration-[var(--motion-standard)] hover:bg-paper-warm sm:px-8 lg:min-h-[clamp(240px,19vw,300px)] lg:px-[clamp(1.5rem,2.5vw,2.5rem)] ${className}`}
    >
      <Reveal delay={delay} className="max-w-[320px]">
        <span aria-hidden className="font-display text-[20px] leading-none text-muted line-through">
          {reason.numeral}
        </span>
        <h3 id={titleId} className="t-reason-title mt-4">
          {reason.title}
        </h3>
        <p className="t-body mt-3">{reason.description}</p>
      </Reveal>
    </article>
  );
}

type PhotoCellProps = { image: ReasonImage; sizes: string; delay?: number; className?: string };

function PhotoCell({ image, sizes, delay = 0, className = "" }: PhotoCellProps) {
  return (
    <div className={`group relative overflow-hidden bg-paper ${className}`}>
      <ImageReveal delay={delay} className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[var(--motion-cinematic)] ease-out group-hover:scale-105"
          style={{ objectPosition: image.position }}
        />
      </ImageReveal>
    </div>
  );
}

/**
 * Hairline grid set between the two page rules; the 1px gaps over a line-coloured
 * background are the dividers.
 * lg: three columns, the feature photo spans the centre of rows 1–2 and point v
 * sits beneath it between two photos. sm: two columns, the feature photo beside
 * points i–ii. Base: feature photo on top, points stacked.
 */
export function WhyUsSection() {
  const [first, second, third, fourth, fifth] = reasons;

  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="relative z-10">
      <div className="px-[calc(var(--grid-gutter)+16px)] pb-[clamp(2rem,4vw,58px)] pt-[clamp(3rem,6vw,86px)]">
        <SectionHeading
          id="why-us-heading"
          eyebrow={reasonsIntro.eyebrow}
          title={
            <>
              A Personal Approach{" "}
              <span className="font-script text-[0.8em] text-muted">to</span>{" "}
              <span className="whitespace-nowrap">Every Celebration</span>
            </>
          }
          widthClass="max-w-[760px]"
        />
      </div>

      <HorizontalRule />

      <div className="mx-[calc(var(--grid-gutter)+1px)] grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        <ReasonCell reason={first} delay={0} />
        <PhotoCell
          image={reasonImages.feature}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          delay={0.1}
          className="order-first aspect-[4/5] sm:order-none sm:row-span-2 sm:aspect-auto"
        />
        <ReasonCell reason={second} delay={0.2} />
        <ReasonCell reason={third} delay={0} />
        <ReasonCell reason={fourth} delay={0.2} />
        <PhotoCell image={reasonImages.left} sizes="33vw" className="hidden lg:block" />
        <ReasonCell reason={fifth} delay={0.1} className="sm:col-span-2 lg:col-span-1" />
        <PhotoCell image={reasonImages.right} sizes="33vw" delay={0.2} className="hidden lg:block" />
      </div>
    </section>
  );
}
