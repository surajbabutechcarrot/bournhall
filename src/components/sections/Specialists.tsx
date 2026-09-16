import { DoctorCard } from "@/components/cards/DoctorCard";
import { Accent } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { specialists } from "@/content/specialists";

export function Specialists() {
  return (
    <Section tone="gradientPetal">
      <Container>
        <SectionHeading
          title={
            <>
              Meet Our <Accent>Specialists</Accent>
            </>
          }
          description="Internationally trained consultants in reproductive medicine, working as one team across the UAE."
          action={
            <Button href="/doctors" variant="outline" size="sm">
              View all
            </Button>
          }
        />

        <Carousel label="Our fertility specialists">
          {specialists.map((doctor) => (
            <DoctorCard
              key={doctor.slug}
              href={`/doctors/${doctor.slug}`}
              name={doctor.name}
              role={doctor.role}
              specialty={doctor.specialty}
              clinic={doctor.clinic}
              image={doctor.image}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[32%]"
            />
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
