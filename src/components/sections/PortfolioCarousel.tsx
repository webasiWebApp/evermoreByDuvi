"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import { portfolioProjects } from "@/data/portfolio";

const count = portfolioProjects.length;
const SWIPE_PX = 40;

/** Signed slot (-1 left, 0 centre, 1 right, beyond = parked) of item i relative to the active item. */
function slotOf(i: number, active: number) {
  let offset = (((i - active) % count) + count) % count;
  if (offset > count / 2) offset -= count;
  return offset;
}

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg width="26" height="10" viewBox="0 0 26 10" fill="none" aria-hidden>
      <path
        d={direction === "prev" ? "M26 5H1M5 1 1 5l4 4" : "M0 5h25M21 1l4 4-4 4"}
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function PortfolioCarousel() {
  const [state, setState] = useState({ active: 1 % count, previous: 1 % count });
  const startX = useRef<number | null>(null);

  const go = (step: number) =>
    setState(({ active }) => ({
      previous: active,
      active: (((active + step) % count) + count) % count,
    }));

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const dx = event.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) >= SWIPE_PX) go(dx < 0 ? 1 : -1);
  };

  const current = portfolioProjects[state.active];

  const stageVars = {
    "--slot-w": "clamp(200px, 62vw, 330px)",
    "--slot-gap": "clamp(10px, 1.8vw, 26px)",
    "--h-center": "calc(var(--slot-w) * 1.702)",
    "--h-side": "calc(var(--slot-w) * 1.424)",
  } as CSSProperties;

  return (
    <div>
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Portfolio projects"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (startX.current = null)}
        className="relative mx-auto touch-pan-y overflow-hidden select-none"
        style={{ ...stageVars, height: "var(--h-center)", maxWidth: "calc(3 * var(--slot-w) + 2 * var(--slot-gap))" }}
      >
        {portfolioProjects.map((project, i) => {
          const slot = slotOf(i, state.active);
          const visible = Math.abs(slot) <= 1;
          const jumped = Math.abs(slot - slotOf(i, state.previous)) > 1;
          const parked = Math.max(-2, Math.min(2, slot));
          return (
            <div
              key={project.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={slot !== 0}
              className={`absolute left-1/2 top-1/2 ${jumped ? "carousel-jump" : ""}`}
              style={{
                width: "var(--slot-w)",
                height: slot === 0 ? "var(--h-center)" : "var(--h-side)",
                marginLeft: "calc(var(--slot-w) / -2)",
                transform: `translate(calc(${parked} * (var(--slot-w) + var(--slot-gap))), -50%)`,
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? "auto" : "none",
                transition: jumped
                  ? "none"
                  : "transform 700ms cubic-bezier(0.22,1,0.36,1), height 700ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease",
              }}
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={project.width}
                height={project.height}
                sizes="(min-width: 768px) 330px, 62vw"
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {current.name}, {current.location}. {current.description}
      </p>

      <div className="mt-[clamp(1.5rem,3vw,2.5rem)] flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="flex h-11 w-12 items-center justify-center transition-transform duration-[var(--motion-fast)] hover:-translate-x-1"
        >
          <Arrow direction="prev" />
        </button>
        <span aria-hidden className="h-[30px] w-px bg-ink" />
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next project"
          className="flex h-11 w-12 items-center justify-center transition-transform duration-[var(--motion-fast)] hover:translate-x-1"
        >
          <Arrow direction="next" />
        </button>
      </div>
    </div>
  );
}
