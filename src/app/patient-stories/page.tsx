import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/content/site-content";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Patient Stories",
  description:
    "Read fertility journeys from families treated at Bourn Hall clinics in Dubai, Abu Dhabi and Al Ain.",
  path: "/patient-stories",
});

export default function PatientStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Patient stories & testimonials"
        description="Every journey is different. These families have shared their experience with Bourn Hall so others can feel less alone."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Patient Stories" },
        ]}
        image={images.familyOne}
      />
      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBanner
        title="Begin your own journey"
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
      />
    </>
  );
}
