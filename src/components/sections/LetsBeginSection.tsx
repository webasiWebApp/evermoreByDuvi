import { inquiry } from "@/data/inquiry";
import { InquiryForm } from "./InquiryForm";

export function LetsBeginSection() {
  return (
    <section
      id="inquire"
      aria-labelledby="inquire-heading"
      className="relative z-10 overflow-hidden bg-night font-footer text-[#f4f1ec]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-px bg-white/[0.06]"
        style={{ left: "var(--grid-gutter)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-px bg-white/[0.06]"
        style={{ right: "var(--grid-gutter)" }}
      />

      <div className="relative mx-auto grid max-w-[var(--content-max)] gap-12 px-[calc(var(--grid-gutter)+clamp(16px,3.3vw,47px))] py-[clamp(3rem,5.6vw,80px)] lg:grid-cols-[minmax(0,273px)_minmax(0,1fr)] lg:gap-x-[clamp(3rem,16vw,236px)]">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.25em]">{inquiry.eyebrow}</p>
          <h2 id="inquire-heading" className="mt-3 whitespace-nowrap leading-none">
            <span className="font-display text-[clamp(2.75rem,4.4vw,64px)] mr-[0.12em] italic">{inquiry.heading.script}</span>{" "}
            <span className="font-display text-[clamp(2.75rem,4.4vw,64px)]">{inquiry.heading.display}</span>
          </h2>
          <p className="mt-6 text-[13px] font-light leading-[1.6] text-white/85">{inquiry.intro}</p>

          <ul className="mt-9">
            {inquiry.rows.map((row) => (
              <li key={row.label} className="border-b border-white/10 last:border-b-0">
                {"href" in row && row.href ? (
                  <a href={row.href} className="flex items-baseline justify-between gap-4 py-3 text-[12px] transition-opacity hover:opacity-70">
                    <span>{row.label}</span>
                    <span className="text-[11px] text-white/55">{row.hint}</span>
                  </a>
                ) : (
                  <p className="flex items-baseline justify-between gap-4 py-3 text-[12px]">
                    <span>{row.label}</span>
                    <span className="text-[11px] text-white/55">{row.hint}</span>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <InquiryForm />
      </div>
    </section>
  );
}
