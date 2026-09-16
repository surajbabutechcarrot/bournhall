import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

// The design frame is 1512px wide with 100px gutters, giving a 1312px content column.
const sizes = {
  narrow: "max-w-[912px]",
  default: "max-w-[1512px]",
  wide: "max-w-[1512px]",
} as const;

export function Container({
  as: Tag = "div",
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8 lg:px-[100px]", sizes[size], className)}>
      {children}
    </Tag>
  );
}
