import { SupportCard } from "@/components/cards/SupportCard";
import { SupportPromoCard } from "@/components/cards/SupportPromoCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsRow } from "@/components/sections/StatsRow";
import { supportCards, supportPromo } from "@/content/site-content";

export function SupportJourney() {
  const [first, second, third, fourth] = supportCards;

  return (
    <section id="support-journey" className="bg-white section-y overflow-x-clip">
      <Container className="min-w-0">
        <SectionHeading
          align="center"
          className="mb-8"
          title={
            <>
              <span className="block">How Can We Support Your</span>
              <span className="block text-brand-500">Journey?</span>
            </>
          }
        />

        <div className="flex min-w-0 flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-5 xl:gap-8" data-reveal-stagger>
          <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-[14px]">
            <SupportCard {...first} number={1} />
            <SupportCard {...second} number={2} />
          </div>

          <SupportPromoCard
            {...supportPromo}
            className="support-promo min-w-0 lg:w-[min(300px,26%)] lg:shrink-0 xl:w-[min(340px,28%)]"
          />

          <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-[14px]">
            <SupportCard {...third} number={3} />
            <SupportCard {...fourth} number={4} />
          </div>
        </div>

        <div data-reveal>
          <StatsRow />
        </div>
      </Container>
    </section>
  );
}
