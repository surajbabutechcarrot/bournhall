import { ArrowRight } from "lucide-react";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { specialists } from "@/content/specialists";

export function Specialists() {
  return (
    <section className="surface-bloom section-y">
      <Container>
        <SectionHeading
          className="mb-10 lg:mb-12"
          title={
            <>
              Meet Our <span className="text-brand-500">Specialists</span>
            </>
          }
          description="Experienced specialists dedicated to providing personalised fertility care."
          action={
            <Button
              href="/doctors"
              variant="outline"
              size="lg"
              icon={<ArrowRight aria-hidden className="size-4" strokeWidth={1.6} />}
            >
              View all Specialists
            </Button>
          }
        />

        <div data-reveal>
          <Carousel label="Our fertility specialists" showNext showPrev>
          {specialists.map((doctor) => (
            <DoctorCard
              key={doctor.slug}
              href={`/doctors/${doctor.slug}`}
              name={doctor.name}
              role={doctor.role}
              clinic={doctor.clinic}
              image={doctor.image}
              className="w-[80%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-4rem)/3)]"
            />
          ))}
        </Carousel>
        </div>
      </Container>
    </section>
  );
}
