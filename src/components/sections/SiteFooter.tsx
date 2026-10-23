import Image from "next/image";
import { footer } from "@/data/inquiry";
import { logo } from "@/data/navigation";

type Item = { label: string; href?: string };

function FooterLinks({ items, muted = false }: { items: readonly Item[]; muted?: boolean }) {
  return (
    <ul className={`flex flex-wrap justify-center gap-x-[clamp(1.25rem,2.3vw,32px)] gap-y-2 text-[12px] ${muted ? "text-white/65" : ""}`}>
      {items.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <a href={item.href} className="inline-block py-2 transition-opacity hover:opacity-70">
              {item.label}
            </a>
          ) : (
            <span className="inline-block py-2">{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 bg-night-deep font-footer text-[#f4f1ec]">
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

      <div className="relative mx-auto max-w-[var(--content-max)] px-[calc(var(--grid-gutter)+clamp(16px,3.3vw,47px))]">
        <div className="flex flex-col items-center pt-[clamp(3rem,6vw,86px)]">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-auto w-[165px] invert"
          />
          <nav aria-label="Footer" className="mt-[clamp(1.5rem,2.6vw,38px)]">
            <FooterLinks items={footer.navLinks} />
          </nav>
          <div className="mt-1">
            <FooterLinks items={footer.contactLinks} muted />
          </div>
        </div>

        <div className="mt-[clamp(2.5rem,5vw,72px)] flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] py-5 text-[11px] text-white/60">
          <p>{footer.copyright}</p>
          {footer.privacy.href ? (
            <a href={footer.privacy.href}>{footer.privacy.label}</a>
          ) : (
            <p>{footer.privacy.label}</p>
          )}
          <a
            href="https://webasi.co"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
          >
            Design by WEBASI
          </a>
        </div>
      </div>
    </footer>
  );
}
