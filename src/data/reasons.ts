export type Reason = {
  id: string;
  numeral: string;
  title: string;
  description: string;
};

export type ReasonImage = {
  src: string;
  alt: string;
  /** CSS object-position so the subject stays in frame when the cell crops the photo. */
  position: string;
};

export const reasonsIntro = {
  eyebrow: "Why work with Evermore Events by Duvi?",
} as const;

/** The grid in WhyUsSection is composed for exactly five points. */
export const reasons: readonly [Reason, Reason, Reason, Reason, Reason] = [
  {
    id: "personalised-planning",
    numeral: "i",
    title: "Personalised Planning",
    description:
      "Every couple has a different story, vision, and set of priorities. We approach each celebration with an understanding of what matters most to you.",
  },
  {
    id: "professional-coordination",
    numeral: "ii",
    title: "Professional Coordination",
    description:
      "Planning involves many moving parts. We focus on clear communication, structured timelines, and careful coordination of the agreed arrangements.",
  },
  {
    id: "attention-to-detail",
    numeral: "iii",
    title: "Attention to Detail",
    description:
      "From the bigger picture to the finishing touches, we understand how the little details contribute to the overall experience.",
  },
  {
    id: "experience-across-events",
    numeral: "iv",
    title: "Experience Across Events",
    description:
      "Our approach is shaped by practical experience across weddings, surprise proposals, corporate events, and special celebrations.",
  },
  {
    id: "thoughtful-journey",
    numeral: "v",
    title: "A Thoughtful Planning Journey",
    description:
      "We believe the experience of planning your wedding matters too. Our aim is to make the process organised, collaborative, and enjoyable.",
  },
];

/** Placeholders reused from other sections until dedicated photography is supplied. */
export const reasonImages = {
  feature: {
    src: "/images/Portfolio/p1.webp",
    alt: "Bride in an embroidered ivory gown and gold headpiece, smiling in a leafy garden",
    position: "50% 30%",
  },
  left: {
    src: "/images/full-1.webp",
    alt: "A bride and groom embracing beside a wall of framed prints",
    position: "85% 40%",
  },
  right: {
    src: "/images/Portfolio/p3.webp",
    alt: "Couple sharing a quiet moment, foreheads touching, in traditional wedding attire",
    position: "50% 30%",
  },
} satisfies Record<string, ReasonImage>;
