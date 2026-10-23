import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { galleryAspect, galleryItems } from "@/data/gallery";

/**
 * Desktop: items are placed by percentage inside a fixed-aspect composition
 * (so nothing collides or shifts). Below md they fall back to a staggered
 * two-column grid.
 */
export function ScatteredGallery() {
  return (
    <section aria-label="Gallery" className="relative z-10">
      <ul
        className="relative hidden md:block"
        style={{ aspectRatio: galleryAspect }}
      >
        {galleryItems.map((item, i) => (
          <li
            key={item.id}
            className="absolute"
            style={{ left: `${item.x}%`, top: `${item.y}%`, width: `${item.w}%` }}
          >
            <Reveal delay={(i % 3) * 0.12}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 768px) 25vw, 45vw"
                className="h-auto w-full"
              />
            </Reveal>
          </li>
        ))}
      </ul>

      <ul className="grid grid-cols-2 gap-x-4 gap-y-8 px-[calc(var(--grid-gutter)+16px)] py-12 md:hidden">
        {galleryItems.map((item, i) => (
          <li key={item.id} className={i % 2 === 1 ? "mt-12" : ""}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="45vw"
              className="h-auto w-full"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
