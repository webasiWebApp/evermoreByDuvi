import { Reveal } from "@/components/motion/Reveal";
import { PhotoTriptych } from "@/components/ui/PhotoTriptych";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/data/about";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(3rem,7.5vw,108px)] pt-[clamp(4rem,8.2vw,118px)]"
    >
      <SectionHeading
        id="about-heading"
        eyebrow={about.eyebrow}
        title={about.heading}
        widthClass="max-w-[1000px]"
      />

      <Reveal delay={0.1} className="t-body mx-auto mt-[clamp(1.5rem,4vw,3.5rem)] max-w-[990px] space-y-[1.25em] text-center">
        {about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </Reveal>

      <div className="mx-auto mt-[clamp(2rem,4.9vw,70px)] max-w-[1057px]">
        <PhotoTriptych images={about.images} />

        <Reveal delay={0.2} className="mt-5 flex items-start justify-between gap-6">
          <div>
            <p className="t-founder">{about.founder.name}</p>
            <p className="t-body !text-[clamp(0.875rem,1.11vw,1rem)] text-ink/80">{about.founder.role}</p>
          </div>
          <a
            href={about.cta.href}
            className="t-body shrink-0 py-2 underline underline-offset-4 transition-opacity duration-[var(--motion-fast)] hover:opacity-60"
          >
            {about.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
