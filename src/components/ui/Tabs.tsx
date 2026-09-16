"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type TabsProps<T extends string> = {
  tabs: readonly T[];
  children: (active: T) => ReactNode;
  className?: string;
};

export function Tabs<T extends string>({ tabs, children, className }: TabsProps<T>) {
  const [active, setActive] = useState<T>(tabs[0]);

  return (
    <div className={className}>
      <div
        role="tablist"
        className="mb-8 flex gap-2 overflow-x-auto no-scrollbar"
      >
        {tabs.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-brand-600 text-white"
                  : "bg-brand-50 text-ink-600 hover:bg-brand-100",
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>
      {children(active)}
    </div>
  );
}
