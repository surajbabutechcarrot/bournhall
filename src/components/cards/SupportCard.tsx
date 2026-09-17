import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type SupportCardProps = {
  href: string;
  title: string;
  number: number;
  image: { src: string; alt: string };
  className?: string;
  /** Skip GSAP scroll-media parallax (pin / emerge animations). */
  noParallax?: boolean;
};

/**
 * Card artwork from Figma already includes the rounded silhouette and the
 * bottom-right notch the label sits in — so we only overlay number + title.
 */
export function SupportCard({
  href,
  title,
  number,
  image,
  className,
  noParallax = false,
}: SupportCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block aspect-[861/460] w-full overflow-hidden rounded-[28px] transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 431px, 100vw"
        {...(noParallax
          ? { "data-no-parallax": true }
          : { "data-scroll-media": true })}
        className="object-contain object-left-top"
      />

      <span className="absolute top-[6.5%] left-[3.1%] grid aspect-square w-[8%] min-w-7 place-items-center rounded-full bg-[#fffcfd] text-[clamp(0.7rem,0.9vw+0.35rem,1.125rem)] leading-none font-medium text-ink-950">
        {number}
      </span>

      <span className="absolute right-[2%] bottom-[6%] flex max-w-[78%] items-center justify-end gap-1.5 text-right text-[clamp(0.78rem,0.85vw+0.45rem,1.25rem)] leading-tight font-medium text-ink-950 sm:gap-2.5">
        {title}
        <ArrowRight
          aria-hidden
          className="size-[clamp(0.9rem,1.2vw+0.35rem,1.5rem)] shrink-0 text-brand-500 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={1.6}
        />
      </span>
    </Link>
  );
}
