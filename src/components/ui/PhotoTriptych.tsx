import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

type TriptychImage = { src: string; width: number; height: number; alt: string };

/** Three portraits set edge to edge with a staggered reveal and grayscale hover. */
export function PhotoTriptych({ images }: { images: readonly TriptychImage[] }) {
  return (
    <ul className="grid grid-cols-1 gap-[2px] sm:grid-cols-3">
      {images.map((image, i) => (
        <li key={image.src} className="overflow-hidden">
          <Reveal delay={i * 0.15} distance={56} duration={1.2}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 640px) 33vw, 100vw"
              className="h-auto w-full object-cover transition-[filter,transform] duration-700 ease-out hover:scale-105 hover:grayscale"
            />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
