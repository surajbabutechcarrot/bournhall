import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  padded?: boolean;
};

export function Card({ children, className, padded = true }: CardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.75rem] bg-white shadow-lift",
        padded && "p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconBox({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid size-12 place-items-center rounded-full bg-brand-100 text-brand-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
