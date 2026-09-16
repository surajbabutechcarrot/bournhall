import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Book an Appointment",
  description:
    "Book a fertility consultation at Bourn Hall in Dubai, Abu Dhabi or Al Ain. Call 800-IVF (483) or request a callback.",
  path: "/book-appointment",
});

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Book a consultation"
        description="Share your details and our coordinators will help you choose the right clinic, specialist and time."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Book Appointment" },
        ]}
        image={images.consultation}
      />
      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-ink-800">What to expect</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-ink-500">
              <li>A confidential first conversation about your history and goals.</li>
              <li>Guidance on tests, timelines and the most suitable treatment options.</li>
              <li>Support in English and Arabic, in clinic or virtually.</li>
              <li>Prefer to call? {site.phone}</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-lift sm:p-8">
            <AppointmentForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
