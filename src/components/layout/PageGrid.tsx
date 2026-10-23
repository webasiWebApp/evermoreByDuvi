/**
 * The page-wide editorial frame: two vertical rules at --grid-gutter from each
 * edge and the top rule at --nav-h. All other rules reuse the same variables.
 */
export function PageGrid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <span
        className="absolute inset-y-0 w-px bg-line"
        style={{ left: "var(--grid-gutter)" }}
      />
      <span
        className="absolute inset-y-0 w-px bg-line"
        style={{ right: "var(--grid-gutter)" }}
      />
      <span
        className="absolute inset-x-0 h-px bg-line"
        style={{ top: "var(--nav-h)" }}
      />
    </div>
  );
}
