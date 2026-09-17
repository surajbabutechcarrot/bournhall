import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { DetailFact, DetailSection } from "@/components/ui/DetailSection";
import { PageHero } from "@/components/ui/PageHero";
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
      <DetailSection className="space-y-3">
        <DetailFact label="Role" value={doctor.role} />
        <DetailFact label="Specialty" value={doctor.specialty} />
        <DetailFact label="Clinic" value={doctor.clinic} />
      </DetailSection>
      <CtaBanner
        title="Ready to meet your specialist?"
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
      />
    </>
  );
}
