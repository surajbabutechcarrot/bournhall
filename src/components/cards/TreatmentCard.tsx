import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
        "group relative isolate flex h-[421px] flex-col justify-between overflow-hidden rounded-3xl px-8 py-11 transition-transform duration-300 hover:-translate-y-1",
        image ? "bg-lilac-100 text-white" : cn(tones[tone], "text-ink-950"),
        className,
      )}
    >
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 417px, 80vw"
            className="z-0 object-cover"
          />
          <span
            aria-hidden
            className="absolute inset-0 z-0 bg-[linear-gradient(187deg,rgba(0,0,0,0)_7%,rgba(30,10,18,0.7)_72%)]"
          />
        </>
      ) : null}

      <div className="relative z-10 flex items-start justify-between gap-4">
        {illustration ? (
          <Image
            src={illustration}
            alt=""
            width={114}
            height={114}
            className="size-[114px] object-contain"
          />
        ) : null}

        <span className="ml-auto inline-flex items-center gap-3 text-lg leading-[22px]">
          Read more
          <ArrowRight
            aria-hidden
            className={cn(
              "size-[42px] shrink-0 transition-transform duration-200 group-hover:translate-x-1",
              !image && "text-brand-500",
            )}
            strokeWidth={2}
          />
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <h3 className="text-4xl leading-[42px] font-medium">{name}</h3>
        <p className="text-lg leading-7">{summary}</p>
      </div>
    </Link>
  );
}
