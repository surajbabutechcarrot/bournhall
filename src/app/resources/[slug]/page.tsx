import { notFound } from "next/navigation";
import { HomeCta } from "@/components/sections/HomeCta";
import { DetailSection } from "@/components/ui/DetailSection";
import { PageHero } from "@/components/ui/PageHero";
import { resources } from "@/content/site-content";
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
        image={article.image}
      />
      <DetailSection>
        <p>{article.excerpt}</p>
        <p>
          Outcomes and next steps are always individual. A Bourn Hall specialist can review your
          history, tests and goals, then explain which options are clinically suitable for you.
        </p>
        <p>
          If you are preparing for a first visit, bring previous reports, a list of medications
          and the questions that matter most to you. We will take the time to answer them.
        </p>
      </DetailSection>
      <HomeCta />
    </>
  );
}
