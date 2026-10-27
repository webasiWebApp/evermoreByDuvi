import Image from "next/image";
import { LinkButton } from "@/components/ui/LinkButton";
import { cta } from "@/data/cta";

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative z-10 px-[calc(var(--grid-gutter)+clamp(12px,2.5vw,36px))] py-[clamp(3rem,6vw,88px)]"
    >
      <div className="relative mx-auto flex min-h-[460px] max-w-[1109px] items-center justify-center overflow-hidden text-center text-white md:aspect-[1109/507] md:min-h-0">
        <Image
          src={cta.image}
          alt={cta.alt}
          fill
          sizes="(min-width: 1280px) 1109px, 90vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-black/70" />
        <div className="relative px-5 py-14 md:px-10 md:py-16">
          <p className="t-cta-eyebrow">{cta.eyebrow}</p>
          <h2 id="cta-heading" className="t-cta-heading mx-auto mt-[0.75em] max-w-[960px]">
            {cta.heading}
          </h2>
          <p className="t-cta-body mx-auto mt-[1.75em] max-w-[900px]">{cta.body}</p>
          <div className="mt-[clamp(1.75rem,3vw,2.5rem)] flex justify-center">
            <LinkButton href={cta.action.href} className="text-[14px] font-normal">
              {cta.action.label}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
