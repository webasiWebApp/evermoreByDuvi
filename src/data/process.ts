export type ProcessStep = {
  id: string;
  numeral: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const processIntro = {
  eyebrow: "Our Process",
  heading: "From First Call to Final Toast: Complete Event Management & Seamless Service",
  /** The reference copy is cut off after "design"; the ending is a placeholder. */
  subtitle:
    "From your initial inquiry to the last glass raised in celebration, we handle every detail of your event with precision, creativity, and care. Our team manages vendor coordination, design and day-of logistics.",
} as const;

export const processSteps: readonly ProcessStep[] = [
  {
    id: "conversation",
    numeral: "i",
    title: "The Conversation",
    description:
      "Every celebration starts with understanding you. We discuss your vision, priorities, event date, and the kind of experience you want to create.",
    image: "/images/Process/ps1.png",
    alt: "Couple pressing foreheads together in a green garden",
  },
  {
    id: "plan",
    numeral: "ii",
    title: "The Plan",
    description:
      "Based on your requirements, we establish the planning approach, scope of services, priorities, and next steps.",
    image: "/images/Process/ps2.png",
    alt: "Couple smiling at each other, the bride holding a bouquet",
  },
  {
    id: "details",
    numeral: "iii",
    title: "The Details",
    description:
      "We work through the agreed planning requirements, supplier arrangements, timelines, and event logistics, keeping communication clear throughout the process.",
    image: "/images/Process/ps3.png",
    alt: "Bride with a bouquet and groom standing in a bright hallway",
  },
  {
    id: "final-preparations",
    numeral: "iv",
    title: "The Final Preparations",
    description:
      "As the celebration approaches, we review the arrangements, confirm key details, and prepare the event schedule",
    image: "/images/Process/ps4.png",
    alt: "Close portrait of a couple with the bride in a lace gown",
  },
];
