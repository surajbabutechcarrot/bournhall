import { FaqSection } from "@/components/sections/FaqSection";
import { FertilityHealth } from "@/components/sections/FertilityHealth";
import { Hero } from "@/components/sections/Hero";
import { HomeCta } from "@/components/sections/HomeCta";
import { Insights } from "@/components/sections/Insights";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { Specialists } from "@/components/sections/Specialists";
import { SupportJourney } from "@/components/sections/SupportJourney";
import { TreatmentsShowcase } from "@/components/sections/TreatmentsShowcase";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Your Fertility Journey Starts Here",
  description: site.description,
  path: "/",
  keywords: [
    "Bourn Hall fertility clinic",
    "IVF Dubai",
    "fertility clinic Abu Dhabi",
    "ICSI UAE",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SupportJourney />
      <FertilityHealth />
      <TreatmentsShowcase />
      <WhyChoose />
      <Specialists />
      <Insights />
      <FaqSection />
      <LocationsSection />
      <HomeCta />
    </>
  );
}
