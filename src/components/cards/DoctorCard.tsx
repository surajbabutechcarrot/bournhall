import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";

type DoctorCardProps = {
  href: string;
  name: string;
  role: string;
  specialty?: string;
  clinic: string;
  image: { src: string; alt: string };
  className?: string;
  /** Listing page: referral + profile actions inside the info panel. */
  showActions?: boolean;
  slug?: string;
};

export function DoctorCard({
  href,
  name,
  role,
  clinic,
  image,
  className,
  showActions = false,
  slug,
}: DoctorCardProps) {
  const referralHref = slug
    ? `/book-appointment?doctor=${encodeURIComponent(slug)}`
    : "/book-appointment";

  const info = (
    <div
      className={cn(
        "doctor-card-info relative z-10 flex w-full flex-col gap-1.5 rounded-2xl bg-white p-3 shadow-card sm:gap-2 sm:p-4",
        showActions && "gap-2 p-3.5 sm:p-4",
      )}
    >
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
      {showActions ? (
        <div className="mt-1 flex gap-2">
          <Button
            href={referralHref}
            variant="outline"
            size="xs"
            className="h-8 min-w-0 flex-1 shrink px-2 text-[12px] font-medium sm:px-3 sm:text-[13px]"
          >
            Submit a Referral
          </Button>
          <Button
            href={href}
            variant="outline"
            size="xs"
            className="h-8 min-w-0 flex-1 shrink px-2 text-[12px] font-medium sm:px-3 sm:text-[13px]"
          >
            Know More
          </Button>
        </div>
      ) : null}
    </div>
  );

  const portrait = (
    <div className="pointer-events-none absolute inset-x-0 top-[7%] bottom-0 overflow-hidden">
      <SiteImage
        src={image.src}
        alt={image.alt}
        sizes="(min-width: 1024px) 416px, 80vw"
        noParallax
        className="absolute inset-0"
        imageClassName="object-[center_18%]"
      />
    </div>
  );

  const frameClass = cn(
    "group relative isolate flex flex-col justify-end overflow-hidden rounded-[28px] bg-[#f4ebf1] p-4 pb-5 transition-transform duration-300 hover:-translate-y-1 sm:p-5 sm:pb-6 lg:p-6 lg:pb-7",
    showActions ? "doctor-card-listing-height" : "doctor-card-height",
    className,
  );

  if (showActions) {
    return (
      <article className={frameClass}>
        {portrait}
        {info}
      </article>
    );
  }

  return (
    <Link href={href} className={frameClass}>
      {portrait}
      {info}
    </Link>
  );
}
