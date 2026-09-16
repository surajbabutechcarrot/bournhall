import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  crumbs?: Crumb[];
  image?: { src: string; alt: string };
  actions?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image,
  actions,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("surface-hero pt-10 pb-14 sm:pt-14 sm:pb-16", className)}>
      <Container>
        {crumbs ? <Breadcrumbs items={crumbs} className="mb-6" /> : null}
        <div className={cn("grid items-center gap-10", image && "lg:grid-cols-2")}>
          <div>
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-xl text-[2.25rem] font-bold leading-[1.15] tracking-tight text-ink-900 sm:text-[2.75rem]">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-xl text-base leading-7 text-ink-500">{description}</p>
            ) : null}
            {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
          {image ? (
            <SiteImage
              src={image.src}
              alt={image.alt}
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="aspect-[5/4] rounded-3xl shadow-soft"
            />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
