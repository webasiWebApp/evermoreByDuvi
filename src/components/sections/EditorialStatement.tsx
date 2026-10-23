import { Reveal } from "@/components/motion/Reveal";

type EditorialStatementProps = {
  text: string;
  uppercase?: boolean;
  /** Max width of the text block, tuned so the lines break as in the reference. */
  widthClass: string;
  paddingClass: string;
};

/** Large centred Orange Avenue statement with a one-time cinematic fade-up. */
export function EditorialStatement({
  text,
  uppercase = false,
  widthClass,
  paddingClass,
}: EditorialStatementProps) {
  return (
    <section className={`relative z-10 flex justify-center px-[calc(var(--grid-gutter)+16px)] ${paddingClass}`}>
      <Reveal duration={1.2} distance={36}>
        <p className={`t-statement text-center ${uppercase ? "uppercase" : ""} ${widthClass}`}>
          {text}
        </p>
      </Reveal>
    </section>
  );
}
