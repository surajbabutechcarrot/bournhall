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
  /** Banner image revealed on hover (Other Treatments row). */
  hoverImage?: { src: string; alt: string };
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
  hoverImage,
  tone = "lilac",
  className,
}: TreatmentCardProps) {
  const alwaysImage = Boolean(image) && !hoverImage;
  const interactiveHover = Boolean(hoverImage);

  return (
    <Link
      href={href}
      className={cn(
        "group relative isolate flex treatment-card-height flex-col justify-between overflow-hidden rounded-[28px] p-6 pb-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 sm:pb-9",
        alwaysImage ? "bg-lilac-100 text-white" : cn(tones[tone], "text-ink-950"),
        className,
      )}
    >
      {alwaysImage && image ? (
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

      {interactiveHover && hoverImage ? (
        <>
          <SiteImage
            src={hoverImage.src}
            alt={hoverImage.alt}
            sizes="(min-width: 1024px) 417px, 80vw"
            className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
          />
          <span
            aria-hidden
            className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(40,12,30,0.2)_0%,rgba(30,8,22,0.7)_50%,rgba(20,5,15,0.92)_100%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
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
            className={cn(
              "size-[96px] object-contain transition-opacity duration-500",
              interactiveHover && "group-hover:opacity-0 group-focus-visible:opacity-0",
            )}
          />
        ) : (
          <div className="size-[96px]" />
        )}

        <span
          className={cn(
            "ml-auto inline-flex items-center gap-2.5 text-sm font-normal leading-5 transition-colors duration-500 sm:text-base",
            alwaysImage ? "text-white" : "text-ink-950",
            interactiveHover && "group-hover:text-white group-focus-visible:text-white",
          )}
        >
          Read more
          <ArrowRight
            aria-hidden
            className={cn(
              "size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1",
              alwaysImage ? "text-white" : "text-brand-500",
              interactiveHover && "group-hover:text-white group-focus-visible:text-white",
            )}
            strokeWidth={1.75}
          />
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-3.5">
        <h3
          className={cn(
            "text-3xl leading-[40px] font-medium tracking-tight transition-colors duration-500 sm:text-[34px]",
            alwaysImage ? "text-white" : "text-ink-950",
            interactiveHover && "group-hover:text-white group-focus-visible:text-white",
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "text-[15px] leading-relaxed transition-colors duration-500 sm:text-base",
            alwaysImage ? "text-white/90" : "text-ink-700",
            interactiveHover && "group-hover:text-white/90 group-focus-visible:text-white/90",
          )}
        >
          {summary}
        </p>
      </div>
    </Link>
  );
}
