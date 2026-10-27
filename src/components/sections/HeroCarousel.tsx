"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/LinkButton";
import { heroActions, heroAutoplayMs, heroSlides } from "@/data/hero";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroCarousel() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);

  const slide = heroSlides[index];
  const autoplay = playing && !held && !reduced;

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      heroAutoplayMs,
    );
    return () => window.clearInterval(id);
  }, [autoplay]);

  const words = slide.heading.split(" ");

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured celebrations"
      className="relative z-10"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <div
        className="relative mx-auto min-h-[540px] overflow-hidden md:aspect-[2358/1002] md:min-h-0"
        style={{ marginInline: "var(--grid-gutter)" }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduced ? 1 : 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: reduced ? 0 : 1.1, ease: "easeInOut" },
              scale: { duration: reduced ? 0 : 7, ease: EASE },
            }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 768px) calc(100vw - 2 * 9.03vw), 100vw"
              className="object-cover"
              style={{ objectPosition: slide.position }}
            />
          </motion.div>
        </AnimatePresence>

        <div aria-hidden className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 py-10 text-center text-white md:px-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              className="flex flex-col items-center"
              exit={{ opacity: 0, transition: { duration: reduced ? 0 : 0.35 } }}
            >
              <h1 className="t-hero w-full max-w-[1200px] text-center text-balance !text-[clamp(1.75rem,4.4vw,75px)]" aria-label={slide.heading}>
                {words.map((word, i) => (
                  <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom py-[0.2em] -my-[0.2em]">
                    <motion.span
                      className="inline-block"
                      initial={{ y: reduced ? 0 : "110%", opacity: reduced ? 1 : 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.9, delay: 0.25 + i * 0.09, ease: EASE }}
                    >
                      {word}
                      {i < words.length - 1 ? " " : ""}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <motion.p
                className="mt-[clamp(1.5rem,2.1vw,2.25rem)] max-w-[758px] text-[clamp(0.875rem,1.11vw,1rem)] leading-[1.5]"
                initial={{ y: reduced ? 0 : 24, opacity: reduced ? 1 : 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.25 + words.length * 0.09 + 0.1, ease: EASE }}
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                className="mt-[clamp(1rem,2.6vw,2.75rem)] flex flex-wrap justify-center gap-x-[clamp(1.5rem,3vw,2.75rem)]"
                initial={{ y: reduced ? 0 : 24, opacity: reduced ? 1 : 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.25 + words.length * 0.09 + 0.3, ease: EASE }}
              >
                {heroActions.map((action) => (
                  <LinkButton key={action.href} href={action.href} className="text-[14px] font-normal">
                    {action.label}
                  </LinkButton>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-pressed={!playing}
          className="absolute bottom-3 right-3 hidden px-3 py-2 text-[11px] font-light uppercase tracking-[0.12em] text-white md:block"
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      <div className="flex justify-center gap-[7px] py-[9px]" role="group" aria-label="Choose slide">
        {heroSlides.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1} of ${heroSlides.length}`}
            aria-current={i === index}
            className={`relative h-[82px] w-[55px] shrink-0 overflow-hidden transition-opacity duration-[var(--motion-standard)] ${
              i === index ? "opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="55px"
              className="object-cover"
              style={{ objectPosition: item.thumbPosition }}
            />
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {heroSlides.length}
      </p>
    </section>
  );
}
