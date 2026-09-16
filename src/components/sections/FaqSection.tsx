"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqCategories, faqHelp, faqs } from "@/content/site-content";
import { faqJsonLd } from "@/lib/jsonld";
import { cn } from "@/lib/cn";

export function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[linear-gradient(180deg,rgba(237,231,247,0.7)_0%,rgba(250,229,236,0.7)_100%)] section-y">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-[100px]">
          <div data-reveal className="w-full shrink-0 lg:w-[578px]">
            <h2 className="text-[2rem] leading-[1.23] font-medium text-ink-950 sm:text-[2.5rem] lg:text-[52px] lg:leading-[66px]">
              <span className="block">Frequently Asked</span>
              <span className="block text-brand-500">Questions</span>
            </h2>

            <p className="mt-6 max-w-[440px] text-lg leading-[28px] text-brand-600">
              Find answers to common questions about fertility treatments, appointments, costs and care.
            </p>

            <div className="mt-8 rounded-3xl bg-white/50 px-6 py-8 sm:px-8 sm:py-11">
              <Image
                src="/illustrations/icon-headset.svg"
                alt=""
                width={68}
                height={68}
                className="size-14 sm:size-[68px]"
              />
              <p className="mt-6 text-base leading-6 whitespace-pre-line text-ink-900">{faqHelp.body}</p>
              <Button
                href={faqHelp.cta.href}
                variant="outline"
                size="lg"
                className="mt-6 w-full sm:w-auto justify-center"
                icon={<ArrowRight aria-hidden className="size-4" strokeWidth={1.6} />}
              >
                {faqHelp.cta.label}
              </Button>
            </div>
          </div>

          <div data-reveal-stagger className="flex min-w-0 flex-1 flex-col gap-4">
            {faqCategories.map((category, index) => {
              const isOpen = index === active;

              return (
                <div
                  key={category.title}
                  className="rounded-[20px] bg-[#fffcfd] px-5 py-5 sm:px-7 sm:py-6 transition-shadow"
                >
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-8 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setActive(isOpen ? -1 : index)}
                  >
                    <span
                      className={cn(
                        "text-xl leading-[34px]",
                        isOpen
                          ? "font-semibold text-brand-500"
                          : "font-normal text-ink-950",
                      )}
                    >
                      {category.title}
                    </span>
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "size-[27px] shrink-0 text-brand-500 transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      strokeWidth={1.6}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-5 text-base leading-[28px] text-ink-950">{category.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <JsonLd data={faqJsonLd(faqs)} />
    </section>
  );
}
