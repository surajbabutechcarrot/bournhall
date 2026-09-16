import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItem[];
  className?: string;
  /** Shared name makes the group behave as a single-open accordion. */
  groupName?: string;
  defaultOpenIndex?: number;
};

export function Accordion({
  items,
  className,
  groupName = "faq",
  defaultOpenIndex = 0,
}: AccordionProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <details
          key={item.question}
          name={groupName}
          open={index === defaultOpenIndex}
          className="group rounded-2xl bg-white shadow-card"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-ink-900 sm:px-6 sm:py-5">
            {item.question}
            <Plus
              aria-hidden
              className="size-5 shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="px-5 pb-5 text-sm leading-6 text-ink-500 sm:px-6">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
