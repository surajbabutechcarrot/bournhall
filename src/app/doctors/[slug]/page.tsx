import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getSpecialist, specialists } from "@/content/specialists";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return specialists.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const doctor = getSpecialist(slug);
  if (!doctor) return {};
  return buildMetadata({
    title: doctor.name,
    description: doctor.bio,
    path: `/doctors/${doctor.slug}`,
  });
}

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const doctor = getSpecialist(slug);
  if (!doctor) notFound();

  return (
    <>
      <PageHero
        eyebrow={doctor.clinic}
        title={doctor.name}
        description={doctor.bio}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Specialists", href: "/doctors" },
          { label: doctor.name },
        ]}
        image={doctor.image}
        actions={
          <Button href="/book-appointment" size="lg">
            Book with this specialist
          </Button>
        }
      />
      <Section>
        <Container size="narrow" className="space-y-3 text-[15px] leading-7 text-ink-500">
          <p>
            <strong className="text-ink-800">Role:</strong> {doctor.role}
          </p>
          <p>
            <strong className="text-ink-800">Specialty:</strong> {doctor.specialty}
          </p>
          <p>
            <strong className="text-ink-800">Clinic:</strong> {doctor.clinic}
          </p>
        </Container>
      </Section>
      <CtaBanner
        title="Ready to meet your specialist?"
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
        className="pb-16 sm:pb-20"
      />
    </>
  );
}
