"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { logo } from "@/data/navigation";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Brief curtain over the first paint. Never intercepts input; removed after it fades. */
export function Intro() {
  const reduced = usePrefersReducedMotion();
  const [done, setDone] = useState(false);

  if (reduced || done) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-paper"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.7, duration: 0.9, ease: "easeInOut" }}
      onAnimationComplete={() => setDone(true)}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image src={logo.src} alt="" width={logo.width} height={logo.height} priority />
      </motion.div>
    </motion.div>
  );
}
