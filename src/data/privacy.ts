export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  after?: string;
};

/** Placeholder address shared with the footer: swap for the real one. */
export const privacyContactEmail = "hello@evermore.events";

export const privacyPage = {
  intro: {
    eyebrow: "Privacy Policy",
    title: "Your Privacy Matters",
    subtitle:
      "How Evermore Events by Duvi collects, uses, and protects your personal information.",
  },
  updated: "Last updated: 27 October 2026",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "Evermore Events by Duvi (“we”, “us”, “our”) is a wedding and event planning company based in Sri Lanka. We respect your privacy and are committed to handling your personal information responsibly, in line with applicable data protection laws, including Sri Lanka’s Personal Data Protection Act, No. 9 of 2022.",
        "This policy explains what information we collect when you visit our website, enquire about our services, or work with us, how we use it, and the choices you have.",
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: ["We may collect the following information, depending on how you interact with us:"],
      list: [
        "Contact details: your name, email address, phone or WhatsApp number, and preferred way to be contacted.",
        "Event details: event type, date, location, guest numbers, budget, style preferences, and any other details you share in an enquiry or planning conversation.",
        "Booking and payment information: records of agreements, invoices, and payments. We do not store full card details on this website.",
        "Photos and media: images or inspiration material you send us, and photographs or video taken at events we plan or coordinate.",
        "Technical information: basic data such as browser type, device, pages viewed, and approximate location, collected through cookies and similar technologies.",
      ],
    },
    {
      id: "how-we-use-it",
      title: "How We Use Your Information",
      paragraphs: ["We use your information to:"],
      list: [
        "Respond to your enquiries and arrange consultations or calls.",
        "Plan, coordinate, and deliver your event, including liaising with suppliers on your behalf.",
        "Prepare quotes and agreements, issue invoices, and manage payments.",
        "Send you important updates about your booking or event.",
        "Share our work, with your permission, on our website and social media.",
        "Improve our website, services, and client experience.",
        "Meet our legal and accounting obligations.",
      ],
    },
    {
      id: "sharing",
      title: "Who We Share Information With",
      paragraphs: [
        "We do not sell your personal information. We share it only where needed to deliver your event or run our business:",
      ],
      list: [
        "Event suppliers and partners, such as venues, photographers, florists, caterers, and decorators, and only the details they need to carry out their work for you.",
        "Service providers who help us operate, such as website hosting, email, scheduling, and accounting tools.",
        "Professional advisers, authorities, or regulators when we are required to by law.",
      ],
      after:
        "Where we share information with others, we ask them to keep it confidential and to use it only for the agreed purpose.",
    },
    {
      id: "photos",
      title: "Photographs and Event Media",
      paragraphs: [
        "We may photograph or film events we plan for portfolio and marketing purposes. We will only publish images that identify you or your guests with your agreement, and you may ask us at any time not to feature your event or to remove an image we have published.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and Analytics",
      paragraphs: [
        "Our website may use cookies and similar technologies to keep the site working, remember your preferences, and understand how visitors use it. You can control or disable cookies through your browser settings. Some parts of the site may not work as intended if cookies are disabled.",
      ],
    },
    {
      id: "retention",
      title: "How Long We Keep Your Information",
      paragraphs: [
        "We keep your information only for as long as needed for the purposes described in this policy, including to complete your event, maintain business and tax records, and resolve any questions or disputes. When it is no longer needed, we delete or anonymise it.",
      ],
    },
    {
      id: "security",
      title: "Keeping Your Information Safe",
      paragraphs: [
        "We take reasonable technical and organisational steps to protect your information against loss, misuse, and unauthorised access. No method of transmission or storage is completely secure, so we cannot guarantee absolute security, but we work to protect your information with care.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      paragraphs: ["Subject to applicable law, you may ask us to:"],
      list: [
        "Confirm what personal information we hold about you and provide a copy.",
        "Correct information that is inaccurate or incomplete.",
        "Delete your information, where we no longer need it.",
        "Stop using your information for a particular purpose, or withdraw a consent you previously gave.",
      ],
      after: "To make a request, contact us using the details below. We will respond within a reasonable time.",
    },
    {
      id: "third-party",
      title: "Third-Party Links",
      paragraphs: [
        "Our website may link to other sites, such as social media platforms. We are not responsible for the privacy practices of those sites, and we encourage you to read their policies.",
      ],
    },
    {
      id: "children",
      title: "Children’s Privacy",
      paragraphs: [
        "Our services are intended for adults planning events. We do not knowingly collect personal information from children through this website. If you believe a child has provided us with information, please contact us and we will delete it.",
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated shown at the top.",
      ],
    },
  ] satisfies readonly PolicySection[],
  contact: {
    title: "Contact Us",
    paragraph:
      "If you have any questions about this policy or how we handle your information, please get in touch:",
    name: "Evermore Events by Duvi",
    location: "Sri Lanka",
  },
} as const;
