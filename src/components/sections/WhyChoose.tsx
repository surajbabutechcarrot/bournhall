"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChoose, whyChooseMedia } from "@/content/site-content";
import { cn } from "@/lib/cn";

const AUTO_MS = 5500;

export function WhyChoose() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const autoplay = !paused && inView && !reduceMotion;

  const advance = () => {
    setActive((current) => (current + 1) % whyChoose.length);
  };

  return (
    <section id="why-bourn-hall" className="bg-mist-50 section-y overflow-x-clip">
      <Container className="min-w-0">
        <SectionHeading
          className="mb-8"
          title={
            <>
              Why Choose <span className="text-brand-500">Bourn Hall?</span>
            </>
          }
          description={whyChooseMedia.description}
        />

        <div data-reveal-stagger className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-6 xl:gap-8">
          <div
            ref={cardRef}
            className="flex w-full min-w-0 flex-col justify-between rounded-3xl bg-white p-5 sm:p-6 lg:w-[min(380px,34%)] lg:shrink-0 lg:p-7 xl:w-[min(417px,36%)] xl:p-8 lg:min-h-[min(480px,58dvh)]"
          >
            <ul className="flex flex-col">
              {whyChoose.map((item, index) => {
                const isOpen = index === active;
                const showRule = index < whyChoose.length - 1 || isOpen;

                return (
                  <li
                    key={item.title}
                    onMouseEnter={() => {
                      if (isOpen) setPaused(true);
                    }}
                    onMouseLeave={() => {
                      if (isOpen) setPaused(false);
                    }}
                    onFocusCapture={() => {
                      if (isOpen) setPaused(true);
                    }}
                    onBlurCapture={(event) => {
                      if (
                        isOpen &&
                        !event.currentTarget.contains(event.relatedTarget as Node | null)
                      ) {
                        setPaused(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      className={cn("w-full text-left", index === 0 ? "pb-4 lg:pb-5" : "py-4 lg:py-5")}
                      aria-expanded={isOpen}
                      onClick={() => setActive(index)}
                    >
                      <h3
                        className={cn(
                          "text-lg leading-snug font-medium transition-colors duration-300 cursor-pointer lg:text-xl lg:leading-[30px]",
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
                          <p className="pt-2 text-sm leading-6 text-ink-950 lg:pt-3 lg:text-base">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </button>

                    {showRule ? (
                      <div className="relative h-px w-full overflow-visible bg-ink-200" aria-hidden>
                        {isOpen && !reduceMotion ? (
                          <span
                            key={active}
                            className="absolute inset-y-0 h-[2px] bottom-1 left-0 origin-left bg-brand-500"
                            style={{
                              width: "100%",
                              transform: "scaleX(0)",
                              animation: `why-choose-progress ${AUTO_MS}ms linear forwards`,
                              animationPlayState: autoplay ? "running" : "paused",
                            }}
                            onAnimationEnd={advance}
                          />
                        ) : null}
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>

            <Button
              href={whyChooseMedia.cta.href}
              size="lg"
              className="mt-5 w-full justify-center sm:mt-6 sm:w-auto sm:self-start"
              icon={<ArrowRight aria-hidden className="size-5" strokeWidth={1.6} />}
            >
              {whyChooseMedia.cta.label}
            </Button>
          </div>

          <div className="relative min-h-[280px] min-w-0 flex-1 overflow-hidden rounded-3xl sm:min-h-[320px] lg:min-h-[min(480px,58dvh)]">
            <Image
              src={whyChooseMedia.image.src}
              alt={whyChooseMedia.image.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />

            <button
              type="button"
              className="absolute top-1/2 left-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition-transform hover:scale-105 sm:size-[78px]"
              aria-label="Play video"
            >
              <Image
                src="/illustrations/play-button.svg"
                alt=""
                width={78}
                height={78}
                className="size-14 sm:size-[78px]"
              />
            </button>

            <button
              type="button"
              className="group absolute right-3 bottom-3 flex cursor-pointer items-center rounded-xl bg-[#fffcfd] p-3 text-left shadow-sm transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6 sm:p-4"
              aria-label={whyChooseMedia.badge}
            >
              <Image
                src="/illustrations/play-chip.svg"
                alt=""
                width={36}
                height={36}
                className="size-8 shrink-0 sm:size-9"
              />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm leading-6 text-ink-950 opacity-0 transition-[max-width,opacity,margin] duration-300 ease-out group-hover:ml-3 group-hover:max-w-[12rem] group-hover:opacity-100 sm:text-base">
                {whyChooseMedia.badge}
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
