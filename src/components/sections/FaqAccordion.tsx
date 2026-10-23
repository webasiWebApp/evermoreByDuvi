"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqEntries } from "@/data/faq";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function Icon({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="relative block h-[18px] w-[18px] shrink-0">
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink" />
      <span
        className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink transition-transform duration-[var(--motion-standard)] ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

/** Single-open accordion: choosing a question closes the previous one. */
export function FaqAccordion() {
  const reduced = usePrefersReducedMotion();
  const [openId, setOpenId] = useState<string | null>(faqEntries[0]?.id ?? null);

  return (
    <div>
      {faqEntries.map((entry) => {
        const open = entry.id === openId;
        const buttonId = `${entry.id}-button`;
        const panelId = `${entry.id}-panel`;
        return (
          <div key={entry.id} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : entry.id)}
                className="flex w-full items-center justify-between gap-6 py-[clamp(1rem,1.3vw,18px)] text-left text-[clamp(1.0625rem,1.67vw,24px)] font-normal leading-tight"
              >
                {entry.question}
                <Icon open={open} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="t-body max-w-[750px] pb-6 pl-[22px]">{entry.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
