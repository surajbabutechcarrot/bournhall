import { ArrowRight, CalendarDays } from "lucide-react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SiteImage } from "@/components/ui/SiteImage";
import {
  aboutAccreditation,
  aboutDifferent,
  aboutHero,
  aboutLegacy,
} from "@/content/about";
import { cn } from "@/lib/cn";

function FeatureColumn({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <ul className="flex h-full flex-col">
      {items.map((item, index) => (
        <li
          key={item.title}
          className={cn(
            "flex flex-1 flex-col justify-center gap-2 py-5 sm:py-6",
            index > 0 && "border-t border-ink-200",
          )}
        >
          <div className="flex items-start gap-2.5">
            <ArrowRight
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-brand-500"
              strokeWidth={2.2}
            />
            <h3 className="text-[15px] font-semibold leading-snug text-brand-500 sm:text-base">
              {item.title}
            </h3>
          </div>
          <p className="pl-[26px] text-sm leading-6 text-ink-500">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function AboutHero() {
  return (
    <PageHero
      title={aboutHero.title}
      description={aboutHero.description}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "About" },
      ]}
      image={aboutHero.image}
      actions={
        <>
          <Button
            href={aboutHero.primary.href}
            size="lg"
            iconBefore={<CalendarDays aria-hidden className="size-4" strokeWidth={1.6} />}
          >
            {aboutHero.primary.label}
          </Button>
          <Button
            href={aboutHero.secondary.href}
            variant="outline"
            size="lg"
            icon={<ArrowRight aria-hidden className="size-4" strokeWidth={1.6} />}
          >
            {aboutHero.secondary.label}
          </Button>
        </>
      }
    />
  );
}

export function AboutLegacy() {
  return (
    <section className="bg-white section-y">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div data-reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-500 uppercase">
              {aboutLegacy.eyebrow}
            </p>
            <h2 className="mt-3 max-w-xl text-[1.85rem] leading-[1.2] font-medium text-ink-950 sm:text-[2.25rem] lg:text-[2.5rem] lg:leading-[1.18]">
              {aboutLegacy.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-ink-500 sm:mt-7">
              {aboutLegacy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div data-reveal className="relative">
            <SiteImage
              src={aboutLegacy.image.src}
              alt={aboutLegacy.image.alt}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] rounded-[28px]"
            />
            <div className="absolute right-4 bottom-4 max-w-[240px] rounded-2xl bg-white p-4 shadow-lift sm:right-6 sm:bottom-6 sm:max-w-[260px] sm:p-5">
              <p className="text-2xl font-semibold text-ink-950">{aboutLegacy.card.title}</p>
              <p className="mt-2 text-base leading-5 text-ink-500">
                {aboutLegacy.card.body}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutDifferent() {
  return (
    <section id="different" className="surface-bloom section-y">
      <Container>
        <h2
          data-reveal
          className="text-center text-[1.85rem] leading-[1.2] font-medium text-ink-950 sm:text-[2.35rem] lg:text-[2.75rem]"
        >
          {aboutDifferent.titleLead}{" "}
          <span className="text-brand-500">{aboutDifferent.titleAccent}</span>
        </h2>

        <p
          data-reveal
          className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-brand-500 sm:mt-6 sm:text-lg sm:leading-8"
        >
          {aboutDifferent.intro}
        </p>

        <div
          data-reveal
          className="mt-10 rounded-[28px] bg-white p-5 shadow-soft sm:mt-12 sm:p-6 lg:mt-14 lg:p-8 xl:p-10"
        >
          <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_minmax(220px,280px)_1fr] lg:gap-0 xl:grid-cols-[1fr_minmax(240px,300px)_1fr]">
            <div className="lg:pr-8 xl:pr-10">
              <FeatureColumn items={aboutDifferent.featuresLeft} />
            </div>

            <div className="lg:border-x lg:border-ink-200 lg:px-6 xl:px-8">
              <SiteImage
                src={aboutDifferent.image.src}
                alt={aboutDifferent.image.alt}
                sizes="300px"
                className="mx-auto aspect-[4/5] w-full max-w-[280px] rounded-[24px] lg:mx-0 lg:h-full lg:min-h-[420px] lg:max-w-none lg:aspect-auto"
              />
            </div>

            <div className="lg:pl-8 xl:pl-10">
              <FeatureColumn items={aboutDifferent.featuresRight} />
            </div>
          </div>
        </div>

        <dl
          data-reveal
          className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-0 lg:mt-14"
        >
          {aboutDifferent.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center gap-2 px-4 text-center",
                index > 0 && "sm:border-l sm:border-ink-200",
              )}
            >
              <dd className="text-3xl font-medium tabular-nums text-ink-950 sm:text-4xl lg:text-[2.75rem]">
                {stat.value}
              </dd>
              <dt className="text-sm font-medium text-ink-500 sm:text-base">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function AboutAccreditation() {
  return (
    <section id="accreditation" className="bg-white section-y">
      <Container>
        <h2
          data-reveal
          className="text-center text-[1.85rem] font-medium text-ink-950 sm:text-[2.35rem] lg:text-[2.75rem]"
        >
          {aboutAccreditation.title}
        </h2>

        <div data-reveal className="mt-10 divide-y divide-ink-200 border-y border-ink-200 sm:mt-12">
          {aboutAccreditation.items.map((item) => (
            <div
              key={item.id}
              className="grid gap-5 py-8 sm:grid-cols-[120px_1fr] sm:items-start sm:gap-8 lg:grid-cols-[140px_220px_1fr] lg:items-center lg:gap-10 lg:py-10"
            >
              <div className="grid size-20 place-items-center rounded-2xl bg-brand-50 text-sm font-bold tracking-wide text-brand-500 sm:size-[88px]">
                {item.logoLabel}
              </div>
              <h3 className="text-lg font-semibold text-ink-950 sm:text-xl">{item.name}</h3>
              <div>
                <p className="text-sm leading-6 text-ink-500 sm:text-[15px] sm:leading-7">
                  {item.body}
                </p>
                <ArrowLink href={item.href} tone="brand" className="mt-3">
                  Read more
                </ArrowLink>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
