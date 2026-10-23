import Image from "next/image";
import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceImageSize, type Service } from "@/data/services";

type ServiceShowcaseProps = {
  id: string;
  intro: { eyebrow: string; heading: string; subtitle?: string };
  services: readonly Service[];
};

/**
 * Services as alternating rows: image left / text right, then text left / image
 * right. Rows stack on small screens with the image first.
 */
export function ServiceShowcase({ id, intro, services }: ServiceShowcaseProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="relative z-10">
      <div className="px-[calc(var(--grid-gutter)+16px)] pb-[clamp(2.5rem,5vw,72px)] pt-[clamp(3.5rem,8vw,115px)]">
        <SectionHeading
          id={`${id}-heading`}
          eyebrow={intro.eyebrow}
          title={intro.heading}
          subtitle={intro.subtitle}
          widthClass="max-w-[800px]"
        />
      </div>

      <ul>
        {services.map((service, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <li key={service.id}>
              <HorizontalRule />
              <article
                aria-labelledby={`${service.id}-title`}
                className="mx-auto grid max-w-[1060px] items-center gap-8 px-[calc(var(--grid-gutter)+16px)] py-[clamp(2.5rem,5vw,72px)] lg:grid-cols-2 lg:gap-x-[clamp(2rem,4.9vw,71px)] lg:px-0"
              >
                <div className={imageFirst ? "" : "lg:order-2"}>
                  <div className="relative mx-auto aspect-[451/677] w-full max-w-[451px] overflow-hidden">
                    <ImageReveal className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        width={serviceImageSize.width}
                        height={serviceImageSize.height}
                        sizes="(min-width: 1024px) 451px, 100vw"
                        className="h-full w-full object-cover"
                      />
                    </ImageReveal>
                  </div>
                </div>

                <Reveal className={`max-w-[455px] ${imageFirst ? "" : "lg:order-1 lg:justify-self-end"}`}>
                  <h3 id={`${service.id}-title`} className="t-service-title">
                    {service.title}
                  </h3>
                  <p className="t-body mt-[clamp(1rem,2.2vw,2rem)]">{service.description}</p>
                  <LinkButton href="/contact" className="mt-4 !font-normal">
                    Enquire
                  </LinkButton>
                </Reveal>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
