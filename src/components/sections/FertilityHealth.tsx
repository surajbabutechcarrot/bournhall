import Image from "next/image";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { fertilityHealth } from "@/content/site-content";
import { images } from "@/lib/images";

export function FertilityHealth() {
  return (
    <section className="fertility-section surface-bloom relative overflow-x-clip">
      {/*
        Contained art on scaled viewports. Full Figma bleed only on the
        tall 1512+ design frame (see globals.css).
      */}
      <div data-reveal className="fertility-art relative h-[320px] w-full overflow-hidden sm:h-[400px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-full">
        <Image
          src={images.fertilityHealth.src}
          alt={images.fertilityHealth.alt}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[center_15%] lg:object-[65%_center]"
        />
      </div>

      <Container className="relative flex flex-col lg:h-full lg:min-h-[inherit] lg:items-end lg:justify-center">
        <div
          data-reveal
          className="fertility-copy max-w-xl py-10 sm:py-12 lg:w-[min(100%,420px)] lg:max-w-none lg:py-8 xl:w-[440px]"
        >
          <h2 className="fertility-title text-[2rem] leading-[1.23] font-medium text-ink-950 sm:text-[2.5rem] lg:text-[clamp(2.15rem,3.2vw,3.25rem)] lg:leading-[1.2]">
            <span className="block">{fertilityHealth.titleLead}</span>
            <span className="block text-brand-500">{fertilityHealth.titleAccent}</span>
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-600 sm:mt-4 sm:text-lg sm:leading-[28px]">
            {fertilityHealth.description}
          </p>

          <Button
            href={fertilityHealth.cta.href}
            size="lg"
            className="mt-6 w-full justify-center sm:mt-8 sm:w-auto"
            iconBefore={<Calculator aria-hidden className="size-5" strokeWidth={1.6} />}
          >
            {fertilityHealth.cta.label}
          </Button>

          <p className="mt-4 text-base leading-relaxed text-brand-600 sm:mt-6 sm:text-lg sm:leading-[28px]">
            {fertilityHealth.note}
          </p>

          <TrustBadge className="mt-6 sm:mt-8" {...fertilityHealth.trust} />
        </div>
      </Container>
    </section>
  );
}
