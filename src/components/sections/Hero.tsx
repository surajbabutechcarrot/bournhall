import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { heroContent } from "@/content/site-content";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="surface-bloom relative overflow-hidden lg:h-dvh lg:min-h-[720px]">
      {/* Keeps the couple square and pinned to the fold, scaling with the viewport-height hero. */}
      <div className="pointer-events-none absolute right-0 bottom-0 h-[340px] w-full sm:h-[440px] lg:aspect-square lg:h-[88.5%] lg:w-auto">
        <Image
          src={images.heroCouple.src}
          alt={images.heroCouple.alt}
          fill
          priority
          sizes="(min-width: 1024px) 88vh, 100vw"
          className="object-cover object-bottom"
        />
      </div>

      <Container className="relative lg:flex lg:h-full lg:items-center">
        <div className="max-w-[540px] pt-[108px] pb-[300px] sm:pb-[420px] lg:pt-[84px] lg:pb-0">
          <h1 className="text-[2.5rem] leading-[1.12] font-medium text-ink-950 sm:text-5xl lg:text-[66px] lg:leading-[74px]">
            <span className="block">{heroContent.titleLead}</span>
            <span className="block">
              {heroContent.titleRest} <span className="text-brand-500">{heroContent.titleAccent}</span>
            </span>
          </h1>

          <p className="mt-6 max-w-[440px] text-lg leading-[28px] text-brand-600">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              href={heroContent.primary.href}
              size="lg"
              iconBefore={<CalendarDays aria-hidden className="size-5" strokeWidth={1.6} />}
            >
              {heroContent.primary.label}
            </Button>
            <Button
              href={heroContent.secondary.href}
              variant="outline"
              size="lg"
              icon={<ArrowRight aria-hidden className="size-4" strokeWidth={1.6} />}
            >
              {heroContent.secondary.label}
            </Button>
          </div>

          <TrustBadge className="mt-8" {...heroContent.trust} />
        </div>
      </Container>
    </section>
  );
}
