import { InsightCard } from "@/components/cards/InsightCard";
import { Container } from "@/components/ui/Container";
import { HomeCta } from "@/components/sections/HomeCta";
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
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((item) => (
              <InsightCard
                key={item.slug}
                href={`/resources/${item.slug}`}
                title={item.title}
                excerpt={item.excerpt}
                image={item.image}
              />
            ))}
          </div>
        </Container>
      </Section>
      <HomeCta />
    </>
  );
}
