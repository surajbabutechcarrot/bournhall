import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { HomeCta } from "@/components/sections/HomeCta";
import { DetailFact, DetailSection } from "@/components/ui/DetailSection";
import { PageHero } from "@/components/ui/PageHero";
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
      <DetailSection>
        <DetailFact label="Address" value={location.address} />
        <DetailFact label="Hours" value={location.hours} />
        <DetailFact label="Phone" value={location.phone} />
      </DetailSection>
      <HomeCta />
    </>
  );
}
