import type { Metadata } from "next";
import { HorizontalRule } from "@/components/layout/HorizontalRule";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProseSection } from "@/components/sections/ProseSection";
import { contactPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Contact | Evermore Events by Duvi",
  description: "Get in touch to begin your planning journey with Evermore Events by Duvi.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHeader id="contact-page-heading" intro={contactPage.intro} />
      <ProseSection
        paragraphs={contactPage.paragraphs}
        closing={contactPage.closing}
        closingClassName="!mt-[2em] t-founder"
      />
      <ContactDetails details={contactPage.details} />
      <HorizontalRule />
    </SiteShell>
  );
}
