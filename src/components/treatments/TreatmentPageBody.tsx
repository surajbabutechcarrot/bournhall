import { Container } from "@/components/ui/Container";
import { NumberedSteps } from "@/components/ui/NumberedSteps";
import { Section } from "@/components/ui/Section";
import { TreatmentToc } from "@/components/treatments/TreatmentToc";
import type { TreatmentPageContent, TreatmentPageSection } from "@/content/treatment-pages";

function Prose({ children }: { children: string }) {
  return (
    <p className="mt-4 text-[15px] leading-7 text-ink-600 sm:text-base sm:leading-8">{children}</p>
  );
}

function SectionBlock({ section }: { section: TreatmentPageSection }) {
  return (
    <section id={section.id} className="scroll-mt-[calc(var(--header-h)+1.5rem)]">
      <h2 className="text-xl font-semibold text-brand-500 sm:text-2xl">{section.title}</h2>
      {section.subtitle ? (
        <p className="mt-2 text-base font-medium text-ink-800 sm:text-lg">{section.subtitle}</p>
      ) : null}

      {section.paragraphs?.map((paragraph) => (
        <Prose key={paragraph.slice(0, 48)}>{paragraph}</Prose>
      ))}

      {section.groups?.length ? (
        <div className="mt-6 space-y-5">
          {section.groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-semibold text-ink-900">{group.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-ink-600 sm:leading-8">{group.body}</p>
            </div>
          ))}
        </div>
      ) : null}

      {section.listIntro ? (
        <p className="mt-5 text-[15px] font-medium leading-7 text-ink-800 sm:text-base">
          {section.listIntro}
        </p>
      ) : null}

      {section.list?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-ink-600 sm:leading-8">
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {section.callouts?.map((callout) => (
        <Prose key={callout.slice(0, 48)}>{callout}</Prose>
      ))}

      {section.stepsIntro?.map((paragraph) => (
        <Prose key={paragraph.slice(0, 48)}>{paragraph}</Prose>
      ))}

      {section.steps?.length ? <NumberedSteps steps={section.steps} /> : null}
    </section>
  );
}

export function TreatmentPageBody({ page }: { page: TreatmentPageContent }) {
  const tocItems = page.sections.map((section) => ({
    id: section.id,
    label: section.navLabel,
  }));

  return (
    <Section tone="white" size="lg">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,340px)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:gap-16">
          <TreatmentToc items={tocItems} />
          <div className="min-w-0 space-y-12 sm:space-y-14">
            {page.sections.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
