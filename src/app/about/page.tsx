import {
  AboutAccreditation,
  AboutDifferent,
  AboutHero,
  AboutLegacy,
} from "@/components/sections/AboutSections";
import { AboutHistory } from "@/components/sections/AboutHistory";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Bourn Hall",
  description:
    "Bourn Hall was founded by the pioneers of IVF. Today our UAE clinics in Dubai, Abu Dhabi and Al Ain continue that heritage with accredited, compassionate care.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutLegacy />
      <AboutDifferent />
      <AboutHistory />
      <AboutAccreditation />
      <CtaBanner
        title="Ready to Take the Next Step?"
        description="Meet a specialist and leave with a clear, personalised next step for your fertility journey."
        primary={{ href: "/book-appointment", label: "Book a Consultation" }}
        className="pb-16 sm:pb-20"
      />
    </>
  );
}
