import type { ProcessStep } from "@/data/process";
import { processSteps } from "@/data/process";
import type { Service } from "@/data/services";
import { services } from "@/data/services";

export type PageIntro = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

/* ------------------------------ About ------------------------------ */

export const aboutPage = {
  intro: {
    eyebrow: "About Me",
    title: "Meet Duvi",
    subtitle: "The person behind the planning.",
  } satisfies PageIntro,
  story: [
    "I’m Duvini Rupasinghe, the founder behind Evermore Events by Duvi, with a background in Events, Tourism and Hospitality Management and a passion for creating meaningful experiences.",
    "My journey in the events industry has given me the opportunity to work across wedding planning, corporate events, surprise proposals, and special celebrations. Each experience has shaped the way I approach planning - with creativity, organisation, attention to detail, and an understanding that every event is personal to the people behind it.",
    "For me, event planning goes beyond bringing beautiful ideas together. It is about understanding a client’s vision, anticipating the little details, coordinating the moving pieces, and creating an experience where every moment feels considered.",
    "Through Evermore Events by Duvi, I bring together my professional experience and personal approach to planning, with a special focus on weddings. My goal is to make the planning journey feel as meaningful as the celebration itself.",
  ],
  signOff: {
    line: "Because every love story is different, and every celebration deserves to feel like yours.",
    signature: "With love, Duvi",
  },
  philosophy: {
    eyebrow: "Our Philosophy",
    title: "Thoughtfully Planned. Meaningfully Remembered.",
    paragraphs: [
      "We believe the most beautiful celebrations are the ones that feel true to the people at their heart.",
      "Our approach combines thoughtful planning, creative ideas, clear communication, and careful coordination. From the overall vision to the smallest details, every element is considered with purpose.",
      "We value the stories behind every celebration and believe the planning process should feel organised, personal, and enjoyable.",
      "At Evermore Events by Duvi, it is never just about how an event looks. It is about how it feels, how it unfolds, and the memories it leaves behind.",
    ],
  },
} as const;

/* ----------------------------- Services ---------------------------- */

export const servicesPage = {
  intro: {
    eyebrow: "Our Services",
    title: "Planning, Coordination & Celebration",
    subtitle:
      "From the first planning conversation to the final moments of your celebration, we are here to help you create an experience that feels personal, effortless, and unforgettable.",
  } satisfies PageIntro,
  weddings: {
    intro: {
      eyebrow: "Wedding Planning",
      heading: "Support Shaped Around Your Wedding",
    },
    items: [
      services[0],
      {
        ...services[1],
        title: "Partial Wedding Planning",
        description:
          "For couples who have already started planning but need professional guidance to bring the remaining details together. We provide support with supplier selections, planning schedules, coordination, and the arrangements needed to move forward with confidence.",
      },
      {
        ...services[2],
        title: "Wedding Day Coordination",
        description:
          "For couples who have planned their wedding but want a dedicated team to coordinate the agreed arrangements on the day. We focus on timelines, supplier communication, event flow, and the practical details that help the celebration run smoothly.",
      },
      {
        ...services[2],
        id: "destination-weddings",
        title: "Destination Weddings & Bespoke Celebrations",
        image: "/images/Service/page/Destination%20Weddings%20%26%20Bespoke%20Celebrations.webp",
        alt: "Destination Weddings & Bespoke Celebrations",
        description:
          "For couples dreaming of celebrating somewhere special, we can discuss tailored planning support based on the destination, event requirements, and availability.",
      },
    ] satisfies Service[],
  },
  beyond: {
    intro: {
      eyebrow: "Beyond Weddings",
      heading: "Every Milestone, Thoughtfully Handled",
    },
    items: [
      {
        ...services[1],
        id: "surprise-proposals",
        title: "Surprise Proposals & Romantic Celebrations",
        image: "/images/Service/page/Surprise%20Proposals%20%26%20Romantic%20Celebrations.webp",
        alt: "Surprise Proposals & Romantic Celebrations",
        description:
          "From intimate moments to thoughtfully styled surprises, we appreciate the creativity and care involved in making life’s special milestones memorable. Enquire to discuss bespoke celebration requirements. With the respective vendors only planning will be happening.",
      },
      {
        ...services[3],
        id: "special-events",
        title: "Special Events",
        image: "/images/Service/page/Special%20Events.webp",
        alt: "Special Events",
        description:
          "Birthdays and gender reveals: drawing on experience across event management and coordination, we also welcome selected enquiries for special celebrations.",
      },
    ] satisfies Service[],
  },
} as const;

/* ----------------------------- Packages ---------------------------- */

export type PlanningPackage = {
  id: string;
  numeral: string;
  title: string;
  audience: string;
  includes: readonly string[];
};

