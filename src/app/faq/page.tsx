import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/content/site-content";
import { images } from "@/lib/images";
import { faqJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about IVF, first consultations, accreditation and international patients at Bourn Hall UAE.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Frequently asked questions"
        description="A starting point before your first visit. Your specialist will answer anything specific to your care."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "FAQs" },
        ]}
        image={images.clinic}
      />
      <Section>
        <Container size="narrow">
          <Accordion items={faqs} />
        </Container>
      </Section>
      <JsonLd data={faqJsonLd(faqs)} />
      <CtaBanner
        title="Still have a question?"
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
        secondary={{ href: "/contact", label: "Contact us" }}
        className="pb-16 sm:pb-20"
      />
    </>
  );
}
