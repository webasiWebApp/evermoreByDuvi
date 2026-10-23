import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PageIntro } from "@/data/pages";

type PageHeaderProps = {
  id: string;
  intro: PageIntro;
  widthClass?: string;
};

/** Opening block of every inner page: script eyebrow, display h1, optional subtitle. */
export function PageHeader({ id, intro, widthClass = "max-w-[900px]" }: PageHeaderProps) {
  return (
    <header className="relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(3rem,7vw,100px)] pt-[clamp(3.5rem,8vw,115px)]">
      <SectionHeading
        id={id}
        level={1}
        eyebrow={intro.eyebrow}
        title={intro.title}
        subtitle={intro.subtitle}
        titleClassName="t-page-title"
        widthClass={widthClass}
      />
    </header>
  );
}
