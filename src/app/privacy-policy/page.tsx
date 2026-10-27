import type { Metadata } from "next";
import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal } from "@/components/motion/Reveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHeader } from "@/components/sections/PageHeader";
import { privacyContactEmail, privacyPage, type PolicySection } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Evermore Events by Duvi",
  description:
    "How Evermore Events by Duvi collects, uses, and protects your personal information.",
};

function PolicyHeading({ id, index, children }: { id: string; index: number; children: string }) {
  return (
    <h2 id={id} className="t-founder">
      <span aria-hidden className="mr-3 text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      {children}
    </h2>
  );
}

function PolicyBlock({ section, index }: { section: PolicySection; index: number }) {
  const headingId = `${section.id}-heading`;
  return (
    <Reveal>
      <section aria-labelledby={headingId}>
        <PolicyHeading id={headingId} index={index}>
          {section.title}
        </PolicyHeading>
        <div className="t-body mt-4 space-y-4">
          {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
          {section.list ? (
            <ul className="list-disc space-y-2 pl-6 marker:text-muted">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.after ? <p>{section.after}</p> : null}
        </div>
      </section>
    </Reveal>
  );
}

export default function PrivacyPolicyPage() {
  const { sections, contact } = privacyPage;

  return (
    <SiteShell>
      <PageHeader id="privacy-page-heading" intro={privacyPage.intro} />
      <HorizontalRule />

      <div className="relative z-10 px-[calc(var(--grid-gutter)+16px)] pb-[clamp(3rem,7vw,100px)] pt-[clamp(3rem,6vw,86px)]">
        <div className="mx-auto max-w-[760px]">
          <p className="t-eyebrow text-center">{privacyPage.updated}</p>

          <div className="mt-[clamp(2rem,4vw,3.5rem)] space-y-[clamp(2rem,3.5vw,3rem)]">
            {sections.map((section, i) => (
              <PolicyBlock key={section.id} section={section} index={i} />
            ))}

            <Reveal>
              <section aria-labelledby="contact-heading">
                <PolicyHeading id="contact-heading" index={sections.length}>
                  {contact.title}
                </PolicyHeading>
                <div className="t-body mt-4 space-y-4">
                  <p>{contact.paragraph}</p>
                  <p>
                    {contact.name}
                    <br />
                    {contact.location}
                    <br />
                    Email:{" "}
                    <a
                      href={`mailto:${privacyContactEmail}`}
                      className="underline underline-offset-4 transition-opacity duration-[var(--motion-fast)] hover:opacity-60"
                    >
                      {privacyContactEmail}
                    </a>
                  </p>
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </div>
      <HorizontalRule />

      <CtaSection />
      <HorizontalRule />
    </SiteShell>
  );
}
