import { LocationCard } from "@/components/cards/LocationCard";
import { Accent } from "@/components/ui/Accent";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations } from "@/content/locations";

export function LocationsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title={
            <>
              Find a Bourn Hall Clinic <Accent>Near You</Accent>
            </>
          }
          action={<ArrowLink href="/clinics">View all locations</ArrowLink>}
        />

        <Carousel label="Bourn Hall clinic locations">
          {locations.map((location, index) => (
            <LocationCard
              key={location.slug}
              href={`/clinics/${location.slug}`}
              name={location.name}
              address={location.address}
              hours={location.hours}
              phone={location.phone}
              image={location.image}
              featured={index === 1}
              className="w-[82%] shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
            />
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
