import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { LocationCard } from "@/components/cards/LocationCard";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { HomeCta } from "@/components/sections/HomeCta";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { locations } from "@/content/locations";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Bourn Hall Fertility Clinic UAE. Call 800-IVF (483) or request a callback from Dubai, Abu Dhabi or Al Ain.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We are here to help"
        description={`Call ${site.phone} or share your details and our patient team will call you back.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        image={images.clinic}
      />
      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="sm:p-8">
            <h2 className="text-xl font-semibold text-ink-800">Request a callback</h2>
            <p className="mt-2 mb-6 text-sm text-ink-500">
              Tell us a little about you and we will arrange a convenient time.
            </p>
            <AppointmentForm />
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            {locations
              .filter((item) => item.slug !== "virtual")
              .map((location) => (
                <LocationCard
                  key={location.slug}
                  href={`/clinics/${location.slug}`}
                  name={location.name}
                  address={location.address}
                  image={location.image}
                />
              ))}
          </div>
        </Container>
      </Section>
      <HomeCta />
    </>
  );
}
