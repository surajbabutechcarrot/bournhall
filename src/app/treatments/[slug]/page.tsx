import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getTreatment, treatments } from "@/content/treatments";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatments.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  return buildMetadata({
    title: treatment.name,
    description: treatment.description,
    path: `/treatments/${treatment.slug}`,
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  return (
    <>
      <PageHero
        eyebrow={treatment.category}
        title={treatment.name}
        description={treatment.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
          { label: treatment.name },
        ]}
        image={treatment.image}
        actions={
          <>
            <Button href="/book-appointment" size="lg">
              Book Consultation
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to us
            </Button>
          </>
        }
      />
      <Section>
        <Container size="narrow">
          <h2 className="text-2xl font-semibold text-ink-800">About this treatment</h2>
          <p className="mt-4 text-[15px] leading-7 text-ink-500">{treatment.description}</p>
          <ul className="mt-8 space-y-3">
            {treatment.highlights.map((item) => (
              <li key={item} className="rounded-2xl bg-brand-50 px-5 py-4 text-sm text-ink-700">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBanner
        title={`Start ${treatment.shortName} at Bourn Hall`}
        description="We will help you understand whether this pathway is right for you."
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
      />
    </>
  );
}
