import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { treatments } from "@/content/treatments";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fertility Treatments",
  description:
    "Explore IVF, ICSI, IUI, egg freezing, genetic testing and fertility preservation at Bourn Hall UAE.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Care pathways"
        title="Fertility treatments we provide"
        description="A complete range of reproductive care, delivered by internationally trained specialists in JCI-accredited clinics."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments" },
        ]}
        image={images.lab}
      />
      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item) => (
              <TreatmentCard
                key={item.slug}
                href={`/treatments/${item.slug}`}
                name={item.name}
                summary={item.summary}
                illustration={"illustration" in item.card ? item.card.illustration : undefined}
                image={"image" in item.card ? item.card.image : item.image}
                tone={item.tone}
              />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBanner
        title="Not sure which treatment is right?"
        description="A specialist consultation is the clearest first step."
        primary={{ href: "/book-appointment", label: "Book Consultation" }}
        className="pb-16 sm:pb-20"
      />
    </>
  );
}
