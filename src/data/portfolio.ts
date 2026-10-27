export type PortfolioProject = {
  id: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  /** Sample copy: replace with real couples / venues. */
  name: string;
  location: string;
  description: string;
};

export const portfolioIntro = {
  eyebrow: "Our Portfolio",
  subtitle:
    "Every event has its own story, vision, and atmosphere. This collection brings together selected projects and experiences from my journey in the events industry.",
  cta: { label: "View our portfolio", href: "/portfolio" },
} as const;

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "portfolio-1",
    image: "/images/Portfolio/p1.webp",
    width: 331,
    height: 465,
    alt: "Bride in an embroidered ivory gown and gold headpiece, smiling in a leafy garden",
    name: "Sample Wedding One",
    location: "Garden venue, Sri Lanka",
    description: "An intimate garden ceremony with soft, natural styling.",
  },
  {
    id: "portfolio-2",
    image: "/images/Portfolio/p2.webp",
    width: 329,
    height: 560,
    alt: "Couple on a hillside pavilion beside an infinity pool under a cloud-filled sky",
    name: "Sample Wedding Two",
    location: "Hill-country resort, Sri Lanka",
    description: "A mountain-view celebration planned around the golden hour.",
  },
  {
    id: "portfolio-3",
    image: "/images/Portfolio/p3.webp",
    width: 329,
    height: 483,
    alt: "Couple sharing a quiet moment, foreheads touching, in traditional wedding attire",
    name: "Sample Wedding Three",
    location: "Boutique estate, Sri Lanka",
    description: "A tradition-led day with carefully paced ceremonies.",
  },
  {
    id: "portfolio-4",
    image: "/images/Portfolio/p4.webp",
    width: 331,
    height: 465,
    alt: "Wedding celebration moment",
    name: "Sample Wedding Four",
    location: "Sri Lanka",
    description: "A thoughtfully planned celebration shaped around the couple.",
  },
  {
    id: "portfolio-5",
    image: "/images/Portfolio/p5.webp",
    width: 331,
    height: 465,
    alt: "Wedding celebration moment",
    name: "Sample Wedding Five",
    location: "Sri Lanka",
    description: "A thoughtfully planned celebration shaped around the couple.",
  },
  {
    id: "portfolio-6",
    image: "/images/Portfolio/p6.webp",
    width: 331,
    height: 465,
    alt: "Wedding celebration moment",
    name: "Sample Wedding Six",
    location: "Sri Lanka",
    description: "A thoughtfully planned celebration shaped around the couple.",
  },
  {
    id: "portfolio-7",
    image: "/images/Portfolio/p7.webp",
    width: 331,
    height: 465,
    alt: "Wedding celebration moment",
    name: "Sample Wedding Seven",
    location: "Sri Lanka",
    description: "A thoughtfully planned celebration shaped around the couple.",
  },
  {
    id: "portfolio-8",
    image: "/images/Portfolio/p8.webp",
    width: 331,
    height: 465,
    alt: "Wedding celebration moment",
    name: "Sample Wedding Eight",
    location: "Sri Lanka",
    description: "A thoughtfully planned celebration shaped around the couple.",
  },
  {
    id: "portfolio-9",
    image: "/images/Portfolio/p9.webp",
    width: 331,
    height: 465,
    alt: "Wedding celebration moment",
    name: "Sample Wedding Nine",
    location: "Sri Lanka",
    description: "A thoughtfully planned celebration shaped around the couple.",
  },
];
