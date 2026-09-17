"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";
import { aboutHistory } from "@/content/about";
import { cn } from "@/lib/cn";

export function AboutHistory() {
  const [active, setActive] = useState(0);
  const [solidHeight, setSolidHeight] = useState(12);
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const index = nodes.indexOf(visible[0].target as HTMLLIElement);
        if (index >= 0) setActive(index);
      },
      {
        root: null,
        rootMargin: "-28% 0px -48% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const activeItem = itemRefs.current[active];
    if (!activeItem) return;
    setSolidHeight(Math.max(12, activeItem.offsetTop + 4));
  }, [active]);

  return (
    <section className="bg-[#f7f4f6] section-y overflow-x-clip">
      <Container className="min-w-0">
        {/*
          Avoid aspect-ratio + max-height together — that shrinks width and leaves
          a huge gutter beside the timeline on 125%/150% viewports.
        */}
        <div className="grid min-w-0 items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6 xl:gap-8">
          <div
            data-reveal
            className="w-full lg:sticky lg:top-[calc(var(--header-h)+0.75rem)] lg:self-start"
          >
            <div className="about-history-media relative h-[min(420px,56vh)] w-full overflow-hidden rounded-[24px] sm:h-[min(500px,60vh)] sm:rounded-[28px] lg:h-[min(540px,68vh)]">
              <SiteImage
                src={aboutHistory.image.src}
                alt={aboutHistory.image.alt}
                sizes="(min-width: 1024px) 48vw, 100vw"
                noParallax
                className="absolute inset-0 rounded-none"
                imageClassName="object-[32%_12%]"
              />
              <div className="about-history-overlay absolute inset-x-4 bottom-4 rounded-2xl bg-brand-500 p-4 text-white sm:inset-x-5 sm:bottom-5 sm:p-5 lg:inset-x-6 lg:bottom-6 lg:max-w-[92%] lg:p-6">
                <h3 className="text-lg font-semibold leading-snug sm:text-xl lg:text-[clamp(1.2rem,1.7vw,1.65rem)] lg:leading-snug">
                  {aboutHistory.overlay.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-[15px] sm:leading-6">
                  {aboutHistory.overlay.body}
                </p>
              </div>
            </div>
          </div>

          <div data-reveal className="min-w-0 pt-1 lg:pt-0">
            <h2 className="section-title text-[1.75rem] font-medium leading-tight text-ink-950 sm:text-[2.1rem] lg:text-[clamp(1.85rem,2.6vw,2.35rem)]">
              {aboutHistory.title}
            </h2>

            <ol ref={listRef} className="relative mt-6 ml-1 sm:mt-7">
              <span
                aria-hidden
                className="absolute top-2 bottom-2 left-0 w-px border-l border-dashed border-ink-300"
              />
              <span
                aria-hidden
                className="absolute top-2 left-0 w-px bg-ink-800 transition-[height] duration-300 ease-out"
                style={{ height: solidHeight }}
              />

              {aboutHistory.milestones.map((item, index) => {
                const isActive = index === active;
                const isPast = index < active;

                return (
                  <li
                    key={item.year}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    className="relative pb-7 pl-7 last:pb-0 sm:pb-8 sm:pl-8"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute top-1.5 left-0 size-3 -translate-x-1/2 rounded-full border-2 transition-colors duration-300",
                        isActive
                          ? "border-brand-500 bg-brand-500"
                          : isPast
                            ? "border-ink-800 bg-ink-800"
                            : "border-ink-300 bg-[#f7f4f6]",
                      )}
                    />

                    <p
                      className={cn(
                        "text-base font-semibold leading-snug transition-colors duration-300 sm:text-[clamp(1.05rem,1.6vw,2rem)]",
                        isActive ? "text-brand-500" : "text-ink-950",
                      )}
                    >
                      {item.year}
                      <span className="font-semibold text-current"> – </span>
                      {item.title}
                    </p>
                    <p className="mt-1.5 max-w-prose text-sm leading-6 text-ink-500 sm:text-[15px] sm:leading-7">
                      {item.body}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
