import { ArrowRight } from "lucide-react";
import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { treatments } from "@/content/treatments";

export function TreatmentsShowcase() {
  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <Container>
        <SectionHeading
          className="mb-8"
          title={
            <>
              Fertility Treatments at <span className="text-brand-500">Bourn Hall</span>
            </>
          }
          description="Explore personalised fertility treatments supported by experienced specialists and advanced reproductive care."
          action={
            <Button
              href="/treatments"
              variant="outline"
              size="lg"
              icon={<ArrowRight aria-hidden className="size-4" strokeWidth={1.6} />}
            >
              View all Treatments
            </Button>
          }
        />
      </Container>

      {/* The rail is intentionally full-bleed so the next card peeks past the gutter. */}
      <Carousel
        label="Fertility treatments"
        className="mx-auto w-full max-w-[1512px]"
        railClassName="px-5 sm:px-8 lg:px-[100px]"
      >
        {treatments.map((item) => (
          <TreatmentCard
            key={item.slug}
            href={`/treatments/${item.slug}`}
            name={item.shortName}
            summary={item.summary}
            illustration={"illustration" in item.card ? item.card.illustration : undefined}
            image={"image" in item.card ? item.card.image : undefined}
            tone={item.card.tone}
            className="w-[80%] shrink-0 snap-start sm:w-[45%] lg:w-[416px]"
          />
        ))}
      </Carousel>
    </section>
  );
}
