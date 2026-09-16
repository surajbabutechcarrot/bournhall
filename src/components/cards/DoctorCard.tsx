import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/cn";

type DoctorCardProps = {
  href: string;
  name: string;
  role: string;
  specialty?: string;
  clinic: string;
  image: { src: string; alt: string };
  className?: string;
};

export function DoctorCard({
  href,
  name,
  role,
  clinic,
  image,
  className,
}: DoctorCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate flex doctor-card-height flex-col justify-end overflow-hidden rounded-[28px] bg-[#f4ebf1] p-4 pb-5 transition-transform duration-300 hover:-translate-y-1 sm:p-5 sm:pb-6 lg:p-6 lg:pb-7",
        className,
      )}
    >
      {/*
        Image is shorter than the card and bottom-anchored so the soft card
        background creates headroom at the top (matches Figma framing).
      */}
      <div className="pointer-events-none absolute inset-x-0 top-[7%] bottom-0 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 416px, 80vw"
          data-no-parallax
          className="object-cover object-[center_18%]"
        />
      </div>

      <div className="doctor-card-info relative z-10 flex w-full flex-col gap-1.5 rounded-2xl bg-white p-3 shadow-card sm:gap-2 sm:p-4">
        <h3 className="doctor-card-name text-lg leading-snug font-medium text-ink-900 sm:text-xl sm:leading-tight">
          {name}
        </h3>
        <p className="doctor-card-role text-sm leading-snug text-brand-500 sm:text-base">{role}</p>
        <p className="doctor-card-clinic flex items-center gap-2 text-sm leading-5 text-ink-500">
          <MapPin
            aria-hidden
            className="size-4 shrink-0 sm:size-[18px]"
            strokeWidth={1.6}
          />
          {clinic}
        </p>
      </div>
    </Link>
  );
}
