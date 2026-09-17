"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type TocItem = {
  id: string;
  label: string;
};

function readHeaderOffset() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--header-h")
    .trim();
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed + 24 : 120;
}

export function TreatmentToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  /** Longer FAQs: title + short rules. Short lists: soft capsule active state. */
  const useListLayout = items.length > 3;
  const titleItem = useListLayout ? items[0] : null;
  const linkItems = useListLayout ? items.slice(1) : items;

  useEffect(() => {
    const syncFromScroll = () => {
      const offset = readHeaderOffset();
      let current = items[0]?.id ?? "";

      for (const item of items) {
        const node = document.getElementById(item.id);
        if (!node) continue;
        if (node.getBoundingClientRect().top - offset <= 0) {
          current = item.id;
        }
      }

      setActive(current);
    };

    const hashId = window.location.hash.replace(/^#/, "");
    if (hashId && items.some((item) => item.id === hashId)) {
      setActive(hashId);
    } else {
      syncFromScroll();
    }

    window.addEventListener("scroll", syncFromScroll, { passive: true });
    window.addEventListener("hashchange", syncFromScroll);
    return () => {
      window.removeEventListener("scroll", syncFromScroll);
      window.removeEventListener("hashchange", syncFromScroll);
    };
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      className="rounded-[3rem] bg-brand-500 px-7 py-9 text-white sm:px-8 sm:py-10 lg:sticky lg:top-[calc(var(--header-h)+1rem)] lg:self-start"
    >
      {titleItem ? (
        <a
          href={`#${titleItem.id}`}
          className="mb-2 block"
          aria-current={active === titleItem.id ? "location" : undefined}
          onClick={() => setActive(titleItem.id)}
        >
          <span className="block text-lg font-bold leading-snug tracking-tight">
            {titleItem.label.replace(/\?$/, "")}
          </span>
          <span
            className="mt-3.5 block h-[3px] w-[min(100%,11rem)] bg-white"
            aria-hidden
          />
        </a>
      ) : null}

      {useListLayout ? (
        <ul className="flex flex-col">
          {linkItems.map((item, index) => {
            const isActive = active === item.id;
            const isLast = index === linkItems.length - 1;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "block py-[1.125rem] text-[15px] leading-snug transition-colors sm:text-base sm:leading-6",
                    isActive
                      ? "font-semibold text-white"
                      : "font-normal text-white/95 hover:text-white",
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  {item.label}
                </a>
                {!isLast ? (
                  <span
                    className="block h-px w-[min(100%,11rem)] bg-white/50"
                    aria-hidden
                  />
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="flex flex-col gap-3 sm:gap-3.5">
          {linkItems.map((item) => {
            const isActive = active === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "block rounded-full px-5 py-3.5 text-[15px] leading-snug transition-all duration-200 sm:px-6 sm:py-4 sm:text-base sm:leading-6",
                    isActive
                      ? "bg-white/15 font-semibold text-white"
                      : "font-normal text-white hover:bg-white/10",
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
