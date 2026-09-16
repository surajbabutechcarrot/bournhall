import { DoctorCard } from "@/components/cards/DoctorCard";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { specialists } from "@/content/specialists";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Specialists",
  description:
    "Meet the Bourn Hall fertility specialists across Dubai, Abu Dhabi and Al Ain.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Meet our specialists"
        description="Internationally trained consultants in reproductive medicine, embryology and urology — working as one team."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Specialists" },
        ]}
        image={images.consultation}
      />
      <Section>
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            {specialists.map((doctor) => (
              <DoctorCard
                key={doctor.slug}
                href={`/doctors/${doctor.slug}`}
                name={doctor.name}
                role={doctor.role}
                clinic={doctor.clinic}
                image={doctor.image}
              />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBanner
        title="Request a specialist consultation"
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
        className="pb-16 sm:pb-20"
      />
    </>
  );
}
