"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CarouselProps = {
  children: ReactNode;
  label: string;
  className?: string;
  railClassName?: string;
};

/**
 * Scroll-snap rail with paging dots, as used by the treatment, specialist and
 * clinic rows in the design. Paging is derived from the visible width so the
 * same component works for any card size.
 */
export function Carousel({ children, label, className, railClassName }: CarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(0);

  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const total = Math.max(1, Math.round(rail.scrollWidth / rail.clientWidth));
    setPages(total);
    setActive(Math.round(rail.scrollLeft / rail.clientWidth));
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
    rail.scrollTo({ left: index * rail.clientWidth, behavior: "smooth" });
  };

  return (
    <div className={className}>
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

      {pages > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-2.5 p-2.5">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1} of ${pages}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
              className={cn(
                "h-[3.5px] w-[23px] rounded-full transition-colors duration-300",
                index === active ? "bg-brand-500" : "bg-brand-500/25 hover:bg-brand-500/50",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
