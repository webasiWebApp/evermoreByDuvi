export type FaqEntry = { id: string; question: string; answer: string };

export const faqIntro = {
  eyebrow: "Faq",
  heading: "Everything You Need to Know Before We Begin",
  subtitle:
    "We believe in total transparency and clarity from day one. Below are the key answers regarding our services, booking policies, and setup logistics. Still looking for answers or need immediate assistance?",
} as const;

/** Sample Q&A: replace with the studio's real policies. */
export const faqEntries: readonly FaqEntry[] = [
  {
    id: "faq-booking",
    question: "How far ahead should we book?",
    answer:
      "For weddings, 9 to 15 months gives the widest choice of venues and suppliers. Birthdays and smaller celebrations can often be planned in 6 to 8 weeks. If your date is sooner, ask anyway.",
  },
  {
    id: "faq-packages",
    question: "What planning packages do you offer?",
    answer:
      "We offer full planning, partial planning, and day-of coordination. After an initial conversation we recommend the level of support that fits your date, guest list, and budget.",
  },
  {
    id: "faq-availability",
    question: "How do I check availability for my date?",
    answer:
      "Send us your preferred date and venue through the inquiry form below. We reply within one working day to confirm availability and suggest next steps.",
  },
  {
    id: "faq-delivery",
    question: "How are timelines and details shared with us?",
    answer:
      "You receive a clear planning timeline early on, and we share updated schedules, supplier details, and checklists as the event approaches so you always know what is confirmed.",
  },
  {
    id: "faq-prepare",
    question: "How should we prepare for our first call?",
    answer:
      "Bring a rough guest count, a few venues or ideas you love, and a sense of your budget. None of it needs to be final; we will help you shape the rest together.",
  },
];
