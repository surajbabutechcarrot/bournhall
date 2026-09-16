import Image from "next/image";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { fertilityHealth } from "@/content/site-content";
import { images } from "@/lib/images";

export function FertilityHealth() {
  return (
    <section className="surface-bloom relative overflow-hidden lg:h-[862px]">
      {/* The artwork is intentionally wider than the viewport so the subject sits left of centre. */}
      <div className="relative h-[360px] w-full sm:h-[460px] lg:absolute lg:inset-y-0 lg:left-[-394px] lg:h-full lg:w-[1319px]">
        <Image
          src={images.fertilityHealth.src}
          alt={images.fertilityHealth.alt}
          fill
          sizes="(min-width: 1024px) 1319px, 100vw"
          className="object-cover object-top lg:object-left"
        />
      </div>

      <Container className="relative flex flex-col lg:h-full lg:items-end lg:justify-center">
        <div className="py-12 lg:w-[440px] lg:py-0">
          <h2 className="text-[2rem] leading-[1.23] font-medium text-ink-950 sm:text-[2.5rem] lg:text-[52px] lg:leading-[66px]">
            <span className="block">{fertilityHealth.titleLead}</span>
            <span className="block text-brand-500">{fertilityHealth.titleAccent}</span>
          </h2>

          <p className="mt-4 text-lg leading-[28px] text-brand-600">{fertilityHealth.description}</p>

          <Button
            href={fertilityHealth.cta.href}
            size="lg"
            className="mt-8"
            iconBefore={<Calculator aria-hidden className="size-5" strokeWidth={1.6} />}
          >
            {fertilityHealth.cta.label}
          </Button>

          <p className="mt-6 text-lg leading-[28px] text-brand-600">{fertilityHealth.note}</p>

          <TrustBadge className="mt-8" {...fertilityHealth.trust} />
        </div>
      </Container>
    </section>
  );
}
