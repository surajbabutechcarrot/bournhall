import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { resources } from "@/content/site-content";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Resources",
  description:
    "Guides and insights on IVF, egg freezing, success rates and preparing for fertility treatment.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Resources & fertility insights"
        description="Clear, practical guides from our specialists — written to help you prepare, not overwhelm you."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
        image={images.lab}
      />
      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {resources.map((item) => (
              <Link
                key={item.slug}
                href={`/resources/${item.slug}`}
                className="rounded-[1.75rem] bg-brand-50 p-6 transition-transform hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {item.category}
                </p>
                <h2 className="mt-3 text-lg font-semibold text-ink-800">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-500">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBanner
        title="Questions after reading?"
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
        className="pb-16 sm:pb-20"
      />
    </>
  );
}
