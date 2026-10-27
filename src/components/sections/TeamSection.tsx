import Image from "next/image";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team, teamIntro } from "@/data/team";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(3rem,7vw,100px)] pt-[clamp(3rem,6vw,86px)]"
    >
      <SectionHeading
        id="team-heading"
        eyebrow={teamIntro.eyebrow}
        title={teamIntro.title}
        widthClass="max-w-[760px]"
      />

      <Reveal delay={0.1} className="t-body mx-auto mt-[clamp(1.5rem,3vw,2.5rem)] max-w-[720px] text-center">
        <p>{teamIntro.description}</p>
      </Reveal>

      <ul className="mx-auto mt-[clamp(2rem,4.9vw,70px)] grid max-w-[1057px] grid-cols-1 gap-x-[2px] gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {team.map((member, i) => (
          <li key={member.id}>
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                <ImageReveal delay={i * 0.12} className="absolute inset-0">
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-[filter,transform] duration-700 ease-out group-hover:scale-105 group-hover:grayscale"
                    style={{ objectPosition: member.position }}
                  />
                </ImageReveal>
              </div>
              <Reveal delay={i * 0.12 + 0.1} className="mt-5 px-2 text-center">
                <h3 className="t-founder">{member.name}</h3>
                <p className="t-body mt-1 !text-[clamp(0.875rem,1.11vw,1rem)] text-ink/80">{member.role}</p>
              </Reveal>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
