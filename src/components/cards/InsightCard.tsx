import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
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
        "group relative flex aspect-[9/10] flex-col justify-end overflow-hidden rounded-3xl",
        className,
      )}
    >
      <SiteImage
        src={image.src}
        alt={image.alt}
        sizes="(min-width: 1024px) 33vw, 90vw"
        className="absolute inset-0"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,20,32,0)_35%,rgba(31,20,32,0.35)_100%)]"
      />

      <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-colors group-hover:bg-white/40">
        <ArrowUpRight aria-hidden className="size-4" />
      </span>

      <div className="relative m-3 rounded-2xl bg-brand-500/95 p-5 text-white backdrop-blur-sm">
        <h3 className="text-[15px] font-bold leading-snug">{title}</h3>
        <p className="mt-2 text-xs leading-5 text-white/80">{excerpt}</p>
      </div>
    </Link>
  );
}
