import { ArrowRight } from "lucide-react";
import { DoctorsDirectory } from "@/components/sections/DoctorsDirectory";
import { Container } from "@/components/ui/Container";
import { HomeCta } from "@/components/sections/HomeCta";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { doctorsPageContent, specialists } from "@/content/specialists";
import { images } from "@/lib/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: doctorsPageContent.title,
  description: doctorsPageContent.description,
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        title={doctorsPageContent.title}
        description={doctorsPageContent.description}
        titleClassName="font-medium text-[2.5rem] sm:text-[3.25rem] lg:text-[3.5rem]"
        image={images.insightConsultation}
        imageClassName="aspect-[16/11] lg:aspect-[4/3]"
        imageMediaClassName="object-[center_20%]"
        actions={
          <>
            <Button href={doctorsPageContent.primaryCta.href} size="md">
              {doctorsPageContent.primaryCta.label}
            </Button>
            <Button
              href={doctorsPageContent.secondaryCta.href}
              variant="ghost"
              size="md"
              className="px-2 text-ink-900 hover:bg-transparent hover:text-brand-500"
              icon={<ArrowRight aria-hidden className="size-4" strokeWidth={1.6} />}
            >
              {doctorsPageContent.secondaryCta.label}
            </Button>
          </>
        }
      />
      <Section size="md">
        <Container>
          <DoctorsDirectory doctors={specialists} />
        </Container>
      </Section>
      <HomeCta />
    </>
  );
}
