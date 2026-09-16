import { InsightCard } from "@/components/cards/InsightCard";
import { Accent } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resources } from "@/content/site-content";

export function Insights() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title={
            <>
              Fertility Insights & <Accent>Resources</Accent>
            </>
          }
          description="Guides written by our specialists to help you prepare — clear, practical and free of jargon."
          action={
            <Button href="/resources" variant="outline" size="sm">
              View all
            </Button>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
