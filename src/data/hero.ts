export type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  /** CSS object-position so the couple stays in frame when the wide hero crops the photo. */
  position: string;
  /** Portrait crop of the main image used for the small selector thumbnail. */
  thumbPosition: string;
  heading: string;
  subtitle: string;
};

export type HeroAction = { label: string; href: string };

export const heroSlides: readonly HeroSlide[] = [
  {
    id: "hero-1",
    image: "/images/Hero/heroMain.webp",
    alt: "A couple in white and blush standing apart against a misty mountain sky",
    position: "50% 40%",
    thumbPosition: "50% 50%",
    heading: "Your story, beautifully planned",
    subtitle:
      "Every celebration begins with a story worth telling. At Evermore Events by Duvi, we bring your vision to life through thoughtful planning, meaningful details, and seamless coordination.",
  },
  {
    id: "hero-2",
    image: "/images/Hero/heroMain2.jpg",
    alt: "A groom in a tan suit and a bride in a white lace saree walking hand in hand across a lawn",
    position: "50% 62%",
    thumbPosition: "48% 50%",
    heading: "Every detail, thoughtfully considered",
    subtitle:
      "From the overall vision to the smallest details, every element is planned with purpose, so your day feels personal and effortless.",
  },
  {
    id: "hero-3",
    image: "/images/Hero/heroMain3.jpg",
    alt: "A couple seated apart in a white pavilion, the bride in a pink saree glancing away",
    position: "50% 45%",
    thumbPosition: "72% 50%",
    heading: "Seamless coordination, on the day",
    subtitle:
      "Timelines, supplier communication and event flow, handled with care, so you can be a guest at your own celebration.",
  },
  {
    id: "hero-4",
    image: "/images/Hero/heroMain4.webp",
    alt: "A groom and bride seated on either side of a warmly lit sitting room",
    position: "50% 55%",
    thumbPosition: "90% 50%",
    heading: "Thoughtfully planned, meaningfully remembered",
    subtitle:
      "It is never just about how an event looks. It is about how it feels, how it unfolds, and the memories it leaves behind.",
  },
  {
    id: "hero-5",
    image: "/images/Hero/heroMain5.webp",
    alt: "A couple embracing at the foot of a spiral wooden staircase, seen from above",
    position: "50% 55%",
    thumbPosition: "55% 50%",
    heading: "Your vision. Your story. Your forever.",
    subtitle:
      "From the first planning conversation to the final moments of your celebration, we help you create an experience that feels unforgettable.",
  },
];

export const heroActions: readonly HeroAction[] = [
  { label: "Explore our services", href: "/services" },
  { label: "Begin your wedding journey", href: "/contact" },
];

export const heroAutoplayMs = 7000;
