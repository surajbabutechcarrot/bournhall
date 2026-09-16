import Link from "next/link";
import { ArrowRight, Clock, Phone } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";

type LocationCardProps = {
  href: string;
  name: string;
  address: string;
  hours?: string;
  phone?: string;
  image: { src: string; alt: string };
  featured?: boolean;
  className?: string;
};

export function LocationCard({
  href,
  name,
  address,
  hours,
  phone,
  image,
  featured = false,
  className,
}: LocationCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col gap-4 rounded-3xl p-5 transition-colors duration-300",
        featured ? "bg-petal-100" : "bg-mist-100 hover:bg-petal-50",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <SiteImage
          src={image.src}
          alt={image.alt}
          sizes="56px"
          className="size-14 shrink-0 rounded-xl"
        />
        <div className="min-w-0">
          <h3 className="text-base font-bold text-ink-900">{name}</h3>
          <p className="mt-1 text-xs leading-5 text-ink-500">{address}</p>
        </div>
      </div>

      <ul className="space-y-2 text-xs text-ink-600">
        {hours ? (
          <li className="flex items-start gap-2">
            <Clock aria-hidden className="mt-0.5 size-3.5 shrink-0 text-brand-500" />
            <span className="leading-5">{hours}</span>
          </li>
        ) : null}
        {phone ? (
          <li className="flex items-start gap-2">
            <Phone aria-hidden className="mt-0.5 size-3.5 shrink-0 text-brand-500" />
            <span className="leading-5">{phone}</span>
          </li>
        ) : null}
      </ul>

      <span className="mt-auto inline-flex items-center justify-end gap-1.5 text-[13px] font-semibold text-brand-500">
        Get Directions
        <ArrowRight
          aria-hidden
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
