import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";

type TestimonialCardProps = {
  quote: string;
  name: string;
  treatment: string;
  image: { src: string; alt: string };
  className?: string;
};

export function TestimonialCard({
  quote,
  name,
  treatment,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <article className={cn("relative overflow-hidden rounded-[1.75rem]", className)}>
      <SiteImage
        src={image.src}
        alt={image.alt}
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="aspect-[3/4]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="text-sm leading-6">“{quote}”</p>
        <p className="mt-3 text-sm font-semibold">{name}</p>
        <p className="text-xs text-white/75">{treatment}</p>
      </div>
    </article>
  );
}
