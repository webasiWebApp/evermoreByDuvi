import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
  /** Page titles render as the document h1; everything else is an h2. */
  level?: 1 | 2;
  titleClassName?: string;
  /** Max width of the heading + subtitle block. */
  widthClass?: string;
};

/** Centred eyebrow (script) → heading → subtitle used by every content section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  className = "",
  level = 2,
  titleClassName = "t-heading",
  widthClass = "max-w-[820px]",
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <header className={`mx-auto text-center ${widthClass} ${className}`}>
      <Reveal duration={1.1} distance={32}>
        <p className="t-eyebrow">{eyebrow}</p>
        <Heading id={id} className={`${titleClassName} mt-2`}>
          {title}
        </Heading>
        {subtitle ? <p className="t-body mx-auto mt-[clamp(1.5rem,3.2vw,2.75rem)]">{subtitle}</p> : null}
      </Reveal>
    </header>
  );
}