export const packagesPage = {
  intro: {
    eyebrow: "Our Packages",
    title: "Choose The Support You Need",
    subtitle:
      "Your celebration is unique. Our planning approach is designed around your needs, so every package begins with a conversation and is shaped to fit.",
  } satisfies PageIntro,
  packages: [
    {
      id: "full-planning",
      numeral: "i",
      title: "Full Wedding Planning",
      audience:
        "For couples who want professional support throughout their wedding journey, from the early ideas to the wedding day itself.",
      includes: [
        "Early ideas and planning decisions",
        "Supplier coordination",
        "Timelines and logistics",
        "Support on the wedding day",
      ],
    },
    {
      id: "partial-planning",
      numeral: "ii",
      title: "Partial Wedding Planning",
      audience:
        "For couples who have already started planning but need professional guidance to bring the remaining details together.",
      includes: [
        "Supplier selections",
        "Planning schedules",
        "Coordination of remaining details",
        "Arrangements needed to move forward with confidence",
      ],
    },
    {
      id: "day-coordination",
      numeral: "iii",
      title: "Wedding Day Coordination",
      audience:
        "For couples who have planned their wedding but want a dedicated team to coordinate the agreed arrangements on the day.",
      includes: [
        "Day timelines",
        "Supplier communication",
        "Event flow",
        "Practical details that keep the celebration running smoothly",
      ],
    },
  ] satisfies PlanningPackage[],
  bespoke: {
    eyebrow: "Something Different",
    title: "Destination & Bespoke Celebrations",
    body: "Dreaming of celebrating somewhere special? We can discuss tailored planning support based on the destination, event requirements, and availability.",
  },
  process: {
    eyebrow: "Our Planning Process",
    heading: "From Your First Idea to Your Special Day",
    closingNote: "Your celebration is unique. Our planning approach is designed around your needs.",
  },
} as const;

const fifthStep: ProcessStep = {
  id: "celebration",
  numeral: "v",
  title: "The Celebration",
  description:
    "With the agreed arrangements in place, we coordinate our responsibilities and help bring the celebration together with care and attention to detail.",
  /** Placeholder: no fifth process photograph was supplied. */
  image: "/images/Portfolio/p1.webp",
  alt: "Bride in an embroidered ivory gown and gold headpiece, smiling in a leafy garden",
};

export const packageProcessSteps: readonly ProcessStep[] = [...processSteps, fifthStep];

/* ----------------------------- Portfolio --------------------------- */

export const portfolioPage = {
  intro: {
    eyebrow: "Our Portfolio",
    title: "A Collection of Moments & Memories",
  } satisfies PageIntro,
  paragraphs: [
    "Every event has its own story, vision, and atmosphere. This collection brings together selected projects and experiences from my journey in the events industry.",
    "From weddings and meaningful celebrations to creative surprise proposals, each project reflects a different part of my experience in planning, coordination, and bringing ideas to life.",
    "Explore the moments, details, and experiences that have shaped my journey so far.",
  ],
  /** Alt text for p4–p20 is generic until the photos are described. */
  gallery: [
    { src: "/images/Portfolio/p1.webp", width: 1080, height: 1920, alt: "Bride in an embroidered ivory gown and gold headpiece, smiling in a leafy garden" },
    { src: "/images/Portfolio/p2.webp", width: 1066, height: 1600, alt: "Couple on a hillside pavilion beside an infinity pool under a cloud-filled sky" },
    { src: "/images/full-1.webp", width: 1600, height: 1066, alt: "A bride and groom embracing beside a wall of framed prints" },
    { src: "/images/Portfolio/p3.webp", width: 1066, height: 1600, alt: "Couple sharing a quiet moment, foreheads touching, in traditional wedding attire" },
    { src: "/images/Portfolio/p4.webp", width: 1366, height: 2048, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p5.webp", width: 1365, height: 2048, alt: "Wedding portrait" },
    { src: "/images/full-2.webp", width: 2048, height: 1366, alt: "A couple walking hand in hand beside an infinity pool with a pavilion and misty mountains" },
    { src: "/images/Portfolio/p6.webp", width: 1066, height: 1600, alt: "Couple portrait on their wedding day" },
    { src: "/images/Portfolio/p7.webp", width: 1066, height: 1600, alt: "Wedding day detail" },
    { src: "/images/Portfolio/p8.webp", width: 1080, height: 1920, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p9.webp", width: 1080, height: 1350, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p10.webp", width: 4278, height: 6418, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p11.webp", width: 1080, height: 1350, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p12.webp", width: 1080, height: 1350, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p13.webp", width: 1080, height: 1350, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p14.webp", width: 1365, height: 1723, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p15.webp", width: 1365, height: 2048, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p16.webp", width: 1080, height: 1350, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p17.webp", width: 1080, height: 1350, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p18.webp", width: 1080, height: 1350, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p19.webp", width: 1080, height: 1350, alt: "Wedding celebration moment" },
    { src: "/images/Portfolio/p20.webp", width: 1200, height: 1600, alt: "Wedding celebration moment" },
  ],
} as const;

/* ------------------------------ Contact ---------------------------- */

export const contactPage = {
  intro: {
    eyebrow: "Contact",
    title: "Let’s Create Something Meaningful",
    subtitle: "Every beautiful celebration begins with a conversation.",
  } satisfies PageIntro,
  paragraphs: [
    "Whether you’re beginning to plan your wedding, looking for coordination support, or exploring ideas for a special celebration, I’d love to hear what you have in mind.",
    "Tell me a little about your plans, your vision, and the moments you want to create. Let’s explore how Evermore Events by Duvi can be part of your journey.",
  ],
  closing: "Get in touch to begin your planning journey.",
  /** Placeholders from the content document: replace with real details (set href to make one a link). */
  details: [
    { label: "Email", value: "[Add your professional email]" },
    { label: "WhatsApp", value: "[Add your business number]" },
    { label: "Instagram", value: "[Add your business Instagram link]" },
  ] as { label: string; value: string; href?: string }[],
} as const;
