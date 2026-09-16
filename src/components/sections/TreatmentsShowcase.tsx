"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { TreatmentCard } from "@/components/cards/TreatmentCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { treatments } from "@/content/treatments";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

const DOT_COUNT = 3;

export function TreatmentsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const lenis = useLenis();

  const syncDots = useCallback((progress: number) => {
    setActive(Math.min(DOT_COUNT - 1, Math.round(progress * (DOT_COUNT - 1))));
  }, []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!section || !viewport || !track) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { desktop } = context.conditions ?? {};
          if (!desktop) return;

          const getDistance = () =>
            Math.max(0, track.scrollWidth - viewport.clientWidth);

          const getHeaderOffset = () => {
            const header = document.querySelector("header");
            if (header) return header.getBoundingClientRect().height;
            const fromCss = getComputedStyle(document.documentElement)
              .getPropertyValue("--header-h")
              .trim();
            const parsed = Number.parseFloat(fromCss);
            return Number.isFinite(parsed) ? parsed : 72;
          };

          const applyPinnedHeight = () => {
            const headerH = getHeaderOffset();
            section.style.setProperty("--header-h", `${headerH}px`);
            section.style.minHeight = `calc(100dvh - ${headerH}px)`;
            section.style.height = `calc(100dvh - ${headerH}px)`;
          };

          applyPinnedHeight();

          // Pin flush under the fixed header; section height = remaining viewport so flex can center.
          const tween = gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => `top top+=${getHeaderOffset()}`,
              end: () => `+=${Math.max(getDistance(), 1)}`,
              pin: true,
              scrub: 0.65,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onRefresh: applyPinnedHeight,
              onEnter: () => setPinned(true),
              onEnterBack: () => setPinned(true),
              onLeave: () => setPinned(false),
              onLeaveBack: () => setPinned(false),
              onUpdate: (self) => syncDots(self.progress),
            },
          });

          requestAnimationFrame(() => ScrollTrigger.refresh());

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
            gsap.set(track, { clearProps: "transform" });
            section.style.minHeight = "";
            section.style.height = "";
            setPinned(false);
          };
        },
      );

      return () => mm.revert();
    },
    { dependencies: [syncDots], revertOnUpdate: true },
  );

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    window.visualViewport?.addEventListener("resize", refresh);
    window.visualViewport?.addEventListener("scroll", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      window.visualViewport?.removeEventListener("resize", refresh);
      window.visualViewport?.removeEventListener("scroll", refresh);
    };
  }, []);

  const goToDot = (index: number) => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    if (!section || !viewport) return;

    const trigger = ScrollTrigger.getAll().find((item) => item.trigger === section);
    if (trigger && window.matchMedia("(min-width: 1024px)").matches) {
      const progress = DOT_COUNT <= 1 ? 0 : index / (DOT_COUNT - 1);
      const target = trigger.start + (trigger.end - trigger.start) * progress;
      if (lenis) {
        lenis.scrollTo(target, { duration: 1 });
      } else {
        window.scrollTo({ top: target, behavior: "smooth" });
      }
      return;
    }

    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    if (maxScroll <= 0) return;
    viewport.scrollTo({
      left: (index / (DOT_COUNT - 1)) * maxScroll,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className={cn(
        "flex w-full flex-col justify-center bg-white py-16 lg:py-6 xl:py-8 min-[1512px]:py-12",
        pinned && "z-20",
      )}
    >
      <div className="w-full">
        <Container>
          <div data-reveal className="mb-6 lg:mb-7 xl:mb-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
              <div className="min-w-0 flex-1">
                <h2 className="text-3xl font-medium tracking-tight text-ink-950 sm:text-4xl lg:text-[clamp(1.85rem,2.6vw,2.65rem)] lg:leading-[1.2] min-[1512px]:text-[46px] min-[1512px]:leading-[56px]">
                  Fertility Treatments at <span className="text-brand-500">Bourn Hall</span>
                </h2>
                <p className="mt-3 max-w-[580px] text-base leading-relaxed text-brand-500 sm:mt-4 sm:text-[17px]">
                  Explore personalised fertility treatments supported by experienced specialists and
                  advanced reproductive care.
                </p>
              </div>
              <Button
                href="/treatments"
                variant="outline"
                size="md"
                className="w-full shrink-0 justify-center rounded-full border-brand-500 text-brand-500 hover:border-brand-500 hover:bg-brand-50 sm:w-auto"
                icon={<ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />}
              >
                View all treatments
              </Button>
            </div>
          </div>
        </Container>

        <div className="treatments-rail-inset">
          <div
            ref={viewportRef}
            className="no-scrollbar overflow-x-auto overflow-y-hidden lg:overflow-x-hidden"
            onScroll={(event) => {
              if (window.matchMedia("(min-width: 1024px)").matches) return;
              const rail = event.currentTarget;
              const max = rail.scrollWidth - rail.clientWidth;
              if (max <= 0) return;
              syncDots(rail.scrollLeft / max);
            }}
          >
            <div
              ref={trackRef}
              role="group"
              aria-label="Fertility treatments"
              className="flex w-max gap-6 pb-2 pr-5 will-change-transform sm:gap-8 sm:pr-8"
            >
              {treatments.map((item) => (
                <TreatmentCard
                  key={item.slug}
                  href={`/treatments/${item.slug}`}
                  name={item.shortName}
                  summary={item.summary}
                  illustration={"illustration" in item.card ? item.card.illustration : undefined}
                  image={"image" in item.card ? item.card.image : undefined}
                  tone={item.card.tone}
                  className="w-[min(380px,82vw)] shrink-0 sm:w-[min(400px,46vw)] lg:w-[min(400px,32vw)] xl:w-[416px]"
                />
              ))}
            </div>
          </div>
        </div>

        <Container>
          <div className="mt-6 flex items-center justify-center gap-2.5 p-2.5 lg:mt-7 xl:mt-8">
            {Array.from({ length: DOT_COUNT }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1} of ${DOT_COUNT}`}
                aria-current={index === active}
                onClick={() => goToDot(index)}
                className={cn(
                  "h-[4px] w-[28px] rounded-full transition-colors duration-300",
                  index === active ? "bg-brand-500" : "bg-petal-200 hover:bg-petal-300",
                )}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
