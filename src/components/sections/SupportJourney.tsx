import { SupportCard } from "@/components/cards/SupportCard";
import { SupportPromoCard } from "@/components/cards/SupportPromoCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsRow } from "@/components/sections/StatsRow";
import { supportCards, supportPromo } from "@/content/site-content";

export function SupportJourney() {
  const [first, second, third, fourth] = supportCards;

  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <Container>
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

        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-8">
          <div className="flex flex-1 flex-col gap-[18px]">
            <SupportCard {...first} number={1} />
            <SupportCard {...second} number={2} />
          </div>

          <SupportPromoCard {...supportPromo} className="lg:w-[387px] lg:shrink-0" />

          <div className="flex flex-1 flex-col gap-[18px]">
            <SupportCard {...third} number={3} />
            <SupportCard {...fourth} number={4} />
          </div>
        </div>

        <StatsRow />
      </Container>
    </section>
  );
}
