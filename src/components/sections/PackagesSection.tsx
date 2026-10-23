import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import type { PlanningPackage } from "@/data/pages";

function PackageCell({ item, delay }: { item: PlanningPackage; delay: number }) {
  const titleId = `${item.id}-title`;
  return (
    <article
      aria-labelledby={titleId}
      className="flex bg-paper px-6 py-[clamp(2.5rem,4vw,4rem)] transition-colors duration-[var(--motion-standard)] hover:bg-paper-warm sm:px-8 lg:px-[clamp(1.5rem,2.5vw,2.5rem)]"
    >
      <Reveal delay={delay} className="mx-auto flex w-full max-w-[320px] flex-col text-center">
        <span aria-hidden className="font-display text-[20px] leading-none text-muted line-through">
          {item.numeral}
        </span>
        <h3 id={titleId} className="t-reason-title mt-4">
          {item.title}
        </h3>
        <p className="t-body mt-3">{item.audience}</p>
        <ul className="t-body mt-6 border-t border-line">
          {item.includes.map((line) => (
            <li key={line} className="border-b border-line py-3">
              {line}
            </li>
          ))}
        </ul>
        <LinkButton href="/contact" className="mt-6 self-center">
          Enquire
        </LinkButton>
      </Reveal>
    </article>
  );
}

/** Hairline grid of planning packages, set between two page rules like the "why us" grid. */
export function PackagesSection({ packages }: { packages: readonly PlanningPackage[] }) {
  return (
    <section aria-label="Planning packages" className="relative z-10">
      <HorizontalRule />
      <div className="mx-[calc(var(--grid-gutter)+1px)] grid grid-cols-1 gap-px bg-line lg:grid-cols-3">
        {packages.map((item, i) => (
          <PackageCell key={item.id} item={item} delay={i * 0.12} />
        ))}
      </div>
      <HorizontalRule />
    </section>
  );
}
