import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/** Masonry-style photo gallery set between the page rules: tight 2px gutters, staggered reveal, grayscale hover. */
export function PhotoGallery({ photos }: { photos: readonly GalleryPhoto[] }) {
  return (
    <section
      aria-label="Portfolio gallery"
      className="relative z-10 mx-[calc(var(--grid-gutter)+1px)] py-[clamp(2rem,4vw,3.5rem)]"
    >
      <ul className="columns-1 gap-[2px] sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <li key={photo.src} className="mb-[2px] break-inside-avoid overflow-hidden">
            <Reveal delay={(i % 3) * 0.12} distance={40} duration={1.1}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover transition-[filter,transform] duration-700 ease-out hover:scale-105 hover:grayscale"
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
