import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { resources } from "@/content/site-content";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = resources.find((item) => item.slug === slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/resources/${article.slug}`,
  });
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const article = resources.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: article.title },
        ]}
        image={images.lab}
      />
      <Section>
        <Container size="narrow" className="space-y-4 text-[15px] leading-7 text-ink-500">
          <p>{article.excerpt}</p>
          <p>
            Outcomes and next steps are always individual. A Bourn Hall specialist can review your
            history, tests and goals, then explain which options are clinically suitable for you.
          </p>
          <p>
            If you are preparing for a first visit, bring previous reports, a list of medications
            and the questions that matter most to you. We will take the time to answer them.
          </p>
        </Container>
      </Section>
      <CtaBanner
        title="Talk this through with a specialist"
        primary={{ href: "/book-appointment", label: "Book Appointment" }}
        className="pb-16 sm:pb-20"
      />
    </>
  );
}
