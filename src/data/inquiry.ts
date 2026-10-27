export type ContactRow = { label: string; hint: string; href?: string };

export type FooterLink = { label: string; href?: string };

export const inquiry = {
  eyebrow: "Inquire",
  heading: { script: "let’s", display: "BEGIN" },
  intro:
    "Tell us a little about your celebration and we’ll reply within one working day with our availability and next steps.",
  /** Contact details are copied from the reference; swap for real ones. No href = shown as plain text. */
  rows: [
    { label: "Book a 30-minute call", hint: "Choose a time", href: "#inquire-form" },
    { label: "Message us on WhatsApp", hint: "Quick questions", href: "#inquire-form" },
    { label: "hello@evermore.events", hint: "Email" },
  ] satisfies ContactRow[],
  eventTypes: [
    "Wedding",
    "Engagement or proposal",
    "Corporate event",
    "Birthday or celebration",
    "Something else",
  ],
  guestRanges: ["Under 50", "50 – 100", "100 – 200", "200 – 350", "350+"],
  /** Set to a real endpoint to enable native submission; otherwise the form is a non-sending demo. */
  formAction: undefined as string | undefined,
  replyNote: "We reply within one working day.",
} as const;

export const footer = {
  navLinks: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Packages", href: "/packages" },
    { label: "Contact", href: "/contact" },
  ] satisfies FooterLink[],
  contactLinks: [
    { label: "hello@evermore.events" },
    { label: "+00 000 000 0000" },
    { label: "Instagram" },
    { label: "Pinterest" },
  ] satisfies FooterLink[],
  copyright: "© 2026 Evermore Events",
  privacy: { label: "Privacy policy", href: "/privacy-policy" } as FooterLink,
} as const;
