import { MessageCircleQuestion } from "lucide-react";
import { Accent } from "@/components/ui/Accent";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { faqHelp, faqs } from "@/content/site-content";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";

export function FaqSection() {
  return (
    <Section tone="gradientFaq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-[1.75rem] font-bold leading-[1.2] tracking-tight text-ink-900 sm:text-[2rem] lg:text-[2.375rem]">
              <span className="block">Frequently Asked</span>
              <Accent className="block">Questions</Accent>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-ink-500">
              Clear answers before your first visit. If you need more, our team is a call away.
            </p>

            <div className="mt-8 max-w-md rounded-3xl bg-white/70 p-6 sm:p-7">
              <span className="grid size-11 place-items-center rounded-full bg-brand-50 text-brand-500">
                <MessageCircleQuestion aria-hidden className="size-5" />
              </span>
              <p className="mt-4 text-[15px] font-bold text-ink-900">{faqHelp.title}</p>
              <p className="mt-1.5 text-sm leading-6 text-ink-500">{faqHelp.body}</p>
              <Button href={faqHelp.cta.href} variant="outlineBrand" size="sm" className="mt-5">
                {faqHelp.cta.label}
              </Button>
            </div>
          </div>

          <Accordion items={faqs.slice(0, 5)} groupName="home-faq" />
        </div>
      </Container>
      <JsonLd data={faqJsonLd(faqs)} />
    </Section>
  );
}
