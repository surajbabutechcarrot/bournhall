"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItem[];
  className?: string;
  defaultOpenIndex?: number;
};

export function Accordion({
  items,
  className,
  defaultOpenIndex = 0,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="rounded-2xl bg-white shadow-card"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-ink-900 sm:px-6 sm:py-5"
            >
              {item.question}
              <Plus
                aria-hidden
                className={cn(
                  "size-5 shrink-0 text-ink-400 transition-transform duration-300 ease-out",
                  isOpen && "rotate-45",
                )}
              />
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "px-5 pb-5 text-sm leading-6 text-ink-500 transition-[opacity,transform] duration-300 ease-out sm:px-6",
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-1 opacity-0",
                  )}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
