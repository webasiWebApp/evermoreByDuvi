type HorizontalRuleProps = {
  tone?: "light" | "dark";
  className?: string;
};

/** Full-bleed hairline that crosses the vertical grid at a section boundary. */
export function HorizontalRule({ tone = "light", className = "" }: HorizontalRuleProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative z-10 h-px w-full ${
        tone === "light" ? "bg-line" : "bg-dark-line"
      } ${className}`}
    />
  );
}
