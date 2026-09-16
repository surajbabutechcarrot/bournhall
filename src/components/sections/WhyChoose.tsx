"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChoose, whyChooseMedia } from "@/content/site-content";
import { cn } from "@/lib/cn";

export function WhyChoose() {
  const [active, setActive] = useState(0);

  return (
    <section id="why-bourn-hall" className="bg-mist-50 py-16 lg:py-[100px]">
      <Container>
        <SectionHeading
          className="mb-8"
          title={
            <>
              Why Choose <span className="text-brand-500">Bourn Hall?</span>
            </>
          }
          description={whyChooseMedia.description}
        />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-8">
          <div className="flex w-full flex-col justify-between rounded-3xl bg-white p-8 lg:w-[417px] lg:shrink-0 lg:min-h-[541px]">
            <ul className="flex flex-col gap-6">
              {whyChoose.map((item, index) => {
                const isOpen = index === active;

                return (
                  <li key={item.title} className="border-b border-ink-200 pb-6 last:border-b-0 last:pb-0">
                    <button
                      type="button"
                      className="w-full text-left"
                      aria-expanded={isOpen}
                      onClick={() => setActive(index)}
                    >
                      <h3
                        className={cn(
                          "text-xl leading-[30px] font-medium transition-colors",
                          isOpen ? "text-brand-500" : "text-ink-900",
                        )}
                      >
                        {item.title}
                      </h3>
                      <div
                        className={cn(
                          "grid transition-[grid-template-rows] duration-300 ease-out",
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="pt-3 text-base leading-6 text-ink-950">{item.body}</p>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            <Button
              href={whyChooseMedia.cta.href}
              size="lg"
              className="mt-6 self-start"
              icon={<ArrowRight aria-hidden className="size-5" strokeWidth={1.6} />}
            >
              {whyChooseMedia.cta.label}
            </Button>
          </div>

          <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-3xl lg:min-h-[541px]">
            <Image
              src={whyChooseMedia.image.src}
              alt={whyChooseMedia.image.alt}
              fill
              sizes="(min-width: 1024px) 864px, 100vw"
              className="object-cover"
            />

            <button
              type="button"
              className="absolute top-1/2 left-1/2 grid size-[78px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition-transform hover:scale-105"
              aria-label="Play video"
            >
              <Image
                src="/illustrations/play-button.svg"
                alt=""
                width={78}
                height={78}
                className="size-[78px]"
              />
            </button>

            <button
              type="button"
              className="absolute right-8 bottom-8 flex w-[224px] items-center gap-3 rounded-xl bg-[#fffcfd] p-4 text-left transition-transform hover:-translate-y-0.5"
              aria-label={whyChooseMedia.badge}
            >
              <Image
                src="/illustrations/play-chip.svg"
                alt=""
                width={36}
                height={36}
                className="size-9 shrink-0"
              />
              <span className="text-base leading-6 text-ink-950">{whyChooseMedia.badge}</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
