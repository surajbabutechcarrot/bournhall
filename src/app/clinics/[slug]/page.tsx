import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getLocation, locations } from "@/content/locations";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.title,
    description: location.description,
    path: `/clinics/${location.slug}`,
  });
}

export default async function ClinicPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <>
      <PageHero
        eyebrow="Our clinics"
        title={location.title}
        description={location.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Clinics", href: "/clinics" },
          { label: location.name },
        ]}
        image={location.image}
        actions={
          <Button href="/book-appointment" size="lg">
            Book at {location.name}
          </Button>
        }
      />
      <Section>
        <Container size="narrow" className="space-y-4 text-[15px] leading-7 text-ink-500">
          <p>
            <strong className="text-ink-800">Address:</strong> {location.address}
          </p>
          <p>
            <strong className="text-ink-800">Hours:</strong> {location.hours}
          </p>
          <p>
            <strong className="text-ink-800">Phone:</strong> {location.phone}
          </p>
        </Container>
      </Section>
      <CtaBanner
        title="Visit us or start online"
        description="A first consultation can be in clinic or virtual."
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
        className="pb-16 sm:pb-20"
      />
    </>
  );
}
