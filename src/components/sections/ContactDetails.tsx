import { Reveal } from "@/components/motion/Reveal";

type ContactDetail = { label: string; value: string; href?: string };

/** Hairline-separated list of ways to reach the studio. */
export function ContactDetails({ details }: { details: readonly ContactDetail[] }) {
  return (
    <section
      aria-label="Contact details"
      className="relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(3rem,7vw,100px)]"
    >
      <Reveal className="mx-auto max-w-[760px]">
        <ul className="border-t border-line">
          {details.map((detail) => (
            <li
              key={detail.label}
              className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="t-founder">{detail.label}</span>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="t-body underline underline-offset-4 transition-opacity duration-[var(--motion-fast)] hover:opacity-60"
                >
                  {detail.value}
                </a>
              ) : (
                <span className="t-body">{detail.value}</span>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
