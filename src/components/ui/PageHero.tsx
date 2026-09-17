import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  /** Brand-colored line under the title (treatment detail pages). */
  subtitle?: ReactNode;
  description?: string;
  crumbs?: Crumb[];
  image?: { src: string; alt: string };
  imageClassName?: string;
  imageMediaClassName?: string;
  titleClassName?: string;
  actions?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  crumbs,
  image,
  imageClassName,
  imageMediaClassName,
  titleClassName,
  actions,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "surface-hero pt-[calc(var(--header-h)+1.5rem)] pb-14 sm:pt-[calc(var(--header-h)+2rem)] sm:pb-16",
        className,
      )}
    >
      <Container>
        {crumbs ? <Breadcrumbs items={crumbs} className="mb-6" /> : null}
        <div className={cn("grid items-center gap-10", image && "lg:grid-cols-2 lg:gap-14")}>
          <div>
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
                {eyebrow}
              </p>
            ) : null}
            <h1
              className={cn(
                "max-w-xl text-[2.25rem] font-bold leading-[1.15] tracking-tight text-ink-900 sm:text-[2.75rem]",
                titleClassName,
              )}
            >
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-3 max-w-xl text-xl font-medium leading-snug text-brand-500 sm:mt-4 sm:text-2xl">
                {subtitle}
              </p>
            ) : null}
            {description ? (
              <p className="mt-4 max-w-xl text-base leading-7 text-ink-500 sm:text-[17px] sm:leading-8">
                {description}
              </p>
            ) : null}
            {actions ? (
              <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">{actions}</div>
            ) : null}
          </div>
          {image ? (
            <SiteImage
              src={image.src}
              alt={image.alt}
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className={cn("aspect-[5/4] rounded-3xl shadow-soft", imageClassName)}
              imageClassName={imageMediaClassName}
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
