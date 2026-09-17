import { HomeCta } from "@/components/sections/HomeCta";
import { TreatmentsShowcase } from "@/components/sections/TreatmentsShowcase";
import { TreatmentPageBody } from "@/components/treatments/TreatmentPageBody";
import { PageHero } from "@/components/ui/PageHero";
import { getTreatmentPage } from "@/content/treatment-pages";
import { treatments } from "@/content/treatments";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatments.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getTreatmentPage(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.intro,
    path: `/treatments/${page.slug}`,
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const page = getTreatmentPage(slug);
  if (!page) notFound();

  return (
    <>
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        description={page.intro}
        crumbs={page.crumbs}
        image={page.image}
        titleClassName="font-medium text-ink-950 sm:text-[2.75rem] lg:text-[clamp(2.75rem,3.2vw,3.25rem)]"
        imageClassName="aspect-square max-h-[480px] rounded-[28px] lg:max-h-none"
        className="pb-12 sm:pb-16"
      />
      <TreatmentPageBody page={page} />
      <TreatmentsShowcase
        title="Other Fertility Treatments"
        description={null}
        excludeSlug={page.slug}
        pin={false}
      />
      <HomeCta />
    </>
  );
}
