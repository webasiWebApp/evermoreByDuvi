export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const servicesIntro = {
  eyebrow: "Our Service",
  heading: "From First Call to Final Toast: Complete Event Management & Seamless Service",
  subtitle:
    "From full wedding planning to day-of coordination and special celebrations, we offer tailored support at every stage, so your event feels organised, personal, and beautifully considered.",
} as const;

export const serviceImageSize = { width: 451, height: 677 } as const;

/** Sample copy: the first entry is the reference text, the rest are placeholders. */
export const services: readonly Service[] = [
  {
    id: "full-planning",
    title: "Full Wedding Planning",
    description:
      "For couples who want professional support throughout their wedding journey. From the early ideas and planning decisions to supplier coordination, timelines, logistics, and the wedding day itself, we help bring every element together into one cohesive celebration.",
    image: "/images/Service/s1.webp",
    alt: "Collage of a bridal makeup studio and a bride having her makeup applied",
  },
  {
    id: "partial-planning",
    title: "Partial Planning",
    description:
      "For couples who have started planning and want expert guidance for the rest. We step in where you need us, refining the plan, introducing trusted suppliers, and keeping the details moving toward the day.",
    image: "/images/Service/s2.webp",
    alt: "A groom and bride embracing in front of a weathered door framed by leaves",
  },
  {
    id: "day-coordination",
    title: "Day-of Coordination",
    description:
      "Relax and enjoy your wedding day while we manage the schedule, suppliers, and guests. We review your plans in advance and run the day so everything happens as intended.",
    image: "/images/Service/s3.webp",
    alt: "A couple seated together beside a hilltop pavilion under a cloudy sky",
  },
  {
    id: "special-celebrations",
    title: "Special Celebrations",
    description:
      "Surprise proposals, anniversaries, and corporate gatherings planned with the same care as a wedding, from concept and styling through to coordination on the day.",
    image: "/images/Service/page/Special%20Events.webp",
    alt: "A couple at a styled gender reveal celebration with a balloon arch and blue smoke",
  },
];
