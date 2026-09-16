import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";

type DoctorCardProps = {
  href: string;
  name: string;
  specialty: string;
  role?: string;
  clinic?: string;
  image: { src: string; alt: string };
  className?: string;
};

export function DoctorCard({
  href,
  name,
  specialty,
  role,
  clinic,
  image,
  className,
}: DoctorCardProps) {
  const location = clinic ?? role;

  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate aspect-square overflow-hidden rounded-3xl bg-petal-50 transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <SiteImage
        src={image.src}
        alt={image.alt}
        sizes="(min-width: 1024px) 400px, 80vw"
        className="absolute inset-0 z-0 size-full"
        imageClassName="object-cover object-top"
      />

      <div className="absolute inset-x-4 bottom-6 z-10 flex items-end justify-between gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-card">
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-bold text-ink-900">{name}</h3>
          <p className="mt-0.5 truncate text-xs text-ink-500">{specialty}</p>
          {location ? (
            <p className="mt-0.5 truncate text-xs font-medium text-brand-500">{location}</p>
          ) : null}
        </div>
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-500 text-white transition-colors group-hover:bg-brand-600">
          <ArrowUpRight aria-hidden className="size-4" />
        </span>
      </div>
    </Link>
  );
}
