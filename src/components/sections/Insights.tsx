import { ArrowRight } from "lucide-react";
import { InsightCard } from "@/components/cards/InsightCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resources } from "@/content/site-content";

const featuredResources = resources.slice(0, 3);

export function Insights() {
  return (
    <section className="bg-white section-y">
      <Container>
        <SectionHeading
          className="mb-8"
          title={
            <>
              Fertility Insights & <span className="text-brand-500">Resources</span>
            </>
          }
          description="Expert guidance to help you better understand fertility, treatments and reproductive health."
          action={
            <Button
              href="/resources"
              variant="outline"
              size="lg"
              icon={<ArrowRight aria-hidden className="size-4" strokeWidth={1.6} />}
            >
              View all Blogs
            </Button>
          }
        />

        <div data-reveal-stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((item) => (
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
    </section>
  );
}
