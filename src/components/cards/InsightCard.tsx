import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type InsightCardProps = {
  href: string;
  title: string;
  excerpt: string;
  image: { src: string; alt: string };
  className?: string;
};

export function InsightCard({ href, title, excerpt, image, className }: InsightCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex insight-card-height flex-col justify-between overflow-hidden rounded-3xl px-5 pt-5 pb-5 transition-transform duration-300 hover:-translate-y-1 sm:px-6 sm:pt-6 sm:pb-6 lg:px-7 lg:pt-7 lg:pb-6",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 416px, 90vw"
        className="z-0 object-cover object-[center_22%]"
      />
      <span
        aria-hidden
        className="absolute inset-0 z-0 bg-[linear-gradient(157deg,rgba(0,0,0,0)_8%,rgba(177,72,126,0.35)_72%,rgba(125,21,81,0.55)_100%)]"
      />

      <span className="insight-card-more relative z-10 ml-auto inline-flex items-center gap-2 text-sm leading-5 text-[#fffcfd] sm:gap-3 sm:text-base lg:text-lg lg:leading-[22px]">
        Read more
        <ArrowRight
          aria-hidden
          className="size-7 shrink-0 transition-transform duration-200 group-hover:translate-x-1 sm:size-8 lg:size-[42px]"
          strokeWidth={2}
        />
      </span>

      <div className="insight-card-info relative z-10 flex w-full flex-col gap-2 rounded-[18px] bg-[rgba(125,21,81,0.8)] p-3 sm:gap-3 sm:p-4">
        <h3 className="insight-card-title text-base leading-snug font-medium text-[#fffcfd] sm:text-lg sm:leading-snug lg:text-[clamp(1.05rem,1.4vw,1.375rem)] lg:leading-snug">
          {title}
        </h3>
        <p className="insight-card-excerpt line-clamp-2 text-sm leading-snug font-light text-petal-200 sm:text-base sm:leading-6">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
