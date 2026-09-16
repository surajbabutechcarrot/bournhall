import { ArrowLink } from "@/components/ui/ArrowLink";
import { LocationCard } from "@/components/cards/LocationCard";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations } from "@/content/locations";

const clinicLocations = locations.filter((location) => location.slug !== "virtual");

export function LocationsSection() {
  return (
    <section className="bg-white section-y">
      <Container>
        <SectionHeading
          className="mb-8"
          title={
            <>
              Find a Bourn Hall Clinic <span className="text-brand-500">Near You</span>
            </>
          }
          titleClassName="lg:text-[47px] lg:leading-[64px]"
          action={
            <ArrowLink href="/clinics" tone="brand">
              View all locations
            </ArrowLink>
          }
        />

        <div data-reveal>
          <Carousel label="Bourn Hall clinic locations">
          {clinicLocations.map((location, index) => (
            <LocationCard
              key={location.slug}
              href={`/clinics/${location.slug}`}
              name={location.name}
              address={location.address}
              hours={location.hours}
              phone={location.phone}
              image={location.image}
              featured={index === 1}
              className="w-[82%] shrink-0 snap-start sm:w-[48%] lg:w-[calc((100%-4rem)/3)]"
            />
          ))}
        </Carousel>
        </div>
      </Container>
    </section>
  );
}
