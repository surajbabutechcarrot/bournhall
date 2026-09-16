import { Button } from "@/components/ui/Button";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MediaSplit } from "@/components/ui/MediaSplit";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { whyChoose } from "@/content/site-content";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Bourn Hall",
  description:
    "Bourn Hall was founded by the pioneers of IVF. Today our UAE clinics in Dubai, Abu Dhabi and Al Ain continue that heritage with JCI-accredited care.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="The clinic that pioneered IVF"
        description="Bourn Hall was founded by the team behind the world’s first IVF baby in 1978. In the UAE, we combine that heritage with Mediclinic-backed care."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        image={images.clinic}
        actions={
          <Button href="/book-appointment" size="lg">
            Book Consultation
          </Button>
        }
      />
      <Section>
        <MediaSplit image={images.consultation}>
          <h2 className="text-3xl font-semibold tracking-tight text-ink-800">
            Why families choose Bourn Hall
          </h2>
          <ol className="mt-8 space-y-5">
            {whyChoose.map((item) => (
              <li key={item.number}>
                <p className="text-sm font-semibold text-brand-600">{item.number}</p>
                <h3 className="mt-1 font-semibold text-ink-800">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-ink-500">{item.body}</p>
              </li>
            ))}
          </ol>
        </MediaSplit>
      </Section>
      <CtaBanner
        title="Ready to begin?"
        description="Meet a specialist and leave with a clear next step."
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
        className="pb-16 sm:pb-20"
      />
    </>
  );
}
