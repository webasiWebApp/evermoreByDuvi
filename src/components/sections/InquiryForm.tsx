"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { inquiry } from "@/data/inquiry";

const fieldClass =
  "w-full border-0 border-b border-white/25 bg-transparent py-3 text-[15px] font-light text-[#f4f1ec] placeholder:text-white/35 focus:border-white/70 focus:outline-none";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-white/60">
        {label}
      </label>
      {children}
    </div>
  );
}

function Chevron() {
  return (
    <svg
      aria-hidden
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      className="pointer-events-none absolute bottom-[18px] right-1"
    >
      <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function InquiryForm() {
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (inquiry.formAction) return;
    event.preventDefault();
    setStatus("Thank you. This form is not connected to a mailbox yet, so nothing was sent.");
  };

  return (
    <form
      id="inquire-form"
      action={inquiry.formAction}
      method={inquiry.formAction ? "post" : undefined}
      onSubmit={onSubmit}
      className="grid gap-x-[clamp(1.5rem,3.4vw,36px)] gap-y-5 sm:grid-cols-2"
    >
      <Field label="Your name" htmlFor="inq-name">
        <input id="inq-name" name="name" type="text" autoComplete="name" required className={fieldClass} />
      </Field>
      <Field label="Email" htmlFor="inq-email">
        <input id="inq-email" name="email" type="email" autoComplete="email" required className={fieldClass} />
      </Field>

      <Field label="Type of event" htmlFor="inq-type">
        <div className="relative">
          <select id="inq-type" name="type" defaultValue="" className={`${fieldClass} appearance-none pr-6`}>
            <option value="" className="text-ink">Choose one</option>
            {inquiry.eventTypes.map((type) => (
              <option key={type} value={type} className="text-ink">{type}</option>
            ))}
          </select>
          <Chevron />
        </div>
      </Field>
      <Field label="Event date" htmlFor="inq-date">
        <input id="inq-date" name="date" type="date" className={`${fieldClass} [color-scheme:dark]`} />
      </Field>

      <Field label="Number of guests" htmlFor="inq-guests">
        <div className="relative">
          <select id="inq-guests" name="guests" defaultValue="" className={`${fieldClass} appearance-none pr-6`}>
            <option value="" className="text-ink">Choose a range</option>
            {inquiry.guestRanges.map((range) => (
              <option key={range} value={range} className="text-ink">{range}</option>
            ))}
          </select>
          <Chevron />
        </div>
      </Field>
      <Field label="Phone (optional)" htmlFor="inq-phone">
        <input id="inq-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </Field>

      <Field label="Venue or location" htmlFor="inq-venue">
        <input id="inq-venue" name="venue" type="text" placeholder="If you have one in mind" className={fieldClass} />
      </Field>
      <Field label="Approximate budget" htmlFor="inq-budget">
        <input id="inq-budget" name="budget" type="text" className={fieldClass} />
      </Field>

      <div className="sm:col-span-2">
        <Field label="Tell us about it" htmlFor="inq-message">
          <textarea
            id="inq-message"
            name="message"
            rows={3}
            placeholder="The feeling you’re after, ideas you love, anything we should know"
            className={`${fieldClass} resize-y`}
          />
        </Field>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 sm:col-span-2">
        <p className="text-[12px] font-light text-white/60">{inquiry.replyNote}</p>
        <button
          type="submit"
          className="bg-paper px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-opacity duration-[var(--motion-fast)] hover:opacity-85"
        >
          Send inquiry
        </button>
      </div>

      <p role="status" className="text-[13px] font-light text-white/80 sm:col-span-2">
        {status}
      </p>
    </form>
  );
}
