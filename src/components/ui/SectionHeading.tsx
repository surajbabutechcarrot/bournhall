import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
  titleClassName,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4",
        centered && "items-center text-center",
        action && "sm:flex-row sm:items-end sm:justify-between sm:gap-8",
        className,
      )}
    >
      <div className={centered ? "max-w-[750px]" : "max-w-[760px]"}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-ink-500 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "text-[2rem] leading-[1.23] font-medium text-ink-950 sm:text-[2.5rem] lg:text-[52px] lg:leading-[64px]",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description ? (
          <p className={cn("mt-4 text-lg leading-[28px] text-brand-600", centered && "mx-auto")}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
