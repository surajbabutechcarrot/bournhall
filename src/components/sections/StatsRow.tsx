"use client";

import { Fragment, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { stats } from "@/content/site-content";

gsap.registerPlugin(ScrollTrigger);

function parseStatValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)([^\d]*)$/);
  if (!match) return { prefix: "", target: 0, suffix: raw, decimals: 0, hasComma: false };
  const prefix = match[1] || "";
  const numRaw = match[2];
  const hasComma = numRaw.includes(",");
  const numStr = numRaw.replace(/,/g, "");
  const target = parseFloat(numStr) || 0;
  const suffix = match[3] || "";
  const decimals = numRaw.includes(".") ? numRaw.split(".")[1].length : 0;
  return { prefix, target, suffix, decimals, hasComma };
}

function formatValue(val: number, decimals: number, hasComma: boolean) {
  const rounded = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();
  if (hasComma) {
    const parts = rounded.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
  return rounded;
}

export function StatsRow() {
  const containerRef = useRef<HTMLDListElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const container = containerRef.current;
      if (!container) return;

      const items = container.querySelectorAll<HTMLElement>("[data-counter-target]");
      if (!items.length) return;

      // Initialize counter elements to 0
      items.forEach((el) => {
        const raw = el.getAttribute("data-counter-target") || el.textContent || "";
        const { prefix, suffix, decimals } = parseStatValue(raw);
        el.textContent = `${prefix}${decimals > 0 ? (0).toFixed(decimals) : "0"}${suffix}`;
      });

      ScrollTrigger.create({
        trigger: container,
        start: "top 88%",
        once: true,
        onEnter: () => {
          items.forEach((el, index) => {
            const raw = el.getAttribute("data-counter-target") || el.textContent || "";
            const { prefix, target, suffix, decimals, hasComma } = parseStatValue(raw);
            const state = { val: 0 };

            gsap.to(state, {
              val: target,
              duration: 2,
              delay: index * 0.1,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${prefix}${formatValue(state.val, decimals, hasComma)}${suffix}`;
              },
              onComplete: () => {
                el.textContent = raw;
              },
            });
          });
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: containerRef }
  );

  return (
    <dl
      ref={containerRef}
      className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5 lg:mt-12 lg:flex lg:items-center lg:justify-between lg:gap-0 xl:mt-[72px]"
    >
      {stats.map((stat, index) => (
        <Fragment key={stat.label}>
          {index > 0 ? (
            <span aria-hidden className="hidden h-10 w-px shrink-0 bg-ink-200 lg:block" />
          ) : null}
          <div className="flex items-center gap-3 rounded-2xl bg-brand-50/50 p-4 sm:flex-col sm:items-start sm:bg-transparent sm:p-0 lg:flex-row lg:items-center lg:gap-5 xl:gap-8">
            <dd
              data-counter-target={stat.value}
              className="tabular-nums text-3xl font-medium leading-none text-ink-950 sm:text-4xl lg:text-[clamp(2.25rem,3.4vw,3.375rem)]"
            >
              {stat.value}
            </dd>
            <dt className="text-sm font-medium leading-snug text-ink-700 sm:text-base lg:text-[clamp(0.95rem,1.4vw,1.375rem)] lg:leading-snug">
              {stat.label}
            </dt>
          </div>
        </Fragment>
      ))}
    </dl>
  );
}
