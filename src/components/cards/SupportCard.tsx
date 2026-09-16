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
};

/**
 * Card artwork from Figma already includes the rounded silhouette and the
 * bottom-right notch the label sits in — so we only overlay number + title.
 */
export function SupportCard({ href, title, number, image, className }: SupportCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block aspect-[861/460] w-full transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 431px, 100vw"
        className="object-contain object-left-top"
      />

      <span className="absolute top-[6.5%] left-[3.1%] grid aspect-square w-[8%] place-items-center rounded-full bg-[#fffcfd] text-[clamp(0.75rem,1.05vw,1.125rem)] leading-5 font-medium text-ink-950">
        {number}
      </span>

      <span className="absolute right-[2.2%] bottom-[7%] flex max-w-[70%] items-center justify-end gap-2.5 text-right text-[clamp(0.9rem,1.45vw,1.375rem)] leading-5 font-medium text-ink-950">
        {title}
        <ArrowRight
          aria-hidden
          className="size-[clamp(1rem,1.8vw,1.6875rem)] shrink-0 text-brand-500 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={1.6}
        />
      </span>
    </Link>
  );
}
