import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Browser-only: import this module from client components' effects/handlers only.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
