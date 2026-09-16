"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type CarouselProps = {
  children: ReactNode;
  label: string;
  className?: string;
  railClassName?: string;
  dotsClassName?: string;
  showNext?: boolean;
  showPrev?: boolean;
};

/**
 * Scroll-snap rail with paging dots, as used by the treatment, specialist and
 * clinic rows in the design. Paging is derived from the visible width so the
 * same component works for any card size.
 */
export function Carousel({
  children,
  label,
  className,
  railClassName,
  dotsClassName,
  showNext = false,
  showPrev = false,
}: CarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(0);
  const [canNext, setCanNext] = useState(false);
  const [canPrev, setCanPrev] = useState(false);

  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    if (maxScroll <= 20) {
      setPages(1);
      setActive(0);
      setCanNext(false);
      setCanPrev(false);
      return;
    }
    const count = 3;
    setPages(count);
    const scrollRatio = Math.max(0, Math.min(1, rail.scrollLeft / maxScroll));
    setActive(Math.round(scrollRatio * (count - 1)));
    setCanNext(rail.scrollLeft < maxScroll - 8);
    setCanPrev(rail.scrollLeft > 8);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [measure]);

  const goTo = (index: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    if (pages <= 1 || maxScroll <= 0) return;
    const targetLeft = (index / (pages - 1)) * maxScroll;
    rail.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  const goPrev = () => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(":scope > *");
    const step = card ? card.offsetWidth + 32 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: -step, behavior: "smooth" });
  };

  const goNext = () => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(":scope > *");
    const step = card ? card.offsetWidth + 32 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: step, behavior: "smooth" });
  };

  const allowPrev = (showPrev || showNext) && canPrev;

  return (
    <div className={className}>
      <div className="relative">
        <div
          ref={railRef}
          role="group"
          aria-label={label}
          onScroll={measure}
          className={cn(
            "no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2",
            railClassName,
          )}
        >
          {children}
        </div>

        {allowPrev ? (
          <button
            type="button"
            aria-label={`Previous ${label}`}
            onClick={goPrev}
            className="absolute top-1/2 left-0 z-10 grid size-[50px] -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-[rgba(107,26,46,0.1)] text-ink-900 shadow-sm backdrop-blur-sm transition-colors hover:bg-[rgba(107,26,46,0.18)] lg:left-2"
          >
            <ChevronLeft aria-hidden className="size-4" strokeWidth={2} />
          </button>
        ) : null}

        {showNext && canNext ? (
          <button
            type="button"
            aria-label={`Next ${label}`}
            onClick={goNext}
            className="absolute top-1/2 right-0 z-10 grid size-[50px] -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-[rgba(107,26,46,0.1)] text-ink-900 shadow-sm backdrop-blur-sm transition-colors hover:bg-[rgba(107,26,46,0.18)] lg:right-2"
          >
            <ChevronRight aria-hidden className="size-4" strokeWidth={2} />
          </button>
        ) : null}
      </div>

      {pages > 1 ? (
        <div
          className={cn(
            "mt-10 flex items-center justify-center gap-2.5 p-2.5",
            dotsClassName,
          )}
        >
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1} of ${pages}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
              className={cn(
                "h-[4px] w-[28px] cursor-pointer rounded-full transition-colors duration-300",
                index === active ? "bg-brand-500" : "bg-petal-200 hover:bg-petal-300",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
