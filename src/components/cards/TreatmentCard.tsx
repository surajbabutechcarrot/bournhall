import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";

const tones = {
  lilac: "bg-lilac-100",
  petal: "bg-[linear-gradient(159deg,#fff7fa_1.78%,#ffdaea_74.85%)]",
  featured: "bg-lilac-100",
  mist: "bg-mist-50",
} as const;

type TreatmentCardProps = {
  href: string;
  name: string;
  summary: string;
  illustration?: string;
  image?: { src: string; alt: string };
  icon?: string;
  tone?: keyof typeof tones;
  className?: string;
};

export function TreatmentCard({
  href,
  name,
  summary,
  illustration,
  image,
  tone = "lilac",
  className,
}: TreatmentCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate flex treatment-card-height flex-col justify-between overflow-hidden rounded-[28px] p-6 pb-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 sm:pb-9",
        image ? "bg-lilac-100 text-white" : cn(tones[tone], "text-ink-950"),
        className,
      )}
    >
      {image ? (
        <>
          <SiteImage
            src={image.src}
            alt={image.alt}
            sizes="(min-width: 1024px) 417px, 80vw"
            className="absolute inset-0 z-0"
          />
          <span
            aria-hidden
            className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(40,12,30,0.2)_0%,rgba(30,8,22,0.7)_50%,rgba(20,5,15,0.92)_100%)]"
          />
        </>
      ) : null}

      <div className="relative z-10 flex items-start justify-between gap-4">
        {illustration ? (
          <Image
            src={illustration}
            alt=""
            width={100}
            height={100}
            className="size-[96px] object-contain"
          />
        ) : (
          <div className="size-[96px]" />
        )}

        <span
          className={cn(
            "ml-auto inline-flex items-center gap-2.5 text-sm sm:text-base font-normal leading-5",
            image ? "text-white" : "text-ink-950",
          )}
        >
          Read more
          <ArrowRight
            aria-hidden
            className={cn(
              "size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1",
              image ? "text-white" : "text-brand-500",
            )}
            strokeWidth={1.75}
          />
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-3.5">
        <h3
          className={cn(
            "text-3xl sm:text-[34px] leading-[40px] font-medium tracking-tight",
            image ? "text-white" : "text-ink-950",
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "text-[15px] sm:text-base leading-relaxed",
            image ? "text-white/90" : "text-ink-700",
          )}
        >
          {summary}
        </p>
      </div>
    </Link>
  );
}
