"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ParallaxImageProps = {
  src: string;
  alt: string;
  position?: string;
};

/** Fills its parent; the photo drifts and eases from a slight zoom as it scrolls through the viewport. */
export function ParallaxImage({ src, alt, position = "50% 50%" }: ParallaxImageProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1.15, 1.25]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={reduced ? undefined : { y, scale, willChange: "transform" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </motion.div>
    </div>
  );
}
