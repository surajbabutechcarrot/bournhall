import { LocationCard } from "@/components/cards/LocationCard";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { locations } from "@/content/locations";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Clinics",
  description:
    "Visit Bourn Hall Fertility Clinic in Dubai, Abu Dhabi or Al Ain, or start with a virtual consultation.",
  path: "/clinics",
});

export default function ClinicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Our clinics across the UAE"
        description="JCI-accredited fertility centres in Dubai, Abu Dhabi and Al Ain, with virtual care when you need it."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Clinics" },
        ]}
        image={images.dubai}
      />
      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <LocationCard
                key={location.slug}
                href={`/clinics/${location.slug}`}
                name={location.title}
                address={location.address}
                hours={location.hours}
                phone={location.phone}
                image={location.image}
              />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBanner
        title="Prefer to talk first?"
        description="Call 800-IVF (483) or request a callback."
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
      />
    </>
  );
}
