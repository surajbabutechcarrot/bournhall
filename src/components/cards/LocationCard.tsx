import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Phone } from "lucide-react";
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
        "group flex flex-col items-end rounded-3xl px-8 pt-11 pb-9 transition-transform duration-300 hover:-translate-y-1",
        featured
          ? "bg-[linear-gradient(163deg,#fff7fa_1.78%,#ffdaea_74.85%)]"
          : "bg-petal-50",
        className,
      )}
    >
      <div className="flex w-full flex-col gap-8">
        <div className="flex items-start gap-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={89}
            height={89}
            sizes="89px"
            className="size-[89px] shrink-0 rounded-xl object-cover"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-[28px] leading-[42px] font-medium text-ink-950">{name}</h3>
            <p className="mt-3 text-base leading-6 text-ink-900">{address}</p>
          </div>
        </div>

        <ul className="flex flex-col gap-4 text-base leading-[28px] text-ink-900">
          {hours ? (
            <li className="flex items-start gap-2">
              <Clock aria-hidden className="mt-1 size-[18px] shrink-0 text-brand-500" strokeWidth={1.6} />
              <span>{hours}</span>
            </li>
          ) : null}
          {phone ? (
            <li className="flex items-center gap-2">
              <Phone aria-hidden className="size-[18px] shrink-0 text-brand-500" strokeWidth={1.6} />
              <span>{phone}</span>
            </li>
          ) : null}
        </ul>
      </div>

      <span className="mt-8 inline-flex items-center gap-3 text-lg leading-[22px] text-ink-950">
        Get Directions
        <ArrowRight
          aria-hidden
          className="size-[42px] shrink-0 text-brand-500 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2}
        />
      </span>
    </Link>
  );
}
