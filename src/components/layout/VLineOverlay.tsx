type VLineOverlayProps = {
  /** Line colour class; defaults to the white lines drawn over photography. */
  className?: string;
};

/**
 * The thin vertical lines that continue the page grid across full-bleed
 * photography (the reference's "V" overlays). Static, decorative, non-interactive.
 */
export function VLineOverlay({ className = "bg-white/80" }: VLineOverlayProps) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-10">
      <span
        className={`absolute inset-y-0 w-px ${className}`}
        style={{ left: "var(--grid-gutter)" }}
      />
      <span
        className={`absolute inset-y-0 w-px ${className}`}
        style={{ right: "var(--grid-gutter)" }}
      />
    </div>
  );
}
