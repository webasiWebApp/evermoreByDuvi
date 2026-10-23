import { Reveal } from "@/components/motion/Reveal";

type ProseSectionProps = {
  paragraphs: readonly string[];
  /** Optional closing line set apart beneath the paragraphs. */
  closing?: string;
  closingClassName?: string;
  className?: string;
};

/** Centred body copy used for long-form page text. */
export function ProseSection({ paragraphs, closing, closingClassName = "", className = "" }: ProseSectionProps) {
  return (
    <section className={`relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(3rem,7vw,100px)] ${className}`}>
      <Reveal className="t-body mx-auto max-w-[760px] space-y-[1.25em] text-center">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        {closing ? <p className={closingClassName}>{closing}</p> : null}
      </Reveal>
    </section>
  );
}
