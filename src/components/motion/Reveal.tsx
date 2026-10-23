"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  /** Travel distance in px for the fade-up. */
  distance?: number;
  duration?: number;
};

/** Fade-up that plays once when the element enters the viewport. */
export function Reveal({
  children,
  className,
  style,
  delay = 0,
  distance = 28,
  duration = 0.9,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
