import { VLineOverlay } from "@/components/layout/VLineOverlay";
import { ParallaxImage } from "@/components/motion/ParallaxImage";

type FullImageSectionProps = {
  src: string;
  alt: string;
  /** CSS object-position tuned per image so the couple stays in frame. */
  position?: string;
};

/** Full-viewport photograph with the static white grid lines laid over it. */
export function FullImageSection({ src, alt, position = "50% 50%" }: FullImageSectionProps) {
  return (
    <section className="relative z-10 h-[100svh] min-h-[420px] w-full overflow-hidden">
      <ParallaxImage src={src} alt={alt} position={position} />
      <VLineOverlay />
    </section>
  );
}
