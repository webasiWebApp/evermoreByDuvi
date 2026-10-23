"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ImageRevealProps = {
  children: ReactNode;
  /** Must position the frame (e.g. `absolute inset-0`) so `fill` images inside have a box. */
  className?: string;
  delay?: number;
};

/** Curtain wipe that plays once: the frame opens upward while the photo settles from a slight zoom. */
export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const frame: Variants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)" },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1.3, delay, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const photo: Variants = {
    hidden: { scale: 1.2 },
    visible: { scale: 1, transition: { duration: 1.8, delay, ease: [0.22, 1, 0.36, 1] } },
  };

  // The in-view trigger sits on an unclipped wrapper: an element fully hidden by
  // its own clip-path never reports as intersecting, so it would never reveal.
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div className="absolute inset-0" variants={frame}>
        <motion.div className="absolute inset-0" variants={photo}>
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
