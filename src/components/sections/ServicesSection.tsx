"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  serviceImageSize,
  services as defaultServices,
  servicesIntro as defaultIntro,
  type Service,
} from "@/data/services";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const PIN_TOP = 110;

/**
 * Desktop: GSAP ScrollTrigger pins the left image while the right-hand panels
 * scroll past; the panel nearest the viewport centre drives the active image.
 * Below lg the layout stacks and every panel carries its own image.
 * Reduced motion keeps the same layout but uses CSS sticky and no transitions.
 */
type ServicesSectionProps = {
  id?: string;
  intro?: { eyebrow: string; heading: string; subtitle?: string };
  services?: readonly Service[];
  /** Skips the large top padding when the section follows a page header. */
  compactTop?: boolean;
};

export function ServicesSection({
  id = "services",
  intro = defaultIntro,
  services = defaultServices,
  compactTop = false,
}: ServicesSectionProps) {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const grid = gridRef.current;
    const pin = pinRef.current;
    if (!grid || !pin) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      panelRefs.current.forEach((panel, i) => {
        if (!panel) return;
        ScrollTrigger.create({
          trigger: panel,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });

      if (!reduced) {
        ScrollTrigger.create({
          trigger: grid,
          start: `top top+=${PIN_TOP}`,
          end: () => `bottom top+=${PIN_TOP + pin.offsetHeight}`,
          pin,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      }
    });

    return () => mm.revert();
  }, [reduced, services]);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(3rem,6vw,5rem)] ${
        compactTop ? "pt-[clamp(3.5rem,8vw,115px)]" : "pt-[clamp(4rem,13.4vw,194px)]"
      }`}
    >
      <SectionHeading
        id={`${id}-heading`}
        eyebrow={intro.eyebrow}
        title={intro.heading}
        subtitle={intro.subtitle}
        widthClass="max-w-[800px]"
      />

      <div
        ref={gridRef}
        className="mx-auto mt-[clamp(2.5rem,6.9vw,100px)] grid max-w-[1060px] gap-y-14 lg:grid-cols-[minmax(0,451px)_minmax(0,1fr)] lg:gap-x-[clamp(2rem,4.9vw,71px)]"
      >
        <div className="hidden lg:block">
          <div
            ref={pinRef}
            className={`relative aspect-[451/677] w-full max-w-[451px] ${reduced ? "lg:sticky lg:top-[110px]" : ""}`}
          >
            {services.map((service, i) => (
              <Image
                key={service.id}
                src={service.image}
                alt={i === active ? service.alt : ""}
                aria-hidden={i !== active}
                width={serviceImageSize.width}
                height={serviceImageSize.height}
                sizes="451px"
                className={`absolute inset-0 h-full w-full object-cover ${
                  reduced ? "" : "transition-opacity duration-[var(--motion-cinematic)] ease-in-out"
                } ${i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>

        <div>
          {services.map((service, i) => (
            <article
              key={service.id}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              aria-labelledby={`${service.id}-title`}
              className="lg:min-h-[78svh]"
            >
              <div className="mb-8 lg:hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={serviceImageSize.width}
                  height={serviceImageSize.height}
                  sizes="(min-width: 640px) 451px, 100vw"
                  className="mx-auto h-auto w-full max-w-[451px]"
                />
              </div>
              <div
                className={`max-w-[455px] ${
                  reduced ? "" : "lg:transition-opacity lg:duration-[var(--motion-cinematic)]"
                } ${i === active ? "lg:opacity-100" : "lg:opacity-30"}`}
              >
                <h3 id={`${service.id}-title`} className="t-service-title">
                  {service.title}
                </h3>
                <p className="t-body mt-[clamp(1rem,2.2vw,2rem)]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
