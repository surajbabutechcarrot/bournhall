"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight, CircleUserRound, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SelectField } from "@/components/ui/SelectField";
import { treatments } from "@/content/treatments";
import { locations } from "@/content/locations";
import { cn } from "@/lib/cn";

const fieldShell =
  "flex h-[52px] w-full items-center gap-3 rounded-xl border border-[#e6dde3] bg-white px-4 text-[15px] text-ink-900 outline-none transition-colors placeholder:text-[#9a9096] focus-within:border-brand-400";

const controlClass =
  "h-full w-full min-w-0 border-0 bg-transparent text-[15px] leading-5 text-ink-900 outline-none placeholder:text-[#9a9096]";

const clinicOptions = locations
  .filter((location) => location.slug !== "virtual")
  .map((location) => ({ value: location.name, label: location.name }));

const treatmentOptions = treatments.map((treatment) => ({
  value: treatment.name,
  label: treatment.shortName || treatment.name,
}));

function Field({
  label,
  icon,
  children,
  className,
}: {
  label: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("grid gap-2 text-sm font-medium text-ink-900", className)}>
      {label}
      <span className={fieldShell}>
        {icon ? <span className="shrink-0 text-[#8a7f86]">{icon}</span> : null}
        {children}
      </span>
    </label>
  );
}

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl bg-brand-50 p-8 text-center sm:p-10">
        <p className="text-xl font-semibold text-brand-500">Thank you</p>
        <p className="mt-2 text-sm leading-6 text-ink-700">
          Our care team will reach out within 24 hours to confirm a time that works for you.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const location = (form.elements.namedItem("location") as HTMLInputElement | null)?.value;
        const service = (form.elements.namedItem("service") as HTMLInputElement | null)?.value;
        if (!location || !service) return;
        setSubmitted(true);
      }}
    >
      <h2 className="text-[1.65rem] font-semibold leading-tight tracking-tight text-brand-500 sm:text-[28px] sm:leading-9">
        Submit Your Query
      </h2>

      <Field
        label="Full Name"
        icon={<CircleUserRound aria-hidden className="size-[20px]" strokeWidth={1.5} />}
      >
        <input
          name="name"
          required
          autoComplete="name"
          placeholder="Your Full name"
          className={controlClass}
        />
      </Field>

      <Field label="Phone Number" icon={<Phone aria-hidden className="size-[18px]" strokeWidth={1.5} />}>
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+971"
          className={controlClass}
        />
      </Field>

      <Field label="Email address" icon={<Mail aria-hidden className="size-[18px]" strokeWidth={1.5} />}>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@gmail.com"
          className={controlClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
        <SelectField
          name="location"
          label="Preferred Clinic"
          placeholder="Select clinic"
          options={clinicOptions}
          required
        />
        <SelectField
          name="service"
          label="Treatment interest"
          placeholder="Select treatment"
          options={treatmentOptions}
          required
        />
      </div>

      <label className="grid gap-2 text-sm font-medium text-ink-900">
        Anything you&apos;d like us to know (optional)
        <textarea
          name="message"
          rows={4}
          placeholder="Share any details that will help us prepare for your consultation"
          className="min-h-[110px] w-full resize-y rounded-xl border border-[#e6dde3] bg-white px-4 py-3.5 text-[15px] leading-6 text-ink-900 outline-none transition-colors placeholder:text-[#9a9096] focus:border-brand-400"
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-ink-700">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 size-4 shrink-0 rounded-[3px] border border-[#cfc6cb] text-brand-500 accent-brand-500"
        />
        <span>
          I agree to be contacted by Bourn Hall regarding my enquiry and consent to the{" "}
          <a href="/privacy" className="font-medium text-brand-500 underline-offset-2 hover:underline">
            privacy policy
          </a>
          .
        </span>
      </label>

      <Button
        type="submit"
        size="lg"
        className="mt-1 h-[52px] w-full justify-center rounded-full text-[15px]"
        icon={<ArrowRight aria-hidden className="size-4" strokeWidth={1.8} />}
      >
        Book a Consultation
      </Button>
    </form>
  );
}
