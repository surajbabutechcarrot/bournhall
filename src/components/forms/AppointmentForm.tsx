"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { treatments } from "@/content/treatments";
import { locations } from "@/content/locations";

const inputClass =
  "h-11 w-full rounded-full border border-brand-100 bg-white px-4 text-sm text-ink-800 outline-none transition-shadow placeholder:text-ink-400 focus:border-brand-300 focus:shadow-lift";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-[1.75rem] bg-brand-50 p-8 text-center">
        <p className="text-lg font-semibold text-ink-800">Thank you</p>
        <p className="mt-2 text-sm leading-6 text-ink-500">
          Our patient team will contact you shortly to confirm your consultation.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="grid gap-1.5 text-sm font-medium text-ink-700">
        Full name
        <input name="name" required autoComplete="name" className={inputClass} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink-700">
        Phone
        <input name="phone" type="tel" required autoComplete="tel" className={inputClass} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink-700">
        Email
        <input name="email" type="email" required autoComplete="email" className={inputClass} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink-700">
        Preferred location
        <select name="location" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a clinic
          </option>
          {locations.map((location) => (
            <option key={location.slug} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink-700">
        Service
        <select name="service" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {treatments.map((treatment) => (
            <option key={treatment.slug} value={treatment.name}>
              {treatment.name}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink-700">
        Message
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-3xl border border-brand-100 bg-white px-4 py-3 text-sm text-ink-800 outline-none placeholder:text-ink-400 focus:border-brand-300 focus:shadow-lift"
        />
      </label>
      <Button type="submit" size="lg" className="mt-2 w-full">
        Request a callback
      </Button>
    </form>
  );
}
