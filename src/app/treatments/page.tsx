import { HomeCta } from "@/components/sections/HomeCta";
import { TreatmentsShowcase } from "@/components/sections/TreatmentsShowcase";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Fertility Treatments",
  description:
    "Explore IVF, ICSI, IUI, egg freezing, genetic testing and fertility preservation at Bourn Hall UAE.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Care pathways"
        title="Fertility treatments we provide"
        description="A complete range of reproductive care, delivered by internationally trained specialists in JCI-accredited clinics."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments" },
        ]}
        image={images.lab}
      />
      <TreatmentsShowcase pin={false} />
      <HomeCta />
    </>
  );
}
