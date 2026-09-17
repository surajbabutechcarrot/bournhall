"use client";

import { useState } from "react";
import { DoctorCard } from "@/components/cards/DoctorCard";
import {
  doctorClinics,
  type DoctorClinicFilter,
  type Specialist,
  doctorsPageContent,
} from "@/content/specialists";
import { cn } from "@/lib/cn";

export function DoctorsDirectory({ doctors }: { doctors: readonly Specialist[] }) {
  const [clinic, setClinic] = useState<DoctorClinicFilter>("All");

  const visible =
    clinic === "All" ? doctors : doctors.filter((doctor) => doctor.clinic === clinic);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
        <p className="text-sm leading-5 text-ink-500">{doctorsPageContent.filterLabel}</p>
        <div
          role="radiogroup"
          aria-label="Filter doctors by clinic"
          className="flex flex-wrap items-center gap-2 sm:gap-3"
        >
          {doctorClinics.map((item) => {
            const isActive = item === clinic;
            return (
              <button
                key={item}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => setClinic(item)}
                className={cn(
                  "shrink-0 rounded-full px-5 py-1.5 text-sm leading-5 transition-colors",
                  isActive
                    ? "bg-brand-500 font-semibold text-white"
                    : "font-medium text-ink-900 hover:text-brand-500",
                )}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {visible.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {visible.map((doctor) => (
            <DoctorCard
              key={doctor.slug}
              href={`/doctors/${doctor.slug}`}
              slug={doctor.slug}
              name={doctor.name}
              role={doctor.role}
              clinic={doctor.clinic}
              image={doctor.image}
              showActions
            />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-sm text-ink-500">
          No specialists at this clinic yet.
        </p>
      )}
    </div>
  );
}
