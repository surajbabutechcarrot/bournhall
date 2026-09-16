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
      data-reveal
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
            "section-title text-[2rem] leading-[1.23] font-medium text-ink-950 sm:text-[2.5rem] lg:text-[clamp(2rem,3.4vw,3.25rem)] lg:leading-[1.2]",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-3 text-base leading-relaxed text-brand-600 sm:mt-4 sm:text-lg sm:leading-[28px]",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
